import type { PortfolioProps, DesignProps } from "@/app/portfolio/types";

export type PortfolioItem = PortfolioProps | DesignProps;

const FALLBACK_API_BASE =
    typeof window !== "undefined" && window.location.hostname === "localhost"
        ? "http://localhost:8000"
        : "";

function getApiBase(): string {
    const env = process.env.NEXT_PUBLIC_API_URL?.trim();
    if (env) return env;
    // SSR: window 없음 → 백엔드 직접 호출용 기본값
    if (typeof window === "undefined") return "http://localhost:8000";
    // 브라우저에서 rewrite 사용 시 백엔드 302가 그대로 전달되면 리다이렉트 루프 발생.
    // 로컬 개발 시 백엔드로 직접 요청해 루프 방지.
    return FALLBACK_API_BASE;
}

export async function fetchPortfolioList(params?: {
    category?: string;
    type?: string;
}): Promise<PortfolioItem[]> {
    const base = getApiBase();
    const origin = typeof window !== "undefined" ? window.location.origin : undefined;
    const path = base ? `${base}/api/portfolio/` : "/api/portfolio/";
    const url = new URL(path, base ? undefined : origin);
    if (params?.category) url.searchParams.set("category", params.category);
    if (params?.type) url.searchParams.set("type", params.type);
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error("Failed to fetch portfolio list");
    return res.json();
}

export async function fetchPortfolioItem(id: string): Promise<PortfolioItem | null> {
    const base = getApiBase();
    const origin = typeof window !== "undefined" ? window.location.origin : undefined;
    const path = base
        ? `${base}/api/portfolio/${encodeURIComponent(id)}/`
        : `/api/portfolio/${encodeURIComponent(id)}/`;
    const url = new URL(path, base ? undefined : origin);
    const res = await fetch(url.toString());
    if (res.status === 404) return null;
    if (!res.ok) throw new Error("Failed to fetch portfolio item");
    return res.json();
}
