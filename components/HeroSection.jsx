'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, Pause, Radio, Star, Music2 } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  const stats = [
    { value: '50M+', label: 'Spotify Streams' },
    { value: '12x', label: 'Platinum Records' },
    { value: '250+', label: 'Tracks Produced' },
    { value: '18', label: 'Chart Top Hits' },
  ];

  // 26 Waveform heights for the sound wave visualizer
  const waveformPattern = [
    30, 70, 40, 80, 50, 100, 75, 95, 100, 85, 95, 60, 40, 30, 60, 95, 100, 85, 95, 100, 75, 90, 60, 80, 40, 65
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

        {/* ✨ MULTI-PLATINUM MASTER (Sky Blue outline) */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/40 text-xs font-bold text-sky-200 shadow-[0_0_18px_rgba(14,165,233,0.2)] backdrop-blur-md"
        >
          <span className="text-sky-300">✨</span>
          <span>MULTI-PLATINUM MASTER</span>
        </motion.div>
      </div>

      {/* Hero 2-Column Grid (Headline & Buttons Left, Live Studio Widget Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full mb-16">
        
        {/* Left Headline & Action Buttons */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start relative bg-transparent shadow-none">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white font-heading relative z-10 bg-transparent shadow-none"
          >
            Sculpting Sounds That <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-300 to-indigo-100 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(165,180,252,0.45)]">
              Resonate
            </span>{' '}
            Forever.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl font-sans relative z-10"
          >
            Kabila Audio — Multi-Platinum Producer & Audio Architect turning raw artistic visions into chart-topping records with high-end analog depth and digital precision.
          </motion.p>

          {/* Action Buttons: Solid White / Deep Blue button next to glass capsule */}
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

        {/* 2. Right-Side 'Live Studio' Card Widget (Glassmorphism Theme) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 w-full"
        >
          <div className="rounded-[2.2rem] p-6 sm:p-7 border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden bg-white/10 backdrop-blur-xl">
            
            {/* Top Row: KA avatar + Kabila Audio + LIVE STUDIO pill */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-extrabold text-sm tracking-wider font-heading shadow-inner">
                  KA
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-white font-heading leading-tight">
                    Kabila Audio
                  </h3>
                  <p className="text-xs text-gray-300 font-medium font-sans">
                    Head Producer & Audio Architect
                  </p>
                </div>
              </div>

              {/* LIVE STUDIO Pill Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-[11px] font-bold text-blue-200">
                <Radio className="w-3.5 h-3.5 text-blue-300 animate-pulse" />
                <span>LIVE STUDIO</span>
              </div>
            </div>

            {/* Inner Audio Card (Glass Frame) */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/15 shadow-inner mb-5">
              
              {/* Top metadata: SONIC PREVIEW on left, 140 BPM • F# MINOR in cyan on right */}
              <div className="flex items-center justify-between mb-4 text-xs">
                <span className="text-[11px] font-bold text-gray-300 tracking-wider font-mono">
                  SONIC PREVIEW
                </span>
                <span className="text-[11px] font-bold text-cyan-300 tracking-wider font-mono">
                  140 BPM • F# MINOR
                </span>
              </div>

              {/* Equalizer: Soft Blue / Indigo glowing vertical audio wave visualizer */}
              <div className="flex items-center justify-between h-14 gap-1 px-1 mb-5">
                {waveformPattern.map((height, i) => (
                  <div
                    key={i}
                    className="w-1.5 rounded-full bg-gradient-to-t from-indigo-600 via-blue-400 to-sky-300 shadow-[0_0_10px_rgba(96,165,250,0.5)] transition-all duration-300"
                    style={{
                      height: isPlayingPreview ? `${Math.max(25, (height + (i % 5) * 12) % 100)}%` : `${height}%`,
                    }}
                  />
                ))}
              </div>

              {/* Track Title, Genre & White Play Button */}
              <div className="flex items-center justify-between pt-1">
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-white font-heading">
                    Midnight Tokyo [Exclusive Beat]
                  </h4>
                  <p className="text-xs text-gray-300 font-sans mt-0.5">
                    Dark Trap / Cinematic Synthwave
                  </p>
                </div>

                {/* Circular white play button with deep indigo icon */}
                <button
                  onClick={() => setIsPlayingPreview(!isPlayingPreview)}
                  className="w-11 h-11 rounded-full bg-white hover:bg-blue-50 text-indigo-950 flex items-center justify-center shadow-[0_0_20px_rgba(165,180,252,0.6)] hover:scale-105 transition-all shrink-0 ml-3"
                  aria-label="Play or pause track preview"
                >
                  {isPlayingPreview ? (
                    <Pause className="w-5 h-5 fill-indigo-950 text-indigo-950" />
                  ) : (
                    <Play className="w-5 h-5 fill-indigo-950 text-indigo-950 translate-x-0.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Card Footer: Labels on left; Rating on right */}
            <div className="flex items-center justify-between text-xs text-gray-300 font-sans pt-1">
              <span>Universal Music • Sony • Warner</span>
              <span className="text-blue-300 font-bold flex items-center gap-1 font-heading">
                <Star className="w-3.5 h-3.5 fill-blue-300 text-blue-300" />
                <span>5.0 Rating</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full rounded-[2rem] p-6 sm:p-8 border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-white/10 backdrop-blur-xl"
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





