export default function Skills() {
  const skills = [
    "UI/UX Design", "Frontend Development", "HTML/CSS", "JavaScript", "React", 
    "Tailwind CSS", "Python", "Content Writing", "Problem Solving"
  ];

  return (
    <section className="bg-[#121212] py-32 px-8 md:px-24 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">
            Skills & Expertise
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span 
                key={i} 
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-200 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-blue-600 hover:border-blue-400 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">
            Certifications
          </h2>
          <ul className="space-y-6">
            <li className="flex flex-col gap-1 border-b border-white/5 pb-4">
              <span className="text-lg text-white font-medium">Front-End Development with React JS</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-white/5 pb-4">
              <span className="text-lg text-white font-medium">Problem Solving and Python Basics</span>
              <span className="text-sm text-neutral-400">HackerRank</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-white/5 pb-4">
              <span className="text-lg text-white font-medium">Internet of Things (IoT)</span>
              <span className="text-sm text-neutral-400">NPTEL</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-white/5 pb-4">
              <span className="text-lg text-white font-medium">Public Speaking</span>
              <span className="text-sm text-neutral-400">NPTEL</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
