'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Shield,
  X,
  ChevronLeft,
  MapPin,
  Maximize2,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface GalleryItem {
  id: number;
  title: string;
  category: 'safety-nets' | 'invisible-grills' | 'cloth-hangers' | 'before-after';
  categoryLabel: string;
  location: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    "id": 1,
    "title": "High-Rise Balcony Safety Net Fitting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Choolaimedu, Chennai",
    "image": "/images/main-images/BalconyNet-1.jpg"
  },
  {
    "id": 2,
    "title": "Balcony Protection Net Enclosure",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Anna Nagar, Chennai",
    "image": "/images/services/balcony-safety-nets.jpg"
  },
  {
    "id": 3,
    "title": "Pigeon Anti-Bird Net Utility Protection",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "T. Nagar, Chennai",
    "image": "/images/services/pigeon-safety-nets.jpg"
  },
  {
    "id": 4,
    "title": "Pigeon Prevention Netting AI Enhanced",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Velachery, Chennai",
    "image": "/images/main-images/pigeon-safety-nets-ai.png"
  },
  {
    "id": 5,
    "title": "Children Safety Window Net Fitting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Nungambakkam, Chennai",
    "image": "/images/main-images/Children-Safety-Net.jpg"
  },
  {
    "id": 6,
    "title": "Pet Safety Balcony Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Porur, Chennai",
    "image": "/images/services/pet-safety-nets.jpg"
  },
  {
    "id": 7,
    "title": "Pet Protection Mesh Ledge Net",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "OMR, Chennai",
    "image": "/images/main-images/pet.jpg"
  },
  {
    "id": 8,
    "title": "Duct Area Shaft Safety Netting - Primary",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Adyar, Chennai",
    "image": "/images/main-images/Duct-Area-1.jpg"
  },
  {
    "id": 9,
    "title": "Duct Shaft Enclosure Net - Sector 2",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Kilpauk, Chennai",
    "image": "/images/main-images/Duct-Area-2.jpg"
  },
  {
    "id": 10,
    "title": "High-Rise Vertical Duct Shaft Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Mylapore, Chennai",
    "image": "/images/main-images/Duct-Area-3.jpg"
  },
  {
    "id": 11,
    "title": "Commercial Duct Shaft Full Cover",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Mogappair, Chennai",
    "image": "/images/main-images/Duct-Area-4.jpg"
  },
  {
    "id": 12,
    "title": "Sports Boundary Net Installation - Court 1",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "KK Nagar, Chennai",
    "image": "/images/main-images/Sports-Net-1.jpg"
  },
  {
    "id": 13,
    "title": "Multi-Sport Turf Protection Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Virugambakkam, Chennai",
    "image": "/images/main-images/Sports-Net-2.jpg"
  },
  {
    "id": 14,
    "title": "School Grounds Sports Enclosure Net",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Kodambakkam, Chennai",
    "image": "/images/main-images/Sports-Nets-3.jpg"
  },
  {
    "id": 15,
    "title": "Cricket Pitch Practice Enclosure Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Egmore, Chennai",
    "image": "/images/main-images/cricket.jpeg"
  },
  {
    "id": 16,
    "title": "Rooftop Cricket Practice Pitch Net",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Saligramam, Chennai",
    "image": "/images/cricketpracticenet.jpg"
  },
  {
    "id": 17,
    "title": "Construction Site Worker Safety Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Ashok Nagar, Chennai",
    "image": "/images/main-images/Factory-Net-1.jpg"
  },
  {
    "id": 18,
    "title": "Building Site Debris Protection Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Vadapalani, Chennai",
    "image": "/images/constructionnet.webp"
  },
  {
    "id": 19,
    "title": "Monkey Intrusion Barrier Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Choolaimedu, Chennai",
    "image": "/images/main-images/monkey.jpeg"
  },
  {
    "id": 20,
    "title": "Heavy Wire Monkey Protection Mesh",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Anna Nagar, Chennai",
    "image": "/images/monkeysafetynet.webp"
  },
  {
    "id": 21,
    "title": "Staircase Center Void Safety Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "T. Nagar, Chennai",
    "image": "/images/main-images/staircase-net-1.jpg"
  },
  {
    "id": 22,
    "title": "Balcony Security Mesh Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Velachery, Chennai",
    "image": "/images/balconysafetynet.jpg"
  },
  {
    "id": 23,
    "title": "Children Protection Mesh Balcony Net",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Nungambakkam, Chennai",
    "image": "/images/childrensafetynet.webp"
  },
  {
    "id": 24,
    "title": "Utility Duct Shaft Airflow Net",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Porur, Chennai",
    "image": "/images/ductarea.webp"
  },
  {
    "id": 25,
    "title": "Humane Pigeon Prevention Balcony Mesh",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "OMR, Chennai",
    "image": "/images/pigeonnet.jpg"
  },
  {
    "id": 26,
    "title": "Full Balcony Enclosure Safety Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Adyar, Chennai",
    "image": "/images/safetynets.webp"
  },
  {
    "id": 27,
    "title": "SVR Heavy Duty Sports Net Fitting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Kilpauk, Chennai",
    "image": "/images/Svr-Sportsnet.jpg"
  },
  {
    "id": 28,
    "title": "High-Rise Balcony Team Installation",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Mylapore, Chennai",
    "image": "/images/hero/hero-1-balcony-safety-net.jpg"
  },
  {
    "id": 29,
    "title": "SVR Professional Installation Team at Work",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Mogappair, Chennai",
    "image": "/images/hero/hero-3-team-installing.jpg"
  },
  {
    "id": 30,
    "title": "Lifestyle Residential Balcony Net Fitting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "KK Nagar, Chennai",
    "image": "/images/hero/hero-4-lifestyle-balcony.jpg"
  },
  {
    "id": 31,
    "title": "316 Marine Grade Balcony Invisible Grills",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Choolaimedu, Chennai",
    "image": "/images/services/balcony-invisible-grills.jpg"
  },
  {
    "id": 32,
    "title": "Panoramic View Villa Invisible Grills",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Anna Nagar, Chennai",
    "image": "/images/main-images/Balcony-Grills.jpg"
  },
  {
    "id": 33,
    "title": "Custom Invisible Grill Balcony Installation",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "T. Nagar, Chennai",
    "image": "/images/main-images/Balcony-grill-work.jpg"
  },
  {
    "id": 34,
    "title": "Child Safety Narrow Gap Invisible Grills",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Velachery, Chennai",
    "image": "/images/main-images/Children-InvisibleGrills.jpg"
  },
  {
    "id": 35,
    "title": "Child Protection Window SS Grills",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Nungambakkam, Chennai",
    "image": "/images/childrensafetygrill.jpg"
  },
  {
    "id": 36,
    "title": "Pet Safe Balcony Invisible Wire Grills",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Porur, Chennai",
    "image": "/images/main-images/Balcony-Grills-2.jpg"
  },
  {
    "id": 37,
    "title": "SVR Pet Security Invisible Grills",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "OMR, Chennai",
    "image": "/images/svr-petgrills.jpg"
  },
  {
    "id": 38,
    "title": "French Window Invisible Grill Cable System",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Adyar, Chennai",
    "image": "/images/main-images/Window-Grills.jpg"
  },
  {
    "id": 39,
    "title": "High-Transmittance Window Invisible Grills",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Kilpauk, Chennai",
    "image": "/images/main-images/Window-Grills-2.jpg"
  },
  {
    "id": 40,
    "title": "Sleek Bay Window Invisible Wire Grills",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Mylapore, Chennai",
    "image": "/images/windowgrill.webp"
  },
  {
    "id": 41,
    "title": "Staircase Void SS Cable Safety Railing",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Mogappair, Chennai",
    "image": "/images/main-images/Staircase-Grills.jpg"
  },
  {
    "id": 42,
    "title": "Commercial Office Facade Invisible Grills",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "KK Nagar, Chennai",
    "image": "/images/main-images/Balcony-Grills-3.jpg"
  },
  {
    "id": 43,
    "title": "High-Rise Commercial Complex Invisible Grills",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Virugambakkam, Chennai",
    "image": "/images/main-images/Balcony-Grills-4.jpg"
  },
  {
    "id": 44,
    "title": "SVR Commercial SS Cable Grill Work",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Kodambakkam, Chennai",
    "image": "/images/svr-commercialgrill.jpg"
  },
  {
    "id": 45,
    "title": "SVR Premium Balcony Invisible Grill Fitting",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Egmore, Chennai",
    "image": "/images/svr-balconygrill.jpg"
  },
  {
    "id": 46,
    "title": "Modern Living Invisible Grill Installation",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Saligramam, Chennai",
    "image": "/images/hero/hero-2-invisible-grills.jpg"
  },
  {
    "id": 47,
    "title": "Verified Client Invisible Grill Fitting",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Ashok Nagar, Chennai",
    "image": "/images/main-images/client-grill-1.jpg"
  },
  {
    "id": 48,
    "title": "Verified Balcony Net Installation Client Site",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Vadapalani, Chennai",
    "image": "/images/main-images/client-balconynet.jpg"
  },
  {
    "id": 49,
    "title": "Ceiling Pulley SS Cloth Drying Hanger",
    "category": "cloth-hangers",
    "categoryLabel": "Cloth Hangers",
    "location": "Choolaimedu, Chennai",
    "image": "/images/services/ceiling-cloth-hangers.jpg"
  },
  {
    "id": 50,
    "title": "6-Pipe Ceiling Mounted Pulley Cloth Rack",
    "category": "cloth-hangers",
    "categoryLabel": "Cloth Hangers",
    "location": "Anna Nagar, Chennai",
    "image": "/images/main-images/Cloth-Hangera-1.jpg"
  },
  {
    "id": 51,
    "title": "SVR Ceiling Pulley Laundry Drying System",
    "category": "cloth-hangers",
    "categoryLabel": "Cloth Hangers",
    "location": "T. Nagar, Chennai",
    "image": "/images/svr-cloth-hanger1.jpg"
  },
  {
    "id": 52,
    "title": "Balcony Wall Foldable Cloth Drying Rack",
    "category": "cloth-hangers",
    "categoryLabel": "Cloth Hangers",
    "location": "Velachery, Chennai",
    "image": "/images/main-images/balconyclothhangers.jpg"
  },
  {
    "id": 53,
    "title": "Space-Saving Balcony Wall Cloth Hanger",
    "category": "cloth-hangers",
    "categoryLabel": "Cloth Hangers",
    "location": "Nungambakkam, Chennai",
    "image": "/images/cloth-hanger2.webp"
  },
  {
    "id": 54,
    "title": "SS 304 Anti-Bird Spikes Ledge Fitting",
    "category": "before-after",
    "categoryLabel": "Before-After",
    "location": "Porur, Chennai",
    "image": "/images/services/anti-bird-spikes.jpg"
  },
  {
    "id": 55,
    "title": "Pigeon Anti-Perching Spikes AC Unit Installation",
    "category": "before-after",
    "categoryLabel": "Before-After",
    "location": "OMR, Chennai",
    "image": "/images/main-images/Bird-Spikes.jpg"
  },
  {
    "id": 56,
    "title": "Polycarbonate Base Anti-Bird Spikes Service",
    "category": "before-after",
    "categoryLabel": "Before-After",
    "location": "Adyar, Chennai",
    "image": "/images/service-spikes.jpg"
  },
  {
    "id": 57,
    "title": "SVR Certified Excellence Project Delivery",
    "category": "before-after",
    "categoryLabel": "Before-After",
    "location": "Kilpauk, Chennai",
    "image": "/images/about/our-story.jpg"
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === null || prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === null || prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header Banner */}
      <section className="bg-primary text-white py-14 px-4 border-b-2 border-accent">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent-light font-medium">Gallery</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Installation Showcase Gallery
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base font-light">
            Explore all {galleryItems.length} verified installation photos across Chennai - Safety Nets, Invisible Grills, Anti-Bird Spikes & Cloth Drying Hangers.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 space-y-12">
        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-3">
          {[
            { id: 'all', label: `All Photos (${galleryItems.length})` },
            { id: 'safety-nets', label: 'Safety Nets' },
            { id: 'invisible-grills', label: 'Invisible Grills' },
            { id: 'cloth-hangers', label: 'Cloth Hangers' },
            { id: 'before-after', label: 'Before & After / Spikes' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id);
                setSelectedImageIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeCategory === tab.id
                  ? 'bg-accent text-white border-accent shadow-md'
                  : 'bg-white text-primary border-accent/30 hover:border-accent hover:text-accent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group aspect-square bg-surface rounded-2xl border border-accent/20 hover:border-accent shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative cursor-pointer"
            >
              <Image
                src={item.image}
                alt={`${siteConfig.businessName} ${item.title} ${item.location}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay & Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-wider font-bold text-accent-light">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif font-bold text-sm text-white line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[10px] text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-accent shrink-0" />
                  <span>{item.location}</span>
                </p>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <Maximize2 className="w-8 h-8 text-accent transform scale-90 group-hover:scale-100 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX MODAL OVERLAY */}
        {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white p-2 hover:text-accent transition-colors z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 text-white p-3 hover:text-accent transition-colors bg-white/10 rounded-full z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image Detail Card */}
            <div className="max-w-3xl w-full bg-primary text-white rounded-2xl p-6 border border-accent/40 shadow-2xl space-y-4 text-center relative overflow-hidden">
              <div className="w-full aspect-video bg-primary-light rounded-xl overflow-hidden relative">
                <Image
                  src={filteredItems[selectedImageIndex].image}
                  alt={`${siteConfig.businessName} ${filteredItems[selectedImageIndex].title}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-1 pt-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/20 text-accent-light border border-accent/30 inline-block">
                  {filteredItems[selectedImageIndex].categoryLabel}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {filteredItems[selectedImageIndex].title}
                </h2>
                <div className="flex items-center justify-center gap-1 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{filteredItems[selectedImageIndex].location}</span>
                </div>
              </div>
            </div>

            {/* Next Button */}
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
    </div>
  );
}
