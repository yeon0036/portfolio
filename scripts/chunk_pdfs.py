#!/usr/bin/env python3
"""Chunk PDFs (and text/json) into JSONL for RAG.

Usage:
  python scripts/chunk_pdfs.py --input ./docs --output ./chunks.jsonl \
    --max-tokens 600 --overlap-tokens 120 --doc-type portfolio

Dependencies:
  - pymupdf (recommended) or pdfplumber for PDFs
  - tiktoken (recommended for accurate token counts)
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from dataclasses import dataclass
from typing import Iterable, List, Tuple, Dict, Any


@dataclass
class Paragraph:
    text: str
    page: int


def _try_import_pdf_reader():
    try:
        import fitz  # type: ignore
        return "pymupdf", fitz
    except Exception:
        try:
            import pdfplumber  # type: ignore
            return "pdfplumber", pdfplumber
        except Exception:
            return None, None


def _try_import_tokenizer():
    try:
        import tiktoken  # type: ignore
        return tiktoken
    except Exception:
        return None


def normalize_text(text: str) -> str:
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    # Normalize excessive blank lines
    text = re.sub(r"\n[ \t]*\n[ \t]*\n+", "\n\n", text)
    # Trim trailing spaces on lines
    text = "\n".join([ln.strip() for ln in text.split("\n")])
    return text.strip()


def split_paragraphs(text: str) -> List[str]:
    if not text:
        return []
    parts = re.split(r"\n\s*\n+", text)
    return [p.strip() for p in parts if p.strip()]


def extract_text_file(path: str) -> List[Paragraph]:
    with open(path, "r", encoding="utf-8") as f:
        text = normalize_text(f.read())
    paragraphs = [Paragraph(text=p, page=1) for p in split_paragraphs(text)]
    return paragraphs


def _format_portfolio_item(item: Dict[str, Any]) -> str:
    lines: List[str] = []
    title = item.get("title") or item.get("id") or ""
    if title:
        lines.append(f"프로젝트: {title}")
    if item.get("intro"):
        lines.append(f"소개: {item['intro']}")
    if item.get("category"):
        lines.append(f"카테고리: {item['category']}")
    if item.get("type"):
        lines.append(f"타입: {item['type']}")
    if item.get("link"):
        lines.append(f"링크: {item['link']}")
    if item.get("github"):
        lines.append(f"깃허브: {item['github']}")

    rnr = item.get("rnr") or []
    if isinstance(rnr, list) and rnr:
        lines.append("역할/책임:")
        for r in rnr:
            if isinstance(r, str) and r.strip():
                lines.append(f"- {r.strip()}")

    features = item.get("features") or []
    if isinstance(features, list) and features:
        lines.append("기능:")
        for f in features:
            if isinstance(f, dict):
                title = f.get("title", "").strip()
                desc = f.get("description", "").strip()
                if title and desc:
                    lines.append(f"- {title}: {desc}")
                elif title:
                    lines.append(f"- {title}")
                elif desc:
                    lines.append(f"- {desc}")

    return normalize_text("\n".join(lines))


def extract_json(path: str) -> List[Tuple[str, Dict[str, Any]]]:
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)

    items: List[Tuple[str, Dict[str, Any]]] = []
    if isinstance(data, list):
        for item in data:
            if isinstance(item, dict):
                text = _format_portfolio_item(item)
                if text:
                    meta = {
                        "project": item.get("title") or item.get("id") or "",
                        "source": path,
                    }
                    items.append((text, meta))
    elif isinstance(data, dict):
        text = normalize_text(json.dumps(data, ensure_ascii=False, indent=2))
        if text:
            items.append((text, {"project": "", "source": path}))

    return items


def split_sentences(text: str) -> List[str]:
    # Best-effort sentence split for mixed ko/en text.
    parts = re.split(r"(?<=[.!?])\s+", text)
    parts = [p.strip() for p in parts if p.strip()]
    if parts:
        return parts
    return [text]


def split_by_chars(text: str, max_chars: int) -> List[str]:
    if len(text) <= max_chars:
        return [text]
    out = []
    start = 0
    while start < len(text):
        end = min(len(text), start + max_chars)
        out.append(text[start:end].strip())
        start = end
    return [p for p in out if p]


def token_counter():
    tiktoken = _try_import_tokenizer()
    if not tiktoken:
        return None
    enc = tiktoken.get_encoding("cl100k_base")
    return enc


def count_tokens(text: str, enc) -> int:
    if enc is None:
        # Fallback: rough estimate for mixed languages
        ws = len(text.split())
        approx = max(ws, len(text) // 4)
        return max(1, approx)
    return len(enc.encode(text))


def extract_pdf_paragraphs(path: str) -> List[Paragraph]:
    kind, lib = _try_import_pdf_reader()
    if not kind:
        raise RuntimeError(
            "Missing PDF reader. Install pymupdf (recommended) or pdfplumber."
        )

    paragraphs: List[Paragraph] = []
    if kind == "pymupdf":
        doc = lib.open(path)
        for i, page in enumerate(doc, start=1):
            text = page.get_text("text") or ""
            text = normalize_text(text)
            for para in split_paragraphs(text):
                paragraphs.append(Paragraph(text=para, page=i))
        doc.close()
    else:
        with lib.open(path) as doc:
            for i, page in enumerate(doc.pages, start=1):
                text = page.extract_text() or ""
                text = normalize_text(text)
                for para in split_paragraphs(text):
                    paragraphs.append(Paragraph(text=para, page=i))

    return paragraphs


def expand_long_paragraphs(paragraphs: List[Paragraph], max_tokens: int, enc) -> List[Paragraph]:
    expanded: List[Paragraph] = []
    max_chars = max_tokens * 4

    for p in paragraphs:
        tok = count_tokens(p.text, enc)
        if tok <= max_tokens:
            expanded.append(p)
            continue

        # Try sentence split first
        sentences = split_sentences(p.text)
        if len(sentences) > 1:
            for s in sentences:
                s = s.strip()
                if not s:
                    continue
                if count_tokens(s, enc) <= max_tokens:
                    expanded.append(Paragraph(text=s, page=p.page))
                else:
                    for piece in split_by_chars(s, max_chars=max_chars):
                        expanded.append(Paragraph(text=piece, page=p.page))
        else:
            for piece in split_by_chars(p.text, max_chars=max_chars):
                expanded.append(Paragraph(text=piece, page=p.page))

    return expanded


def tail_paragraphs(paragraphs: List[Paragraph], overlap_tokens: int, enc) -> List[Paragraph]:
    if overlap_tokens <= 0 or not paragraphs:
        return []
    acc: List[Paragraph] = []
    total = 0
    for p in reversed(paragraphs):
        total += count_tokens(p.text, enc)
        acc.append(p)
        if total >= overlap_tokens:
            break
    return list(reversed(acc))


def chunk_paragraphs(
    paragraphs: List[Paragraph],
    max_tokens: int,
    overlap_tokens: int,
    enc,
) -> List[Tuple[str, int, int]]:
    chunks: List[Tuple[str, int, int]] = []
    current: List[Paragraph] = []

    def flush():
        if not current:
            return
        text = "\n\n".join([p.text for p in current]).strip()
        page_start = min(p.page for p in current)
        page_end = max(p.page for p in current)
        chunks.append((text, page_start, page_end))

    for p in paragraphs:
        if not current:
            current.append(p)
            continue

        candidate_text = "\n\n".join([c.text for c in current] + [p.text])
        if count_tokens(candidate_text, enc) <= max_tokens:
            current.append(p)
            continue

        flush()
        overlap = tail_paragraphs(current, overlap_tokens, enc)
        current = overlap + [p]

    flush()
    return chunks


def iter_paths(input_path: str) -> Iterable[str]:
    if os.path.isdir(input_path):
        for root, _, files in os.walk(input_path):
            for f in files:
                if f.lower().endswith((".pdf", ".txt", ".md", ".json")):
                    yield os.path.join(root, f)
    else:
        yield input_path


def main():
    parser = argparse.ArgumentParser(description="Chunk PDFs into JSONL for RAG")
    parser.add_argument("--input", required=True, help="PDF file or directory")
    parser.add_argument("--output", required=True, help="Output JSONL path")
    parser.add_argument("--max-tokens", type=int, default=300)
    parser.add_argument("--overlap-tokens", type=int, default=80)
    parser.add_argument("--doc-type", default="portfolio")
    parser.add_argument("--lang", default="ko")
    args = parser.parse_args()

    enc = token_counter()
    out_dir = os.path.dirname(os.path.abspath(args.output))
    if out_dir and not os.path.exists(out_dir):
        os.makedirs(out_dir, exist_ok=True)

    total_chunks = 0
    with open(args.output, "w", encoding="utf-8") as out_f:
        for path in iter_paths(args.input):
            title = os.path.splitext(os.path.basename(path))[0]
            ext = os.path.splitext(path)[1].lower()
            try:
                if ext == ".pdf":
                    paragraphs = extract_pdf_paragraphs(path)
                elif ext in (".txt", ".md"):
                    paragraphs = extract_text_file(path)
                elif ext == ".json":
                    items = extract_json(path)
                    for item_idx, (text, meta) in enumerate(items, start=1):
                        paragraphs = [Paragraph(text=text, page=1)]
                        paragraphs = expand_long_paragraphs(paragraphs, args.max_tokens, enc)
                        chunks = chunk_paragraphs(
                            paragraphs, args.max_tokens, args.overlap_tokens, enc
                        )
                        for idx, (chunk_text, page_start, page_end) in enumerate(chunks, start=1):
                            item = {
                                "id": f"{title}-{item_idx}-{idx}",
                                "source_path": path,
                                "doc_title": title,
                                "doc_type": args.doc_type,
                                "lang": args.lang,
                                "project": meta.get("project", ""),
                                "chunk_index": idx,
                                "page_start": page_start,
                                "page_end": page_end,
                                "text": chunk_text,
                            }
                            out_f.write(json.dumps(item, ensure_ascii=False) + "\n")
                            total_chunks += 1
                    continue
                else:
                    print(f"[skip] {path}: unsupported file type", file=sys.stderr)
                    continue
            except Exception as e:
                print(f"[skip] {path}: {e}", file=sys.stderr)
                continue

            paragraphs = expand_long_paragraphs(paragraphs, args.max_tokens, enc)
            chunks = chunk_paragraphs(paragraphs, args.max_tokens, args.overlap_tokens, enc)

            for idx, (text, page_start, page_end) in enumerate(chunks, start=1):
                item = {
                    "id": f"{title}-{idx}",
                    "source_path": path,
                    "doc_title": title,
                    "doc_type": args.doc_type,
                    "lang": args.lang,
                    "chunk_index": idx,
                    "page_start": page_start,
                    "page_end": page_end,
                    "text": text,
                }
                out_f.write(json.dumps(item, ensure_ascii=False) + "\n")
                total_chunks += 1

    print(f"Wrote {total_chunks} chunks to {args.output}")


if __name__ == "__main__":
    main()
