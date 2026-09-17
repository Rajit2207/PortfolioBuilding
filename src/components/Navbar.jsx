export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl text-sky-400">DevPortfolio</span>
        <div className="flex gap-6 text-sm text-slate-300 font-medium">
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}