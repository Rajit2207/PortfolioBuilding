import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import NotFound from './components/NotFound';

export default function App() {
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    // Flag any subpaths other than home or hash anchors
    if (window.location.pathname !== '/' && window.location.pathname !== '') {
      setIsNotFound(true);
    }
  }, []);

  const handleGoHome = () => {
    window.history.pushState({}, '', '/');
    setIsNotFound(false);
  };

  if (isNotFound) {
    return <NotFound onGoHome={handleGoHome} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <GithubStats />
      </main>
      <Contact />
      <BackToTop />
    </div>
  );
}