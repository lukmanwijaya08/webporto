"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ChameleonAura() {
    const { scrollYProgress } = useScroll();

    const background = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [
            
            "radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.20), transparent 55%), radial-gradient(circle at 80% 30%, rgba(225, 29, 72, 0.20), transparent 55%)",

            "radial-gradient(circle at 10% 50%, rgba(6, 182, 212, 0.20), transparent 60%), radial-gradient(circle at 90% 60%, rgba(59, 130, 246, 0.20), transparent 55%)",

            "radial-gradient(circle at 30% 80%, rgba(16, 185, 129, 0.20), transparent 60%), radial-gradient(circle at 70% 90%, rgba(139, 92, 246, 0.25), transparent 60%)",
        ]
    );

    return (
        <>
            <motion.div
                style={{ background }}
                className="fixed inset-0 z-[-2] pointer-events-none transition-colors duration-1000 ease-out"
            />

            <div className="fixed inset-0 z-[-1] pointer-events-none backdrop-blur-[100px]" />
        </>
    );
}