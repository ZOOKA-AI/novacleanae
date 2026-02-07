
import React, { useState } from 'react';
import VoiceAssistant from './VoiceAssistant';
import VisualLab from './VisualLab';
import VideoStudio from './VideoStudio';
import SearchMaps from './SearchMaps';
import SEOContentLab from './SEOContentLab';

const AISection = ({ t, lang }: any) => {
  const [activeTool, setActiveTool] = useState('voice');

  const tools = [
    { id: 'voice', label: t.ai_lab.voice_title, desc: t.ai_lab.voice_desc, icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' },
    { id: 'visual', label: t.ai_lab.visual_title, desc: t.ai_lab.visual_desc, icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 'video', label: t.ai_lab.video_title, desc: t.ai_lab.video_desc, icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
    { id: 'search', label: t.ai_lab.search_title, desc: t.ai_lab.search_desc, icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
    { id: 'seo', label: t.ai_lab.seo_title, desc: t.ai_lab.seo_desc, icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' }
  ];

  const renderTool = () => {
    switch (activeTool) {
      case 'voice': return <VoiceAssistant />;
      case 'visual': return <VisualLab t={t} />;
      case 'video': return <VideoStudio />;
      case 'search': return <SearchMaps />;
      case 'seo': return <SEOContentLab />;
      default: return <VoiceAssistant />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start">
      {/* Selection Panel */}
      <div className="lg:w-1/3 space-y-4 w-full">
        {tools.map(tool => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`w-full text-start p-6 rounded-[2rem] border transition-all duration-300 ${
              activeTool === tool.id 
                ? 'bg-white border-cyan-500 shadow-xl shadow-cyan-100/50 scale-105' 
                : 'bg-white/50 border-slate-100 hover:border-cyan-200'
            }`}
          >
            <div className="flex items-center gap-5 rtl:flex-row-reverse">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors flex-shrink-0 ${activeTool === tool.id ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-200' : 'bg-slate-100 text-slate-400'}`}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tool.icon} />
                </svg>
              </div>
              <div className="flex-1 rtl:text-right">
                <h4 className={`text-lg font-black ${activeTool === tool.id ? 'text-slate-900' : 'text-slate-500'}`}>{tool.label}</h4>
                <p className="text-sm text-slate-400 mt-0.5">{tool.desc}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
      {/* Tool Workspace */}
      <div className="lg:w-2/3 w-full">
        {renderTool()}
      </div>
    </div>
  );
};

export default AISection;
