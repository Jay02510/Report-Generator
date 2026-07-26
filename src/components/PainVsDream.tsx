import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, Zap } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface PainVsDreamProps {
  lang: Language;
}

export const PainVsDream: React.FC<PainVsDreamProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].painVsDream;

  return (
    <section className="py-32 bg-[#0c1a2e] border-b border-white/10" id="pain-vs-standard">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FDFAF5] font-display tracking-tight">
            {t.heading}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
            {t.subheading}
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: The Bottleneck */}
          <div className="bg-[#0F1014] border border-white/10 rounded-2xl p-8 flex flex-col justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] relative">
            
            {/* Notebook Annotation */}
            <div className="absolute -top-3 left-6 bg-pink-500/20 border border-pink-500/40 px-3 py-0.5 rounded-full text-xs font-handwritten text-pink-300 handwriting-tilt">
              ❌ 15+ Hours Lost Weekly
            </div>

            <div>
              {/* Card Header */}
              <div className="flex items-center space-x-3 pb-6 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 font-bold">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#FDFAF5] font-display tracking-tight">
                    {t.bottleneckTitle}
                  </h3>
                  <p className="text-xs text-pink-300 font-medium">
                    {t.bottleneckSubtitle}
                  </p>
                </div>
              </div>

              {/* Points */}
              <div className="mt-6 space-y-6">
                {t.bottleneckPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3.5">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      ✕
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#FDFAF5] font-display">
                        {point.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stat Alert */}
            <div className="mt-8 bg-pink-950/20 p-4 rounded-xl border border-pink-500/30 flex items-start space-x-3">
              <AlertTriangle className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-pink-200 font-medium leading-relaxed font-body">
                {t.bottleneckAlert}
              </p>
            </div>
          </div>

          {/* Column 2: ChekkiAI System */}
          <div className="bg-[#0F1014] border-2 border-[#F97316]/50 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
            {/* Corner Badge */}
            <div className="absolute top-0 right-0 bg-[#F97316] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-bl-xl font-display">
              Standardized
            </div>

            {/* Notebook Annotation */}
            <div className="absolute -top-3 left-6 bg-orange-500/20 border border-orange-500/40 px-3 py-0.5 rounded-full text-xs font-handwritten text-orange-300 handwriting-tilt-right">
              ✨ 90% Time Saved
            </div>

            <div>
              {/* Card Header */}
              <div className="flex items-center space-x-3 pb-6 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-[#F97316] font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#FDFAF5] font-display tracking-tight">
                    {t.standardTitle}
                  </h3>
                  <p className="text-xs text-orange-400 font-medium">
                    {t.standardSubtitle}
                  </p>
                </div>
              </div>

              {/* Points */}
              <div className="mt-6 space-y-6">
                {t.standardPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3.5">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-orange-500/20 text-[#F97316] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#FDFAF5] font-display">
                        {point.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stat Alert */}
            <div className="mt-8 bg-orange-950/30 p-4 rounded-xl border border-orange-500/30 flex items-start space-x-3">
              <Zap className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-orange-200 font-medium leading-relaxed font-body">
                {t.standardResult}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

