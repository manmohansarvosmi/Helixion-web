import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall } from 'lucide-react';
import helixionLogo from '../assetImage/Helixion_logo.png';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
  onOpenAbout: () => void;
  onOpenCareers: () => void;
  onOpenProducts: () => void;
}

export function Header({
  activeSection,
  onNavigate,
  onOpenContact,
  onOpenAbout,
  onOpenCareers,
  onOpenProducts,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', action: () => onNavigate('home') },
    { name: 'About Us', id: 'about', action: () => onOpenAbout() },
    { name: 'Products', id: 'products', action: () => onOpenProducts() },
    { name: 'Services', id: 'services', action: () => onNavigate('services') },
    { name: 'Industries', id: 'industries', action: () => onNavigate('industries') },
    { name: 'Our Clients', id: 'clients', action: () => onNavigate('clients') },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071326]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            id="nav-logo-btn"
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center text-left focus:outline-none group cursor-pointer"
            aria-label="Helixion Innovation Home"
          >
            <div className="flex items-center gap-2 select-none">
              <img
                src={helixionLogo}
                alt="Helixion Innovation Logo"
                className="w-8 h-8 object-contain flex-shrink-0 transition-transform group-hover:scale-110"
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
          </motion.button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={link.action}
                  className={`relative text-sm font-medium transition-colors duration-200 cursor-pointer py-1 ${
                    isActive
                      ? 'text-[#38bdf8] font-semibold'
                      : 'text-white/90 hover:text-[#38bdf8]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="headerActiveIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#38bdf8] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Contact Us Button */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              id="header-contact-btn"
              onClick={onOpenContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0070f3] hover:bg-[#005ecb] text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Us</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <motion.button
              id="mobile-contact-quick-btn"
              onClick={onOpenContact}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0070f3] text-white text-xs font-medium px-3 py-2 rounded-lg"
            >
              Contact
            </motion.button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#071326]/98 border-b border-white/10 px-4 pt-3 pb-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => {
                      link.action();
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-900/40 text-[#38bdf8] font-semibold'
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}

              <div className="pt-2 border-t border-white/10">
                <button
                  id="mobile-drawer-contact-btn"
                  onClick={() => {
                    onOpenContact();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#0070f3] text-white font-medium py-3 px-4 rounded-lg text-center shadow flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
