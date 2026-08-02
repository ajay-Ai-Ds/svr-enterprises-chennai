import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, MapPin, Phone, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: `Areas We Serve in Chennai | ${siteConfig.businessName}`,
  description: `${siteConfig.businessName} provides safety nets, invisible grills, and cloth drying hanger installation across all major localities in Chennai including ${siteConfig.area}, Anna Nagar, Velachery, T. Nagar, OMR, and more.`,
};

const chennaiLocalities = [
  'Choolaimedu',
  'Nungambakkam',
  'Kilpauk',
  'Anna Nagar',
  'T. Nagar',
  'Vadapalani',
  'Ashok Nagar',
  'KK Nagar',
  'Aminjikarai',
  'Egmore',
  'Kodambakkam',
  'Saligramam',
  'Virugambakkam',
  'Porur',
  'Valasaravakkam',
  'Mogappair',
  'Villivakkam',
  'Purasaiwalkam',
  'Perambur',
  'Royapettah',
  'Velachery',
  'OMR (Old Mahabalipuram Rd)',
  'ECR (East Coast Rd)',
  'Tambaram',
  'Chromepet',
  'Guindy',
  'Adyar',
  'Mylapore',
  'Thiruvanmiyur',
  'Medavakkam',
  'Kanchipuram District',
  'Thiruvallur District',
];

export default function AreasPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header Banner */}
      <section className="bg-primary text-white py-16 px-4 border-b-2 border-accent text-center space-y-4">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs text-accent-light mb-2">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-accent" />
            <span className="text-white font-medium">Areas We Serve</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Service Coverage Across Chennai
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Fast doorstep site visit, transparent measurement, and expert installation in all major residential & commercial areas.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 space-y-16">
        {/* Headquarter Highlight */}
        <section className="bg-surface rounded-2xl p-8 border-2 border-accent/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-accent text-xs font-bold uppercase tracking-wider">
              Headquarters Location
            </span>
            <h2 className="font-serif text-2xl font-bold text-primary">
              Based in {siteConfig.area}, Serving Greater Chennai
            </h2>
            <p className="text-text-muted text-sm max-w-xl">
              Our central office at {siteConfig.address} enables us to dispatch technicians to any neighborhood in Chennai within 24 hours.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-md text-sm shrink-0 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call {siteConfig.phone}</span>
          </a>
        </section>

        {/* Localities Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl font-bold text-primary">
              Chennai Neighborhoods & Localities Covered
            </h2>
            <p className="text-text-muted text-sm">
              We provide free doorstep site inspections across all these areas:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {chennaiLocalities.map((area, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-accent/20 hover:border-accent shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-surface text-accent group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-primary group-hover:text-accent transition-colors">
                    {area}
                  </h3>
                  <span className="text-[10px] text-text-muted block">Available 7 Days</span>
                </div>
              </div>
            ))}
          </div>

          {/* Don't see your area callout */}
          <div className="p-6 bg-white rounded-xl border border-accent/30 text-center space-y-2">
            <p className="text-sm font-semibold text-primary">
              Don&apos;t see your specific locality listed?
            </p>
            <p className="text-xs text-text-muted">
              We cover all extended metro suburbs in Chennai, Kanchipuram, and Thiruvallur. Contact us to confirm immediate technician availability.
            </p>
          </div>
        </section>

        {/* General Coverage Google Map */}
        <section className="space-y-4">
          <div className="border-b border-accent/30 pb-3">
            <h2 className="font-serif text-2xl font-bold text-primary">
              Chennai Metropolitan Coverage Map
            </h2>
            <p className="text-text-muted text-sm">
              Centralized dispatch out of Choolaimedu across East, West, North, and South Chennai.
            </p>
          </div>

          <div className="w-full h-96 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-md bg-surface">
            <iframe
              title="Chennai Service Area Map"
              src="https://maps.google.com/maps?q=Chennai,+Tamil+Nadu&t=&z=11&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary text-white rounded-2xl p-8 sm:p-12 border-2 border-accent text-center space-y-6">
          <h2 className="font-serif text-3xl font-bold text-white">
            Get a Free Site Visit Quote for Your Area
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Our technicians will visit your home in Chennai, measure your balcony or window dimensions, and provide an instant transparent quote.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-md text-sm"
            >
              Call {siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20SVR%20Enterprises,%20I%20want%20to%20check%20if%20you%20serve%20my%20area.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-whatsapp text-white font-semibold rounded-lg hover:opacity-95 transition-opacity shadow-md text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
