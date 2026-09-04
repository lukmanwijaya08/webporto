"use client";
import { profile } from "@/data/profile";
import { useLanguage } from "@/components/language-provider";
import { Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const { lang } = useLanguage();

  const t = {
    en: {
      ready: "Ready to create something",
      awesome: "AWESOME",
      together: "together?",
      button: "Say Hello",
      rights: "All rights reserved."
    },
    id: {
      ready: "Siap menciptakan sesuatu yang",
      awesome: "LUAR BIASA",
      together: "bersama-sama?",
      button: "Sapa Saya",
      rights: "Hak cipta dilindungi."
    }
  }[lang];

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 pb-8 pt-32">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-orange-500/20">

        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            {t.ready} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
              {t.awesome}
            </span> {t.together}
          </h2>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${profile.email}`}
            className="group mt-8 px-10 py-5 bg-white text-orange-500 rounded-full font-extrabold text-lg md:text-xl flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all"
          >
            <Mail size={24} />
            {t.button}
            <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
          </motion.a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between px-4 text-muted-foreground font-bold text-sm">
        <p>© {new Date().getFullYear()} {profile.name}. {t.rights}</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href={profile.github} target="_blank" className="hover:text-amber-500 transition-colors">GitHub</a>
          <a href={profile.linkedin} target="_blank" className="hover:text-blue-500 transition-colors">LinkedIn</a>
          <a href={profile.instagram} target="_blank" className="hover:text-rose-500 transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}