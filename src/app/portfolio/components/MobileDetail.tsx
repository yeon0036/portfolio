"use client";

import Image from "next/image";
import { portfolioData } from "../PortfolioData";
import { PortfolioProps } from "../types";
import Link from "next/link";
import styles from "./PortFolioDetail.module.css";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface MobileDetailProps {
    id: string;
}

export default function MobileDetail({ id }: MobileDetailProps) {
    const [isMobile, setIsMobile] = useState(false);
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const project = portfolioData.find((p) => p.id === id) as PortfolioProps | undefined;

    if (!project) return <div>Not found</div>;

    // overviewImages → 이미지 배열로 평탄화
    const overviewImages = project.overviewImages.flatMap((section) => section.images);

    useEffect(() => {
        setIsMounted(true);
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const update = () => setIsMobile(mediaQuery.matches);
        update();
        mediaQuery.addEventListener("change", update);
        return () => mediaQuery.removeEventListener("change", update);
    }, []);

    useEffect(() => {
        if (!isCarouselOpen) return;
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isCarouselOpen]);

    const openCarousel = (index: number) => {
        if (!isMobile) return;
        setActiveIndex(index);
        setIsCarouselOpen(true);
    };

    return (
        <div>
            <div className={styles.container}>
                <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.titleLink}
                >
                    <p className={styles.title}>
                        {project.title} <ArrowUpRight size={60} weight="bold" />
                    </p>
                    <div className={styles.thumbnailLink}>
                        <Image
                            src={project.thumbnail}
                            alt={`${project.title} 대표 썸네일`}
                            width={600}
                            height={400}
                            className={styles.thumbnail}
                        />
                    </div>
                </Link>
            </div>
            <div className={styles.container}>
                <p className={styles.title}>Overview</p>
                <div className={styles.overviewScroll}>
                    {overviewImages.map((img, index) => (
                        <div
                            key={img.src}
                            className={styles.overviewItem}
                            onClick={() => openCarousel(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                    openCarousel(index);
                                }
                            }}
                        >
                            <Image
                                className={styles.overviewImg}
                                src={img.src}
                                alt={img.alt}
                                width={360}
                                height={720}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {isCarouselOpen && isMobile && isMounted
                ? createPortal(
                      <div
                          className={styles.carouselOverlay}
                          onClick={() => setIsCarouselOpen(false)}
                      >
                          <div
                              className={styles.carouselContent}
                              onClick={(event) => event.stopPropagation()}
                          >
                              <button
                                  type="button"
                                  className={styles.carouselClose}
                                  onClick={() => setIsCarouselOpen(false)}
                                  aria-label="Close carousel"
                              >
                                  ✕
                              </button>
                              <Carousel
                                  selectedItem={activeIndex}
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
                                              className={styles.carouselImg}
                                          />
                                      </div>
                                  ))}
                              </Carousel>
                          </div>
                      </div>,
                      document.body
                  )
                : null}
            <div className={styles.container}>
                <p className={styles.title}>Details</p>
                <div className={styles.detailContainer}>
                    <ul>
                        <p className={styles.semiTitle}>🔎 주요 기능</p>
                        <div className={styles.detailList}>
                            {project.features.map((feature) => (
                                <li key={feature.title}>
                                    <p className={styles.detailTItle}>{feature.title}</p>
                                    <p className={styles.contentText}>{feature.description}</p>
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
                <div className={styles.detailContainer}>
                    <p className={styles.semiTitle}>🔗 사용 기술 스택</p>
                    <div className={styles.detailList}>
                        {project.tools.map((tool) => (
                            <Image
                                key={tool.alt}
                                className={styles.logoImg}
                                src={tool.src}
                                alt={tool.alt}
                                width={80}
                                height={80}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.detailContainer}>
                    <p className={styles.semiTitle}>📄 R & R</p>
                    <div className={styles.detailList}>
                        <ul className={styles.rnrList}>
                            {project.rnr.map((item) => (
                                <li key={item}>
                                    <p className={styles.detailTitle}>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {project.github ? (
                <div className={styles.bottomContainer}>
                    <p className={styles.title}>Repository</p>
                    <Link href={project.github} target="_blank">
                        <div className={styles.githubLogo}>
                            <Image
                                src="/logo/github.png"
                                alt="github repository"
                                width={100}
                                height={100}
                                className={styles.githubLogo}
                            />
                        </div>
                    </Link>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
