
import React, { useState } from 'react';
import { generateVeoVideo } from '../services/geminiService';

const VideoStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setVideoUrl(null);
    setProgress(0);
    
    // Simulate progress updates for long-running task
    const interval = setInterval(() => {
      setProgress(p => (p >= 90 ? 90 : p + 5));
    }, 4000);

    try {
      const url = await generateVeoVideo(prompt, aspectRatio);
      if (url) {
        setVideoUrl(url);
        setProgress(100);
      } else {
        alert("Failed to generate video.");
      }
    } catch (err) {
      alert("Error in video generation. Please check API key selection.");
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Veo 3 Video Studio</h2>
            <p className="text-slate-500 text-sm mt-1">Animate your cleaning concepts with high-fidelity video.</p>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button 
              onClick={() => setAspectRatio('16:9')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${aspectRatio === '16:9' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
            >
              Landscape
            </button>
            <button 
              onClick={() => setAspectRatio('9:16')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${aspectRatio === '9:16' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
            >
              Portrait
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-bold text-slate-700">Promotion / Process Prompt</label>
          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="E.g., A cinematic close-up of a high-tech steam cleaner efficiently removing deep stains from a beige carpet, steam rising elegantly in soft sunlight..."
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none min-h-[120px]"
          />
          
          <button 
            disabled={!prompt || loading}
            onClick={handleGenerate}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition disabled:opacity-50 relative overflow-hidden group shadow-xl shadow-slate-200"
          >
            <span className="relative z-10">{loading ? 'Synthesizing Video...' : 'Generate AI Video'}</span>
            {loading && (
              <div 
                className="absolute inset-0 bg-blue-600/30 transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            )}
          </button>
        </div>

        {loading && (
          <div className="space-y-4 animate-pulse">
            <div className="h-4 w-1/2 bg-slate-100 rounded-full mx-auto"></div>
            <div className={`mx-auto bg-slate-100 rounded-3xl ${aspectRatio === '16:9' ? 'aspect-video w-full' : 'aspect-[9/16] w-64'}`}></div>
            <div className="text-center">
              <p className="text-sm font-medium text-slate-400">Processing complex temporal patterns... ({progress}%)</p>
            </div>
          </div>
        )}

        {videoUrl && (
          <div className="space-y-4 animate-in zoom-in fade-in duration-700">
             <div className={`mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl ${aspectRatio === '16:9' ? 'w-full' : 'w-72'}`}>
               <video src={videoUrl} controls autoPlay loop className="w-full h-full" />
             </div>
             <div className="flex justify-center">
               <a 
                 href={videoUrl} 
                 download="nova-promo.mp4" 
                 className="flex items-center space-x-2 bg-slate-100 text-slate-700 px-6 py-2 rounded-xl font-bold hover:bg-slate-200 transition"
                >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                 </svg>
                 <span>Save Video</span>
               </a>
             </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
          <h4 className="font-bold text-blue-900 mb-1">Temporal Flow</h4>
          <p className="text-xs text-blue-700">Veo 3 analyzes physics and motion to ensure cleaning actions look realistic.</p>
        </div>
        <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100">
          <h4 className="font-bold text-cyan-900 mb-1">Material Consistency</h4>
          <p className="text-xs text-cyan-700">The model maintains textures for fabrics, marble, and glass throughout the clip.</p>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-1">Ultra HD Support</h4>
          <p className="text-xs text-slate-700">Native 720p rendering with high-bitrate export for social media platforms.</p>
        </div>
      </div>
    </div>
  );
};

export default VideoStudio;
