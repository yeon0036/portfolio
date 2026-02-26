"use client";

import { useParams } from "next/navigation";
import { usePortfolioItem } from "@/hooks/usePortfolio";
import type { PortfolioItem } from "@/hooks/usePortfolio";
import type { DesignProps } from "../types";
import PortfolioDetail from "../components/PortfolioDetail";
import DesignDetail from "../components/DesignDetail";
import MobileDetail from "../components/MobileDetail";

function isDesign(item: PortfolioItem): item is DesignProps {
    return "details" in item && !!item.details;
}

export default function PortfolioDetailPage() {
    const params = useParams<{ id: string }>();
    const id = params?.id ?? null;
    const { data: item, isLoading, isError } = usePortfolioItem(id);

    if (isLoading) return <div>로딩 중...</div>;
    if (isError || !item) return <div>Not found</div>;

    if (item.type === "Mobile") {
        return <MobileDetail id={item.id} />;
    }

    if (isDesign(item)) {
        return <DesignDetail data={item} />;
    }

    return <PortfolioDetail id={item.id} />;
}
