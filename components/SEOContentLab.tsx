
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const SEOContentLab: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState('');
  const [schema, setSchema] = useState('');

  const generateSEO = async () => {
    if (!topic) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `أنت المحرك الذكي لمؤسسة Nova Clean. قم بتوليد مقال سيو (SEO) احترافي حول موضوع: "${topic}". 
      يجب أن يتوافق مع معايير جوجل 2026. 
      اكتب أيضاً كود JSON-LD (Schema) المناسب للمقال.
      دائماً اذكر رقم الهاتف 0545477803 والموقع novacleanae.blogspot.com في نهاية المقال.
      اللغة: العربية الإماراتية الاحترافية والتقنية.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt
      });

      const text = response.text || "";
      // Simple splitting logic to find schema if present
      if (text.includes('```json')) {
        const parts = text.split('```json');
        setArticle(parts[0]);
        setSchema(parts[1].split('```')[0]);
      } else {
        setArticle(text);
        setSchema('');
      }
    } catch (err) {
      alert("Error generating SEO content.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900">مختبر السيو الذكي</h2>
          <p className="text-slate-500 text-sm mt-1">ولد محتوى يتصدر نتائج البحث باستخدام قوة Gemini.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="مثال: أفضل شركة تنظيف سجاد في دبي 2026"
            className="flex-1 p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button 
            onClick={generateSEO}
            disabled={loading || !topic}
            className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 disabled:opacity-50 transition"
          >
            {loading ? 'جاري التوليد...' : 'توليد المقال'}
          </button>
        </div>
      </div>

      {article && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
            <h3 className="font-black text-slate-900 border-b pb-4">المقال المولد</h3>
            <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap h-[400px] overflow-y-auto pr-4">
              {article}
            </div>
            <button 
              onClick={() => navigator.clipboard.writeText(article)}
              className="w-full py-3 bg-slate-100 text-slate-700 rounded-xl font-bold text-xs hover:bg-slate-200 transition"
            >
              نسخ المقال
            </button>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 shadow-sm space-y-4 text-white">
            <h3 className="font-black text-cyan-400 border-b border-white/10 pb-4">JSON-LD Schema</h3>
            <pre className="text-emerald-400 text-xs font-mono h-[400px] overflow-y-auto pr-4 leading-relaxed">
              {schema || "جاري استخراج كود الـ Schema..."}
            </pre>
            <button 
              onClick={() => navigator.clipboard.writeText(schema)}
              className="w-full py-3 bg-white/10 text-white rounded-xl font-bold text-xs hover:bg-white/20 transition"
            >
              نسخ كود الـ Schema
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOContentLab;
