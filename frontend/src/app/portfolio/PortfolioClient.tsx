"use client";

import { useState } from "react";
import Image from "next/image";
import { usePortfolio } from "@/hooks/usePortfolio";
import styles from "./portfolio.module.css";
import PortfolioDetail from "./components/PortfolioDetail";
import DesignDetail from "./components/DesignDetail";
import MobileDetail from "./components/MobileDetail";
import type { PortfolioProps, DesignProps } from "./types";
import type { PortfolioItem } from "@/hooks/usePortfolio";

type PortfolioClientProps = {
    initialData?: PortfolioItem[];
};

export default function PortfolioClient({ initialData }: PortfolioClientProps) {
    const [activeTab, setActiveTab] = useState<"ALL" | "Work Experience" | "Team Project">("ALL");
    const [selectedItem, setSelectedItem] = useState<PortfolioProps | DesignProps | null>(null);

    const queryOptions = initialData
        ? {
              initialData,
              refetchOnMount: false,
              refetchOnWindowFocus: false,
          }
        : undefined;

    const { data: portfolioData = [], isLoading, isError, error } = usePortfolio(
        undefined,
        queryOptions
    );

    const filteredItems =
        activeTab === "ALL"
            ? portfolioData
            : portfolioData.filter((item) => item.category === activeTab);

    if (isLoading) {
        return (
            <section id="portfolio" className={styles.about}>
                <p className={styles.title}>Portfolio</p>
                <p className={styles.loading}>로딩 중...</p>
            </section>
        );
    }

    if (isError) {
        const message = error instanceof Error ? error.message : String(error);
        const isConnectionError =
            message.includes("Failed to fetch") ||
            message.includes("NetworkError") ||
            message.includes("connection");
        return (
            <section id="portfolio" className={styles.about}>
                <p className={styles.title}>Portfolio</p>
                <p className={styles.loading}>
                    {isConnectionError
                        ? "백엔드에 연결할 수 없습니다."
                        : `목록을 불러오지 못했습니다. (${message})`}
                </p>
            </section>
        );
    }

    const isDesign = (item: PortfolioProps | DesignProps): item is DesignProps => {
        return "details" in item && !!item.details;
    };

    const closeModal = () => setSelectedItem(null);

    return (
        <section id="portfolio" className={styles.about}>
            <p className={styles.title}>Portfolio</p>

            {/* 모바일 탭 */}
            <div className={styles.tabs}>
                {["ALL", "Work Experience", "Team Project"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() =>
                            setActiveTab(tab as "ALL" | "Work Experience" | "Team Project")
                        }
                        className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
                    >
                        {tab === "ALL" ? "All" : tab}
                    </button>
                ))}
            </div>

            {/* card grid */}
            <div className={styles.content}>
                <div className={styles.cardGrid}>
                    {filteredItems.map((item) => {
                        const cardBody = (
                            <div className={styles.card}>
                                <div className={styles.cardImageWrap}>
                                    <Image
                                        src={item.image}
                                        alt={`${item.title} 대표 이미지`}
                                        width={600}
                                        height={400}
                                        className={styles.cardImage}
                                    />
                                </div>
                                <div className={styles.cardText}>
                                    <p className={styles.cardTitle}>{item.title}</p>
                                    <p className={styles.cardIntro}>{item.intro}</p>
                                </div>
                            </div>
                        );

                        return (
                            <button
                                key={item.id}
                                type="button"
                                aria-label={`${item.title} 상세 보기`}
                                className={styles.cardButton}
                                onClick={() => setSelectedItem(item)}
                            >
                                {cardBody}
                            </button>
                        );
                    })}
                </div>
            </div>

            {selectedItem && (
                <div className={styles.modalOverlay} role="dialog" aria-modal="true">
                    <button
                        type="button"
                        className={styles.modalBackdrop}
                        aria-label="닫기"
                        onClick={closeModal}
                    />
                    <div className={styles.modalContent}>
                        <button
                            type="button"
                            className={styles.modalClose}
                            aria-label="닫기"
                            onClick={closeModal}
                        >
                            ×
                        </button>
                        <div className={styles.modalBody}>
                            {selectedItem.type === "Mobile" ? (
                                <MobileDetail id={selectedItem.id} />
                            ) : isDesign(selectedItem) ? (
                                <DesignDetail data={selectedItem} />
                            ) : (
                                <PortfolioDetail id={selectedItem.id} />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
