import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-950/60 text-purple-300 border border-purple-500/30">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
              Industry Roles
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Verifiable roles and responsibilities accurately reflected from my professional resume.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-400 opacity-40" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-12 md:pl-20 group"
              >
                {/* Timeline Node Icon */}
                <div className="absolute left-2.5 md:left-6.5 top-1.5 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0f26] border-2 border-purple-400 flex items-center justify-center text-purple-300 shadow-md shadow-purple-600/30 group-hover:scale-110 group-hover:border-cyan-300 group-hover:text-cyan-300 transition-all duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-400 group-hover:bg-cyan-300 transition-colors" />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl bg-[#090d1f]/90 border border-purple-500/20 p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-purple-950/20 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-950/80 text-purple-300 border border-purple-500/30">
                          {exp.type}
                        </span>
                        {index === 0 && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current Role
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-2 mt-1">
                        <Building2 className="w-4 h-4 text-purple-400" />
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-semibold text-slate-200 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
                          title={`Visit ${exp.company} website`}
                        >
                          <span>{exp.company}</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400">
                      <div className="inline-flex items-center gap-1.5 font-mono text-purple-300 bg-purple-950/40 px-3 py-1 rounded-lg border border-purple-500/20">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-1 text-slate-400 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-purple-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <ul className="space-y-2.5 my-6 text-sm text-slate-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-2">Technologies:</span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#0e1635] text-slate-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
