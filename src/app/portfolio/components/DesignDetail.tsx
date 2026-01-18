"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import styles from "./PortFolioDetail.module.css";
import { DesignProps } from "../types";

interface DesignDetailProps {
    data: DesignProps;
}

export default function DesignDetail({ data }: DesignDetailProps) {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <p className={styles.title}>
                        {data.title} <ArrowUpRight size={60} weight="bold" />
                    </p>
                </div>
                <div className={styles.thumbnailLink}>
                    <Link
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.titleLink}
                    >
                        <Image
                            src={data.image}
                            alt={`${data.title} 대표 썸네일`}
                            width={600}
                            height={350}
                            className={styles.thumbnail}
                        />
                    </Link>
                </div>
            </div>
            {/* Overview */}
            <div className={styles.bottomContainer}>
                <p className={styles.title}>Overview</p>
                {data.overviewImages
                    .filter((o) => !o.section.includes("flowChart"))
                    .map((section) => (
                        <div key={section.section}>
                            <p className={styles.semiTitle}>{section.section}</p>
                            {section.images.map((img) => (
                                <Image
                                    key={img.src}
                                    className={styles.overviewImgDesign}
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
                        <p className={styles.semiTitle}>🔎 대표 기능 </p>
                        <div className={styles.detailList}>
                            {data.details.functions.map((fn) => (
                                <li key={fn.title}>
                                    <p className={styles.detailTItle}>{fn.title}</p>
                                    <p className={styles.contentText}>{fn.desc}</p>
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
                <div className={styles.detailContainer}>
                    <p className={styles.semiTitle}>🔗 언어 및 툴 </p>
                    <div className={styles.detailList}>
                        {data.details.tools.map((tool) => (
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
                            {data.details.rnr.map((item) => (
                                <li key={item}>
                                    <p className={styles.detailTitle}>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* build */}
                <div className={styles.detailContainer}>
                    <p className={styles.semiTitle}>📆 Build</p>
                    <div className={styles.detailList}>
                        <ul className={styles.rnrList}>
                            <li>
                                <p className={styles.semiTitle}>제작동기</p>
                                <ul>
                                    <div className={styles.rnrDetail}>
                                        {data.details.build.motivation.map((line, i) => (
                                            <li key={i}>{line}</li>
                                        ))}
                                    </div>
                                </ul>
                                <p className={styles.rnrIndex}>경쟁사 리서치</p>
                                <ul>
                                    <div className={styles.rnrDetail}>
                                        {data.details.build.competitors.map((comp) => (
                                            <li key={comp.name}>
                                                {comp.name}
                                                <ul>
                                                    {comp.info.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.detailContainer}>
                    <p className={styles.semiTitle}>⛓️FlowChart & SiteMap</p>
                    <div className={styles.detailList}>
                        <ul className={styles.rnrList}>
                            {data.overviewImages
                                .find((o) => o.section.includes("flowChart"))
                                ?.images.map((img) => (
                                    <Image
                                        key={img.src}
                                        className={styles.overviewImgDesign}
                                        src={img.src}
                                        alt={img.alt}
                                        width={600}
                                        height={350}
                                    />
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
