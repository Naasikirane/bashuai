import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Phone, MessageSquare, Printer, Shield } from 'lucide-react';
import { SERVICES } from '../data/fabricationData';

export interface QuotePrefillData {
  systemName?: string;
  width?: number;
  height?: number;
  units?: number;
  area?: number;
  finishName?: string;
  glassName?: string;
  estimatedCost?: string;
}

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: QuotePrefillData | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, prefill }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [selectedService, setSelectedService] = useState(prefill?.systemName || SERVICES[0].title);
  const [laserSurveyNeeded, setLaserSurveyNeeded] = useState(true);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefill?.systemName) {
      setSelectedService(prefill.systemName);
    }
  }, [prefill]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !location.trim()) {
      setErrorMsg('Please provide your full name, phone number, and project site location.');
      return;
    }

    setErrorMsg('');
    const randomCode = `BSH-${Math.floor(1000 + Math.random() * 9000)}`;
    setQuoteRef(randomCode);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-neutral-200 text-neutral-900 rounded-2xl overflow-hidden shadow-2xl my-8">
        {/* Header bar */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 bg-neutral-50/90">
          <div>
            <span className="font-mono text-xs font-bold text-[#fda63a] uppercase tracking-wider block">
              Bashuai · Aluminium
            </span>
            <h3 className="text-xl font-display font-bold text-neutral-950 mt-0.5">
              {submitted ? 'Fabrication Order Request Confirmed' : 'Request Project Quote & Site Survey'}
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 text-neutral-500 hover:text-neutral-900 rounded-lg hover:bg-neutral-200/60 transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body or Success State */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#fda63a]/10 text-[#fda63a] flex items-center justify-center mx-auto border border-[#fda63a]/30">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-display font-bold text-neutral-950">
                  Quote Request Dispatched
                </h4>
                <p className="text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                  Thank you, <span className="text-neutral-900 font-semibold">{fullName}</span>. Your engineering specifications have been routed to our fabrication workshop estimation desk.
                </p>
              </div>

              {/* Reference Ticket Box */}
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500">Reference Number:</span>
                  <span className="font-mono font-bold text-[#fda63a]">{quoteRef}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500">System Requested:</span>
                  <span className="text-neutral-900 font-semibold">{selectedService}</span>
                </div>
                {prefill?.area && (
                  <div className="flex justify-between border-b border-neutral-200 pb-2">
                    <span className="text-neutral-500">Estimated Glazed Area:</span>
                    <span className="font-mono text-neutral-900 font-medium">{prefill.area} m² ({prefill.units} units)</span>
                  </div>
                )}
                {prefill?.estimatedCost && (
                  <div className="flex justify-between border-b border-neutral-200 pb-2">
                    <span className="text-neutral-500">Estimated Cost Range:</span>
                    <span className="font-mono text-[#fda63a] font-bold">{prefill.estimatedCost}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-neutral-500">Site Laser Survey:</span>
                  <span className="text-neutral-900 font-medium">{laserSurveyNeeded ? 'Requested (Free Assessment)' : 'Drawings Provided'}</span>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                <a
                  href={`https://wa.me/254790602155?text=Hello%20Bashuai%20Aluminium,%20I%20have%20submitted%20quote%20request%20${quoteRef}%20for%20${encodeURIComponent(selectedService)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Line 1</span>
                </a>
                <a
                  href={`https://wa.me/254786862374?text=Hello%20Bashuai%20Aluminium,%20I%20have%20submitted%20quote%20request%20${quoteRef}%20for%20${encodeURIComponent(selectedService)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Line 2</span>
                </a>
                <a
                  href="tel:+254790602155"
                  className="px-4 py-2 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#fda63a]" />
                  <span>Call Workshop Desk</span>
                </a>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-3 py-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* If prefilled from calculator, show summary strip */}
              {prefill?.systemName && (
                <div className="p-3.5 bg-neutral-50 rounded-xl border border-[#fda63a]/30 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="text-neutral-500">Configured System: </span>
                    <span className="font-bold text-neutral-900">{prefill.systemName}</span>
                    <span className="text-neutral-500 font-mono ml-2">
                      ({prefill.width}m × {prefill.height}m · {prefill.area}m²)
                    </span>
                  </div>
                  {prefill.estimatedCost && (
                    <span className="font-mono font-bold text-[#fda63a]">
                      {prefill.estimatedCost}
                    </span>
                  )}
                </div>
              )}

              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                  {errorMsg}
                </div>
              )}

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Your Full Name / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Arch. Emmanuel Davies"
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#fda63a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Phone Number (WhatsApp Active) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +254 712 345 678"
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#fda63a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="architect@domain.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#fda63a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Project Site Location / City *
                  </label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Victoria Island, Lagos / Lekki Phase 1"
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#fda63a]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Architectural Glazing System
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:border-[#fda63a]"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Complete Residential Package">Complete Residential Package (Doors, Windows, Showers)</option>
                  <option value="Commercial Curtain Wall Facade">Commercial Curtain Wall Facade</option>
                  <option value="Frameless Glass Railings">Frameless Glass Railings / Balustrades</option>
                </select>
              </div>

              {/* Laser Survey Checkbox */}
              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg flex items-start gap-3">
                <input
                  type="checkbox"
                  id="laserSurvey"
                  checked={laserSurveyNeeded}
                  onChange={(e) => setLaserSurveyNeeded(e.target.checked)}
                  className="mt-1 accent-[#fda63a] w-4 h-4 rounded cursor-pointer"
                />
                <label htmlFor="laserSurvey" className="text-xs text-neutral-700 cursor-pointer">
                  <span className="font-bold text-neutral-900 block">Request Free Site Optical Laser Survey</span>
                  Check this box if you would like a certified Bashuai technician to visit your site to take precise opening measurements.
                </label>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Project Notes, Opening Count or Specific Finish Requirements
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention opening quantities, floor levels, architectural drawings link, or custom color requests..."
                  className="w-full px-3.5 py-2 bg-white border border-neutral-300 rounded-lg text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#fda63a]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-[11px] text-neutral-500 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#fda63a]" />
                  <span>Direct workshop pricing · No middleman markup</span>
                </span>

                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-bold text-white bg-[#fda63a] hover:bg-[#feb452] active:bg-[#e89020] rounded-lg transition-colors flex items-center gap-2 shadow-sm shadow-[#fda63a]/25 cursor-pointer whitespace-nowrap"
                >
                  <span>Submit Fabrication Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
