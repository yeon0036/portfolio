-- RAG schema for local embeddings (384-dim models like multilingual-e5-small)

create extension if not exists vector;

create table if not exists public.rag_chunks (
  id text primary key,
  source_path text not null,
  doc_title text not null,
  doc_type text not null,
  lang text not null,
  project text,
  chunk_index integer not null,
  page_start integer,
  page_end integer,
  text text not null,
  embedding vector(384) not null,
  created_at timestamptz default now()
);

create index if not exists rag_chunks_doc_type_idx on public.rag_chunks (doc_type);
create index if not exists rag_chunks_project_idx on public.rag_chunks (project);

create index if not exists rag_chunks_embedding_idx
  on public.rag_chunks
  using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

create or replace function public.match_rag_chunks(
  query_embedding vector(384),
  match_count int default 5,
  doc_type_filter text default null
)
returns table (
  id text,
  source_path text,
  doc_title text,
  doc_type text,
  lang text,
  project text,
  chunk_index integer,
  page_start integer,
  page_end integer,
  text text,
  similarity float
)
language sql
stable
as $$
  select
    rc.id,
    rc.source_path,
    rc.doc_title,
    rc.doc_type,
    rc.lang,
    rc.project,
    rc.chunk_index,
    rc.page_start,
    rc.page_end,
    rc.text,
    1 - (rc.embedding <=> query_embedding) as similarity
  from public.rag_chunks rc
  where (doc_type_filter is null or rc.doc_type = doc_type_filter)
  order by rc.embedding <=> query_embedding
  limit match_count;
$$;

