"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springConfig = { damping: 25, stiffness: 700, mass: 0.01 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    useEffect(() => {
        if (window.innerWidth >= 768) {
            setIsMobile(false);
        }

        const updateMousePosition = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button');
            setIsHovering(!!isInteractive);
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (isMobile) return null;

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        @media (min-width: 768px) {
          * { cursor: none !important; }
        }
      `}} />

            <motion.div
                className="fixed top-0 left-0 bg-amber-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHovering ? 48 : 24,
                    height: isHovering ? 48 : 24,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28
                }}
            />
        </>
    );
}