import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound({ onGoHome }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center px-6 text-center">
      <span className="text-xs font-mono uppercase tracking-widest text-sky-400 bg-sky-950/60 border border-sky-800 px-3 py-1 rounded-full mb-4">
        404 Error
      </span>
      <h1 className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight mb-4">
        Page not found
      </h1>
      <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-8">
        The destination you are trying to view does not exist or may have been moved.
      </p>

      <div className="flex gap-4">
        <button
          onClick={onGoHome}
          className="flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-sm transition-colors"
        >
          <Home className="w-4 h-4" /> Return Home
        </button>
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-5 py-2.5 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-lg text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </div>
    </div>
  );
}