
import React from 'react';
import { Cpu, Terminal, ShieldCheck, Zap, Database, Cloud, Monitor, Binary, Compass, RefreshCcw } from 'lucide-react';

const RefinedTechReactor = () => (
  <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
    {/* Subtle Inner Glow */}
    <div className="absolute w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl"></div>
    
    {/* Central Logic Processor */}
    <div className="relative z-10 w-24 h-24 glass-panel rounded-3xl border border-indigo-500/30 flex items-center justify-center shadow-2xl rotate-45 group hover:rotate-0 transition-transform duration-700">
      <Cpu className="text-indigo-400 w-10 h-10 -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
    </div>

    {/* Orbital 1 - Precise & Thin */}
    <div className="absolute w-[80%] h-[35%] border border-indigo-500/20 rounded-[100%] rotate-[-30deg] animate-spin-slow" style={{ animationDuration: '8s' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_#818cf8]"></div>
    </div>

    {/* Orbital 2 - Fast Packet */}
    <div className="absolute w-[95%] h-[40%] border border-white/5 rounded-[100%] rotate-[15deg] animate-spin-slow" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full shadow-[0_0_8px_#93c5fd]"></div>
    </div>

    {/* Orbital 3 - Vertical Flow */}
    <div className="absolute w-[30%] h-[90%] border border-indigo-500/10 rounded-[100%] rotate-[90deg] animate-spin-slow" style={{ animationDuration: '12s' }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-600 rounded-full shadow-[0_0_10px_#4f46e5]"></div>
    </div>

    {/* Telemetry Labels */}
    <div className="absolute top-0 right-0 text-[8px] font-mono text-indigo-500/40 uppercase tracking-[0.3em]">Kernel_Link: VERIFIED</div>
    <div className="absolute bottom-0 left-0 text-[8px] font-mono text-indigo-500/40 uppercase tracking-[0.3em]">Adaptive_Stack_v4.2</div>
  </div>
);

const Technologies: React.FC = () => {
  const capabilityLayers = [
    { 
      name: 'Core Logic Kernels', 
      icon: <Cpu className="w-5 h-5" />, 
      color: 'text-orange-400', 
      capabilities: ['High-Concurrency Engines', 'Asynchronous Processing', 'Micro-Kernel Architectures', 'Logic Redundancy']
    },
    { 
      name: 'Interaction Systems', 
      icon: <Monitor className="text-blue-400 w-5 h-5" />, 
      color: 'text-blue-400', 
      capabilities: ['High-Fidelity Interfaces', 'Reactive UI Logic', 'Cross-Platform Synthesis', 'Adaptive Experience']
    },
    { 
      name: 'Persistence Engines', 
      icon: <Database className="w-5 h-5" />, 
      color: 'text-green-400', 
      capabilities: ['Distributed Clusters', 'ACID-Compliant Fabrics', 'Real-time Indexing', 'Encrypted State']
    },
    { 
      name: 'Deployment Orbits', 
      icon: <Cloud className="w-5 h-5" />, 
      color: 'text-purple-400', 
      capabilities: ['Autonomous Orchestration', 'Multi-Region Clusters', 'Edge Nodes', 'Self-Healing Infra']
    }
  ];

  return (
    <div className="relative pt-32 pb-24 overflow-hidden">
      {/* Clean Tech Hero */}
      <section className="py-20 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-mono font-bold tracking-widest uppercase">
                Architecture Brief // Tech Stack
              </div>
              <h1 className="text-6xl md:text-8xl font-heading font-black text-white leading-[0.9] tracking-tighter">
                Adaptive <br/>
                <span className="shimmer-text">Logic</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
                We engineer tool-agnostic ecosystems. Our methodology revolves around hardening logic units to solve specific high-concurrency enterprise challenges.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                 <div className="px-4 py-2 glass-panel border border-white/5 rounded-xl flex items-center space-x-3">
                    <Zap className="text-yellow-400" size={16} />
                    <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">Ultra_Performance</span>
                 </div>
                 <div className="px-4 py-2 glass-panel border border-white/5 rounded-xl flex items-center space-x-3">
                    <ShieldCheck className="text-blue-400" size={16} />
                    <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">Hardened_Security</span>
                 </div>
              </div>
            </div>

            {/* Right Animation */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
               <RefinedTechReactor />
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Capability Layers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {capabilityLayers.map((layer) => (
            <div key={layer.name} className="relative group">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
                <div className={`w-14 h-14 glass-panel rounded-xl border border-white/10 ${layer.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  {layer.icon}
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
                  {layer.name}
                </h2>
                <div className="hidden md:block flex-grow h-px bg-white/5"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {layer.capabilities.map((cap) => (
                  <div key={cap} className="p-8 glass-panel rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all duration-500">
                     <div className="flex items-center space-x-3 mb-4 opacity-50">
                        <Binary size={12} className="text-indigo-500" />
                        <span className="text-[8px] font-mono text-slate-500">NODE_VERIFIED</span>
                     </div>
                     <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                       {cap}
                     </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center">
        <div className="max-w-3xl mx-auto px-4">
           <RefreshCcw size={40} className="text-indigo-500/20 mx-auto mb-8 animate-spin" style={{ animationDuration: '10s' }} />
           <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-8">Evolving with Intent</h2>
           <p className="text-slate-400 text-xl mb-10 leading-relaxed font-medium">
             Our stack is never static. We build with a "Plug-and-Scale" philosophy, allowing your platform to incorporate the future without rebuilding its past.
           </p>
           <button className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center mx-auto group">
              Audit Our Technical Standard
           </button>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
