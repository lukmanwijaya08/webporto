// components/scroll-reveal.tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
}

export function ScrollReveal({ children, width = "100%", delay = 0 }: ScrollRevealProps) {
    return (
        <div style={{ width, position: "relative", overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ duration: 0.6, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }} 
            >
                {children}
            </motion.div>
        </div>
    );
}