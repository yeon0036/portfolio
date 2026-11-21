"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { PortfolioItem } from "../PortfolioData";
import styles from "./PortfolioCarousel.module.css";

interface PortfolioCarouselProps {
    items: PortfolioItem[];
    onSelect: (item: PortfolioItem) => void;
}

export default function PortfolioCarousel({ items, onSelect }: PortfolioCarouselProps) {
    const trackId = useId();
    const trackRef = useRef<HTMLDivElement>(null);
    const [canPrevious, setCanPrevious] = useState(false);
    const [canNext, setCanNext] = useState(items.length > 1);

    const updateControls = () => {
        const track = trackRef.current;
        if (!track) return;
        setCanPrevious(track.scrollLeft > 2);
        setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 2);
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const observer = new ResizeObserver(updateControls);
        observer.observe(track);
        return () => observer.disconnect();
    }, []);

    const move = (direction: number) => {
        const track = trackRef.current;
        if (!track) return;
        const first = track.children[0] as HTMLElement | undefined;
        const second = track.children[1] as HTMLElement | undefined;
        const distance = first && second ? second.offsetLeft - first.offsetLeft : track.clientWidth;
        track.scrollBy({ left: direction * distance });
    };

    return (
        <div className={styles.carousel} role="region" aria-label="프로젝트 목록">
            <div className={styles.toolbar}>
                <p className={styles.hint}>{items.length}개 프로젝트 · 옆으로 넘겨 보세요</p>
                <div className={styles.controls}>
                    <button
                        type="button"
                        aria-label="이전 프로젝트"
                        aria-controls={trackId}
                        disabled={!canPrevious}
                        onClick={() => move(-1)}
                    >
                        <span aria-hidden="true">←</span>
                    </button>
                    <button
                        type="button"
                        aria-label="다음 프로젝트"
                        aria-controls={trackId}
                        disabled={!canNext}
                        onClick={() => move(1)}
                    >
                        <span aria-hidden="true">→</span>
                    </button>
                </div>
            </div>
            <div id={trackId} ref={trackRef} className={styles.track} onScroll={updateControls}>
                {items.map((item, index) => (
                    <button
                        key={item.id}
                        type="button"
                        className={styles.card}
                        aria-label={`${item.title} 상세 보기`}
                        onClick={() => onSelect(item)}
                    >
                        <span className={styles.imageWrap}>
                            <Image
                                src={item.thumbnail || item.image}
                                alt={`${item.title} 대표 화면`}
                                fill
                                sizes="(max-width: 700px) 85vw, (max-width: 1100px) 46vw, 32vw"
                                loading={index < 3 ? "eager" : "lazy"}
                                unoptimized={(item.thumbnail || item.image).endsWith(".webp")}
                                className={styles.image}
                            />
                        </span>
                        <span className={styles.caption}>
                            <strong className={styles.title}>{item.title}</strong>
                            <span className={styles.intro}>{item.intro}</span>
                            <span className={styles.detail} aria-hidden="true">자세히 보기 ↗</span>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
