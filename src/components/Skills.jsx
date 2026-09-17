import { Code2, Database, Cpu, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C", "C++", "Python", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Frontend & UI",
    icon: Wrench,
    skills: ["React", "Tailwind CSS", "Vite", "PostCSS"]
  },
  {
    title: "Hardware & IoT",
    icon: Cpu,
    skills: ["ESP32 DEVKIT V1", "Embedded Sensors", "Relay Controls"]
  },
  {
    title: "Tools & Systems",
    icon: Database,
    skills: ["Git", "GitHub CLI", "Linux", "VS Code"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      <div className="flex items-center gap-3 mb-10">
        <Code2 className="text-sky-400 w-7 h-7" />
        <h2 className="text-3xl font-bold tracking-tight text-white">Technical Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div
              key={idx}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-5"
            >
              <div className="flex items-center gap-2 mb-4 text-sky-400">
                <Icon className="w-5 h-5" />
                <h3 className="font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-400 font-mono">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400/70" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}