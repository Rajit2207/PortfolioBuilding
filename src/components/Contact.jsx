import { Mail, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-white tracking-tight">Let's Connect</h2>
        <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
          Open to full-stack engineering roles, IoT collaborations, and system architecture projects.
        </p>
        
        <div className="flex justify-center gap-4 pt-2">
          <a
            href="mailto:rajit.m.krishna000@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-sm transition-colors"
          >
            <Mail className="w-4 h-4" /> Send Email
          </a>
          <a
            href="https://github.com/Rajit2207"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-lg text-sm transition-colors"
          >
            <Globe className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-slate-600 pt-12">
          © {new Date().getFullYear()} Rajit Krishna. Built with React, Vite & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}