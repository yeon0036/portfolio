"use client";

import Image from "next/image";
import PortfolioModal from "./components/PortfolioModal";
import Rolling from "./components/PortfolioDetail/Rolling";
import Whyne from "./components/PortfolioDetail/WHYNE";
import GlobalNomad from "./components/PortfolioDetail/GlobalNomad";
import styles from "./portfolio.module.css";
import { useEffect, useRef, useState } from "react";

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState<null | string>(null);

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
          <div onClick={() => setIsOpen("Rolling")}>
            <div className={styles.portfolioCard}>
              <Image
                src="/images/Rolling/Rolling.svg"
                alt="Rolling"
                width={250}
                height={250}
              />
              <p className={styles.portfolioTitle}>Rolling</p>
            </div>
          </div>
          <div onClick={() => setIsOpen("Whyne")}>
            <div className={styles.portfolioCard}>
              <Image
                src="/images/WHYNE/WHYNE.svg"
                alt="WHYNE"
                width={250}
                height={250}
              />
              <p className={styles.portfolioTitle}>WHYNE</p>
            </div>
          </div>
          <div onClick={() => setIsOpen("GlobalNomad")}>
            <div className={styles.portfolioCard}>
              <Image
                src="/images/GlobalNomad/GlobalNomad.svg"
                alt="GlobalNomad"
                width={250}
                height={250}
              />
              <p className={styles.portfolioTitle}>GlobalNomad</p>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <PortfolioModal onClose={() => setIsOpen(null)}>
          {isOpen === "Rolling" && <Rolling />}
          {isOpen === "Whyne" && <Whyne />}
          {isOpen === "GlobalNomad" && <GlobalNomad />}
        </PortfolioModal>
      )}
    </section>
  );
}
