"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const tab = [
  { key: "hero", label: "Landing", href: "#hero" },
  { key: "aboutme", label: "AboutMe", href: "#aboutme" },
  { key: "skills", label: "Skills", href: "#skills" },
  { key: "portfolio", label: "Portfolio", href: "#portfolio" },
  { key: "contact", label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleObserve = () => {
      const targets = document.querySelectorAll("section[id]");

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveTab(entry.target.id);
            }
          }
        },
        {
          rootMargin: "0px 0px -60% 0px",
          threshold: 0,
        }
      );

      targets.forEach((section) => observer.observe(section));

      return () => {
        targets.forEach((section) => observer.unobserve(section));
      };
    };

    requestAnimationFrame(handleObserve);

    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.2);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY;
      const offset = 100;
      window.scrollTo({
        top: offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`${styles.sideNav} ${show ? styles.show : ""}`}>
      <ul className={styles.nav}>
        {tab.map((item) => (
          <li key={item.key}>
            <button
              className={`${styles.tab} ${
                activeTab === item.key ? styles.active : ""
              }`}
              onClick={() => handleClick(item.key)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
