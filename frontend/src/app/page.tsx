"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MacbookIntro from "../components/Hero/MacbookIntro";
import AboutMe from "./aboutme/page";
import Skills from "./skills/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";
import Navigation from "../components/Nav/Nav";
import styles from "./Landing.module.css";

export default function HomePage() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const portfolioRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState("hero");
    const [showNavigation, setShowNavigation] = useState(false);

    useEffect(() => {
        const sections = [
            { id: "aboutme", ref: aboutRef },
            { id: "portfolio", ref: portfolioRef },
            { id: "skills", ref: skillsRef },
            { id: "contact", ref: contactRef },
        ];

        let frame: number | null = null;

        const updateNavigation = () => {
            frame = null;
            const firstSection = aboutRef.current;
            if (!firstSection) return;

            const isInContent = firstSection.getBoundingClientRect().top <= 96;
            setShowNavigation(isInContent);

            let current = "hero";
            if (isInContent) {
                current = "aboutme";
                const activationLine = window.innerHeight * 0.35;
                for (const section of sections) {
                    if (
                        section.ref.current &&
                        section.ref.current.getBoundingClientRect().top <= activationLine
                    ) {
                        current = section.id;
                    }
                }
                const viewportBottom = Math.ceil(window.scrollY + window.innerHeight);
                if (viewportBottom >= document.documentElement.scrollHeight) {
                    current = "contact";
                }
            }
            setActiveSection(current);
        };

        const scheduleUpdate = () => {
            if (frame === null) frame = requestAnimationFrame(updateNavigation);
        };

        const observer = new ResizeObserver(scheduleUpdate);
        sections.forEach(({ ref }) => {
            if (ref.current) observer.observe(ref.current);
        });
        const intro = document.getElementById("hero");
        if (intro) observer.observe(intro);

        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);
        updateNavigation();

        return () => {
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            observer.disconnect();
            if (frame !== null) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div>
            <MacbookIntro />
            <main className={styles.wrapper}>
                <nav
                    className={`${styles.mobileNav} ${showNavigation ? styles.mobileNavVisible : ""}`}
                    aria-label="페이지 섹션"
                    aria-hidden={!showNavigation}
                >
                    <Link
                        href="#aboutme"
                        tabIndex={showNavigation ? 0 : -1}
                        aria-current={activeSection === "aboutme" ? "location" : undefined}
                        className={activeSection === "aboutme" ? styles.active : ""}
                    >
                        About Me
                    </Link>
                    <Link
                        href="#portfolio"
                        tabIndex={showNavigation ? 0 : -1}
                        aria-current={activeSection === "portfolio" ? "location" : undefined}
                        className={activeSection === "portfolio" ? styles.active : ""}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="#skills"
                        tabIndex={showNavigation ? 0 : -1}
                        aria-current={activeSection === "skills" ? "location" : undefined}
                        className={activeSection === "skills" ? styles.active : ""}
                    >
                        Skills
                    </Link>
                    <Link
                        href="#contact"
                        tabIndex={showNavigation ? 0 : -1}
                        aria-current={activeSection === "contact" ? "location" : undefined}
                        className={activeSection === "contact" ? styles.active : ""}
                    >
                        Contact
                    </Link>
                </nav>
                <div className={styles.content}>
                    <div ref={aboutRef} className={styles.section}>
                        <AboutMe />
                    </div>
                    <div ref={portfolioRef} className={styles.section}>
                        <Portfolio />
                    </div>
                    <div ref={skillsRef} className={styles.section}>
                        <Skills />
                    </div>
                    <div ref={contactRef} className={styles.section}>
                        <Contact />
                    </div>
                </div>
                <Navigation activeSection={activeSection} visible={showNavigation} />
            </main>
        </div>
    );
}
