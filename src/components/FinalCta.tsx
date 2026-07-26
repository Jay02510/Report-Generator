import React from 'react';
import { ArrowRight, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FinalCtaProps {
  lang: Language;
  onOpenDemoModal: () => void;
  onScrollToDemo: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ lang, onOpenDemoModal, onScrollToDemo }) => {
  const t = TRANSLATIONS[lang].finalCta;

  return (
    <section className="py-32 bg-[#0c1a2e] border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-6">
        
        {/* Subtle Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-xs font-handwritten text-orange-300 handwriting-tilt">
          <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
          <span>✨ ChekkiAI Hakwon Operations Standard</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FDFAF5] font-display tracking-tight max-w-3xl mx-auto leading-tight">
          {t.heading}
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-body">
          {t.subtext}
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto px-8 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm sm:text-base rounded-full shadow-[0_8px_32px_rgba(249,115,22,0.15)] hover:shadow-[0_12px_40px_rgba(249,115,22,0.25)] hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
          >
            <span>{t.primaryBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onScrollToDemo}
            className="w-full sm:w-auto px-8 py-4 bg-[#0F1014] border border-white/10 hover:border-white/20 text-[#FDFAF5] font-semibold text-sm sm:text-base rounded-full transition-all flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>{t.secondaryBtn}</span>
          </button>
        </div>

        {/* Guarantee subtext */}
        <div className="pt-2 flex items-center justify-center space-x-2 text-xs text-slate-400 font-body">
          <ShieldCheck className="w-4 h-4 text-[#F97316]" />
          <span>{t.guarantee}</span>
        </div>

      </div>
    </section>
  );
};
