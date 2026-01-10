
import React, { useState } from 'react';
// Added missing Activity import from lucide-react
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Shield, Terminal, Zap, Globe, Activity } from 'lucide-react';
import { COMPANY_NAME, LOCATION } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate system processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', company: '', message: '' });
    }, 2000);
  };

  return (
    <div className="relative pt-32 pb-24 overflow-hidden">
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 space-y-8">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass-panel border border-blue-500/30 text-blue-400 text-xs font-mono tracking-widest uppercase">
              Secure Channel // Active
            </div>
            <h1 className="text-5xl md:text-8xl font-heading font-extrabold text-white tracking-tight leading-none">
              Initiate <span className="shimmer-text">Uplink</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              Ready to architect your next digital leap? Connect with our systems engineering team for a technical audit or project briefing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Stats/Info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-10 glass-panel rounded-[2.5rem] border-white/5 space-y-12">
                <h3 className="text-2xl font-bold text-white tracking-tight">Access Nodes</h3>
                
                <div className="space-y-10">
                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-widest mb-1">Physical_Node</p>
                      <p className="text-slate-300 font-medium">{LOCATION}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-mono font-bold text-indigo-500 uppercase tracking-widest mb-1">Voice_Channel</p>
                      <p className="text-slate-300 font-medium">+91 7880111641,</p>
                      <p className="text-slate-300 font-medium">+91 7756909607,</p>
                      <p className="text-slate-300 font-medium">+91 7744866995</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-purple-600/10 rounded-2xl flex items-center justify-center text-purple-400 border border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-mono font-bold text-purple-500 uppercase tracking-widest mb-1">Data_Uplink</p>
                      <p className="text-slate-300 font-medium">info@helixioninnovation.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-blue-600 rounded-[2.5rem] shadow-[0_0_50px_rgba(37,99,235,0.3)] text-white relative overflow-hidden group">
                <Shield className="absolute -bottom-6 -right-6 text-white/10 w-40 h-40 group-hover:scale-110 transition-transform" />
                <div className="relative z-10">
                   <div className="flex items-center space-x-4 mb-6">
                      <Clock className="text-white/80" />
                      <h4 className="font-extrabold text-xl">Latency Stats</h4>
                   </div>
                   <p className="text-blue-100 font-medium mb-6">
                      Our architects respond to initial briefings within 12 business hours. Global availability active.
                   </p>
                   <div className="inline-flex items-center space-x-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] bg-white/10 px-4 py-2 rounded-full">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span>Systems_Green</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Secure Transmission Form */}
            <div className="lg:col-span-8 glass-panel p-10 md:p-16 rounded-[3rem] border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                 <Terminal className="text-white/5 w-24 h-24" />
              </div>

              {isSuccess ? (
                <div className="text-center py-24 animate-fade-in space-y-10">
                  <div className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-10 border border-green-500/30 animate-bounce">
                     <Send size={40} />
                  </div>
                  <h2 className="text-4xl font-heading font-extrabold text-white tracking-tight">Transmission Received</h2>
                  <p className="text-slate-400 text-lg max-w-sm mx-auto font-medium">Your request has been queued in our primary processing buffer. An architect will be assigned shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-10 py-4 glass-panel text-blue-400 font-bold uppercase tracking-widest text-xs border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-all rounded-xl"
                  >
                    Send Additional Packet
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">Identify_Sender</label>
                      <input 
                        required
                        type="text" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-slate-900 transition-all text-white placeholder:text-slate-700"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">Return_Channel</label>
                      <input 
                        required
                        type="email" 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-slate-900 transition-all text-white placeholder:text-slate-700"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">Target_Organization</label>
                    <input 
                      type="text" 
                      value={formState.company}
                      onChange={(e) => setFormState({...formState, company: e.target.value})}
                      className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-slate-900 transition-all text-white placeholder:text-slate-700"
                      placeholder="Enterprise Name"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">Briefing_Packet</label>
                    <textarea 
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-slate-900 transition-all text-white placeholder:text-slate-700 resize-none"
                      placeholder="Outline your technical ambitions..."
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full py-6 bg-blue-600 text-white font-bold rounded-[2rem] shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center disabled:opacity-70 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <Activity className="animate-spin mr-3" />
                        Processing Uplink...
                      </span>
                    ) : (
                      <>
                        <span className="uppercase tracking-[0.3em] text-sm">Encrypt & Send Packet</span>
                        <Zap size={20} className="ml-4 group-hover:rotate-12 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Satellite Location View (Abstract Map) */}
      <section className="h-[500px] w-full relative overflow-hidden">
         <div className="absolute inset-0 bg-slate-950">
            <div className="absolute inset-0 opacity-20 neural-grid"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
               <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-[40px] opacity-40 animate-pulse"></div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center relative z-10 border-4 border-slate-900 shadow-2xl">
                     <Globe className="text-white" size={32} />
                  </div>
               </div>
               <div className="mt-8 text-center space-y-4">
                  <h4 className="text-white font-heading font-extrabold text-2xl tracking-tight">HQ: Pune Central Node</h4>
                  <p className="text-blue-400 font-mono text-xs font-bold tracking-widest uppercase">LAT: 18.5204 // LONG: 73.8567</p>
               </div>
            </div>
         </div>
         {/* Parallax scan line */}
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 animate-scan"></div>
      </section>
    </div>
  );
};

export default Contact;
