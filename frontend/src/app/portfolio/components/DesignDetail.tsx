"use client";

import Image from "next/image";
import type { DesignProps } from "../types";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioSummary from "./PortfolioSummary";
import styles from "./PortFolioDetail.module.css";

interface DesignDetailProps {
    data: DesignProps;
}

export default function DesignDetail({ data }: DesignDetailProps) {
    const { functions, tools, rnr, build } = data.details;
    const diagrams = data.overviewImages.find((section) => section.section.includes("flowChart"));

    return (
        <article className={styles.project}>
            <PortfolioHeader {...data} />
            <PortfolioSummary
                features={functions.map(({ title, desc }) => ({ title, description: desc }))}
                tools={tools}
                rnr={rnr}
            />
            <section className={styles.container}>
                <h3 className={styles.semiTitle}>제작 배경</h3>
                <ul className={styles.rnrList}>
                    {build.motivation.map((line) => (
                        <li key={line}>{line}</li>
                    ))}
                </ul>
                <details className={styles.research}>
                    <summary>제작 당시 참고 서비스 비교</summary>
                    <div className={styles.featureList}>
                        {build.competitors.map((competitor) => (
                            <section key={competitor.name} className={styles.featureItem}>
                                <h4 className={styles.detailTitle}>{competitor.name}</h4>
                                <ul className={styles.rnrList}>
                                    {competitor.info.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                </details>
            </section>
            <section className={styles.container}>
                <h3 className={styles.semiTitle}>화면 둘러보기</h3>
                {data.overviewImages
                    .filter((section) => !section.section.includes("flowChart"))
                    .map((section) => (
                        <div key={section.section} className={styles.screenSection}>
                            <h4 className={styles.detailTitle}>{section.section}</h4>
                            {section.images.map((img) => (
                                <Image
                                    key={img.src}
                                    className={styles.overviewImg}
                                    src={img.src}
                                    alt={img.alt}
                                    width={960}
                                    height={640}
                                    sizes="(max-width: 768px) 90vw, 1000px"
                                />
                            ))}
                        </div>
                    ))}
            </section>
            {diagrams && (
                <section className={styles.container}>
                    <h3 className={styles.semiTitle}>사용자 흐름·사이트 구조</h3>
                    {diagrams.images.map((img) => (
                        <Image
                            key={img.src}
                            className={styles.overviewImg}
                            src={img.src}
                            alt={img.alt}
                            width={960}
                            height={640}
                            sizes="(max-width: 768px) 90vw, 1000px"
                        />
                    ))}
                </section>
            )}
        </article>
    );
}
