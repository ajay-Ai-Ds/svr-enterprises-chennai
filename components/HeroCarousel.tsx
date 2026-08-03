'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  ShieldCheck,
  Star,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface Slide {
  id: number;
  headline: string;
  subheading: string;
  tag: string;
  bgImage: string;
}

const slides: Slide[] = [
  {
    id: 1,
    headline: 'Premium Safety Nets for Every Home',
    subheading: 'Protecting your family with expert installation across all of Chennai.',
    tag: '#1 Safety Nets Specialist',
    bgImage: '/images/hero/hero-1-balcony-safety-net.jpg',
  },
  {
    id: 2,
    headline: 'Invisible Grills - Security Without Compromise',
    subheading: "Elegant marine-grade SS 316 protection that doesn't block your view.",
    tag: 'Modern Architectural Safety',
    bgImage: '/images/hero/hero-2-invisible-grills.jpg',
  },
  {
    id: 3,
    headline: 'Trusted by Chennai Families for Years',
    subheading: 'Skilled craftsmen, certified UV-stabilized materials, and lasting results.',
    tag: 'Choolaimedu Headquarters',
    bgImage: '/images/hero/hero-3-team-installing.jpg',
  },
  {
    id: 4,
    headline: 'Complete Home Protection Solutions',
    subheading: 'Balcony Safety Nets | SS Invisible Grills | Ceiling Cloth Hangers',
    tag: 'Full Range Offerings',
    bgImage: '/images/hero/hero-4-lifestyle-balcony.jpg',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-advance timer (5s, pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Mobile swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center bg-primary text-white overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background AI Image with Smooth AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].bgImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
        />
      </AnimatePresence>

      {/* Dark Charcoal Gradient Overlay for High Contrast & Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/70 via-[#1A1A1A]/80 to-[#1A1A1A]/95 z-10" />

      {/* Slide Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/25 border border-accent/50 text-[#F5F5F5] text-xs font-bold uppercase tracking-wider shadow-md">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>{slides[currentSlide].tag}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight min-h-[2.5em] flex items-center justify-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {slides[currentSlide].headline}
            </h1>

            <p className="text-lg sm:text-xl text-[#F5F5F5] max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              {slides[currentSlide].subheading}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Clean, Consistent Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full max-w-md sm:max-w-none mx-auto">
          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20your%20services.%20Please%20share%20details.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Get Free Quote Button */}
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold rounded-lg bg-[#B08D57] hover:bg-[#8F6F3F] text-white shadow-lg hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Phone className="w-5 h-5 text-white shrink-0" />
            <span>Get Free Quote</span>
          </a>
        </div>

        {/* Trust Microcopy */}
        <div className="pt-4 flex items-center justify-center gap-2 text-xs text-white font-medium drop-shadow-sm">
          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
          <span>Free site visit, no obligation • Response within 30 minutes</span>
        </div>

        {/* Fixed Trust Badges Row */}
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-accent/30 text-center">
          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
            <span className="text-sm text-white font-medium">500+ Successful Installations</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Star className="w-5 h-5 text-accent shrink-0" />
            <span className="text-sm text-white font-medium">5-Year Materials Warranty</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Clock className="w-5 h-5 text-accent shrink-0" />
            <span className="text-sm text-white font-medium">Same Day Free Site Visit</span>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-primary/80 text-white hover:bg-accent transition-colors shadow-lg border border-accent/30 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-primary/80 text-white hover:bg-accent transition-colors shadow-lg border border-accent/30 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'w-8 bg-accent'
                : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
