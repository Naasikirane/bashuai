import React from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreCalculator }) => {
  return (
    <section className="relative pt-16 sm:pt-18 pb-10 sm:pb-14 overflow-hidden border-b border-neutral-200 bg-white">
      {/* Background Hero Asset with luminous architectural white scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_architectural_glass_aluminium_1790361551375.jpg"
          alt="Bashuai architectural aluminium sliding doors and structural glass facade"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Luminous light scrim to guarantee high contrast across both left and right */}
        <div className="absolute inset-0 bg-white/85 sm:bg-white/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-white/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-1 sm:pt-2 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: YouTube Shorts (taking the place left by the yellow-circled content) */}
          <div className="lg:col-span-6 w-full flex justify-start order-2 lg:order-1">
            <div className="p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-sm border border-neutral-200 shadow-sm w-full max-w-xl">
              {/* Side-by-side same row video grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                {/* Video 1 */}
                <div className="flex flex-col">
                  <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-md border border-neutral-200 bg-neutral-900">
                    <iframe
                      src="https://www.youtube.com/embed/RIIHd4HxD2A"
                      title="Bashuai Aluminium & Structural Glass Works - Video 1"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <a
                    href="https://youtube.com/shorts/RIIHd4HxD2A?si=p3iBVazQIRKzZ9B5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs font-bold text-[#fda63a] hover:text-[#feb452] transition-colors"
                  >
                    <span>Watch Short #1</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Video 2 */}
                <div className="flex flex-col">
                  <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-md border border-neutral-200 bg-neutral-900">
                    <iframe
                      src="https://www.youtube.com/embed/rVQpME9CsnI"
                      title="Bashuai Aluminium & Structural Glass Works - Video 2"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <a
                    href="https://youtube.com/shorts/rVQpME9CsnI?si=eC4FgWmZaF1FPJCw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs font-bold text-[#fda63a] hover:text-[#feb452] transition-colors"
                  >
                    <span>Watch Short #2</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Headline, Action Buttons & Social Handles */}
          <div className="lg:col-span-6 w-full space-y-6 sm:space-y-7 order-1 lg:order-2">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-neutral-950 tracking-tight leading-[1.08] [text-wrap:balance]">
              Aluminium & Structural Glass Works
            </h1>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-[#fda63a] hover:bg-[#feb452] active:bg-[#e89020] rounded-lg transition-all shadow-md shadow-[#fda63a]/25 whitespace-nowrap cursor-pointer"
              >
                <span>Request Fabrication Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCalculator}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-neutral-800 hover:text-neutral-950 bg-white/95 hover:bg-neutral-50 border border-neutral-300 rounded-lg transition-colors whitespace-nowrap shadow-sm cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#fda63a]" />
                <span>Launch Cost Estimator</span>
              </button>
            </div>

            {/* Social Handles (WhatsApp Lines 1 & 2, Facebook, TikTok) */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-2.5">
                Official Channels & Direct Inquiries
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {/* 1. WhatsApp Line 1 */}
                <a
                  href="https://wa.me/254790602155?text=Hello%20Bashuai%20Aluminium%20%26%20Glass%20Works,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-neutral-200 hover:border-emerald-500/60 hover:bg-emerald-50/30 hover:shadow-sm transition-all group"
                  title="WhatsApp Line 1: +254 790 602 155"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 2c-5.508 0-9.984 4.477-9.984 9.984 0 1.761.458 3.483 1.332 5.006L2 22l5.176-1.358a9.92 9.92 0 0 0 4.855 1.258c5.508 0 9.984-4.477 9.984-9.984 0-5.507-4.476-9.916-9.984-9.916zm5.834 14.129c-.244.686-1.424 1.312-1.956 1.396-.51.082-1.157.116-3.727-.954-3.284-1.368-5.385-4.717-5.549-4.935-.164-.218-1.332-1.774-1.332-3.385 0-1.611.84-2.404 1.139-2.731.298-.327.653-.409.871-.409.218 0 .436.002.626.012.203.01.474-.078.742.564.272.653.926 2.261 1.008 2.425.082.164.136.354.027.572-.109.218-.163.354-.326.545-.164.19-.344.425-.49.571-.164.164-.335.342-.144.669.19.327.848 1.397 1.818 2.262 1.248 1.112 2.3 1.457 2.627 1.62.327.163.518.136.709-.082.19-.218.817-.954 1.035-1.281.218-.327.436-.272.736-.164.299.109 1.905.899 2.232 1.063.327.164.545.245.627.382.082.137.082.791-.162 1.477z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors">
                      WhatsApp 1
                    </span>
                    <span className="block text-[10px] text-neutral-600 truncate font-mono">
                      +254 790 602 155
                    </span>
                  </div>
                </a>

                {/* 2. WhatsApp Line 2 */}
                <a
                  href="https://wa.me/254786862374?text=Hello%20Bashuai%20Aluminium%20%26%20Glass%20Works,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-neutral-200 hover:border-emerald-500/60 hover:bg-emerald-50/30 hover:shadow-sm transition-all group"
                  title="WhatsApp Line 2: +254 786 862 374"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 2c-5.508 0-9.984 4.477-9.984 9.984 0 1.761.458 3.483 1.332 5.006L2 22l5.176-1.358a9.92 9.92 0 0 0 4.855 1.258c5.508 0 9.984-4.477 9.984-9.984 0-5.507-4.476-9.916-9.984-9.916zm5.834 14.129c-.244.686-1.424 1.312-1.956 1.396-.51.082-1.157.116-3.727-.954-3.284-1.368-5.385-4.717-5.549-4.935-.164-.218-1.332-1.774-1.332-3.385 0-1.611.84-2.404 1.139-2.731.298-.327.653-.409.871-.409.218 0 .436.002.626.012.203.01.474-.078.742.564.272.653.926 2.261 1.008 2.425.082.164.136.354.027.572-.109.218-.163.354-.326.545-.164.19-.344.425-.49.571-.164.164-.335.342-.144.669.19.327.848 1.397 1.818 2.262 1.248 1.112 2.3 1.457 2.627 1.62.327.163.518.136.709-.082.19-.218.817-.954 1.035-1.281.218-.327.436-.272.736-.164.299.109 1.905.899 2.232 1.063.327.164.545.245.627.382.082.137.082.791-.162 1.477z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors">
                      WhatsApp 2
                    </span>
                    <span className="block text-[10px] text-neutral-600 truncate font-mono">
                      +254 786 862 374
                    </span>
                  </div>
                </a>

                {/* 3. Facebook */}
                <a
                  href="https://web.facebook.com/profile.php?id=61588404058082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-neutral-200 hover:border-blue-500/60 hover:bg-blue-50/30 hover:shadow-sm transition-all group"
                  title="Bashuai Aluminium on Facebook"
                  aria-label="Facebook: Bashuai Aluminium"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-bold text-neutral-900 group-hover:text-blue-700 transition-colors">
                      Facebook
                    </span>
                    <span className="block text-[10px] text-neutral-600 truncate font-medium">
                      Bashuai Aluminium
                    </span>
                  </div>
                </a>

                {/* 4. TikTok */}
                <a
                  href="https://www.tiktok.com/@user16653016539807"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-neutral-200 hover:border-neutral-900/60 hover:bg-neutral-50 hover:shadow-sm transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-neutral-950 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.24 1.16 2.27 2.37 2.62.91.29 1.94.19 2.78-.3.74-.43 1.25-1.17 1.39-2.02.16-.92.14-1.87.14-2.81V.02h-.87z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-bold text-neutral-900 group-hover:text-neutral-950 transition-colors">
                      TikTok
                    </span>
                    <span className="block text-[10px] text-neutral-500 truncate">
                      @bashuai
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
