import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Weather Dashboard Application",
    category: "UI/UX & Frontend",
    image: "/weather.png",
    link: "#"
  },
  {
    id: 2,
    title: "E-commerce & Streaming UI Analysis",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2940&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Background Removal Tool",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2940&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "AI Response Evaluation System",
    category: "Content & Language Analysis",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 5,
    title: "Portfolio Website with 3D Character",
    category: "UI/UX & Frontend",
    image: "/charcter.png",
    link: "#"
  },
  {
    id: 6,
    title: "Personal Blog Website",
    category: "Content & Frontend",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940&auto=format&fit=crop",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="bg-[#121212] min-h-screen py-32 px-8 md:px-24 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-neutral-400 font-light max-w-2xl">
            A collection of recent projects focusing on seamless interaction, stunning aesthetics, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              className="group relative flex flex-col gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="flex justify-between items-center px-2 pb-2">
                <div>
                  <h3 className="text-xl font-medium text-white mb-1 group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {project.category}
                  </p>
                </div>
                
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
