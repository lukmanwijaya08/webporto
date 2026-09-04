import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Services from "@/components/services";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
    </div>
  );
}