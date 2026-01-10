
import React from 'react';
import { ArrowRight, Check, Terminal, Cpu, Database, Server, Box, Layers, Zap, User, Share2, Activity, ShieldCheck, Globe } from 'lucide-react';
import { PRODUCTS } from '../constants';

const ArchitecturalFlow: React.FC<{ productId: string }> = ({ productId }) => {
  // Unique flows for each product type
  if (productId === 'school-erp') {
    return (
      <svg className="absolute inset-0 w-full h-full p-12 opacity-80" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="40" className="stroke-blue-500 stroke-[2] node-pulse" />
        <Database x="180" y="180" className="text-blue-500 w-10 h-10" />
        
        <g className="nodes">
          <rect x="50" y="50" width="80" height="40" rx="8" className="fill-slate-900/50 stroke-white/20" />
          <User x="60" y="60" className="text-white w-5 h-5" />
          <text x="85" y="75" className="fill-white text-[10px] font-mono">Admin</text>
          
          <rect x="270" y="50" width="80" height="40" rx="8" className="fill-slate-900/50 stroke-white/20" />
          <Globe x="280" y="60" className="text-white w-5 h-5" />
          <text x="305" y="75" className="fill-white text-[10px] font-mono">Web</text>
          
          <rect x="160" y="320" width="80" height="40" rx="8" className="fill-slate-900/50 stroke-white/20" />
          <Activity x="170" y="330" className="text-white w-5 h-5" />
          <text x="195" y="345" className="fill-white text-[10px] font-mono">Portal</text>
        </g>
        
        <path d="M130 70 L180 180" className="stroke-blue-500/30 stroke-[2] animate-flow-line" />
        <path d="M270 70 L220 180" className="stroke-blue-500/30 stroke-[2] animate-flow-line" />
        <path d="M200 240 L200 320" className="stroke-blue-500/30 stroke-[2] animate-flow-line" />
      </svg>
    );
  }

  if (productId === 'supply-chain') {
    return (
      <svg className="absolute inset-0 w-full h-full p-12 opacity-80" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 200 L120 200 M280 200 L350 200 M200 120 L200 280" className="stroke-blue-500/40 stroke-[2] animate-flow-line" />
        
        <rect x="130" y="150" width="140" height="100" rx="16" className="fill-blue-600/10 stroke-blue-500 stroke-[2] node-pulse" />
        <Cpu x="180" y="180" className="text-blue-500 w-10 h-10" />
        
        <circle cx="50" cy="200" r="15" className="fill-slate-900 stroke-white/20" />
        <Box x="42" y="192" className="text-white w-4 h-4" />
        <text x="35" y="235" className="fill-slate-400 text-[8px] font-mono">Vendor</text>
        
        <circle cx="350" cy="200" r="15" className="fill-slate-900 stroke-white/20" />
        <Share2 x="342" y="192" className="text-white w-4 h-4" />
        <text x="330" y="235" className="fill-slate-400 text-[8px] font-mono">Dispatch</text>
      </svg>
    );
  }

  return (
    <svg className="absolute inset-0 w-full h-full p-12 opacity-80" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="100" y="100" width="200" height="200" rx="20" className="stroke-white/10" strokeDasharray="10 5" />
      <circle cx="200" cy="200" r="60" className="fill-blue-600/5 stroke-blue-500/20" />
      <Layers x="185" y="185" className="text-blue-500 w-8 h-8 animate-bounce" />
      <path d="M200 50 V140 M200 260 V350 M50 200 H140 M260 200 H350" className="stroke-blue-500/20 stroke-[1] animate-flow-line" />
    </svg>
  );
};

const Products: React.FC = () => {
  return (
    <div className="relative pt-32 pb-24">
      {/* Header */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass-panel border border-blue-500/30 text-blue-400 text-xs font-mono tracking-widest uppercase mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
            <span>Logic_Architecture_Registry</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-heading font-extrabold text-white mb-8 tracking-tight">
            Our Digital <span className="shimmer-text">Arsenal</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            High-fidelity SaaS platforms designed with a "Core-to-Edge" philosophy. Every module is a logical unit in your growth machine.
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-40">
          {PRODUCTS.map((product, index) => (
            <div 
              key={product.id} 
              className={`flex flex-col lg:items-center gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="flex items-center space-x-4 mb-4 transform hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                    {product.icon}
                  </div>
                  <div>
                    <h2 className="text-4xl font-heading font-extrabold text-white tracking-tight">
                      {product.title}
                    </h2>
                    <p className="text-blue-500 font-mono text-[10px] font-bold uppercase tracking-widest mt-1">
                      Architecture_Status: VERIFIED_DEPLOYMENT
                    </p>
                  </div>
                </div>
                
                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {product.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start p-4 glass-panel rounded-xl border-white/5 group hover:border-blue-500/30 transition-all">
                      <div className="mt-1 mr-3 w-6 h-6 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center shrink-0">
                        <Zap size={14} />
                      </div>
                      <span className="text-slate-300 font-bold text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-8 flex flex-col sm:flex-row gap-6">
                  <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center justify-center group">
                    Deploy Solution
                    <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button className="px-10 py-5 glass-panel text-white font-bold rounded-xl border border-white/10 hover:bg-white/5 transition-all">
                    System Blueprint
                  </button>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 relative group">
                {/* Visual Logic Layer */}
                <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl group-hover:opacity-100 opacity-50 transition-opacity"></div>
                
                <div className="relative glass-panel rounded-[3rem] p-2 overflow-hidden border-white/10 group-hover:border-blue-500/50 transition-all duration-700 aspect-square">
                   {/* Background Image (Lower Opacity) */}
                   <img 
                     src={product.image} 
                     alt={product.title} 
                     className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-40 transition-all duration-1000"
                   />
                   
                   {/* Architectural Overlay */}
                   <ArchitecturalFlow productId={product.id} />
                   
                   {/* HUD / Data Overlay */}
                   <div className="absolute top-10 right-10 flex flex-col items-end space-y-2">
                      <div className="px-3 py-1 glass-panel rounded-full border border-blue-500/50 flex items-center space-x-2">
                         <ShieldCheck className="text-blue-400 w-3 h-3" />
                         <span className="text-[10px] font-mono text-white">SSL_SECURED</span>
                      </div>
                      <div className="px-3 py-1 glass-panel rounded-full border border-green-500/50 flex items-center space-x-2">
                         <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                         <span className="text-[10px] font-mono text-white">LATENCY_0.4ms</span>
                      </div>
                   </div>

                   <div className="absolute bottom-10 left-10 p-6 glass-panel rounded-2xl border-white/10 backdrop-blur-xl group-hover:translate-y-[-10px] transition-transform">
                      <div className="flex items-center space-x-3 text-blue-400 font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                        <Database size={12} />
                        <span>Core_Kernel_Active</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[4rem] p-16 text-center border-white/5 relative overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full"></div>
             <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-8 relative z-10">Custom Architecture Needed?</h2>
             <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto relative z-10">
                Our platforms are built with open APIs. We can weave our core logic into your existing hardware or legacy data centers.
             </p>
             <button className="px-12 py-6 bg-white text-slate-900 font-bold rounded-2xl hover:scale-105 transition-all inline-flex items-center relative z-10">
                Contact System Architect <ArrowRight className="ml-3" size={20} />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
