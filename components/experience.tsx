"use client";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/components/language-provider";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Experience() {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <ScrollReveal>
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">
            {lang === "en" ? "My Work " : "Pengalaman "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500">
              {lang === "en" ? "Experience" : "Kerja"} 🎒
            </span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-[15px] md:left-1/2 top-4 bottom-0 w-1.5 rounded-full bg-gradient-to-b from-amber-400 via-rose-500 to-blue-500 opacity-50 md:-translate-x-1/2"></div>

        {experiences.map((exp, idx) => (
          <ScrollReveal delay={idx * 0.15} key={idx}>
            <div className="relative flex flex-col md:flex-row items-start mb-16 group">

              <div className="hidden md:block w-1/2 text-right pr-14 pt-2">
                <h3 className="text-2xl font-extrabold text-foreground group-hover:text-amber-500 transition-colors">
                  {(exp.company as any)[lang]}
                </h3>
                <span className="inline-block px-4 py-1.5 mt-3 rounded-full bg-accent text-sm font-bold text-muted-foreground border border-border">
                  {exp.year}
                </span>
              </div>

              <div className="absolute left-0 md:left-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 border-4 border-background shadow-lg shadow-rose-500/30 md:-translate-x-1/2 mt-2 z-10 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
              
                <div className="absolute inset-0 flex items-center justify-center text-white text-[10px]">✦</div>
              </div>

              <div className="w-full md:w-1/2 pl-12 md:pl-14 pt-2 text-left">
                <div className="md:hidden mb-4">
                  <h3 className="text-xl font-extrabold text-amber-500">
                    {(exp.company as any)[lang]}
                  </h3>
                  <span className="inline-block px-3 py-1 mt-2 rounded-full bg-accent text-xs font-bold text-muted-foreground">
                    {exp.year}
                  </span>
                </div>

                <div className="bg-accent/40 p-8 rounded-[2rem] border border-border hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 hover:-translate-y-1">
                  <h4 className="text-xl font-extrabold text-foreground mb-3">
                    {(exp.position as any)[lang]}
                  </h4>

                  <p className="text-muted-foreground font-medium text-sm md:text-base leading-relaxed mb-6">
                    {(exp.description as any)[lang]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="text-xs font-extrabold px-4 py-2 bg-background border border-border rounded-full text-foreground hover:bg-amber-500 hover:text-white transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}