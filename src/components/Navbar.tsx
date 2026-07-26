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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-zinc-900 flex items-center justify-center rounded text-white font-bold text-lg tracking-tight">
              C
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900 font-sans">
              Chekki<span className="text-blue-700">AI</span>
            </span>
          </a>
          
          <div className="hidden sm:flex items-center space-x-1 px-2.5 py-0.5 rounded border border-zinc-200 bg-zinc-50 text-[11px] font-medium text-zinc-600">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-700"></span>
            <span>{t.tag}</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-600">
          <a href="#how-it-works" className="hover:text-zinc-900 transition-colors">
            {t.howItWorks}
          </a>
          <a href="#interactive-demo" className="hover:text-zinc-900 transition-colors">
            {t.tryDemo}
          </a>
          <a href="#features" className="hover:text-zinc-900 transition-colors">
            {t.features}
          </a>
          <a href="#calculator" className="hover:text-zinc-900 transition-colors">
            {t.calculator}
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded border border-zinc-200 bg-white text-xs font-semibold text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-all"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-zinc-500" />
            <span>{t.language}</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenDemoModal}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-medium rounded transition-all flex items-center space-x-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{t.bookDemo}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
