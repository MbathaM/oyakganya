import { siteConfig } from "@/config/site";
import type { MetadataRoute } from 'next'
 
const path = siteConfig.navItems.map((nav: { href: string }) => nav.href);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...path.map((nav): MetadataRoute.Sitemap[number] => ({
      url: siteConfig.url + nav,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];

}
