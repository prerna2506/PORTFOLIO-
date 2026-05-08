import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import Experience from "@/components/Experience";
import WorkingOn from "@/components/WorkingOn";
import Contact from "@/components/Contact";
import FloatingSidebar from "@/components/FloatingSidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] selection:bg-white/20">
      {/* Hero */}
      <div className="relative h-screen">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Professional flow: Skills → Projects → Experience → About/Why I Build → Contact */}
      <Skills />
      <Projects />
      <CaseStudy />
      <Experience />
      <WorkingOn />
      <Contact />

      {/* Floating quick-access */}
      <FloatingSidebar />
    </main>
  );
}
