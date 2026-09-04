"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Database, RefreshCw, Server } from "lucide-react";

export default function RealTimeWidget() {
    const [syncing, setSyncing] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);

    const triggerSync = () => {
        setSyncing(true);
        setLogs((prev) => ["Client: Payload dikirim...", ...prev].slice(0, 3));

        setTimeout(() => {
            setLogs((prev) => ["Server: Memproses data melalui Laravel...", ...prev].slice(0, 3));
        }, 800);

        setTimeout(() => {
            setLogs((prev) => ["Database: Sinkronisasi MySQL berhasil!", ...prev].slice(0, 3));
            setSyncing(false);
        }, 1800);
    };

    return (
        <div className="bg-background/80 backdrop-blur-xl border border-border p-6 rounded-3xl w-full max-w-sm shadow-xl">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-extrabold flex items-center gap-2"><Server size={18} className="text-amber-500" /> Data Sync</h4>
                <button onClick={triggerSync} disabled={syncing} className="p-2 bg-accent rounded-full hover:bg-amber-500 hover:text-white transition-colors disabled:opacity-50">
                    <RefreshCw size={16} className={syncing ? "animate-spin" : ""} />
                </button>
            </div>
            <div className="bg-black/90 p-4 rounded-xl h-32 overflow-hidden text-xs font-mono text-green-400 flex flex-col gap-2">
                {logs.length === 0 ? <span className="text-muted-foreground">Menunggu event trigger...</span> : logs.map((log, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>{log}</motion.div>
                ))}
            </div>
        </div>
    );
}