import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  FileDown,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formSubject || `Portfolio Inquiry from ${formName || 'Recruiter'}`);
    const body = encodeURIComponent(
      `Hi Navnath,\n\n${formMessage}\n\nFrom: ${formName} (${formEmail})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-950/60 text-purple-300 border border-purple-500/30">
            <Mail className="w-3.5 h-3.5 text-purple-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Discuss Your Next{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
              Project or Opportunity
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            I am currently open to full-time full-stack engineering roles, frontend contracts, and collaborative developer projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Developer Contact Profile Banner */}
            <div className="rounded-2xl bg-[#090d1f]/90 border border-purple-500/25 p-4 backdrop-blur-xl shadow-xl shadow-purple-950/20 flex items-center gap-3.5">
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-md shadow-purple-950/40">
                  <div className="w-full h-full bg-[#070b1e] rounded-[10px] flex items-center justify-center font-mono font-black text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                    NB
                  </div>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-[#030712]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-white truncate flex items-center gap-1.5">
                  <span>{personalInfo.name}</span>
                  <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">
                    Online
                  </span>
                </h4>
                <p className="text-xs text-slate-300 truncate">
                  Available for full-time full-stack engineering roles &amp; contracts
                </p>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="rounded-2xl bg-[#090d1f]/90 border border-purple-500/20 p-4 sm:p-6 backdrop-blur-xl shadow-xl shadow-purple-950/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/15 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Email Address
                    </h3>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-purple-300 break-all transition-colors"
                      title="Send Email"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-semibold"
                >
                  <span>Launch Mail App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-500 font-mono">Typically replies within 24h</span>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="rounded-2xl bg-[#090d1f]/90 border border-purple-500/20 p-4 sm:p-6 backdrop-blur-xl shadow-xl shadow-purple-950/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Phone Number
                    </h3>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors"
                      title="Call Navnath Bandgar"
                    >
                      {personalInfo.displayPhone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  <span>Direct Call / WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-500 font-mono">India (+91)</span>
              </div>
            </div>

            {/* Location & Social Card */}
            <div className="rounded-2xl bg-[#090d1f]/90 border border-purple-500/20 p-4 sm:p-6 backdrop-blur-xl shadow-xl shadow-purple-950/20 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-cyan-600/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Location
                  </h3>
                  <div className="text-sm sm:text-base font-bold text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Social Channels with SVG icons */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2 text-xs">
                <span className="text-slate-400 font-medium">Professional Profiles:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-purple-500/30 hover:border-purple-400 text-slate-200 hover:text-white transition-all text-xs font-semibold"
                    title="LinkedIn Profile"
                  >
                    <svg className="w-4 h-4 fill-[#0a66c2]" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-purple-500/30 hover:border-purple-400 text-slate-200 hover:text-white transition-all text-xs font-semibold"
                    title="GitHub Profile"
                  >
                    <svg className="w-4 h-4 fill-slate-200" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Download Feature Card */}
            <div className="rounded-2xl bg-gradient-to-r from-purple-950/50 via-indigo-950/40 to-blue-950/50 border border-purple-500/30 p-4 sm:p-6 backdrop-blur-md shadow-xl flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 sm:gap-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span>Looking for My Resume?</span>
                </h4>
                <p className="text-xs text-slate-300">
                  Download the official Navnath Bandgar Resume PDF.
                </p>
              </div>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-md shadow-purple-600/30 transition-all shrink-0 w-full xs:w-auto justify-center"
                title="Open & View Navnath Resume PDF"
              >
                <FileDown className="w-4 h-4" />
                <span>View Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#090d1f]/90 border border-purple-500/20 p-5 sm:p-7 md:p-8 backdrop-blur-xl shadow-xl shadow-purple-950/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-600/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Send Me a Message</h3>
                <p className="text-xs text-slate-400">
                  Fill out the form below to initiate direct communication via your email client.
                </p>
              </div>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. John Doe / Recruiter"
                    className="w-full px-4 py-3 rounded-xl bg-[#0c1228] border border-slate-700 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0c1228] border border-slate-700 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  placeholder="Full Stack Opportunity / Project Discussion"
                  className="w-full px-4 py-3 rounded-xl bg-[#0c1228] border border-slate-700 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Share role details, project scope, timeline, or just say hello..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0c1228] border border-slate-700 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <span>Send Message to Navnath</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
