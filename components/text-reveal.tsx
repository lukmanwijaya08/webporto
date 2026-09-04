// components/text-reveal.tsx
"use client";
import { motion } from "framer-motion";

export function TextReveal({ text, className }: { text: string; className?: string }) {
  const characters = text.split("");

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05 } }, 
        hidden: {},
      }}
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}