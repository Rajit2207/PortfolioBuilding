import { useState } from 'react';
import { ExternalLink, Code2, FolderGit2, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "Encrypted File Sharing System",
    category: "Full-Stack",
    description: "Secure, end-to-end encrypted platform featuring role-based access control, cryptographic key handling, and audit logging.",
    detailedDescription: "A multi-tier platform built with strict end-to-end data security standards. Features dynamic AES/RSA client-side cryptography, ephemeral token sessions, and structured relational auditing pipelines.",
    highlights: [
      "Client-side envelope encryption protecting files at rest and in transit.",
      "Fine-grained role-based permissions with expiring link generation.",
      "Comprehensive activity logging preventing tampering and unauthorized access."
    ],
    tech: ["React", "Node.js", "Cryptography", "Tailwind CSS"],
    github: "https://github.com/Rajit2207",
    live: "https://example.com"
  },
  {
    title: "IoT Drip Irrigation Prototype",
    category: "Hardware / IoT",
    description: "Smart agricultural automation system using ESP32 controllers, telemetry monitoring, and automated relay pump triggers.",
    detailedDescription: "An embedded hardware automation pipeline designed to conserve water using automated soil moisture thresholds and sensor telemetry.",
    highlights: [
      "ESP32 firmware handling periodic sensor readings with low power consumption.",
      "Hardware relay control calibrated against dry/wet soil thresholds.",
      "Real-time diagnostic readout using embedded serial telemetry."
    ],
    tech: ["C++", "ESP32", "IoT", "Sensors"],
    github: "https://github.com/Rajit2207",
    live: "https://example.com"
  },
  {
    title: "Road Accident Pattern Analyzer",
    category: "Data Analysis",
    description: "Analytical processing engine evaluating accident cluster patterns, road safety metrics, and location heatmaps from CSV datasets.",
    detailedDescription: "A Python analytical tool designed to clean, normalize, and process municipal traffic accident logs to extract actionable infrastructure danger zones.",
    highlights: [
      "Data pipeline filtering and categorizing records across multiple parameters.",
      "Frequency distribution mapping across weather and lighting conditions.",
      "Clear visual plots to guide localized civil infrastructure safety reports."
    ],
    tech: ["Python", "Data Analysis", "Pandas", "Matplotlib"],
    github: "https://github.com/Rajit2207",
    live: "https://example.com"
  }
];

const categories = ["All", "Full-Stack", "Hardware / IoT", "Data Analysis"];

export default function Projects() {
  const [selected, setSelected] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filtered = selected === "All" 
    ? projects 
    : projects.filter(p => p.category === selected);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-3">
          <FolderGit2 className="text-sky-400 w-7 h-7" />
          <h2 className="text-3xl font-bold tracking-tight text-white">Featured Projects</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selected === cat
                  ? "bg-sky-500 text-slate-950 font-semibold"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setActiveModalProject(item)}
            className="cursor-pointer flex flex-col justify-between bg-slate-900/50 border border-slate-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 group"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-sky-400">{item.category}</span>
                <span className="text-slate-500 group-hover:text-sky-400 transition-colors flex items-center text-xs font-mono gap-1">
                  Details <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
              {item.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-mono text-slate-300 bg-slate-800 px-2.5 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}