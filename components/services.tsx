"use client";
import { Monitor, Code, Smartphone, Zap } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { ScrollReveal } from "@/components/scroll-reveal";
import { StaggeredGrid, StaggeredCard } from "@/components/staggered-grid";

export default function Services() {
  const { lang } = useLanguage();

  const title = lang === "en" ? "What I Can Do" : "Apa yang Bisa Saya Lakukan";

  const services = [
    {
      title: { en: "Web Development", id: "Pengembangan Web" },
      description: { en: "Building modern, fast, and responsive websites tailored to your needs.", id: "Membangun situs web modern, cepat, dan responsif yang disesuaikan dengan kebutuhan Anda." },
      icon: <Monitor size={28} className="text-white" />,
      color: "bg-gradient-to-br from-amber-400 to-orange-500",
      shadow: "shadow-orange-500/30"
    },
    {
      title: { en: "Frontend Development", id: "Pengembangan Frontend" },
      description: { en: "Crafting beautiful interfaces using React, Next.js, and Tailwind CSS.", id: "Merancang antarmuka yang indah menggunakan React, Next.js, dan Tailwind CSS." },
      icon: <Code size={28} className="text-white" />,
      color: "bg-gradient-to-br from-rose-400 to-pink-500",
      shadow: "shadow-pink-500/30"
    },
    {
      title: { en: "UI Implementation", id: "Implementasi UI" },
      description: { en: "Translating pixel-perfect Figma designs into functional, responsive web components.", id: "Menerjemahkan desain Figma yang presisi menjadi komponen web yang fungsional dan responsif." },
      icon: <Smartphone size={28} className="text-white" />,
      color: "bg-gradient-to-br from-blue-400 to-cyan-500",
      shadow: "shadow-cyan-500/30"
    },
    {
      title: { en: "Website Optimization", id: "Optimasi Website" },
      description: { en: "Improving performance, accessibility, and SEO for better user experiences.", id: "Meningkatkan performa, aksesibilitas, dan SEO untuk pengalaman pengguna yang lebih baik." },
      icon: <Zap size={28} className="text-white" />,
      color: "bg-gradient-to-br from-emerald-400 to-teal-500",
      shadow: "shadow-teal-500/30"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold mb-4">{title} 💡</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full mx-auto"></div>
        </div>
      </ScrollReveal>

      <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <StaggeredCard key={idx} className="h-full">
            <div className="p-8 rounded-[2.5rem] bg-accent border border-border hover:-translate-y-3 hover:shadow-xl transition-all duration-300 h-full group flex flex-col items-center text-center">

              {/* Lingkaran Ikon Ceria */}
              <div className={`w-20 h-20 rounded-[1.5rem] rotate-3 group-hover:rotate-12 transition-transform duration-300 ${service.color} ${service.shadow} shadow-lg flex items-center justify-center mb-8`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-extrabold mb-4 text-foreground">{service.title[lang]}</h3>
              <p className="text-muted-foreground font-medium text-sm leading-relaxed">{service.description[lang]}</p>
            </div>
          </StaggeredCard>
        ))}
      </StaggeredGrid>
    </section>
  );
}