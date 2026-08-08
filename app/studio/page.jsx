'use client';

import { motion } from 'framer-motion';
import StudioCarousel from '@/components/StudioCarousel';
import GearGallery from '@/components/GearGallery';
import { Radio, Sparkles, Cpu, Mic, Sliders } from 'lucide-react';
import Link from 'next/link';

export default function StudioPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
      {/* Studio Hub Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-bold text-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.2)]"
        >
          <Radio className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
          Kabila Audio — Acoustic & Hardware Sanctuary
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight font-heading"
        >
          STUDIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-rose-400">HUB</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans"
        >
          Step inside Kabila Audio Studio. A state-of-the-art hybrid setup featuring an SSL 9000J console, Focal Trio11 reference monitoring, and rare vintage synths.
        </motion.p>

        {/* Quick Studio Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          {[
            { icon: Sliders, label: 'SSL 9000J & Neve 1073 Outboard' },
            { icon: Radio, label: 'Focal Trio11 Monitoring' },
            { icon: Cpu, label: 'Sequential Prophet-6 Synth' },
            { icon: Mic, label: 'Neumann U 87 & Sony C-800G' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold glass-card border border-white/10 text-gray-300 font-heading"
              >
                <Icon className="w-3.5 h-3.5 text-pink-400" />
                {item.label}
              </span>
            );
          })}
        </motion.div>
      </div>

      {/* 3D Book-Page Video Carousel */}
      <StudioCarousel />

      {/* Vlogs / Gear Gallery */}
      <GearGallery />
    </div>
  );
}

