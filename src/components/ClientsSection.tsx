import { motion } from 'motion/react';
import { Users } from 'lucide-react';
import { ClientLogo } from './ClientLogos';
import { ClientItem } from '../types';

import hotelAmbienceImg from '../assetImage/hotelambiencegwalior.png';
import ppsLaharImg from '../assetImage/ppslahar.png';
import siperImg from '../assetImage/siper.png';
import hotelKalpviewImg from '../assetImage/hotelkalpview.jpeg';

interface ClientsSectionProps {
  onViewAllClients: () => void;
  onSelectClient: (client: ClientItem) => void;
}

export const clientsData: ClientItem[] = [
  {
    id: 'hotel-ambience',
    name: 'Hotel Ambience Gwalior',
    image: hotelAmbienceImg,
    industry: 'Hospitality & Hotel Management',
    projectSnippet: 'Comprehensive hotel management system, online room reservation portal, and billing automation.',
    testimonial: {
      quote: 'Helixion Innovation transformed our hotel operations with a seamless booking and management system.',
      author: 'Management Team',
      designation: 'Hotel Ambience, Gwalior',
    },
  },
  {
    id: 'pps-lahar',
    name: 'PPS Lahar',
    image: ppsLaharImg,
    industry: 'Education & School Management',
    projectSnippet: 'Smart school ERP portal, student information system, and automated fee management platform.',
    testimonial: {
      quote: 'The customized school ERP system provided by Helixion has digitized our entire campus operations.',
      author: 'Principal & Management',
      designation: 'PPS Lahar',
    },
  },
  {
    id: 'siper',
    name: 'SIPER',
    image: siperImg,
    industry: 'Higher Education & Institution',
    projectSnippet: 'Higher education ERP suite, academic portal, and student management platform.',
    testimonial: {
      quote: 'Helixion engineered an exceptional campus portal that simplified academic management for our faculty and students.',
      author: 'Director & Board',
      designation: 'SIPER Group',
    },
  },
  {
    id: 'hotel-kalpview',
    name: 'Hotel Kalpview',
    image: hotelKalpviewImg,
    industry: 'Hospitality & Resort Management',
    projectSnippet: 'Digital reservation engine, guest check-in software, and inventory tracking.',
    testimonial: {
      quote: 'Our guest satisfaction and booking workflow improved drastically with Helixion’s software.',
      author: 'Operations Manager',
      designation: 'Hotel Kalpview',
    },
  },
];

export function ClientsSection({ onViewAllClients, onSelectClient }: ClientsSectionProps) {
  return (
    <section
      id="clients"
      className="relative py-20 bg-white text-slate-800 border-t border-slate-100 overflow-hidden select-none"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14"
        >
          <h2
            id="clients-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#071326] tracking-tight"
          >
            Our Trusted Clients
          </h2>
          {/* Blue underline accent bar */}
          <div className="w-12 h-1 bg-[#0070f3] mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* 4 Client Cards Grid */}
        <div
          id="client-logos-grid"
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 items-center justify-center max-w-5xl mx-auto"
        >
          {clientsData.map((client, index) => {
            return (
              <motion.div
                key={client.id}
                id={`client-card-${client.id}`}
                onClick={() => onSelectClient(client)}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                className="flex items-center justify-center p-3 cursor-pointer group transition-all duration-300"
                title={`Click to view ${client.name} details`}
              >
                {client.image ? (
                  <img
                    src={client.image}
                    alt={client.name}
                    className="max-h-24 sm:max-h-28 max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm rounded-xl"
                  />
                ) : (
                  <ClientLogo type={client.type as any} className="transition-transform duration-300 group-hover:scale-110" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* "View All Clients" Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <button
            id="view-all-clients-btn"
            onClick={onViewAllClients}
            className="border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 hover:text-[#0070f3] text-sm font-semibold px-6 py-3 rounded-xl shadow-xs transition-all duration-200 inline-flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>View All Clients</span>
            <Users className="w-4 h-4 text-[#0070f3]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
