import type { CSSProperties, ComponentType } from "react";

export interface PixelSnowProps {
    color?: string;
    variant?: "snowflake" | "square" | "round";
    density?: number;
    speed?: number;
    wind?: number;
    sway?: number;
    flakeSize?: number;
    pixelSize?: number;
    depth?: number;
    brightness?: number;
    glow?: number;
    twinkle?: number;
    accumulate?: boolean;
    mouseInteraction?: boolean;
    intro?: boolean;
    fade?: number;
    opacity?: number;
    lightMode?: boolean;
    paused?: boolean;
    dpr?: number;
    className?: string;
    style?: CSSProperties;
}
declare const PixelSnow: ComponentType<PixelSnowProps>;
export default PixelSnow;
