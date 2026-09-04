"use client";
import { profile } from "@/data/profile";
import { Github, Linkedin, Instagram, Mail, Download, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { TextReveal } from "@/components/text-reveal";
import { MagneticButton } from "@/components/magnetic-button";
import DynamicTyper from "./dynamic-typer";
import MorphingButton from "./morphing-button";
import DraggableBento from "./draggable-bento";

export default function Hero() {
  const { lang } = useLanguage();

  const t = {
    en: { downloadCV: "Download CV" },
    id: { downloadCV: "Unduh CV" }
  }[lang];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] dark:bg-[radial-gradient(#334155_2px,transparent_2px)] [background-size:32px_32px] opacity-40"></div>
        <motion.div animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[10%] w-72 h-72 bg-amber-400/20 dark:bg-amber-500/15 rounded-full blur-[80px]" />
        <motion.div animate={{ y: [0, 40, 0], x: [0, -30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[10%] right-[20%] w-80 h-80 bg-rose-400/20 dark:bg-pink-500/15 rounded-full blur-[90px]" />
        <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[40%] right-[10%] w-64 h-64 bg-blue-400/20 dark:bg-cyan-500/15 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full pb-10">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col space-y-6">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground flex flex-wrap items-center gap-3">

            <div className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 inline-block">
              <DynamicTyper />
            </div>

            <motion.span animate={{ rotate: [0, 20, -10, 20, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }} className="inline-block origin-bottom-right text-5xl lg:text-6xl">👋</motion.span>
            <br />
            <TextReveal text={`I'm ${profile.name}`} className="inline-block pb-2" />
          </h1>

          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-background border border-border w-fit shadow-sm">
            <Sparkles size={18} className="text-amber-500" />
            <span className="text-sm font-bold text-foreground">{(profile.role as any)[lang]}</span>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed pt-2">
            {(profile.bio as any)[lang]}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 z-20">
            <MorphingButton />
            <MagneticButton>
              <a href="/CV_Lukman.pdf" download="CV_Lukman.pdf" className="px-8 py-4 bg-accent text-foreground border border-border rounded-full font-bold flex items-center gap-2 hover:bg-border/50 transition-colors">
                <Download size={18} /> {t.downloadCV}
              </a>
            </MagneticButton>
          </div>

          <div className="flex items-center space-x-4 pt-6 z-20">
            <MagneticButton><a href={profile.github} target="_blank" className="p-3 bg-accent rounded-full text-muted-foreground hover:text-amber-500 transition-colors"><Github size={20} /></a></MagneticButton>
            <MagneticButton><a href={profile.linkedin} target="_blank" className="p-3 bg-accent rounded-full text-muted-foreground hover:text-blue-500 transition-colors"><Linkedin size={20} /></a></MagneticButton>
            <MagneticButton><a href={profile.instagram} target="_blank" className="p-3 bg-accent rounded-full text-muted-foreground hover:text-rose-500 transition-colors"><Instagram size={20} /></a></MagneticButton>
            <MagneticButton><a href={`mailto:${profile.email}`} className="p-3 bg-accent rounded-full text-muted-foreground hover:text-orange-500 transition-colors"><Mail size={20} /></a></MagneticButton>
          </div>
        </motion.div>

        <div className="relative flex flex-col items-center lg:items-end w-full gap-8">

          <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 3 }} transition={{ duration: 0.8, type: "spring", bounce: 0.4 }} className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] group z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-rose-500 to-blue-500 rounded-[2rem] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-amber-400 rounded-[2rem] translate-x-3 translate-y-4 lg:translate-x-4 lg:translate-y-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-3"></div>
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-background border-4 border-background rounded-[2rem] overflow-hidden shadow-xl">
              <Image src={profile.image} alt={`${profile.name} Profile`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover scale-105 group-hover:scale-110 transition-transform duration-500" priority />
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="relative z-20 w-full max-w-sm">
            <DraggableBento />
          </motion.div>

        </div>
      </div>
    </section>
  );
}