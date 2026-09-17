import { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import Toast from './Toast';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const email = "rajit.m.krishna000@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setToastMessage("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "14e2f96d-cbb9-4ed8-96f0-2cd2d85af16f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setToastMessage("Message sent successfully!");
        setTimeout(() => setToastMessage(''), 4000);
        e.target.reset();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="py-20 px-6 border-t border-slate-800/80 bg-slate-950 relative">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="flex justify-center items-center gap-2 text-sky-400">
            <Mail className="w-6 h-6" />
            <h2 className="text-3xl font-bold text-white tracking-tight">Get In Touch</h2>
          </div>
          <p className="text-slate-400 text-sm">
            Have a question or want to collaborate? Send a note directly.
          </p>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-lg text-xs font-mono transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-sky-400" />}
            {copied ? "Copied!" : email}
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center p-8 bg-slate-900/60 border border-sky-500/30 rounded-xl text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-sky-400" />
            <h3 className="text-lg font-semibold text-white">Message Delivered</h3>
            <p className="text-sm text-slate-400">Thanks for reaching out! I'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                placeholder="Ada Lovelace"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                placeholder="ada@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors resize-none"
                placeholder="Let's build something together..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-sm transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        <p className="text-xs text-center text-slate-600 pt-8 border-t border-slate-900">
          © {new Date().getFullYear()} Rajit Krishna. All rights reserved.
        </p>
      </div>

      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </footer>
  );
}