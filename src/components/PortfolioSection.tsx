import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/fabricationData';
import { Layers, ArrowUpRight, X, MapPin, Calendar, Check, ExternalLink } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProjectForQuote: (projectName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProjectForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential Glazing' },
    { id: 'commercial', label: 'Commercial Facades' },
    { id: 'balustrades', label: 'Frameless Balustrades' },
    { id: 'partitions', label: 'Craft & Workshop' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#fda63a] uppercase tracking-widest mb-3">
              <span>Fabrication Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Installed Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
              Executed Architectural Glazing & Aluminium Installations
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Explore bespoke residential folding doors, high-rise structural curtain walls, and cantilevered frameless balustrades delivered by Bashuai.
            </p>
          </div>

          {/* Interactive Filter Controls (Segmented clean buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 border border-neutral-200 rounded-xl shrink-0 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#fda63a] text-white shadow-sm font-semibold'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-[#fda63a]/60 transition-all duration-300 flex flex-col cursor-pointer shadow-sm hover:shadow-lg"
            >
              {/* Image Container with Fallback */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                {/* Floating Category Label & Location */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-neutral-200 text-neutral-900 font-semibold shadow-xs">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] bg-white/95 backdrop-blur-md px-2 py-1 rounded-md border border-neutral-200 text-neutral-700 shadow-xs">
                    {project.year}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-white text-[11px] drop-shadow-sm font-medium">
                    <MapPin className="w-3 h-3 text-[#fda63a]" />
                    <span>{project.location}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-white text-xs font-semibold bg-[#fda63a] px-2 py-0.5 rounded shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-display font-semibold text-neutral-900 group-hover:text-[#fda63a] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#fda63a] font-bold mt-1">
                    {project.scope}
                  </p>
                  <p className="text-xs text-neutral-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {project.details}
                  </p>
                </div>

                {/* Technical Specs Footer */}
                <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1.5 text-[11px]">
                  <div className="flex justify-between text-neutral-500">
                    <span>Profile:</span>
                    <span className="text-neutral-800 font-mono text-right truncate max-w-[180px] font-medium">
                      {project.aluminiumSeries}
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-500">
                    <span>Glass:</span>
                    <span className="text-neutral-800 font-mono text-right truncate max-w-[180px] font-medium">
                      {project.glassSpec.split(' ')[0]} {project.glassSpec.split(' ')[1]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-2xl my-8 text-neutral-900">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:border-neutral-300 transition-all shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full bg-neutral-100">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#fda63a] font-bold mb-2">
                  <span>{activeModalProject.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeModalProject.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>Completed {activeModalProject.year}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-950">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-neutral-700 mt-2 leading-relaxed">
                  {activeModalProject.details}
                </p>
              </div>

              {/* Engineering Specifications Box */}
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <h4 className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                  Fabrication & Structural Engineering Blueprint
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-neutral-500 block">Scope of Work</span>
                    <span className="text-neutral-900 font-semibold">{activeModalProject.scope}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Aluminium Profile Series</span>
                    <span className="text-neutral-900 font-mono font-medium">{activeModalProject.aluminiumSeries}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Glass Composition</span>
                    <span className="text-neutral-900 font-mono font-medium">{activeModalProject.glassSpec}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Surface Finish</span>
                    <span className="text-neutral-900 font-medium">{activeModalProject.finish}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2.5 text-xs font-semibold text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Close Inspection
                </button>
                <button
                  onClick={() => {
                    const title = activeModalProject.title;
                    setActiveModalProject(null);
                    onSelectProjectForQuote(`Similar specification to ${title}`);
                  }}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#fda63a] hover:bg-[#feb452] rounded-lg transition-colors flex items-center gap-1.5 shadow-sm shadow-[#fda63a]/20 cursor-pointer"
                >
                  <span>Request Similar Custom Build</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
