import React from 'react';
import { Phone, Split, AlertCircle, Sliders, Layers, UserCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FeaturesProps {
  lang: Language;
}

export const Features: React.FC<FeaturesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].features;

  const icons = [
    <Phone className="w-5 h-5 text-blue-700" key="phone" />,
    <Split className="w-5 h-5 text-blue-700" key="split" />,
    <AlertCircle className="w-5 h-5 text-blue-700" key="alert" />,
    <Sliders className="w-5 h-5 text-blue-700" key="sliders" />,
    <Layers className="w-5 h-5 text-blue-700" key="layers" />,
    <UserCheck className="w-5 h-5 text-blue-700" key="users" />
  ];

  return (
    <section className="py-24 bg-slate-50/60 border-b border-slate-200/80" id="features">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/80 rounded-xl p-7 hover:border-slate-300 transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-5">
                  {icons[index % icons.length]}
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

