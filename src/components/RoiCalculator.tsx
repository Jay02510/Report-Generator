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
    <section className="py-24 bg-slate-50/60 border-b border-slate-200/80" id="calculator">
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

        {/* Interactive Calculator Container */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch shadow-xs">
          
          {/* Controls Column (6 cols) */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-700">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {t.sliderSectionTitle}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {t.sliderSectionSubtitle}
                  </p>
                </div>
              </div>

              {/* Slider 1: Foreign Teachers */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-slate-900">
                  <label htmlFor="teachers-slider">{t.foreignTeachersLabel}</label>
                  <span className="text-sm font-extrabold text-blue-700 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
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
                  className="w-full h-2 bg-slate-100 rounded-lg cursor-pointer accent-blue-700"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  {t.teacherRangeLabels.map((lbl, idx) => (
                    <span key={idx}>{lbl}</span>
                  ))}
                </div>
              </div>

              {/* Slider 2: Student Count */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-slate-900">
                  <label htmlFor="students-slider">{t.studentCountLabel}</label>
                  <span className="text-sm font-extrabold text-slate-900 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full">
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
                  className="w-full h-2 bg-slate-100 rounded-lg cursor-pointer accent-blue-700"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  {t.studentRangeLabels.map((lbl, idx) => (
                    <span key={idx}>{lbl}</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed pt-4 border-t border-slate-100">
              * {t.disclaimerText}
            </p>
          </div>

          {/* Metrics Results Display (6 cols) - Clean Slate/Light Box */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200/80 rounded-xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  {t.analysisLabel}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  {t.analysisHeading}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Metric 1: Hours */}
                <div className="p-4 bg-white border border-slate-200/80 rounded-xl space-y-1 shadow-2xs">
                  <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-medium">
                    <Clock className="w-4 h-4 text-blue-700" />
                    <span>{t.weeklyTranslationHours}</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {weeklyHoursSaved} <span className="text-xs font-normal text-slate-500">{t.hoursUnit}</span>
                  </div>
                </div>

                {/* Metric 2: Monthly KRW */}
                <div className="p-4 bg-white border border-slate-200/80 rounded-xl space-y-1 shadow-2xs">
                  <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-medium">
                    <TrendingUp className="w-4 h-4 text-blue-700" />
                    <span>{t.monthlyCostSavings}</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-blue-700 tracking-tight">
                    ₩ {formatKrw(monthlySavingsKRW)}
                  </div>
                </div>

              </div>

              {/* Hero Metric: Annual Savings */}
              <div className="p-5 bg-blue-50/70 border border-blue-200/80 rounded-xl space-y-1.5">
                <div className="text-xs text-blue-800 font-bold uppercase tracking-wider">
                  {t.annualCostSavings}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  ₩ {formatKrw(annualSavingsKRW)}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {t.annualSummaryTemplate.replace('{hours}', String(weeklyHoursSaved * 52))}
                </p>
              </div>

            </div>

            <button
              onClick={onOpenDemoModal}
              className="w-full py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm rounded-xl shadow-xs transition-all flex items-center justify-center space-x-2"
            >
              <span>{t.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

