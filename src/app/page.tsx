"use client";

import Hero from "@/components/Hero/Hero";
import AboutMe from "./aboutme/page";
import Skills from "./skills/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";
import Navigation from "@/components/Nav/Nav";
import styles from "./Landing.module.css";
import Footer from "@/components/Footer/Footer";

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
            <Contact />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
