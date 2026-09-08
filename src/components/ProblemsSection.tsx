import { motion } from 'motion/react';
import { TrendingDown, Database, ShieldAlert, TrendingUp } from 'lucide-react';

interface ProblemItem {
  id: string;
  title: string;
  description: string;
  icon: typeof TrendingDown;
}

const problems: ProblemItem[] = [
  {
    id: 'inefficient-operations',
    title: 'Inefficient Operations',
    description: 'Manual processes and outdated systems lead to delays, errors, and high costs.',
    icon: TrendingDown,
  },
  {
    id: 'data-silos',
    title: 'Data Silos',
    description: 'Scattered data across tools makes it hard to get real-time visibility and insights.',
    icon: Database,
  },
  {
    id: 'security-risks',
    title: 'Security Risks',
    description: 'Rising cyber threats and weak security measures put business data at risk.',
    icon: ShieldAlert,
  },
  {
    id: 'limited-scalability',
    title: 'Limited Scalability',
    description: 'Legacy systems and rigid solutions make it difficult to scale and innovate.',
    icon: TrendingUp,
  },
];

export function ProblemsSection() {
  return (
    <section id="challenges" className="w-full bg-white py-16 sm:py-20 border-b border-slate-100 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          <p className="text-sm font-semibold text-[#0070f3] tracking-wide mb-2.5">
            Today's Challenges. Real Impact.
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            The Problems Businesses Face Today
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            In a fast-changing world, businesses struggle with outdated systems, inefficient processes, and fragmented data.
          </p>
        </motion.div>

        {/* 4 Problem Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.id}
                id={`problem-card-${problem.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left group hover:border-blue-300 relative"
              >
                {/* Circular soft blue icon container */}
                <div className="w-12 h-12 rounded-full bg-[#eff6ff] flex items-center justify-center text-[#0070f3] mb-4 group-hover:bg-[#0070f3] group-hover:text-white transition-all duration-300 shadow-xs">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>

                {/* Problem Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#0070f3] transition-colors">
                  {problem.title}
                </h3>

                {/* Problem Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
