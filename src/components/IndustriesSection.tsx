import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Factory,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Truck,
} from 'lucide-react';

interface IndustriesSectionProps {
  onOpenContact: () => void;
}

const industries = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    shortName: 'Manufacturing',
    fullName: 'Manufacturing & Heavy Industry',
    icon: Factory,
    accentColor: '#f59e0b',
    summary:
      'Unlock superior production efficiency and performance with our expertly designed and developed smart factory solutions, IoT platforms, & industrial automation apps.',
    clients: ['TATA Steel', 'Jindal', 'Mahindra', 'Bosch', 'L&T'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    shortName: 'Health Care',
    fullName: 'Healthcare & Life Sciences',
    icon: HeartPulse,
    accentColor: '#ec4899',
    summary:
      'Unlock superior patient experiences and performance with our expertly designed and developed telehealth platforms, clinical data systems, & healthcare web apps.',
    clients: ['Apollo', 'Medanta', 'Fortis', 'Max Health', 'Narayana'],
  },
  {
    id: 'education',
    name: 'Education',
    shortName: 'EdTech',
    fullName: 'Education & EdTech',
    icon: GraduationCap,
    accentColor: '#8b5cf6',
    summary:
      'Unlock superior learning experiences and performance with our expertly designed and developed LMS platforms, virtual classrooms, & educational web apps.',
    clients: ['Byju\'s', 'Unacademy', 'Vedantu', 'Toppr', 'Classplus'],
  },
  {
    id: 'retail',
    name: 'Retail',
    shortName: 'E-Commerce',
    fullName: 'Retail & E-Commerce',
    icon: ShoppingBag,
    accentColor: '#10b981',
    summary:
      'Unlock superior user experiences and performance with our expertly designed and developed commerce apps, headless storefronts, & retail web apps.',
    clients: ['Flipkart', 'Myntra', 'BigBasket', 'Nykaa', 'Meesho'],
  },
  {
    id: 'logistics',
    name: 'Logistics',
    shortName: 'Logistics',
    fullName: 'Logistics & Supply Chain',
    icon: Truck,
    accentColor: '#3b82f6',
    summary:
      'Unlock superior fleet tracking and performance with our expertly designed and developed logistics platforms, route optimization, & supply chain web apps.',
    clients: ['Delhivery', 'BlueDart', 'Rivigo', 'Ecom Express', 'XpressBees'],
  },
];

// Positions for orbital client labels (5 positions around a circle)
const orbitPositions = [
  { x: 50, y: 2 },    // top center
  { x: 92, y: 28 },   // top-right
  { x: 82, y: 78 },   // bottom-right
  { x: 18, y: 78 },   // bottom-left
  { x: 8, y: 28 },    // top-left
];

export function IndustriesSection({ onOpenContact }: IndustriesSectionProps) {
  const [activeId, setActiveId] = useState('manufacturing');
  const [orbitAngle, setOrbitAngle] = useState(0);
  const active = industries.find((i) => i.id === activeId) || industries[0];

  // Slow rotating orbit animation for decorative dots
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbitAngle((prev) => (prev + 0.15) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="industries"
      className="w-full bg-white py-20 lg:py-28 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center min-h-[500px]">

          {/* ─── LEFT COLUMN — Text Content (5 cols) ─── */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0a192f] leading-[1.15] mb-5">
                  Digital Innovation for{' '}
                  <br />
                  <span style={{ color: active.accentColor }}>
                    {active.name}
                  </span>
                </h2>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-sm">
                  {active.summary}
                </p>
                <motion.button
                  onClick={onOpenContact}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-[#0a192f] hover:bg-[#112240] text-white text-sm font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                >
                  View projects
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ─── CENTER COLUMN — Orbital Logo Ring (5 cols) ─── */}
          <div className="lg:col-span-5 flex items-center justify-center py-8 lg:py-0">
            <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px]">

              {/* Outer faint orbit circle */}
              <div className="absolute inset-2 rounded-full border border-dashed border-slate-200/60" />
              {/* Middle orbit circle */}
              <div className="absolute inset-10 rounded-full border border-slate-200/40" />
              {/* Inner orbit circle */}
              <div className="absolute inset-20 rounded-full border border-slate-100/60" />

              {/* Small orbiting dots */}
              {[0, 72, 144, 216, 288].map((baseAngle, i) => {
                const angle = ((baseAngle + orbitAngle) * Math.PI) / 180;
                const radius = 44;
                const cx = 50 + radius * Math.cos(angle);
                const cy = 50 + radius * Math.sin(angle);
                return (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-slate-300/70"
                    style={{
                      left: `${cx}%`,
                      top: `${cy}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                );
              })}

              {/* Center Helixion Logo */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-20 h-20 sm:w-[88px] sm:h-[88px] rounded-full bg-gradient-to-br from-slate-50 to-white shadow-lg border border-slate-100 flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-11 h-11 sm:w-12 sm:h-12"
                  >
                    <defs>
                      <linearGradient id="indOrbitG1" x1="10%" y1="0%" x2="90%" y2="100%">
                        <stop offset="0%" stopColor="#00a8ff" />
                        <stop offset="50%" stopColor="#0070f3" />
                        <stop offset="100%" stopColor="#0047ba" />
                      </linearGradient>
                      <linearGradient id="indOrbitG2" x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="#0080ff" />
                        <stop offset="100%" stopColor="#0056cc" />
                      </linearGradient>
                      <linearGradient id="indOrbitGF" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#0284c7" />
                      </linearGradient>
                    </defs>
                    <path d="M50 8 L88 28 L88 44 L68 34 L50 24 L32 34 L12 24 L50 8 Z" fill="url(#indOrbitG1)" />
                    <path d="M12 28 L32 38 L32 72 L12 62 Z" fill="url(#indOrbitG2)" />
                    <path d="M68 38 L88 48 L88 82 L68 72 Z" fill="url(#indOrbitG1)" />
                    <path d="M12 66 L50 88 L88 70 L88 86 L50 98 L12 78 Z" fill="url(#indOrbitG2)" />
                    <path d="M32 46 L68 46 L68 58 L32 58 Z" fill="url(#indOrbitGF)" />
                    <path d="M48 24 L52 24 L68 34 L68 40 L50 28 L32 40 L32 34 Z" fill="#ffffff" fillOpacity="0.25" />
                  </svg>
                </div>
              </div>

              {/* Client name labels floating around the orbit */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  {active.clients.map((client, idx) => {
                    const pos = orbitPositions[idx];
                    return (
                      <motion.div
                        key={client}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, delay: idx * 0.06 }}
                        className="absolute"
                        style={{
                          left: `${pos.x}%`,
                          top: `${pos.y}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                      >
                        <span
                          className="text-[13px] font-semibold whitespace-nowrap px-3 py-1.5 rounded-full bg-white/90 shadow-md border border-slate-100/80 backdrop-blur-sm"
                          style={{ color: active.accentColor }}
                        >
                          {client}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ─── RIGHT COLUMN — Vertical Industry Tabs (3 cols) ─── */}
          <div className="lg:col-span-3 flex items-center justify-center lg:justify-end">
            {/* Mobile: horizontal scroll / Desktop: vertical tall tabs */}
            <div className="flex flex-row lg:flex-row gap-0 h-auto lg:h-[440px]">
              {industries.map((ind) => {
                const isActive = ind.id === activeId;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveId(ind.id)}
                    className={`relative flex items-center justify-center cursor-pointer transition-all duration-300 group ${
                      isActive
                        ? 'bg-[#0a192f] text-white shadow-xl z-10'
                        : 'bg-white text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                    }`}
                    style={{
                      writingMode: 'vertical-rl',
                      width: isActive ? '60px' : '52px',
                      height: '100%',
                      minHeight: '120px',
                      borderLeft: isActive ? 'none' : '1px solid #e2e8f0',
                      borderRight: isActive ? 'none' : '1px solid #e2e8f0',
                      borderTop: '1px solid #e2e8f0',
                      borderBottom: '1px solid #e2e8f0',
                    }}
                  >
                    {/* Active accent line at top */}
                    {isActive && (
                      <motion.div
                        layoutId="vTabAccent"
                        className="absolute top-0 left-0 right-0 h-1"
                        style={{ backgroundColor: active.accentColor }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}

                    <span
                      className={`text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      {ind.shortName}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Subtle bottom border line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="h-px bg-slate-100" />
      </div>
    </section>
  );
}
