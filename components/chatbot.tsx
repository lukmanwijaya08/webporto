"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareText, X, Minus, Sparkles, Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";

type Message = {
    id: string;
    sender: "bot" | "user";
    text: string;
};

export default function Chatbot() {
    const { lang } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Pesan Selamat Datang Default
    const welcomeMessage: Message = {
        id: "welcome",
        sender: "bot",
        text: lang === "en"
            ? "Hi there! I'm Lukman's Virtual Assistant. What would you like to know about his work?"
            : "Halo! Saya Asisten Virtual Lukman. Ada yang ingin Anda ketahui tentang karya atau ketersediaan Lukman?",
    };

    const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
    const faqData = [
        {
            q: { en: "Are you available for work?", id: "Apakah kamu open freelance?" },
            a: {
                en: "Yes! I'm currently open for freelance projects. You can book a meeting or DM me directly on Instagram.",
                id: "Tentu! Saat ini saya terbuka untuk proyek freelance. Anda bisa menjadwalkan meeting atau langsung DM saya di Instagram."
            }
        },
        {
            q: { en: "What is your tech stack?", id: "Apa tech stack utamamu?" },
            a: {
                en: "I specialize in Full-Stack development using Next.js, React, React Native for the frontend, and Laravel 11 with MySQL for robust backend architectures.",
                id: "Saya spesialis Full-Stack menggunakan Next.js, React, React Native untuk frontend, serta arsitektur backend tangguh dengan Laravel 11 dan MySQL."
            }
        },
        {
            q: { en: "Do you do UI/UX Design?", id: "Bisa desain UI/UX juga?" },
            a: {
                en: "Absolutely. I bridge the gap between design and engineering, ensuring every interface is pixel-perfect, highly animated, and user-friendly.",
                id: "Pasti. Saya menjembatani desain dan kode, memastikan setiap antarmuka rapi (pixel-perfect), kaya animasi, dan nyaman digunakan."
            }
        },
        {
            q: { en: "How do you handle mobile apps?", id: "Bagaimana dengan aplikasi mobile?" },
            a: {
                en: "I build cross-platform mobile apps using React Native, and I also develop highly optimized Progressive Web Apps (PWA) with Vite.",
                id: "Saya membangun aplikasi mobile lintas platform dengan React Native, dan juga mengembangkan Progressive Web Apps (PWA) yang sangat optimal."
            }
        }
    ];

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleAsk = (question: string, answer: string) => {
        const userMsg: Message = { id: Date.now().toString(), sender: "user", text: question };
        setMessages((prev) => [...prev, userMsg]);

        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            const botMsg: Message = { id: (Date.now() + 1).toString(), sender: "bot", text: answer };
            setMessages((prev) => [...prev, botMsg]);
        }, 1500);
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-[99] flex flex-col items-end">
                <AnimatePresence>
                    {!isOpen && (
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(true)}
                            className="bg-amber-500 text-black p-4 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden group"
                        >
                            <span className="absolute inset-0 rounded-full border-2 border-amber-500 animate-ping opacity-20"></span>
                            <MessageSquareText size={28} className="relative z-10 group-hover:rotate-12 transition-transform" />
                        </motion.button>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: "bottom right" }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="absolute bottom-0 right-0 w-[350px] sm:w-[400px] h-[550px] max-h-[80vh] bg-background/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden"
                        >
                            {/* HEADER CHAT */}
                            <div className="px-6 py-4 border-b border-white/10 bg-black/20 flex items-center justify-between shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10 rounded-full border border-amber-500/50 overflow-hidden bg-accent flex items-center justify-center">
                                        <Image src="/profile.jpg" alt="Lukman " fill sizes="40px" className="object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm flex items-center gap-1">
                                            Lukman  <Sparkles size={12} className="text-amber-500" />
                                        </h3>
                                        <p className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                                            {lang === "en" ? "Online Assistant" : "Asisten Online"}
                                        </p>
                                    </div>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-white transition-colors p-2 bg-white/5 rounded-full">
                                    <Minus size={16} />
                                </button>
                            </div>

                            {/* AREA PESAN  */}
                            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${msg.sender === "user"
                                                ? "bg-amber-500 text-black rounded-2xl rounded-tr-sm font-medium"
                                                : "bg-accent border border-white/5 text-foreground rounded-2xl rounded-tl-sm"
                                            }`}>
                                            {msg.text}
                                        </div>
                                    </motion.div>
                                ))}

                                {isTyping && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                        <div className="bg-accent border border-white/5 p-4 rounded-2xl rounded-tl-sm flex gap-1.5 items-center h-[52px]">
                                            <motion.span animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 bg-muted-foreground rounded-full" />
                                            <motion.span animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-muted-foreground rounded-full" />
                                            <motion.span animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-muted-foreground rounded-full" />
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* AREA INPUT P*/}
                            <div className="p-4 border-t border-white/10 bg-black/20 shrink-0">
                                <p className="text-xs text-muted-foreground font-medium mb-3 pl-2">
                                    {lang === "en" ? "Frequently Asked Questions:" : "Pilih pertanyaan cepat:"}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {faqData.map((faq, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAsk(faq.q[lang as keyof typeof faq.q], faq.a[lang as keyof typeof faq.a])}
                                            disabled={isTyping}
                                            className="text-xs font-bold px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-left hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all disabled:opacity-50 flex-1 min-w-[45%]"
                                        >
                                            {faq.q[lang as keyof typeof faq.q]}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}