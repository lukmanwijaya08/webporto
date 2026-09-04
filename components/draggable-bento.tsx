"use client";
import { motion } from "framer-motion";

export default function DraggableBento() {
    const skills = ["React Native", "Laravel 11", "MySQL", "Vite & Tailwind"];

    return (
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto p-4">
            {skills.map((skill, i) => (
                <motion.div
                    key={i}
                    drag
                    dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
                    dragElastic={0.2}
                    whileTap={{ cursor: "grabbing", scale: 0.95 }}
                    className="bg-accent/50 backdrop-blur-md border border-white/10 p-6 rounded-3xl cursor-grab text-center font-extrabold text-sm md:text-base hover:bg-amber-500 hover:text-white transition-colors z-10"
                >
                    {skill}
                </motion.div>
            ))}
        </div>
    );
}