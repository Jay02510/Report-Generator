import React, { useState } from 'react';
import { X, CheckCircle2, PhoneCall, Building2, User, Mail, MapPin, Users } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose, lang }) => {
  const t = TRANSLATIONS[lang].modal;

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    directorName: '',
    academyName: '',
    phone: '',
    email: '',
    location: '서울 강남/서초',
    teachersCount: 3,
    studentsCount: 100
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/80 backdrop-blur-md">
      <div
        className="bg-[#0F1014] border border-white/10 rounded-2xl max-w-lg w-full p-8 relative shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] text-[#FDFAF5] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-[#FDFAF5] p-1.5 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="space-y-1 mb-6">
              <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-[10px] font-handwritten text-orange-300">
                <span>✨ 1:1 Hakwon Consultation</span>
              </div>
              <h3 className="text-xl font-bold text-[#FDFAF5] font-display tracking-tight">
                {t.title}
              </h3>
              <p className="text-xs text-slate-300 font-body">
                {t.subtitle}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-body">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Director Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block font-display">
                    {t.directorName} *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.directorName}
                      onChange={(e) => setFormData({ ...formData, directorName: e.target.value })}
                      placeholder="김원장"
                      className="w-full pl-9 pr-3 py-2 bg-[#050505] border border-white/10 rounded-xl text-xs text-[#FDFAF5] focus:border-[#F97316] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Academy Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block font-display">
                    {t.academyName} *
                  </label>
                  <div className="relative">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.academyName}
                      onChange={(e) => setFormData({ ...formData, academyName: e.target.value })}
                      placeholder="대치 이스트 어학원"
                      className="w-full pl-9 pr-3 py-2 bg-[#050505] border border-white/10 rounded-xl text-xs text-[#FDFAF5] focus:border-[#F97316] focus:outline-none"
                    />
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block font-display">
                    {t.phone} *
                  </label>
                  <div className="relative">
                    <PhoneCall className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="010-1234-5678"
                      className="w-full pl-9 pr-3 py-2 bg-[#050505] border border-white/10 rounded-xl text-xs text-[#FDFAF5] focus:border-[#F97316] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block font-display">
                    {t.email}
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="director@academy.co.kr"
                      className="w-full pl-9 pr-3 py-2 bg-[#050505] border border-white/10 rounded-xl text-xs text-[#FDFAF5] focus:border-[#F97316] focus:outline-none"
                    />
                  </div>
                </div>

              </div>

              {/* Location Select */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-300 block font-display">
                  {t.location}
                </label>
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-[#050505] border border-white/10 rounded-xl text-xs text-[#FDFAF5] focus:border-[#F97316] focus:outline-none"
                  >
                    <option value="서울 강남/서초/송파">서울 강남 / 서초 / 송파</option>
                    <option value="서울 목동/양천">서울 목동 / 양천</option>
                    <option value="경기 분당/판교">경기 분당 / 판교</option>
                    <option value="경기 일산/용인/수원">경기 일산 / 용인 / 수원</option>
                    <option value="부산 해운대/수영">부산 해운대 / 수영</option>
                    <option value="대구/광주/대전/기타">대구 / 광주 / 대전 / 기타 지역</option>
                  </select>
                </div>
              </div>

              {/* Teachers Count */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block font-display">
                    {t.teachersCount}
                  </label>
                  <select
                    value={formData.teachersCount}
                    onChange={(e) => setFormData({ ...formData, teachersCount: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-[#050505] border border-white/10 rounded-xl text-xs text-[#FDFAF5] focus:border-[#F97316] focus:outline-none"
                  >
                    <option value={1}>1 ~ 2 명</option>
                    <option value={3}>3 ~ 5 명</option>
                    <option value={6}>6 ~ 10 명</option>
                    <option value={11}>11 명 이상</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block font-display">
                    {t.studentsCount}
                  </label>
                  <select
                    value={formData.studentsCount}
                    onChange={(e) => setFormData({ ...formData, studentsCount: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-[#050505] border border-white/10 rounded-xl text-xs text-[#FDFAF5] focus:border-[#F97316] focus:outline-none"
                  >
                    <option value={50}>50명 이하</option>
                    <option value={100}>50 ~ 150명</option>
                    <option value={200}>150 ~ 300명</option>
                    <option value={300}>300명 이상</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-7 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm rounded-[24px] hover:shadow-[0_8px_32px_rgba(249,115,22,0.15)] hover:scale-[1.02] transition-all mt-4"
              >
                {t.submitBtn}
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="py-8 text-center space-y-4 font-body">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-[#F97316] mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#FDFAF5] font-display">
              {t.successTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              {t.successMessage}
            </p>
            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 bg-[#F97316] text-white text-xs font-bold rounded-[24px] hover:bg-[#EA580C] transition-colors hover:shadow-[0_8px_32px_rgba(249,115,22,0.15)]"
            >
              {t.closeBtn}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
