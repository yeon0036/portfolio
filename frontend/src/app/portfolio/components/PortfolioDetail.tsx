"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./PortFolioDetail.module.css";
import { usePortfolioItem } from "@/hooks/usePortfolio";
import { PortfolioProps } from "../types";
import { ArrowUpRight } from "@phosphor-icons/react";

function isExternalUrl(url: string): boolean {
    if (!url || typeof url !== "string") return false;
    const t = url.trim();
    return t.startsWith("http://") || t.startsWith("https://");
}

interface PortfolioDetailProps {
    id: string;
}

export default function PortfolioDetail({ id }: PortfolioDetailProps) {
    const { data: project, isLoading, isError } = usePortfolioItem(id);

    if (isLoading) return <div className={styles.loading}>로딩 중...</div>;
    if (isError || !project) return <div>Not found</div>;

    const p = project as PortfolioProps;
    const features = p.features ?? [];
    const tools = p.tools ?? [];
    const rnr = p.rnr ?? [];

    return (
        <div>
            <div className={styles.container}>
                {isExternalUrl(p.link) ? (
                    <Link
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.titleLink}
                    >
                        <p className={styles.title}>
                            {p.title} <ArrowUpRight size={60} weight="bold" />
                        </p>
                        <div className={styles.thumbnailLink}>
                            <Image
                                src={p.thumbnail}
                                alt={`${p.title} 대표 썸네일`}
                                width={600}
                                height={400}
                                className={styles.thumbnail}
                            />
                        </div>
                    </Link>
                ) : (
                    <>
                        <p className={styles.title}>{p.title}</p>
                        <div className={styles.thumbnailLink}>
                            <Image
                                src={p.thumbnail}
                                alt={`${p.title} 대표 썸네일`}
                                width={600}
                                height={400}
                                className={styles.thumbnail}
                            />
                        </div>
                    </>
                )}
            </div>
            <div className={styles.container}>
                <p className={styles.title}>Overview</p>
                {p.overviewImages.map((section) => (
                    <div key={section.section}>
                        <p className={styles.semiTitle}>{section.section}</p>
                        {section.images.map((img) => (
                            <Image
                                key={img.src}
                                className={styles.overviewImg}
                                src={img.src}
                                alt={img.alt}
                                width={600}
                                height={400}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className={styles.container}>
                <p className={styles.title}>Details</p>
                <div className={styles.detailContainer}>
                    <ul>
                        <p className={styles.semiTitle}>🔎 주요 기능</p>
                        <div className={styles.detailList}>
                            {features.map((feature) => (
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
                        {tools.map((tool) => (
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
                            {rnr.map((item) => (
                                <li key={item}>
                                    <p className={styles.detailTitle}>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {p.github && isExternalUrl(p.github) ? (
                <div className={styles.bottomContainer}>
                    <p className={styles.title}>Repository</p>
                    <Link href={p.github} target="_blank" rel="noopener noreferrer">
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
            ) : null}
        </div>
    );
}
