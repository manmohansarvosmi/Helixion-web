import { useState } from 'react';
import { X, Building2, Quote, ArrowUpRight, Award } from 'lucide-react';
import { ClientLogo } from './ClientLogos';
import { clientsData } from './ClientsSection';
import { ClientItem } from '../types';

interface AllClientsModalProps {
  isOpen: boolean;
  selectedClient?: ClientItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function AllClientsModal({
  isOpen,
  selectedClient = null,
  onClose,
  onOpenContact,
}: AllClientsModalProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeClient, setActiveClient] = useState<ClientItem | null>(selectedClient);

  if (!isOpen) return null;

  const currentViewClient = activeClient || selectedClient || clientsData[0];

  const industries = ['all', 'Conglomerate & IT', 'Energy, Retail & Telecom', 'Global Information Technology', 'Automotive & Manufacturing', 'Steel, Power & Mining'];

  const filteredClients =
    activeFilter === 'all'
      ? clientsData
      : clientsData.filter((c) => c.industry.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(c.industry.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#030d1d] text-white p-6 sm:p-8 flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Enterprise Trust & Partnerships
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Our Esteemed Global Clients
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Powering transformation for India&apos;s and the world&apos;s leading industry titans.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Active Client Spotlight Feature */}
          {currentViewClient && (
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Logo container */}
                <div className="lg:col-span-4 bg-white rounded-xl h-32 flex flex-col items-center justify-center p-4 shadow-sm border border-slate-100">
                  {currentViewClient.image ? (
                    <img src={currentViewClient.image} alt={currentViewClient.name} className="max-h-24 w-auto object-contain" />
                  ) : (
                    <ClientLogo type={currentViewClient.type as any} />
                  )}
                </div>

                {/* Info and Testimonial */}
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {currentViewClient.industry}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" /> Verified Enterprise Partner
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {currentViewClient.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                    <strong className="text-slate-800">Engagement Focus: </strong>
                    {currentViewClient.projectSnippet}
                  </p>

                  {currentViewClient.testimonial && (
                    <div className="bg-white p-3.5 rounded-xl border border-slate-100 flex items-start gap-2.5">
                      <Quote className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs italic text-slate-700 font-medium leading-normal">
                          &ldquo;{currentViewClient.testimonial.quote}&rdquo;
                        </p>
                        <p className="text-[11px] text-slate-500 font-semibold mt-1">
                          — {currentViewClient.testimonial.author} ({currentViewClient.testimonial.designation})
                        </p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* All Logos Grid / Selector */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Select Client Profile
              </h4>
              <span className="text-xs text-slate-500">
                Click any partner to inspect engagement scope
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {clientsData.map((client) => {
                const isSelected = currentViewClient?.id === client.id;
                return (
                  <button
                    key={client.id}
                    onClick={() => setActiveClient(client)}
                    className={`bg-white rounded-xl p-3 h-24 flex flex-col items-center justify-center border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-600 ring-2 ring-blue-500/20 shadow-md scale-105'
                        : 'border-slate-200 hover:border-blue-300 hover:shadow'
                    }`}
                  >
                    {client.image ? (
                      <img src={client.image} alt={client.name} className="max-h-16 w-auto object-contain" />
                    ) : (
                      <ClientLogo type={client.type as any} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Callout */}
          <div className="bg-[#071324] text-white p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="font-bold text-sm text-white">
                Ready to join industry leaders partnering with Helixion?
              </h5>
              <p className="text-xs text-slate-300">
                Schedule a confidential architecture briefing with our principal consultants.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="bg-[#0070f3] hover:bg-[#005ecb] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shrink-0 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
