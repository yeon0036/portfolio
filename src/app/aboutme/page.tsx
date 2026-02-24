"use client";

import Image from "next/image";
import styles from "./AboutMe.module.css";
import { useEffect, useRef, useState } from "react";
import { Download } from "@phosphor-icons/react";

export default function AboutMe() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                id="aboutme"
                style={{ minHeight: "50vh" }}
                className={`${styles.about} ${styles["fade-in"]} ${isVisible ? styles.show : ""}`}
            >
                <div className={styles.sectionLine}>
                    <p className={styles.title}>About Me</p>
                    <div className={styles.container}>
                        <div className={styles.profileContainer}>
                            <Image
                                src="/images/ProfilePhoto2.jpeg"
                                alt="profile image"
                                width={280}
                                height={280}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.intro}>
                                <p className={styles.sectionTitle}>
                                    정혜연 <span className={styles.semiTitle}>Jung HyeYeon</span>
                                </p>
                                <p>2000.03.06</p>
                                <p>
                                    <strong>익숙함과 새로움의 공존을 추구</strong>하는 개발자
                                    정혜연입니다.
                                </p>
                                <p>
                                    TypeScript와 React 기반의 프로젝트를 주로 다뤄왔으며,
                                    <br />
                                    단순한 구현을 넘어 사용 환경과 제약을 고려한 설계와 지속적으로
                                    개선 가능한 구조에 관심을 두고 있습니다.
                                </p>
                            </div>
                            <div className={styles.education}>
                                <p className={styles.sectionTitle}>Work Experience</p>
                                <div className={styles.eduContainer}>
                                    <Image
                                        className={styles.experienceLogo}
                                        src="/logo/cp_logo.png"
                                        alt="Conscience Partners"
                                        width={100}
                                        height={100}
                                    />
                                    <div className={styles.eduContent}>
                                        <p className={styles.schoolName}>Conscience Partners</p>
                                        <p>2025.08 ~ 2026.01</p>
                                        <p>Frontend(&backend) Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.education}>
                                <p className={styles.sectionTitle}>Education</p>
                                <div className={styles.eduContainer}>
                                    <Image
                                        className={styles.eduLogo}
                                        src="/logo/AjouUniv.png"
                                        alt="Ajou University"
                                        width={100}
                                        height={100}
                                    />
                                    <div className={styles.eduContent}>
                                        <p className={styles.schoolName}>아주대학교</p>
                                        <p>2019.03 ~ 2025.02</p>
                                        <p>제 1 전공: 불어불문학과</p>
                                        <p>제 2 전공: 디지털미디어학과</p>
                                    </div>
                                </div>
                                <div className={styles.eduContainer}>
                                    <Image
                                        className={styles.eduLogo}
                                        src="/logo/CFLHS.webp"
                                        alt="Cheongju Foreign Language High School"
                                        width={100}
                                        height={100}
                                    />
                                    <div className={styles.eduContent}>
                                        <p className={styles.schoolName}>청주외국어고등학교</p>
                                        <p>2016.03 ~ 2019.02</p>
                                        <p>전공: 프랑스어과</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.certificate}>
                                <p className={styles.sectionTitle}>Certificate</p>
                                <div className={styles.certificateGroup}>
                                    <p className={styles.certificateTitle}>Skills</p>
                                    <div className={styles.certificateContainer}>
                                        <div>
                                            <p className={styles.certificateTitle}>GTQ 1급</p>
                                        </div>
                                        <div>
                                            <p>한국생산성본부</p>
                                            <p>2023.09.15</p>
                                        </div>
                                    </div>
                                    <div className={styles.certificateContainer}>
                                        <div>
                                            <p className={styles.certificateTitle}>GTQi 1급</p>
                                        </div>
                                        <div>
                                            <p>한국생산성본부</p>
                                            <p>2023.09.15</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.certificateGroup}>
                                    <p className={styles.certificateTitle}>Languages</p>
                                    <div className={styles.certificateContainer}>
                                        <div>
                                            <p className={styles.certificateTitle}>French</p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Delf B1</strong>
                                            </p>
                                            <p>France Education International</p>
                                            <p>2022.12.19</p>
                                        </div>
                                    </div>
                                    <div className={styles.certificateContainer}>
                                        <div>
                                            <p className={styles.certificateTitle}>English</p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>TOEIC 720</strong>
                                            </p>
                                            <p>YBM</p>
                                            <p>만료됨.</p>
                                        </div>
                                    </div>
                                    <div className={styles.certificateContainer}>
                                        <div>
                                            <p className={styles.certificateTitle}>Japanese</p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>일상회화 수준</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* @TODO 경력 */}
                        </div>
                    </div>
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
