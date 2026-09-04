// components/staggered-grid.tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggeredGridProps {
    children: ReactNode;
    className?: string;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, 
        },
    },
};

export function StaggeredGrid({ children, className = "" }: StaggeredGridProps) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggeredCard({ children, className = "" }: { children: ReactNode; className?: string }) {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}