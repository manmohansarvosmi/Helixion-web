
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ArrowRight, Github, Linkedin, Twitter, Mail, Phone, MapPin, 
  Cpu, Terminal as TerminalIcon, Activity, Globe, Zap, Shield, Layers, 
  Database, Server, Network, Command, Share2, ChevronRight
} from 'lucide-react';
import { COMPANY_NAME, TAGLINE, LOCATION } from './constants';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Industries from './pages/Industries';
import Services from './pages/Services';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Industries', path: '/industries' },
    { label: 'Services', path: '/services' },
    { label: 'Technologies', path: '/technologies' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-4 glass-panel border-b border-white/10' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:rotate-12 transition-transform">
                <span className="text-white font-bold text-2xl">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white leading-none">
                  HELIXION
                </span>
                <span className="text-[10px] text-blue-400 font-mono font-bold tracking-[0.2em] uppercase">
                  Innovation
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-blue-400 relative group ${
                  location.pathname === link.path ? 'text-blue-500' : 'text-slate-400'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105"
            >
              Uplink
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 text-sm font-bold uppercase tracking-widest rounded-xl transition-all ${
                  location.pathname === link.path ? 'bg-blue-600/20 text-blue-400' : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-blue-600 text-white px-4 py-4 rounded-xl text-sm font-bold uppercase tracking-widest"
            >
              Initiate Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  const [time, setTime] = useState(new Date().toISOString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toISOString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative mt-20 bg-black overflow-hidden perspective-[2000px]">
      {/* 3D Depth Floor Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.1),transparent_70%)] opacity-50"></div>
      
      {/* The Command Interface Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        
        {/* Top Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/5 pb-12 mb-16">
          <div className="flex items-center space-x-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono font-bold text-blue-500 tracking-[0.3em] uppercase mb-1">System_Clock</span>
              <span className="text-sm font-mono text-white/70">{time}</span>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono font-bold text-green-500 tracking-[0.3em] uppercase mb-1">Node_Integrity</span>
              <span className="text-sm font-mono text-white/70 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                STABLE // 100%
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
             <div className="px-4 py-2 glass-panel border border-blue-500/30 rounded-lg flex items-center gap-3">
                <Activity size={14} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-mono text-white/60 font-bold uppercase tracking-widest">Network_Load: 0.02%</span>
             </div>
          </div>
        </div>

        {/* Main Grid: System Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Brand Hub */}
          <div className="md:col-span-4 space-y-8">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)] group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl tracking-tighter text-white">HELIXION</span>
                <span className="text-[10px] text-blue-400 font-mono font-bold tracking-[0.3em] uppercase">Architecture_LLP</span>
              </div>
            </Link>
            
            <div className="p-6 glass-panel border-white/5 rounded-3xl relative group overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                 <TerminalIcon size={64} />
               </div>
               <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium italic">
                 "Architecting the future through neural infrastructure. We don't just build; we engineer stability into digital chaos."
               </p>
               <div className="flex space-x-4">
                 {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-xl glass-panel border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-600/5 transition-all">
                      <Icon size={18} />
                    </a>
                 ))}
               </div>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="md:col-span-5 grid grid-cols-2 gap-10">
            <div className="space-y-8">
              <h4 className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-[0.4em] flex items-center">
                <Layers size={12} className="mr-2" /> System_Hierarchy
              </h4>
              <ul className="space-y-4">
                {[
                  { label: 'Intelligence', path: '/about' },
                  { label: 'Inventory', path: '/products' },
                  { label: 'Custom_Engines', path: '/services' },
                  { label: 'Tech_Stack', path: '/technologies' }
                ].map((item, i) => (
                  <li key={i}>
                    <Link to={item.path} className="group flex items-center text-slate-400 hover:text-white text-sm font-bold uppercase tracking-widest transition-all">
                       <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all"></span>
                       {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-[0.4em] flex items-center">
                <Network size={12} className="mr-2" /> Sector_Orbits
              </h4>
              <ul className="space-y-4">
                {[
                  { label: 'LogiFlow', path: '/products' },
                  { label: 'Edu_Core', path: '/products' },
                  { label: 'DineDash', path: '/products' },
                  { label: 'AgriConnect', path: '/products' }
                ].map((item, i) => (
                  <li key={i}>
                    <Link to={item.path} className="group flex items-center text-slate-400 hover:text-white text-sm font-bold uppercase tracking-widest transition-all">
                       <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></span>
                       {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Terminal Console View */}
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-[0.4em]">Sub_Surface_Logs</h4>
            <div className="glass-panel border-white/5 rounded-2xl p-4 h-48 font-mono text-[9px] overflow-hidden flex flex-col justify-end">
               <div className="space-y-2 opacity-60">
                 <div className="flex items-center space-x-2 text-blue-400"><ChevronRight size={8} /> <span>Executing kernel_sync_02...</span></div>
                 <div className="flex items-center space-x-2 text-green-400"><ChevronRight size={8} /> <span>Uplink verified: PUNE_NODE</span></div>
                 <div className="flex items-center space-x-2 text-yellow-400"><ChevronRight size={8} /> <span>Scaling logic gates...</span></div>
                 <div className="flex items-center space-x-2 text-slate-400"><ChevronRight size={8} /> <span>Checking data parity...</span></div>
                 <div className="flex items-center space-x-2 text-blue-400"><ChevronRight size={8} /> <span className="animate-pulse">Waiting for uplink_signal...</span></div>
               </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-400 text-xs">
                <MapPin size={14} className="text-blue-500" />
                <span className="font-bold tracking-tight">{LOCATION}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 text-xs">
                <Mail size={14} className="text-blue-500" />
                <span className="font-bold tracking-tight">uplink@helixion.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Neural Convergence Core (Bottom Footer Visual) */}
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col items-center">
           <div className="relative mb-12">
              <div className="absolute inset-0 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
              <svg className="w-24 h-24 relative z-10 opacity-30" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-500" strokeDasharray="5 5" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500 node-pulse" />
                <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.5" className="text-white/20" />
              </svg>
           </div>
           
           <div className="flex flex-col items-center text-center space-y-4">
             <div className="flex items-center space-x-2 text-slate-600 font-mono text-[9px] font-bold uppercase tracking-[0.5em]">
                <span>Neural_Sync: ACTIVE</span>
                <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                <span>Version: 2.0.1_R3</span>
             </div>
             <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
               © {new Date().getFullYear()} HELIXION INNOVATION LLP // ALL_LOGIC_RESERVED
             </p>
           </div>
        </div>
      </div>

      {/* Background Decorative Data Flow (CSS Animation) */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-scan"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
