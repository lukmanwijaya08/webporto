"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";

export default function MorphingButton() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleClick = () => {
    if (status !== "idle") return;
    setStatus("loading");
    setTimeout(() => setStatus("success"), 2000);
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <button onClick={handleClick} className="relative flex items-center justify-center">
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.div key="idle" initial={{ opacity: 0, width: 50 }} animate={{ opacity: 1, width: "auto" }} exit={{ opacity: 0, scale: 0.5 }} className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-4 rounded-full font-extrabold flex items-center gap-2 shadow-lg">
            <Send size={18} /> Say Hello
          </motion.div>
        )}
        {status === "loading" && (
          <motion.div key="loading" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="bg-accent text-amber-500 p-4 rounded-full shadow-md">
            <Loader2 size={24} className="animate-spin" />
          </motion.div>
        )}
        {status === "success" && (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="bg-emerald-500 text-white px-8 py-4 rounded-full font-extrabold flex items-center gap-2 shadow-lg">
            <Check size={18} /> Pesan Terkirim!
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}