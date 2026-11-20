import type { ComponentType } from "react";

export interface AccordionGalleryItem {
    image: string;
    label: string;
    description?: string;
    link?: string;
    alt?: string;
}
export interface AccordionGalleryProps {
    items: AccordionGalleryItem[];
    defaultIndex?: number;
    accentColor?: string;
    overlayColor?: string;
    textColor?: string;
    height?: number;
    gap?: number;
    radius?: number;
    expandRatio?: number;
    orientation?: "horizontal" | "vertical";
    duration?: number;
    ease?: string;
    parallax?: number;
    tilt?: number;
    stagger?: number;
    trigger?: "hover" | "click";
    showLabels?: boolean;
    grayscale?: boolean;
    className?: string;
    onItemClick?: (index: number) => void;
}
declare const AccordionGallery: ComponentType<AccordionGalleryProps>;
export default AccordionGallery;
