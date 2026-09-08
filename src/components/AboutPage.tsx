import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Users,
  Eye,
  Target,
  BarChart3,
  Users2,
  TrendingUp,
  ShieldCheck,
  Globe,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { Logo } from './Logo';
import mapImage from '../assetImage/mapImage.png';
import aboutImage from '../assetImage/aboutImage.png';
import helixionOfficeSmall from '../assetImage/helixion_office_small.png';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenContact: (subject?: string) => void;
}

export function AboutPage({ onNavigateHome, onOpenContact }: AboutPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 4000);
    }, 600);
  };

  return (
    <div id="about-us-page" className="w-full flex flex-col select-none">
      
      {/* 1. Hero Banner Image */}
      <section className="relative w-full bg-[#071326] overflow-hidden">
        <img
          src={aboutImage}
          alt="About Helixion Innovation"
          className="w-full h-auto block"
        />
      </section>

      {/* 2. Section: Our Story */}
      <section id="our-story" className="w-full bg-white py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title with Underline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Our Story
            </h2>
            <div className="w-12 h-1 bg-[#0070f3] mx-auto rounded-full" />
          </motion.div>

          {/* Two Column Layout: Text & Stats on Left, Office Scene on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: How We Started */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-6 flex flex-col items-start text-left"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                How We Started
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Helixion Innovation was founded with a simple idea – to use technology to solve real-world problems and help businesses grow.
              </p>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                What started as a small team of enthusiastic developers has grown into a trusted digital solutions company serving clients across industries.
              </p>

              {/* 2 Metric Stats Cards */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
                {/* Founded In Box */}
                <div className="bg-slate-50/80 rounded-xl p-4 sm:p-5 border border-slate-200/80 flex items-center gap-3.5 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
                  <div className="w-11 h-11 rounded-lg bg-blue-100/70 text-[#0070f3] flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-500">
                      Founded In
                    </span>
                    <span className="block text-xl sm:text-2xl font-extrabold text-slate-900">
                      2022
                    </span>
                  </div>
                </div>

                {/* Team Strength Box */}
                <div className="bg-slate-50/80 rounded-xl p-4 sm:p-5 border border-slate-200/80 flex items-center gap-3.5 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
                  <div className="w-11 h-11 rounded-lg bg-blue-100/70 text-[#0070f3] flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-500">
                      Team Strength
                    </span>
                    <span className="block text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                      25+
                    </span>
                    <span className="block text-[11px] text-slate-500 font-medium">
                      Professionals
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Helixion Office Small Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                <img
                  src={helixionOfficeSmall}
                  alt="Helixion Office"
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300 block"
                />
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. Section: Our Vision & Mission */}
      <section id="vision-mission" className="w-full bg-[#f8fafc] py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title with Underline */}
          <div className="text-center mb-12 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Our Vision & Mission
            </h2>
            <div className="w-12 h-1 bg-[#0070f3] mx-auto rounded-full" />
          </div>

          {/* 2 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card 1: Our Vision */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row items-start gap-5 group"
            >
              {/* Circular Soft Blue Badge with Eye Icon */}
              <div className="w-14 h-14 rounded-full bg-[#eff6ff] text-[#0070f3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                <Eye className="w-7 h-7 stroke-[1.8]" />
              </div>
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To be a global leader in delivering innovative digital solutions that empower businesses and enrich lives.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row items-start gap-5 group"
            >
              {/* Circular Soft Blue Badge with Target Icon */}
              <div className="w-14 h-14 rounded-full bg-[#eff6ff] text-[#0070f3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                <Target className="w-7 h-7 stroke-[1.8]" />
              </div>
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  Our Mission
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To deliver high-quality, customer-centric, and future-ready solutions through innovation, integrity, and excellence.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 4. Section: The Impact We Create */}
      <section id="impact-section" className="w-full bg-white py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              The Impact We Create
            </h2>
          </div>

          {/* 5 Impact Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 lg:gap-6">
            
            {/* 1. Operational Efficiency */}
            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-slate-50/80 transition-colors">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-[#0070f3] mb-3.5">
                <BarChart3 className="w-7 h-7 stroke-[1.8]" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                Operational Efficiency
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-[200px]">
                We help businesses automate and streamline operations for maximum efficiency.
              </p>
            </div>

            {/* 2. Better Decision Making */}
            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-slate-50/80 transition-colors">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-[#0070f3] mb-3.5">
                <Users2 className="w-7 h-7 stroke-[1.8]" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                Better Decision Making
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-[200px]">
                Our data-driven solutions enable smarter insights and better decisions.
              </p>
            </div>

            {/* 3. Business Growth */}
            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-slate-50/80 transition-colors">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-[#0070f3] mb-3.5">
                <TrendingUp className="w-7 h-7 stroke-[1.8]" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                Business Growth
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-[200px]">
                Scalable solutions that fuel growth and open new opportunities.
              </p>
            </div>

            {/* 4. Digital Transformation */}
            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-slate-50/80 transition-colors">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-[#0070f3] mb-3.5">
                <ShieldCheck className="w-7 h-7 stroke-[1.8]" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                Digital Transformation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-[200px]">
                We drive digital adoption and help businesses stay ahead in a competitive world.
              </p>
            </div>

            {/* 5. Industry Impact */}
            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-slate-50/80 transition-colors">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-[#0070f3] mb-3.5">
                <Globe className="w-7 h-7 stroke-[1.8]" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                Industry Impact
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-[200px]">
                We create solutions that bring positive and measurable impact across industries.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Section: Get In Touch & Send Us a Message */}
      <section id="contact-banner" className="w-full bg-[#f8fafc] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Get In Touch with World Map Dot Matrix */}
            <div className="lg:col-span-5 flex flex-col items-start text-left relative">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
                Get In Touch
              </h2>

              {/* Contact Information List with Blue Outline Icons */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 w-full relative z-10 mb-8">
                {/* Office */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0070f3] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Our Office</span>
                    <span className="text-slate-600">Indore, Madhya Pradesh, India</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0070f3] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Phone</span>
                    <a href="tel:+919998887776" className="text-slate-600 hover:text-[#0070f3] transition-colors">
                      +91 999 888 7776
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0070f3] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Email</span>
                    <a href="mailto:info@helixioninnovation.com" className="text-slate-600 hover:text-[#0070f3] transition-colors">
                      info@helixioninnovation.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0070f3] flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Website</span>
                    <a href="https://helixioninnovation.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#0070f3] transition-colors">
                      www.helixioninnovation.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Real World Map Image with Marker */}
              <div className="relative w-full overflow-hidden rounded-xl border border-slate-200/60 bg-slate-50">
                <img
                  src={mapImage}
                  alt="Global Presence Map"
                  className="w-full h-auto block"
                />
                {/* Animated ping marker on India */}
                <div className="absolute top-[54%] left-[68%] -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute w-5 h-5 rounded-full bg-blue-500/30 animate-ping" />
                  <div className="w-4 h-4 rounded-full bg-[#0070f3] border-2 border-white shadow-lg" />
                </div>
              </div>

            </div>

            {/* Right Column: Send Us a Message Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm text-left">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-blue-50 border border-blue-200 text-center flex flex-col items-center justify-center gap-3">
                  <CheckCircle2 className="w-12 h-12 text-[#0070f3]" />
                  <h4 className="text-lg font-bold text-slate-900">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-600 max-w-md">
                    Thank you for reaching out to Helixion Innovation. Our team will get back to you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0070f3]/20 focus:border-[#0070f3] transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0070f3]/20 focus:border-[#0070f3] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0070f3]/20 focus:border-[#0070f3] transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0070f3]/20 focus:border-[#0070f3] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div>
                    <textarea
                      rows={4}
                      required
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0070f3]/20 focus:border-[#0070f3] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#0070f3] hover:bg-[#005ecb] active:scale-95 text-white font-semibold text-sm px-7 py-3 rounded-lg shadow-sm hover:shadow inline-flex items-center gap-2 transition-all cursor-pointer disabled:opacity-70"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
