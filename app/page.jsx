'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import SpotifyWaterfallGallery from '@/components/SpotifyWaterfallGallery';
import YouTubeShowcase from '@/components/YouTubeShowcase';
import ServicesPricing from '@/components/ServicesPricing';
import AnalogGearGrid from '@/components/AnalogGearGrid';
import WhatsAppBookingForm from '@/components/WhatsAppBookingForm';

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

      {/* Floating CTA Button */}
      <Link
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-blue-600/30 backdrop-blur-xl border border-blue-400/50 hover:bg-blue-500/50 text-white rounded-full px-6 py-4 shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-bounce hover:animate-none transition-all duration-300"
        href="/join"
      >
        <Sparkles className="w-5 h-5 text-blue-200" />
        <span className="font-bold tracking-wider uppercase text-sm">Join Kabila Now</span>
      </Link>
    </div>
  );
}
