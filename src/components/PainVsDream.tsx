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
    <section className="py-24 bg-slate-50/60 border-b border-slate-200/80" id="pain-vs-standard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - No Floating Pill Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.heading}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: The Bottleneck */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Card Header */}
              <div className="flex items-center space-x-3 pb-6 border-b border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-200/60 flex items-center justify-center text-red-600 font-bold">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {t.bottleneckTitle}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {t.bottleneckSubtitle}
                  </p>
                </div>
              </div>

              {/* Points */}
              <div className="mt-6 space-y-6">
                {t.bottleneckPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3.5">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-red-100/80 text-red-700 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      ✕
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">
                        {point.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stat Alert */}
            <div className="mt-8 pt-4 border-t border-slate-100 bg-red-50/50 p-4 rounded-lg border border-red-100/80 flex items-start space-x-3">
              <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-red-900 font-medium leading-relaxed">
                {t.bottleneckAlert}
              </p>
            </div>
          </div>

          {/* Column 2: ChekkiAI System */}
          <div className="bg-white border-2 border-blue-600/30 rounded-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
            {/* Corner Badge */}
            <div className="absolute top-0 right-0 bg-blue-700 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-bl-lg">
              Standardized
            </div>

            <div>
              {/* Card Header */}
              <div className="flex items-center space-x-3 pb-6 border-b border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-700 font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {t.standardTitle}
                  </h3>
                  <p className="text-xs text-blue-700 font-medium">
                    {t.standardSubtitle}
                  </p>
                </div>
              </div>

              {/* Points */}
              <div className="mt-6 space-y-6">
                {t.standardPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3.5">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">
                        {point.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stat Alert */}
            <div className="mt-8 pt-4 border-t border-slate-100 bg-blue-50/50 p-4 rounded-lg border border-blue-100/80 flex items-start space-x-3">
              <Zap className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-blue-900 font-medium leading-relaxed">
                {t.standardResult}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

