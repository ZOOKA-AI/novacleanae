
import React from 'react';

const AboutUs: React.FC<{ t: any }> = ({ t }) => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2 relative group">
            {/* Main Tech Image */}
            <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Nova Clean Future Tech" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            
            {/* Experience Floating Card */}
            <div className="absolute -bottom-10 -right-6 lg:-right-10 z-20 bg-cyan-600 text-white p-10 rounded-[3rem] shadow-2xl border-8 border-white">
               <div className="text-center">
                 <p className="text-5xl font-black mb-1">10+</p>
                 <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Years of Smart Hygiene</p>
               </div>
            </div>

            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-50 rounded-full blur-[100px] -z-10 opacity-60"></div>
          </div>

          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 rounded-full text-xs font-black uppercase tracking-widest">{t.about.subtitle}</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">{t.about.title}</h2>
            </div>
            
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              {t.about.desc1}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-cyan-600 shadow-sm mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </div>
                  <h4 className="font-black text-slate-900 text-lg mb-2">{t.about.vision}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-semibold">{t.about.vision_desc}</p>
               </div>

               <div className="p-8 bg-cyan-50 rounded-[2.5rem] border border-cyan-100 group hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-cyan-600 shadow-sm mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h4 className="font-black text-cyan-900 text-lg mb-2">Gemini AI Tech</h4>
                  <p className="text-sm text-cyan-700 leading-relaxed font-semibold">{t.about.desc2}</p>
               </div>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
               <div className="flex -space-x-4">
                  {[1,2,3].map(i => (
                    <img key={i} className="w-14 h-14 rounded-full border-4 border-white shadow-sm" src={`https://i.pravatar.cc/150?u=nova${i}`} alt="Expert Team" />
                  ))}
                  <div className="w-14 h-14 rounded-full border-4 border-white bg-slate-900 text-white flex items-center justify-center text-xs font-black">50+</div>
               </div>
               <div>
                  <p className="font-black text-slate-900 text-lg">Elite Technicians</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Certified & Background Checked</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
