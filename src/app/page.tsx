"use client";

import Hero from "@/components/Hero/Hero";
import AboutMe from "./aboutme/page";
import Navigation from "@/components/Nav/Nav";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Navigation />
      <div className={styles.content}>
        <AboutMe />
      </div>
    </>
  );
}
