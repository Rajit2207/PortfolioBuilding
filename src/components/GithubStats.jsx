import { GitBranch, Star, Terminal } from 'lucide-react';

export default function GithubStats() {
  const username = "Rajit2207";

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto border-t border-slate-800/80">
      <div className="flex items-center gap-3 mb-8">
        <Terminal className="text-sky-400 w-6 h-6" />
        <h3 className="text-2xl font-bold text-white">GitHub Activity</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl flex items-center justify-between hover:border-slate-700 transition-colors"
        >
          <div className="flex items-center gap-3">
            <GitBranch className="text-sky-400 w-5 h-5" />
            <div>
              <p className="text-sm font-semibold text-white">Repositories & Commits</p>
              <p className="text-xs text-slate-400">View live code contributions</p>
            </div>
          </div>
          <span className="text-xs font-mono text-sky-400 bg-slate-800 px-2.5 py-1 rounded">@{username}</span>
        </a>

        <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Star className="text-amber-400 w-5 h-5" />
            <div>
              <p className="text-sm font-semibold text-white">Open Source</p>
              <p className="text-xs text-slate-400">Public repositories & demos</p>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded">Active</span>
        </div>
      </div>
    </section>
  );
}