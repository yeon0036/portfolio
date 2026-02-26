"use client";

import { useState } from "react";
import { usePortfolio } from "@/hooks/usePortfolio";
import Accordion from "./components/Accordion";
import styles from "./portfolio.module.css";

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState<"ALL" | "Work Experience" | "Team Project">("ALL");

    const { data: portfolioData = [], isLoading, isError, error } = usePortfolio();

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

            {/* accordion */}
            <div className={styles.content}>
                <Accordion key={activeTab} items={filteredItems} />
            </div>
        </section>
    );
}
