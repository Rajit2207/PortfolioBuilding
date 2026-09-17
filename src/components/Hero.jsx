import { Download, ArrowRight, Terminal } from 'lucide-react';
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section id="about" className="relative pt-36 pb-20 px-6 max-w-5xl mx-auto text-center">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <span className="text-xs font-mono uppercase tracking-widest text-sky-400 bg-sky-950/60 border border-sky-800/80 px-3.5 py-1 rounded-full">
        Available for Collaborations & Roles
      </span>

      <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-6 tracking-tight leading-tight min-h-[120px] sm:min-h-[144px]">
        Engineering <br className="hidden sm:inline" />
        <Typewriter />
      </h1>

      <p className="text-slate-400 text-base sm:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
        Computer Science student passionate about systems programming, clean React frontends, and embedded device prototypes.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-sm transition-colors"
        >
          Explore Work <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg text-sm transition-colors"
        >
          <Download className="w-4 h-4" /> Get Resume
        </a>
      </div>

      {/* Terminal Preview Card */}
      <div className="mt-14 max-w-lg mx-auto bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden text-left shadow-2xl">
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5" /> bash
          </span>
        </div>
        <div className="p-4 font-mono text-xs text-slate-300 space-y-1.5 leading-relaxed">
          <p className="text-slate-500"># Check current developer configuration</p>
          <p><span className="text-sky-400">$</span> dev --focus</p>
          <p className="text-emerald-400">→ ["C/C++", "React", "ESP32", "Tailwind", "Python"]</p>
          <p><span className="text-sky-400">$</span> dev --status</p>
          <p className="text-amber-300">→ Open to software internships & builds</p>
        </div>
      </div>
    </section>
  );
}