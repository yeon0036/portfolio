"use client";

import { useEffect, useRef, useState } from "react";
import PortfolioCarousel from "./components/PortfolioCarousel";
import styles from "./portfolio.module.css";
import PortfolioDetail from "./components/PortfolioDetail";
import DesignDetail from "./components/DesignDetail";
import MobileDetail from "./components/MobileDetail";
import type { PortfolioProps, DesignProps } from "./types";
import { portfolioData } from "./PortfolioData";

const tabs = ["ALL", "Work Experience", "Team Project"] as const;
type PortfolioTab = (typeof tabs)[number];

export default function PortfolioClient() {
    const [activeTab, setActiveTab] = useState<PortfolioTab>("ALL");
    const [selectedItem, setSelectedItem] = useState<PortfolioProps | DesignProps | null>(null);
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!selectedItem) return;
        const previousFocus = document.activeElement as HTMLElement | null;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setSelectedItem(null);
        };
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", onKeyDown);
            previousFocus?.focus();
        };
    }, [selectedItem]);

    const filteredItems =
        activeTab === "ALL"
            ? portfolioData
            : portfolioData.filter((item) => item.category === activeTab);

    const isDesign = (item: PortfolioProps | DesignProps): item is DesignProps => {
        return "details" in item && !!item.details;
    };

    const closeModal = () => setSelectedItem(null);

    return (
        <section id="portfolio" className={styles.about}>
            <p className={styles.title}>Portfolio</p>

            {/* 모바일 탭 */}
            <div className={styles.tabs}>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        aria-pressed={activeTab === tab}
                        className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
                    >
                        {tab === "ALL" ? "All" : tab}
                    </button>
                ))}
            </div>

            {/* 프로젝트 갤러리 */}
            <div className={styles.content}>
                <PortfolioCarousel
                    key={activeTab}
                    items={filteredItems}
                    onSelect={setSelectedItem}
                />
            </div>

            {selectedItem && (
                <div
                    className={styles.modalOverlay}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${selectedItem.title} 프로젝트 상세`}
                >
                    <button
                        type="button"
                        className={styles.modalBackdrop}
                        aria-label="닫기"
                        onClick={closeModal}
                    />
                    <div className={styles.modalContent}>
                        <button
                            ref={closeRef}
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
