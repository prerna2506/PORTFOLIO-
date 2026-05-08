import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import Skills from "@/components/Skills";
import WorkingOn from "@/components/WorkingOn";
import InteractiveDemos from "@/components/InteractiveDemos";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] selection:bg-white/20">
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Experience />
      <Projects />
      <CaseStudy />
      <Skills />
      <WorkingOn />
      <InteractiveDemos />
      <Contact />
    </main>
  );
}
