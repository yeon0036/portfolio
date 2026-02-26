"use client";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { fetchPortfolioList, fetchPortfolioItem } from "@/lib/api";
import type { PortfolioItem } from "@/lib/api";

export function usePortfolio(
    params?: { category?: string; type?: string },
    options?: UseQueryOptions<PortfolioItem[], Error>
) {
    return useQuery({
        queryKey: ["portfolio", "list", params?.category, params?.type],
        queryFn: () => fetchPortfolioList(params),
        ...(options ?? {}),
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
