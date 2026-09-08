import { useState } from 'react';
import { X, Factory, HeartPulse, GraduationCap, ShoppingBag, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface IndustryModalProps {
  isOpen: boolean;
  selectedIndustry?: string;
  onClose: () => void;
  onOpenContact: () => void;
}

interface IndustryDetail {
  id: string;
  name: string;
  icon: any;
  summary: string;
  solutions: string[];
  impactMetric: string;
}

const industriesList: IndustryDetail[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing & Heavy Industry',
    icon: Factory,
    summary:
      'We empower smart factories with industrial IoT telemetry, predictive machinery maintenance, quality vision inspections, and unified shop-floor ERP integration.',
    solutions: [
      'Shop-Floor SCADA / MES Digitalization',
      'AI Vision-Based Defect Detection',
      'Predictive Equipment Maintenance Systems',
      'Multi-Plant Inventory & Material Traceability',
    ],
    impactMetric: '30% average reduction in equipment downtime for global manufacturing partners.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    icon: HeartPulse,
    summary:
      'HIPAA-compliant telehealth suites, clinical data orchestration platforms, diagnostic image analyzers, and secure patient EHR management systems.',
    solutions: [
      'Telemedicine & Remote Patient Monitoring Portals',
      'Electronic Health Records (EHR) Interoperability',
      'Diagnostic AI Support & Clinical Decision Engines',
      'Medical Device Integration & Compliance Audits',
    ],
    impactMetric: '99.99% uptime for critical clinical workflows across hospitals and health networks.',
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    icon: GraduationCap,
    summary:
      'Scalable Learning Management Systems (LMS), adaptive assessment engines, interactive virtual classrooms, and automated institutional governance tools.',
    solutions: [
      'Cloud-Native Multi-Tenant LMS Architecture',
      'AI Adaptive Learning Path Generators',
      'Live Video Lecture & Collaborative Whiteboards',
      'Student Information & Fee Management Portals',
    ],
    impactMetric: 'Supporting over 2.5 million active learners with real-time analytics.',
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    icon: ShoppingBag,
    summary:
      'Unified omnichannel commerce platforms, headless storefronts, intelligent recommendation engines, and dynamic supply chain replenishment algorithms.',
    solutions: [
      'Headless Commerce & Modern PWA Storefronts',
      'Real-Time Omnichannel Inventory Synchronization',
      'Personalized Recommendation & Loyalty Engines',
      'Point-of-Sale (POS) Modernization & Cloud Integration',
    ],
    impactMetric: '42% uplift in conversion rate through sub-second page performance.',
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    icon: Truck,
    summary:
      'End-to-end fleet tracking systems, route optimization algorithms, warehouse management software, and automated freight compliance portals.',
    solutions: [
      'Dynamic Route Planning & Fuel Optimization',
      'Automated Warehouse Management (WMS)',
      'Real-Time GPS Fleet Telematics & Dashboards',
      'Freight Rate Optimization & Customs Document Automation',
    ],
    impactMetric: '18% decrease in overall transit expenditure and route delays.',
  },
];

export function IndustryModal({
  isOpen,
  selectedIndustry = '',
  onClose,
  onOpenContact,
}: IndustryModalProps) {
  const [activeId, setActiveId] = useState<string>(() => {
    if (!selectedIndustry) return 'manufacturing';
    const match = industriesList.find(
      (ind) => ind.name.toLowerCase().includes(selectedIndustry.toLowerCase()) || ind.id === selectedIndustry.toLowerCase()
    );
    return match ? match.id : 'manufacturing';
  });

  if (!isOpen) return null;

  const current = industriesList.find((i) => i.id === activeId) || industriesList[0];
  const IconComponent = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#071326] text-white p-6 sm:p-8 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Sector Expertise
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              Industry Verticals & Digital Solutions
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selectors */}
        <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50 px-4 pt-2">
          {industriesList.map((item) => {
            const isActive = item.id === current.id;
            const TabIcon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'border-[#0070f3] text-[#0070f3] bg-white rounded-t-lg shadow-xs'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{item.name.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Body content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">{current.name}</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {current.summary}
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl text-xs font-semibold text-blue-900 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
            <span>Proven Metric: {current.impactMetric}</span>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Specialized Industry Capabilities
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {current.solutions.map((sol, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-800">{sol}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Request an industry case study or tailored demo
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="bg-[#0070f3] hover:bg-[#005ecb] text-white text-xs font-semibold px-4 py-2.5 rounded-lg inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Consult on {current.name.split('&')[0].trim()}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
