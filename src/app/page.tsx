"use client";

import Hero from "@/components/Hero/Hero";
import AboutMe from "./aboutme/page";
import Skills from "./skills/page";
import Portfolio from "./portfolio/page";
import Navigation from "@/components/Nav/Nav";
import styles from "./Landing.module.css";

export default function HomePage() {
  return (
    <>
      <main className={styles.wrapper}>
        <Navigation />
        <div>
          <Hero />
          <div className={styles.content}>
            <AboutMe />
            <Skills />
            <Portfolio />
          </div>
        </div>
      </main>
    </>
  );
}
