
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Layers, 
  Activity, 
  Globe,
  Plus,
  Quote,
  Terminal,
  Code2,
  Server,
  CloudLightning,
  Network,
  Command,
  Monitor,
  Search,
  ShieldCheck,
  Cloud,
  ChevronRight,
  Workflow,
  Box,
  Share2,
  GitBranch,
  Settings,
  Maximize2,
  Utensils,
  User,
  Orbit,
  ZapOff,
  Flame
} from 'lucide-react';
import { PRODUCTS, TESTIMONIALS } from '../constants';

// --- ATOMIC FUSION CTA COMPONENT ---
const AtomicCTA = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-20 px-6 overflow-hidden">
      {/* The Reactor Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        {/* Core Nucleus Glow */}
        <div className="w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        
        {/* Elliptical Orbits */}
        <div className="absolute w-[800px] h-[300px] border border-blue-500/10 rounded-[100%] rotate-[45deg] animate-spin-slow" style={{ animationDuration: '15s' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_20px_#60a5fa] animate-ping"></div>
        </div>
        <div className="absolute w-[800px] h-[300px] border border-indigo-500/10 rounded-[100%] rotate-[-45deg] animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_20px_#818cf8]"></div>
        </div>
        <div className="absolute w-[900px] h-[250px] border border-white/5 rounded-[100%] rotate-[90deg] animate-spin-slow" style={{ animationDuration: '25s' }}>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_#fff]"></div>
        </div>
      </div>

      {/* The Motivational Content */}
      <div className="relative z-10 glass-panel rounded-[4rem] border-white/10 p-12 md:p-24 overflow-hidden text-center bg-slate-900/40 backdrop-blur-3xl shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        
        <div className="flex flex-col items-center space-y-8">
          <div className="inline-flex items-center space-x-3 px-6 py-2 bg-blue-600/10 border border-blue-500/30 rounded-full text-blue-400 text-[10px] font-mono font-bold tracking-[0.4em] uppercase">
            <Flame size={14} className="animate-bounce" />
            <span>Launch_Sequence_Active</span>
          </div>

          <h2 className="text-4xl md:text-7xl font-heading font-black text-white leading-tight tracking-tighter">
            Initiate Your Next <br/>
            <span className="shimmer-text">Engineering Leap</span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Stop iterating. Start accelerating. Uplink with our core architects to engineer high-concurrency digital engines that define the new industry standard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6 w-full">
            <Link 
              to="/contact" 
              className="group relative w-full sm:w-auto px-12 py-6 bg-white text-slate-950 font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
            >
              <div className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <span className="relative flex items-center justify-center group-hover:text-white transition-colors duration-300">
                REQUEST SYSTEM AUDIT
                <Zap size={20} className="ml-3 group-hover:rotate-12 transition-transform" />
              </span>
            </Link>

            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Current_Load</span>
                <span className="text-blue-500 font-mono text-sm font-bold">READY_TO_SCALE</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Stability_Grade</span>
                <span className="text-green-400 font-mono text-sm font-bold">A++ PLATINUM</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle Bottom HUD */}
        <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-center space-x-12 opacity-30">
           <div className="flex items-center space-x-2 text-[8px] font-mono text-white tracking-[0.2em]">
              <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
              <span>QUANTUM_ENCRYPTION_ON</span>
           </div>
           <div className="flex items-center space-x-2 text-[8px] font-mono text-white tracking-[0.2em]">
              <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
              <span>NEURAL_FABRIC_SYNCED</span>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- ENHANCED COMPONENT: INTERACTIVE 3D HYPERCUBE ---
const HypercubeCore = ({ mousePos }: { mousePos: { x: number; y: number } }) => {
  const [rotation, setRotation] = useState({ x: -20, y: 45 });
  
  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const factor = 15;
    const moveX = (mousePos.x - centerX) / (window.innerWidth / 2);
    const moveY = (mousePos.y - centerY) / (window.innerHeight / 2);
    
    setRotation({
      x: -20 - (moveY * factor),
      y: 45 + (moveX * factor)
    });
  }, [mousePos]);

  const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
  const faceTransforms: Record<string, string> = {
    front: 'rotateY(0deg) translateZ(120px)',
    back: 'rotateY(180deg) translateZ(120px)',
    left: 'rotateY(-90deg) translateZ(120px)',
    right: 'rotateY(90deg) translateZ(120px)',
    top: 'rotateX(90deg) translateZ(120px)',
    bottom: 'rotateX(-90deg) translateZ(120px)',
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-[2000px] scale-75 md:scale-100">
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-10 left-10 border-l-2 border-t-2 border-blue-500/30 w-16 h-16"></div>
        <div className="absolute bottom-10 right-10 border-r-2 border-b-2 border-blue-500/30 w-16 h-16"></div>
        <div className="absolute top-1/4 -left-10 animate-float flex flex-col items-start gap-1">
          <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-[0.3em] bg-slate-900/80 px-2">Core_Integrity</span>
          <div className="h-px w-32 bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>
        <div className="absolute bottom-1/3 -right-10 animate-float flex flex-col items-end gap-1" style={{ animationDelay: '1.5s' }}>
          <span className="text-[10px] font-mono text-indigo-500 font-bold uppercase tracking-[0.3em] bg-slate-900/80 px-2">Data_Stream_0.4ms</span>
          <div className="h-px w-40 bg-gradient-to-l from-indigo-500 to-transparent"></div>
        </div>
      </div>

      <div 
        className="relative w-60 h-60 transition-transform duration-700 ease-out preserve-3d"
        style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center translate-z-0">
          <div className="w-24 h-24 bg-blue-600/20 rounded-full blur-[50px] animate-pulse"></div>
          <div className="relative w-20 h-20 glass-panel border border-blue-400/50 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)]">
            <Cpu size={40} className="text-blue-400 node-pulse" />
          </div>
        </div>

        {faces.map((face) => (
          <div 
            key={face}
            className="absolute inset-0 border border-blue-500/40 bg-blue-600/5 backdrop-blur-[2px] overflow-hidden group/face"
            style={{ transform: faceTransforms[face], transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 opacity-20" style={{ 
              backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', 
              backgroundSize: '20px 20px' 
            }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full group-hover/face:translate-x-full transition-transform duration-[2000ms]"></div>
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400/60"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400/60"></div>
          </div>
        ))}

        {[0, 120, 240].map((angle, i) => (
          <div 
            key={i}
            className="absolute w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_20px_#6366f1] animate-bounce"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${angle + (Date.now() / 100)}deg) translate(220px)`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <div className="absolute inset-0 bg-white/40 rounded-full animate-ping"></div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[450px] h-[450px] border border-blue-500/10 rounded-full animate-spin-slow"></div>
        <div className="absolute w-[550px] h-[550px] border border-white/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }}></div>
      </div>
    </div>
  );
};

// --- IMPROVED COMPONENT: LOGIC BLUEPRINT VISUALIZATION ---
const LogicBlueprint = ({ type }: { type: string }) => {
  const renderVisual = () => {
    switch (type) {
      case 'school-erp':
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="60" className="stroke-blue-500/20 fill-blue-500/5 stroke-1" />
            <circle cx="200" cy="200" r="40" className="stroke-blue-500/40 fill-none stroke-1 node-pulse" />
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <g key={i}>
                <line 
                  x1="200" y1="200" 
                  x2={200 + 150 * Math.cos((angle * Math.PI) / 180)} 
                  y2={200 + 150 * Math.sin((angle * Math.PI) / 180)} 
                  className="stroke-blue-500/10 stroke-1 animate-flow-line" 
                />
                <circle 
                  cx={200 + 150 * Math.cos((angle * Math.PI) / 180)} 
                  cy={200 + 150 * Math.sin((angle * Math.PI) / 180)} 
                  r="4" className="fill-blue-500/30" 
                />
              </g>
            ))}
          </svg>
        );
      case 'supply-chain':
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path d="M-50 200 Q 100 100, 200 200 T 450 200" className="fill-none stroke-blue-500/20 stroke-1 animate-flow-line" />
            <path d="M-50 250 Q 100 150, 200 250 T 450 250" className="fill-none stroke-blue-500/10 stroke-1 animate-flow-line" />
            <rect x="170" y="170" width="60" height="60" rx="12" className="fill-blue-500/5 stroke-blue-500/30 stroke-1 node-pulse" />
          </svg>
        );
      case 'agri-tech':
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <g className="opacity-20">
              <path d="M200 50 L350 300 L50 300 Z" className="fill-blue-500/5 stroke-blue-500/40 stroke-1" />
              <circle cx="200" cy="50" r="8" className="fill-blue-500" />
              <circle cx="350" cy="300" r="8" className="fill-blue-500" />
              <circle cx="50" cy="300" r="8" className="fill-blue-500" />
              <path d="M200 50 L200 300" className="stroke-blue-500/30 stroke-1 animate-flow-line" />
            </g>
          </svg>
        );
      case 'restaurant-ms':
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <g className="hub-group">
               <rect x="160" y="160" width="80" height="80" rx="16" className="fill-blue-600/10 stroke-blue-500/40 stroke-2 node-pulse" />
               <Utensils x="185" y="185" className="text-blue-400 w-8 h-8 opacity-60" />
            </g>
            {[
              { x: 80, y: 100, label: 'Table_01' },
              { x: 320, y: 100, label: 'Table_02' },
              { x: 80, y: 300, label: 'Kiosk_A' },
              { x: 320, y: 300, label: 'Mobile_App' }
            ].map((node, i) => (
              <g key={i}>
                <path 
                  d={`M ${node.x} ${node.y} L 200 200`} 
                  className="stroke-blue-500/20 stroke-1 animate-flow-line" 
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
                <circle cx={node.x} cy={node.y} r="18" className="fill-slate-900 stroke-blue-500/30 stroke-1" />
                <circle cx={node.x} cy={node.y} r="6" className="fill-blue-500/40" />
                <text 
                  x={node.x} y={node.y + 35} 
                  textAnchor="middle" 
                  className="fill-blue-400/30 text-[8px] font-mono font-bold uppercase tracking-widest"
                >
                  {node.label}
                </text>
              </g>
            ))}
            <circle cx="200" cy="200" r="160" className="fill-none stroke-white/5 stroke-1" strokeDasharray="10 20" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full opacity-20">
            <rect x="50" y="50" width="300" height="300" className="fill-none stroke-blue-500/20 stroke-1" />
            <line x1="50" y1="200" x2="350" y2="200" className="stroke-blue-500/20 stroke-1" />
            <line x1="200" y1="50" x2="200" y2="350" className="stroke-blue-500/20 stroke-1" />
            <circle cx="200" cy="200" r="100" className="fill-none stroke-blue-500/10 stroke-1 animate-spin-slow" />
          </svg>
        );
    }
  };

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
      <div className="w-[120%] h-[120%] opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 ease-out">
        {renderVisual()}
      </div>
    </div>
  );
};

const OrchestrationNexus = () => {
  return (
    <div className="relative w-full py-20 px-4">
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 300 C 300 300, 300 150, 600 150 C 900 150, 900 300, 1100 300" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5 10" className="animate-flow-line" />
        <path d="M100 300 C 300 300, 300 450, 600 450 C 900 450, 900 300, 1100 300" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5 10" className="animate-flow-line" />
        <path d="M100 300 H1100" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="15 5" className="animate-flow-line" />
        <circle r="3" fill="#3b82f6" className="node-pulse"><animateMotion dur="4s" repeatCount="indefinite" path="M100 300 H1100" /></circle>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" /><stop offset="50%" stopColor="#6366f1" /><stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {[
          { title: 'Inception', icon: <Search className="w-8 h-8" />, tags: ['Logic Mapping', 'Architecture'], desc: 'Translating business goals into a structured technical blueprint.' },
          { title: 'Interface', icon: <Layers className="w-8 h-8" />, tags: ['Visual Logic', 'UX Systems'], desc: 'Designing high-fidelity user environments for enterprise efficiency.' },
          { title: 'Processing', icon: <Cpu className="w-8 h-8" />, tags: ['Distributed Kernels', 'Scalable APIs'], desc: 'Engineering high-concurrency engines with zero-latency response.' },
          { title: 'Provisioning', icon: <Cloud className="w-8 h-8" />, tags: ['Cloud-Native', 'Global Clusters'], desc: 'Deploying robust infrastructure with multi-regional redundancy.' }
        ].map((node, idx) => (
          <div key={idx} className="group relative flex flex-col items-center text-center">
            <div className="relative w-24 h-24 mb-8">
              <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl group-hover:bg-blue-600/40 transition-all duration-500"></div>
              <div className="relative w-full h-full glass-panel rounded-full border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:border-blue-500 transition-all duration-500 node-pulse">{node.icon}</div>
            </div>
            <h4 className="text-xl font-heading font-extrabold text-white mb-3 tracking-tight uppercase tracking-wider">{node.title}</h4>
            <p className="text-slate-500 text-sm mb-6 max-w-[200px] leading-relaxed group-hover:text-slate-300 transition-colors">{node.desc}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              {node.tags.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-[9px] font-mono font-bold text-blue-400 uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-all">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative">
      {/* Dynamic Background Glow */}
      <div className="fixed w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0 transition-opacity duration-1000" style={{ left: mousePos.x - 300, top: mousePos.y - 300, opacity: isVisible ? 1 : 0 }}></div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass-panel border border-blue-500/30 text-blue-400 text-xs font-mono tracking-widest uppercase animate-fade-in">
                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>
                <span>System_Uplink: ESTABLISHED</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-heading font-extrabold text-white leading-[1.05] tracking-tight">
                  Architecting <br/>
                  <span className="shimmer-text">Enterprise Assets</span>
                </h1>
                <p className="max-w-xl text-xl text-slate-400 leading-relaxed font-medium">
                  We are a high-performance engineering firm. We design and deploy modular digital ecosystems tailored for high-concurrency and mission-critical stability.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                <Link to="/contact" className="group relative w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-bold rounded-xl overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all hover:scale-105">
                  <span className="relative flex items-center justify-center">Initiate Command<Command className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" /></span>
                </Link>
                <Link to="/products" className="group w-full sm:w-auto px-10 py-5 glass-panel text-white font-bold rounded-xl border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center">
                  Core Blueprints
                  <Maximize2 size={16} className="ml-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>

              {/* Status Indicators */}
              <div className="flex items-center space-x-8 pt-8 opacity-60">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg">0.4ms</span>
                  <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-widest">Latency_Floor</span>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg">99.99%</span>
                  <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-widest">Uptime_Target</span>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg">Zero</span>
                  <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-widest">Logic_Faults</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
               <HypercubeCore mousePos={mousePos} />
            </div>
          </div>
        </div>
      </section>

      {/* --- ENGINEERING LIFECYCLE SECTION --- */}
      <section className="py-32 relative overflow-hidden bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-blue-500 font-mono tracking-widest uppercase font-bold text-sm">Our Engineering Lifecycle</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tight">Universal <span className="shimmer-text">Product Logic</span></h3>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">We apply high-fidelity engineering principles across all business sectors, ensuring every platform is built for extreme performance.</p>
          </div>
          <OrchestrationNexus />
        </div>
      </section>

      {/* --- SYSTEM FRAMEWORKS SECTION --- */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-blue-500 font-mono tracking-widest uppercase mb-4 font-bold">The Solution Catalog</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-extrabold text-white">System Frameworks</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PRODUCTS.map((product) => (
              <div 
                key={product.id} 
                className="group relative min-h-[550px] flex flex-col rounded-[3rem] overflow-hidden glass-panel border border-white/5 hover:border-blue-500/50 transition-all duration-700 bg-slate-900/60 shadow-2xl"
              >
                <LogicBlueprint type={product.id} />

                <div className="relative z-10 flex flex-col h-full p-8 md:p-12">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 bg-blue-600/90 text-white rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {product.icon}
                    </div>
                    <div className="text-right space-y-1 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5">
                      <div className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-[0.2em]">Deploy_Status</div>
                      <div className="text-[9px] font-mono text-green-400 font-bold uppercase tracking-[0.2em] flex items-center justify-end">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                        Active_Node
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow space-y-6">
                    <div className="space-y-3">
                      <h4 className="text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        {product.title}
                      </h4>
                      <p className="text-slate-300 text-lg leading-relaxed line-clamp-3 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent font-medium">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 py-2">
                       {product.features.slice(0, 3).map((f, i) => (
                         <span key={i} className="px-4 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-300 group-hover:border-blue-500/30 transition-all">
                           {f.split(' ')[0]}
                         </span>
                       ))}
                    </div>
                  </div>

                  <div className="mt-12 flex items-center justify-between pt-6 border-t border-white/10">
                    <Link 
                      to="/products" 
                      className="group/btn px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:scale-105 transition-all uppercase tracking-widest text-xs flex items-center"
                    >
                      Analyze Architecture
                      <ChevronRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <div className="flex items-center space-x-3 opacity-30 group-hover:opacity-100 transition-opacity">
                      <Terminal size={20} className="text-blue-400" />
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest hidden sm:inline">Kernel_v4.2</span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[3rem]">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/5 via-transparent to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[2000ms] ease-in-out"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- METRICS BAR --- */}
      <section className="relative z-10 border-y border-white/5 glass-panel py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Engineering Output', value: 'High-Volume', icon: <Code2 /> },
              { label: 'Cluster Availability', value: 'Multi-Region', icon: <Server /> },
              { label: 'Data Optimization', value: 'High-Fidelity', icon: <Database /> },
              { label: 'System Uptime', value: '99.99%', icon: <Shield /> }
            ].map((m, i) => (
              <div key={i} className="flex flex-col items-center md:items-start space-y-2">
                <div className="text-blue-500 mb-2">{m.icon}</div>
                <div className="text-3xl font-extrabold text-white font-heading">{m.value}</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-blue-400 font-mono tracking-widest uppercase mb-4 font-bold">Consensus</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-white">Client Operations Reports</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="relative group p-10 glass-panel rounded-[2.5rem] border-white/5 hover:border-blue-500/30 transition-all duration-500">
                <Quote className="absolute top-8 right-8 text-blue-500/5 w-16 h-16" />
                <p className="text-slate-300 text-lg leading-relaxed mb-10 italic relative z-10 font-medium">"{t.quote}"</p>
                <div className="flex items-center mt-auto">
                  <div className="relative"><img src={t.image} alt={t.author} className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/30 grayscale group-hover:grayscale-0 transition-all" /></div>
                  <div className="ml-5"><h4 className="font-extrabold text-white text-lg">{t.author}</h4><p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{t.company}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REPLACED CTA SECTION WITH ATOMIC CTA --- */}
      <section className="py-32 relative">
        <AtomicCTA />
      </section>
    </div>
  );
};

export default Home;
