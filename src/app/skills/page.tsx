"use client";

import Image from "next/image";
import styles from "./Skills.module.css";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
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
      id="skills"
      className={`${styles.about} ${styles["fade-in"]} ${
        isVisible ? styles.show : ""
      }`}
    >
      <p className={styles.title}>Skills</p>
      <div className={styles.content}>
        <div className={styles.skillContiner}>
          <p className={styles.skillTitle}>주로 사용해요</p>
          <Image
            className={styles.logoImg}
            src="/logo/html.png"
            alt="html"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/css.webp"
            alt="css"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/javascript.png"
            alt="js"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/typescript.png"
            alt="ts"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/moduleCSS.png"
            alt="module css"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/react.png"
            alt="react"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/restAPI.png"
            alt="rest api"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/nodeJs.png"
            alt="node js"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/vscode.png"
            alt="vscode"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/github.png"
            alt="github"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/notion.png"
            alt="noiton"
            width={80}
            height={80}
          />
        </div>
        <div className={styles.skillContiner}>
          <p className={styles.skillTitle}>사용할 수 있어요</p>
          <Image
            className={styles.logoImg}
            src="/logo/NextJs.svg"
            alt="next js"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/reactQuery.svg"
            alt="react query"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/styledComponents.png"
            alt="styled components"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/vercel.svg"
            alt="vercel"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/git.png"
            alt="git"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/xd.png"
            alt="xd"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/figma.avif"
            alt="vercel"
            width={80}
            height={80}
          />
        </div>
        <div className={styles.skillContiner}>
          <p className={styles.skillTitle}>사용해 봤어요</p>
          <Image
            className={styles.logoImg}
            src="/logo/storybook.png"
            alt="storybook"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/zod.png"
            alt="vercel"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/c.svg"
            alt="c"
            width={80}
            height={80}
          />
          <Image
            className={styles.logoImg}
            src="/logo/c++.png"
            alt="c++"
            width={80}
            height={80}
          />
        </div>
      </div>
    </section>
  );
}
