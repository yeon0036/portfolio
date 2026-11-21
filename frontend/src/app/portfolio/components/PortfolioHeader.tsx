import Link from "next/link";
import styles from "./PortFolioDetail.module.css";

interface PortfolioHeaderProps {
    title: string;
    intro: string;
    category: string;
    github?: string;
}

function isExternalUrl(url: string): boolean {
    return /^https?:\/\//i.test(url.trim());
}

export default function PortfolioHeader({
    title,
    intro,
    category,
    github,
}: PortfolioHeaderProps) {
    return (
        <header className={styles.container}>
            <p className={styles.category}>{category}</p>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.intro}>{intro}</p>
            {github && isExternalUrl(github) && (
                <div className={styles.projectLinks}>
                    <Link
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                    >
                        GitHub 저장소
                    </Link>
                </div>
            )}
        </header>
    );
}
