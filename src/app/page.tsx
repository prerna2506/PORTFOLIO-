import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import WorkingOn from "@/components/WorkingOn";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <WorkingOn />
      <Contact />
    </main>
  );
}
