"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Maximize2, X, Code2, ImageOff } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { ScrollReveal } from "@/components/scroll-reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  const { lang } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-10">

      <ScrollReveal>
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/50 border border-white/10 mb-4">
            <Code2 size={14} className="text-amber-500" />
            <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">Works</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500">
            {lang === "en" ? "Selected Projects" : "Karya Terpilih"}
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {projects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="group relative bg-accent/20 backdrop-blur-md border border-white/10 rounded-[1.5rem] p-5 hover:bg-accent/40 transition-colors duration-300 flex flex-col h-full">
              <div
                className="relative h-48 w-full rounded-xl overflow-hidden cursor-pointer mb-5 shrink-0 bg-accent/30 flex items-center justify-center border border-white/5"
                onClick={() => setSelectedImage(project.image)}
              >
                <ImageOff className="absolute text-white/10 z-0" size={48} />

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out z-10"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-20">
                  <Maximize2 size={24} className="text-white drop-shadow-lg" />
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-amber-500 block mb-1">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-foreground leading-tight mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {lang === "en" ? project.description.en : project.description.id}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4 shrink-0">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-[10px] font-bold px-2 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5 shrink-0">
                {project.demo && project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-amber-500/10 text-amber-500 rounded-full hover:bg-amber-500 hover:text-white transition-colors" title="Live Demo">
                    <ExternalLink size={16} />
                  </a>
                )}
                {project.github && project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 text-muted-foreground rounded-full hover:text-white hover:bg-white/20 transition-colors" title="Source Code">
                    <Github size={16} />
                  </a>
                )}

                {(!project.demo || project.demo === "#") && (!project.github || project.github === "#") && (
                  <button onClick={() => setSelectedImage(project.image)} className="text-xs font-bold text-muted-foreground hover:text-amber-500 transition-colors ml-auto flex items-center gap-1">
                    Inspeksi UI <Maximize2 size={12} />
                  </button>
                )}
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 bg-white/10 hover:bg-rose-500 text-white p-3 rounded-full transition-colors backdrop-blur-md z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full Project View"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}