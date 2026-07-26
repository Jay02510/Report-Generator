import React from 'react';
import { ArrowRight, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FinalCtaProps {
  lang: Language;
  onOpenDemoModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ lang, onOpenDemoModal }) => {
  const t = TRANSLATIONS[lang].finalCta;

  return (
    <section className="py-24 bg-white border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Subtle Tag */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-[11px] font-bold uppercase tracking-wider text-zinc-600">
          <Sparkles className="w-3.5 h-3.5 text-blue-700" />
          <span>ChekkiAI Hakwon Operations Standard</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight max-w-3xl mx-auto leading-tight">
          {t.heading}
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          {t.subtext}
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-medium text-sm sm:text-base rounded transition-all flex items-center justify-center space-x-2"
          >
            <span>{t.primaryBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-800 font-medium text-sm sm:text-base rounded transition-all flex items-center justify-center space-x-2"
          >
            <PhoneCall className="w-4 h-4 text-zinc-500" />
            <span>{t.secondaryBtn}</span>
          </button>
        </div>

        {/* Guarantee subtext */}
        <div className="pt-2 flex items-center justify-center space-x-2 text-xs text-zinc-500">
          <ShieldCheck className="w-4 h-4 text-blue-700" />
          <span>{t.guarantee}</span>
        </div>

      </div>
    </section>
  );
};
