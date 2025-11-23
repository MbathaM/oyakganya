import type { Metadata } from 'next';
import { About } from '@/app/(pages)/_components/about';

export const metadata: Metadata = {
  title: 'About Us - Transformation-Driven Consulting',
  description:
    'Oyakganya Consulting Hub is dedicated to elevating individuals and organisations through clarity, confidence, and strategic intention.',
};

export default function AboutPage() {
  return <About />;
}
