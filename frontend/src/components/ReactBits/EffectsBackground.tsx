"use client";

import dynamic from "next/dynamic";

const PixelSnow = dynamic(() => import("./PixelSnow/PixelSnow"), { ssr: false });

export default function EffectsBackground() {
    return (
        <div className="effects-background" aria-hidden="true">
            <PixelSnow
                color="#d5dce3"
                density={0.045}
                speed={0.28}
                wind={0.04}
                sway={0.15}
                flakeSize={0.25}
                pixelSize={2}
                glow={0.1}
                twinkle={0.08}
                opacity={0.28}
                mouseInteraction={false}
                dpr={1}
            />
        </div>
    );
}
