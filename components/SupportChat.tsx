
import React, { useState, useEffect, useRef } from 'react';
import { startChat } from '../services/geminiService';
import { ChatMessage } from '../types';

const SupportChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatInstanceRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // The specific UAE Smart Engine persona provided by the user
  const SMART_ENGINE_PROMPT = `أنت المحرك الذكي لمؤسسة Nova Clean للتنظيف والتعقيم في الإمارات. مهمتك هي: الرد على استفسارات العملاء بناءً على خدماتنا (تنظيف، تعقيم، مكافحة حشرات). دائماً اذكر رقم الهاتف 0545477803 والموقع novacleanae.blogspot.com في نهاية أي مخرج. لغتك هي العربية الإماراتية الاحترافية والتقنية.`;

  useEffect(() => {
    chatInstanceRef.current = startChat(SMART_ENGINE_PROMPT);
    
    // Welcome message in UAE dialect
    setMessages([{
      role: 'model',
      text: "يا مرحبابك في نوفا كلين! أنا محركك الذكي، كيف أقدر أخدمك اليوم في تنظيف أو تعقيم منزلك بأحدث تقنياتنا؟",
      timestamp: new Date()
    }]);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await chatInstanceRef.current.sendMessage({ message: input });
      const modelMsg: ChatMessage = {
        role: 'model',
        text: response.text || "المعذرة، واجهت مشكلة في المعالجة. حاول مرة ثانية.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] max-w-4xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-50 flex items-center space-x-4 rtl:space-x-reverse">
        <div className="w-12 h-12 bg-cyan-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-black text-slate-900 text-lg">محرك نوفا الذكي</h3>
          <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">متصل الآن • Nova Clean Engine</span>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-5 rounded-[1.5rem] shadow-sm ${
              msg.role === 'user' 
                ? 'bg-slate-900 text-white rounded-tr-none' 
                : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">{msg.text}</p>
              <span className={`text-[10px] mt-3 block ${msg.role === 'user' ? 'text-slate-400' : 'text-slate-400'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 p-4 rounded-2xl flex space-x-1">
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-75"></div>
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <div className="flex items-center space-x-3 rtl:space-x-reverse max-w-3xl mx-auto">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="اسأل المحرك الذكي عن خدماتنا..."
            className="flex-1 p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 outline-none transition"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="p-4 bg-cyan-600 text-white rounded-2xl hover:bg-cyan-700 disabled:opacity-50 shadow-xl shadow-cyan-100 transition"
          >
            <svg className="w-6 h-6 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportChat;
