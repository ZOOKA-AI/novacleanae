
import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServiceSection from './components/ServiceSection';
import AISection from './components/AISection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'ar'>('ar');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang(l => l === 'en' ? 'ar' : 'en');

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-cyan-500 selection:text-white">
      <Header t={t} toggleLang={toggleLang} currentLang={lang} />
      <FloatingButtons />
      
      <main>
        {/* Landing/Hero with Booking Form */}
        <div id="home">
          <Hero t={t} lang={lang} />
        </div>

        {/* About Us Section */}
        <AboutUs t={t} />

        {/* Pain Points & Solution Summary */}
        <section className="py-24 bg-slate-900 text-white relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-600/10 blur-[100px]"></div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">{t.landing.pain_points_title}</h2>
              <ul className="space-y-6">
                {[t.landing.pain_1, t.landing.pain_2, t.landing.pain_3].map((p, i) => (
                  <li key={i} className="flex items-start gap-5 text-slate-300">
                    <div className="w-8 h-8 bg-rose-500/10 text-rose-500 rounded-xl flex items-center justify-center flex-shrink-0 border border-rose-500/20">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-lg leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8 p-10 lg:p-14 bg-white/5 rounded-[3.5rem] border border-white/10 backdrop-blur-xl shadow-2xl">
              <h2 className="text-4xl font-black text-cyan-400">{t.landing.solution_title}</h2>
              <ul className="space-y-6">
                {[t.landing.sol_1, t.landing.sol_2, t.landing.sol_3].map((s, i) => (
                  <li key={i} className="flex items-start gap-5 text-slate-100">
                    <div className="w-8 h-8 bg-cyan-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-lg leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div id="services">
          <ServiceSection t={t} />
        </div>

        {/* Why Choose Nova Clean */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-black text-slate-900">{t.why_choose.title}</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">{t.why_choose.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t.why_choose.item1_title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{t.why_choose.item1_desc}</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t.why_choose.item2_title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{t.why_choose.item2_desc}</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t.why_choose.item3_title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{t.why_choose.item3_desc}</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-lime-100 text-lime-600 rounded-2xl flex items-center justify-center group-hover:bg-lime-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t.why_choose.item4_title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{t.why_choose.item4_desc}</p>
              </div>
            </div>
          </div>
        </section>

        <div id="ai-lab" className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <span className="px-4 py-1.5 bg-cyan-50 text-cyan-600 rounded-full text-xs font-black uppercase tracking-widest">{t.nav.aiLab}</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">{t.ai_lab.title}</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">{t.ai_lab.subtitle}</p>
            </div>
            <AISection t={t} lang={lang} />
          </div>
        </div>
      </main>
      <div id="contact">
        <Footer t={t} />
      </div>
    </div>
  );
};

export default App;
