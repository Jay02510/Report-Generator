import React, { useState } from 'react';
import { Sparkles, Copy, Check, AlertCircle, RefreshCw } from 'lucide-react';
import { Language, SampleReport } from '../types';
import { SAMPLE_REPORTS } from '../data/sampleReports';
import { TRANSLATIONS } from '../data/translations';

interface InteractiveDemoProps {
  lang: Language;
  onOpenDemoModal: () => void;
}

export const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ lang, onOpenDemoModal }) => {
  const t = TRANSLATIONS[lang].interactiveDemo;
  const [selectedReportId, setSelectedReportId] = useState<string>(SAMPLE_REPORTS[0].id);
  const [customInput, setCustomInput] = useState<string>(SAMPLE_REPORTS[0].rawInput);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Active report object
  const activeReport = SAMPLE_REPORTS.find(r => r.id === selectedReportId) || SAMPLE_REPORTS[0];

  const handleSelectPreset = (report: SampleReport) => {
    setSelectedReportId(report.id);
    setCustomInput(report.rawInput);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 400);
  };

  const handleCopy = () => {
    const textToCopy = `
[ChekkiAI 학부모 상담 대본]
학생: ${activeReport.studentNameKo} (${activeReport.studentNameEn}) - ${activeReport.gradeKo}
과목: ${activeReport.subject}
담당: ${activeReport.teacherName}

[인사말]
${activeReport.parentScriptKo.greeting}

[학습 성과]
${activeReport.parentScriptKo.academicProgress}

[수업 태도]
${activeReport.parentScriptKo.behaviorAndAttitude}

[가정 연계 지도]
${activeReport.parentScriptKo.actionItems}

[맺음말]
${activeReport.parentScriptKo.closing}
    `.trim();

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 bg-[#0c1a2e] border-b border-white/10" id="interactive-demo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FDFAF5] font-display tracking-tight">
            {t.heading}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
            {t.subheading}
          </p>
        </div>

        {/* Workspace Container */}
        <div className="bg-[#081220] border border-white/10 rounded-2xl p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
          
          {/* Left Controls Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Preset Selector */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block font-display">
                {t.selectPreset}
              </label>
              <div className="space-y-2">
                {SAMPLE_REPORTS.map((report) => (
                  <button
                    key={report.id}
                    onClick={() => handleSelectPreset(report)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                      selectedReportId === report.id
                        ? 'bg-[#0F1014] border-[#F97316] text-[#FDFAF5] shadow-lg'
                        : 'bg-[#0F1014]/60 border-white/10 text-slate-300 hover:bg-[#0F1014] hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-[#FDFAF5]">
                        {report.studentNameKo} ({report.studentNameEn})
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {report.gradeKo} • {report.subject}
                      </div>
                    </div>
                    {selectedReportId === report.id && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] flex-shrink-0 animate-pulse"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Foreign Teacher Raw Input Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between font-display">
                <span>{t.customInputLabel}</span>
                <span className="text-[11px] text-orange-400 font-handwritten handwriting-tilt">English Teacher Notes ✏️</span>
              </label>
              <textarea
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                rows={4}
                className="w-full p-3.5 bg-[#050505] border border-white/10 rounded-xl text-xs sm:text-sm text-[#FDFAF5] focus:outline-none focus:border-[#F97316] font-mono leading-relaxed shadow-inner"
                placeholder={t.inputPlaceholder}
              />
            </div>

            {/* Action Trigger */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm rounded-[24px] hover:shadow-[0_8px_32px_rgba(249,115,22,0.15)] hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>{t.generatingLabel}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>{t.generateBtn}</span>
                </>
              )}
            </button>

            {/* Quick Note for Hakwon Directors */}
            <div className="p-4 rounded-xl border border-white/10 bg-[#0F1014] text-xs text-slate-300 space-y-1">
              <span className="font-bold text-[#FDFAF5] block font-display">{t.directorNoteLabel}:</span>
              <p className="leading-relaxed font-body">
                {t.directorNoteBody}
              </p>
            </div>
          </div>

          {/* Right Output Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#0F1014] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] relative">
            
            {/* Handwritten Notebook Tag */}
            <div className="absolute -top-3 right-6 bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 px-3 py-0.5 rounded-full text-xs font-handwritten text-purple-300 handwriting-tilt-right">
              ✨ Bilingual Script Preview
            </div>

            {/* Header / Copy Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]"></span>
                  <h3 className="text-sm sm:text-base font-bold text-[#FDFAF5] font-display">
                    {t.bilingualOutputHeader}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mt-0.5 font-body">
                  {activeReport.studentNameKo} ({activeReport.studentNameEn}) | {activeReport.gradeKo}
                </p>
              </div>

              <button
                onClick={handleCopy}
                className="px-3.5 py-1.5 border border-white/10 hover:border-white/20 bg-[#050505] hover:bg-[#181a20] text-[#FDFAF5] rounded-full text-xs font-medium flex items-center space-x-1.5 self-start sm:self-auto transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-orange-400" />
                    <span className="text-orange-400 font-bold">{t.copiedText}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.copyScriptBtn}</span>
                  </>
                )}
              </button>
            </div>

            {/* Exception Flag Alert (if present) */}
            {activeReport.flaggedIssue && (
              <div className="p-3.5 bg-amber-950/20 border border-amber-500/30 rounded-xl text-xs flex items-center space-x-2 text-amber-200">
                <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <div>
                  <span className="font-bold mr-1">{t.flaggedAlert}:</span>
                  <span>{activeReport.flaggedIssue}</span>
                </div>
              </div>
            )}

            {/* Original vs Normalized Summary Comparison Box */}
            <div className="space-y-3">
              <div className="p-3.5 bg-[#050505] border border-white/10 rounded-xl text-xs text-slate-300 space-y-1">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-display">
                  {t.rawSource} ({activeReport.teacherName})
                </div>
                <div className="leading-relaxed font-mono">"{customInput}"</div>
              </div>

              <div className="p-3.5 bg-orange-950/20 border border-orange-500/30 rounded-xl text-xs text-orange-200 space-y-1">
                <div className="text-[10px] text-orange-400 font-bold uppercase tracking-wider font-display">
                  {t.translatedSummary}
                </div>
                <div className="leading-relaxed font-medium text-[#FDFAF5] font-body">{activeReport.translatedSummaryKo}</div>
              </div>
            </div>

            {/* Line-by-line Parent Consultation Script Sections */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-white/10 pb-2 font-display">
                {t.scriptSectionsHeading}
              </h4>

              <div className="space-y-3 font-body">
                
                {/* 1. Greeting */}
                <div className="p-3.5 rounded-xl border border-white/10 bg-[#050505] space-y-1">
                  <div className="text-[11px] font-bold text-slate-400">
                    1. {t.scriptSections.greeting}
                  </div>
                  <p className="text-xs sm:text-sm text-[#FDFAF5] leading-relaxed font-normal">
                    "{activeReport.parentScriptKo.greeting}"
                  </p>
                </div>

                {/* 2. Academic Progress */}
                <div className="p-3.5 rounded-xl border border-white/10 bg-[#050505] space-y-1">
                  <div className="text-[11px] font-bold text-slate-400">
                    2. {t.scriptSections.academicProgress}
                  </div>
                  <p className="text-xs sm:text-sm text-[#FDFAF5] leading-relaxed font-normal">
                    "{activeReport.parentScriptKo.academicProgress}"
                  </p>
                </div>

                {/* 3. Behavior & Engagement */}
                <div className="p-3.5 rounded-xl border border-white/10 bg-[#050505] space-y-1">
                  <div className="text-[11px] font-bold text-slate-400">
                    3. {t.scriptSections.behaviorAndAttitude}
                  </div>
                  <p className="text-xs sm:text-sm text-[#FDFAF5] leading-relaxed font-normal">
                    "{activeReport.parentScriptKo.behaviorAndAttitude}"
                  </p>
                </div>

                {/* 4. Home Action Items */}
                <div className="p-3.5 rounded-xl border border-orange-500/40 bg-orange-950/30 space-y-1">
                  <div className="text-[11px] font-bold text-orange-400">
                    4. {t.scriptSections.actionItems}
                  </div>
                  <p className="text-xs sm:text-sm text-orange-100 leading-relaxed font-medium">
                    "{activeReport.parentScriptKo.actionItems}"
                  </p>
                </div>

                {/* 5. Closing */}
                <div className="p-3.5 rounded-xl border border-white/10 bg-[#050505] space-y-1">
                  <div className="text-[11px] font-bold text-slate-400">
                    5. {t.scriptSections.closing}
                  </div>
                  <p className="text-xs sm:text-sm text-[#FDFAF5] leading-relaxed font-normal">
                    "{activeReport.parentScriptKo.closing}"
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

