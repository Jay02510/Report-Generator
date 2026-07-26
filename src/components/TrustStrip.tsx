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
    <div className="bg-slate-50 border-y border-slate-200/80 py-3.5 px-4 text-center">
      <div className="max-w-5xl mx-auto flex items-center justify-center space-x-2 text-xs sm:text-sm font-medium text-slate-700">
        <ShieldCheck className="w-4 h-4 text-blue-700 flex-shrink-0" />
        <span>{badge}</span>
      </div>
    </div>
  );
};
