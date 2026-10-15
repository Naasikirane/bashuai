import React, { useState } from 'react';
import { FINISH_OPTIONS, GLASS_OPTIONS } from '../data/fabricationData';
import { Shield, Sparkles, Droplets, Sun, Wind, VolumeX, CheckCircle } from 'lucide-react';

export const MaterialSpecs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'finishes' | 'glass' | 'hardware'>('finishes');
  const [selectedFinish, setSelectedFinish] = useState(FINISH_OPTIONS[0]);

  return (
    <section id="materials" className="py-24 bg-neutral-50/80 border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-[#fda63a] uppercase tracking-widest mb-3">
            <span>Material Science & Metallurgy</span>
            <span aria-hidden="true">·</span>
            <span>Raw Material Integrity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
            Certified Aluminium Alloys & High-Performance Architectural Glass
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Bashuai fabricates exclusively with virgin 6063-T6 architectural billet and certified safety glass conforming to international structural deflection, acoustic, and thermal criteria.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 p-1 bg-neutral-200/80 border border-neutral-300 rounded-xl w-fit mb-8">
          <button
            onClick={() => setActiveCategory('finishes')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'finishes'
                ? 'bg-[#fda63a] text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
            }`}
          >
            Aluminium Finishes & Coatings
          </button>
          <button
            onClick={() => setActiveCategory('glass')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'glass'
                ? 'bg-[#fda63a] text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
            }`}
          >
            Structural Glass Types
          </button>
          <button
            onClick={() => setActiveCategory('hardware')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'hardware'
                ? 'bg-[#fda63a] text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
            }`}
          >
            Hardware & Weather Seals
          </button>
        </div>

        {/* Tab 1: Aluminium Finishes */}
        {activeCategory === 'finishes' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Swatch Selector */}
            <div className="lg:col-span-6 space-y-3">
              <h3 className="text-sm font-bold text-neutral-800 uppercase tracking-wider mb-2">
                Available Architectural Powder & Anodized Finishes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FINISH_OPTIONS.map((f) => {
                  const isSelected = selectedFinish.id === f.id;
                  return (
                    <div
                      key={f.id}
                      onClick={() => setSelectedFinish(f)}
                      className={`p-4 rounded-xl border flex items-center gap-3.5 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#fda63a]/10 border-[#fda63a] ring-1 ring-[#fda63a]/40 shadow-xs'
                          : 'bg-white border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-lg shrink-0 border border-neutral-300 shadow-inner"
                        style={{ backgroundColor: f.hex }}
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900">{f.name}</h4>
                        <span className="text-xs text-neutral-500 font-mono">{f.ral} · {f.type}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Finish Detail Card */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg border border-neutral-300 shadow-xs"
                  style={{ backgroundColor: selectedFinish.hex }}
                />
                <div>
                  <h3 className="text-xl font-display font-bold text-neutral-950">
                    {selectedFinish.name}
                  </h3>
                  <span className="font-mono text-xs font-bold text-[#fda63a]">
                    {selectedFinish.ral} Specification ({selectedFinish.type})
                  </span>
                </div>
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed">
                Applied to chemical-pretreated 6063-T6 aluminium with minimum 60–80 micron film thickness. Formulated to resist salt-spray corrosion, UV radiation chalking, and daily abrasive contact.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-200 text-xs">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="text-neutral-500 block">Salt Fog Resistance</span>
                  <span className="text-neutral-900 font-mono font-semibold mt-0.5 block">&gt; 1,000 Hours (ASTM B117)</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="text-neutral-500 block">Adhesion Rating</span>
                  <span className="text-neutral-900 font-mono font-semibold mt-0.5 block">Class 0 (ISO 2409)</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="text-neutral-500 block">UV Exposure Retention</span>
                  <span className="text-neutral-900 font-mono font-semibold mt-0.5 block">&gt; 85% Gloss After 5 Yrs</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="text-neutral-500 block">Lead Time</span>
                  <span className="text-neutral-900 font-mono font-semibold mt-0.5 block">In Workshop Stock</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Glass Types */}
        {activeCategory === 'glass' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GLASS_OPTIONS.map((glass) => (
              <div
                key={glass.id}
                className="bg-white p-6 rounded-2xl border border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-[#fda63a] bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                      {glass.thickness}
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">
                      U: {glass.uValue}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-neutral-900">
                    {glass.name}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    Designed for high impact resistance and optimal solar shading. Tempered to 5x standard float strength with pencil-polished arrised edges.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-neutral-600 flex items-center gap-1">
                    <VolumeX className="w-3.5 h-3.5 text-[#fda63a]" />
                    <span>Acoustic: {glass.sound}</span>
                  </span>
                  <span className="text-neutral-900 font-mono font-bold">
                    From ${glass.basePrice}/m²
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Hardware & Weatherseals */}
        {activeCategory === 'hardware' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="p-3 rounded-lg bg-[#fda63a]/10 w-fit border border-[#fda63a]/20 mb-4">
                <Droplets className="w-5 h-5 text-[#fda63a]" />
              </div>
              <h3 className="text-lg font-display font-semibold text-neutral-900">
                EPDM Double Weatherseals
              </h3>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                Vulcanized EPDM rubber gaskets fitted on both sash and frame. Zero degradation under UV rays or extreme tropical heat. Guarantees air tightness Class 4 and watertightness up to 600 Pascals.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#fda63a]" />
                  <span>Continuous vulcanized corner mitres</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#fda63a]" />
                  <span>Concealed condensation weep channels</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="p-3 rounded-lg bg-[#fda63a]/10 w-fit border border-[#fda63a]/20 mb-4">
                <Shield className="w-5 h-5 text-[#fda63a]" />
              </div>
              <h3 className="text-lg font-display font-semibold text-neutral-900">
                Multi-Point Espagnolette Locks
              </h3>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                Heavy duty stainless steel mushroom cams engaging with reinforced frame keep plates along the perimeter. Tested for 50,000 opening cycles without mechanical failure.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#fda63a]" />
                  <span>Shootbolt locking top and bottom</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#fda63a]" />
                  <span>Anti-jemmy burglar resistance RC2/RC3</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="p-3 rounded-lg bg-[#fda63a]/10 w-fit border border-[#fda63a]/20 mb-4">
                <Sparkles className="w-5 h-5 text-[#fda63a]" />
              </div>
              <h3 className="text-lg font-display font-semibold text-neutral-900">
                Stainless Tandem Bogie Rollers
              </h3>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                Precision needle-bearing stainless steel tandem rollers capable of carrying 400kg per sash. Smooth, whisper-quiet glide on extruded stainless steel track rails.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#fda63a]" />
                  <span>Height-adjustable leveling screws</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#fda63a]" />
                  <span>Salt-spray resistant 316 marine-grade</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
