import React, { useState } from 'react';
import {
  Code,
  Layout,
  Database,
  Cloud,
  CheckCircle,
  Sparkles,
  Cpu,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterTabs = ['All', 'Frontend Development', 'Backend & Database', 'Cloud & Developer Tools'];

  const categoryIcons: Record<string, React.ElementType> = {
    'Frontend Development': Layout,
    'Backend & Database': Database,
    'Cloud & Developer Tools': Cloud,
  };

  const filteredCategories =
    selectedFilter === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedFilter);

  return (
    <section id="skills" className="py-24 relative">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-950/60 text-purple-300 border border-purple-500/30">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools, Technologies &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
              Modern Stacks
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Directly derived from verified work experience, client projects, and academic foundations.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedFilter === tab
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/25 border border-purple-400/30'
                    : 'bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Code;
            return (
              <div
                key={category.title}
                className="rounded-2xl bg-[#090d1f]/90 border border-purple-500/20 p-7 backdrop-blur-xl shadow-xl shadow-purple-950/20 hover:border-purple-400/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/15 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:bg-purple-600/25 group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-xs text-purple-400/80 font-mono">
                        {category.skills.length} verified technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0e1635]/80 border border-slate-700/50 hover:border-purple-400/50 hover:bg-[#141f4a] transition-all duration-200 group/badge"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-purple-400 group-badge:text-cyan-300 transition-colors" />
                        <span className="text-xs font-semibold text-slate-200 group-hover/badge:text-white">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer indicator */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Production Ready
                  </span>
                  <span className="text-slate-500">No fabricated %</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pro Design & Tooling Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-blue-950/40 border border-purple-500/25 p-6 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 shrink-0">
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Full-Stack Code + Creative Visual Branding</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Seamlessly uniting engineering execution (React/Next/Angular/PHP) with Canva-powered graphic design and video promotional collateral.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-600/80 hover:bg-purple-600 border border-purple-400/30 transition-all shrink-0"
          >
            <span>See Applied Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};
