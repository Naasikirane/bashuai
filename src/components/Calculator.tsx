import React, { useState, useId } from 'react';
import { 
  APPLICATION_PRESETS, 
  FINISH_OPTIONS, 
  GLASS_OPTIONS 
} from '../data/fabricationData';
import { 
  Calculator as CalcIcon, 
  Layers, 
  Check, 
  ArrowRight, 
  HelpCircle,
  Clock,
  Scale,
  Sparkles,
  Maximize2
} from 'lucide-react';

interface CalculatorProps {
  onTransferToQuote: (details: {
    systemName: string;
    width: number;
    height: number;
    units: number;
    area: number;
    finishName: string;
    glassName: string;
    estimatedCost: string;
  }) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onTransferToQuote }) => {
  const [selectedApp, setSelectedApp] = useState(APPLICATION_PRESETS[0]);
  const [width, setWidth] = useState<number>(selectedApp.defaultW);
  const [height, setHeight] = useState<number>(selectedApp.defaultH);
  const [units, setUnits] = useState<number>(1);
  const [selectedFinish, setSelectedFinish] = useState(FINISH_OPTIONS[0]);
  const [selectedGlass, setSelectedGlass] = useState(GLASS_OPTIONS[2]); // Double Glazed Low-E default

  const widthInputId = useId();
  const heightInputId = useId();
  const unitsInputId = useId();

  // Handlers for application change
  const handleAppChange = (app: typeof APPLICATION_PRESETS[0]) => {
    setSelectedApp(app);
    setWidth(app.defaultW);
    setHeight(app.defaultH);
  };

  // Calculations
  const areaPerUnit = Number((width * height).toFixed(2));
  const totalArea = Number((areaPerUnit * units).toFixed(2));
  
  // Finish multiplier
  const finishMultiplier = selectedFinish.type === 'Sublimation' ? 1.25 : selectedFinish.type === 'Anodized' ? 1.15 : 1.0;
  
  // Rate per m2 = base application rate * finish multiplier + glass base price
  const ratePerM2 = (selectedApp.baseM2 * finishMultiplier) + selectedGlass.basePrice;
  const estimatedTotal = Math.round(totalArea * ratePerM2);
  const lowRange = Math.round(estimatedTotal * 0.92);
  const highRange = Math.round(estimatedTotal * 1.08);

  // Estimated aluminium + glass weight in kg (approx 25kg/m2 for DGU system)
  const estimatedWeightKg = Math.round(totalArea * (selectedGlass.thickness.includes('24mm') || selectedGlass.thickness.includes('21.52mm') ? 34 : 22));

  // Turnaround in days
  const leadTimeDays = selectedApp.id === 'curtain-wall' ? '18-24 business days' : totalArea > 30 ? '14-18 business days' : '10-12 business days';

  const handleTransfer = () => {
    onTransferToQuote({
      systemName: selectedApp.name,
      width,
      height,
      units,
      area: totalArea,
      finishName: selectedFinish.name,
      glassName: selectedGlass.name,
      estimatedCost: `$${lowRange.toLocaleString()} - $${highRange.toLocaleString()}`,
    });
  };

  return (
    <section id="calculator" className="py-24 bg-neutral-50/70 border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-[#fda63a] uppercase tracking-widest mb-3">
            <CalcIcon className="w-4 h-4" />
            <span>Fabrication Cost & Specification Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
            Configure Your Opening & Calculate Direct Workshop Estimates
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Select your architectural system, opening dimensions, profile finish, and glass specification to review real-time area calculations, weight loads, and estimated fabrication costs.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm">
            {/* Step 1: System Type */}
            <div>
              <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                1. Select Architectural System
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {APPLICATION_PRESETS.map((app) => {
                  const isActive = selectedApp.id === app.id;
                  return (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => handleAppChange(app)}
                      className={`p-3 text-left rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#fda63a]/10 border-[#fda63a] text-neutral-950 font-semibold ring-1 ring-[#fda63a]/40 shadow-xs'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:text-neutral-950'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold">{app.name}</span>
                        {isActive && <Check className="w-3.5 h-3.5 text-[#fda63a]" />}
                      </div>
                      <span className="text-[11px] text-neutral-500">From ${app.baseM2}/m²</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dimensions & Quantity */}
            <div className="pt-6 border-t border-neutral-200">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                  2. Opening Dimensions & Units
                </label>
                <span className="text-[11px] text-neutral-500 font-mono">
                  Area: {areaPerUnit} m² / unit · Total: {totalArea} m²
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Width */}
                <div>
                  <div className="flex justify-between text-xs text-neutral-600 mb-1">
                    <label htmlFor={widthInputId}>Width (Meters)</label>
                    <span className="font-mono text-neutral-950 font-bold">{width} m</span>
                  </div>
                  <input
                    id={widthInputId}
                    type="range"
                    min={selectedApp.minW}
                    max={12.0}
                    step={0.1}
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value))}
                    className="w-full accent-[#fda63a] bg-neutral-200 rounded-lg cursor-pointer h-2"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                    <span>{selectedApp.minW}m</span>
                    <span>12.0m</span>
                  </div>
                </div>

                {/* Height */}
                <div>
                  <div className="flex justify-between text-xs text-neutral-600 mb-1">
                    <label htmlFor={heightInputId}>Height (Meters)</label>
                    <span className="font-mono text-neutral-950 font-bold">{height} m</span>
                  </div>
                  <input
                    id={heightInputId}
                    type="range"
                    min={selectedApp.minH}
                    max={5.0}
                    step={0.1}
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                    className="w-full accent-[#fda63a] bg-neutral-200 rounded-lg cursor-pointer h-2"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                    <span>{selectedApp.minH}m</span>
                    <span>5.0m</span>
                  </div>
                </div>

                {/* Units */}
                <div>
                  <div className="flex justify-between text-xs text-neutral-600 mb-1">
                    <label htmlFor={unitsInputId}>Number of Openings</label>
                    <span className="font-mono text-neutral-950 font-bold">{units} {units === 1 ? 'Unit' : 'Units'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setUnits(Math.max(1, units - 1))}
                      className="w-8 h-8 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200 flex items-center justify-center font-bold cursor-pointer transition-colors"
                    >
                      -
                    </button>
                    <input
                      id={unitsInputId}
                      type="number"
                      min={1}
                      max={50}
                      value={units}
                      onChange={(e) => setUnits(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full py-1.5 px-3 bg-white border border-neutral-300 rounded-lg text-center font-mono text-sm text-neutral-900 focus:outline-none focus:border-[#fda63a]"
                    />
                    <button
                      type="button"
                      onClick={() => setUnits(units + 1)}
                      className="w-8 h-8 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-200 flex items-center justify-center font-bold cursor-pointer transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Profile Finish */}
            <div className="pt-6 border-t border-neutral-200">
              <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                3. Aluminium Extrusion Finish & Coating
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {FINISH_OPTIONS.map((finish) => {
                  const isSelected = selectedFinish.id === finish.id;
                  return (
                    <button
                      key={finish.id}
                      type="button"
                      onClick={() => setSelectedFinish(finish)}
                      className={`p-2.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#fda63a]/10 border-[#fda63a] text-neutral-950 ring-1 ring-[#fda63a]/40 font-semibold'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:text-neutral-950'
                      }`}
                    >
                      <span
                        className="w-6 h-6 rounded-md shrink-0 border border-neutral-300 shadow-inner"
                        style={{ backgroundColor: finish.hex }}
                      />
                      <div className="min-w-0">
                        <span className="block text-xs font-medium truncate">{finish.name}</span>
                        <span className="block text-[10px] text-neutral-500 font-mono">{finish.ral}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Glass Specification */}
            <div className="pt-6 border-t border-neutral-200">
              <label className="block text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                4. Structural Glass Specification
              </label>
              <div className="space-y-2">
                {GLASS_OPTIONS.map((glass) => {
                  const isSelected = selectedGlass.id === glass.id;
                  return (
                    <div
                      key={glass.id}
                      onClick={() => setSelectedGlass(glass)}
                      className={`p-3 rounded-xl border flex items-center justify-between gap-4 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#fda63a]/10 border-[#fda63a] text-neutral-950 ring-1 ring-[#fda63a]/40'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:border-neutral-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold">{glass.name}</span>
                          <span className="font-mono text-[10px] text-[#fda63a] bg-neutral-200/80 px-1.5 py-0.5 rounded font-medium">
                            {glass.thickness}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-[11px] text-neutral-500 mt-0.5">
                          <span>U-Value: {glass.uValue} W/m²K</span>
                          <span aria-hidden="true">·</span>
                          <span>Acoustic: {glass.sound}</span>
                        </div>
                      </div>
                      <div className="shrink-0 flex items-center gap-2">
                        {isSelected ? (
                          <div className="w-5 h-5 rounded-full bg-[#fda63a] flex items-center justify-center text-white">
                            <Check className="w-3 h-3" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-neutral-300" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Engineering Breakdown & Quote Summary Card */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <span className="font-mono text-xs font-bold text-[#fda63a] uppercase tracking-wider">
                  Live Fabrication Breakdown
                </span>
                <span className="text-xs text-neutral-500">Direct Workshop Rate</span>
              </div>

              {/* Price Range Display */}
              <div className="mt-5">
                <span className="text-xs text-neutral-500 block mb-1">Estimated Direct Cost (Excl. Tax)</span>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950 tracking-tight tabular-nums">
                  ${lowRange.toLocaleString()} <span className="text-lg text-neutral-400 font-normal">–</span> ${highRange.toLocaleString()}
                </div>
                <p className="text-[11px] text-neutral-500 mt-1">
                  Includes CNC extruded profile, {selectedGlass.name.split(' ')[0]} glass, precision mitre cutting, multi-point hardware & structural sealant.
                </p>
              </div>

              {/* Live Architectural Metrics */}
              <div className="mt-6 pt-6 border-t border-neutral-200 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500">Total Glazed Area</span>
                  <span className="font-mono font-semibold text-neutral-900 tabular-nums">
                    {totalArea} m² ({Math.round(totalArea * 10.764)} sq ft)
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500">Selected Profile Finish</span>
                  <span className="font-medium text-neutral-900 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full border border-neutral-300" style={{ backgroundColor: selectedFinish.hex }} />
                    <span>{selectedFinish.name}</span>
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500">Glass Specification</span>
                  <span className="font-mono text-xs text-neutral-900 truncate max-w-[200px]" title={selectedGlass.name}>
                    {selectedGlass.thickness}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500">Structural Weight (Est.)</span>
                  <span className="font-mono font-medium text-neutral-900 tabular-nums flex items-center gap-1">
                    <Scale className="w-3 h-3 text-[#fda63a]" />
                    <span>~{estimatedWeightKg} kg</span>
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500">Workshop Turnaround</span>
                  <span className="font-mono font-bold text-[#fda63a] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#fda63a]" />
                    <span>{leadTimeDays}</span>
                  </span>
                </div>
              </div>

              {/* Direct Action: Transfer to official consultation */}
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={handleTransfer}
                  className="w-full py-3.5 px-4 text-xs font-bold text-white bg-[#fda63a] hover:bg-[#feb452] active:bg-[#e89020] rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm shadow-[#fda63a]/25 cursor-pointer"
                >
                  <span>Transfer Config to Official Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-neutral-500 mt-2.5">
                  Pre-fills all dimensions & specifications in the booking form.
                </p>
              </div>
            </div>

            {/* Note on Site Measurement */}
            <div className="p-4 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-600 flex items-start gap-3 shadow-xs">
              <HelpCircle className="w-4 h-4 text-[#fda63a] shrink-0 mt-0.5" />
              <span>
                <strong className="text-neutral-900">Millimeter Tolerance Rule:</strong> All final shop drawings are verified by our certified technicians via on-site laser triangulation before raw aluminium extrusions are cut.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
