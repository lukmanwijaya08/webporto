"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Globe, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const navLinks = [
    { name: "Home", en: "Home", id: "Beranda", href: "#home" },
    { name: "About", en: "About", id: "Tentang", href: "#about" },
    { name: "Skills", en: "Skills", id: "Keahlian", href: "#skills" },
    { name: "Projects", en: "Projects", id: "Proyek", href: "#projects" },
    { name: "Experience", en: "Experience", id: "Pengalaman", href: "#experience" },
    { name: "Contact", en: "Contact", id: "Kontak", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-background/40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <header className="fixed top-4 md:top-6 w-full z-50 flex justify-center px-4 md:px-6 pointer-events-none">
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`pointer-events-auto relative flex items-center justify-between bg-background/70 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-orange-500/10 rounded-[2rem] px-4 py-3 w-full ${scrolled ? "max-w-4xl" : "max-w-6xl"
            }`}
        >
          <Link
            href="#home"
            onClick={() => setActive("Home")}
            className="text-xl md:text-2xl font-extrabold flex items-center gap-1 shrink-0 z-50 pl-2 group"
          >
            <span className="text-foreground group-hover:text-amber-500 transition-colors">Lukman</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-amber-500 text-3xl leading-none"
            >
              .
            </motion.span>
          </Link>

          <nav className="hidden lg:flex items-center p-1.5 bg-accent/40 rounded-full border border-white/5 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className="relative px-3 xl:px-5 py-2 text-sm font-bold rounded-full transition-colors z-10 group"
              >
                <span
                  className={`relative z-20 transition-colors duration-300 ${active === link.name ? "text-white" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                >
                  {lang === "en" ? link.en : link.id}
                </span>

                {active === link.name && (
                  <motion.div
                    layoutId="activeNavBubble"
                    className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-lg shadow-orange-500/20"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}

                {active !== link.name && (
                  <div className="absolute inset-0 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                )}
              </Link>
            ))}
          </nav>

          {/* SISI KANAN: TOMBOL INTERAKTIF */}
          <div className="flex items-center gap-2 shrink-0 z-50 pr-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLang}
              className="px-3 py-2 md:px-4 rounded-full bg-accent hover:bg-accent/80 font-bold text-xs md:text-sm transition-colors border border-border shadow-sm flex items-center justify-center gap-1.5 min-w-[70px] text-foreground cursor-pointer"
            >
              <Globe size={14} className="text-amber-500" />
              <span>{lang === "en" ? "EN" : "ID"}</span>
            </motion.button>

            <ThemeToggle />

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-white shadow-md flex items-center justify-center ml-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>

          {/* DROPDOWN MENU MOBILE  */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, scale: 0.95, filter: "blur(5px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-[120%] left-0 w-full bg-background/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-orange-500/10 rounded-[2rem] p-3 flex flex-col gap-2 lg:hidden overflow-hidden"
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => {
                        setActive(link.name);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between px-6 py-4 rounded-[1.5rem] text-sm font-extrabold transition-all ${active === link.name
                          ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-md shadow-orange-500/20 translate-x-2"
                          : "bg-accent/40 text-muted-foreground hover:bg-accent hover:text-foreground"
                        }`}
                    >
                      {lang === "en" ? link.en : link.id}

                      {active === link.name && (
                        <ChevronRight size={18} className="text-white/80" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </header>
    </>
  );
}