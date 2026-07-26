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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm">
      <div
        className="bg-white border border-zinc-200 rounded-lg max-w-lg w-full p-6 sm:p-8 relative shadow-none overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 p-1.5 rounded hover:bg-zinc-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="space-y-1 mb-6">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded border border-blue-200 bg-blue-50 text-[10px] font-bold uppercase text-blue-700">
                <span>1:1 Hakwon Consultation</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                {t.title}
              </h3>
              <p className="text-xs text-zinc-500">
                {t.subtitle}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Director Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-zinc-700 block">
                    {t.directorName} *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.directorName}
                      onChange={(e) => setFormData({ ...formData, directorName: e.target.value })}
                      placeholder="김원장"
                      className="w-full pl-9 pr-3 py-2 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-900 focus:bg-white focus:border-blue-700 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Academy Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-zinc-700 block">
                    {t.academyName} *
                  </label>
                  <div className="relative">
                    <Building2 className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.academyName}
                      onChange={(e) => setFormData({ ...formData, academyName: e.target.value })}
                      placeholder="대치 이스트 어학원"
                      className="w-full pl-9 pr-3 py-2 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-900 focus:bg-white focus:border-blue-700 focus:outline-none"
                    />
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-zinc-700 block">
                    {t.phone} *
                  </label>
                  <div className="relative">
                    <PhoneCall className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="010-1234-5678"
                      className="w-full pl-9 pr-3 py-2 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-900 focus:bg-white focus:border-blue-700 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-zinc-700 block">
                    {t.email}
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="director@academy.co.kr"
                      className="w-full pl-9 pr-3 py-2 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-900 focus:bg-white focus:border-blue-700 focus:outline-none"
                    />
                  </div>
                </div>

              </div>

              {/* Location Select */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-zinc-700 block">
                  {t.location}
                </label>
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-3" />
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-900 focus:bg-white focus:border-blue-700 focus:outline-none"
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
                  <label className="text-[11px] font-bold text-zinc-700 block">
                    {t.teachersCount}
                  </label>
                  <select
                    value={formData.teachersCount}
                    onChange={(e) => setFormData({ ...formData, teachersCount: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-900 focus:bg-white focus:border-blue-700 focus:outline-none"
                  >
                    <option value={1}>1 ~ 2 명</option>
                    <option value={3}>3 ~ 5 명</option>
                    <option value={6}>6 ~ 10 명</option>
                    <option value={11}>11 명 이상</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-zinc-700 block">
                    {t.studentsCount}
                  </label>
                  <select
                    value={formData.studentsCount}
                    onChange={(e) => setFormData({ ...formData, studentsCount: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-900 focus:bg-white focus:border-blue-700 focus:outline-none"
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
                className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium text-xs sm:text-sm rounded transition-all mt-2"
              >
                {t.submitBtn}
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900">
              신청이 완료되었습니다
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed">
              {t.successMessage}
            </p>
            <button
              onClick={handleResetAndClose}
              className="px-6 py-2 bg-zinc-900 text-white text-xs font-medium rounded hover:bg-zinc-800 transition-colors"
            >
              닫기 (Close)
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
