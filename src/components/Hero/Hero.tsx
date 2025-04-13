"use client";

// Hero.tsx
import { FaChevronDown } from "react-icons/fa";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.title}>
        JUNG
        <br />
        HYEYEON.
      </h1>
      <p className={styles.subtitle}>Frontend Developer</p>
      <FaChevronDown size={24} className={styles.scrollArrow} />
    </section>
  );
}
