import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  Building,
  Receipt,
  CheckCircle2,
  ArrowRight,
  Headphones,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  X,
  ExternalLink,
} from 'lucide-react';

import productImage from '../assetImage/productImage.png';
import erpDashboard from '../assetImage/erp-dashboard.png';
import erpFeeManagement from '../assetImage/erp-fee-management.jpg';
import erpTransport from '../assetImage/erp-transport.jpg';
import erpAccounts from '../assetImage/erp-accounts.jpg';

interface ProductsPageProps {
  onNavigateHome: () => void;
  onOpenProductModal: (productId: string) => void;
  onOpenContact: (productName?: string) => void;
}

const erpScreenshots = [
  {
    id: 'dashboard',
    label: 'Overview Dashboard',
    tag: 'Executive Suite',
    title: 'School Overview & Key Performance Metrics',
    desc: 'Live enrollment counters, daily attendance analytics, monthly fee collection, expense tracking & surplus charts.',
    image: erpDashboard,
  },
  {
    id: 'fees',
    label: 'Fee Management',
    tag: 'Financial Hub',
    title: 'Student Fee Management & Report Hub',
    desc: 'Detailed student fee records, payment percentages, defaulter tracking, discount rules and instant collection vouchers.',
    image: erpFeeManagement,
  },
  {
    id: 'transport',
    label: 'Transport & Fleet',
    tag: 'Logistics',
    title: 'Bus Route & Vehicle Fleet Management',
    desc: 'Comprehensive route definitions, vehicle tracking, driver allocation, stop planning, and student transport mapping.',
    image: erpTransport,
  },
  {
    id: 'accounts',
    label: 'Accounts & Ledger',
    tag: 'Audit Ready',
    title: 'Chart of Accounts & General Ledger Statements',
    desc: 'Real-time cash in hand, dual-bank reconciliation, expense heads, categorized credit/debit audit trails & reports.',
    image: erpAccounts,
  },
];

export function ProductsPage({
  onNavigateHome,
  onOpenProductModal,
  onOpenContact,
}: ProductsPageProps) {
  const [activeErpIndex, setActiveErpIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const activeErp = erpScreenshots[activeErpIndex];

  const handleNextErp = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveErpIndex((prev) => (prev + 1) % erpScreenshots.length);
  };

  const handlePrevErp = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveErpIndex((prev) => (prev - 1 + erpScreenshots.length) % erpScreenshots.length);
  };
  return (
    <div id="products-page" className="w-full flex flex-col select-none">
      
      {/* 1. Hero Banner Image */}
      <section className="relative w-full bg-[#071326] overflow-hidden">
        <img
          src={productImage}
          alt="Helixion Products"
          className="w-full h-auto block"
        />
      </section>

      {/* 2. Products Section Header */}
      <section id="products-catalog" className="w-full bg-[#f8fafc] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <p className="text-xs sm:text-sm font-semibold text-[#0070f3] tracking-wider uppercase mb-2">
              Our Products
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Smart Solutions for Every Need
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Helixion Innovation offers a range of cutting-edge products built to streamline processes, improve efficiency, and deliver exceptional results.
            </p>
          </motion.div>

          {/* Product Cards Stack */}
          <div className="flex flex-col space-y-10">
            
            {/* Card 1: School ERP (Comprehensive Showcase with Real Software Screenshots) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden p-6 sm:p-8"
            >
              {/* Product Header & Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] text-[#0070f3] flex items-center justify-center shrink-0 shadow-sm">
                    <GraduationCap className="w-8 h-8 stroke-[1.8]" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0070f3] text-xs font-semibold mb-1">
                      <span>Flagship Education Platform</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      School ERP
                    </h3>
                    <p className="text-sm text-slate-500 font-medium">
                      Complete Digital Ecosystem for Schools, Colleges & Multi-Branch Academies
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onOpenProductModal('school-erp')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#0070f3] text-[#0070f3] hover:bg-blue-50 text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenContact('School ERP Demo')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0070f3] hover:bg-[#005ecb] text-white text-sm font-semibold shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Request Live Demo</span>
                  </button>
                </div>
              </div>

              {/* Description & Feature Chips */}
              <div className="py-5">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                  A comprehensive, real-world tested School ERP platform deployed across top institutions. Built to manage 
                  academics, daily student & staff attendance, automated fee reconciliation, route transport tracking, and general ledger accounts in one unified web portal.
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {[
                    'Live Executive Dashboard',
                    'Student Fee & Dues Management',
                    'Automated Attendance & RFID',
                    'GPS Transport & Route Planning',
                    'Cash Book & General Ledger',
                    'Parent & Teacher Portal',
                  ].map((pill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0070f3]" />
                      <span>{pill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Real Software Screenshots Showcase */}
              <div className="mt-4 pt-6 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0070f3]" />
                      <span>Live Platform Previews</span>
                    </h4>
                    <p className="text-xs text-slate-500">
                      Actual software screens from Progressive Public School deployment
                    </p>
                  </div>

                  {/* Tab Pills to switch screenshots */}
                  <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-xl">
                    {erpScreenshots.map((item, idx) => {
                      const isActive = idx === activeErpIndex;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveErpIndex(idx)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                            isActive
                              ? 'bg-white text-[#0070f3] shadow-xs'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                          }`}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Screenshot Display Frame (Desktop Browser Mockup) */}
                <div className="relative rounded-2xl border border-slate-200/90 shadow-md bg-slate-900 overflow-hidden group">
                  {/* Browser Chrome Header */}
                  <div className="bg-[#0f172a] px-4 py-2.5 flex items-center justify-between border-b border-slate-800 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <span className="hidden sm:inline-block ml-3 px-3 py-0.5 rounded-md bg-slate-800/80 text-[11px] text-slate-300 font-mono">
                        https://portal.progressivepublicschool.edu/{activeErp.id}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-block px-2 py-0.5 text-[10px] uppercase font-bold rounded bg-blue-500/20 text-blue-300">
                        {activeErp.tag}
                      </span>
                      <button
                        onClick={() => setLightboxImage(activeErp.image)}
                        className="p-1 hover:text-white transition-colors cursor-pointer"
                        title="Click to view full image"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Image Viewport */}
                  <div
                    onClick={() => setLightboxImage(activeErp.image)}
                    className="relative cursor-zoom-in bg-slate-950 overflow-hidden aspect-[16/8.8] sm:aspect-[16/8.2] flex items-center justify-center"
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeErp.id}
                        src={activeErp.image}
                        alt={activeErp.title}
                        initial={{ opacity: 0, scale: 0.99 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                    </AnimatePresence>

                    {/* Navigation Arrow Overlays */}
                    <button
                      onClick={handlePrevErp}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm opacity-80 hover:opacity-100 transition-all cursor-pointer shadow-lg"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextErp}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm opacity-80 hover:opacity-100 transition-all cursor-pointer shadow-lg"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Hover hint */}
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-medium flex items-center gap-1.5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click to enlarge</span>
                    </div>
                  </div>

                  {/* Caption & Thumbnail bar */}
                  <div className="bg-slate-900/95 border-t border-slate-800 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
                    <div>
                      <h5 className="font-bold text-sm text-white">
                        {activeErp.title}
                      </h5>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {activeErp.desc}
                      </p>
                    </div>

                    {/* 4 Clickable Thumbnails */}
                    <div className="flex items-center gap-2 shrink-0">
                      {erpScreenshots.map((item, idx) => {
                        const isCurrent = idx === activeErpIndex;
                        return (
                          <button
                            key={item.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveErpIndex(idx);
                            }}
                            className={`relative rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                              isCurrent
                                ? 'border-[#0070f3] scale-105 shadow-md'
                                : 'border-slate-700 opacity-60 hover:opacity-100'
                            }`}
                            title={item.label}
                          >
                            <img
                              src={item.image}
                              alt={item.label}
                              className="w-14 h-9 object-cover object-top block"
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: HMSCloud (Smart Hotel Management Solution) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Preview: Hotel Management Dashboard on Soft Teal/Mint Backdrop */}
                <div className="lg:col-span-5 bg-[#ccfbf1]/60 rounded-xl p-5 sm:p-6 flex items-center justify-center relative overflow-hidden border border-teal-100">
                  <div className="w-full bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden text-[10px] text-slate-700">
                    {/* Top Bar */}
                    <div className="bg-[#0f172a] text-white px-3 py-2 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2 font-semibold">
                        <Building className="w-3.5 h-3.5 text-teal-400" />
                        <span>HMSCloud Hotel Suite</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-slate-500" />
                        <span className="w-2 h-2 rounded-full bg-slate-500" />
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="p-3 bg-slate-50/70 border-b border-slate-100 grid grid-cols-4 gap-2 text-center">
                      <div className="bg-white p-2 rounded border border-slate-200/80">
                        <span className="text-slate-400 block text-[9px]">Rooms</span>
                        <span className="font-bold text-slate-900 text-[12px]">125</span>
                      </div>
                      <div className="bg-white p-2 rounded border border-slate-200/80">
                        <span className="text-slate-400 block text-[9px]">Check In</span>
                        <span className="font-bold text-teal-600 text-[12px]">32</span>
                      </div>
                      <div className="bg-white p-2 rounded border border-slate-200/80">
                        <span className="text-slate-400 block text-[9px]">Check Out</span>
                        <span className="font-bold text-amber-600 text-[12px]">18</span>
                      </div>
                      <div className="bg-white p-2 rounded border border-slate-200/80">
                        <span className="text-slate-400 block text-[9px]">Occupancy</span>
                        <span className="font-bold text-teal-600 text-[12px]">78%</span>
                      </div>
                    </div>

                    {/* Room Booking Grid Mockup */}
                    <div className="p-3 bg-white flex flex-col gap-1.5">
                      <span className="text-[10px] font-semibold text-slate-700">Room Status Matrix</span>
                      <div className="grid grid-cols-6 gap-1 pt-1">
                        {[
                          'bg-emerald-500', 'bg-emerald-500', 'bg-red-400', 'bg-emerald-500', 'bg-amber-400', 'bg-emerald-500',
                          'bg-red-400', 'bg-emerald-500', 'bg-emerald-500', 'bg-emerald-500', 'bg-red-400', 'bg-emerald-500',
                        ].map((c, i) => (
                          <div key={i} className={`h-4 rounded ${c} opacity-80`} />
                        ))}
                      </div>
                      <div className="flex justify-between text-[8px] text-slate-400 pt-1">
                        <span>● Available</span>
                        <span>● Occupied</span>
                        <span>● Cleaning</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  <div className="flex items-start justify-between w-full gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-teal-600 flex items-center justify-center shrink-0">
                        <Building className="w-7 h-7 stroke-[1.8]" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                          HMSCloud
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium">
                          Smart Hotel Management Solution
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenProductModal('hms-cloud')}
                      className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-teal-600 text-teal-600 hover:bg-teal-50 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed my-4">
                    A cloud-based Hotel Management System that simplifies hotel operations, enhances guest experience, and boosts efficiency.
                  </p>

                  {/* Feature Checkmark Chips */}
                  <div className="flex flex-wrap gap-2.5 my-2">
                    {[
                      'Reservations',
                      'Front Desk',
                      'Housekeeping',
                      'Billing & Invoices',
                      'Reports',
                      'Multi-Property Management',
                    ].map((pill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                        <span>{pill}</span>
                      </span>
                    ))}
                  </div>

                  {/* Mobile Learn More Button */}
                  <div className="mt-4 sm:hidden w-full">
                    <button
                      onClick={() => onOpenProductModal('hms-cloud')}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-teal-600 text-teal-600 hover:bg-teal-50 text-xs font-semibold"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Card 3: Billing Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Preview: Billing Dashboard on Soft Orange/Peach Backdrop */}
                <div className="lg:col-span-5 bg-[#ffedd5]/60 rounded-xl p-5 sm:p-6 flex items-center justify-center relative overflow-hidden border border-orange-100">
                  <div className="w-full bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden text-[10px] text-slate-700">
                    {/* Top Bar */}
                    <div className="bg-[#0f172a] text-white px-3 py-2 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2 font-semibold">
                        <Receipt className="w-3.5 h-3.5 text-orange-400" />
                        <span>Billing & GST Invoicing</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-slate-500" />
                        <span className="w-2 h-2 rounded-full bg-slate-500" />
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="p-3 bg-slate-50/70 border-b border-slate-100 grid grid-cols-4 gap-2 text-center">
                      <div className="bg-white p-2 rounded border border-slate-200/80">
                        <span className="text-slate-400 block text-[9px]">Total Invoices</span>
                        <span className="font-bold text-slate-900 text-[12px]">1,840</span>
                      </div>
                      <div className="bg-white p-2 rounded border border-slate-200/80">
                        <span className="text-slate-400 block text-[9px]">Paid</span>
                        <span className="font-bold text-emerald-600 text-[12px]">1,250</span>
                      </div>
                      <div className="bg-white p-2 rounded border border-slate-200/80">
                        <span className="text-slate-400 block text-[9px]">Pending</span>
                        <span className="font-bold text-amber-600 text-[12px]">590</span>
                      </div>
                      <div className="bg-white p-2 rounded border border-slate-200/80">
                        <span className="text-slate-400 block text-[9px]">Revenue</span>
                        <span className="font-bold text-orange-600 text-[11px]">₹ 24,75,000</span>
                      </div>
                    </div>

                    {/* Invoice Bar Chart */}
                    <div className="p-3 bg-white flex flex-col gap-2">
                      <span className="text-[10px] font-semibold text-slate-700">Monthly Revenue Stream</span>
                      <div className="h-16 flex items-end justify-between gap-1.5 pt-2">
                        {[45, 65, 80, 70, 90, 85, 98].map((h, i) => (
                          <div key={i} className="flex-1 bg-orange-100 rounded-t flex items-end">
                            <div
                              style={{ height: `${h}%` }}
                              className="w-full bg-orange-500 rounded-t transition-all"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  <div className="flex items-start justify-between w-full gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#fff7ed] text-orange-600 flex items-center justify-center shrink-0">
                        <Receipt className="w-7 h-7 stroke-[1.8]" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                          Billing Management
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium">
                          Simplify Billing, Maximize Efficiency
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenProductModal('billing-management')}
                      className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-orange-500 text-orange-600 hover:bg-orange-50 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed my-4">
                    A powerful billing management system to create invoices, manage customers, track payments, and generate detailed reports with ease.
                  </p>

                  {/* Feature Checkmark Chips */}
                  <div className="flex flex-wrap gap-2.5 my-2">
                    {[
                      'Invoice Creation',
                      'Customer Management',
                      'Payment Tracking',
                      'GST Management',
                      'Reports',
                      'Multi-User Access',
                    ].map((pill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                        <span>{pill}</span>
                      </span>
                    ))}
                  </div>

                  {/* Mobile Learn More Button */}
                  <div className="mt-4 sm:hidden w-full">
                    <button
                      onClick={() => onOpenProductModal('billing-management')}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-orange-500 text-orange-600 hover:bg-orange-50 text-xs font-semibold"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. Call to Action Banner: Ready to Transform Your Business? */}
      <section className="w-full bg-[#071324] py-14 sm:py-16 text-white select-none border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Ready to Transform Your Business?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Explore our products and find the perfect solution that fits your needs.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenContact('Product Demo')}
                className="bg-[#0070f3] hover:bg-[#005ecb] active:scale-95 text-white font-semibold text-sm px-6 py-3.5 rounded-lg shadow-md hover:shadow-blue-500/20 inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenContact('Expert Consultation')}
                className="bg-transparent hover:bg-white/10 text-white border border-slate-600 hover:border-slate-400 font-medium text-sm px-6 py-3.5 rounded-lg inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Talk to Our Expert</span>
                <Headphones className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Image Preview Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div className="relative max-w-6xl w-full max-h-[92vh] flex flex-col items-center justify-center">
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-slate-300 transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={lightboxImage}
                alt="Enlarged Platform Preview"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl border border-slate-800"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
