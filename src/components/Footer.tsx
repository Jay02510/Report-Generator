import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].footer;

  return (
    <footer className="bg-[#050505] text-slate-400 text-xs py-16 border-t border-white/10 font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        
        {/* Top Row: Logo & Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-[#F97316] text-white font-black flex items-center justify-center rounded-lg text-sm font-display shadow-md">
                C
              </div>
              <span className="text-lg font-bold text-[#FDFAF5] font-display tracking-tight">
                Chekki<span className="text-[#F97316]">AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-body">
              Standardized Foreign Teacher Report Automation & Bilingual Parent Script Engine
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-300">
            {/* TODO: link to real pages once published */}
            {t.links.map((link, i) => (
              <a key={i} href="#" className="hover:text-[#F97316] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Business Registration Disclosures (Korean Legal Compliance) */}
        <div className="space-y-1.5 text-[11px] text-slate-400 leading-relaxed font-mono">
          <p className="font-sans text-slate-300 font-bold">{t.companyName}</p>
          <p>{t.ceo}</p>
          <p>{t.address}</p>
          <p className="pt-2 text-slate-500 font-body">{t.copyright}</p>
        </div>

      </div>
    </footer>
  );
};
