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
    <Phone className="w-5 h-5 text-[#F97316]" key="phone" />,
    <Split className="w-5 h-5 text-[#8B5CF6]" key="split" />,
    <AlertCircle className="w-5 h-5 text-[#EC4899]" key="alert" />,
    <Sliders className="w-5 h-5 text-[#F97316]" key="sliders" />,
    <Layers className="w-5 h-5 text-[#8B5CF6]" key="layers" />,
    <UserCheck className="w-5 h-5 text-emerald-400" key="users" />
  ];

  const iconBgs = [
    'bg-orange-500/10 border-orange-500/20',
    'bg-purple-500/10 border-purple-500/20',
    'bg-pink-500/10 border-pink-500/20',
    'bg-orange-500/10 border-orange-500/20',
    'bg-purple-500/10 border-purple-500/20',
    'bg-emerald-500/10 border-emerald-500/20'
  ];

  return (
    <section className="py-32 bg-[#0c1a2e] border-b border-white/10" id="features">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.items.map((item, index) => (
            <div
              key={index}
              className="bg-[#0F1014] border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all flex flex-col justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] group"
            >
              <div>
                <div className={`w-10 h-10 rounded-xl ${iconBgs[index % iconBgs.length]} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {icons[index % icons.length]}
                </div>
                <h3 className="text-base font-bold text-[#FDFAF5] font-display tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
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

