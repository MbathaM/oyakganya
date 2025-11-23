import type { Metadata } from 'next';
import { Contact } from '@/app/(pages)/_components/contact';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description:
    'Contact Oyakganya Consulting Hub in Rustenburg for your HR and leadership development needs. Phone, email, and address details available here.',
};

export default function ContactPage() {
  return <Contact />;
}
