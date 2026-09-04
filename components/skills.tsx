"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Skills() {
  const { lang } = useLanguage();

  // Menggunakan tech stack spesifik Anda
  const technologies = [
    { name: "Laravel 11", color: "bg-red-500/20 text-red-500 border-red-500/30" },
    { name: "React Native", color: "bg-blue-500/20 text-blue-500 border-blue-500/30" },
    { name: "React.js", color: "bg-cyan-500/20 text-cyan-500 border-cyan-500/30" },
    { name: "MySQL", color: "bg-orange-500/20 text-orange-500 border-orange-500/30" },
    { name: "Vite", color: "bg-purple-500/20 text-purple-500 border-purple-500/30" },
    { name: "Tailwind CSS", color: "bg-teal-500/20 text-teal-500 border-teal-500/30" },
    { name: "Laravel Echo", color: "bg-emerald-500/20 text-emerald-500 border-emerald-500/30" },
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-20 overflow-hidden">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">{lang === "en" ? "Tech Playground" : "Area Teknologi"} 🛠️</h2>
          <p className="text-muted-foreground">{lang === "en" ? "Drag and bounce the capsules!" : "Tarik dan pantulkan kapsulnya!"}</p>
        </div>
      </ScrollReveal>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto p-8 border border-white/10 rounded-[3rem] bg-accent/20 backdrop-blur-sm">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech.name}
            drag
            dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
            whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
            whileTap={{ scale: 0.9, cursor: "grabbing" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
            className={`px-6 py-3 rounded-full border-2 font-extrabold cursor-grab backdrop-blur-md shadow-lg ${tech.color}`}
          >
            {tech.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}