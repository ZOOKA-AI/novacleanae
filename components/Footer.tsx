
import React from 'react';

const Footer = ({ t }: any) => {
  const socialLinks = [
    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01' },
    { name: 'X', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 110 4 2 2 0 010-4z' }
  ];

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24">
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-cyan-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-cyan-900/20">
                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <span className="text-3xl font-black tracking-tighter">NOVA CLEAN</span>
            </div>
            <p className="text-slate-400 text-lg max-w-sm leading-relaxed">
              Leading the UAE's facility management industry through Artificial Intelligence and sustainable practices.
            </p>
            <div className="flex gap-4">
               {socialLinks.map((social) => (
                 <a 
                   key={social.name} 
                   href="#" 
                   aria-label={social.name}
                   className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-500 hover:scale-110 transition-all duration-300 group"
                 >
                   <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={social.icon} />
                   </svg>
                 </a>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-8">{t.contact.title}</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:0545477803" className="text-white hover:text-cyan-400 transition">054 547 7803</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:cleannova159@gmail.com" className="text-white hover:text-cyan-400 transition">cleannova159@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-xl mb-8">Navigation</h4>
             <ul className="space-y-4 text-slate-400">
               <li><a href="#home" className="hover:text-cyan-400 transition">{t.nav.home}</a></li>
               <li><a href="#about" className="hover:text-cyan-400 transition">{t.nav.about}</a></li>
               <li><a href="#services" className="hover:text-cyan-400 transition">{t.nav.services}</a></li>
               <li><a href="https://novacleanae.blogspot.com" target="_blank" className="hover:text-cyan-400 transition">Smart Blog</a></li>
             </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Nova Clean AE. All rights reserved.</p>
          <div className="flex gap-8">
             <a href="#" className="hover:text-white transition">Privacy Policy</a>
             <a href="#" className="hover:text-white transition">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
