import type { Metadata } from 'next';
import { WhyUs } from '@/app/(pages)/_components/why-us';

export const metadata: Metadata = {
  title: 'Competitive Advantage - Why Partner With Us',
  description:
    'Oyakganya Consulting Hub offers a holistic, human-centred approach, combining coaching psychology with HR compliance expertise.',
};

export default function WhyUsPage() {
  return <WhyUs />;
}
