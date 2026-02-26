#!/usr/bin/env python3
"""Embed JSONL chunks with OpenAI or local model and upload to Supabase (Postgres + pgvector).

Usage:
  python backend/scripts/embed_and_upload.py \
    --input ./chunks.jsonl \
    --provider openai \
    --model text-embedding-3-small \
    --batch-size 50 \
    --table rag_chunks
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
import urllib.request
import urllib.error
from typing import List, Dict, Any

import psycopg


def load_env():
    try:
        from dotenv import load_dotenv  # type: ignore
    except Exception:
        return

    # Try common env files
    for path in (".env", ".env.dev", "backend/.env", "backend/.env.dev"):
        if os.path.exists(path):
            load_dotenv(path)


def require_env(name: str) -> str:
    val = os.environ.get(name)
    if not val:
        raise RuntimeError(f"Missing required env var: {name}")
    return val


def sanitize_table(name: str) -> str:
    if not re.fullmatch(r"[a-zA-Z0-9_]+", name):
        raise ValueError("Invalid table name. Use only letters, numbers, underscore.")
    return name


def openai_embeddings(api_key: str, model: str, inputs: List[str]) -> List[List[float]]:
    url = "https://api.openai.com/v1/embeddings"
    payload = {
        "model": model,
        "input": inputs,
        "encoding_format": "float",
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        body = resp.read().decode("utf-8")
        if resp.status != 200:
            raise RuntimeError(f"OpenAI API error {resp.status}: {body}")
    parsed = json.loads(body)
    data_list = parsed.get("data", [])
    return [item["embedding"] for item in data_list]


def openai_embeddings_with_retry(
    api_key: str,
    model: str,
    inputs: List[str],
    max_retries: int = 6,
    base_delay: float = 1.5,
) -> List[List[float]]:
    for attempt in range(max_retries + 1):
        try:
            return openai_embeddings(api_key, model, inputs)
        except urllib.error.HTTPError as e:
            if e.code != 429 or attempt == max_retries:
                raise
            delay = base_delay * (2 ** attempt)
            time.sleep(delay)
    raise RuntimeError("Failed to get embeddings after retries.")


def read_jsonl(path: str) -> List[Dict[str, Any]]:
    rows: List[Dict[str, Any]] = []
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            rows.append(json.loads(line))
    return rows


def vector_to_str(vec: List[float]) -> str:
    return "[" + ",".join(f"{v:.10f}" for v in vec) + "]"


def _maybe_prefix_passages(model: str, inputs: List[str]) -> List[str]:
    if "e5" in model.lower():
        return [f"passage: {t}" for t in inputs]
    return inputs


def local_embeddings(model: str, inputs: List[str]) -> List[List[float]]:
    try:
        from sentence_transformers import SentenceTransformer  # type: ignore
    except Exception as e:
        raise RuntimeError(
            "Missing sentence-transformers. Install with: pip install sentence-transformers"
        ) from e

    embedder = SentenceTransformer(model)
    vectors = embedder.encode(_maybe_prefix_passages(model, inputs), normalize_embeddings=True)
    return [v.tolist() for v in vectors]


def main():
    parser = argparse.ArgumentParser(description="Embed JSONL and upload to Supabase")
    parser.add_argument("--input", required=True, help="Input JSONL path")
    parser.add_argument("--provider", choices=["openai", "local"], default="openai")
    parser.add_argument("--model", default="text-embedding-3-small")
    parser.add_argument("--batch-size", type=int, default=50)
    parser.add_argument("--table", default="rag_chunks")
    args = parser.parse_args()

    load_env()

    api_key = None
    if args.provider == "openai":
        api_key = require_env("OPENAI_API_KEY")
    table = sanitize_table(args.table)

    rows = read_jsonl(args.input)
    if not rows:
        print("No rows found in input JSONL.")
        return

    conn = psycopg.connect(
        host=require_env("POSTGRES_HOST"),
        port=require_env("POSTGRES_PORT"),
        dbname=require_env("POSTGRES_DB"),
        user=require_env("POSTGRES_USER"),
        password=require_env("POSTGRES_PASSWORD"),
    )

    insert_sql = f"""
        insert into public.{table} (
            id, source_path, doc_title, doc_type, lang, project,
            chunk_index, page_start, page_end, text, embedding
        ) values (
            %s, %s, %s, %s, %s, %s,
            %s, %s, %s, %s, %s::vector
        )
        on conflict (id) do update set
            source_path = excluded.source_path,
            doc_title = excluded.doc_title,
            doc_type = excluded.doc_type,
            lang = excluded.lang,
            project = excluded.project,
            chunk_index = excluded.chunk_index,
            page_start = excluded.page_start,
            page_end = excluded.page_end,
            text = excluded.text,
            embedding = excluded.embedding
    """

    total = 0
    with conn:
        with conn.cursor() as cur:
            for i in range(0, len(rows), args.batch_size):
                batch = rows[i : i + args.batch_size]
                inputs = [r["text"] for r in batch]
                if args.provider == "openai":
                    embeddings = openai_embeddings_with_retry(api_key, args.model, inputs)
                else:
                    embeddings = local_embeddings(args.model, inputs)

                if len(embeddings) != len(batch):
                    raise RuntimeError("Embedding count mismatch with inputs.")

                values = []
                for r, emb in zip(batch, embeddings):
                    values.append(
                        (
                            r.get("id"),
                            r.get("source_path"),
                            r.get("doc_title"),
                            r.get("doc_type"),
                            r.get("lang"),
                            r.get("project"),
                            r.get("chunk_index"),
                            r.get("page_start"),
                            r.get("page_end"),
                            r.get("text"),
                            vector_to_str(emb),
                        )
                    )
                cur.executemany(insert_sql, values)
                total += len(values)
                print(f"Uploaded {total}/{len(rows)}")

    print(f"Done. Uploaded {total} rows to {table}.")


if __name__ == "__main__":
    main()
