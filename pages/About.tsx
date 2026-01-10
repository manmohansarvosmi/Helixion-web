
import React from 'react';
import { 
  Target, Eye, Heart, Award, CheckCircle2, Cpu, Zap, Shield, Users, 
  Compass, Binary, Layers, Network, Workflow, Activity, ChevronRight 
} from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const PurposeEngine = () => {
  return (
    <div className="relative w-full py-20">
      {/* Central Connector Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 800 600">
        <path d="M400 300 L150 150 M400 300 L650 150 M400 300 L150 450 M400 300 L650 450" stroke="url(#purposeGradient)" strokeWidth="2" strokeDasharray="10 5" className="animate-flow-line" />
        <defs>
          <linearGradient id="purposeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 flex flex-col items-center">
        {/* The Vision (The Stable Core) */}
        <div className="group relative mb-20">
          <div className="absolute inset-0 bg-blue-600/30 rounded-full blur-[60px] group-hover:blur-[80px] transition-all duration-1000"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 glass-panel rounded-full border-2 border-blue-500/50 flex flex-col items-center justify-center p-8 text-center shadow-[0_0_50px_rgba(37,99,235,0.3)] animate-float">
            <Eye size={40} className="text-blue-400 mb-4" />
            <h3 className="text-xl md:text-2xl font-heading font-extrabold text-white tracking-tight uppercase">Vision</h3>
            <p className="text-[10px] md:text-xs text-slate-400 font-medium leading-relaxed mt-2 uppercase tracking-widest">The North Star of Logic</p>
          </div>
        </div>

        {/* The Mission Nodes (Kinetic Energy) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
          <div className="group p-10 glass-panel rounded-[3rem] border-white/5 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Target size={28} />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-heading font-extrabold text-white">Our Mission</h4>
                <p className="text-slate-400 leading-relaxed font-medium">
                  To empower global enterprises with neural digital products that eliminate latency, optimize resources, and scale infinitely through precision engineering.
                </p>
                <div className="flex items-center space-x-2 text-[10px] font-mono text-blue-500 font-bold uppercase tracking-widest">
                  <Activity size={12} className="animate-pulse" />
                  <span>Execution_Status: NOMINAL</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group p-10 glass-panel rounded-[3rem] border-white/5 hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-indigo-600"></div>
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Shield size={28} />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-heading font-extrabold text-white">Security Standard</h4>
                <p className="text-slate-400 leading-relaxed font-medium">
                  We integrate Zero-Trust principles into every architectural layer, ensuring that business growth never comes at the cost of technical integrity.
                </p>
                <div className="flex items-center space-x-2 text-[10px] font-mono text-indigo-500 font-bold uppercase tracking-widest">
                  <Binary size={12} />
                  <span>Integrity_Index: 100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- NEW COMPONENT: VALUE FLOW ENGINE ---
const ValueFlowEngine = () => {
  const values = [
    { 
      id: '01',
      icon: <Heart className="text-red-400" />, 
      label: 'Human-Centric', 
      desc: 'Technology as a servant to human experience, optimizing the user-system interface.',
      status: 'CORE_INPUT'
    },
    { 
      id: '02',
      icon: <Shield className="text-blue-400" />, 
      label: 'Absolute Integrity', 
      desc: 'Non-negotiable code quality standards and zero-trust security architecture.',
      status: 'STABILITY_LAYER'
    },
    { 
      id: '03',
      icon: <Zap className="text-yellow-400" />, 
      label: 'Extreme Performance', 
      desc: 'Obsession with milliseconds. Engineering systems for ultra-low latency response.',
      status: 'EXECUTION_ENGINE'
    },
    { 
      id: '04',
      icon: <Award className="text-purple-400" />, 
      label: 'Future-Proofing', 
      desc: 'Architecting modular frameworks ready for the shifts of the next decade.',
      status: 'SYSTEM_HORIZON'
    }
  ];

  return (
    <div className="relative w-full py-20 px-4 overflow-hidden">
      {/* Dynamic Connector Flow SVG */}
      <svg className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 pointer-events-none opacity-20 hidden lg:block" viewBox="0 0 1200 120">
        <path d="M0 60 H1200" stroke="url(#flowGradient)" strokeWidth="1" strokeDasharray="10 10" className="animate-flow-line" />
        <circle r="4" fill="#3b82f6" className="node-pulse">
          <animateMotion dur="8s" repeatCount="indefinite" path="M0 60 H1200" />
        </circle>
        <circle r="3" fill="#6366f1" className="node-pulse">
          <animateMotion dur="6s" repeatCount="indefinite" path="M1200 60 H0" />
        </circle>
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {values.map((v, i) => (
          <div key={i} className="group relative flex flex-col">
            {/* The Node Header Hub */}
            <div className="relative mb-6 flex flex-col items-center">
               <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10"></div>
               <div className="w-20 h-20 glass-panel rounded-2xl border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500 relative">
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-blue-600 rounded text-[8px] font-mono text-white font-bold tracking-tighter">NODE_{v.id}</div>
                  {v.icon}
               </div>
            </div>

            {/* The Processor Card */}
            <div className="p-8 glass-panel rounded-[2.5rem] border-white/5 hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col items-center text-center bg-slate-900/40 backdrop-blur-3xl group-hover:-translate-y-2">
              <div className="text-[10px] font-mono font-bold text-blue-500/50 uppercase tracking-[0.4em] mb-4 group-hover:text-blue-400 transition-colors">
                 {v.status}
              </div>
              <h4 className="text-xl font-heading font-black text-white mb-4 tracking-tight uppercase group-hover:shimmer-text">{v.label}</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {v.desc}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 w-full flex justify-between items-center opacity-30 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center space-x-1">
                   {[...Array(3)].map((_, j) => <div key={j} className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: `${j * 0.2}s` }}></div>)}
                </div>
                <ChevronRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Path glow for mobile/small screens */}
            <div className="lg:hidden w-px h-12 bg-gradient-to-b from-blue-500/20 to-transparent mx-auto mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden">
      {/* --- HERO: THE GENESIS OF LOGIC --- */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-panel border border-blue-500/30 text-blue-400 text-xs font-mono tracking-widest uppercase">
                System Briefing // Origin Story
              </div>
              <h1 className="text-5xl md:text-8xl font-heading font-extrabold text-white leading-[1.1] tracking-tight">
                Engineering <br/>
                <span className="shimmer-text">With Intent</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-xl">
                Founded in Pune's high-octane technology corridor, Helixion was born from a single question: <strong>"How do we make software feel invisible?"</strong> 
              </p>
              <div className="space-y-6">
                <p className="text-slate-500 leading-relaxed">
                  We realized that most enterprise systems fail because they are built as disconnected blocks. We started architecting <strong>Neural Ecosystems</strong>—systems that learn, adapt, and scale like living organisms.
                </p>
                <div className="flex items-center space-x-8 pt-4">
                   <div className="flex flex-col">
                      <span className="text-3xl font-extrabold text-white">2021</span>
                      <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-widest">Inception</span>
                   </div>
                   <div className="w-px h-12 bg-white/10"></div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-extrabold text-white">50+</span>
                      <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-widest">Engines Deployed</span>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 glass-panel p-3 rounded-[4rem] border-white/5 rotate-3 hover:rotate-0 transition-all duration-700 overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                  alt="System Connectivity" 
                  className="rounded-[3.8rem] opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
                
                {/* HUD Overlay */}
                <div className="absolute bottom-12 left-12 right-12 p-6 glass-panel rounded-3xl border-white/10 backdrop-blur-2xl">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                         <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                         <span className="text-[10px] font-mono text-white font-bold uppercase tracking-widest">HQ_PUNE_NODE_ACTIVE</span>
                      </div>
                      <Layers size={14} className="text-blue-400" />
                   </div>
                </div>
              </div>
              {/* Decorative Rings */}
              <div className="absolute -inset-10 border border-blue-500/10 rounded-full -z-10 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute -inset-20 border border-white/5 rounded-full -z-10 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE STRATEGIC SYMMETRY (MISSION/VISION) --- */}
      <section className="py-32 relative bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-500 font-mono tracking-widest uppercase font-bold text-sm">Strategic Symmetry</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tight">The Core & The Kinetic</h3>
          </div>

          <PurposeEngine />
        </div>
      </section>

      {/* --- VALUES: REDESIGNED WITH FLOW ENGINE --- */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-blue-500 font-mono tracking-widest uppercase font-bold text-sm">Our Operational DNA</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">Constants in a <span className="shimmer-text">Variable World</span></h3>
          </div>

          <ValueFlowEngine />
        </div>
      </section>

      {/* --- THE ARCHITECTURAL MINDSET --- */}
      <section className="py-32 relative">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-12">
          <div className="relative inline-block">
             <div className="absolute inset-0 bg-blue-600/20 blur-[60px] animate-pulse"></div>
             <Network size={80} className="text-blue-500 relative z-10 mx-auto" />
          </div>
          
          <h2 className="text-3xl md:text-6xl font-heading font-extrabold text-white leading-tight">
            We Don't Just Build Apps, <br/>
            <span className="text-blue-500">We Architect Legacies</span>
          </h2>
          
          <p className="text-slate-400 text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            Helixion is more than a service provider—we are a technical ally. Our philosophy is rooted in the belief that great engineering is a form of art that solves the hardest business problems.
          </p>
          
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
             <div className="flex items-center space-x-3 text-white font-bold uppercase tracking-widest text-xs">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>Zero Latency</span>
             </div>
             <div className="flex items-center space-x-3 text-white font-bold uppercase tracking-widest text-xs">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>Global Scale</span>
             </div>
             <div className="flex items-center space-x-3 text-white font-bold uppercase tracking-widest text-xs">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>Neural Logic</span>
             </div>
          </div>

          <div className="pt-20">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto shadow-[0_0_30px_rgba(37,99,235,0.8)]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
