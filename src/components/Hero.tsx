import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  lang: Language;
  onOpenDemoModal: () => void;
  onScrollToDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenDemoModal, onScrollToDemo }) => {
  const t = TRANSLATIONS[lang].hero;

  return (
    <section className="pt-16 pb-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline & Headline */}
        <div className="flex flex-col items-center text-center space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/80 text-xs font-semibold tracking-wide text-slate-700">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>{t.tagline}</span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            {t.headline}
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {t.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-medium text-sm rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center space-x-2"
            >
              <span>{t.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onScrollToDemo}
              className="w-full sm:w-auto px-7 py-3.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-medium text-sm rounded-lg transition-all flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-slate-500" />
              <span>{t.secondaryCta}</span>
            </button>
          </div>

          {/* Trust Social Proof Badge */}
          <div className="pt-4 flex items-center justify-center space-x-2 text-xs sm:text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200/80 px-4 py-2 rounded-full shadow-xs">
            <ShieldCheck className="w-4 h-4 text-blue-700 flex-shrink-0" />
            <span>{t.badge}</span>
          </div>
        </div>

        {/* Direct Product Preview Container */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl border border-slate-200/80 bg-slate-950 text-white shadow-2xl overflow-hidden p-6 sm:p-10 flex flex-col justify-between space-y-6">
            
            {/* Top header bar */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-semibold text-slate-300 tracking-wide">{t.iframeTitle}</span>
              </div>
              <span className="text-[11px] font-medium text-blue-300 bg-blue-900/40 px-3 py-1 rounded-full border border-blue-700/50">
                {lang === 'ko' ? '실시간 미리보기' : 'See It In Action'}
              </span>
            </div>

            {/* Subtitle / Intro */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl text-center mx-auto">
              {t.iframeSubtitle}
            </p>

            {/* Transformation Demonstration Card */}
            <div className="max-w-xl mx-auto w-full bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-blue-400">Teacher Input → Parent Script</span>
                <span className="bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full text-[11px]">Real-time</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-200 bg-slate-950 p-3.5 rounded-lg border border-slate-800/60 font-mono">
                "Minjun scored 95/100 on Vocabulary Unit 4, but forgot his workbook twice."
              </div>
              <div className="p-4 bg-blue-950/40 border border-blue-900/50 rounded-lg text-xs text-blue-200 leading-relaxed space-y-1">
                <span className="font-bold text-blue-400 block">학부모 상담 대본 변환 (Korean Consultation Script):</span>
                <p>
                  "민준이는 4단원 어휘 평가에서 95점으로 우수한 성적을 기록하였습니다. 다만 이번 주 교재 지참 점검이 필요하여 가정 내 확인을 부탁드립니다."
                </p>
              </div>
            </div>

            {/* Footer preview info */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-800/80 pt-4 text-xs text-slate-400 gap-2">
              <span className="text-slate-400">Standardized Hakwon Operations Workflow</span>
              <span className="text-slate-400">Bilingual Parent Report Automation</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

