import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  regNo: string;
  vatNo: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  position: string;
  company?: string;
}