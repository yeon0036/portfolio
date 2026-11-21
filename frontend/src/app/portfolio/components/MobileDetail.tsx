"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getPortfolioItem } from "../PortfolioData";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioSummary from "./PortfolioSummary";
import styles from "./PortFolioDetail.module.css";

interface MobileDetailProps {
    id: string;
}

export default function MobileDetail({ id }: MobileDetailProps) {
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const closeRef = useRef<HTMLButtonElement>(null);
    const project = getPortfolioItem(id);

    useEffect(() => {
        if (!isCarouselOpen) return;
        const previousFocus = document.activeElement as HTMLElement | null;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.stopImmediatePropagation();
                setIsCarouselOpen(false);
            }
        };
        document.addEventListener("keydown", onKeyDown, true);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", onKeyDown, true);
            previousFocus?.focus();
        };
    }, [isCarouselOpen]);

    if (!project || "details" in project) return <p>프로젝트를 찾을 수 없습니다.</p>;

    const overviewImages = project.overviewImages.flatMap((section) =>
        section.images.map((img) => ({ ...img, section: section.section }))
    );

    return (
        <article className={styles.project}>
            <PortfolioHeader {...project} />
            <PortfolioSummary {...project} />
            <section className={styles.container}>
                <h3 className={styles.semiTitle}>화면 둘러보기</h3>
                <p className={styles.contentText}>
                    좌우로 넘겨 보고, 이미지를 선택하면 확대할 수 있습니다.
                </p>
                <div className={styles.overviewScroll}>
                    {overviewImages.map((img, index) => (
                        <figure key={img.src} className={styles.overviewItem}>
                            <figcaption className={styles.screenCaption}>{img.section}</figcaption>
                            <button
                                type="button"
                                className={styles.overviewButton}
                                aria-label={`${img.section} 화면 확대`}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setIsCarouselOpen(true);
                                }}
                            >
                                <Image
                                    className={styles.mobileOverviewImg}
                                    src={img.src}
                                    alt={img.alt}
                                    width={360}
                                    height={720}
                                    sizes="(max-width: 768px) 200px, 240px"
                                />
                            </button>
                        </figure>
                    ))}
                </div>
            </section>
            {isCarouselOpen
                ? createPortal(
                      <div className={styles.carouselOverlay}>
                          <button
                              type="button"
                              className={styles.carouselBackdrop}
                              aria-label="확대 화면 닫기"
                              onClick={() => setIsCarouselOpen(false)}
                          />
                          <div
                              className={styles.carouselContent}
                              role="dialog"
                              aria-modal="true"
                              aria-label="프로젝트 화면 확대"
                          >
                              <button
                                  ref={closeRef}
                                  type="button"
                                  className={styles.carouselClose}
                                  onClick={() => setIsCarouselOpen(false)}
                                  aria-label="확대 화면 닫기"
                              >
                                  ×
                              </button>
                              <Carousel
                                  selectedItem={activeIndex}
                                  onChange={setActiveIndex}
                                  showThumbs={false}
                                  showStatus={false}
                                  infiniteLoop
                                  emulateTouch
                                  useKeyboardArrows
                              >
                                  {overviewImages.map((img) => (
                                      <div key={img.src} className={styles.carouselItem}>
                                          <Image
                                              src={img.src}
                                              alt={img.alt}
                                              width={720}
                                              height={1280}
                                              sizes="(max-width: 768px) 92vw, 480px"
                                              className={styles.carouselImg}
                                          />
                                      </div>
                                  ))}
                              </Carousel>
                              <p className={styles.screenCaption}>
                                  {overviewImages[activeIndex].section}
                              </p>
                          </div>
                      </div>,
                      document.body
                  )
                : null}
        </article>
    );
}
