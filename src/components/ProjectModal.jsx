import { X, ExternalLink, Code2, CheckCircle } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-white mt-1 mb-4">{project.title}</h3>

        {/* Body Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {project.detailedDescription || project.description}
        </p>

        {/* Key Architectural Highlights */}
        {project.highlights && (
          <div className="mb-6 space-y-2.5">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Key Engineering Highlights
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700/60 px-3 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            <Code2 className="w-4 h-4" /> Source Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold rounded-lg transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}