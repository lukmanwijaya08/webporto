"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // State mounted digunakan untuk mencegah error Hydration di Next.js saat membaca tema
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Placeholder dengan ukuran yang sama agar layout tidak melompat saat dimuat
    return <div className="w-10 h-10" />;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9, rotate: -15 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-accent border border-border shadow-sm flex items-center justify-center w-10 h-10 transition-colors hover:bg-amber-500/10"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon size={18} className="text-blue-400" />
      ) : (
        <Sun size={18} className="text-amber-500" />
      )}
    </motion.button>
  );
}