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
    <section className="py-32 bg-[#0c1a2e] border-b border-white/10" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FDFAF5] font-display tracking-tight">
            {t.heading}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
            {t.subheading}
          </p>
        </div>

        {/* 3-Step Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Step 1 */}
          <div className="bg-[#0F1014] border border-white/10 rounded-2xl p-8 flex flex-col justify-between relative group hover:border-[#F97316]/40 transition-all shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#F97316] mb-6 font-bold">
                <Smartphone className="w-6 h-6 text-[#F97316]" />
              </div>
              <span className="text-xs font-bold tracking-wider text-orange-400 block mb-1 font-display">
                STEP 01
              </span>
              <h3 className="text-lg font-bold text-[#FDFAF5] font-display tracking-tight mb-2">
                {t.step1Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                {t.step1Desc}
              </p>
            </div>

            {/* UI Visual Chip */}
            <div className="mt-8 pt-4 border-t border-white/10 bg-[#050505] p-3.5 rounded-xl text-xs space-y-1 text-slate-300">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Teacher Log</span>
                <span className="text-orange-300 font-bold bg-orange-500/20 px-2.5 py-0.5 rounded-full border border-orange-500/30">{t.step1Badge}</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#0F1014] border border-white/10 rounded-2xl p-8 flex flex-col justify-between relative group hover:border-[#F97316]/40 transition-all shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#8B5CF6] mb-6 font-bold">
                <Cpu className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <span className="text-xs font-bold tracking-wider text-purple-400 block mb-1 font-display">
                STEP 02
              </span>
              <h3 className="text-lg font-bold text-[#FDFAF5] font-display tracking-tight mb-2">
                {t.step2Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                {t.step2Desc}
              </p>
            </div>

            {/* UI Visual Chip */}
            <div className="mt-8 pt-4 border-t border-white/10 bg-[#050505] p-3.5 rounded-xl text-xs space-y-1 text-slate-300">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Translation Engine</span>
                <span className="text-purple-300 font-bold bg-purple-500/20 px-2.5 py-0.5 rounded-full border border-purple-500/30">{t.step2Badge}</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#0F1014] border border-white/10 rounded-2xl p-8 flex flex-col justify-between relative group hover:border-[#F97316]/40 transition-all shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 font-bold">
                <FileCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-xs font-bold tracking-wider text-emerald-400 block mb-1 font-display">
                STEP 03
              </span>
              <h3 className="text-lg font-bold text-[#FDFAF5] font-display tracking-tight mb-2">
                {t.step3Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                {t.step3Desc}
              </p>
            </div>

            {/* UI Visual Chip */}
            <div className="mt-8 pt-4 border-t border-white/10 bg-[#050505] p-3.5 rounded-xl text-xs space-y-1 text-slate-300">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Bilingual Script</span>
                <span className="text-emerald-300 font-bold bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">{t.step3Badge}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

