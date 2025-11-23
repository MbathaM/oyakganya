import type { Metadata } from 'next';
import { Founder } from '@/app/(pages)/_components/founder';

export const metadata: Metadata = {
  title: 'Meet Our Founder - Onkabetse Mphako',
  description:
    'Onkabetse Mphako is a people-focused coach and HR professional dedicated to guiding individuals and organisations toward clarity, confidence, and strategic growth.',
};

export default function FounderPage() {
  return <Founder />;
}
