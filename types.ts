
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TechItem {
  name: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'Cloud';
}