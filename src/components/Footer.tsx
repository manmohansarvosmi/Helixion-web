import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Globe, Linkedin, Facebook, Twitter, Youtube } from 'lucide-react';
import helixionLogo from '../assetImage/Helixion_logo.png';

interface FooterProps {
  onOpenContact: () => void;
  onOpenAbout: () => void;
  onOpenCareers: () => void;
  onOpenProducts: (productId?: string) => void;
  onSelectService: (serviceId: string) => void;
  onSelectIndustry?: (industryName: string) => void;
}

export function Footer({
  onOpenContact,
  onOpenAbout,
  onOpenCareers,
  onOpenProducts,
  onSelectService,
}: FooterProps) {
  return (
    <footer id="main-footer" className="relative bg-[#071324] text-slate-400 border-t border-slate-800/80 pt-16 pb-0 select-none overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >

        {/* 5-Column Grid: 3+2+2+2+3 = 12 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-14 border-b border-slate-800/60">

          {/* Column 1: Brand & Bio (4 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col items-start pr-0 lg:pr-4">
            <div className="flex items-center gap-2 mb-4 cursor-pointer select-none" onClick={onOpenAbout}>
              <img
                src={helixionLogo}
                alt="Helixion Innovation Logo"
                className="w-8 h-8 object-contain flex-shrink-0"
              />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[18px] text-white tracking-tight leading-tight">
                  Helixion
                </span>
                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-blue-300/90">
                  INNOVATION
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Helixion Innovation is a technology company focused on delivering innovative digital solutions across industries. We turn ideas into impactful products.
            </p>

            {/* Social Icons (LinkedIn, Facebook, Twitter, YouTube) */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-linkedin"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#0070f3] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Helixion on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-facebook"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#0070f3] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Helixion on Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-twitter"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#0070f3] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Helixion on Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-youtube"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#0070f3] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Helixion on YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Company (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm sm:text-base mb-4 tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Products (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm sm:text-base mb-4 tracking-wide">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onOpenProducts('school-erp')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  School ERP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenProducts('hms-cloud')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  HMSCloud
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenProducts('billing-management')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Billing Management
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Services (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm sm:text-base mb-4 tracking-wide">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onSelectService('software-development')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Software Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('cloud-devops')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Cloud & DevOps
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('mobile-solutions')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Mobile Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('data-analytics')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Data & Analytics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectService('it-consulting')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  IT Consulting
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm sm:text-base mb-4 tracking-wide">
              Contact Info
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Gwalior, Madhya Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+919998887776" className="hover:text-blue-400 transition-colors whitespace-nowrap">
                  +91 7880111641,+91 7756909607
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:info@helixioninnovation.com"
                  className="hover:text-blue-400 transition-colors"
                  style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                >
                  info@helixioninnovation.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="https://helixioninnovation.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  www.helixioninnovation.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2025 Helixion Innovation. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenAbout} className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </button>
            <button onClick={onOpenAbout} className="hover:text-slate-400 transition-colors">
              Terms of Service
            </button>
          </div>
        </div>

      </motion.div>

      {/* Large HELIXION Brand Watermark - Mightium style full bleed */}
      <div
        className="w-full select-none pointer-events-none overflow-hidden"
        style={{ marginTop: '32px', lineHeight: 1 }}
      >
        <div
          style={{
            fontFamily: '"Plus Jakarta Sans", "Inter", "Helvetica Neue", Arial, sans-serif',
            fontSize: '20vw',
            fontWeight: 900,
            letterSpacing: '-0.01em',
            lineHeight: 0.85,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            background: 'linear-gradient(180deg, #4a8ec2 0%, #2d6090 25%, #1a3d5c 55%, #0d2338 80%, #071324 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            userSelect: 'none',
          }}
        >
          HELIXION
        </div>
      </div>
    </footer>
  );
}
