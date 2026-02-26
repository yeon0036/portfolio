"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPortfolioList, fetchPortfolioItem } from "@/lib/api";
import type { PortfolioItem } from "@/lib/api";

export function usePortfolio(params?: { category?: string; type?: string }) {
    return useQuery({
        queryKey: ["portfolio", "list", params?.category, params?.type],
        queryFn: () => fetchPortfolioList(params),
    });
}

export function usePortfolioItem(id: string | null) {
    return useQuery({
        queryKey: ["portfolio", "item", id],
        queryFn: () => fetchPortfolioItem(id!),
        enabled: !!id,
    });
}

export type { PortfolioItem };
