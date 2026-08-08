'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, Flame, Wrench, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  {
    id: 'custom-beats',
    title: 'Sonic Branding & Custom Beats',
    price: '$500',
    unit: '/ per track',
    description: 'Bespoke beat composition and sonic identity tailored to your unique artistic sound.',
    badge: null,
    popular: false,
    features: [
      '100% Exclusive Master Rights',
      'Multi-track Unmixed WAV Stems',
      'Full MIDI Files & Preset Data',
      '2 Free Arrangement Revision Rounds',
    ],
    cta: 'Book Custom Beat',
  },
  {
    id: 'mixing-mastering',
    title: 'Analog Stem Mixing & Master',
    price: '$350',
    unit: '/ per track',
    description: 'High-end analog outboard summing through SSL 9000J, Neve 1073 EQs, and LA-2A tube limiters.',
    badge: 'MOST POPULAR',
    popular: true,
    features: [
      'SSL Summing & Neve 1073 Harmonic Warmth',
      'Dolby Atmos Spatial + Stereo Masters',
      'Unlimited Vocal & Beat Stem Processing',
      'Streaming Platform (-14 LUFS) Optimization',
    ],
    cta: 'Book Stem Mix & Master',
  },
  {
    id: 'vocal-tuning',
    title: 'Vocal Sculpting & Tuning',
    price: '$200',
    unit: '/ per track',
    description: 'Precision Melodyne pitch correction, Auto-Tune Pro alignment, and custom vocal chain design.',
    badge: null,
    popular: false,
    features: [
      'Manual Celemony Melodyne Note Editing',
      'Tight Lead & Backing Vocal Alignment',
      'Custom De-Essing, Compression & Space',
      'Tuned Lead & Lead Acapella Stem Delivery',
    ],
    cta: 'Book Vocal Tuning',
  },
  {
    id: 'full-architecture',
    title: 'Full Track Architecture',
    price: '$1,200',
    unit: '/ complete package',
    description: 'Comprehensive end-to-end service from initial beat creation to vocal tuning, stem mixing, and final mastering.',
    badge: 'FULL SUITE',
    popular: false,
    features: [
      'Custom Beat Composition & Full Arrangement',
      'Vocal Recording Guidance & Tuning',
      'Full Analog Stem Mixing & Hybrid Mastering',
      'Radio, Streaming & Club Ready Files',
    ],
    cta: 'Book Full Architecture',
  },
];

export default function ServicesPricing({ onSelectService }) {
  return (
    <section id="services" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-blue-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          <Wrench className="w-3.5 h-3.5 text-blue-300" />
          Studio Services & Pricing
        </div>
        <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight font-heading">
          AUDIO ENGINEERING & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white">SERVICES</span>
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans">
          Elevate your music with studio-grade analog warmth, spatial clarity, and industry-standard production engineering.
        </p>
      </div>

      {/* 4-Card Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className={`glass-card rounded-[2rem] p-6 sm:p-7 border flex flex-col justify-between relative overflow-hidden transition-all duration-500 bg-white/10 backdrop-blur-xl ${
              service.popular
                ? 'border-indigo-400/60 shadow-[0_10px_40px_rgba(79,70,229,0.3)] bg-gradient-to-b from-indigo-950/40 via-blue-950/20 to-black/40'
                : 'border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-white/25'
            }`}
          >
            {/* Most Popular Badge */}
            {service.popular && (
              <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-extrabold bg-white text-indigo-950 shadow-md">
                <Flame className="w-3 h-3 fill-indigo-950 text-indigo-950" /> MOST POPULAR
              </span>
            )}
            {service.badge && !service.popular && (
              <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-extrabold bg-white/15 text-blue-200 border border-white/20">
                {service.badge}
              </span>
            )}

            <div>
              <h3 className="font-extrabold text-xl text-white mb-2 font-heading pr-12">
                {service.title}
              </h3>
              
              <div className="flex items-baseline gap-1.5 my-4">
                <span className="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white font-heading">
                  {service.price}
                </span>
                <span className="text-xs text-gray-400 font-semibold">{service.unit}</span>
              </div>

              <p className="text-xs text-gray-300 mb-6 leading-relaxed font-sans min-h-[48px]">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-200">
                    <div className="w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-400/40 shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-blue-300" />
                    </div>
                    <span className="font-sans leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#booking"
              onClick={() => onSelectService && onSelectService(service.title)}
              className={`w-full py-3.5 rounded-full font-bold text-xs text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                service.popular
                  ? 'bg-white text-indigo-950 shadow-[0_0_25px_rgba(165,180,252,0.5)] hover:bg-blue-50 hover:scale-[1.02]'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30'
              }`}
            >
              <span>{service.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

