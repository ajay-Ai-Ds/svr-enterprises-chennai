'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import {
  Shield,
  Grid,
  Shirt,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  Wrench,
  CheckCircle2,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Send,
  Calendar,
  BookOpen,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { services, serviceCategories } from '@/data/services';
import { blogPosts } from '@/data/blogPosts';
import ServiceCard from '@/components/ServiceCard';
import HeroCarousel from '@/components/HeroCarousel';
import WhatsAppIcon from '@/components/WhatsAppIcon';

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
      staggerChildren: 0.1,
    },
  },
};

// Projects data
interface Project {
  id: string;
  title: string;
  category: 'safety-nets' | 'invisible-grills' | 'cloth-hangers';
  categoryLabel: string;
  location: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  { id: 'p1', title: 'High-Rise Balcony Safety Net Installation', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Choolaimedu, Chennai', description: 'Installed 1mm heavy-duty UV stabilized balcony safety net for a 12th-floor balcony.', image: '/images/hero/hero-1-balcony-safety-net.jpg' },
  { id: 'p2', title: '316 SS Cable Invisible Grills Fitting', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'Anna Nagar, Chennai', description: 'Custom fitted marine-grade stainless steel invisible grills for luxury villa French windows.', image: '/images/hero/hero-2-invisible-grills.jpg' },
  { id: 'p3', title: 'Pigeon Anti-Bird Protection Net', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'T. Nagar, Chennai', description: 'Sealed off utility shaft and kitchen balcony to prevent bird nesting and hygiene issues.', image: '/images/services/pigeon-safety-nets.jpg' },
  { id: 'p4', title: 'Ceiling Pulley Cloth Drying Hanger', category: 'cloth-hangers', categoryLabel: 'Cloth Hangers', location: 'Nungambakkam, Chennai', description: '6-pipe 304 SS pulley-operated cloth drying rack installed in apartment laundry balcony.', image: '/images/services/ceiling-cloth-hangers.jpg' },
  { id: 'p5', title: 'Children Safety Invisible Grills', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'Velachery, Chennai', description: '2-inch narrow gap invisible grill installation for child safety across all high-floor windows.', image: '/images/hero/hero-2-invisible-grills.jpg' },
  { id: 'p6', title: 'Duct Area & Pipe Shaft Netting', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Porur, Chennai', description: 'Full vertical duct area sealing using high-tensile HDPE nets for a residential complex.', image: '/images/services/pigeon-safety-nets.jpg' },
];

// Gallery items
interface GalleryItem {
  id: number;
  title: string;
  category: 'safety-nets' | 'invisible-grills' | 'cloth-hangers';
  categoryLabel: string;
  location: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: 'High-Rise Balcony Safety Net Fitting', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Choolaimedu, Chennai', image: '/images/hero/hero-1-balcony-safety-net.jpg' },
  { id: 2, title: 'Panoramic View Invisible Grills', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'Anna Nagar, Chennai', image: '/images/hero/hero-2-invisible-grills.jpg' },
  { id: 3, title: 'Pigeon Net Utility Enclosure', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'T. Nagar, Chennai', image: '/images/services/pigeon-safety-nets.jpg' },
  { id: 4, title: 'Ceiling Cloth Drying Pulley Rack', category: 'cloth-hangers', categoryLabel: 'Cloth Hangers', location: 'Nungambakkam, Chennai', image: '/images/services/ceiling-cloth-hangers.jpg' },
  { id: 5, title: 'Child Safety Window Invisible Grills', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'Kilpauk, Chennai', image: '/images/hero/hero-2-invisible-grills.jpg' },
  { id: 6, title: 'Pet Safety Balcony Net Enclosure', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Ashok Nagar, Chennai', image: '/images/services/pet-safety-nets.jpg' },
  { id: 7, title: 'Anti-Bird Stainless Steel Spikes', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Egmore, Chennai', image: '/images/services/anti-bird-spikes.jpg' },
  { id: 8, title: 'Balcony Wall Foldable Cloth Hanger', category: 'cloth-hangers', categoryLabel: 'Cloth Hangers', location: 'Vadapalani, Chennai', image: '/images/hero/hero-4-lifestyle-balcony.jpg' },
];

const chennaiLocalities = [
  'Choolaimedu (HQ)', 'Anna Nagar', 'T. Nagar', 'Nungambakkam', 'Velachery',
  'Adyar', 'Mylapore', 'Vadapalani', 'Porur', 'Mogappair', 'Kilpauk',
  'Ashok Nagar', 'KK Nagar', 'OMR (IT Corridor)', 'ECR', 'Tambaram',
  'Chromepet', 'Guindy', 'Saidapet', 'Alwarpet', 'R.A. Puram', 'Egmore',
  'Royapettah', 'Padmini Nagar', 'Virugambakkam', 'Saligramam', 'Koyambedu',
  'Ambattur', 'Avadi', 'Perambur', 'Madipakkam', 'Medavakkam'
];

export default function Home() {
  const [servicesCategory, setServicesCategory] = useState<string>('all');
  const [projectsCategory, setProjectsCategory] = useState<string>('all');
  const [galleryCategory, setGalleryCategory] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: services[0].title,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const filteredServices =
    servicesCategory === 'all'
      ? services
      : services.filter((s) => s.category === servicesCategory);

  const filteredProjects =
    projectsCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === projectsCategory);

  const filteredGallery =
    galleryCategory === 'all'
      ? galleryItems
      : galleryItems.filter((g) => g.category === galleryCategory);

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === null || prev === filteredGallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === null || prev === 0 ? filteredGallery.length - 1 : prev - 1
    );
  };

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

  return (
    <div className="space-y-24 pb-16">
      {/* LocalBusiness JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO CAROUSEL SECTION */}
      <section id="hero">
        <HeroCarousel />
      </section>

      {/* 2. CORE SPECIALIZATIONS BANNER */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
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
              className="bg-surface rounded-2xl p-8 border border-accent/20 hover:border-accent shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-accent/15 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {cat.id === 'safety-nets' && <Shield className="w-7 h-7" />}
                  {cat.id === 'invisible-grills' && <Grid className="w-7 h-7" />}
                  {cat.id === 'cloth-hangers' && <Shirt className="w-7 h-7" />}
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                  {cat.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-accent/10 flex items-center justify-between">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">
                  {cat.count} Specialist Solutions
                </span>
                <a
                  href="#services"
                  className="text-primary group-hover:text-accent font-semibold text-sm flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. SERVICES SECTION (ALL 18 SERVICES WITH CATEGORY TABS) */}
      <section id="services" className="scroll-mt-24 max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center space-y-4 mb-10"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Comprehensive Protection Catalog
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Our Complete Range of Services
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base">
            From heavy-duty balcony safety netting to invisible grills and pulley cloth drying hangers across Chennai.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-3 pt-4">
            <button
              onClick={() => setServicesCategory('all')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                servicesCategory === 'all'
                  ? 'bg-accent text-white border-accent shadow-md'
                  : 'bg-surface text-primary border-accent/30 hover:border-accent hover:text-accent'
              }`}
            >
              All Services (18)
            </button>
            <button
              onClick={() => setServicesCategory('safety-nets')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                servicesCategory === 'safety-nets'
                  ? 'bg-accent text-white border-accent shadow-md'
                  : 'bg-surface text-primary border-accent/30 hover:border-accent hover:text-accent'
              }`}
            >
              Safety Nets (10)
            </button>
            <button
              onClick={() => setServicesCategory('invisible-grills')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                servicesCategory === 'invisible-grills'
                  ? 'bg-accent text-white border-accent shadow-md'
                  : 'bg-surface text-primary border-accent/30 hover:border-accent hover:text-accent'
              }`}
            >
              Invisible Grills (6)
            </button>
            <button
              onClick={() => setServicesCategory('cloth-hangers')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                servicesCategory === 'cloth-hangers'
                  ? 'bg-accent text-white border-accent shadow-md'
                  : 'bg-surface text-primary border-accent/30 hover:border-accent hover:text-accent'
              }`}
            >
              Cloth Hangers (2)
            </button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="scroll-mt-24 bg-surface py-20 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Image */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-xl">
              <Image
                src="/images/about/our-story.jpg"
                alt="SVR Enterprises Choolaimedu Workshop Team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-primary/95 text-white p-4 rounded-xl border border-accent/40 backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-accent-light uppercase block">Headquarters</span>
                  <span className="text-sm font-serif font-bold">Choolaimedu, Chennai</span>
                </div>
                <ShieldCheck className="w-8 h-8 text-accent" />
              </div>
            </div>

            {/* Story Text */}
            <div className="space-y-6">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About SVR Enterprises
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
                Chennai's Trusted Safety Nets & Invisible Grills Specialists
              </h2>
              <p className="text-text-muted text-base leading-relaxed">
                Founded in Choolaimedu, Greater Chennai, SVR Enterprises has grown to become the premier name in residential and commercial safety installations. We specialize in UV-stabilized high-tensile safety netting, SS 316 marine-grade invisible grills, and space-saving ceiling cloth drying hangers.
              </p>
              <p className="text-text-muted text-base leading-relaxed">
                Every installation is performed by certified technicians using stainless steel 304/316 hardware with zero compromise on safety standards or architectural aesthetics.
              </p>

              {/* Core Values Icons */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-accent/20 flex items-center gap-3">
                  <Award className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-xs font-bold text-primary">Certified High Tensile Materials</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-accent/20 flex items-center gap-3">
                  <Wrench className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-xs font-bold text-primary">Skilled In-House Craftsmen</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-accent/20 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-xs font-bold text-primary">Same-Day Site Inspection</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-accent/20 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-xs font-bold text-primary">5-Year Warranty Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SHOWCASE SECTION */}
      <section id="projects" className="scroll-mt-24 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-10">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Real Chennai Installations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Featured Projects Across Chennai
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base">
            Explore recent balcony safety net, invisible grill, and cloth drying rack fittings.
          </p>

          {/* Project Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-3 pt-2">
            <button
              onClick={() => setProjectsCategory('all')}
              className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                projectsCategory === 'all'
                  ? 'bg-accent text-white border-accent'
                  : 'bg-surface text-primary border-accent/30'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setProjectsCategory('safety-nets')}
              className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                projectsCategory === 'safety-nets'
                  ? 'bg-accent text-white border-accent'
                  : 'bg-surface text-primary border-accent/30'
              }`}
            >
              Safety Nets
            </button>
            <button
              onClick={() => setProjectsCategory('invisible-grills')}
              className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                projectsCategory === 'invisible-grills'
                  ? 'bg-accent text-white border-accent'
                  : 'bg-surface text-primary border-accent/30'
              }`}
            >
              Invisible Grills
            </button>
            <button
              onClick={() => setProjectsCategory('cloth-hangers')}
              className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                projectsCategory === 'cloth-hangers'
                  ? 'bg-accent text-white border-accent'
                  : 'bg-surface text-primary border-accent/30'
              }`}
            >
              Cloth Hangers
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-accent/20 hover:border-accent shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="aspect-video relative overflow-hidden bg-surface">
                <Image
                  src={proj.image}
                  alt={`${siteConfig.businessName} ${proj.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-primary/90 text-accent-light text-[11px] font-bold px-3 py-1 rounded-full border border-accent/30">
                  {proj.categoryLabel}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-xs text-text-muted">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-primary group-hover:text-accent transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INSTALLATION GALLERY SECTION WITH LIGHTBOX */}
      <section id="gallery" className="scroll-mt-24 bg-surface py-20 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div className="text-center space-y-4">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Photo Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Work Completed Gallery
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-base">
              Click any photo to view in full screen lightbox mode.
            </p>

            {/* Gallery Filter Tabs */}
            <div className="flex items-center justify-center flex-wrap gap-3 pt-2">
              <button
                onClick={() => setGalleryCategory('all')}
                className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                  galleryCategory === 'all'
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white text-primary border-accent/30'
                }`}
              >
                All Photos
              </button>
              <button
                onClick={() => setGalleryCategory('safety-nets')}
                className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                  galleryCategory === 'safety-nets'
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white text-primary border-accent/30'
                }`}
              >
                Safety Nets
              </button>
              <button
                onClick={() => setGalleryCategory('invisible-grills')}
                className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                  galleryCategory === 'invisible-grills'
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white text-primary border-accent/30'
                }`}
              >
                Invisible Grills
              </button>
              <button
                onClick={() => setGalleryCategory('cloth-hangers')}
                className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                  galleryCategory === 'cloth-hangers'
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white text-primary border-accent/30'
                }`}
              >
                Cloth Hangers
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(idx)}
                className="group aspect-square bg-white rounded-2xl border border-accent/20 hover:border-accent shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={`${siteConfig.businessName} ${item.title}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[10px] uppercase font-bold text-accent-light">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif font-bold text-xs text-white line-clamp-1">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <Maximize2 className="w-8 h-8 text-accent" />
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImageIndex !== null && filteredGallery[selectedImageIndex] && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-6 right-6 text-white p-2 hover:text-accent transition-colors z-10"
                aria-label="Close Lightbox"
              >
                <X className="w-8 h-8" />
              </button>
              <button
                onClick={prevImage}
                className="absolute left-4 sm:left-8 text-white p-3 hover:text-accent transition-colors bg-white/10 rounded-full z-10"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <div className="max-w-3xl w-full bg-primary text-white rounded-2xl p-6 border border-accent/40 shadow-2xl space-y-4 text-center relative overflow-hidden">
                <div className="w-full aspect-video bg-primary-light rounded-xl overflow-hidden relative">
                  <Image
                    src={filteredGallery[selectedImageIndex].image}
                    alt={`${siteConfig.businessName} ${filteredGallery[selectedImageIndex].title}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1 pt-2">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {filteredGallery[selectedImageIndex].title}
                  </h2>
                  <p className="text-xs text-slate-300">{filteredGallery[selectedImageIndex].location}</p>
                </div>
              </div>
              <button
                onClick={nextImage}
                className="absolute right-4 sm:right-8 text-white p-3 hover:text-accent transition-colors bg-white/10 rounded-full z-10"
                aria-label="Next Image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 7. AREAS WE SERVE SECTION */}
      <section id="areas" className="scroll-mt-24 max-w-7xl mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Coverage Network
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Areas We Serve in Greater Chennai
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-base">
              Doorstep site measurements and installations available across 32+ Chennai localities.
            </p>
          </div>

          {/* Localities Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {chennaiLocalities.map((loc, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                  idx === 0
                    ? 'bg-accent text-white border-accent shadow-md'
                    : 'bg-white text-primary border-accent/20 hover:border-accent hover:text-accent'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 mx-auto mb-1 opacity-80" />
                <span>{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BLOG & GUIDES SECTION */}
      <section id="blog" className="scroll-mt-24 bg-surface py-20 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div className="text-center space-y-4">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Safety Insights & Guides
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Latest Articles & Safety Tips
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-base">
              Expert advice on balcony protection, pigeon control, and maintenance for Chennai homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-accent/20 hover:border-accent shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span className="px-2.5 py-1 rounded-full bg-accent/15 text-accent font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-primary group-hover:text-accent flex items-center gap-1 pt-4 border-t border-surface"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT FORM & LOCATION MAP SECTION */}
      <section id="contact" className="scroll-mt-24 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-8 bg-primary text-white p-8 sm:p-10 rounded-2xl border-2 border-accent shadow-2xl relative overflow-hidden">
            <div className="space-y-4">
              <span className="text-accent font-bold text-xs uppercase tracking-wider block">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                Contact SVR Enterprises
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Reach out for free site inspection, material samples, or instant estimates anywhere in Chennai.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-accent/30">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg text-accent border border-accent/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-accent-light">Choolaimedu Address</h4>
                  <p className="text-sm text-slate-200 leading-snug mt-0.5">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/20 rounded-lg text-accent border border-accent/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-accent-light">Phone / Hotline</h4>
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-sm font-bold text-white hover:text-accent">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-whatsapp/20 rounded-lg text-whatsapp border border-whatsapp/30">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-whatsapp">WhatsApp Consultation</h4>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20your%20services.%20Please%20share%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-whatsapp hover:underline"
                  >
                    Chat on WhatsApp Now
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/20 rounded-lg text-accent border border-accent/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-accent-light">Email Address</h4>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-slate-200 hover:text-accent break-all">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed inside card */}
            <div className="pt-4">
              <span className="text-xs font-bold uppercase text-accent-light block mb-2">Choolaimedu Google Map</span>
              <div className="w-full h-44 rounded-xl overflow-hidden border border-accent/30 shadow-md bg-primary-light relative">
                <iframe
                  title="SVR Enterprises Choolaimedu Location Map"
                  src="https://maps.google.com/maps?q=34/28,+Andavar+St,+Veerapandi+Nagar,+Choolaimedu,+Chennai,+Tamil+Nadu+600094&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Interactive Inspection Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-accent/20 shadow-xl space-y-6">
            <div>
              <span className="text-accent font-semibold text-xs uppercase tracking-wider block">
                Free Doorstep Visit
              </span>
              <h2 className="font-serif text-3xl font-bold text-primary">
                Book Free Site Inspection
              </h2>
              <p className="text-text-muted text-sm mt-1">
                Fill out your details below and our team will get in touch within 30 minutes.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-surface border-2 border-accent rounded-xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-primary">Request Submitted!</h3>
                <p className="text-text-muted text-sm">
                  Thank you, {formData.name}. Our technician will call you shortly at {formData.phone} to confirm the site visit in Chennai.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 focus:border-accent outline-none text-sm text-text-main"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-accent/30 focus:border-accent outline-none text-sm text-text-main"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                      Select Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-accent/30 focus:border-accent outline-none text-sm text-text-main bg-white"
                    >
                      {services.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title} ({svc.categoryName})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Locality & Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Need balcony safety net in Anna Nagar 4th floor. Please schedule inspection."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 focus:border-accent outline-none text-sm text-text-main"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-accent text-white font-bold rounded-lg hover:bg-accent-dark transition-all shadow-md text-base flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Request Free Site Visit Now</span>
                </button>

                <div className="pt-2 flex items-center justify-center gap-2 text-xs text-text-muted font-medium">
                  <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>We typically respond within 30 minutes during business hours</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
