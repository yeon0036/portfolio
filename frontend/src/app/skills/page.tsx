"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";

const FolderFloat = dynamic(() => import("@/components/ReactBits/FolderFloat/FolderFloat"), {
    ssr: false,
});

const featuredSkills = new Set([
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "Django",
    "Flask",
    "AWS",
    "Docker",
]);

const skillGroups = [
    {
        title: "Frontend",
        skills: [
            { name: "JavaScript", src: "/logo/javascript.png" },
            { name: "TypeScript", src: "/logo/typescript.png" },
            { name: "HTML", src: "/logo/html.png" },
            { name: "CSS", src: "/logo/css.webp" },
            { name: "React", src: "/logo/react.png" },
            { name: "Next.js", src: "/logo/NextJs.svg" },
            { name: "TanStack Query", src: "/logo/reactQuery.svg" },
            { name: "Zustand", src: "/logo/zustand.webp" },
            { name: "Zod", src: "/logo/zod.png" },
            { name: "Tailwind CSS", src: "/logo/tailwind.png" },
            { name: "CSS Modules", src: "/logo/moduleCSS.png" },
            { name: "Styled Components", src: "/logo/styledComponents.png" },
            { name: "Storybook", src: "/logo/storybook.png" },
            { name: "Capacitor", src: "/logo/capacitor.png" },
            { name: "ApexCharts", src: "/logo/apexcharts.svg" },
            { name: "BlockNote", src: "/logo/blocknote.svg" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Python", src: "/logo/python.png" },
            { name: "Django", src: "/logo/Django.png" },
            { name: "Flask", src: "/logo/flask.svg" },
            { name: "SQLAlchemy", src: "/logo/sqlalchemy.svg" },
            { name: "REST API", src: "/logo/restAPI.png" },
        ],
    },
    {
        title: "Database",
        skills: [
            { name: "PostgreSQL", src: "/logo/PostgreSQL.png" },
            { name: "Supabase", src: "/logo/supabase.svg" },
            { name: "Prisma", src: "/logo/prisma.svg" },
            { name: "MariaDB", src: "/logo/mariadb.svg" },
            { name: "Redis", src: "/logo/redis.svg" },
        ],
    },
    {
        title: "Infra & Deployment",
        skills: [
            { name: "AWS", src: "/logo/aws.png" },
            { name: "Docker", src: "/logo/docker.svg" },
            { name: "Nginx", src: "/logo/nginx.svg" },
            { name: "Gunicorn", src: "/logo/gunicorn.svg" },
            { name: "Vercel", src: "/logo/vercel.svg" },
            { name: "Railway", src: "/logo/railway.png" },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", src: "/logo/git.png" },
            { name: "GitHub", src: "/logo/github.png" },
            { name: "VS Code", src: "/logo/vscode.png" },
            { name: "pnpm", src: "/logo/pnpm.svg" },
            { name: "ESLint", src: "/logo/ESLint.png" },
        ],
    },
    {
        title: "Design",
        skills: [
            { name: "Figma", src: "/logo/figma.avif" },
            { name: "Adobe XD", src: "/logo/xd.png" },
            { name: "Photoshop", src: "/logo/photoshop.png" },
            { name: "Illustrator", src: "/logo/illustrator.png" },
        ],
    },
    {
        title: "Other Languages",
        skills: [
            { name: "C", src: "/logo/c.svg" },
            { name: "C++", src: "/logo/c++.png" },
        ],
    },
];

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeGroup, setActiveGroup] = useState<string | null>(null);
    const [availableWidth, setAvailableWidth] = useState(360);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new ResizeObserver(([entry]) => {
            setAvailableWidth(entry.contentRect.width);
        });
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!activeGroup) return;
        let frame: number | null = null;
        const closeOutsideSkills = () => {
            if (frame !== null) return;
            frame = requestAnimationFrame(() => {
                frame = null;
                const section = sectionRef.current;
                const bounds = section?.getBoundingClientRect();
                const activationLine = window.innerHeight * 0.35;
                const atPageEnd =
                    Math.ceil(window.scrollY + window.innerHeight) >=
                    document.documentElement.scrollHeight;
                const hasFollowingSection = Boolean(
                    section?.parentElement?.nextElementSibling?.querySelector("section")
                );
                if (
                    !bounds ||
                    bounds.top > activationLine ||
                    bounds.bottom <= activationLine ||
                    (atPageEnd && hasFollowingSection)
                ) {
                    setActiveGroup(null);
                }
            });
        };
        window.addEventListener("scroll", closeOutsideSkills, { passive: true });
        return () => {
            window.removeEventListener("scroll", closeOutsideSkills);
            if (frame !== null) cancelAnimationFrame(frame);
        };
    }, [activeGroup]);

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
            aria-labelledby="skills-title"
            className={`${styles.about} ${styles["fade-in"]} ${isVisible ? styles.show : ""}`}
        >
            <h2 id="skills-title" className={styles.title}>
                Skills
            </h2>
            <div className={styles.content}>
                <p className={styles.hint}>폴더를 눌러 사용 기술을 확인해 보세요.</p>
                <div className={styles.skillContiner}>
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className={styles.skillGroup}
                            data-open={activeGroup === group.title ? "" : undefined}
                        >
                            <FolderFloat
                                items={group.skills.map((skill) => ({
                                    label: skill.name,
                                    value: skill.name,
                                    icon: skill.src,
                                    featured: featuredSkills.has(skill.name),
                                }))}
                                label={group.title}
                                sublabel={`${group.skills.length} skills`}
                                featured={group.skills.some((skill) =>
                                    featuredSkills.has(skill.name)
                                )}
                                trigger="click"
                                open={activeGroup === group.title}
                                onOpenChange={(open) =>
                                    setActiveGroup((current) =>
                                        open
                                            ? group.title
                                            : current === group.title
                                              ? null
                                              : current
                                    )
                                }
                                closeOnSelect={false}
                                physics
                                drift={0.25}
                                width={160}
                                height={112}
                                spread={Math.max(80, Math.min(300, (availableWidth - 64) / 2))}
                                lift={28}
                                tilt={4}
                                folderColor="var(--Blue)"
                                frontColor="color-mix(in srgb, var(--Blue) 75%, var(--Gray))"
                                paperColor="var(--White)"
                                itemColor="var(--White)"
                                itemTextColor="var(--Black)"
                                labelColor="var(--White)"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
