// WithDetail.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./PortFolioDetail.module.css";
import { DesignData } from "./DesignData";

export default function WithDetail() {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.title}>{DesignData.title}</p>
        <div className={styles.thumbnailLink}>
          <Link
            href={DesignData.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={DesignData.thumbnail}
              alt="With 대표 썸네일"
              width={600}
              height={350}
              className={styles.thumbnail}
            />
          </Link>
        </div>
      </div>
      {/* Details */}
      <div className={styles.container}>
        <p className={styles.title}>Details</p>
        <div className={styles.detailContainer}>
          <ul>
            <p className={styles.semiTitle}>🔎 대표 기능 </p>
            <div className={styles.detailList}>
              {DesignData.details.functions.map((fn) => (
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
            {DesignData.details.tools.map((tool) => (
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
              {DesignData.details.rnr.map((item) => (
                <li key={item}>
                  <p className={styles.semiTitle}>{item}</p>
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
                    {DesignData.details.build.motivation.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </div>
                </ul>
                <p className={styles.rnrIndex}>경쟁사 리서치</p>
                <ul>
                  <div className={styles.rnrDetail}>
                    {DesignData.details.build.competitors.map((comp) => (
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
              <p className={styles.semiTitle}>⛓️ flowChart & SiteMap</p>
              <ul>
                <div className={styles.rnrDetail}>
                  {DesignData.overviewImages
                    .find((o) => o.section.includes("flowChart")) // flowChart 섹션만
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
                </div>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      {/* Overview */}
      <div className={styles.bottomContainer}>
        <p className={styles.title}>Overview</p>
        {DesignData.overviewImages
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
    </div>
  );
}
