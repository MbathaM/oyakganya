"use client";

import  Link  from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function SiteFooter() {
  const addressText = `${siteConfig.address.building}, ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.province} ${siteConfig.address.postcode}, ${siteConfig.address.country}`;
  return (
    <footer className="bg-primary-dark text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            {/* <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-accent flex items-center justify-center text-primary font-serif font-bold text-xl rounded-sm">O</div>
                <span className="text-white font-serif font-bold text-xl tracking-wide">OYAKGANYA</span>
            </div> */}
             <img
              src="/logo2.png"
              alt="Oyakganya Logo"
              className="w-42 h-12 mb-6"
            />
            <p className="mb-6 text-sm leading-relaxed max-w-md">
              Empowering Potential. Transforming Futures. <br/>
              We partner with organisations to build inclusive, high-performing workplaces.
            </p>
            <div className="text-xs space-y-1 text-gray-500">
              <p>Reg No: {siteConfig.regNo}</p>
              <p>VAT No: {siteConfig.vatNo}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start group">
                <MapPin size={16} className="mr-3 mt-1 shrink-0 text-accent group-hover:text-white transition-colors" />
                <span>{addressText}</span>
              </div>
              <div className="flex items-center group">
                <Phone size={16} className="mr-3 text-accent group-hover:text-white transition-colors" />
                <span>{siteConfig.author.phone}</span>
              </div>
              <div className="flex items-center group">
                <Mail size={16} className="mr-3 text-accent group-hover:text-white transition-colors" />
                <a href={`mailto:${siteConfig.author.email}`} className="hover:text-white transition-colors">
                  {siteConfig.author.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Oyakganya Consulting Hub. All Rights Reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Affiliated with Mphako Holdings</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
