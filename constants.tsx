
import React from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  GraduationCap, 
  Truck, 
  Sprout, 
  Utensils, 
  Building2,
  Settings,
  Layers,
  BarChart3,
  Server
} from 'lucide-react';
import { Product, Service, Industry, TechItem } from './types';

export const COMPANY_NAME = "Helixion Innovation LLP";
export const TAGLINE = "Architecting the Future of Enterprise Technology";
export const LOCATION = "Pune, Maharashtra, India";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Helixion transformed our fragmented logistics into a streamlined, AI-powered operation. Their domain expertise in Supply Chain is unmatched.",
    author: "Rajesh Malhotra",
    title: "Operations Director",
    company: "LogiCore India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: '2',
    quote: "The Edu-Core ERP has drastically reduced our administrative burden. Teachers can now focus on students while the system handles the rest.",
    author: "Dr. Sunita Deshpande",
    title: "Principal",
    company: "Global Vision Academy",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: '3',
    quote: "Working with Helixion felt like having a dedicated tech co-founder. They didn't just build an app; they built our business future.",
    author: "Amit Khurana",
    title: "CEO",
    company: "AgriNet Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'school-erp',
    title: 'Helixion Edu-Core',
    description: 'A comprehensive ERP system for modern educational institutions, unifying administrators, teachers, and students.',
    features: ['Student Information System', 'Automated Fee Management', 'Exam & Grading Engine', 'Attendance Tracking', 'Parent Communication Portal'],
    icon: <GraduationCap className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'supply-chain',
    title: 'LogiFlow Supply Chain',
    description: 'Streamline raw material procurement and logistics with our integrated inventory tracking and vendor management suite.',
    features: ['Real-time Inventory Tracking', 'Vendor Procurement Portal', 'Warehouse Analytics', 'Logistics Integration', 'Smart Restocking Alerts'],
    icon: <Truck className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'agri-tech',
    title: 'AgriConnect Hub',
    description: 'Empowering the agricultural sector by bridging the gap between farmers and business enterprises with data-driven tools.',
    features: ['Farmer-to-Business Marketplace', 'Crop Health Monitoring', 'Supply Prediction Models', 'Direct Procurement Workflow', 'Regional Price Analytics'],
    icon: <Sprout className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1495107336281-19d4f1a419f7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'restaurant-ms',
    title: 'DineDash Pro',
    description: 'An all-in-one restaurant management platform designed to optimize operations from table booking to billing.',
    features: ['Dynamic Table Management', 'Kitchen Display System (KDS)', 'Inventory & Waste Tracking', 'Centralized Billing', 'Detailed Sales Analytics'],
    icon: <Utensils className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'custom-dev',
    title: 'Custom Software Development',
    description: 'Tailored solutions built to address specific business challenges and drive operational efficiency.',
    icon: <Code className="w-6 h-6" />
  },
  {
    id: 'web-apps',
    title: 'Web Application Development',
    description: 'High-performance, scalable web platforms using the latest frameworks and cloud-native architectures.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Intuitive iOS and Android applications that deliver exceptional user experiences.',
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    id: 'enterprise-sol',
    title: 'Enterprise Solutions',
    description: 'Modernizing legacy systems and integrating complex enterprise workflows.',
    icon: <Building2 className="w-6 h-6" />
  },
  {
    id: 'saas-prod',
    title: 'SaaS Product Development',
    description: 'Building multi-tenant, secure, and scalable SaaS products for the global market.',
    icon: <Layers className="w-6 h-6" />
  },
  {
    id: 'sys-integration',
    title: 'System Integration',
    description: 'Seamlessly connecting disparate software systems to ensure data consistency.',
    icon: <Settings className="w-6 h-6" />
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'supply-chain-ind',
    title: 'Supply Chain & Logistics',
    description: 'Optimizing the movement of goods through intelligent tracking and predictive logistics.',
    icon: <Truck className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'education-ind',
    title: 'Education',
    description: 'Digitizing administrative workflows and enhancing the learning experience for all stakeholders.',
    icon: <GraduationCap className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'agri-ind',
    title: 'Agriculture',
    description: 'Harnessing technology to improve yield tracking and farmer-to-market connectivity.',
    icon: <Sprout className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'food-ind',
    title: 'Restaurant & Food Tech',
    description: 'Streamlining guest management and kitchen operations for the hospitality industry.',
    icon: <Utensils className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'banking-ind',
    title: 'Banking & Finance',
    description: 'Securing transactions and automating financial workflows with enterprise-grade reliability.',
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />
  }
];

export const TECHNOLOGIES: TechItem[] = [
  { name: 'Java', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'Cloud' },
  { name: 'Kubernetes', category: 'Cloud' },
  { name: 'CI/CD Pipelines', category: 'Cloud' }
];
