"use client";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function LiveStatus() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="fixed bottom-6 left-6 z-40 hidden md:flex"
        >
            <div className="bg-background/80 backdrop-blur-xl border border-white/10 shadow-lg rounded-full px-4 py-2 flex items-center gap-3 hover:scale-105 transition-transform cursor-default">
                <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <div className="flex items-center gap-2">
                    <Code2 size={14} className="text-muted-foreground" />
                    <span className="text-xs font-extrabold text-foreground">
                        Building cool things<span className="text-amber-500">...</span>
                    </span>
                </div>
            </div>
        </motion.div>
    );
}