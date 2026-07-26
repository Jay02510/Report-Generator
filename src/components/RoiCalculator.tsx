import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface RoiCalculatorProps {
  lang: Language;
  onOpenDemoModal: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ lang, onOpenDemoModal }) => {
  const t = TRANSLATIONS[lang].calculator;

  const [foreignTeachers, setForeignTeachers] = useState<number>(4);
  const [students, setStudents] = useState<number>(120);

  // Calculations
  const weeklyHoursSaved = Math.round(foreignTeachers * 3.5);
  const hourlyRateKRW = 18000; // 18,000 KRW/hr inclusive of operational overhead
  const monthlySavingsKRW = weeklyHoursSaved * 4.33 * hourlyRateKRW;
  const annualSavingsKRW = monthlySavingsKRW * 12;

  // Format currency
  const formatKrw = (val: number) => {
    return new Intl.NumberFormat('ko-KR').format(Math.round(val));
  };

  return (
    <section className="py-32 bg-[#0c1a2e] border-b border-white/10" id="calculator">
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

        {/* Interactive Calculator Container */}
        <div className="bg-[#0F1014] border border-white/10 rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
          
          {/* Controls Column (6 cols) */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-[#F97316]">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#FDFAF5] font-display">
                    {t.sliderSectionTitle}
                  </h3>
                  <p className="text-xs text-slate-400 font-body">
                    {t.sliderSectionSubtitle}
                  </p>
                </div>
              </div>

              {/* Slider 1: Foreign Teachers */}
              <div className="space-y-3 font-body">
                <div className="flex justify-between items-center text-sm font-bold text-[#FDFAF5]">
                  <label htmlFor="teachers-slider">{t.foreignTeachersLabel}</label>
                  <span className="text-sm font-extrabold text-[#F97316] px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full font-display">
                    {foreignTeachers} 명
                  </span>
                </div>
                <input
                  id="teachers-slider"
                  type="range"
                  min={1}
                  max={20}
                  value={foreignTeachers}
                  onChange={(e) => setForeignTeachers(Number(e.target.value))}
                  className="w-full h-2 bg-[#050505] rounded-lg cursor-pointer accent-[#F97316]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  {t.teacherRangeLabels.map((lbl, idx) => (
                    <span key={idx}>{lbl}</span>
                  ))}
                </div>
              </div>

              {/* Slider 2: Student Count */}
              <div className="space-y-3 font-body">
                <div className="flex justify-between items-center text-sm font-bold text-[#FDFAF5]">
                  <label htmlFor="students-slider">{t.studentCountLabel}</label>
                  <span className="text-sm font-extrabold text-[#FDFAF5] px-3 py-1 bg-[#050505] border border-white/10 rounded-full font-display">
                    {students} 명
                  </span>
                </div>
                <input
                  id="students-slider"
                  type="range"
                  min={20}
                  max={500}
                  step={10}
                  value={students}
                  onChange={(e) => setStudents(Number(e.target.value))}
                  className="w-full h-2 bg-[#050505] rounded-lg cursor-pointer accent-[#F97316]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  {t.studentRangeLabels.map((lbl, idx) => (
                    <span key={idx}>{lbl}</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pt-4 border-t border-white/10 font-body">
              * {t.disclaimerText}
            </p>
          </div>

          {/* Metrics Results Display (6 cols) */}
          <div className="lg:col-span-6 bg-[#081220] border border-white/10 rounded-2xl p-8 space-y-6 flex flex-col justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] relative">
            
            {/* Notebook Annotation */}
            <div className="absolute -top-3 right-6 bg-orange-500/20 border border-orange-500/40 px-3 py-0.5 rounded-full text-xs font-handwritten text-orange-300 handwriting-tilt">
              💰 Real ROI Calculation
            </div>

            <div className="space-y-6">
              
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-1 font-display">
                  {t.analysisLabel}
                </span>
                <h3 className="text-xl font-extrabold text-[#FDFAF5] font-display tracking-tight">
                  {t.analysisHeading}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Metric 1: Hours */}
                <div className="p-4 bg-[#050505] border border-white/10 rounded-xl space-y-1">
                  <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-medium font-body">
                    <Clock className="w-4 h-4 text-orange-400" />
                    <span>{t.weeklyTranslationHours}</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#FDFAF5] font-display tracking-tight">
                    {weeklyHoursSaved} <span className="text-xs font-normal text-slate-400">{t.hoursUnit}</span>
                  </div>
                </div>

                {/* Metric 2: Monthly KRW */}
                <div className="p-4 bg-[#050505] border border-white/10 rounded-xl space-y-1">
                  <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-medium font-body">
                    <TrendingUp className="w-4 h-4 text-[#F97316]" />
                    <span>{t.monthlyCostSavings}</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#F97316] font-display tracking-tight">
                    ₩ {formatKrw(monthlySavingsKRW)}
                  </div>
                </div>

              </div>

              {/* Hero Metric: Annual Savings */}
              <div className="p-5 bg-orange-950/20 border border-orange-500/40 rounded-xl space-y-1.5">
                <div className="text-xs text-orange-400 font-bold uppercase tracking-wider font-display">
                  {t.annualCostSavings}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#FDFAF5] font-display tracking-tight">
                  ₩ {formatKrw(annualSavingsKRW)}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1 font-body">
                  {t.annualSummaryTemplate.replace('{hours}', String(weeklyHoursSaved * 52))}
                </p>
              </div>

            </div>

            <div className="space-y-2">
              <p className="text-xs text-center text-slate-400 font-medium font-body">
                {t.ctaText}
              </p>
              <button
                onClick={onOpenDemoModal}
                className="w-full py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm rounded-[24px] hover:shadow-[0_8px_32px_rgba(249,115,22,0.15)] hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
              >
                <span>{TRANSLATIONS[lang].nav.bookDemo}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

