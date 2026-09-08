import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Factory,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Truck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';

interface IndustriesSectionProps {
  onOpenContact: () => void;
}

const industries = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    fullName: 'Manufacturing & Heavy Industry',
    tagline: 'Smart Factory & Industrial IoT',
    icon: Factory,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    bgLight: 'bg-orange-50 text-orange-600 border-orange-200',
    bgDarkGlow: 'from-orange-500/20 to-amber-500/5',
    borderGlow: 'border-orange-500/30 hover:border-orange-500/60',
    badgeBg: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-orange-500/30',
    summary:
      'We empower smart factories with industrial IoT telemetry, predictive machinery maintenance, quality vision inspections, and unified shop-floor ERP integration.',
    solutions: [
      'Shop-Floor SCADA / MES Digitalization',
      'AI Vision-Based Defect Detection',
      'Predictive Equipment Maintenance',
      'Multi-Plant Inventory Traceability',
    ],
    metric: '30%',
    metricLabel: 'Reduction in equipment downtime',
    stats: [
      { label: 'SCADA Integration', val: '100%' },
      { label: 'Plant Efficiency', val: '+24%' },
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    fullName: 'Healthcare & Life Sciences',
    tagline: 'Telehealth & Clinical Data Systems',
    icon: HeartPulse,
    gradient: 'from-rose-500 via-pink-500 to-purple-500',
    bgLight: 'bg-rose-50 text-rose-600 border-rose-200',
    bgDarkGlow: 'from-rose-500/20 to-pink-500/5',
    borderGlow: 'border-rose-500/30 hover:border-rose-500/60',
    badgeBg: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    iconBg: 'bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-rose-500/30',
    summary:
      'HIPAA-compliant telehealth suites, clinical data orchestration platforms, diagnostic image analyzers, and secure patient EHR management systems.',
    solutions: [
      'Telemedicine & Remote Patient Monitoring',
      'Electronic Health Records (EHR)',
      'Diagnostic AI & Clinical Decision Engines',
      'Medical Device Integration & Compliance',
    ],
    metric: '99.99%',
    metricLabel: 'Uptime for critical workflows',
    stats: [
      { label: 'HIPAA Compliant', val: 'Verified' },
      { label: 'Response Speed', val: '<50ms' },
    ],
  },
  {
    id: 'education',
    name: 'Education',
    fullName: 'Education & EdTech',
    tagline: 'Digital Campus & Adaptive LMS',
    icon: GraduationCap,
    gradient: 'from-violet-500 via-indigo-500 to-blue-500',
    bgLight: 'bg-violet-50 text-violet-600 border-violet-200',
    bgDarkGlow: 'from-violet-500/20 to-indigo-500/5',
    borderGlow: 'border-violet-500/30 hover:border-violet-500/60',
    badgeBg: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    iconBg: 'bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-violet-500/30',
    summary:
      'Scalable Learning Management Systems, adaptive assessment engines, interactive virtual classrooms, and automated institutional governance tools.',
    solutions: [
      'Cloud-Native Multi-Tenant LMS',
      'AI Adaptive Learning Path Generators',
      'Live Video Lecture & Whiteboards',
      'Student Information & Fee Portals',
    ],
    metric: '2.5M+',
    metricLabel: 'Active learners supported live',
    stats: [
      { label: 'Student Engagement', val: '+45%' },
      { label: 'Exam Automation', val: 'Instant' },
    ],
  },
  {
    id: 'retail',
    name: 'Retail',
    fullName: 'Retail & E-Commerce',
    tagline: 'Omnichannel Commerce & POS',
    icon: ShoppingBag,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    bgLight: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    bgDarkGlow: 'from-emerald-500/20 to-teal-500/5',
    borderGlow: 'border-emerald-500/30 hover:border-emerald-500/60',
    badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-500/30',
    summary:
      'Unified omnichannel commerce platforms, headless storefronts, intelligent recommendation engines, and dynamic supply chain replenishment algorithms.',
    solutions: [
      'Headless Commerce & PWA Storefronts',
      'Real-Time Omnichannel Inventory Sync',
      'Personalized Recommendation Engines',
      'POS Modernization & Cloud Integration',
    ],
    metric: '+42%',
    metricLabel: 'Uplift in customer conversion',
    stats: [
      { label: 'Page Speed', val: '0.4s' },
      { label: 'Cart Conversion', val: '3.8x' },
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics',
    fullName: 'Logistics & Supply Chain',
    tagline: 'GPS Telematics & Fleet Tracking',
    icon: Truck,
    gradient: 'from-sky-500 via-blue-500 to-indigo-600',
    bgLight: 'bg-sky-50 text-sky-600 border-sky-200',
    bgDarkGlow: 'from-sky-500/20 to-blue-500/5',
    borderGlow: 'border-sky-500/30 hover:border-sky-500/60',
    badgeBg: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    iconBg: 'bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-sky-500/30',
    summary:
      'End-to-end fleet tracking systems, route optimization algorithms, warehouse management software, and automated freight compliance portals.',
    solutions: [
      'Dynamic Route Planning & Fuel Optimization',
      'Automated Warehouse Management (WMS)',
      'Real-Time GPS Fleet Telematics',
      'Freight Rate & Customs Automation',
    ],
    metric: '-18%',
    metricLabel: 'Decrease in route transit costs',
    stats: [
      { label: 'Route Efficiency', val: '+35%' },
      { label: 'On-Time Deliveries', val: '99.4%' },
    ],
  },
];

export function IndustriesSection({ onOpenContact }: IndustriesSectionProps) {
  const [activeId, setActiveId] = useState('manufacturing');
  const active = industries.find((i) => i.id === activeId) || industries[0];
  const IconComponent = active.icon;

  return (
    <section
      id="industries"
      className="w-full bg-[#f8fafc] py-20 border-t border-slate-100 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0070f3] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industries We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071326] tracking-tight mb-4">
            Solutions Across Industries
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We bring deep domain expertise and cutting-edge technology to solve complex challenges across key industry verticals.
          </p>
        </motion.div>

        {/* Top Interactive Tabs Bar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {industries.map((ind) => {
            const TabIcon = ind.icon;
            const isActive = ind.id === activeId;
            return (
              <button
                key={ind.id}
                id={`industry-tab-${ind.id}`}
                onClick={() => setActiveId(ind.id)}
                className={`relative flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#071326] text-white shadow-lg shadow-slate-900/20 scale-[1.02]'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    isActive ? ind.iconBg : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                </div>
                <span>{ind.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute -bottom-1 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-sky-400"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Heroic Feature Showcase Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#061224] via-[#091b36] to-[#040c1a] border border-slate-800 shadow-2xl text-white">
          
          {/* Ambient Background Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className={`absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br ${active.bgDarkGlow} rounded-full blur-3xl`} />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Left Column: Sector Info & Metrics (Span 7) */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800/80">
                <div>
                  {/* Badge & Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${active.iconBg} flex items-center justify-center shadow-lg transform -rotate-1`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div>
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border mb-1 ${active.badgeBg}`}>
                        <Zap className="w-3 h-3" />
                        <span>{active.tagline}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {active.fullName}
                      </h3>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                    {active.summary}
                  </p>

                  {/* Main Metric Highlight Banner */}
                  <div className="relative rounded-2xl p-5 bg-slate-900/80 border border-slate-700/60 overflow-hidden mb-8 group hover:border-slate-600 transition-colors">
                    <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${active.gradient}`} />
                    <div className="flex items-center gap-5 pl-2">
                      <div className="flex flex-col">
                        <span className={`text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r ${active.gradient} bg-clip-text text-transparent`}>
                          {active.metric}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Measured Impact
                        </span>
                      </div>
                      <div className="h-10 w-px bg-slate-800" />
                      <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                        {active.metricLabel}
                      </p>
                    </div>
                  </div>

                  {/* Secondary Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {active.stats.map((st, i) => (
                      <div key={i} className="bg-slate-900/40 border border-slate-800/80 p-3.5 rounded-xl flex flex-col">
                        <span className="text-xs text-slate-400 font-medium mb-0.5">{st.label}</span>
                        <span className="text-base font-bold text-white">{st.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consult Button */}
                <div className="pt-2">
                  <motion.button
                    id={`industry-contact-${active.id}`}
                    onClick={onOpenContact}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r ${active.gradient} text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group`}
                  >
                    <span>Consult on {active.name}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>

              {/* Right Column: Capabilities Cards Grid (Span 5) */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 bg-slate-900/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-400" />
                      <span>Specialized Capabilities</span>
                    </h4>
                    <span className="text-xs text-slate-500">4 Core Modules</span>
                  </div>

                  {/* 4 Feature Items */}
                  <div className="space-y-3.5">
                    {active.solutions.map((sol, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.08 }}
                        className="group flex items-start gap-3.5 bg-slate-900/70 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 p-4 rounded-xl transition-all duration-200 shadow-sm"
                      >
                        <div className={`w-6 h-6 rounded-full ${active.badgeBg} flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug group-hover:text-white transition-colors">
                          {sol}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Quick Switcher Bar */}
                <div className="mt-8 pt-6 border-t border-slate-800/80">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Explore Other Verticals
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industries
                      .filter((i) => i.id !== activeId)
                      .map((ind) => {
                        const MiniIcon = ind.icon;
                        return (
                          <button
                            key={ind.id}
                            onClick={() => setActiveId(ind.id)}
                            className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 px-3 py-1.5 rounded-lg transition-all cursor-pointer"
                          >
                            <MiniIcon className="w-3.5 h-3.5 text-slate-400" />
                            <span>{ind.name}</span>
                          </button>
                        );
                      })}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
