"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function XRayCard({ children, architecture }: { children: React.ReactNode, architecture: React.ReactNode }) {
    const [isXray, setIsXray] = useState(false);

    return (
        <div className="relative group cursor-pointer" onClick={() => setIsXray(!isXray)}>
            <motion.div animate={{ rotateY: isXray ? 180 : 0 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="relative w-full h-full preserve-3d">

                <div className="absolute inset-0 backface-hidden">
                    {children}
                </div>

                <div className="absolute inset-0 backface-hidden bg-slate-900 border border-cyan-500/30 rounded-[2.5rem] p-6 text-cyan-400 flex flex-col justify-center items-center rotate-y-180 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                    <h4 className="font-mono text-sm font-bold mb-4 uppercase tracking-widest text-cyan-200">System Architecture</h4>
                    {architecture}
                </div>

            </motion.div>
        </div>
    );
}