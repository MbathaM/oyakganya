import type { Metadata } from 'next';
import { Testimonials } from '@/app/(pages)/_components/testimonials';

export const metadata: Metadata = {
  title: 'Client Success Stories & Testimonials',
  description:
    "Discover how Oyakganya Consulting Hub has transformed leadership, HR compliance, and organisational culture for our satisfied clients.",
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
