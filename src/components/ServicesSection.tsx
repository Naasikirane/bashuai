import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/fabricationData';
import { 
  DoorClosed, 
  Building2, 
  ShieldCheck, 
  LayoutGrid, 
  Sparkles, 
  Wrench, 
  Check, 
  ArrowRight,
  SlidersHorizontal
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(SERVICES[0]);

  const iconMap: Record<string, React.ReactNode> = {
    DoorClosed: <DoorClosed className="w-5 h-5 text-[#fda63a]" />,
    Building2: <Building2 className="w-5 h-5 text-[#fda63a]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#fda63a]" />,
    LayoutGrid: <LayoutGrid className="w-5 h-5 text-[#fda63a]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#fda63a]" />,
    Wrench: <Wrench className="w-5 h-5 text-[#fda63a]" />,
  };

  return (
    <section id="services" className="py-24 bg-white border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold text-[#fda63a] uppercase tracking-widest mb-3">
            <span>Specialized Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Architectural Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
            Engineering Precision in Aluminium Extrusions & Structural Glass
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Every profile is mitred, crimped, and sealed within our own fabrication plant to guarantee thermal continuity, acoustic isolation, and long-span rigidity.
          </p>
        </div>

        {/* 2-Column Architectural Layout: Interactive Service Directory + Live Spec Sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Services List */}
          <div className="lg:col-span-7 space-y-3">
            {SERVICES.map((service) => {
              const isSelected = selectedService?.id === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer group ${
                    isSelected
                      ? 'bg-white border-[#fda63a] shadow-md ring-1 ring-[#fda63a]/30'
                      : 'bg-neutral-50/80 hover:bg-neutral-100/90 border-neutral-200/80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-sm font-bold text-[#fda63a] mt-0.5">
                        {service.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-display font-semibold text-neutral-900 group-hover:text-[#fda63a] transition-colors">
                            {service.title}
                          </h3>
                        </div>
                        <p className="mt-1.5 text-sm text-neutral-600 line-clamp-2 leading-normal">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 p-2 rounded-lg bg-white border border-neutral-200/90 group-hover:border-neutral-300 shadow-sm transition-colors">
                      {iconMap[service.iconName] || <SlidersHorizontal className="w-5 h-5 text-[#fda63a]" />}
                    </div>
                  </div>

                  {/* Highlights tag */}
                  <div className="mt-3 pt-3 border-t border-neutral-200/70 flex items-center justify-between text-xs text-neutral-600">
                    <span className="flex items-center gap-1.5 text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-[#fda63a]" />
                      <span>{service.highlight}</span>
                    </span>
                    <span className="text-[#fda63a] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>View details</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Specification Card (Airy, Technical, Trustworthy) */}
          <div className="lg:col-span-5 sticky top-28">
            {selectedService ? (
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white shadow-lg relative overflow-hidden">
                {/* Decorative architectural background line */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fda63a]/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between gap-4 pb-4 border-b border-neutral-200">
                  <span className="font-mono text-xs font-bold text-[#fda63a] uppercase tracking-wider">
                    Specification Sheet · {selectedService.number}
                  </span>
                  <span className="text-xs text-neutral-500">EN / BS Tested</span>
                </div>

                <h3 className="mt-4 text-2xl font-display font-bold text-neutral-950">
                  {selectedService.title}
                </h3>

                <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                  {selectedService.fullDesc}
                </p>

                {/* Key Technical Metric Grid */}
                <div className="mt-6 space-y-2.5">
                  <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    Technical Benchmarks
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.specs.map((spec, i) => (
                      <div key={i} className="p-3 bg-neutral-50 border border-neutral-200/90 rounded-lg">
                        <span className="block text-[11px] text-neutral-500">{spec.label}</span>
                        <span className="block text-xs font-semibold text-neutral-900 font-mono mt-0.5">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Applications */}
                <div className="mt-6">
                  <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                    Standard Applications
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-neutral-700">
                    {selectedService.applications.map((app, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fda63a]" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action */}
                <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(selectedService.title)}
                    className="w-full py-3 px-4 text-xs font-bold text-white bg-[#fda63a] hover:bg-[#feb452] active:bg-[#e89020] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm shadow-[#fda63a]/20 cursor-pointer"
                  >
                    <span>Request Spec & Quote for {selectedService.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
