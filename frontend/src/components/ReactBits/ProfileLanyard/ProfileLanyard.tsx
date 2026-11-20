"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createProfileCard, PROFILE_INTRO } from "./profileCard";
import styles from "./ProfileLanyard.module.css";

const Lanyard = dynamic(() => import("../Lanyard/Lanyard"), { ssr: false });

export default function ProfileLanyard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [frontImage, setFrontImage] = useState<string>();
    const [inView, setInView] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );
        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;
        let active = true;
        createProfileCard()
            .then((url) => {
                if (active && url) setFrontImage(url);
            })
            .catch(() => {});
        return () => {
            active = false;
        };
    }, [inView]);

    return (
        <div ref={containerRef} className={styles.profile}>
            {!ready && (
                <div className={styles.fallback}>
                    <Image
                        src="/images/ProfilePhoto.png"
                        alt="정혜연 프로필 사진"
                        width={280}
                        height={280}
                        sizes="280px"
                        loading="eager"
                    />
                    <p>
                        <strong className={styles.introLine}>익숙함과 새로움의 공존</strong>
                        <span className={styles.introLine}>을 추구하는 개발자</span>
                        <span className={styles.introLine}>
                            <strong>정혜연</strong>입니다.
                        </span>
                    </p>
                </div>
            )}
            {frontImage && (
                <Lanyard
                    frontImage={frontImage}
                    backImage={frontImage}
                    finish="glossy"
                    cardColor="var(--Black)"
                    strapColor="var(--Blue)"
                    size={0.68}
                    strapLength={0.25}
                    breeze={0.2}
                    damping={0.65}
                    onReady={setReady}
                />
            )}
            {ready && <p className={styles.accessible}>정혜연 프로필 사진. {PROFILE_INTRO}</p>}
        </div>
    );
}
