import type { Metadata } from 'next/types';
import { siteConfig } from '@/config/site';

export const SiteMetadata: Metadata = {
  generator: 'Next.js',
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],
  creator: siteConfig.author.name,
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    countryName: 'South Africa',
    emails: [siteConfig.author.email],
    determiner: 'auto',
    phoneNumbers: [siteConfig.author.phone],
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
    creator: '@mbatha_melusie',
  },
};
