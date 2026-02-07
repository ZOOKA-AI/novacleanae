
import React from 'react';

const ServiceSection = ({ t }: any) => {
  const services = [
    {
      title: t.services.cleaning,
      desc: t.services.cleaning_desc,
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      color: "bg-blue-500"
    },
    {
      title: t.services.disinfection,
      desc: t.services.disinfection_desc,
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      color: "bg-cyan-500"
    },
    {
      title: t.services.pest,
      desc: t.services.pest_desc,
      icon: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
      color: "bg-rose-500"
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-black text-slate-900">{t.services.title}</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">We combine traditional care with modern AI technology to deliver the cleanest results in the industry.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="group p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform`}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={s.icon} /></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
            <p className="text-slate-500 leading-relaxed">{s.desc}</p>
            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center text-cyan-600 font-bold group-hover:gap-2 transition-all cursor-pointer">
              <span>Read more</span>
              <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
