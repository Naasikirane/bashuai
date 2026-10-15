import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, PhoneCall, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: (initialService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Capabilities', href: '#services' },
    { label: 'Estimator', href: '#calculator' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Materials & Finish', href: '#materials' },
    { label: 'The Workshop', href: '#workshop' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/90 py-3 shadow-sm'
          : 'bg-white/85 backdrop-blur-sm border-b border-neutral-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* ZONE 1: Brand title wordmark with Bashuai Logo */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fda63a] rounded-sm"
            aria-label="Bashuai Aluminium - Home"
          >
            <Logo size="md" variant="full" theme="light" />
          </a>

          {/* ZONE 2: 4-6 clean text navigation links with subtle hover underlines */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-neutral-950 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#fda63a] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ZONE 3: 1-2 primary actions */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+254790602155"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200/80 rounded-lg transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#fda63a]" />
              <span>Workshop Line</span>
            </a>

            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#fda63a] hover:bg-[#feb452] active:bg-[#e89020] rounded-lg transition-all shadow-sm shadow-[#fda63a]/30 whitespace-nowrap cursor-pointer"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fda63a] rounded-md"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2">
            <a
              href="tel:+254790602155"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-neutral-800 bg-neutral-100 border border-neutral-200 rounded-lg"
            >
              <PhoneCall className="w-4 h-4 text-[#fda63a]" />
              <span>Call Workshop (+254 790 602 155)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 text-xs font-bold text-white bg-[#fda63a] hover:bg-[#feb452] rounded-lg text-center cursor-pointer"
            >
              Request Custom Project Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
