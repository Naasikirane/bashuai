import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  onOpenQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="contact" className="py-24 bg-neutral-50/70 border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Workshop Details & Direct Lines */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#fda63a] uppercase tracking-widest mb-3">
                <span>Bashuai Aluminium Workshop</span>
                <span aria-hidden="true">·</span>
                <span>Direct Access</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
                Speak Directly With Our Chief Fabrication Engineer
              </h2>
              <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                Whether you need technical advice on wind load deflections for a 4-meter glass facade or want to schedule an optical laser survey for residential sliding doors, our workshop team is ready.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-neutral-200 flex items-start gap-4 shadow-sm">
                <div className="p-2.5 rounded-lg bg-[#fda63a]/10 text-[#fda63a] shrink-0 border border-[#fda63a]/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Direct Workshop Hotline</h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 font-display font-bold text-neutral-950">
                    <a
                      href="tel:+254790602155"
                      className="text-base hover:text-[#fda63a] transition-colors"
                    >
                      +254 790 602 155
                    </a>
                    <span className="text-neutral-300">/</span>
                    <a
                      href="tel:+254786862374"
                      className="text-base hover:text-[#fda63a] transition-colors"
                    >
                      +254 786 862 374
                    </a>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">Mon–Sat 7:30 AM – 6:00 PM · Dedicated Technical Support</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-emerald-200 bg-gradient-to-br from-white to-emerald-50/20 flex items-start gap-4 shadow-sm">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 shrink-0 border border-emerald-500/20">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Instant Architectural WhatsApp</h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">2 Active Lines</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2.5">
                    <a
                      href="https://wa.me/254790602155?text=Hello%20Bashuai%20Aluminium,%20I%20would%20like%20to%20inquire%20about%20aluminium%20and%20glass%20fabrication."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-emerald-300/80 hover:border-emerald-500 hover:bg-emerald-50 text-emerald-800 transition-all group font-semibold text-xs shadow-xs"
                    >
                      <div>
                        <span className="block font-bold text-neutral-900 group-hover:text-emerald-800">+254 790 602 155</span>
                        <span className="block text-[10px] text-neutral-500 font-normal">Line 1 · Direct WhatsApp</span>
                      </div>
                      <span className="text-emerald-600 text-xs font-bold group-hover:translate-x-0.5 transition-transform">Chat →</span>
                    </a>
                    <a
                      href="https://wa.me/254786862374?text=Hello%20Bashuai%20Aluminium,%20I%20would%20like%20to%20inquire%20about%20aluminium%20and%20glass%20fabrication."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-emerald-300/80 hover:border-emerald-500 hover:bg-emerald-50 text-emerald-800 transition-all group font-semibold text-xs shadow-xs"
                    >
                      <div>
                        <span className="block font-bold text-neutral-900 group-hover:text-emerald-800">+254 786 862 374</span>
                        <span className="block text-[10px] text-neutral-500 font-normal">Line 2 · Direct WhatsApp</span>
                      </div>
                      <span className="text-emerald-600 text-xs font-bold group-hover:translate-x-0.5 transition-transform">Chat →</span>
                    </a>
                  </div>
                  <p className="text-xs text-neutral-500 mt-2">Send architectural CAD files, PDF plans or photos for instant appraisal</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 flex items-start gap-4 shadow-sm">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-[#1877F2] shrink-0 border border-blue-500/20">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Official Facebook Page</h3>
                  <a
                    href="https://web.facebook.com/profile.php?id=61588404058082"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-display font-bold text-blue-700 hover:text-blue-800 transition-colors block mt-0.5"
                  >
                    Bashuai Aluminium on Facebook →
                  </a>
                  <p className="text-xs text-neutral-500 mt-0.5">Follow recent site installations, structural photos, and project showcases</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 flex items-start gap-4 shadow-sm">
                <div className="p-2.5 rounded-lg bg-[#fda63a]/10 text-[#fda63a] shrink-0 border border-[#fda63a]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Fabrication Facility & Showroom</h3>
                  <p className="text-sm font-semibold text-neutral-900 mt-0.5">
                    Bashuai Aluminium & Glass Works Plant, Industrial Fabrication Complex
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">Visits welcome: inspect raw 6063-T6 extrusions and glass samples</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Next Steps & Quick Consultation Launcher */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-md space-y-6">
            <div className="pb-4 border-b border-neutral-200">
              <span className="font-mono text-xs font-bold text-[#fda63a] uppercase tracking-wider">
                Turnkey Workflow
              </span>
              <h3 className="text-2xl font-display font-bold text-neutral-950 mt-1">
                From Preliminary Concept to Certified Site Handover
              </h3>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-neutral-100 text-[#fda63a] font-mono font-bold flex items-center justify-center shrink-0 border border-neutral-200">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-neutral-900">Engineering Review & Estimate</h4>
                  <p className="text-neutral-600 mt-0.5">We analyze your opening schedules, wind loads, and thermal specifications to deliver a transparent bill of quantities.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-neutral-100 text-[#fda63a] font-mono font-bold flex items-center justify-center shrink-0 border border-neutral-200">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-neutral-900">Laser Triangulation Survey</h4>
                  <p className="text-neutral-600 mt-0.5">A Bashuai glazier visits your building with optical laser equipment to verify exact structural opening dimensions to ±1mm.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-neutral-100 text-[#fda63a] font-mono font-bold flex items-center justify-center shrink-0 border border-neutral-200">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-neutral-900">CNC Precision Fabrication</h4>
                  <p className="text-neutral-600 mt-0.5">Extrusions are precision cut, crimped, chemically sealed, and dry-fitted in our plant under strict QA protocols.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-neutral-100 text-[#fda63a] font-mono font-bold flex items-center justify-center shrink-0 border border-neutral-200">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-neutral-900">Site Glazing & Deflection Signoff</h4>
                  <p className="text-neutral-600 mt-0.5">Our in-house installation team installs the frames, beds the structural glass, tests water-tightness, and hands over warranty certificates.</p>
                </div>
              </div>
            </div>

            {/* Launch Modal CTA */}
            <div className="pt-4 border-t border-neutral-200">
              <button
                type="button"
                onClick={onOpenQuote}
                className="w-full py-3.5 px-4 text-xs font-bold text-white bg-[#fda63a] hover:bg-[#feb452] active:bg-[#e89020] rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm shadow-[#fda63a]/25 cursor-pointer"
              >
                <span>Request Quotation & Schedule Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
