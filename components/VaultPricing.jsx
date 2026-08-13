'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Flame, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function VaultPricing() {
  const tiers = [
    {
      name: 'Starter Vault',
      price: '$9.99',
      period: '/month',
      credits: '100 Monthly Sample Credits',
      description: 'Ideal for emerging producers looking for royalty-free drum kits and one-shots.',
      features: [
        '100 Royalty-Free Credits',
        'Standard WAV & MIDI Downloads',
        'Basic License (Independent Commercial)',
        'Access to 2,000+ Vocal Chop Presets',
      ],
      popular: false,
      buttonText: 'Start 7-Day Free Trial',
      gradient: 'from-purple-900/40 to-indigo-900/40',
      border: 'border-white/10',
    },
    {
      name: 'Creator Vault',
      price: '$19.99',
      period: '/month',
      credits: '300 Monthly Sample Credits',
      description: 'Our most popular tier for active artists, featuring full stem loops and DAW presets.',
      features: [
        '300 Royalty-Free Credits',
        '24-Bit / 96kHz Lossless WAVs + Stems',
        'Full Commercial & Sync License',
        'Serum & Vital Synth Preset Packs',
        'Exclusive Monthly Sample Drops',
      ],
      popular: true,
      buttonText: 'Get Creator Access',
      gradient: 'from-purple-600/30 via-pink-600/30 to-rose-600/30',
      border: 'border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.3)]',
    },
    {
      name: 'Pro Studio Vault',
      price: '$39.99',
      period: '/month',
      credits: 'Unlimited Sample Downloads',
      description: 'Designed for executive producers, film scorers, and multi-platinum mixing engineers.',
      features: [
        'Unlimited Royalty-Free Downloads',
        'Dolby Atmos Spatial Audio Stems',
        'Mastering Chain Presets (Logic/Ableton/FL)',
        'Direct 1-on-1 Discord Feedback Channel',
        'Priority Access to Unreleased Packs',
      ],
      popular: false,
      buttonText: 'Unlock Pro Studio Access',
      gradient: 'from-pink-900/40 to-rose-900/40',
      border: 'border-white/10',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-purple-300">
          <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          Splice-Style Royalty-Free Library Membership
        </div>
        <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          SOUND VAULT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">MEMBERSHIP</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Instant access to thousands of 100% royalty-free stems, analog synth loops, vocal chops, and custom drum samples.
        </p>
      </div>

      {/* 3-Column Pricing Cards */}
      <div className="relative w-full py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 blur-md opacity-40 pointer-events-none select-none">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className={`glass-card rounded-[2.2rem] p-8 border ${tier.border} flex flex-col justify-between relative bg-gradient-to-b ${tier.gradient} overflow-hidden shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)] hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.4)] transition-all duration-500`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                  <Flame className="w-3 h-3 fill-white" /> MOST POPULAR
                </span>
              )}

              <div>
                <h3 className="font-extrabold text-2xl text-white mb-1 tracking-tight">{tier.name}</h3>
                <p className="text-xs text-purple-300 font-semibold mb-6">{tier.credits}</p>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-extrabold text-4xl text-white tracking-tight">{tier.price}</span>
                  <span className="text-sm text-gray-400">{tier.period}</span>
                </div>

                <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                  {tier.description}
                </p>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-gray-200">
                      <div className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/40 shrink-0">
                        <Check className="w-2.5 h-2.5 text-purple-300" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_45px_rgba(225,29,72,0.7)]'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                }`}
              >
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-auto px-4">
          <div className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-[32px] px-8 py-10 md:px-16 md:py-14 flex flex-col items-center text-center shadow-[0_0_80px_rgba(255,255,255,0.1)]">
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-blue-400 uppercase mb-4">Under Construction</span>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-widest uppercase mb-4">Coming Soon</h3>
            <p className="text-base md:text-lg text-white/70 max-w-md">The ultimate royalty-free stem and analog synth library is currently being sculpted in the lab.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
