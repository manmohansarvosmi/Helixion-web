
import React from 'react';
import { INDUSTRIES } from '../constants';
import { ChevronRight, Activity, Terminal, Globe, ShieldCheck, Zap } from 'lucide-react';

const RefinedSectorReactor = () => (
  <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
    {/* Subtle Inner Glow */}
    <div className="absolute w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
    
    {/* Central Nucleus */}
    <div className="relative z-10 w-24 h-24 glass-panel rounded-full border border-blue-500/30 flex items-center justify-center shadow-2xl">
      <div className="absolute inset-0 bg-blue-500/5 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
      <Globe className="text-blue-400 w-10 h-10" />
    </div>

    {/* Orbital 1 - Precise & Thin */}
    <div className="absolute w-[80%] h-[35%] border border-blue-500/20 rounded-[100%] rotate-[15deg] animate-spin-slow" style={{ animationDuration: '10s' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"></div>
    </div>

    {/* Orbital 2 - Fast Packet */}
    <div className="absolute w-[95%] h-[40%] border border-white/5 rounded-[100%] rotate-[-15deg] animate-spin-slow" style={{ animationDuration: '7s', animationDirection: 'reverse' }}>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_#fff]"></div>
    </div>

    {/* Orbital 3 - Vertical Logic */}
    <div className="absolute w-[30%] h-[90%] border border-blue-500/10 rounded-[100%] rotate-[45deg] animate-spin-slow" style={{ animationDuration: '15s' }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full shadow-[0_0_10px_#2563eb]"></div>
    </div>

    {/* Telemetry HUD Labels */}
    <div className="absolute top-0 left-0 text-[8px] font-mono text-blue-500/40 uppercase tracking-[0.3em]">Sector_Sync: ACTIVE</div>
    <div className="absolute bottom-0 right-0 text-[8px] font-mono text-blue-500/40 uppercase tracking-[0.3em]">Lat: 18.52 N // Lon: 73.85 E</div>
  </div>
);

const Industries: React.FC = () => {
  return (
    <div className="relative pt-32 pb-24">
      {/* Clean Hero Section */}
      <section className="py-20 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Copy: High Hierarchy */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono font-bold tracking-widest uppercase">
                System Briefing // Sector Map
              </div>
              <h1 className="text-6xl md:text-8xl font-heading font-black text-white leading-[0.9] tracking-tighter">
                Domain <br/>
                <span className="shimmer-text">Verticals</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
                We engineer high-concurrency solutions across mission-critical sectors, translating complex industry workflows into automated digital assets.
              </p>
              <div className="flex items-center space-x-8 pt-4">
                 <div className="flex flex-col">
                   <span className="text-white font-bold text-xl">05</span>
                   <span className="text-[10px] text-slate-600 font-mono font-bold uppercase tracking-widest">Core_Sectors</span>
                 </div>
                 <div className="w-px h-10 bg-white/10"></div>
                 <div className="flex flex-col">
                   <span className="text-white font-bold text-xl">Pune</span>
                   <span className="text-[10px] text-slate-600 font-mono font-bold uppercase tracking-widest">Base_Node</span>
                 </div>
              </div>
            </div>

            {/* Right Side: Refined Animation Hub */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
               <RefinedSectorReactor />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <div key={industry.id} className="group relative bg-slate-900/40 p-10 rounded-[2.5rem] border border-white/5 glass-panel hover:border-blue-500/50 transition-all duration-500 h-full overflow-hidden">
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {industry.icon}
                </div>
                
                <h3 className="text-2xl font-heading font-extrabold text-white mb-4 group-hover:text-blue-400 transition-colors">{industry.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8 font-medium">
                  {industry.description}
                </p>
                
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                   <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-blue-500 uppercase tracking-widest">
                     <Activity size={12} className="animate-pulse" />
                     <span>System_Stable</span>
                   </div>
                   <ChevronRight size={16} className="text-slate-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified Success Feature */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="glass-panel rounded-[3rem] p-10 md:p-20 border-white/5 relative overflow-hidden flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2 space-y-6">
                 <h2 className="text-4xl md:text-5xl font-heading font-black text-white">Impact: <br/> Education</h2>
                 <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                    Centralizing examinations and fee structures for 50,000+ students across Maharashtra. High-concurrency logic for mission-critical academic data.
                 </p>
                 <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-xl hover:scale-105 transition-all">
                    View Case Study
                 </button>
              </div>
              <div className="w-full lg:w-1/2">
                 <div className="relative rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
                      alt="Case Study" 
                      className="w-full h-auto"
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
