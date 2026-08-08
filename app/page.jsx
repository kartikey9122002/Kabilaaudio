'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import SpotifyWaterfallGallery from '@/components/SpotifyWaterfallGallery';
import YouTubeShowcase from '@/components/YouTubeShowcase';
import ServicesPricing from '@/components/ServicesPricing';
import AnalogGearGrid from '@/components/AnalogGearGrid';
import WhatsAppBookingForm from '@/components/WhatsAppBookingForm';
import StickyPlayer from '@/components/StickyPlayer';

export default function HomePage() {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section with Background Equalizer Waves */}
      <HeroSection />

      {/* 2. Spotify Waterfall Masonry Gallery */}
      <SpotifyWaterfallGallery />

      {/* 3. YouTube Music & Studio Breakdown Showcase */}
      <YouTubeShowcase />

      {/* 4. Audio Engineering & Stem Mixing Pricing */}
      <ServicesPricing onSelectService={(service) => setSelectedService(service)} />

      {/* 5. Analog Hardware Archive (2x2 Grid) */}
      <AnalogGearGrid />

      {/* 6. Direct WhatsApp Booking Masterpiece Form */}
      <WhatsAppBookingForm preselectedService={selectedService} />

      {/* 7. Ultra-Transparent Glass Sticky Audio Player */}
      <StickyPlayer />
    </div>
  );
}
