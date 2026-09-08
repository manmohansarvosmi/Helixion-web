import { motion } from 'motion/react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Custom web, mobile, and enterprise applications built for performance.',
    iconName: 'code',
    fullDescription:
      'We engineer high-performance, fault-tolerant, and secure software applications tailored precisely to your enterprise requirements. From scalable web portals and microservices architectures to robust internal ERPs, our engineering team ensures clean code, modern UX, and longevity.',
    features: [
      'Custom Web & Enterprise Applications',
      'Microservices & REST / GraphQL API Architecture',
      'Legacy System Modernization & Migration',
      'Automated Quality Assurance & Testing',
    ],
    deliverables: [
      'Production-Ready Architecture',
      'Comprehensive Technical Documentation',
      'Automated CI/CD Pipelines',
      'Ongoing SLA Maintenance & Support',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Go', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Scalable cloud solutions and DevOps practices for continuous delivery.',
    iconName: 'cloud',
    fullDescription:
      'Accelerate your release cycles with automated infrastructure provisioning, container orchestration, and continuous integration pipelines. We design resilient multi-cloud and hybrid environments that scale effortlessly while optimizing cloud spend.',
    features: [
      'Cloud Architecture & Migration (AWS, Azure, GCP)',
      'Kubernetes & Container Orchestration',
      'Infrastructure as Code (Terraform, Pulumi)',
      'Automated CI/CD Pipelines & DevSecOps',
    ],
    deliverables: [
      'High-Availability Cloud Infrastructure',
      'Zero-Downtime Deployment Workflows',
      'Cloud Cost Optimization Audit',
      '24/7 Monitoring & Alerting Setup',
    ],
    techStack: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Kubernetes', 'Terraform', 'Docker', 'GitHub Actions'],
  },
  {
    id: 'mobile-solutions',
    title: 'Mobile Solutions',
    description: 'Native & cross-platform mobile apps that deliver seamless experiences.',
    iconName: 'smartphone',
    fullDescription:
      'Deliver fluid, responsive, and intuitive mobile experiences on both iOS and Android. Whether building high-fidelity native applications or cross-platform apps with shared logic, we guarantee peak mobile performance and offline resiliency.',
    features: [
      'Cross-Platform App Development (Flutter & React Native)',
      'Native iOS (Swift) & Android (Kotlin) Engineering',
      'Offline-First Sync & Background Processing',
      'App Store Optimization & Release Management',
    ],
    deliverables: [
      'Published App Store & Play Store Packages',
      'Cross-Platform UI/UX Component Library',
      'Push Notification & Analytics Integration',
      'End-to-End Security & Data Encryption',
    ],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
  },
  {
    id: 'data-analytics',
    title: 'Data & AI Analytics',
    description: 'Turn your raw enterprise data into predictive insights and actionable intelligence.',
    iconName: 'barChart',
    fullDescription:
      'Unlock the power of your enterprise data. We build centralized data warehouses, real-time ETL streaming pipelines, business intelligence dashboards, and custom machine learning models that enable data-driven decision-making across all operational layers.',
    features: [
      'Big Data Warehousing & Lakehouse Architecture',
      'Real-Time ETL / ELT Streaming Pipelines',
      'Custom Machine Learning & Predictive Modeling',
      'Interactive BI Dashboards & Executive Analytics',
    ],
    deliverables: [
      'Centralized Unified Data Warehouse',
      'Real-Time Automated Data Pipeline',
      'Custom Predictive Analytics Engine',
      'Executive KPI & Operational Dashboards',
    ],
    techStack: ['Python', 'PyTorch', 'Snowflake', 'Apache Spark', 'Databricks', 'Tableau', 'Power BI'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Enterprise-grade threat protection, compliance, and continuous monitoring.',
    iconName: 'shieldCheck',
    fullDescription:
      'Safeguard your digital assets and maintain customer trust. Our cybersecurity team conducts rigorous penetration testing, implements zero-trust architecture, manages SOC operations, and ensures full compliance with international data standards.',
    features: [
      'Zero-Trust Network Architecture',
      'Application Security & Penetration Testing',
      'Regulatory Compliance (GDPR, ISO 27001, HIPAA)',
      'Identity & Access Management (IAM)',
    ],
    deliverables: [
      'Full Vulnerability & Risk Assessment Report',
      'Zero-Trust Infrastructure Implementation',
      '24/7 Threat Detection & Incident Response',
      'ISO / GDPR Audit Compliance Certification',
    ],
    techStack: ['Palo Alto', 'CrowdStrike', 'Okta', 'Vault', 'Wireshark', 'Splunk', 'AWS Security Hub'],
  },
];

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="w-full bg-white py-16 sm:py-24 border-b border-slate-100 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p
            id="services-eyebrow"
            className="text-[#0070f3] font-bold text-sm tracking-wider uppercase mb-2"
          >
            What We Do
          </p>
          <h2
            id="services-title"
            className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight mb-4"
          >
            Our Core Services
          </h2>
          <p
            id="services-subtitle"
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            We provide end-to-end digital solutions and services to help businesses streamline operations, enhance efficiency, and drive growth.
          </p>
        </motion.div>

        {/* 5 Service Cards Grid */}
        <div
          id="services-cards-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch"
        >
          {servicesData.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => onSelectService(service)}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="group bg-white rounded-xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_-5px_rgba(0,112,243,0.18)] hover:border-blue-200 transition-all duration-300 flex flex-col items-center text-center cursor-pointer relative"
              >
                {/* Icon Container with Blue Outline Styling */}
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 text-[#0070f3] group-hover:scale-110 transition-transform duration-300">
                  {service.iconName === 'code' && (
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="6" width="40" height="28" rx="4" stroke="#0070f3" strokeWidth="2.5" />
                      <path d="M16 38 L32 38" stroke="#0070f3" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M24 34 L24 38" stroke="#0070f3" strokeWidth="2.5" />
                      <path d="M15 17 L11 20 L15 23" stroke="#0070f3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M33 17 L37 20 L33 23" stroke="#0070f3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26 15 L22 25" stroke="#0070f3" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                  )}

                  {service.iconName === 'cloud' && (
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 36 C8.686 36 6 33.314 6 30 C6 27.02 8.17 24.55 11.05 24.08 C11.02 23.72 11 23.36 11 23 C11 16.925 15.925 12 22 12 C26.786 12 30.85 15.067 32.35 19.38 C33.15 19.13 34.01 19 34.9 19 C39.37 19 43 22.63 43 27.1 C43 31.42 39.62 34.95 35.35 35"
                        stroke="#0070f3"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M24 23 L24 37" stroke="#0070f3" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M19 28 L24 23 L29 28" stroke="#0070f3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}

                  {service.iconName === 'smartphone' && (
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="12" y="4" width="24" height="40" rx="5" stroke="#0070f3" strokeWidth="2.5" />
                      <circle cx="24" cy="38" r="2" fill="#0070f3" />
                      <line x1="20" y1="9" x2="28" y2="9" stroke="#0070f3" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                  )}

                  {service.iconName === 'barChart' && (
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 40 L40 40" stroke="#0070f3" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="12" y="24" width="6" height="16" rx="1" stroke="#0070f3" strokeWidth="2.2" />
                      <rect x="22" y="16" width="6" height="24" rx="1" stroke="#0070f3" strokeWidth="2.2" />
                      <rect x="32" y="8" width="6" height="32" rx="1" stroke="#0070f3" strokeWidth="2.2" />
                      <path d="M14 18 L24 10 L34 4" stroke="#0070f3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M28 4 L34 4 L34 10" stroke="#0070f3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}

                  {service.iconName === 'shieldCheck' && (
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24 6 L38 12 V24 C38 33.5 24 42 24 42 C24 42 10 33.5 10 24 V12 L24 6 Z"
                        stroke="#0070f3"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 24 L22 29 L31 19"
                        stroke="#0070f3"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-[#0a192f] mb-3 group-hover:text-[#0070f3] transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More link hint */}
                <div className="mt-4 pt-3 text-xs font-semibold text-[#0070f3] opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details &rarr;
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
