"use client";

import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Hero from "./Hero";

export default function MacbookIntro() {
    return (
        <section id="hero" className="w-full overflow-hidden" aria-label="포트폴리오 소개">
            <MacbookScroll
                className="min-h-[160svh] origin-top scale-[0.46] pt-28 min-[375px]:scale-[0.55] sm:scale-[0.8] md:min-h-[200vh] md:scale-100 md:py-[clamp(1rem,calc((100svh_-_44rem)/2),10rem)]"
                title={
                    <span className="text-[var(--White)]">
                        Ideas into interfaces.
                        <br />
                        <span className="text-[var(--light-Blue)]">Scroll to explore.</span>
                    </span>
                }
                showGradient={false}
            >
                <Hero embedded />
            </MacbookScroll>
        </section>
    );
}
