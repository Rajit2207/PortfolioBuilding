export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <span className="text-sm font-semibold tracking-wider text-sky-400 uppercase">
        Full-Stack Developer
      </span>
      <h1 className="text-5xl font-extrabold text-white mt-4 tracking-tight sm:text-6xl">
        Building fast, scalable web applications.
      </h1>
      {/* remaining content */}
    </section>
  );
}