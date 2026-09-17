export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
      <span className="text-sm font-semibold tracking-wider text-sky-400 uppercase">
        Full-Stack Developer
      </span>
      <h1 className="text-5xl font-extrabold text-white mt-4 tracking-tight">
        Building fast, scalable web applications.
      </h1>
      <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
        I specialize in modern React ecosystems, clean API design, and intuitive user interfaces.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-lg transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}