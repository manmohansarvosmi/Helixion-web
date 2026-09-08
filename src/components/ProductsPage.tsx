import { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Building,
  Receipt,
  CheckCircle2,
  ArrowRight,
  Headphones,
  ChevronRight,
} from 'lucide-react';

import productImage from '../assetImage/productImage.png';

interface ProductsPageProps {
  onNavigateHome: () => void;
  onOpenProductModal: (productId: string) => void;
  onOpenContact: (productName?: string) => void;
}

export function ProductsPage({
  onNavigateHome,
  onOpenProductModal,
  onOpenContact,
}: ProductsPageProps) {
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
            
            {/* Card 1: School ERP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Preview: Tablet / Mobile UI on Soft Blue Backdrop */}
                <div className="lg:col-span-5 bg-[#e0f2fe]/60 rounded-xl p-5 sm:p-6 flex items-center justify-center relative overflow-hidden border border-blue-100">
                  {/* Tablet Interface Mockup */}
                  <div className="w-full bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden text-[10px] text-slate-700">
                    {/* Tablet Top Bar */}
                    <div className="bg-[#0f172a] text-white px-3 py-2 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2 font-semibold">
                        <GraduationCap className="w-3.5 h-3.5 text-[#38bdf8]" />
                        <span>School ERP Dashboard</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-slate-500" />
                        <span className="w-2 h-2 rounded-full bg-slate-500" />
                      </div>
                    </div>
                    
                    {/* Dashboard Metrics Grid */}
                    <div className="p-3 bg-slate-50/70 border-b border-slate-100 grid grid-cols-4 gap-2 text-center">
                      <div className="bg-white p-2 rounded border border-slate-200/80">
                        <span className="text-slate-400 block text-[9px]">Total Students</span>
                        <span className="font-bold text-slate-900 text-[12px]">1,250</span>
                      </div>
                      <div className="bg-white p-2 rounded border border-slate-200/80">
                        <span className="text-slate-400 block text-[9px]">Teachers</span>
                        <span className="font-bold text-slate-900 text-[12px]">85</span>
                      </div>
                      <div className="bg-white p-2 rounded border border-slate-200/80">
                        <span className="text-slate-400 block text-[9px]">Attendance</span>
                        <span className="font-bold text-emerald-600 text-[12px]">92%</span>
                      </div>
                      <div className="bg-white p-2 rounded border border-slate-200/80">
                        <span className="text-slate-400 block text-[9px]">Fee Collection</span>
                        <span className="font-bold text-[#0070f3] text-[12px]">85%</span>
                      </div>
                    </div>

                    {/* Chart Mockup Bar Graphic */}
                    <div className="p-3 bg-white flex flex-col gap-2">
                      <span className="text-[10px] font-semibold text-slate-700">Monthly Attendance Trends</span>
                      <div className="h-16 flex items-end justify-between gap-1.5 pt-2">
                        {[60, 75, 90, 85, 95, 92, 88].map((h, i) => (
                          <div key={i} className="flex-1 bg-blue-100 rounded-t flex items-end">
                            <div
                              style={{ height: `${h}%` }}
                              className="w-full bg-[#0070f3] rounded-t transition-all"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Phone Overlay Graphic */}
                  <div className="hidden sm:block absolute -bottom-4 -right-2 w-28 bg-slate-900 p-1 rounded-xl shadow-2xl border-2 border-slate-700">
                    <div className="bg-white rounded-lg p-2 text-[8px]">
                      <div className="w-6 h-1 bg-slate-300 rounded-full mx-auto mb-1.5" />
                      <span className="font-bold text-[#0070f3] block">Parent Portal</span>
                      <span className="text-slate-400 block text-[7px]">Daily Update</span>
                      <div className="mt-1 bg-emerald-50 text-emerald-700 p-1 rounded font-medium text-[7px]">
                        ✓ Attendance Marked
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  <div className="flex items-start justify-between w-full gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#eff6ff] text-[#0070f3] flex items-center justify-center shrink-0">
                        <GraduationCap className="w-7 h-7 stroke-[1.8]" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                          School ERP
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium">
                          Complete Digital Solution for Schools
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenProductModal('school-erp')}
                      className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#0070f3] text-[#0070f3] hover:bg-blue-50 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed my-4">
                    A comprehensive School ERP system to manage academic, administration, finance, communication, and more - all in one integrated platform.
                  </p>

                  {/* Feature Checkmark Chips */}
                  <div className="flex flex-wrap gap-2.5 my-2">
                    {[
                      'Student Management',
                      'Attendance',
                      'Exams & Marks',
                      'Fees Management',
                      'Timetable',
                      'Reports & Analytics',
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

                  {/* Mobile Learn More Button */}
                  <div className="mt-4 sm:hidden w-full">
                    <button
                      onClick={() => onOpenProductModal('school-erp')}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#0070f3] text-[#0070f3] hover:bg-blue-50 text-xs font-semibold"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
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

    </div>
  );
}
