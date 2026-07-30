
import React, { useState } from 'react';

import { TranslationProps } from '../types';

const BookingForm: React.FC<TranslationProps> = ({ t }) => {
  const [spaceType, setSpaceType] = useState('apartment');
  const [size, setSize] = useState('');
  const [estimating, setEstimating] = useState(false);
  const [estimate, setEstimate] = useState<number | null>(null);

  const handleEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    setEstimating(true);
    setEstimate(null);
    
    // Simulate AI thinking
    setTimeout(() => {
      const basePrice = spaceType === 'villa' ? 500 : 250;
      const sizeMultiplier = parseInt(size) > 1000 ? 1.5 : 1;
      setEstimate(basePrice * sizeMultiplier);
      setEstimating(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-slate-100 relative overflow-hidden">
      {/* Decorative AI Sparkles */}
      <div className="absolute top-0 right-0 p-4">
        <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-500 animate-pulse">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.657 15.657a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM6.464 14.95a1 1 0 10-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707z" /></svg>
        </div>
      </div>

      <div className="relative z-10 space-y-8">
        <div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">{t.landing.form_title}</h3>
          <p className="text-slate-500 text-sm">{t.landing.form_desc}</p>
        </div>

        <form onSubmit={handleEstimate} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.landing.field_space}</label>
            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button"
                onClick={() => setSpaceType('apartment')}
                className={`py-3 rounded-xl font-bold border-2 transition ${spaceType === 'apartment' ? 'border-cyan-500 bg-cyan-50 text-cyan-700' : 'border-slate-100 text-slate-400 hover:border-slate-200'}`}
              >
                Apartment
              </button>
              <button 
                type="button"
                onClick={() => setSpaceType('villa')}
                className={`py-3 rounded-xl font-bold border-2 transition ${spaceType === 'villa' ? 'border-cyan-500 bg-cyan-50 text-cyan-700' : 'border-slate-100 text-slate-400 hover:border-slate-200'}`}
              >
                Villa
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.landing.field_size}</label>
            <input 
              type="number"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              placeholder="e.g. 1500"
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 outline-none"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={estimating}
            className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-xl hover:bg-slate-800 transition transform hover:-translate-y-1"
          >
            {estimating ? 'AI Analyzing...' : t.landing.field_button}
          </button>
        </form>

        {estimate && (
          <div className="mt-8 p-6 bg-cyan-600 rounded-3xl text-white animate-in zoom-in duration-500">
            <p className="text-xs font-bold uppercase tracking-widest opacity-80">AI Estimated Price</p>
            <div className="flex items-end justify-between mt-2">
              <h4 className="text-4xl font-black">AED {estimate}</h4>
              <a 
                href={`https://wa.me/971545477803?text=Hi, AI estimated my cleaning at AED ${estimate}. I'd like to confirm my booking!`}
                target="_blank"
                className="bg-white text-cyan-600 px-6 py-2 rounded-xl font-bold text-sm"
              >
                Confirm Now
              </a>
            </div>
            <p className="text-[10px] mt-4 italic opacity-70">*This estimate is powered by Nova AI logic based on standard UAE sqm rates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
