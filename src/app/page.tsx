"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero/Hero";
import AboutMe from "./aboutme/page";
import Skills from "./skills/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";
import Navigation from "../components/Nav/Nav";
import styles from "./Landing.module.css";

export default function HomePage() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = [
      { id: "aboutme", ref: aboutRef },
      { id: "portfolio", ref: portfolioRef },
      { id: "skills", ref: skillsRef },
      { id: "contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = sections.find(
              (s) => s.ref.current === entry.target
            );
            if (matched) setActiveSection(matched.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Hero />
      <main className={styles.wrapper}>
        <nav className={styles.mobileNav}>
          <Link
            href="#aboutme"
            className={activeSection === "aboutme" ? styles.active : ""}
          >
            AboutMe
          </Link>
          <Link
            href="#portfolio"
            className={activeSection === "portfolio" ? styles.active : ""}
          >
            Portfolio
          </Link>
          <Link
            href="#skills"
            className={activeSection === "skills" ? styles.active : ""}
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className={activeSection === "contact" ? styles.active : ""}
          >
            Contact
          </Link>
        </nav>
        <div className={styles.content}>
          <div ref={aboutRef} id="aboutme" className={styles.section}>
            <AboutMe />
          </div>
          <div ref={portfolioRef} id="portfolio" className={styles.section}>
            <Portfolio />
          </div>
          <div ref={skillsRef} id="skills" className={styles.section}>
            <Skills />
          </div>
          <div ref={contactRef} id="contact" className={styles.section}>
            <Contact />
          </div>
        </div>
        <Navigation />
      </main>
    </div>
  );
}
