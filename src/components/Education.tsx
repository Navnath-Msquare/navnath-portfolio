import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
} from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-950/60 text-purple-300 border border-purple-500/30">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
              Qualifications
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering foundation and academic records as documented in my official resume.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <div
              key={edu.id}
              className={`rounded-2xl bg-[#090d1f]/90 border p-5 sm:p-7 md:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                idx === 0
                  ? 'border-purple-500/40 shadow-purple-950/30 bg-gradient-to-r from-[#0d1330] to-[#090d1f]'
                  : 'border-purple-500/15 shadow-purple-950/10'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-3 py-0.5 rounded-full text-xs font-semibold ${
                        idx === 0
                          ? 'bg-purple-600/30 text-purple-300 border border-purple-400/40'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {idx === 0 ? 'Primary Degree' : 'Schooling'}
                    </span>

                    {edu.score && (
                      <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-bold bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 font-mono">
                        <Award className="w-3.5 h-3.5 text-cyan-400" />
                        {edu.score}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {edu.degree}
                  </h3>

                  <div className="flex items-center gap-2 text-sm font-medium text-purple-300/90">
                    <BookOpen className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                <div className="flex sm:flex-col sm:items-end justify-between gap-2 text-xs text-slate-400 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                  <div className="inline-flex items-center gap-1.5 font-mono text-slate-300 bg-slate-900/80 px-3 py-1 rounded-lg border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
