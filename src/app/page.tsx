import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import WorkingOn from "@/components/WorkingOn";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import { getAllPosts } from "@/lib/blogs";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <WorkingOn />
      <Blogs posts={posts} />
      <Contact />
    </main>
  );
}
