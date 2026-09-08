import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, GraduationCap, Building2, Receipt, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductsModalProps {
  isOpen: boolean;
  selectedProductId?: string;
  onClose: () => void;
  onOpenContact: (productName?: string) => void;
}

const products: ProductItem[] = [
  {
    id: 'school-erp',
    name: 'School ERP',
    tagline: 'Comprehensive Campus Automation & Learning Management Suite',
    description:
      'An end-to-end digital infrastructure for modern educational institutions, unifying student lifecycle records, fee management, academic schedules, examinations, and guardian communication.',
    category: 'Education & EdTech',
    iconType: 'school',
    features: [
      'Student Information System & Digital Admission Portals',
      'Automated Biometric & RFID Attendance Tracking',
      'Online Fee Payment Gateway with Instant Receipts & Dues Reminders',
      'Timetable, Curriculum Planner & Teacher Workload Balancer',
      'Grading, Continuous Assessment & Custom Report Card Generation',
      'Dedicated Mobile App for Parents, Students & Faculty',
    ],
    benefits: [
      'Cuts administrative paperwork and admission processing time by 70%',
      'Eliminates cash management overhead with 100% digital fee collection',
      'Real-time academic performance alerts for guardians',
      'Cloud-hosted with bank-grade data security and automated daily backups',
    ],
  },
  {
    id: 'hms-cloud',
    name: 'HMSCloud',
    tagline: 'Next-Generation Cloud Hospital & Healthcare Management Platform',
    description:
      'A secure, HIPAA-compliant hospital operations system designed for multi-specialty hospitals, clinics, and diagnostic chains to optimize patient care and clinical workflows.',
    category: 'Healthcare & Clinical',
    iconType: 'hospital',
    features: [
      'Outpatient (OPD) & Inpatient (IPD) Admission & Bed Management',
      'Electronic Health Records (EHR) & Digital Prescription Engine',
      'Integrated Pharmacy Inventory, Batch Tracking & Expiry Alerts',
      'Diagnostic Pathology & Radiology LIMS with Barcoded Reports',
      'NABH/HIPAA Compliant Audit Trails & Role-Based Access Control',
      'Teleconsultation Video Engine & Online Appointment Booking',
    ],
    benefits: [
      'Accelerates OPD patient discharge and triage by over 50%',
      'Zero paper loss with centralized lifetime patient health records',
      'Prevents medication inventory stockouts with predictive reordering',
      'Seamless insurance claim & TPA settlement workflow',
    ],
  },
  {
    id: 'billing-management',
    name: 'Billing Management',
    tagline: 'Automated Invoicing, GST Compliance & Subscription Billing Engine',
    description:
      'Enterprise-grade recurring billing, automated tax invoicing, and receivables management software tailored for high-growth enterprises and subscription businesses.',
    category: 'Fintech & Enterprise',
    iconType: 'billing',
    features: [
      'Automated GST / VAT Invoicing with E-Way Bill & E-Invoice Integration',
      'Flexible Subscription Billing: Recurring, Usage-Based & Tiered',
      'Multi-Currency Support & Automated Payment Gateway Reconciliation',
      'Automated Dunning Management & Overdue Payment WhatsApp/Email Alerts',
      'Comprehensive Accounts Receivable & P&L Executive Dashboards',
      'Seamless Integration with SAP, Tally, Zoho & Custom REST APIs',
    ],
    benefits: [
      'Reduces Days Sales Outstanding (DSO) by 35% with smart reminders',
      '100% tax and regulatory compliance with automatic GST filing exports',
      'Real-time visibility into Monthly Recurring Revenue (MRR) and churn',
      'Frictionless automated payment reconciliation',
    ],
  },
];

export function ProductsModal({
  isOpen,
  selectedProductId = 'school-erp',
  onClose,
  onOpenContact,
}: ProductsModalProps) {
  const [activeTab, setActiveTab] = useState<string>(selectedProductId || 'school-erp');

  if (!isOpen) return null;

  const currentProduct = products.find((p) => p.id === activeTab) || products[0];

  const getProductIcon = (type: string) => {
    switch (type) {
      case 'school':
        return <GraduationCap className="w-6 h-6 text-[#0070f3]" />;
      case 'hospital':
        return <Building2 className="w-6 h-6 text-[#0070f3]" />;
      case 'billing':
        return <Receipt className="w-6 h-6 text-[#0070f3]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#0070f3]" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="bg-[#071324] text-white px-6 sm:px-8 py-6 flex items-center justify-between border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-blue-600/30 text-blue-400 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-blue-500/30">
                  Helixion Product Suite
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Enterprise Products & SaaS Solutions
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Product Tabs Bar */}
          <div className="flex border-b border-slate-200 bg-slate-50/80 px-6 overflow-x-auto scrollbar-none">
            {products.map((product) => {
              const isActive = activeTab === product.id;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`py-4 px-5 text-sm font-semibold whitespace-nowrap transition-all border-b-2 flex items-center gap-2.5 cursor-pointer ${
                    isActive
                      ? 'border-[#0070f3] text-[#0070f3] bg-white'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {getProductIcon(product.iconType)}
                  <span>{product.name}</span>
                </button>
              );
            })}
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-slate-700">
            <div className="flex flex-col gap-6">
              
              {/* Product Intro */}
              <div className="bg-blue-50/60 rounded-xl p-5 border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">
                    {currentProduct.name}
                  </h4>
                  <p className="text-sm text-[#0070f3] font-medium">
                    {currentProduct.tagline}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact(currentProduct.name);
                  }}
                  className="bg-[#0070f3] hover:bg-[#005ecb] active:scale-95 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-sm whitespace-nowrap inline-flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Request Live Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {currentProduct.description}
              </p>

              {/* Key Features Grid */}
              <div>
                <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3.5 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0070f3]" />
                  <span>Key Modules & Capabilities</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentProduct.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 rounded-lg p-3 border border-slate-200/70 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0070f3] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Business Benefits */}
              <div>
                <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3.5">
                  Business Value & ROI
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentProduct.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="bg-emerald-50/50 rounded-lg p-3 border border-emerald-200/60 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Footer Actions */}
          <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              Need custom customization for your enterprise? We tailor workflows to your specifications.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact(currentProduct.name);
                }}
                className="bg-[#0070f3] hover:bg-[#005ecb] text-white text-xs sm:text-sm font-medium px-5 py-2 rounded-lg shadow-sm transition-all"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
