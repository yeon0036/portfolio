"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Contact.module.css";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
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
      style={{ minHeight: "60vh" }}
      id="contact"
      className={`${styles.about} ${styles["fade-in"]} ${
        isVisible ? styles.show : ""
      }`}
    >
      <p className={styles.title}>Contact</p>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link
            className={styles.link}
            href="https://github.com/yeon0036"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/logo/github.png"
              alt="github hyperLink"
              width={150}
              height={150}
            />
            <p className={styles.linkTitle}>Github</p>
            <p>yeon0036</p>
          </Link>
        </div>
        <div className={styles.content}>
          <a
            className={styles.link}
            href="mailto:jhy20306@gmail.com?subject=제목&body=내용을 여기에 작성해주세요"
          >
            <Image
              className={styles.logo}
              src="/logo/gmail.png"
              alt="gmail hyperLink"
              width={150}
              height={150}
            />
            <p className={styles.linkTitle}>Gmail</p>
            <p>jhy20306@gmail.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}
