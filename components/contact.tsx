"use client";
import { motion } from "framer-motion";
import { Instagram, ArrowUpRight, Copy, Check } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { ScrollReveal } from "@/components/scroll-reveal";
import { profile } from "@/data/profile";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-10">
      <ScrollReveal>
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* KOLOM KIRI */}
          <div className="flex-1 bg-accent/20 rounded-[2rem] p-8 md:p-14 flex flex-col justify-between relative overflow-hidden border border-white/5 group">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="relative z-10 mb-20 lg:mb-32">
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6 text-foreground">
                {lang === "en" ? "Got an idea?" : "Punya ide?"} <br />
                <span className="text-muted-foreground">{lang === "en" ? "Let's talk." : "Mari bicara."}</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md font-medium">
                {lang === "en"
                  ? "I'm currently available for freelance projects. Send me a message and let's build something great together."
                  : "Saya sedang terbuka untuk proyek freelance. Kirimkan pesan dan mari bangun sesuatu yang luar biasa bersama."}
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t border-white/10 pt-8">
              <span className="text-sm font-bold text-muted-foreground tracking-widest uppercase">
                {lang === "en" ? "Or via Email" : "Atau via Email"}
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 text-foreground font-medium hover:text-amber-500 transition-colors group/btn"
              >
                {profile.email}
                {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} className="text-muted-foreground group-hover/btn:text-amber-500" />}
              </button>
            </div>
          </div>

          {/* KOLOM KANAN */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full lg:w-[400px] bg-amber-500 rounded-[2rem] p-8 md:p-10 text-black flex flex-col items-center justify-center shrink-0 shadow-2xl relative overflow-hidden text-center"
          >
            <div className="absolute -left-6 -bottom-10 text-[120px] font-black opacity-10 pointer-events-none select-none">
              DM
            </div>

            <div className="absolute top-6 right-6 w-12 h-12 bg-black text-amber-500 rounded-full flex items-center justify-center shadow-lg">
              <Instagram size={24} />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center mt-4">
              <div className="relative mb-6">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-[4px] border-black overflow-hidden relative shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] bg-background">
                  <Image
                    src="/profile.jpg"
                    alt="Lukman Profile"
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-1 right-2 md:bottom-2 md:right-3 w-7 h-7 bg-green-500 border-4 border-amber-500 rounded-full flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
                </div>
              </div>

              <p className="text-sm font-extrabold mb-1 opacity-70 tracking-widest uppercase">
                Direct Message
              </p>
              <h3 className="text-3xl font-black tracking-tight mb-8">
                @{profile.instagram.split('/').filter(Boolean).pop() || "lukman"}
              </h3>

              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full bg-black text-white py-4 px-6 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all hover:gap-4 shadow-lg shadow-black/20"
              >
                {lang === "en" ? "Send a Message" : "Kirim Pesan"}
                <ArrowUpRight size={20} className="transition-transform group-hover:rotate-12" />
              </a>
            </div>
          </motion.div>

        </div>
      </ScrollReveal>
    </section>
  );
}