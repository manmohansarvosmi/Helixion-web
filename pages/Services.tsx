
import React from 'react';
import { SERVICES } from '../constants';
// Added missing Search and Layers imports from lucide-react
import { Terminal, Cpu, Database, Cloud, Code2, Monitor, Settings, Zap, ArrowRight, ShieldCheck, Activity, Search, Layers } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden">
      {/* Header */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass-panel border border-blue-500/30 text-blue-400 text-xs font-mono tracking-widest uppercase">
              Engineering Capabilities // Unit_02
            </div>
            <h1 className="text-5xl md:text-8xl font-heading font-extrabold text-white mb-8 tracking-tight">
              Enterprise <span className="shimmer-text">Architectures</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              We provide the high-performance engineering required to build, secure, and scale your proprietary digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Service Units */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative p-10 glass-panel rounded-[2.5rem] border-white/5 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-blue-500/5 group-hover:text-blue-500/10 transition-colors">
                  <Code2 size={120} strokeWidth={1} />
                </div>
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 mb-8 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6 font-medium">{service.description}</p>
                <div className="flex items-center text-xs font-mono font-bold text-slate-500 group-hover:text-blue-400 transition-colors">
                   <span>MODULE_ACTIVE</span>
                   <Activity size={12} className="ml-2 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Pipeline (Process) */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-blue-500 font-mono tracking-widest uppercase font-bold text-sm">The Execution Pipeline</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-extrabold text-white">How We Deploy</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Discovery', desc: 'Requirements analysis and system feasibility reporting.', step: '01', icon: <Search className="w-6 h-6" /> },
              { title: 'Blueprint', desc: 'Multi-cloud architecture and security protocol design.', step: '02', icon: <Layers className="w-6 h-6" /> },
              { title: 'Engineering', desc: 'Agile sprints with CI/CD powered deployment cycles.', step: '03', icon: <Cpu className="w-6 h-6" /> },
              { title: 'Optimization', desc: 'Production monitoring and performance hardening.', step: '04', icon: <Activity className="w-6 h-6" /> }
            ].map((phase, idx) => (
              <div key={idx} className="relative group p-10 glass-panel rounded-3xl border-white/5 hover:border-blue-500/30 transition-all">
                <span className="text-8xl font-black text-white/5 absolute -top-4 left-4 select-none group-hover:text-blue-500/10 transition-colors">{phase.step}</span>
                <div className="relative z-10 space-y-6 pt-10">
                   <div className="text-blue-500 group-hover:scale-110 transition-transform">{phase.icon}</div>
                   <h4 className="text-2xl font-bold text-white tracking-tight">{phase.title}</h4>
                   <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-400 transition-colors">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Shield */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <div className="inline-flex items-center justify-center p-8 glass-panel rounded-[3rem] border-blue-500/30 mb-12 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
              <ShieldCheck size={80} className="text-blue-500" />
           </div>
           <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-8">Engineering Integrity First</h2>
           <p className="text-slate-400 text-xl leading-relaxed mb-12">
              Every line of code we write is subjected to automated security auditing and unit testing protocols. We build for the long-term integrity of your enterprise.
           </p>
           <button className="px-12 py-6 bg-blue-600 text-white font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center mx-auto">
              Start Engineering Audit
              <Zap size={20} className="ml-3" />
           </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
