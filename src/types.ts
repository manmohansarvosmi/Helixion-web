export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'code' | 'cloud' | 'smartphone' | 'barChart' | 'shieldCheck';
  fullDescription?: string;
  features?: string[];
  deliverables?: string[];
  techStack?: string[];
}

export interface ClientItem {
  id: string;
  name: string;
  type?: string;
  image?: string;
  logoText?: string;
  industry: string;
  projectSnippet?: string;
  testimonial?: {
    quote: string;
    author: string;
    designation: string;
  };
}

export interface HeroSlide {
  id: number;
  badge?: string;
  titleLine1: string;
  titleLine2: string;
  tagline?: string;
  description: string;
  ctaText: string;
  ctaAction: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  features: string[];
  benefits: string[];
  iconType: 'school' | 'hospital' | 'billing';
}
