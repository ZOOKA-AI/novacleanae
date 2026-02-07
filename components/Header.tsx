
import React, { useState } from 'react';

const Header = ({ t, toggleLang, currentLang }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-[80] bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center text-white shadow-lg">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">NOVA <span className="text-cyan-600">CLEAN</span></span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <a href="#home" className="text-sm font-semibold text-slate-600 hover:text-cyan-600 transition">{t.nav.home}</a>
            <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-cyan-600 transition">{t.nav.about}</a>
            <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-cyan-600 transition">{t.nav.services}</a>
            <a href="#ai-lab" className="text-sm font-semibold text-slate-600 hover:text-cyan-600 transition">{t.nav.aiLab}</a>
            <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-cyan-600 transition">{t.nav.contact}</a>
            <button 
              onClick={toggleLang}
              className="px-4 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-700 hover:bg-slate-200 transition"
            >
              {t.nav.language}
            </button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4 shadow-xl">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">{t.nav.home}</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">{t.nav.about}</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">{t.nav.services}</a>
          <a href="#ai-lab" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">{t.nav.aiLab}</a>
          <button onClick={() => { toggleLang(); setIsOpen(false); }} className="w-full py-3 bg-cyan-600 text-white rounded-xl font-bold">{t.nav.language}</button>
        </div>
      )}
    </header>
  );
};

export default Header;
