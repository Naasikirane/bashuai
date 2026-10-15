import React from 'react';
import { Ruler, ShieldAlert, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

interface WorkshopCraftProps {
  onScheduleVisit: () => void;
}

export const WorkshopCraft: React.FC<WorkshopCraftProps> = ({ onScheduleVisit }) => {
  const steps = [
    {
      num: '01',
      title: 'Digital Laser Opening Survey',
      desc: 'Our technicians verify opening plumb lines, diagonal squareness, and lintel deflections using optical laser levels prior to CAD detailing.',
    },
    {
      num: '02',
      title: 'CNC Dual-Head Mitre Cutting',
      desc: 'High-speed carbide-tipped blades cut extruded 6063-T6 aluminium profiles at exact 45° and 90° angles with ±0.2mm precision tolerances.',
    },
    {
      num: '03',
      title: 'Hydraulic Pneumatic Corner Crimping',
      desc: 'Heavy cast-aluminium corner cleat brackets are injected with structural two-part epoxy and hydraulically crimped for lifetime water-tightness.',
    },
    {
      num: '04',
      title: 'Cleanroom Glazing & Pressure Audit',
      desc: 'Toughened glass units are bedded into vulcanized EPDM gaskets with continuous structural silicone beads before delivery to site.',
    },
  ];

  return (
    <section id="workshop" className="py-24 bg-white border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Workshop Photography & Live Proof */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 aspect-[4/3] bg-neutral-100 shadow-lg">
              <img
                src="/src/assets/images/craft_fabrication_workshop_1790361589833.jpg"
                alt="Inside the Bashuai Aluminium and Glass fabrication workshop"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="font-mono text-neutral-900 font-semibold bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-200 shadow-xs">
                  Bashuai Main Workshop Line #1
                </span>
                <span className="text-[#fda63a] font-bold bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-200 shadow-xs">
                  Direct Factory Quality
                </span>
              </div>
            </div>

            {/* Adjacent Trust Proof Callout */}
            <div className="mt-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between text-xs">
              <span className="text-neutral-700">
                Architects & Contractors are invited to tour the workshop floor.
              </span>
              <button
                onClick={onScheduleVisit}
                className="text-[#fda63a] hover:text-[#feb452] font-bold flex items-center gap-1 shrink-0 ml-3 cursor-pointer"
              >
                <span>Book Factory Tour</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 4-Step Precision Workflow */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#fda63a] uppercase tracking-widest mb-3">
                <span>Bashuai Aluminium Standard</span>
                <span aria-hidden="true">·</span>
                <span>Production Workflow</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
                Zero-Compromise Fabrication From Raw Billet to Final Glazing
              </h2>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                Standard off-the-shelf window makers assemble with hand screws. At Bashuai, every joint is mechanically crimped, chemically bonded, and laser inspected to prevent sash sag and water ingress for decades.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {steps.map((step) => (
                <div key={step.num} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/90 flex gap-4 items-start shadow-xs">
                  <span className="font-mono text-base font-bold text-[#fda63a] shrink-0 mt-0.5">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900 font-display">
                      {step.title}
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1 leading-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
