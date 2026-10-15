import React from 'react';
import { TESTIMONIALS } from '../data/fabricationData';
import { Quote, Star, Award, Building, HardHat } from 'lucide-react';

export const TestimonialsAndProof: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-50/70 border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold text-[#fda63a] uppercase tracking-widest mb-3">
            <span>Verified Industry Endorsements</span>
            <span aria-hidden="true">·</span>
            <span>Contractor & Architect Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
            Trusted by General Contractors, Structural Architects & Property Developers
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Real outcomes from commercial high-rises to luxury private residential builds fabricated by Bashuai.
          </p>
        </div>

        {/* 3 Attributable Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Metric Strip (Explicit units and context) */}
                <div className="pb-4 mb-4 border-b border-neutral-100 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#fda63a]">
                    {item.metric}
                  </span>
                  <div className="flex text-amber-500 text-xs">
                    {'★★★★★'}
                  </div>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-xs font-bold text-[#fda63a]">
                  {item.author.split(' ')[1]?.[0] || item.author[0]}
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-neutral-900 font-display">
                    {item.author}
                  </h3>
                  <p className="text-[11px] text-neutral-500">
                    {item.role} · <span className="text-neutral-700 font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Industry Certifications & Standards Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block font-mono text-xs font-bold text-neutral-950 uppercase tracking-wider">BS 6180:2011</span>
            <span className="block text-[11px] text-neutral-500 mt-0.5">Barrier & Balustrade Code</span>
          </div>
          <div>
            <span className="block font-mono text-xs font-bold text-neutral-950 uppercase tracking-wider">EN 12600 Class 1B1</span>
            <span className="block text-[11px] text-neutral-500 mt-0.5">Tempered Impact Resistance</span>
          </div>
          <div>
            <span className="block font-mono text-xs font-bold text-neutral-950 uppercase tracking-wider">Qualicoat Class 1 & 2</span>
            <span className="block text-[11px] text-neutral-500 mt-0.5">Architectural Coating Standard</span>
          </div>
          <div>
            <span className="block font-mono text-xs font-bold text-neutral-950 uppercase tracking-wider">CWCT Tested</span>
            <span className="block text-[11px] text-neutral-500 mt-0.5">Curtain Wall Weather Sealing</span>
          </div>
        </div>
      </div>
    </section>
  );
};
