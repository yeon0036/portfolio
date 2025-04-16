"use client";

import Image from "next/image";
import type { JSX } from "react";
import { useEffect, useRef, useState } from "react";
import PortfolioModal from "./components/PortfolioModal";
import Rolling from "./components/PortfolioDetail/Rolling";
import Whyne from "./components/PortfolioDetail/WHYNE";
import GlobalNomad from "./components/PortfolioDetail/GlobalNomad";
import styles from "./portfolio.module.css";
import { portfolioItems } from "./PortfolioData";

const componentMap: Record<string, JSX.Element> = {
  Rolling: <Rolling />,
  Whyne: <Whyne />,
  GlobalNomad: <GlobalNomad />,
};

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState<null | string>(null);
  const [activeTab, setActiveTab] = useState<
    "ALL" | "JavaScript" | "TypeScript"
  >("ALL");

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
      // style={{ minHeight: "50vh" }}
      id="portfolio"
      className={`${styles.about} ${styles["fade-in"]} ${
        isVisible ? styles.show : ""
      }`}
    >
      <p className={styles.title}>Portfolio</p>

      {/* 모바일 탭 */}
      <div className={styles.tabs}>
        {["ALL", "JavaScript", "TypeScript"].map((tab) => (
          <button
            key={tab}
            onClick={() =>
              setActiveTab(tab as "ALL" | "JavaScript" | "TypeScript")
            }
            className={`${styles.tab} ${
              activeTab === tab ? styles.active : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 포트폴리오 카드 */}
      <div className={styles.content}>
        <div className={styles.container}>
          {portfolioItems
            .filter(
              (item) => activeTab === "ALL" || item.category === activeTab
            )
            .map((item) => (
              <div key={item.id} onClick={() => setIsOpen(item.id)}>
                <div className={styles.portfolioCard}>
                  <Image
                    className={styles.portfolioImage}
                    src={item.image}
                    alt={item.title}
                    width={250}
                    height={250}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* 모달 */}
      {isOpen && (
        <PortfolioModal onClose={() => setIsOpen(null)}>
          {componentMap[isOpen]}
        </PortfolioModal>
      )}
    </section>
  );
}
