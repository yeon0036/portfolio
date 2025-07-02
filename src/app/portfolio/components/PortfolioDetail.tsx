import Image from "next/image";
import Link from "next/link";
import styles from "./PortFolioDetail.module.css";
import { portfolioData } from "../PortfolioData";
import { PortfolioProps } from "../types";

interface PortfolioDetailProps {
  id: string;
}

export default function PortfolioDetail({ id }: PortfolioDetailProps) {
  const project = portfolioData.find((p) => p.id === id) as
    | PortfolioProps
    | undefined;
  if (!project) return <div>Not found</div>;

  return (
    <div>
      <div className={styles.container}>
        <p className={styles.title}>{project.title}</p>
        <div className={styles.thumbnailLink}>
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={project.thumbnail}
              alt={`${project.title} 대표 썸네일`}
              width={600}
              height={400}
              className={styles.thumbnail}
            />
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.title}>Overview</p>
        {project.overviewImages.map((section) => (
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
                  <p className={styles.detailTItle}>{item}</p>
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
