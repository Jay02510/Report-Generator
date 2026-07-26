import React from 'react';
import { Smartphone, Cpu, FileCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HowItWorksProps {
  lang: Language;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].howItWorks;

  return (
    <section className="py-24 bg-white border-b border-slate-200/80" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - No Floating Pill Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.heading}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* 3-Step Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Step 1 */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-7 flex flex-col justify-between relative group hover:border-slate-300 transition-all shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-900 mb-6 font-bold shadow-2xs">
                <Smartphone className="w-6 h-6 text-blue-700" />
              </div>
              <span className="text-xs font-semibold tracking-wide text-blue-700 block mb-1">
                01
              </span>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                {t.step1Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.step1Desc}
              </p>
            </div>

            {/* UI Visual Chip */}
            <div className="mt-8 pt-4 border-t border-slate-200/80 bg-white p-3.5 rounded-lg text-xs space-y-1 text-slate-600 shadow-2xs">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500 font-medium">Teacher Log</span>
                <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded">{t.step1Badge}</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-7 flex flex-col justify-between relative group hover:border-slate-300 transition-all shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-900 mb-6 font-bold shadow-2xs">
                <Cpu className="w-6 h-6 text-blue-700" />
              </div>
              <span className="text-xs font-semibold tracking-wide text-blue-700 block mb-1">
                02
              </span>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                {t.step2Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.step2Desc}
              </p>
            </div>

            {/* UI Visual Chip */}
            <div className="mt-8 pt-4 border-t border-slate-200/80 bg-white p-3.5 rounded-lg text-xs space-y-1 text-slate-600 shadow-2xs">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500 font-medium">Translation Engine</span>
                <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded">{t.step2Badge}</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-7 flex flex-col justify-between relative group hover:border-slate-300 transition-all shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-900 mb-6 font-bold shadow-2xs">
                <FileCheck className="w-6 h-6 text-blue-700" />
              </div>
              <span className="text-xs font-semibold tracking-wide text-blue-700 block mb-1">
                03
              </span>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                {t.step3Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.step3Desc}
              </p>
            </div>

            {/* UI Visual Chip */}
            <div className="mt-8 pt-4 border-t border-slate-200/80 bg-white p-3.5 rounded-lg text-xs space-y-1 text-slate-600 shadow-2xs">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500 font-medium">Bilingual Script</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">{t.step3Badge}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

