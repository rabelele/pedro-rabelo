import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Differentiator {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CaseStudy {
  id: number;
  client: string;
  result: string;
  investment: string;
  detail: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  type: 'video' | 'text';
}
