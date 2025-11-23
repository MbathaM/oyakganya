import type { Metadata } from 'next';
import { Services } from '@/app/(pages)/_components/services';

export const metadata: Metadata = {
  title: 'Our Services - HR, Coaching & Training',
  description:
    'Comprehensive consulting services: Human Capital Management, Employment Equity Compliance, Executive Coaching, Skills Development, and Organisational Development.',
};

export default function ServicesPage() {
  return <Services />;
}
