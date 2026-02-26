from __future__ import annotations

import json
import os
import re
import urllib.request
from typing import Any, Dict, List, Optional

import psycopg


_EMBEDDER = None


def _require_env(name: str) -> str:
    val = os.environ.get(name)
    if not val:
        raise RuntimeError(f"Missing required env var: {name}")
    return val


def _load_env():
    try:
        from dotenv import load_dotenv  # type: ignore
    except Exception:
        return

    for path in (".env", ".env.dev", "backend/.env", "backend/.env.dev"):
        if os.path.exists(path):
            load_dotenv(path)


def _get_embedder(model: str):
    global _EMBEDDER
    if _EMBEDDER is None:
        try:
            from sentence_transformers import SentenceTransformer  # type: ignore
        except Exception as e:
            raise RuntimeError(
                "Missing sentence-transformers. Install with: pip install sentence-transformers"
            ) from e
        _EMBEDDER = SentenceTransformer(model)
    return _EMBEDDER


def _connect_db():
    _load_env()
    return psycopg.connect(
        host=_require_env("POSTGRES_HOST"),
        port=_require_env("POSTGRES_PORT"),
        dbname=_require_env("POSTGRES_DB"),
        user=_require_env("POSTGRES_USER"),
        password=_require_env("POSTGRES_PASSWORD"),
    )


def _vector_to_str(vec: List[float]) -> str:
    return "[" + ",".join(f"{v:.10f}" for v in vec) + "]"


def _maybe_prefix_query(model: str, query: str) -> str:
    if "e5" in model.lower():
        return f"query: {query}"
    return query


def search_chunks(
    query: str,
    top_k: int = 3,
    doc_type: Optional[str] = None,
    model: str = "intfloat/multilingual-e5-small",
) -> List[Dict[str, Any]]:
    if not query.strip():
        return []

    embedder = _get_embedder(model)
    query_vec = embedder.encode([_maybe_prefix_query(model, query)], normalize_embeddings=True)[0].tolist()

    results: List[Dict[str, Any]] = []
    with _connect_db() as conn:
        with conn.cursor() as cur:
            cur.execute(
                "select * from public.match_rag_chunks(%s::vector, %s, %s)",
                (_vector_to_str(query_vec), top_k, doc_type),
            )
            cols = [desc.name for desc in cur.description]
            for row in cur.fetchall():
                results.append(dict(zip(cols, row)))

    return results


def _ollama_generate(
    prompt: str,
    model: str,
    base_url: str = "http://localhost:11434",
) -> str:
    url = f"{base_url.rstrip('/')}/api/generate"
    payload = {
        "model": model,
        "prompt": prompt,
        "stream": False,
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=120) as resp:
        body = resp.read().decode("utf-8")
        if resp.status != 200:
            raise RuntimeError(f"Ollama API error {resp.status}: {body}")
    parsed = json.loads(body)
    return parsed.get("response", "").strip()


def generate_answer(
    query: str,
    chunks: List[Dict[str, Any]],
    model: Optional[str] = None,
    base_url: Optional[str] = None,
) -> str:
    if not chunks:
        return "관련 근거를 찾지 못했습니다. 질문을 더 구체적으로 알려주세요."

    model_name = model or os.environ.get("OLLAMA_MODEL") or "llama3.1"
    ollama_url = base_url or os.environ.get("OLLAMA_BASE_URL") or "http://localhost:11434"

    context_parts = []
    for c in chunks:
        title = c.get("doc_title", "")
        project = c.get("project") or ""
        label = f"{title}"
        if project and project != title:
            label = f"{title} / {project}"
        text = c.get("text", "")
        if len(text) > 1200:
            text = text[:1200] + "..."
        context_parts.append(f"[{label}]\\n{text}")

    context = "\\n\\n".join(context_parts)

    prompt = (
        "너는 채용 담당자/면접관을 위한 보조 AI다.\\n"
        "다음 근거(Context)에서만 답변하고, 근거가 없으면 모른다고 말해라.\\n"
        "과장하거나 추측하지 마라. 답변은 4~7문장 이내로 간결하게 써라.\\n\\n"
        f"질문: {query}\\n\\n"
        f"Context:\\n{context}\\n\\n"
        "답변:"
    )

    return _ollama_generate(prompt=prompt, model=model_name, base_url=ollama_url)
