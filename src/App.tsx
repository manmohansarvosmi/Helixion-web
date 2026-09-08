import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemsSection } from './components/ProblemsSection';
import { SmartSolutionsSection } from './components/SmartSolutionsSection';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ClientsSection } from './components/ClientsSection';
import { AboutPage } from './components/AboutPage';
import { ProductsPage } from './components/ProductsPage';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { AllClientsModal } from './components/AllClientsModal';
import { CareersModal } from './components/CareersModal';
import { IndustryModal } from './components/IndustryModal';
import { ProductsModal } from './components/ProductsModal';
import { ServiceItem, ClientItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'products'>('home');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Modals state
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedContactService, setSelectedContactService] = useState<string>('');
  
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isAllClientsOpen, setIsAllClientsOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<ClientItem | null>(null);
  const [isCareersOpen, setIsCareersOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [selectedIndustryName, setSelectedIndustryName] = useState<string>('');
  
  // Products modal state
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string>('school-erp');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'about') {
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'products') {
      setCurrentPage('products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'services') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById('services');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (sectionId === 'clients') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById('clients');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        const el = document.getElementById('clients');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (sectionId === 'industries') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById('industries');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        const el = document.getElementById('industries');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenAboutPage = () => {
    setActiveSection('about');
    setCurrentPage('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductsPage = (productId?: string) => {
    setActiveSection('products');
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (productId) {
      setSelectedProductId(productId);
    }
  };

  const handleOpenContact = (serviceOrProductName?: string) => {
    setSelectedContactService(serviceOrProductName || '');
    setIsContactOpen(true);
  };

  const handleOpenProductModal = (productId: string) => {
    setSelectedProductId(productId);
    setIsProductsOpen(true);
  };

  const handleSelectIndustry = (name: string) => {
    setSelectedIndustryName(name);
    setIsIndustryOpen(true);
  };

  // Determine current active navigation link
  const currentActive = currentPage !== 'home' ? currentPage : activeSection;

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#0070f3] selection:text-white">
      {/* Header / Navbar */}
      <Header
        activeSection={currentActive}
        onNavigate={handleNavigate}
        onOpenContact={() => handleOpenContact()}
        onOpenAbout={handleOpenAboutPage}
        onOpenCareers={() => setIsCareersOpen(true)}
        onOpenProducts={() => handleOpenProductsPage()}
      />

      {/* Main Content: Home Page, About Us Page, or Products Page */}
      <main className="flex-1 flex flex-col">
        {currentPage === 'about' ? (
          <AboutPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenContact={(subject) => handleOpenContact(subject)}
          />
        ) : currentPage === 'products' ? (
          <ProductsPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenProductModal={handleOpenProductModal}
            onOpenContact={(productName) => handleOpenContact(productName)}
          />
        ) : (
          <>
            {/* 1. Hero Section */}
            <Hero
              onExplore={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenContact={() => handleOpenContact()}
            />

            {/* 2. Today's Challenges. Real Impact. (The Problems Businesses Face Today) */}
            <ProblemsSection />

            {/* 3. Our Solution. Your Advantage. (We Build Smart Solutions That Drive Results) */}
            <SmartSolutionsSection
              onKnowMore={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 4. Industries We Serve */}
            <IndustriesSection
              onOpenContact={() => handleOpenContact()}
            />

            {/* 5. What We Do (Solutions Across Industries) */}
            <ServicesSection
              onSelectService={(service) => setSelectedService(service)}
            />

            {/* 5. Our Trusted Clients */}
            <ClientsSection
              onViewAllClients={() => {
                setSelectedClient(null);
                setIsAllClientsOpen(true);
              }}
              onSelectClient={() => {}}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => handleOpenContact()}
        onOpenAbout={handleOpenAboutPage}
        onOpenCareers={() => setIsCareersOpen(true)}
        onOpenProducts={(productId) => handleOpenProductsPage(productId)}
        onSelectService={(serviceId) => {
          if (currentPage !== 'home') {
            setCurrentPage('home');
            setTimeout(() => {
              const el = document.getElementById('services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          } else {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onSelectIndustry={handleSelectIndustry}
      />

      {/* Modals & Dialogs */}
      <ProductsModal
        isOpen={isProductsOpen}
        selectedProductId={selectedProductId}
        onClose={() => setIsProductsOpen(false)}
        onOpenContact={(productName) => handleOpenContact(productName)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService={selectedContactService}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceId) => handleOpenContact(serviceId)}
      />

      <AllClientsModal
        isOpen={isAllClientsOpen}
        selectedClient={selectedClient}
        onClose={() => setIsAllClientsOpen(false)}
        onOpenContact={() => handleOpenContact()}
      />

      <CareersModal
        isOpen={isCareersOpen}
        onClose={() => setIsCareersOpen(false)}
        onOpenContact={() => handleOpenContact()}
      />

      <IndustryModal
        isOpen={isIndustryOpen}
        selectedIndustry={selectedIndustryName}
        onClose={() => setIsIndustryOpen(false)}
        onOpenContact={() => handleOpenContact()}
      />
    </div>
  );
}
