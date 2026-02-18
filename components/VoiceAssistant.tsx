
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenAI, Modality, LiveServerMessage } from '@google/genai';
import { decodeAudioBuffer, decodeBase64, encodeUint8 } from '../services/geminiService';

const VoiceAssistant: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [transcription, setTranscription] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef(0);
  const sessionRef = useRef<any>(null);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  const startConnection = async () => {
    try {
      setError(null);
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
          },
          systemInstruction: 'You are Nova, an intelligent assistant for Nova Clean services. You help customers book cleaning, disinfection, and pest control services. Be professional, friendly, and concise. You can also answer questions about cleaning methods and pricing.',
          inputAudioTranscription: {},
          outputAudioTranscription: {},
        },
        callbacks: {
          onopen: () => {
            setIsActive(true);
            const source = audioContextRef.current!.createMediaStreamSource(stream);
            const processor = audioContextRef.current!.createScriptProcessor(4096, 1, 1);
            
            processor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const int16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const base64 = encodeUint8(new Uint8Array(int16.buffer));
              sessionPromise.then(session => {
                session.sendRealtimeInput({ media: { data: base64, mimeType: 'audio/pcm;rate=16000' } });
              });
            };
            
            source.connect(processor);
            processor.connect(audioContextRef.current!.destination);
          },
          onmessage: async (msg: LiveServerMessage) => {
            if (msg.serverContent?.outputTranscription) {
              setTranscription(prev => [...prev, `Nova: ${msg.serverContent?.outputTranscription?.text}`]);
            }
            if (msg.serverContent?.inputTranscription) {
              setTranscription(prev => [...prev, `You: ${msg.serverContent?.inputTranscription?.text}`]);
            }

            const audioData = msg.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audioData && outputAudioContextRef.current) {
              const ctx = outputAudioContextRef.current;
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
              const buffer = await decodeAudioBuffer(decodeBase64(audioData), ctx, 24000);
              const source = ctx.createBufferSource();
              source.buffer = buffer;
              source.connect(ctx.destination);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += buffer.duration;
              sourcesRef.current.add(source);
              source.onended = () => sourcesRef.current.delete(source);
            }

            if (msg.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => s.stop());
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onerror: (e) => setError("Connection error occurred."),
          onclose: () => setIsActive(false),
        }
      });

      sessionRef.current = await sessionPromise;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to start microphone.";
      setError(errorMessage);
      setIsActive(false);
    }
  };

  const stopConnection = () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    if (audioContextRef.current) audioContextRef.current.close();
    if (outputAudioContextRef.current) outputAudioContextRef.current.close();
    setIsActive(false);
    setTranscription([]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.5)] scale-110' : 'bg-slate-100'}`}>
            <svg className={`w-10 h-10 ${isActive ? 'text-white' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{isActive ? 'Nova is listening...' : 'AI Voice Assistant'}</h2>
            <p className="text-slate-500 mt-2">Speak naturally to book services or ask questions about our cleaning protocols.</p>
          </div>

          <div className="flex justify-center space-x-4">
            {!isActive ? (
              <button 
                onClick={startConnection}
                className="px-8 py-3 bg-cyan-600 text-white rounded-xl font-bold hover:bg-cyan-700 transition shadow-lg shadow-cyan-100"
              >
                Start Conversation
              </button>
            ) : (
              <button 
                onClick={stopConnection}
                className="px-8 py-3 bg-rose-500 text-white rounded-xl font-bold hover:bg-rose-600 transition shadow-lg shadow-rose-100"
              >
                Stop Assistant
              </button>
            )}
          </div>
          
          {error && <p className="text-sm text-rose-500 font-medium">{error}</p>}
        </div>
      </div>

      <div className="bg-slate-900 rounded-3xl p-6 h-80 overflow-y-auto shadow-inner">
        <div className="space-y-4">
          {transcription.length === 0 ? (
            <p className="text-slate-500 text-center italic mt-20">Conversation log will appear here...</p>
          ) : (
            transcription.map((line, i) => (
              <div key={i} className={`p-3 rounded-xl max-w-[85%] ${line.startsWith('You:') ? 'bg-slate-800 text-white ml-auto' : 'bg-cyan-900/40 text-cyan-100 mr-auto border border-cyan-800/30'}`}>
                <p className="text-sm">{line}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;
