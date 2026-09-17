import { useState } from 'react';
import { ExternalLink, Code2, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: "Encrypted File Sharing System",
    category: "Full-Stack",
    description: "Secure, end-to-end encrypted platform featuring role-based access control, automated cryptographic key generation, and audit logging.",
    tech: ["React", "Node.js", "Cryptography", "Tailwind CSS"],
    github: "https://github.com/Rajit2207",
    live: "https://example.com"
  },
  {
    title: "IoT Drip Irrigation Prototype",
    category: "Hardware / IoT",
    description: "Smart agricultural automation system using ESP32 controllers, telemetry monitoring, and automated relay pump triggers.",
    tech: ["C++", "ESP32", "IoT", "Sensors"],
    github: "https://github.com/Rajit2207",
    live: "https://example.com"
  },
  {
    title: "Road Accident Pattern Analyzer",
    category: "Data Analysis",
    description: "Analytical processing engine evaluating accident cluster patterns, road safety metrics, and location heatmaps from CSV datasets.",
    tech: ["Python", "Data Analysis", "Pandas", "Matplotlib"],
    github: "https://github.com/Rajit2207",
    live: "https://example.com"
  }
];

const categories = ["All", "Full-Stack", "Hardware / IoT", "Data Analysis"];

export default function Projects() {
  const [selected, setSelected] = useState("All");

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

        {/* Filter Badges */}
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
            className="flex flex-col justify-between bg-slate-900/50 border border-slate-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-sky-400">{item.category}</span>
                <div className="flex items-center gap-3 text-slate-400">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <Code2 className="w-5 h-5" />
                  </a>
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
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
    </section>
  );
}