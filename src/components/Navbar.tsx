import React from 'react';
import { Globe, PhoneCall, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenDemoModal }) => {
  const t = TRANSLATIONS[lang].nav;

  return (
    <header className="sticky top-0 z-40 bg-[#0c1a2e]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-[#F97316] flex items-center justify-center rounded-xl text-white font-bold text-lg tracking-tight shadow-md group-hover:scale-105 transition-transform">
              C
            </div>
            <span className="text-xl font-bold tracking-tight text-[#FDFAF5] font-display">
              Chekki<span className="text-[#F97316]">AI</span>
            </span>
          </a>
          
          <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 text-[11px] font-medium text-orange-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse"></span>
            <span>{t.tag}</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#how-it-works" className="hover:text-white transition-colors">
            {t.howItWorks}
          </a>
          <a href="#interactive-demo" className="hover:text-white transition-colors">
            {t.tryDemo}
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            {t.features}
          </a>
          <a href="#calculator" className="hover:text-white transition-colors">
            {t.calculator}
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#0F1014] text-xs font-semibold text-[#FDFAF5] hover:border-white/20 hover:bg-[#181a20] transition-all"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-orange-400" />
            <span>{t.language}</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenDemoModal}
            className="px-5 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-bold rounded-[24px] transition-all flex items-center space-x-1.5 hover:shadow-[0_8px_32px_rgba(249,115,22,0.15)] hover:scale-[1.02]"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{t.bookDemo}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
