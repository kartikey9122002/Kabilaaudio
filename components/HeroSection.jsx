'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Flame, Radio, Play } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const stats = [
    { value: '35M+', label: 'All Platform Streams' },
    { value: '550+', label: 'track Produced' },
    { value: '12 x', label: 'Platinum records' },
    { value: '10', label: 'CHART top hits' },
  ];

  return (
    <section className="relative pt-36 pb-12 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col items-center">
      {/* 1. Top Pill Badges Row: Soft Cyan & Indigo Outlines */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
        {/* ✨ SOUND ARCHITECT (Indigo outline) */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/40 text-xs font-bold text-indigo-200 shadow-[0_0_18px_rgba(99,102,241,0.2)] backdrop-blur-md"
        >
          <span className="text-indigo-300">✨</span>
          <span>SOUND ARCHITECT</span>
        </motion.div>

        {/* ✨ SONIC VISIONARY (Cyan/Blue outline) */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-xs font-bold text-blue-200 shadow-[0_0_18px_rgba(59,130,246,0.2)] backdrop-blur-md"
        >
          <span className="text-blue-300">✨</span>
          <span>SONIC VISIONARY</span>
        </motion.div>

        {/* ✨ MULTI-PLATINUM PRODUCER (Sky Blue outline) */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/40 text-xs font-bold text-sky-200 shadow-[0_0_18px_rgba(14,165,233,0.2)] backdrop-blur-md"
        >
          <span className="text-sky-300">✨</span>
          <span>MULTI-PLATINUM PRODUCER</span>
        </motion.div>
      </div>

      {/* Hero 2-Column Grid (Headline Left, Live Playable Spotify Card Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full mb-16">
        {/* Left Headline & Action Buttons */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start relative bg-transparent shadow-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white font-heading relative z-10 bg-transparent shadow-none"
          >
            We don&apos;t just produce audio tracks, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-300 to-indigo-100 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(165,180,252,0.45)]">
              we produce
            </span>{' '}
            feelings.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl font-sans relative z-10"
          >
            Kabila Audio - A Team Of Well Trained Music Producers &amp; Audio Architect ….
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-10"
          >
            {/* Primary: Solid White button with deep indigo text ✨ Book a Session */}
            <Link
              href="#booking"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full font-bold text-sm text-indigo-950 bg-white hover:bg-blue-50 shadow-[0_0_25px_rgba(165,180,252,0.45)] hover:shadow-[0_0_35px_rgba(165,180,252,0.7)] transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Book a Session</span>
            </Link>

            {/* Secondary: Translucent glass button ▶ Listen to Work → */}
            <Link
              href="#music"
              className="w-full sm:w-auto text-center px-7 py-4 rounded-full font-semibold text-sm text-gray-200 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2.5 shadow-lg"
            >
              <span className="text-blue-300 text-xs">▶</span>
              <span>Listen to Work</span>
              <ArrowRight className="w-4 h-4 text-gray-300" />
            </Link>
          </motion.div>
        </div>

        {/* 2. Top-Right Live Playable Spotify Container (Glassmorphic Outer Wrapper) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 w-full"
        >
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden space-y-4">
            {/* Header Row with Glowing VIRAL HIT Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-extrabold text-xs tracking-wider font-heading shadow-inner">
                  KA
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-white font-heading leading-tight">
                    Kabila Audio
                  </h3>
                  <p className="text-[11px] text-gray-300 font-medium font-sans">
                    Head Producer &amp; Audio Architect
                  </p>
                </div>
              </div>

              {/* Glowing VIRAL HIT Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-red-500/20 to-amber-500/20 border border-red-500/40 text-amber-300 text-xs font-bold shadow-[0_0_15px_rgba(239,68,68,0.3)] animate-pulse">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>VIRAL HIT</span>
              </div>
            </div>

            {/* PHASE 2: Live Playable Spotify Player iframe */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/15 bg-black/40">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/2WD3XM1dcrWbiHYm7F3qqB?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Live Viral Track Spotify Player"
              />
            </div>

            {/* PHASE 3: YouTube Prep Structural Container */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-blue-300 uppercase tracking-wider flex items-center gap-1.5 text-[11px]">
                  <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                  YouTube Music Video Prep
                </span>
                <span className="text-[10px] font-semibold text-gray-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                  Upcoming 4K Slot
                </span>
              </div>

              <div id="youtube-embed-prep" className="w-full h-24 rounded-2xl bg-black/50 border border-white/15 flex items-center justify-center relative overflow-hidden group hover:border-blue-400/40 transition-colors p-4">
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-9 h-9 rounded-full bg-red-600/30 border border-red-400/50 flex items-center justify-center text-red-200 group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-current translate-x-0.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white font-heading">
                      Official Studio Behind-The-Scenes Video
                    </p>
                    <p className="text-[11px] text-gray-400 font-sans">
                      Ready for 4K YouTube Video Embed Insertion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. Bottom Stats Bar (Static Text) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full rounded-3xl sm:rounded-[32px] p-6 sm:p-8 border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-white/10 backdrop-blur-xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1 relative">
              {idx > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-white/20" />
              )}
              <h3 className="font-extrabold text-3xl sm:text-4xl text-white font-heading">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-semibold uppercase tracking-wider font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
