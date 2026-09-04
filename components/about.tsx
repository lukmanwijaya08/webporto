"use client";
import { profile } from "@/data/profile";
import { useLanguage } from "@/components/language-provider";
import { ScrollReveal } from "@/components/scroll-reveal";
import RealTimeWidget from "./realtime-widget";

export default function About() {
  const { lang } = useLanguage();

  const t = {
    en: {
      title: "About Me",
      stats: [
        { label: "Years Experience", value: "3+", color: "from-amber-400 to-orange-500", emoji: "🚀" },
        { label: "Projects Completed", value: "20+", color: "from-rose-400 to-pink-500", emoji: "✨" },
        { label: "Technologies", value: "15+", color: "from-blue-400 to-cyan-500", emoji: "💻" },
        { label: "Clients", value: "10+", color: "from-emerald-400 to-teal-500", emoji: "🤝" },
      ],
      p1: "I am a passionate Web Developer and lifelong learner based in Semarang. As an Informatics graduate from Universitas PGRI Semarang (2022), I have been building my career since 2021, focusing on creating scalable, accessible, and high-performance applications. Although I have a strong foundation in full-stack development, I have a deep interest in Front-End using technologies like Flutter, Next.js, and Tailwind CSS.",
      p2: "My development approach is always user-centric—ensuring the code not only works flawlessly but also provides an intuitive interface experience.",
      p3: "Thanks to this dedication, I am often trusted to lead various projects and solve technical challenges. Outside of coding, I am always enthusiastic about exploring new technologies and optimizing workflows to stay at the forefront of modern web development."
    },
    id: {
      title: "Tentang Saya",
      stats: [
        { label: "Tahun Pengalaman", value: "3+", color: "from-amber-400 to-orange-500", emoji: "🚀" },
        { label: "Proyek Selesai", value: "20+", color: "from-rose-400 to-pink-500", emoji: "✨" },
        { label: "Teknologi", value: "15+", color: "from-blue-400 to-cyan-500", emoji: "💻" },
        { label: "Klien", value: "10+", color: "from-emerald-400 to-teal-500", emoji: "🤝" },
      ],
      p1: "Saya adalah Pengembang Web yang bersemangat dan pembelajar abadi berbasis di Semarang. Sebagai lulusan Informatika Universitas PGRI Semarang (2022), saya telah berkarier sejak 2021, dengan fokus membangun aplikasi yang skalabel, mudah diakses, dan berkinerja tinggi. Meskipun memiliki fondasi kuat dalam ranah full-stack, saya menaruh minat besar pada Front-End menggunakan teknologi seperti Flutter, Next.js, dan Tailwind CSS.",
      p2: "Pendekatan pengembangan saya selalu berpusat pada pengguna—memastikan kode tidak hanya berfungsi sempurna, tetapi juga memberikan pengalaman antarmuka yang intuitif.",
      p3: "Berkat dedikasi ini, saya kerap dipercaya untuk memimpin berbagai proyek dan memecahkan tantangan teknis. Di luar coding, saya selalu antusias mengeksplorasi teknologi baru dan mengoptimalkan alur kerja untuk tetap berada di garis depan pengembangan web modern."
    }
  }[lang];

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <ScrollReveal>
        <div className="mb-12 flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500">
            {t.title} 🎯
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full"></div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Kolom Kiri: Teks Paragraf */}
        <div className="lg:col-span-7 text-lg text-muted-foreground leading-relaxed space-y-6 z-10">
          <ScrollReveal delay={0.1}>
            <p className="bg-accent/30 p-6 rounded-[2rem] border border-border shadow-sm backdrop-blur-sm">{t.p1}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="px-6">{t.p2}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="px-6">{t.p3}</p>
          </ScrollReveal>
        </div>

        {/* Kolom Kanan: Stats & Real-Time Widget */}
        <div className="lg:col-span-5 flex flex-col gap-8 z-10">
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-2 gap-4">
              {t.stats.map((stat, i) => (
                <div key={i} className="relative p-6 rounded-[2rem] bg-accent/50 border border-white/5 backdrop-blur-sm flex flex-col justify-center items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 group overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <span className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">{stat.emoji}</span>
                  <h3 className={`text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br ${stat.color} mb-1`}>
                    {stat.value}
                  </h3>
                  <p className="text-sm text-foreground font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="flex justify-center lg:justify-end mt-4">
              <RealTimeWidget />
            </div>
          </ScrollReveal>
        </div>
        
      </div>
    </section>
  );
}