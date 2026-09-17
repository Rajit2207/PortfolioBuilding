import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        import GithubStats from './components/GithubStats';

// Inside App():
// ...
<Skills />
<GithubStats />
<Contact />
      </main>
      <Contact />
      <BackToTop />
    </div>
  );
}