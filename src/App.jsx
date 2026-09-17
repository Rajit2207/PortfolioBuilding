import React, { useState, useEffect } from 'react';
import { 
  Download, ArrowRight, Terminal, FolderGit2, Code2, 
  ExternalLink, Briefcase, Calendar, CheckCircle2, 
  Send, Mail, Copy, Check, ArrowUp, Menu, X, Star, GitBranch 
} from 'lucide-react';

// --- DATA ---
const projectsData = [
  {
    title: "Encrypted File Sharing System",
    category: "Full-Stack",
    description: "Secure, end-to-end encrypted platform featuring role-based access control, cryptographic key handling, and audit logging.",
    tech: ["React", "Node.js", "Cryptography", "Tailwind CSS"],
    github: "https://github.com/Rajit2207",
    live: "https://example.com"
  },
  {
    title: "IoT Drip Irrigation Prototype",
    category: "Hardware / IoT",
    description: "Smart agricultural automation system using ESP32 controllers, telemetry monitoring, and automated relay pump triggers.",
    tech: ["C++", "ESP32", "IoT", "Sensors"],
    github: "https://github.com/Rajit2207",
    live: "https://example.com"
  },
  {
    title: "Road Accident Pattern Analyzer",
    category: "Data Analysis",
    description: "Analytical processing engine evaluating accident cluster patterns, road safety metrics, and location heatmaps from CSV datasets.",
    tech: ["Python", "Data Analysis", "Pandas", "Matplotlib"],
    github: "https://github.com/Rajit2207",
    live: "https://example.com"
  }
];

const experiences = [
  {
    role: "Computer Science & Engineering Student",
    organization: "REVA University",
    period: "2024 — Present",
    description: "Focusing on data structures, algorithms in C/C++, system architecture, and modern full-stack web development."
  },
  {
    role: "IoT Systems Developer",
    organization: "Academic Research Prototype",
    period: "May 2026",
    description: "Architected an automated drip irrigation solution utilizing ESP32 microcontrollers, moisture sensors, and relay pump switching."
  },
  {
    role: "Full-Stack Project Lead",
    organization: "Encrypted File Sharing System",
    period: "June 2026",
    description: "Designed secure distributed file transfer pipelines with role-based cryptographic authentication and end-to-end access policies."
  }
];

const skills = [
  { category: "Languages", items: ["C", "C++", "JavaScript (ES6+)", "Python", "SQL"] },
  { category: "Frontend & UI", items: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Vite"] },
  { category: "Hardware & Systems", items: ["ESP32 DevKit", "Microcontroller Firmware", "IoT Sensors", "Serial Telemetry"] },
  { category: "Tools & DevOps", items: ["Git", "GitHub", "Vercel", "VS Code", "Postman"] }
];

const navLinks = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Contact form state
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const email = "rajit.m.krishna000@gmail.com";

  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress calculation
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
      setShowTopBtn(totalScroll > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setToastMessage("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    formData.append("access_key", "14e2f96d-cbb9-4ed8-96f0-2cd2d85af16f");

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setToastMessage("Message successfully delivered!");
        e.target.reset();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const categories = ["All", "Full-Stack", "Hardware / IoT", "Data Analysis"];
  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-slate-950">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-50 bg-transparent pointer-events-none">
        <div className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-400 transition-all duration-75" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#about" className="font-bold text-xl text-sky-400 tracking-tight">Rajit.dev</a>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-sky-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-400 hover:text-white">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-sky-400 text-sm">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="about" className="relative pt-36 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 bg-sky-950/60 border border-sky-800/80 px-3.5 py-1 rounded-full">
          Computer Science & Systems Engineering
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-6 tracking-tight leading-tight">
          Building Scalable Software & <br className="hidden sm:inline" />
          <span className="text-sky-400">Embedded Architectures</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          Passionate about C/C++ low-level systems, clean React frontends, and robust IoT prototypes.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-sm transition-colors">
            View Projects <ArrowRight className="w-4 h-4" />
          </a>
          <a href="/resume.pdf" download className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg text-sm transition-colors">
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>

        {/* Terminal Card */}
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
          <div className="p-4 font-mono text-xs text-slate-300 space-y-1.5">
            <p className="text-slate-500"># Current engineering parameters</p>
            <p><span className="text-sky-400">$</span> dev --focus</p>
            <p className="text-emerald-400">→ ["C/C++", "React", "ESP32", "Tailwind", "Python"]</p>
            <p><span className="text-sky-400">$</span> dev --status</p>
            <p className="text-amber-300">→ Open to software opportunities</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-3">
            <FolderGit2 className="text-sky-400 w-7 h-7" />
            <h2 className="text-3xl font-bold tracking-tight text-white">Featured Projects</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? "bg-sky-500 text-slate-950 font-semibold"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-between bg-slate-900/50 border border-slate-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-sky-400">{item.category}</span>
                  <div className="flex items-center gap-3 text-slate-400">
                    <a href={item.github} target="_blank" rel="noreferrer" className="hover:text-white"><Code2 className="w-5 h-5" /></a>
                    <a href={item.live} target="_blank" rel="noreferrer" className="hover:text-white"><ExternalLink className="w-5 h-5" /></a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{item.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                {item.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono text-slate-300 bg-slate-800 px-2.5 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800/80">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-sky-400 w-7 h-7" />
          <h2 className="text-3xl font-bold tracking-tight text-white">Experience & Milestones</h2>
        </div>
        <div className="relative border-l border-slate-800 ml-4 space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 group">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400 group-hover:bg-sky-400 transition-colors" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">{exp.role}</h3>
                <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400"><Calendar className="w-3.5 h-3.5" />{exp.period}</span>
              </div>
              <p className="text-sm font-medium text-sky-400 mb-2">{exp.organization}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-800/80">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-10 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-sky-400 mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, itemIdx) => (
                  <span key={itemIdx} className="text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700/60 px-3 py-1.5 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub Overview */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="https://github.com/Rajit2207" target="_blank" rel="noreferrer" className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl flex items-center justify-between hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3">
              <GitBranch className="text-sky-400 w-5 h-5" />
              <div>
                <p className="text-sm font-semibold text-white">Repositories & Commits</p>
                <p className="text-xs text-slate-400">View code contributions</p>
              </div>
            </div>
            <span className="text-xs font-mono text-sky-400 bg-slate-800 px-2.5 py-1 rounded">@Rajit2207</span>
          </a>
          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Star className="text-amber-400 w-5 h-5" />
              <div>
                <p className="text-sm font-semibold text-white">Open Source</p>
                <p className="text-xs text-slate-400">Continuous deployment</p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded">Active</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="py-20 px-6 border-t border-slate-800/80 bg-slate-950">
        <div className="max-w-2xl mx-auto space-y-8 text-center">
          <div className="space-y-2">
            <div className="flex justify-center items-center gap-2 text-sky-400">
              <Mail className="w-6 h-6" />
              <h2 className="text-3xl font-bold text-white tracking-tight">Get In Touch</h2>
            </div>
            <p className="text-slate-400 text-sm">Have a project or question? Send a message directly.</p>
            <button onClick={handleCopyEmail} className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-lg text-xs font-mono transition-colors">
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-sky-400" />}
              {copied ? "Copied!" : email}
            </button>
          </div>

          {submitted ? (
            <div className="p-8 bg-slate-900/60 border border-sky-500/30 rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-sky-400 mx-auto" />
              <h3 className="text-lg font-semibold text-white">Message Delivered</h3>
              <p className="text-sm text-slate-400">Thanks for reaching out! I'll reply shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                <input type="text" name="name" required className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500" placeholder="Ada Lovelace" />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
                <input type="email" name="email" required className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500" placeholder="ada@example.com" />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                <textarea name="message" rows="4" required className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 resize-none" placeholder="Let's build together..."></textarea>
              </div>
              <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-sm transition-colors disabled:opacity-50">
                <Send className="w-4 h-4" /> {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          <p className="text-xs text-slate-600 pt-8 border-t border-slate-900">
            © {new Date().getFullYear()} Rajit Krishna. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="fixed bottom-6 right-6 p-3 bg-slate-900/90 border border-slate-700 text-sky-400 hover:text-white rounded-full shadow-lg transition-colors z-40">
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-slate-900 border border-sky-500/40 text-slate-100 px-4 py-3 rounded-xl shadow-2xl">
          <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}