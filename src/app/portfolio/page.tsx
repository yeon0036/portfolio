"use client";

// import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { portfolioItems } from "./PortfolioData";
import Accordion from "./components/Accordion";
import styles from "./portfolio.module.css";

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "ALL" | "JavaScript" | "TypeScript" | "Design"
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

  const filteredItems =
    activeTab === "ALL"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

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
        {["ALL", "JavaScript", "TypeScript", "Design"].map((tab) => (
          <button
            key={tab}
            onClick={() =>
              setActiveTab(
                tab as "ALL" | "JavaScript" | "TypeScript" | "Design"
              )
            }
            className={`${styles.tab} ${
              activeTab === tab ? styles.active : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* accordion */}
      <div className={styles.content}>
        <Accordion items={filteredItems} />
      </div>
    </section>
  );
}
