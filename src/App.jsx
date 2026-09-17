import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-slate-950">
      <Navbar />
      <main className="space-y-12">
        <Hero />
        <Projects />
      </main>
    </div>
  );
}