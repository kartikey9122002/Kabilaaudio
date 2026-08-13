'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import VaultPricing from '@/components/VaultPricing';
import SoundLibrary from '@/components/SoundLibrary';
import MusicProductionCourse from '@/components/MusicProductionCourse';
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

  return (
    <div className="pt-32 pb-28 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
      {/* Sound Vault Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-bold text-blue-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-300" />
          Kabila Audio — Academy &amp; Sound Vault
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight font-heading"
        >
          THE SOUND <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white">VAULT</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans"
        >
          Explore our professional Music Production Courses, 1-on-1 studio mentorship, and preview royalty-free stems and sample packs curated by Kabila Audio.
        </motion.p>
      </div>

      {/* Music Production Course & 24-Module Syllabus */}
      <MusicProductionCourse />

      {/* 3-Column Membership Tier Pricing */}
      <VaultPricing />

      {/* Splice-Style Library Interface with Sidebar Filters */}
      <SoundLibrary
        activeTrack={activeTrack}
        isPlaying={isPlaying}
        onSelectTrack={handleSelectTrack}
        onTogglePlay={handleTogglePlay}
      />
    </div>
  );
}
