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
    <section className="py-24 bg-white border-b border-slate-200/80" id="interactive-demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - No Floating Pill Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.heading}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* Workspace Container */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xs">
          
          {/* Left Controls Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Preset Selector */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                {t.selectPreset}
              </label>
              <div className="space-y-2">
                {SAMPLE_REPORTS.map((report) => (
                  <button
                    key={report.id}
                    onClick={() => handleSelectPreset(report)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                      selectedReportId === report.id
                        ? 'bg-white border-blue-600 text-slate-900 shadow-xs'
                        : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-slate-900">
                        {report.studentNameKo} ({report.studentNameEn})
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {report.gradeKo} • {report.subject}
                      </div>
                    </div>
                    {selectedReportId === report.id && (
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Foreign Teacher Raw Input Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                <span>{t.customInputLabel}</span>
                <span className="text-[11px] text-slate-500 font-normal">English Log</span>
              </label>
              <textarea
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                rows={4}
                className="w-full p-3.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600 font-sans leading-relaxed shadow-2xs"
                placeholder={t.inputPlaceholder}
              />
            </div>

            {/* Action Trigger */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-medium text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center space-x-2"
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
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white text-xs text-slate-600 space-y-1 shadow-2xs">
              <span className="font-bold text-slate-900 block">{t.directorNoteLabel}:</span>
              <p className="leading-relaxed">
                {t.directorNoteBody}
              </p>
            </div>
          </div>

          {/* Right Output Column (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-7 space-y-6 shadow-xs">
            
            {/* Header / Copy Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {t.bilingualOutputHeader}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {activeReport.studentNameKo} ({activeReport.studentNameEn}) | {activeReport.gradeKo}
                </p>
              </div>

              <button
                onClick={handleCopy}
                className="px-3.5 py-1.5 border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-medium flex items-center space-x-1.5 self-start sm:self-auto transition-all shadow-2xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-blue-700" />
                    <span className="text-blue-700 font-bold">{t.copiedText}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>{t.copyScriptBtn}</span>
                  </>
                )}
              </button>
            </div>

            {/* Exception Flag Alert (if present) */}
            {activeReport.flaggedIssue && (
              <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs flex items-center space-x-2 text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <div>
                  <span className="font-bold mr-1">{t.flaggedAlert}:</span>
                  <span>{activeReport.flaggedIssue}</span>
                </div>
              </div>
            )}

            {/* Original vs Normalized Summary Comparison Box */}
            <div className="space-y-3">
              <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 space-y-1">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  {t.rawSource} ({activeReport.teacherName})
                </div>
                <div className="leading-relaxed">"{customInput}"</div>
              </div>

              <div className="p-3.5 bg-blue-50/50 border border-blue-100/80 rounded-xl text-xs text-slate-800 space-y-1">
                <div className="text-[10px] text-blue-700 font-bold uppercase tracking-wider">
                  {t.translatedSummary}
                </div>
                <div className="leading-relaxed font-medium text-slate-900">{activeReport.translatedSummaryKo}</div>
              </div>
            </div>

            {/* Line-by-line Parent Consultation Script Sections */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-2">
                {t.scriptSectionsHeading}
              </h4>

              <div className="space-y-3">
                
                {/* 1. Greeting */}
                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white space-y-1">
                  <div className="text-[11px] font-bold text-slate-500">
                    1. {t.scriptSections.greeting}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                    "{activeReport.parentScriptKo.greeting}"
                  </p>
                </div>

                {/* 2. Academic Progress */}
                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white space-y-1">
                  <div className="text-[11px] font-bold text-slate-500">
                    2. {t.scriptSections.academicProgress}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                    "{activeReport.parentScriptKo.academicProgress}"
                  </p>
                </div>

                {/* 3. Behavior & Engagement */}
                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white space-y-1">
                  <div className="text-[11px] font-bold text-slate-500">
                    3. {t.scriptSections.behaviorAndAttitude}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                    "{activeReport.parentScriptKo.behaviorAndAttitude}"
                  </p>
                </div>

                {/* 4. Home Action Items */}
                <div className="p-3.5 rounded-xl border border-blue-200/80 bg-blue-50/40 space-y-1">
                  <div className="text-[11px] font-bold text-blue-700">
                    4. {t.scriptSections.actionItems}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-medium">
                    "{activeReport.parentScriptKo.actionItems}"
                  </p>
                </div>

                {/* 5. Closing */}
                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white space-y-1">
                  <div className="text-[11px] font-bold text-slate-500">
                    5. {t.scriptSections.closing}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
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

