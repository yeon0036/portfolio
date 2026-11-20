"use client";

import { useEffect, useRef, useState } from "react";
import AccordionGallery from "@/components/ReactBits/AccordionGallery/AccordionGallery";
import styles from "./portfolio.module.css";
import PortfolioDetail from "./components/PortfolioDetail";
import DesignDetail from "./components/DesignDetail";
import MobileDetail from "./components/MobileDetail";
import type { PortfolioProps, DesignProps } from "./types";
import { portfolioData } from "./PortfolioData";

export default function PortfolioClient() {
    const [activeTab, setActiveTab] = useState<"ALL" | "Work Experience" | "Team Project">("ALL");
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

    const [vertical, setVertical] = useState(false);
    useEffect(() => {
        const media = window.matchMedia("(max-width: 700px)");
        const update = () => setVertical(media.matches);
        update();
        media.addEventListener("change", update);
        return () => media.removeEventListener("change", update);
    }, []);

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
                <AccordionGallery
                    key={`${activeTab}-${vertical}`}
                    items={filteredItems.map((item) => ({
                        image: item.thumbnail || item.image,
                        label: item.title,
                        description: item.intro,
                        alt: `${item.title} 대표 이미지`,
                    }))}
                    defaultIndex={0}
                    accentColor="var(--Blue)"
                    overlayColor="var(--Black)"
                    textColor="var(--White)"
                    orientation={vertical ? "vertical" : "horizontal"}
                    height={vertical ? 490 : 430}
                    expandRatio={0.58}
                    tilt={5}
                    onItemClick={(index) => setSelectedItem(filteredItems[index])}
                />
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
