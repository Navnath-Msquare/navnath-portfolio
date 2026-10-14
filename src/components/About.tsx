import React from 'react';
import {
  User,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  Code2,
  Server,
  Cloud,
  Palette,
  ExternalLink,
  MapPin,
  FileDown,
  CheckCircle2,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const stats = [
    {
      label: 'Professional Experience',
      value: '1+ Year',
      description: 'In Frontend & Full Stack Engineering',
      icon: Briefcase,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      label: 'Delivered Projects',
      value: '9+',
      description: 'Live platforms, portals & systems',
      icon: Layers,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      label: 'B.Tech Degree',
      value: '7.5 CGPA',
      description: 'Computer Science & Engineering (2024)',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Industry Roles',
      value: '3',
      description: 'MSquare, Ohana & Convivial',
      icon: Code2,
      color: 'from-cyan-500 to-emerald-500',
    },
  ];

  const pillars = [
    {
      title: 'Frontend Architecture',
      description:
        'Building responsive, modular, and accessible user interfaces with React.js, Next.js, Angular, TypeScript, and modern Tailwind CSS.',
      icon: Code2,
      tag: 'React / Next / Angular',
    },
    {
      title: 'Full Stack & APIs',
      description:
        'Designing secure REST APIs, role-based access control (RBAC), and relational database schemas with PHP, MySQL, and Node.js.',
      icon: Server,
      tag: 'PHP / MySQL / REST',
    },
    {
      title: 'Cloud & Deployments',
      description:
        'Managing production web server deployments on Plesk Server and configuring cloud resources on AWS (EC2 & S3).',
      icon: Cloud,
      tag: 'AWS EC2 / S3 / Plesk',
    },
    {
      title: 'Visual Identity & UX',
      description:
        'Creating high-impact visual content, marketing collateral, and brand assets using Canva, ensuring unified aesthetics.',
      icon: Palette,
      tag: 'Canva / Modern UI',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-950/60 text-purple-300 border border-purple-500/30">
            <User className="w-3.5 h-3.5 text-purple-400" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Driven by Clean Code &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
              Modern Web Architecture
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering scalable web solutions with a passion for exceptional user experience and robust full-stack delivery.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#090d1f]/80 border border-purple-500/20 p-6 backdrop-blur-md hover:border-purple-400/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-purple-950/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${stat.color} p-[1.5px]`}
                  >
                    <div className="w-full h-full bg-[#0a0f24] rounded-[10px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-purple-300 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-purple-300 transition-colors">
                    {stat.value}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-200 mb-1">{stat.label}</h3>
                <p className="text-xs text-slate-400">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Profile Card & Narrative Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Dedicated Developer Portrait Card */}
          <div className="lg:col-span-5 relative group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-cyan-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700 -z-10" />

            <div className="rounded-3xl bg-[#090d1f]/90 border border-purple-500/25 p-4 sm:p-6 backdrop-blur-xl shadow-2xl shadow-purple-950/40 space-y-5">
              {/* Developer Tech Identity Card (Replaces Photo) */}
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/40 shadow-inner group/img bg-gradient-to-b from-[#0b0f29] via-[#080c20] to-[#040612] p-4 sm:p-5">
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-purple-500/20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-[11px] font-mono text-purple-300/80 ml-2 hidden xs:inline">navnath.identity</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#030712]/85 text-emerald-300 border border-emerald-500/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Available For Hire</span>
                  </span>
                </div>

                {/* Center Hologram Avatar / Monogram */}
                <div className="py-5 sm:py-6 flex flex-col items-center justify-center text-center relative">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[2.5px] shadow-2xl shadow-purple-900/60 group-hover/img:scale-105 transition-transform duration-500">
                      <div className="w-full h-full bg-[#070b1e] rounded-[22px] flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:12px_12px] opacity-25" />
                        <span className="font-mono font-black text-2xl sm:text-3xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-cyan-300">
                          NB
                        </span>
                        <span className="text-[9px] font-mono text-purple-400/90 -mt-0.5">&lt;Dev /&gt;</span>
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-400 ring-2 ring-[#070b1e]" />
                  </div>

                  <div className="mt-3.5 sm:mt-4">
                    <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center gap-1.5">
                      <span>{personalInfo.name}</span>
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 inline" />
                    </h4>
                    <p className="text-xs text-purple-300 font-medium">
                      Full Stack Developer @ MSquare
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-300 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-purple-500/30">
                        <MapPin className="w-3 h-3 text-purple-400" />
                        <span>Pune, IN</span>
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        CSE '24
                      </span>
                    </div>
                  </div>
                </div>

                {/* Code Snippet Box */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/80 border border-purple-500/20 font-mono text-[11px] leading-relaxed text-slate-300 space-y-1">
                  <div className="text-slate-500">// Core Philosophy</div>
                  <div>
                    <span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = &#123;
                  </div>
                  <div className="pl-3">
                    <span className="text-slate-400">focus:</span> <span className="text-amber-300">"Scalable &amp; Clean Code"</span>,
                  </div>
                  <div className="pl-3">
                    <span className="text-slate-400">stack:</span> <span className="text-emerald-300">["React", "Next", "TS", "PHP"]</span>,
                  </div>
                  <div className="pl-3">
                    <span className="text-slate-400">status:</span> <span className="text-cyan-300">"Open to Opportunities"</span>
                  </div>
                  <div>&#125;;</div>
                </div>
              </div>

              {/* Quick Profile Summary Details */}
              <div className="space-y-3 pt-1">
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-slate-400 text-[11px]">Primary Focus</div>
                    <div className="text-white font-semibold mt-0.5">React • Next.js • TS</div>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-slate-400 text-[11px]">Backend &amp; DB</div>
                    <div className="text-white font-semibold mt-0.5">PHP • MySQL • REST</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-slate-400 text-[11px]">Deployments</div>
                    <div className="text-cyan-300 font-semibold mt-0.5">AWS &amp; Plesk Server</div>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-slate-400 text-[11px]">Education</div>
                    <div className="text-purple-300 font-semibold mt-0.5">B.Tech (7.5 CGPA)</div>
                  </div>
                </div>

                {/* Quick Profile CTAs */}
                <div className="flex flex-col xs:flex-row items-center gap-2 pt-2">
                  <a
                    href={personalInfo.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full xs:flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 border border-purple-400/40 shadow-md shadow-purple-950/40 transition-colors"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>View Resume PDF</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full xs:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl text-xs font-semibold text-slate-200 bg-[#0a66c2]/20 hover:bg-[#0a66c2]/40 border border-[#0a66c2]/40 transition-colors"
                    title="Connect on LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-[#0a66c2]" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Biography Card + 4 Pillars Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-[#090d1f]/90 border border-purple-500/20 p-5 sm:p-7 backdrop-blur-xl shadow-xl shadow-purple-950/20 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Professional Summary &amp; Background</span>
              </h3>

              <div className="space-y-3.5 text-slate-300 text-sm leading-relaxed">
                <p>
                  I hold a{' '}
                  <strong className="text-white font-semibold">
                    B.Tech in Computer Science &amp; Engineering
                  </strong>{' '}
                  from Bharati Vidyapeeth College of Engineering, Kolhapur (Graduation Year: 2024, CGPA: 7.5).
                  Over the past year, I have cultivated hands-on industry experience delivering production
                  web applications as a Full Stack and Frontend Developer in Pune, Maharashtra.
                </p>
                <p>
                  Currently serving as a{' '}
                  <strong className="text-purple-300 font-semibold">
                    Full Stack Developer at MSquare Software Pvt. Ltd.
                  </strong>
                  , I engineer dynamic web applications using React.js, Angular, and Tailwind CSS, while
                  overseeing API integrations, production deployments on Plesk Server, and code lifecycle management.
                </p>
                <p>
                  My previous work at{' '}
                  <strong className="text-purple-300 font-semibold">Ohana Technologies</strong>{' '}
                  focused on building fast Next.js applications and orchestrating cloud deployments on
                  AWS (EC2 &amp; S3), along with professional visual branding via Canva. Prior to that,
                  my internship at{' '}
                  <strong className="text-purple-300 font-semibold">Convivial Software</strong>{' '}
                  solidified my end-to-end full-stack capabilities across SQL, PHP, Express.js, React, and Node.js.
                </p>
                <p>
                  I believe in writing clean, readable, and testable code that seamlessly scales from mobile
                  devices to desktop environments without sacrificing design elegance.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="text-slate-400">
                  Current Base:{' '}
                  <span className="text-slate-200 font-medium">Pune, Maharashtra, India</span>
                </div>
                <a
                  href="#experience"
                  className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  <span>View Full Experience Timeline</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Core Competencies Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#090d1f]/70 border border-purple-500/15 p-5 backdrop-blur-md hover:border-purple-400/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between shadow-lg shadow-purple-950/20"
                  >
                    <div className="space-y-2.5">
                      <div className="w-9 h-9 rounded-xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:text-cyan-300 group-hover:bg-purple-600/20 transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                    <div className="mt-3.5 pt-2.5 border-t border-slate-800/60">
                      <span className="text-[11px] font-mono text-cyan-400 font-medium">
                        {pillar.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
