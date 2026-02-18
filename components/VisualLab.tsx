
import React, { useState, useRef } from 'react';
import { analyzeImage, generateNovaImage } from '../services/geminiService';

import { TranslationProps } from '../types';

const VisualLab: React.FC<TranslationProps> = ({ t }) => {
  const [activeTab, setActiveTab] = useState<'generate' | 'analyze'>('generate');
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<"1K" | "2K" | "4K">("1K");
  const [loading, setLoading] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setImage(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const onGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setGeneratedUrl(null);
    try {
      // For high-quality image generation, we use gemini-3-pro-image-preview (handled in service)
      const url = await generateNovaImage(prompt, size);
      setGeneratedUrl(url);
    } catch (err) {
      alert("Error: Please ensure a paid API key is selected for 2K/4K generation.");
    } finally {
      setLoading(false);
    }
  };

  const onAnalyze = async () => {
    if (!image) return;
    setLoading(true);
    setAnalysisResult(null);
    try {
      const base64 = image.split(',')[1];
      const text = await analyzeImage(base64, "Act as a professional hygiene inspector. Identify any visible dirt, stains, or potential pest signs in this image. Suggest the specific Nova Clean service needed.");
      setAnalysisResult(text);
    } catch (err) {
      setAnalysisResult("Failed to perform analysis.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden flex flex-col min-h-[500px]">
      <div className="flex border-b border-slate-50">
        <button 
          onClick={() => setActiveTab('generate')}
          className={`flex-1 py-4 font-bold text-sm transition-all ${activeTab === 'generate' ? 'bg-cyan-50 text-cyan-700 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-slate-600'}`}
        >
          {t.visual_lab.generate_tab}
        </button>
        <button 
          onClick={() => setActiveTab('analyze')}
          className={`flex-1 py-4 font-bold text-sm transition-all ${activeTab === 'analyze' ? 'bg-cyan-50 text-cyan-700 border-b-2 border-cyan-500' : 'text-slate-400 hover:text-slate-600'}`}
        >
          {t.visual_lab.analyze_tab}
        </button>
      </div>

      <div className="p-8 flex-1">
        {activeTab === 'generate' ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.visual_lab.prompt_placeholder}</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={t.visual_lab.prompt_placeholder}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 outline-none transition min-h-[100px]"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-bold text-slate-600">{t.visual_lab.resolution}:</span>
                {(['1K', '2K', '4K'] as const).map(s => (
                  <button 
                    key={s} 
                    onClick={() => setSize(s)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition ${size === s ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <button 
                onClick={onGenerate}
                disabled={loading || !prompt}
                className="px-8 py-3 bg-cyan-600 text-white rounded-xl font-bold hover:bg-cyan-700 disabled:opacity-50 transition shadow-lg shadow-cyan-100"
              >
                {loading ? '...' : t.visual_lab.cta_generate}
              </button>
            </div>

            {generatedUrl && (
              <div className="mt-8 rounded-3xl overflow-hidden border border-slate-100 shadow-inner group relative">
                <img src={generatedUrl} alt="Generated" className="w-full h-auto" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <a href={generatedUrl} download="nova-visual.png" className="bg-white text-slate-900 px-6 py-2 rounded-xl font-bold shadow-xl">Download Image</a>
                </div>
              </div>
            )}
            
            {!generatedUrl && !loading && (
              <div className="aspect-video bg-slate-50 rounded-3xl border-2 border-dashed border-slate-100 flex items-center justify-center">
                <p className="text-slate-300 text-sm italic">Enter a prompt to visualize your clean space</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="aspect-video bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center cursor-pointer overflow-hidden group hover:border-cyan-300 transition"
            >
              {image ? (
                <img src={image} alt="Upload" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-300 mx-auto mb-4 group-hover:text-cyan-500 transition">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <p className="text-sm font-bold text-slate-400">Tap to upload room photo</p>
                </div>
              )}
              <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept="image/*" />
            </div>

            <button 
              onClick={onAnalyze}
              disabled={loading || !image}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 disabled:opacity-50 transition"
            >
              {loading ? 'Analyzing...' : t.visual_lab.cta_analyze}
            </button>

            {analysisResult && (
              <div className="p-6 bg-cyan-50 rounded-3xl border border-cyan-100 animate-in fade-in slide-in-from-bottom-2">
                <h4 className="font-bold text-cyan-900 text-sm mb-2">Inspection Report</h4>
                <p className="text-cyan-800 text-sm leading-relaxed">{analysisResult}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VisualLab;
