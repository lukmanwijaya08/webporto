"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 11) setGreeting("Selamat Pagi");
        else if (hour < 15) setGreeting("Selamat Siang");
        else if (hour < 19) setGreeting("Selamat Sore");
        else setGreeting("Selamat Malam");
        const timer = setTimeout(() => setIsLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-background"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500">
                            {greeting}.
                        </h1>
                        <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                className="w-full h-full bg-amber-500 rounded-full"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}