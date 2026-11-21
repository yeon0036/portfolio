"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Download } from "@phosphor-icons/react";
import ProfileLanyard from "@/components/ReactBits/ProfileLanyard/ProfileLanyard";
import styles from "./AboutMe.module.css";

type AboutEntry = {
    name: string;
    logo?: string;
    details?: string[];
    value?: string;
    dateTime?: string;
};

const groups: { title: string; titleId: string; entries: AboutEntry[] }[] = [
    {
        title: "Work Experience",
        titleId: "work-experience-title",
        entries: [
            {
                name: "Enki Whitehat",
                logo: "/logo/enki.png",
                details: ["Fullstack Developer & Design"],
                value: "2026.03 ~ 재직 중",
            },
            {
                name: "Conscience Partners",
                logo: "/logo/cp_logo.png",
                details: ["Frontend(&backend) Developer"],
                value: "2025.08 ~ 2026.01",
            },
        ],
    },
    {
        title: "Education",
        titleId: "education-title",
        entries: [
            {
                name: "아주대학교",
                logo: "/logo/AjouUniv.png",
                details: ["제 1 전공: 불어불문학과", "제 2 전공: 디지털미디어학과"],
                value: "2019.03 ~ 2025.02",
            },
            {
                name: "청주외국어고등학교",
                logo: "/logo/CFLHS.webp",
                details: ["전공: 프랑스어과"],
                value: "2016.03 ~ 2019.02",
            },
        ],
    },
    {
        title: "Certificates",
        titleId: "certificates-title",
        entries: [
            {
                name: "GTQ 1급",
                details: ["한국생산성본부"],
                value: "2023.09.15",
                dateTime: "2023-09-15",
            },
            {
                name: "GTQi 1급",
                details: ["한국생산성본부"],
                value: "2023.09.15",
                dateTime: "2023-09-15",
            },
        ],
    },
    {
        title: "Languages",
        titleId: "languages-title",
        entries: [
            {
                name: "French",
                value: "DELF B1",
                details: ["France Education International · 2022.12.19"],
            },
            { name: "English", value: "TOEIC 720", details: ["YBM · 만료"] },
            { name: "Japanese", value: "N3 수준" },
        ],
    },
];

export default function AboutMe() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        });
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                id="aboutme"
                aria-labelledby="aboutme-title"
                className={`${styles.about} ${isVisible ? styles.show : ""}`}
            >
                <h2 id="aboutme-title" className={styles.title}>
                    About Me
                </h2>
                <div className={styles.profileRow}>
                    <div className={styles.profileContainer}>
                        <ProfileLanyard />
                    </div>
                    <div className={styles.intro}>
                        <h3 className={styles.name}>정혜연</h3>
                        <p className={styles.englishName}>Jung HyeYeon</p>
                        <time className={styles.meta} dateTime="2000-03-06">
                            2000.03.06
                        </time>
                        <p className={styles.bio}>
                            <strong>프론트엔드와 백엔드</strong>를 함께 다루며, 기능 구현부터{" "}
                            <strong>화면의 흐름과 작은 디테일</strong>까지 다듬어 왔습니다. 사용자가
                            맥락을 놓치지 않고 편하게 이용할 수 있도록 구성하고, 실제 사용
                            환경에서도 <strong>안정적으로 동작하는 서비스</strong>를 만드는 데
                            집중합니다.
                        </p>
                    </div>
                </div>
                <div className={styles.details}>
                    {groups.map(({ title, titleId, entries }) => (
                        <section key={titleId} className={styles.group} aria-labelledby={titleId}>
                            <h3 id={titleId} className={styles.groupTitle}>
                                {title}
                            </h3>
                            <ul className={styles.entries} role="list">
                                {entries.map(({ name, logo, details, value, dateTime }) => (
                                    <li key={name} className={styles.entry}>
                                        {logo && (
                                            <Image
                                                className={styles.logo}
                                                src={logo}
                                                alt=""
                                                width={44}
                                                height={44}
                                                loading="eager"
                                                unoptimized
                                            />
                                        )}
                                        <div className={styles.entryContent}>
                                            <div className={styles.entryHeading}>
                                                <strong>{name}</strong>
                                                {dateTime ? (
                                                    <time
                                                        className={styles.entryValue}
                                                        dateTime={dateTime}
                                                    >
                                                        {value}
                                                    </time>
                                                ) : (
                                                    <span className={styles.entryValue}>
                                                        {value}
                                                    </span>
                                                )}
                                            </div>
                                            {details?.map((detail) => (
                                                <p key={detail} className={styles.meta}>
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            </section>
            <a
                className={styles.resumeFloating}
                href="/jung_hyeyeon_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                aria-label="Download resume"
            >
                <Download size={20} weight="bold" />
                <span className={styles.resumeFloatingText}>이력서 다운로드</span>
            </a>
        </>
    );
}
