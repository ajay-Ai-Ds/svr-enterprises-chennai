'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import WhatsAppIcon from '@/components/WhatsAppIcon';

const navLinks = [
  { name: 'Home', href: '/#hero' },
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Areas', href: '/#areas' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top Bar (Thin strip) */}
      <div className="bg-primary text-white text-xs py-2 px-4 border-b border-accent/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>{siteConfig.email}</span>
            </a>
          </div>

          <div className="text-accent-light font-medium tracking-wide">
            Serving All of Chennai | Free Site Inspection
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-background transition-all duration-300 border-b border-accent/30 ${
          isScrolled ? 'py-3 shadow-md' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo/logo-navbar.svg"
              alt="SVR Enterprises - Safety Nets & Invisible Grills"
              width={200}
              height={48}
              priority
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors py-1 ${
                    isActive ? 'text-accent font-semibold' : 'text-primary hover:text-accent'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-1/2 -bottom-0.5 h-0.5 bg-accent transition-all duration-300 transform -translate-x-1/2 ${
                      isActive ? 'w-full' : 'w-0 hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20your%20services.%20Please%20share%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold rounded bg-whatsapp text-white hover:brightness-105 flex items-center gap-1.5 transition-all duration-200 shadow-md border border-white/20"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="px-4 py-2 text-xs font-semibold rounded bg-primary text-white border border-transparent hover:border-accent hover:text-accent transition-all duration-200 shadow-sm"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-primary p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-In Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-background z-40 lg:hidden flex flex-col justify-between p-6 overflow-y-auto border-t border-accent/20 animate-in fade-in slide-in-from-right duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-serif py-2 border-b border-surface ${
                    isActive ? 'text-accent font-bold' : 'text-primary hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-accent/20 mt-6">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20your%20services.%20Please%20share%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3.5 text-sm font-extrabold rounded-lg bg-whatsapp text-white flex items-center justify-center gap-2 shadow-md border border-white/20"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="w-full text-center py-3 text-sm font-semibold rounded bg-primary text-white border border-accent/50"
            >
              Call Now: {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
