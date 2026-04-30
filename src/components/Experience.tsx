export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Content Writer",
      company: "Finanjo",
      date: " 2025 - 2026",
      points: [
        "Write research-based articles on finance, banking, and investment topics.",
        "Simplify complex concepts into clear, user-friendly language for a broad audience.",
        "Ensure accuracy, clarity, and logical structure in content.",
        "Optimize articles for readability and user intent.",
        "Maintain consistency in tone, grammar, and information flow."
      ]
    },
    {
      id: 2,
      title: "Python Programming Intern",
      company: "Edulyt India",
      date: " 2024 -  2024",
      points: [
        "Worked on logic-based tasks involving structured problem solving.",
        "Analyzed outputs and identified inconsistencies to improve accuracy.",
        "Strengthened analytical thinking and pattern recognition skills."
      ]
    },
    {
      id: 3,
      title: "Frontend Developer Intern",
      company: "Grras Solutions Pvt. Ltd.",
      date: " 2024 -  2024",
      points: [
        "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
        "Improved clarity and structure of user-facing content.",
        "Translated design concepts into clean and functional layouts.",
        "Ensured consistency and usability across web pages."
      ]
    }
  ];

  return (
    <section className="bg-[#121212] py-32 px-8 md:px-24 border-t border-white/5 relative z-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">
          Experience
        </h2>

        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative border-l border-white/10 pl-8 ml-4">
              <div className="absolute w-4 h-4 bg-white rounded-full -left-[9px] top-2" />

              <div className="mb-2">
                <span className="text-sm text-neutral-400 font-mono tracking-wider">{exp.date}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-1">{exp.title}</h3>
              <h4 className="text-lg text-neutral-300 mb-6 font-light">{exp.company}</h4>

              <ul className="space-y-3 text-neutral-400 font-light leading-relaxed list-disc list-inside">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
