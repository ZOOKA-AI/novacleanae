
import React, { useState } from 'react';
import { searchServices } from '../services/geminiService';
import { GroundingSource } from '../types';

const SearchMaps: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ text: string; sources: GroundingSource[] } | null>(null);
  const [useLocation, setUseLocation] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    try {
      let location = undefined;
      if (useLocation && navigator.geolocation) {
        const pos = await new Promise<GeolocationPosition>((res, rej) => navigator.geolocation.getCurrentPosition(res, rej));
        location = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      }
      
      const response = await searchServices(query, location);
      setResult(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Grounding Engine</h2>
        <p className="text-slate-500 mb-8">Access real-time Google Search and Maps data to find local services or cleaning regulations.</p>

        <form onSubmit={handleSearch} className="space-y-6">
          <div className="relative">
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for pest control news in Dubai or cleaning standards..."
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 outline-none"
            />
            <svg className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={useLocation} 
                onChange={(e) => setUseLocation(e.target.checked)}
                className="w-5 h-5 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
              />
              <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">Include my location (Google Maps Grounding)</span>
            </label>
            <button 
              type="submit"
              disabled={loading}
              className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 disabled:opacity-50 transition"
            >
              {loading ? 'Consulting Grounding Data...' : 'Search Engine'}
            </button>
          </div>
        </form>
      </div>

      {result && (
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="prose max-w-none text-slate-700 leading-relaxed">
            <div className="whitespace-pre-wrap">{result.text}</div>
          </div>

          {result.sources.length > 0 && (
            <div className="pt-6 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-widest">Grounding Sources:</h4>
              <div className="flex flex-wrap gap-3">
                {result.sources.map((source, i) => (
                  <a 
                    key={i} 
                    href={source.uri} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 hover:bg-cyan-50 hover:border-cyan-100 transition"
                  >
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-xs font-bold text-slate-600 max-w-[200px] truncate">{source.title || source.uri}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchMaps;
