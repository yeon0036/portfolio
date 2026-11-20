import type { ComponentType, CSSProperties } from "react";

export interface StrokeTextProps {
    text?: string;
    strokeColor?: string;
    fillColor?: string;
    strokeWidth?: number;
    drawDuration?: number;
    fillDelay?: number;
    stagger?: number;
    ease?: string;
    trigger?: "mount" | "hover" | "scroll" | "loop";
    fillMode?: "fade" | "wipe" | "none";
    wipeFrom?: "left" | "right" | "top" | "bottom";
    fontSize?: number;
    fontWeight?: CSSProperties["fontWeight"];
    fontFamily?: string;
    letterSpacing?: number;
    reverse?: boolean;
    strokeStyle?: "solid" | "dashed" | "dotted";
    dashLength?: number;
    marching?: boolean;
    hoverRedraw?: boolean;
    shadow?: boolean;
    shadowColor?: string;
    className?: string;
    style?: CSSProperties;
}

declare const StrokeText: ComponentType<StrokeTextProps>;
export default StrokeText;
