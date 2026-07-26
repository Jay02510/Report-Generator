import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface TrustStripProps {
  lang: Language;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ lang }) => {
  const badge = TRANSLATIONS[lang].hero.badge;

  return (
    <div className="bg-[#081220] border-y border-white/10 py-4 px-6 text-center">
      <div className="max-w-5xl mx-auto flex items-center justify-center space-x-2 text-xs sm:text-sm font-medium text-[#FDFAF5]">
        <ShieldCheck className="w-4 h-4 text-[#F97316] flex-shrink-0" />
        <span>{badge}</span>
      </div>
    </div>
  );
};
