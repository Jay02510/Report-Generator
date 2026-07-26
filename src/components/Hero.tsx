import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
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
    <section className="pt-24 pb-32 bg-[#0c1a2e] border-b border-white/10 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline & Headline */}
        <div className="flex flex-col items-center text-center space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs sm:text-sm font-semibold tracking-wide text-orange-400 font-handwritten handwriting-tilt">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-ping"></span>
            <span>✨ {t.tagline}</span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#FDFAF5] font-display tracking-tight leading-[1.15]">
            {t.headline}
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-body leading-relaxed">
            {t.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm sm:text-base rounded-[24px] hover:shadow-[0_8px_32px_rgba(249,115,22,0.15)] hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
            >
              <span>{t.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onScrollToDemo}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#0F1014] border border-white/10 hover:border-white/20 hover:bg-[#181a20] text-[#FDFAF5] font-semibold text-sm sm:text-base rounded-[24px] transition-all flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>{t.secondaryCta}</span>
            </button>
          </div>
        </div>

        {/* Direct Product Preview Container */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl border border-white/10 bg-[#0F1014] text-[#FDFAF5] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden p-6 sm:p-12 flex flex-col justify-between space-y-6">
            
            {/* Top header bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[#F97316]" />
                <span className="text-xs font-semibold text-slate-200 tracking-wide font-display">{t.iframeTitle}</span>
              </div>
              <span className="text-[11px] font-medium text-orange-300 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/30">
                {lang === 'ko' ? '실시간 미리보기' : 'See It In Action'}
              </span>
            </div>

            {/* Subtitle / Intro */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl text-center mx-auto font-body">
              {t.iframeSubtitle}
            </p>

            {/* Transformation Demonstration Card */}
            <div className="max-w-xl mx-auto w-full bg-[#050505] border border-white/10 rounded-2xl p-6 space-y-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] relative">
              
              {/* Handwritten Notebook Tag */}
              <div className="absolute -top-3 right-4 bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 px-3 py-0.5 rounded-full text-xs font-handwritten text-purple-300 handwriting-tilt-right">
                ✏️ 10 Sec Translation
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-orange-400 font-display">Teacher Input → Parent Script</span>
                <span className="bg-white/10 text-slate-300 px-2.5 py-0.5 rounded-full text-[11px]">Real-time</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-200 bg-[#0F1014] p-3.5 rounded-xl border border-white/10 font-mono">
                "Minjun scored 95/100 on Vocabulary Unit 4, but forgot his workbook twice."
              </div>
              <div className="p-4 bg-orange-950/20 border border-orange-500/30 rounded-xl text-xs text-orange-100 leading-relaxed space-y-1">
                <span className="font-bold text-orange-400 block font-display">학부모 상담 대본 변환 (Korean Consultation Script):</span>
                <p className="font-body">
                  "민준이는 4단원 어휘 평가에서 95점으로 우수한 성적을 기록하였습니다. 다만 이번 주 교재 지참 점검이 필요하여 가정 내 확인을 부탁드립니다."
                </p>
              </div>
            </div>

            {/* Footer preview info */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-400 gap-2">
              <span className="text-slate-400">Standardized Hakwon Operations Workflow</span>
              <span className="text-slate-400">Bilingual Parent Report Automation</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

