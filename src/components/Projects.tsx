import React, { useState, useRef, useEffect } from 'react';
import {
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  Globe,
  Lock,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'Frontend' | 'IoT / Systems'>('All');
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  const getCategoryColor = (category: Project['category']) => {
    switch (category) {
      case 'Full Stack':
        return 'bg-purple-950/70 text-purple-300 border-purple-500/30';
      case 'Frontend':
        return 'bg-blue-950/70 text-blue-300 border-blue-500/30';
      case 'IoT / Systems':
        return 'bg-emerald-950/70 text-emerald-300 border-emerald-500/30';
      default:
        return 'bg-slate-900 text-slate-300 border-slate-700';
    }
  };

  const tickingRef = useRef(false);

  const handleScroll = () => {
    if (!tickingRef.current && scrollContainerRef.current) {
      window.requestAnimationFrame(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          const maxScroll = scrollWidth - clientWidth;
          const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
          setScrollProgress(progress);
          setCanScrollLeft(scrollLeft > 20);
          setCanScrollRight(scrollLeft < maxScroll - 20);
        }
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  };

  useEffect(() => {
    handleScroll();
  }, [filteredProjects, viewMode]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[650px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-950/60 text-purple-300 border border-purple-500/30">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Interactive Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Featured Projects &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
              Web Platforms
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real commercial applications, corporate portals, chemical engineering tools, and client platforms I have delivered.
          </p>

          {/* Filter Pills & View Mode Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80 mt-6">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              {(['All', 'Full Stack', 'Frontend', 'IoT / Systems'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    filter === cat
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/25 border border-purple-400/40'
                      : 'bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                  }`}
                >
                  {cat}{' '}
                  <span className="opacity-75 text-[11px]">
                    ({cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length})
                  </span>
                </button>
              ))}
            </div>

            {/* Layout Mode Toggle: Scrollable Slider vs Grid */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-purple-500/20">
              <button
                onClick={() => setViewMode('carousel')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Scrollable Carousel View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Slider</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Full Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode: Scrollable Animated Carousel */}
        {viewMode === 'carousel' ? (
          <div className="relative">
            {/* Slider Navigation Arrows */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-purple-400 font-bold">Showing {filteredProjects.length} Projects</span>
                <span>•</span>
                <span className="hidden sm:inline">Swipe or use arrows to scroll horizontally</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    canScrollLeft
                      ? 'bg-slate-900 text-white border-purple-500/40 hover:bg-purple-600 hover:border-purple-400 shadow-md shadow-purple-950/40'
                      : 'bg-slate-900/40 text-slate-600 border-slate-800 cursor-not-allowed'
                  }`}
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    canScrollRight
                      ? 'bg-slate-900 text-white border-purple-500/40 hover:bg-purple-600 hover:border-purple-400 shadow-md shadow-purple-950/40'
                      : 'bg-slate-900/40 text-slate-600 border-slate-800 cursor-not-allowed'
                  }`}
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Container with Snap & Custom Scrollbar */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-900/60 scrollbar-track-slate-950"
              style={{ scrollbarWidth: 'thin' }}
            >
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className="w-[86vw] sm:w-[380px] md:w-[400px] lg:w-[440px] shrink-0 snap-start rounded-2xl bg-[#090d1f]/90 border border-purple-500/20 backdrop-blur-xl shadow-xl shadow-purple-950/20 hover:border-purple-400/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Subtle index watermark */}
                  <div className="absolute top-3 right-4 text-3xl sm:text-4xl font-black text-slate-800/40 font-mono select-none pointer-events-none group-hover:text-purple-500/10 transition-colors">
                    #{String(idx + 1).padStart(2, '0')}
                  </div>

                  {/* Card Upper Section */}
                  <div className="p-5 sm:p-7 space-y-3.5 sm:space-y-4">
                    {/* Category & Status */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(
                          project.category
                        )}`}
                      >
                        {project.category}
                      </span>

                      {project.url ? (
                        <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          Live Platform
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-mono">
                          <Lock className="w-3 h-3" />
                          Official Project
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-cyan-300/90 mt-1 line-clamp-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed min-h-[72px]">
                      {project.description}
                    </p>

                    {/* Verified Highlights */}
                    <div className="space-y-2 pt-2 border-t border-slate-800/60">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Key Deliverables:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer: Tech tags & Action */}
                  <div className="p-5 sm:p-7 pt-4 bg-[#070b1a]/90 border-t border-purple-500/15 space-y-4">
                    <div className="flex flex-wrap gap-1.5 min-h-[52px] content-start">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#0e1635] text-slate-300 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 shadow-md shadow-purple-600/30 transition-all duration-200 group/btn cursor-pointer"
                          title={`Visit ${project.title} live website`}
                        >
                          <Globe className="w-4 h-4 text-cyan-300" />
                          <span>Visit Website</span>
                          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      ) : (
                        <div className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-medium text-slate-400 bg-slate-900/60 border border-slate-800">
                          <span>Documented in Resume • Non-Public URL</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Progress Bar */}
            <div className="mt-4 max-w-md mx-auto bg-slate-900/80 rounded-full h-1.5 p-0.5 border border-purple-500/20 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-150"
                style={{ width: `${Math.max(10, scrollProgress)}%` }}
              />
            </div>
          </div>
        ) : (
          /* View Mode: Responsive 3-Column Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="rounded-2xl bg-[#090d1f]/90 border border-purple-500/20 backdrop-blur-xl shadow-xl shadow-purple-950/20 hover:border-purple-400/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 overflow-hidden relative"
              >
                {/* Index watermark */}
                <div className="absolute top-3 right-4 text-3xl font-black text-slate-800/40 font-mono select-none pointer-events-none group-hover:text-purple-500/10 transition-colors">
                  #{String(idx + 1).padStart(2, '0')}
                </div>

                <div className="p-5 sm:p-7 space-y-3.5 sm:space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(
                        project.category
                      )}`}
                    >
                      {project.category}
                    </span>

                    {project.url ? (
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Live Platform
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-mono">
                        <Lock className="w-3 h-3" />
                        Official Project
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-300/90 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 sm:p-7 pt-4 bg-[#070b1a]/90 border-t border-purple-500/15 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#0e1635] text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 shadow-md shadow-purple-600/30 transition-all duration-200 group/btn cursor-pointer"
                        title={`Visit ${project.title} live website`}
                      >
                        <Globe className="w-4 h-4 text-cyan-300" />
                        <span>Visit Website</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-medium text-slate-400 bg-slate-900/60 border border-slate-800">
                        <span>Documented in Resume • Non-Public URL</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Verification Note */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>
            Total {projects.length} verified projects with 7 active live platform links opening securely in new tabs.
          </span>
        </div>
      </div>
    </section>
  );
};
