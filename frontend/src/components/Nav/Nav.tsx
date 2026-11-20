"use client";

import styles from "./Nav.module.css";

const tab = [
    { key: "hero", label: "Landing", href: "#hero" },
    { key: "aboutme", label: "About Me", href: "#aboutme" },
    { key: "portfolio", label: "Portfolio", href: "#portfolio" },
    { key: "skills", label: "Skills", href: "#skills" },
    { key: "contact", label: "Contact", href: "#contact" },
];

export default function Navigation({
    activeSection,
    visible,
}: {
    activeSection: string;
    visible: boolean;
}) {
    return (
        <nav
            className={`${styles.sideNav} ${visible ? styles.show : ""}`}
            aria-label="페이지 섹션"
            aria-hidden={!visible}
        >
            <ul className={styles.nav}>
                {tab.map((item) => (
                    <li key={item.key}>
                        <a
                            href={item.href}
                            tabIndex={visible ? 0 : -1}
                            aria-current={activeSection === item.key ? "location" : undefined}
                            className={`${styles.tab} ${
                                activeSection === item.key ? styles.active : ""
                            }`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
