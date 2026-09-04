"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Download, Moon, Sun, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import { playPopSound } from "@/lib/sound";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        playPopSound();
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const commands = [
    { name: "Toggle Theme (Dark/Light)", icon: theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>, action: () => setTheme(theme === "dark" ? "light" : "dark") },
    { name: "Download Resume", icon: <Download size={18}/>, action: () => alert("Mengunduh CV...") },
    { name: "Say Hello", icon: <Terminal size={18}/>, action: () => window.location.href = "#contact" }
  ];

  const filteredCommands = commands.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full max-w-lg bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center px-4 border-b border-white/10">
              <Command className="text-muted-foreground mr-2" size={20} />
              <input autoFocus type="text" placeholder="Type a command or search..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-transparent border-none py-4 outline-none text-foreground font-medium" />
              <span className="text-xs font-bold text-muted-foreground bg-accent px-2 py-1 rounded-md border border-white/5">ESC</span>
            </div>
            <div className="p-2 max-h-64 overflow-y-auto">
              {filteredCommands.length === 0 ? (
                <p className="p-4 text-center text-sm text-muted-foreground">No commands found.</p>
              ) : (
                filteredCommands.map((cmd, i) => (
                  <button key={i} onClick={() => { playPopSound(); cmd.action(); setIsOpen(false); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-amber-500 hover:text-white transition-colors text-left text-sm font-bold group">
                    <span className="text-muted-foreground group-hover:text-white/80">{cmd.icon}</span>
                    {cmd.name}
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}