'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import {
  Shield,
  Grid,
  Shirt,
  Phone,
  MessageCircle,
  Award,
  Wrench,
  Clock,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { services, serviceCategories } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import HeroCarousel from '@/components/HeroCarousel';

// Framer motion variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteConfig.businessName,
    image: `https://${siteConfig.domain}/images/hero/hero-1-balcony-safety-net.jpg`,
    '@id': `https://${siteConfig.domain}`,
    url: `https://${siteConfig.domain}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '34/28, Andavar St, Veerapandi Nagar, Choolaimedu',
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.0604,
      longitude: 80.2223,
    },
    areaServed: siteConfig.city,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Safety Nets and Invisible Grills Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.shortDescription,
        },
      })),
    },
  };

  // Select 8 featured services across categories
  const featuredServices = [
    services.find((s) => s.slug === 'balcony-safety-nets')!,
    services.find((s) => s.slug === 'balcony-invisible-grills')!,
    services.find((s) => s.slug === 'pigeon-safety-nets')!,
    services.find((s) => s.slug === 'children-invisible-grills')!,
    services.find((s) => s.slug === 'ceiling-cloth-hangers')!,
    services.find((s) => s.slug === 'pet-safety-nets')!,
    services.find((s) => s.slug === 'window-invisible-grills')!,
    services.find((s) => s.slug === 'anti-bird-spikes')!,
  ].filter(Boolean);

  return (
    <div className="space-y-20 pb-16">
      {/* LocalBusiness JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO CAROUSEL SECTION */}
      <HeroCarousel />

      {/* 2. SERVICES OVERVIEW (3 Category Cards) */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center space-y-4 mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Core Specialization
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
            Explore Safety & Utility Solutions
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base">
            We provide tailored safety solutions for balconies, windows, utility shafts, and high-rise apartments.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {serviceCategories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-accent/20 hover:border-accent shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-surface flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {cat.id === 'safety-nets' && <Shield className="w-7 h-7 text-accent group-hover:text-white" />}
                  {cat.id === 'invisible-grills' && <Grid className="w-7 h-7 text-accent group-hover:text-white" />}
                  {cat.id === 'cloth-hangers' && <Shirt className="w-7 h-7 text-accent group-hover:text-white" />}
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {cat.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
                <div className="text-xs font-semibold text-accent-dark bg-surface px-3 py-1.5 rounded-md inline-block mb-6">
                  {cat.count} Specialized Solutions
                </div>
              </div>

              <Link
                href={`/services#${cat.slug}`}
                className="inline-flex items-center justify-between text-sm font-bold text-primary group-hover:text-accent pt-4 border-t border-surface transition-colors"
              >
                <span>Explore {cat.name}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. WHY CHOOSE SVR ENTERPRISES */}
      <section className="bg-surface py-20 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center space-y-4 mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              The SVR Advantage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
              Why Families & Businesses Trust SVR Enterprises
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Uncompromising quality standards, transparent pricing, and dedicated post-installation support across Chennai.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl border border-accent/20 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">Free Site Inspection</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Our technicians visit your property in Chennai for exact measurements and a zero-obligation instant quote.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl border border-accent/20 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">Premium Materials</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                UV-stabilized high-tensile nets and SS 316 marine-grade cables for maximum durability and rust prevention.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl border border-accent/20 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">Expert Technicians</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Skilled installation team ensuring neat, tight, and secure fitting with zero damage to balcony walls.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl border border-accent/20 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">Warranty Backed</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Up to 5 years official warranty coverage on materials and installation performance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURED SERVICES GRID (8 Services) */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Popular Choices
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mt-2">
              Featured Safety Solutions
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-dark transition-colors"
          >
            <span>View All 18 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredServices.map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. STATS COUNTER SECTION */}
      <section className="bg-primary text-white py-16 border-y-2 border-accent">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-accent">500+</div>
              <div className="text-slate-300 text-sm font-medium">Happy Clients</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-accent">1000+</div>
              <div className="text-slate-300 text-sm font-medium">Installations</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-accent">10+</div>
              <div className="text-slate-300 text-sm font-medium">Years Experience</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-accent">100%</div>
              <div className="text-slate-300 text-sm font-medium">Satisfaction Guaranteed</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-primary via-primary-light to-primary text-white rounded-3xl p-8 sm:p-12 md:p-16 border border-accent/40 shadow-2xl relative overflow-hidden text-center space-y-8"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Ready to Protect Your Space?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Book a free doorstep inspection in Chennai today. Our safety experts are ready to assist you with customized quotes for balcony nets, invisible grills, or cloth hangers.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg bg-accent text-white hover:bg-accent-dark transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call {siteConfig.phone}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg bg-whatsapp text-white hover:opacity-95 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
