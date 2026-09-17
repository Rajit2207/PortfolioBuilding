import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Computer Science & Engineering Student",
    organization: "REVA University",
    period: "2024 — Present",
    description: "Focusing on data structures, algorithms in C/C++, system architecture, and modern full-stack web development."
  },
  {
    role: "IoT Systems Developer",
    organization: "Academic Research Prototype",
    period: "May 2026",
    description: "Architected an automated drip irrigation solution utilizing ESP32 microcontrollers, moisture sensors, and relay pump switching."
  },
  {
    role: "Full-Stack Project Lead",
    organization: "Encrypted File Sharing System",
    period: "June 2026",
    description: "Designed secure distributed file transfer pipelines with role-based cryptographic authentication and end-to-end access policies."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800/80">
      <div className="flex items-center gap-3 mb-12">
        <Briefcase className="text-sky-400 w-7 h-7" />
        <h2 className="text-3xl font-bold tracking-tight text-white">Experience & Milestones</h2>
      </div>

      <div className="relative border-l border-slate-800 ml-4 space-y-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-8 group">
            {/* Timeline Dot */}
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400 group-hover:bg-sky-400 transition-colors" />

            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                {exp.role}
              </h3>
              <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </span>
            </div>

            <p className="text-sm font-medium text-sky-400 mb-2">
              {exp.organization}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}