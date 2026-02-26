"use client";

import React, { useEffect, useRef } from "react";
import "./AppXY.css";

const LERP = 0.05;

export default function AppXY() {
    const pointerRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            const target = targetRef.current;
            const current = currentRef.current;
            current.x += (target.x - current.x) * LERP;
            current.y += (target.y - current.y) * LERP;

            if (pointerRef.current) {
                pointerRef.current.style.left = `${current.x}px`;
                pointerRef.current.style.top = `${current.y}px`;
            }
            rafRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.body.style.cursor = "none";
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.style.cursor = "";
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return <div ref={pointerRef} className="pointer" style={{ left: 0, top: 0 }} />;
}
