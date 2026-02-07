
import React from 'react';

interface DashboardProps {
  onNavigate: (tab: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const stats = [
    { label: 'Cleaning Sessions', value: '1,240', color: 'bg-blue-500' },
    { label: 'AI Detections', value: '452', color: 'bg-purple-500' },
    { label: 'Voice Queries', value: '3,102', color: 'bg-cyan-500' },
    { label: 'Customer Rating', value: '4.9/5', color: 'bg-emerald-500' },
  ];

  const features = [
    { id: 'voice', title: 'Talk to Nova', desc: 'Book services via voice in real-time.', icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' },
    { id: 'visual', title: 'Pest Analysis', desc: 'Identify pests using image intelligence.', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7' },
    { id: 'video', title: 'Content Creator', desc: 'Generate marketing videos for your home.', icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Welcome, Admin</h2>
          <p className="text-slate-500 mt-1">Manage Nova Clean's AI ecosystem from one place.</p>
        </div>
        <div className="flex -space-x-2">
          {[1,2,3,4].map(i => (
            <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://picsum.photos/seed/${i}/100/100`} alt="Avatar" />
          ))}
          <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">+12</div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <div className="flex items-end justify-between mt-2">
              <h4 className="text-2xl font-bold text-slate-900">{stat.value}</h4>
              <div className={`w-8 h-1 ${stat.color} rounded-full`}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="relative z-10 space-y-4 max-w-md">
              <h3 className="text-2xl font-bold">New: Real-time Disinfection Monitoring</h3>
              <p className="text-blue-50 text-sm leading-relaxed">
                Use our new Live API integration to monitor cleaning progress via voice feedback or generate AI walk-throughs of treated areas.
              </p>
              <button 
                onClick={() => onNavigate('voice')}
                className="bg-white text-blue-700 px-6 py-2.5 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
              >
                Try Voice Assistant
              </button>
            </div>
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map(f => (
              <button 
                key={f.id}
                onClick={() => onNavigate(f.id)}
                className="p-6 bg-white border border-slate-100 rounded-2xl text-left hover:border-cyan-300 transition group shadow-sm"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-cyan-50 group-hover:text-cyan-500 transition mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={f.icon} />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-900">{f.title}</h4>
                <p className="text-sm text-slate-500 mt-1">{f.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col">
          <h3 className="font-bold text-slate-900 mb-4">Quick Estimates</h3>
          <div className="flex-1 space-y-4">
            <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Apartment Cleaning</p>
                <p className="font-bold text-slate-900">AED 250 / Session</p>
              </div>
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-100">
                <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Disinfection (Deep)</p>
                <p className="font-bold text-slate-900">AED 180 / Hour</p>
              </div>
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-100">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Pest Control</p>
                <p className="font-bold text-slate-900">AED 320 / Unit</p>
              </div>
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-100">
                <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-100">
             <div className="flex items-center justify-between mb-4">
               <span className="text-sm font-medium text-slate-600">Smart Optimization</span>
               <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">ON</span>
             </div>
             <div className="w-full bg-slate-100 rounded-full h-1.5">
               <div className="bg-cyan-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
             </div>
             <p className="text-[10px] text-slate-400 mt-2">AI is currently balancing 43 active team assignments across Dubai.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
