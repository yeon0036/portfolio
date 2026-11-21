"use client";

import Image from "next/image";
import { getPortfolioItem } from "../PortfolioData";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioSummary from "./PortfolioSummary";
import styles from "./PortFolioDetail.module.css";

interface PortfolioDetailProps {
    id: string;
}

export default function PortfolioDetail({ id }: PortfolioDetailProps) {
    const project = getPortfolioItem(id);
    if (!project || "details" in project) return <p>프로젝트를 찾을 수 없습니다.</p>;

    return (
        <article className={styles.project}>
            <PortfolioHeader {...project} />
            <PortfolioSummary {...project} />
            <section className={styles.container}>
                <h3 className={styles.semiTitle}>화면 둘러보기</h3>
                {project.previewNote && <p className={styles.previewNote}>{project.previewNote}</p>}
                {project.overviewImages.map((section, sectionIndex) => (
                    <div key={section.section} className={styles.screenSection}>
                        <h4 className={styles.detailTitle}>{section.section}</h4>
                        {section.images.map((img, imageIndex) => (
                            <Image
                                key={img.src}
                                className={styles.overviewImg}
                                src={img.src}
                                alt={img.alt}
                                width={960}
                                height={640}
                                sizes="(max-width: 768px) 90vw, 1000px"
                                loading={sectionIndex === 0 && imageIndex === 0 ? "eager" : "lazy"}
                            />
                        ))}
                    </div>
                ))}
            </section>
        </article>
    );
}
