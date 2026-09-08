import { motion } from 'motion/react';
import { ArrowRight, Settings, PieChart, ShieldCheck, Rocket } from 'lucide-react';

interface SmartSolutionsProps {
  onKnowMore: () => void;
}

const solutions = [
  {
    id: 'smarter-operations',
    title: 'Smarter Operations',
    description: 'Automate workflows and optimize processes to improve efficiency.',
    icon: Settings,
  },
  {
    id: 'unified-data-insights',
    title: 'Unified Data Insights',
    description: 'Bring your data together and make informed decisions with real-time insights.',
    icon: PieChart,
  },
  {
    id: 'secure-by-design',
    title: 'Secure by Design',
    description: 'Enterprise-grade security to protect your business and customer data.',
    icon: ShieldCheck,
  },
  {
    id: 'built-to-scale',
    title: 'Built to Scale',
    description: 'Scalable solutions that grow with your business and future needs.',
    icon: Rocket,
  },
];

export function SmartSolutionsSection({ onKnowMore }: SmartSolutionsProps) {
  return (
    <section id="smart-solutions" className="w-full bg-[#f8fafc] py-14 sm:py-16 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Combined Card Container with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          
          {/* Left Dark Navy Card (Span 4) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 bg-[#0a192f] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <p className="text-xs sm:text-sm font-semibold text-[#38bdf8] tracking-wider mb-3 uppercase">
                Our Solution. Your Advantage.
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4">
                We Build Smart Solutions That Drive Results
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8">
                Helixion Innovation helps businesses streamline operations, unlock data insights, strengthen security, and scale with confidence.
              </p>
            </div>

            <div className="relative z-10 pt-2">
              <motion.button
                id="smart-solutions-know-more-btn"
                onClick={onKnowMore}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#0070f3] hover:bg-[#005ecb] text-white font-medium text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-lg inline-flex items-center gap-2 transition-all duration-200 cursor-pointer group"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right 4 Pillars Grid (Span 8) */}
          <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex items-center bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-6 w-full">
              {solutions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    id={`solution-pillar-${item.id}`}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="flex flex-col items-start text-left p-3.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200 group"
                  >
                    {/* Blue Outline Icon */}
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center text-[#0070f3] mb-3.5 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-8 h-8 stroke-[1.6]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#0070f3] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
