"use client";

import Image from "next/image";
import styles from "./portfolio.module.css";
import { useEffect, useRef, useState } from "react";

export default function Portfolio() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      // style={{ minHeight: "100vh" }}
      id="portfolio"
      className={`${styles.about} ${styles["fade-in"]} ${
        isVisible ? styles.show : ""
      }`}
    >
      <p className={styles.title}>Portfolio</p>
      <div className={styles.content}>
        <div className={styles.container}>
          <div>
            <div className={styles.portfolioCard}>
              <Image
                src="/images/Rolling.svg"
                alt="Rolling"
                width={250}
                height={250}
              />
              <p className={styles.portfolioTitle}>Rolling</p>
            </div>
          </div>
          <div>
            <div className={styles.portfolioCard}>
              <Image
                src="/images/WINEY.svg"
                alt="WINEY"
                width={250}
                height={250}
              />
              <p className={styles.portfolioTitle}>WINEY</p>
            </div>
          </div>
          <div>
            <div className={styles.portfolioCard}>
              <Image
                src="/images/GlobalNomad.svg"
                alt="GlobalNomad"
                width={250}
                height={250}
              />
              <p className={styles.portfolioTitle}>GlobalNomad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
