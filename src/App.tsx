/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { PainVsDream } from './components/PainVsDream';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { InteractiveDemo } from './components/InteractiveDemo';
import { RoiCalculator } from './components/RoiCalculator';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';

export default function App() {
  const [lang, setLang] = useState<Language>('ko');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);

  const toggleLang = () => {
    setLang((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  const scrollToDemo = () => {
    const el = document.getElementById('interactive-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c1a2e] text-[#FDFAF5] font-body selection:bg-orange-500/30 selection:text-orange-200">
      
      {/* 1. Global Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLang}
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* 2. Hero Section (Above the Fold) */}
        <Hero
          lang={lang}
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
          onScrollToDemo={scrollToDemo}
        />

        {/* Trust Social Proof Strip */}
        <TrustStrip lang={lang} />

        {/* 3. Pain vs. Dream Section (2-Column Grid) */}
        <PainVsDream lang={lang} />

        {/* 4. How It Works (3-Step Horizontal Layout) */}
        <HowItWorks lang={lang} />

        {/* 5. Feature Highlights */}
        <Features lang={lang} />

        {/* Live Interactive Demo Sandbox */}
        <InteractiveDemo
          lang={lang}
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
        />

        {/* ROI Savings Calculator */}
        <RoiCalculator
          lang={lang}
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
        />

        {/* 6. Final Call to Action */}
        <FinalCta
          lang={lang}
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
          onScrollToDemo={scrollToDemo}
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Book Demo Modal */}
      <BookDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        lang={lang}
      />

    </div>
  );
}
