import { notFound } from "next/navigation";
import { getPortfolioItem, portfolioData, type PortfolioItem } from "../PortfolioData";
import type { DesignProps } from "../types";
import PortfolioDetail from "../components/PortfolioDetail";
import DesignDetail from "../components/DesignDetail";
import MobileDetail from "../components/MobileDetail";

function isDesign(item: PortfolioItem): item is DesignProps {
    return "details" in item && !!item.details;
}

export function generateStaticParams() {
    return portfolioData.map((item) => ({ id: item.id }));
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const item = getPortfolioItem(id);

    if (!item) notFound();

    if (item.type === "Mobile") {
        return <MobileDetail id={item.id} />;
    }

    if (isDesign(item)) {
        return <DesignDetail data={item} />;
    }

    return <PortfolioDetail id={item.id} />;
}
