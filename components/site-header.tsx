"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function SiteHeader () {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3 border-gray-200' : 'bg-white py-5 border-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
            {/* <img
              src="/logo.svg"
              alt="Oyakganya Logo"
              className="w-12 h-12 rounded-sm shadow-lg border border-primary"
            />
            <div className="flex flex-col">
              <span className="text-primary font-serif font-bold text-xl tracking-widest leading-none group-hover:text-accent transition-colors">
                  OYAKGANYA
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Consulting Hub</span>
            </div> */}

            <img
              src="/logo2.png"
              alt="Oyakganya Logo"
              className="w-42 h-12"
            />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm uppercase tracking-widest font-medium transition-all relative py-1 group ${
                pathname === item.href ? 'text-accent' : 'text-gray-600 hover:text-primary'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 ${
                pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
              }`}></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-primary text-white shadow-2xl transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col py-8 px-6 space-y-6">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xl font-serif tracking-wide hover:text-accent border-b border-gray-800 pb-2 ${
                 pathname === item.href ? 'text-accent' : 'text-gray-300'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
