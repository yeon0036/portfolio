"use client";

// Hero.tsx
import { FaChevronDown } from "react-icons/fa";
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollArrow = () => {
    const target = document.getElementById("aboutme");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.title}>
        JUNG
        <br />
        HYEYEON.
      </h1>
      <p className={styles.subtitle}>Frontend Developer</p>
      <button onClick={scrollArrow} className={styles.scrollBtn}>
        <FaChevronDown size={24} />
      </button>
    </section>
  );
}
