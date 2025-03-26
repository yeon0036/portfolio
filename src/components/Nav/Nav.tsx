"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const tab = [
  { key: "aboutme", label: "AboutMe", href: "#aboutme" },
  { key: "portfolio", label: "Portfolio", href: "#portfolio" },
  { key: "contact", label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.2);
    };
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.3 }
    );

    const targets = document.querySelectorAll("section[id]");
    targets.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      targets.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
