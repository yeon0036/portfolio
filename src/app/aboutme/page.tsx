"use client";

import Image from "next/image";
import styles from "./AboutMe.module.css";
import { useEffect, useRef, useState } from "react";

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
    <section
      ref={sectionRef}
      id="aboutme"
      style={{ minHeight: "100vh" }}
      className={`${styles.about} ${styles["fade-in"]} ${
        isVisible ? styles.show : ""
      }`}
    >
      <div className={styles.sectionLine}>
        <p className={styles.title}>About Me</p>
        <div className={styles.container}>
          <div>
            <Image
              src="/images/ProfilePhoto.jpeg"
              alt="profile image"
              width={240}
              height={240}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.intro}>
              <p className={styles.sectionTitle}>정혜연</p>
              <p>2000.03.06</p>
              <p>
                안녕하세요. <strong>익숙함과 새로움의 공존</strong>을 추구하는
                개발자 정혜연입니다.
              </p>
              <p>
                TypeScript와 React 기반의 프로젝트를 주로 다뤄왔고, <br />
                최근에는 상태 관리, 컴포넌트 재사용성, UIUX에 관심을 갖고 연습
                중입니다.
              </p>
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
                  <p>전공: 불어불문학과</p>
                  <p>부전공: 디지털미디어학과</p>
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
                <p className={styles.certificateTitle}>Design</p>
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
                <p className={styles.certificateTitle}>Language</p>
                <div className={styles.certificateContainer}>
                  <div>
                    <p className={styles.certificateTitle}>Delf B1</p>
                  </div>
                  <div>
                    <p>France Education International</p>
                    <p>2022.12.19</p>
                  </div>
                </div>
                <div className={styles.certificateContainer}>
                  <div>
                    <p className={styles.certificateTitle}>TOEIC</p>
                  </div>
                  <div>
                    <p>YBM</p>
                    <p>2019.02.02(임)</p>
                  </div>
                </div>
              </div>
            </div>
            {/* @TODO 경력 */}
          </div>
        </div>
      </div>
    </section>
  );
}
