
import React from 'react';
import BookingForm from './BookingForm';

import { TranslationWithLangProps } from '../types';

const Hero: React.FC<TranslationWithLangProps> = ({ t, lang }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="lg:w-1/2 space-y-8 text-center lg:text-start">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-cyan-50 rounded-full border border-cyan-100">
            <span className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">{t.landing.badge}</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
            {t.landing.title}
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {t.landing.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
             <a href="https://wa.me/971545477803" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-100 hover:scale-105 transition-transform flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t.landing.cta_whatsapp}
            </a>
            <a href="#ai-lab" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition shadow-xl shadow-slate-200 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              {t.hero.cta_ai}
            </a>
          </div>

          <div className="pt-8 border-t border-slate-100 flex items-center gap-8 justify-center lg:justify-start">
             <div>
               <p className="text-2xl font-black text-slate-900">30%</p>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Average Savings</p>
             </div>
             <div className="w-px h-8 bg-slate-100"></div>
             <div>
               <p className="text-2xl font-black text-slate-900">100%</p>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">AI Precision</p>
             </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full">
          <BookingForm t={t} />
        </div>
      </div>
      
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
    </section>
  );
};

export default Hero;
