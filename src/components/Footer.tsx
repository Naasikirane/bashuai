import React from 'react';
import { Logo } from './Logo';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-100 text-neutral-600 border-t border-neutral-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-200">
          {/* Col 1 & 2: Brand Lockup & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" variant="full" theme="light" />
            <p className="text-xs text-neutral-600 leading-relaxed max-w-sm">
              Bashuai Aluminium. Precision engineering and custom fabrication of architectural aluminium doors, windows, structural curtain walls, frameless glass balustrades, and bespoke interior glazing.
            </p>
            <div className="pt-2 text-xs text-neutral-500 font-mono">
              <span>Fabrication Standard: BS 6180 · EN 12600 · Qualicoat Certified</span>
            </div>
            {/* Official Social Handles */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href="https://wa.me/254790602155?text=Hello%20Bashuai%20Aluminium%20%26%20Glass%20Works"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 text-[11px] font-semibold transition-colors"
                title="WhatsApp Line 1: +254 790 602 155"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                WhatsApp: +254 790 602 155
              </a>
              <a
                href="https://wa.me/254786862374?text=Hello%20Bashuai%20Aluminium%20%26%20Glass%20Works"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 text-[11px] font-semibold transition-colors"
                title="WhatsApp Line 2: +254 786 862 374"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                WhatsApp: +254 786 862 374
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61588404058082"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100 text-[11px] font-semibold transition-colors"
                title="Facebook: Bashuai Aluminium"
              >
                <span className="w-2 h-2 rounded-full bg-[#1877F2] inline-block"></span>
                Facebook: Bashuai Aluminium
              </a>
              <a
                href="https://www.tiktok.com/@user16653016539807"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-200/70 text-neutral-800 border border-neutral-300 hover:bg-neutral-200 text-[11px] font-semibold transition-colors"
                title="TikTok: @user16653016539807"
              >
                <span className="w-2 h-2 rounded-full bg-neutral-900 inline-block"></span>
                TikTok
              </a>
            </div>
          </div>

          {/* Col 3: Capabilities */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4">
              Architectural Systems
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-neutral-950 transition-colors">
                  Thermal-Break Sliding Doors
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-neutral-950 transition-colors">
                  Bi-Fold Folding Facades
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-neutral-950 transition-colors">
                  Structural Curtain Walls
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-neutral-950 transition-colors">
                  Frameless Glass Balustrades
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-neutral-950 transition-colors">
                  Acoustic Office Partitions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-neutral-950 transition-colors">
                  Bespoke Shower Cubicles
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4">
              Direct Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#calculator" className="hover:text-neutral-950 transition-colors">
                  Fabrication Cost Estimator
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-neutral-950 transition-colors">
                  Project Gallery & Specs
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-neutral-950 transition-colors">
                  Alloys, Finishes & Glass
                </a>
              </li>
              <li>
                <a href="#workshop" className="hover:text-neutral-950 transition-colors">
                  Inside The Workshop
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-neutral-950 transition-colors">
                  Technical FAQ & Codes
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-neutral-950 transition-colors">
                  Site Measurement Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Workshop Direct Contact */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4">
              Fabrication Plant
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-neutral-900 font-bold">Bashuai Workshop Desk</p>
              <p className="text-neutral-600">Industrial Fabrication Complex</p>
              <p className="text-neutral-900 font-mono font-semibold">+254 790 602 155 / +254 786 862 374</p>
              <p className="text-neutral-600">dispatch@bashuai-fabricator.com</p>
              <div className="pt-2">
                <span className="inline-block text-[11px] text-emerald-700 font-semibold">
                  ● Workshop Open: Mon–Sat 7:30AM–6:00PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Bashuai Aluminium. All rights reserved. Precision Aluminium & Glass Works.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-800 cursor-pointer">Quality Guarantee Policy</span>
            <span className="hover:text-neutral-800 cursor-pointer">Structural Deflection Codes</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
