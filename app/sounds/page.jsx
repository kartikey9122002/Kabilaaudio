'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import VaultPricing from '@/components/VaultPricing';
import SoundLibrary from '@/components/SoundLibrary';
import StickyPlayer from '@/components/StickyPlayer';
import { Sparkles, Sliders, Music, Zap, Flame } from 'lucide-react';

export default function SoundsPage() {
  const [activeTrack, setActiveTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSelectTrack = (track) => {
    setActiveTrack(track);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleClosePlayer = () => {
    setIsPlaying(false);
    setActiveTrack(null);
  };

  return (
    <div className="pt-32 pb-28 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
      {/* Sound Vault Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-bold text-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.2)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          Kabila Audio — Royalty-Free Sample & Preset Vault
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight font-heading"
        >
          THE SOUND <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-rose-400">VAULT</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans"
        >
          Preview and download studio-grade stems, analog drum kits, 808 sub-basses, and vocal chops curated by Kabila Audio.
        </motion.p>
      </div>

      {/* 3-Column Membership Tier Pricing */}
      <VaultPricing />

      {/* Splice-Style Library Interface with Sidebar Filters */}
      <SoundLibrary
        activeTrack={activeTrack}
        isPlaying={isPlaying}
        onSelectTrack={handleSelectTrack}
        onTogglePlay={handleTogglePlay}
      />

      {/* Sticky Glassmorphic Audio Player Bar */}
      <StickyPlayer
        activeTrack={activeTrack}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onClose={handleClosePlayer}
      />
    </div>
  );
}

