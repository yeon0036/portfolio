import Image from "next/image";
import type { PortfolioProps } from "../types";
import styles from "./PortFolioDetail.module.css";

type PortfolioSummaryProps = Pick<PortfolioProps, "features" | "tools" | "rnr">;

export default function PortfolioSummary({ features, tools, rnr }: PortfolioSummaryProps) {
    return (
        <>
            <section className={styles.container}>
                <h3 className={styles.semiTitle}>담당 역할</h3>
                <ul className={styles.rnrList}>
                    {rnr.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </section>
            <section className={styles.container}>
                <h3 className={styles.semiTitle}>주요 기능</h3>
                <ul className={styles.featureList}>
                    {features.map((feature) => (
                        <li key={feature.title} className={styles.featureItem}>
                            <h4 className={styles.detailTitle}>{feature.title}</h4>
                            <p className={styles.contentText}>{feature.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={styles.container}>
                <h3 className={styles.semiTitle}>사용 기술</h3>
                <ul className={styles.toolList}>
                    {tools.map((tool) => (
                        <li key={tool.alt} className={styles.toolItem}>
                            <Image
                                src={tool.src}
                                alt=""
                                width={24}
                                height={24}
                                className={styles.logoImg}
                            />
                            <span>{tool.alt}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
