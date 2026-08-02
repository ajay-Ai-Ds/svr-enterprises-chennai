import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Grid, Shirt, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '@/data/services';
import { siteConfig } from '@/data/siteConfig';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Map thumbnail image for each service
  const getThumbnailImage = () => {
    switch (service.slug) {
      case 'balcony-safety-nets':
        return '/images/hero/hero-1-balcony-safety-net.jpg';
      case 'balcony-invisible-grills':
        return '/images/hero/hero-2-invisible-grills.jpg';
      case 'pigeon-safety-nets':
        return '/images/services/pigeon-safety-nets.jpg';
      case 'anti-bird-spikes':
        return '/images/services/anti-bird-spikes.jpg';
      case 'ceiling-cloth-hangers':
        return '/images/services/ceiling-cloth-hangers.jpg';
      case 'pet-safety-nets':
        return '/images/services/pet-safety-nets.jpg';
      default:
        return service.category === 'invisible-grills'
          ? '/images/hero/hero-2-invisible-grills.jpg'
          : service.category === 'cloth-hangers'
          ? '/images/services/ceiling-cloth-hangers.jpg'
          : '/images/hero/hero-1-balcony-safety-net.jpg';
    }
  };

  const renderIcon = () => {
    switch (service.category) {
      case 'invisible-grills':
        return <Grid className="w-6 h-6 text-accent" />;
      case 'cloth-hangers':
        return <Shirt className="w-6 h-6 text-accent" />;
      default:
        return <Shield className="w-6 h-6 text-accent" />;
    }
  };

  return (
    <div className="group bg-white rounded-xl border border-accent/20 hover:border-accent shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      {/* Thumbnail Image Header */}
      <div className="aspect-video relative overflow-hidden bg-surface">
        <Image
          src={getThumbnailImage()}
          alt={`${siteConfig.businessName} ${service.title} Chennai`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-primary/90 text-accent-light text-[11px] font-bold px-3 py-1 rounded-full border border-accent/30 backdrop-blur-sm flex items-center gap-1.5">
          {renderIcon()}
          <span>{service.categoryName}</span>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div>
          {/* Title */}
          <h3 className="font-serif text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Quick Highlights */}
          {service.features && service.features.length > 0 && (
            <ul className="space-y-1.5 mb-2">
              {service.features.slice(0, 2).map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-text-main">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="line-clamp-1">{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Action Link */}
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center justify-between text-sm font-semibold text-primary group-hover:text-accent transition-colors pt-4 border-t border-surface"
        >
          <span>View Service Details</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
