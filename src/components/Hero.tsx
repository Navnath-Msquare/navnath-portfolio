import React, { useState } from 'react';
import {
  FileDown,
  ArrowRight,
  Send,
  MapPin,
  Code2,
  Cpu,
  CheckCircle2,
  Copy,
  Check,
  User,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'developer' | 'stack' | 'architecture'>('profile');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] bg-blue-600/12 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pills & Profile Avatar Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <a
                href="#about"
                className="inline-flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full text-xs font-medium bg-slate-900/90 text-slate-200 border border-purple-500/40 hover:border-purple-400 backdrop-blur-md shadow-md shadow-purple-950/40 transition-all group"
                title="View full profile"
              >
                <div className="relative">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1px] group-hover:scale-105 transition-transform">
                    <div className="w-full h-full bg-[#030712] rounded-full flex items-center justify-center font-mono font-bold text-[9px] text-purple-300">
                      NB
                    </div>
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-1 ring-[#030712]" />
                </div>
                <span className="font-semibold text-white">{personalInfo.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-mono">
                  Full Stack
                </span>
              </a>

              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                {personalInfo.availability}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900/70 text-slate-300 border border-slate-700/60 backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
                  {personalInfo.name}
                </span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="h-[2px] w-8 bg-gradient-to-r from-purple-500 to-indigo-500 hidden sm:inline-block" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">
                    Full Stack Developer
                  </span>{' '}
                  <span className="text-slate-500">|</span>{' '}
                  <span className="text-slate-300 font-normal">
                    Building Modern Web Experiences
                  </span>
                </h2>
              </div>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Specializing in scalable frontend and full-stack development with{' '}
              <strong className="text-purple-300 font-semibold">React.js</strong>,{' '}
              <strong className="text-purple-300 font-semibold">Next.js</strong>, and{' '}
              <strong className="text-purple-300 font-semibold">TypeScript</strong>. Proven track record
              in building high-performance responsive UIs, integrating secure REST APIs, and managing
              cloud deployments across AWS and Plesk.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 border border-purple-500/40 hover:border-purple-400 hover:bg-slate-800/90 hover:text-white shadow-md shadow-purple-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
                title="Open & View Navnath Resume PDF"
              >
                <FileDown className="w-4 h-4 text-purple-400 group-hover:translate-y-0.5 transition-transform" />
                <span>View Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-slate-200 bg-[#0a66c2]/15 border border-[#0a66c2]/40 hover:bg-[#0a66c2]/30 hover:border-[#0a66c2] hover:text-white transition-all duration-200 group"
                title="View Navnath Bandgar's LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-[#0a66c2] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Email Copy & Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 hover:text-purple-300 transition-colors focus:outline-none cursor-pointer"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                )}
                <span>{copiedEmail ? 'Copied to clipboard!' : personalInfo.email}</span>
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
                title="Connect on LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-[#0a66c2]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
                <span>navnath-b-8a5aba241</span>
              </a>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                <span>B.Tech CSE Graduate (2024)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Themed Interactive IDE / Visual Component */}
          <div className="lg:col-span-5 relative">
            {/* Ambient background glow behind terminal */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-cyan-500/30 rounded-2xl blur-xl opacity-75 -z-10 group-hover:opacity-100 transition duration-1000" />

            <div className="relative rounded-2xl bg-[#090d1f]/95 border border-purple-500/30 shadow-2xl shadow-purple-950/60 overflow-hidden backdrop-blur-xl">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0c1228] border-b border-purple-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">
                    navnath-dev-workspace
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors flex items-center gap-1 ${
                      activeTab === 'profile'
                        ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <User className="w-3 h-3 text-purple-400" />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('developer')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === 'developer'
                        ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Navnath.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === 'stack'
                        ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Skills.json
                  </button>
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === 'architecture'
                        ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Deploy.log
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto min-h-[300px]">
                {activeTab === 'profile' && (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                      {/* Stylized Developer Card / Monogram Badge */}
                      <div className="relative group shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500" />
                        <div className="relative w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden border-2 border-purple-400/40 shadow-xl bg-gradient-to-b from-[#0a0f26] via-[#070b1e] to-[#030712] flex flex-col items-center justify-center p-3 text-center">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-[2px] shadow-lg shadow-purple-950/60 mb-2 group-hover:scale-105 transition-transform duration-300">
                            <div className="w-full h-full bg-[#05091a] rounded-[14px] flex items-center justify-center font-mono font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                              NB
                            </div>
                          </div>
                          <span className="text-[11px] font-bold text-white tracking-wide">Developer</span>
                          <span className="text-[9px] font-mono text-purple-300/80">Full Stack</span>
                          <div className="mt-2 text-center">
                            <span className="text-[9px] font-mono text-cyan-300 bg-slate-950/90 px-2 py-0.5 rounded-full border border-cyan-500/30">
                              Pune, IN
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Details & Live Metrics */}
                      <div className="space-y-2 text-center sm:text-left flex-1 font-sans">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-[11px] font-medium text-emerald-300 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            <span>Full Stack Engineer</span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                            {personalInfo.name}
                          </h3>
                          <p className="text-xs text-purple-300 font-medium">
                            MSquare Software Pvt. Ltd.
                          </p>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed font-normal">
                          Crafting scalable web systems with React.js, Next.js, TypeScript &amp; cloud server deployments.
                        </p>

                        {/* Credentials Tags */}
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-1 text-[11px] font-mono">
                          <span className="px-2 py-0.5 rounded bg-purple-900/40 text-purple-300 border border-purple-500/30">
                            B.Tech CSE '24
                          </span>
                          <span className="px-2 py-0.5 rounded bg-blue-900/40 text-blue-300 border border-blue-500/30">
                            9+ Projects
                          </span>
                          <span className="px-2 py-0.5 rounded bg-cyan-900/40 text-cyan-300 border border-cyan-500/30">
                            AWS &amp; Plesk
                          </span>
                        </div>

                        {/* Quick Flip CTA to Terminal */}
                        <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                          <button
                            onClick={() => setActiveTab('developer')}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/40 transition-colors"
                          >
                            <Code2 className="w-3.5 h-3.5 text-purple-400" />
                            <span>View Code (Navnath.ts)</span>
                          </button>
                          <a
                            href={personalInfo.resumePath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                          >
                            <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Resume PDF</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'developer' && (
                  <div className="space-y-1">
                    <div className="text-slate-500">// Source of Truth: Navnath Resume</div>
                    <div>
                      <span className="text-pink-400">const</span>{' '}
                      <span className="text-blue-300">developer</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-300">name</span>:{' '}
                      <span className="text-emerald-300">"{personalInfo.name}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-300">role</span>:{' '}
                      <span className="text-emerald-300">"Full Stack Developer"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-300">location</span>:{' '}
                      <span className="text-emerald-300">"Pune, Maharashtra, India"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-300">currentCompany</span>:{' '}
                      <span className="text-cyan-300">"MSquare Software Pvt. Ltd."</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-300">education</span>:{' '}
                      <span className="text-yellow-300">"B.Tech CSE (2024, CGPA 7.5)"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-300">coreSpecialty</span>: [
                    </div>
                    <div className="pl-8 text-amber-200">
                      "React.js", "Next.js", "TypeScript", "Tailwind CSS", "PHP", "MySQL"
                    </div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                      <span className="text-purple-300">cloudAndTools</span>: [
                    </div>
                    <div className="pl-8 text-indigo-300">
                      "AWS EC2", "AWS S3", "Plesk", "Git", "Canva"
                    </div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                      <span className="text-purple-300">availableForHire</span>:{' '}
                      <span className="text-emerald-400 font-bold">true</span>
                    </div>
                    <div>&#125;;</div>
                    <div className="pt-2 text-slate-500">
                      <span className="text-cyan-400">export default</span> developer;
                    </div>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="space-y-1">
                    <div className="text-slate-500">// Verified Technical Capabilities</div>
                    <div className="text-purple-300">&#123;</div>
                    <div className="pl-4">
                      <span className="text-blue-300">"frontend"</span>: [
                      <div className="pl-4 text-emerald-300">
                        "React.js", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"
                      </div>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">"backend_database"</span>: [
                      <div className="pl-4 text-amber-300">
                        "PHP", "MySQL", "REST APIs", "Node.js", "Express.js"
                      </div>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">"deployments"</span>: [
                      <div className="pl-4 text-cyan-300">
                        "AWS (EC2, S3)", "Plesk Server", "Git / GitHub"
                      </div>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">"design_tooling"</span>: [
                      <div className="pl-4 text-pink-300">
                        "Canva Pro", "Brand Identity", "Interactive UI"
                      </div>
                      ]
                    </div>
                    <div className="text-purple-300">&#125;</div>
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="space-y-1.5 text-xs">
                    <div className="text-slate-500">// Deployment & Production Operations</div>
                    <div className="text-emerald-400">✓ Plesk Production Server: Active & Verified</div>
                    <div className="text-emerald-400">✓ AWS Cloud S3 / EC2: Configured</div>
                    <div className="text-cyan-300">✓ REST APIs: Authentication & RBAC Enabled</div>
                    <div className="text-purple-300">✓ Projects Delivered: 9 Production &amp; Client Platforms</div>
                    <div className="text-slate-400 pt-2">
                      $ git commit -m "Deploy responsive client portals & LMS"
                    </div>
                    <div className="text-emerald-400">
                      [main 8c9d2f] 100% responsive, high Core Web Vitals score
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer Metrics Bar */}
              <div className="px-4 py-2.5 bg-[#070b1a] border-t border-purple-500/20 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  <span>Ready for Production</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>UTF-8</span>
                  <span className="text-purple-400 font-mono">React 19 + TS</span>
                </div>
              </div>
            </div>

            {/* Floating micro badges around visual */}
            <div className="absolute -bottom-5 -left-4 bg-[#0d142f]/90 backdrop-blur-md border border-purple-500/30 rounded-xl px-3.5 py-2 shadow-lg shadow-purple-950/50 flex items-center gap-2.5 hidden sm:flex">
              <div className="p-1.5 rounded-lg bg-purple-600/20 text-purple-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">Full Stack Expertise</div>
                <div className="text-[10px] text-slate-400">Clean, Scalable Architecture</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-[#0d142f]/90 backdrop-blur-md border border-cyan-500/30 rounded-xl px-3.5 py-2 shadow-lg shadow-cyan-950/50 flex items-center gap-2.5 hidden sm:flex">
              <div className="p-1.5 rounded-lg bg-cyan-600/20 text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">AWS &amp; Plesk Cloud</div>
                <div className="text-[10px] text-slate-400">Production Deployments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
