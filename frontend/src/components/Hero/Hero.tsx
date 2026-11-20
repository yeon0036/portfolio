"use client";

// Hero.tsx
import { FaChevronDown } from "react-icons/fa";
import StrokeText from "@/components/ReactBits/StrokeText/StrokeText";
import styles from "./Hero.module.css";

export default function Hero({ embedded = false }: { embedded?: boolean }) {
    return (
        <section
            id={embedded ? undefined : "hero"}
            className={`${styles.hero} ${embedded ? styles.embedded : ""}`}
        >
            <h1 className={styles.title} aria-label="JUNG HYEYEON.">
                <span aria-hidden="true">
                    {["JUNG", "HYEYEON."].map((text) => (
                        <StrokeText
                            key={text}
                            text={text}
                            strokeColor="var(--Blue)"
                            fontSize={96}
                            fontWeight={900}
                            letterSpacing={-2}
                            hoverRedraw
                        />
                    ))}
                </span>
            </h1>
            <p className={styles.subtitle}>Web Developer</p>
            {!embedded && <FaChevronDown size={24} className={styles.scrollArrow} />}
        </section>
    );
}
