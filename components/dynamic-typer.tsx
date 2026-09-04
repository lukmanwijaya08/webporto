"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DynamicTyper() {
    const words = ["Halo", "Hello", "Bonjour", "Konnichiwa"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="inline-flex overflow-hidden min-w-[150px]">
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}