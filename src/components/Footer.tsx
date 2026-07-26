import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].footer;

  return (
    <footer className="bg-zinc-950 text-zinc-400 text-xs py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Row: Logo & Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-zinc-800/80 pb-8">
          <div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white text-zinc-950 font-bold flex items-center justify-center rounded text-xs">
                C
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Chekki<span className="text-blue-400">AI</span>
              </span>
            </div>
            <p className="text-xs text-zinc-500 mt-1">
              Standardized Foreign Teacher Report Automation & Bilingual Parent Script Engine
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-zinc-400">
            {t.links.map((link, i) => (
              <a key={i} href="#" className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Business Registration Disclosures (Korean Legal Compliance) */}
        <div className="space-y-1.5 text-[11px] text-zinc-500 leading-relaxed font-mono">
          <p className="font-sans text-zinc-400 font-bold">{t.companyName}</p>
          <p>{t.ceo}</p>
          <p>{t.address}</p>
          <p className="pt-2 text-zinc-600">{t.copyright}</p>
        </div>

      </div>
    </footer>
  );
};
