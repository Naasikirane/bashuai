import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { Calculator } from './components/Calculator';
import { PortfolioSection } from './components/PortfolioSection';
import { MaterialSpecs } from './components/MaterialSpecs';
import { WorkshopCraft } from './components/WorkshopCraft';
import { TestimonialsAndProof } from './components/TestimonialsAndProof';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal, QuotePrefillData } from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<QuotePrefillData | null>(null);

  const handleOpenQuote = (serviceTitle?: string) => {
    if (serviceTitle) {
      setQuotePrefill({ systemName: serviceTitle });
    } else {
      setQuotePrefill(null);
    }
    setIsQuoteOpen(true);
  };

  const handleTransferFromCalculator = (details: {
    systemName: string;
    width: number;
    height: number;
    units: number;
    area: number;
    finishName: string;
    glassName: string;
    estimatedCost: string;
  }) => {
    setQuotePrefill(details);
    setIsQuoteOpen(true);
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-[#fda63a]/25 selection:text-[#fda63a]">
      {/* Top Bar Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onExploreCalculator={scrollToCalculator}
        />

        {/* 01. Specialized Capabilities & Specifications */}
        <ServicesSection onSelectService={(service) => handleOpenQuote(service)} />

        {/* 02. Interactive Fabrication Cost & Area Estimator */}
        <Calculator onTransferToQuote={handleTransferFromCalculator} />

        {/* 03. Installed Project Portfolio & Architectural Inspection */}
        <PortfolioSection onSelectProjectForQuote={(project) => handleOpenQuote(project)} />

        {/* 04. Metallurgy, Powder Finishes & High-Performance Glass */}
        <MaterialSpecs />

        {/* 05. The Workshop & 4-Step Production Standard */}
        <WorkshopCraft onScheduleVisit={() => handleOpenQuote('Workshop Facility Tour & Consultation')} />

        {/* 06. Quantitative Rigor, Client Proof & Standards */}
        <TestimonialsAndProof />

        {/* 07. Technical FAQ */}
        <FaqSection />

        {/* 08. Direct Workshop Hotline & Next Steps */}
        <ContactSection onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quotation & Laser Measurement Booking Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        prefill={quotePrefill}
      />
    </div>
  );
}
