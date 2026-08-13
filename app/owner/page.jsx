'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Disc,
  ArrowDown,
  Volume2,
  VolumeX,
  Award,
  Mic2,
  Sliders,
  Cpu,
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';

export default function OwnerProfilePage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  // Gracefully handle browser autoplay policies on mount
  useEffect(() => {
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            // Autoplay was prevented by browser policy until user interacts
            console.log('Autoplay prevented on mount:', err);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  return (
    <div className="w-full relative bg-transparent min-h-screen">
      {/* Ambient Background Glowing Orbs for Entire Page */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Hidden Ambient Background Audio Player */}
      <audio
        ref={audioRef}
        src="/ambient-music.mp3"
        autoPlay
        loop
        preload="auto"
      />

      {/* Massive Cinematic Hero Section (Full Viewport Height, Transparent Background) */}
      <section className="min-h-screen w-full relative overflow-hidden bg-transparent flex flex-col items-center justify-center pt-20 pb-10">
        {/* Evaporating Glass Rain Overlay */}
        <motion.div
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 6, ease: "easeOut", delay: 1 }}
          className="absolute inset-0 z-10 pointer-events-none mix-blend-screen bg-cover bg-center bg-[url('/water-drops.png')]"
        />

        {/* Center Aligned Typography & Layout */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-8 max-w-5xl mx-auto">
          {/* Subtle Top Accent Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-blue-200 shadow-[0_0_20px_rgba(99,102,241,0.25)] backdrop-blur-md mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            <span>Kabila Audio — Executive Profile</span>
          </motion.div>

          {/* Large Circular Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <img
              src="/himanshu.jpeg"
              alt="Himanshu Rawat"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] mb-6"
            />
          </motion.div>

          {/* Main Heading: Owner Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-widest uppercase font-heading drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] mb-4"
          >
            HIMANSHU RAWAT
          </motion.h1>

          {/* Subheading: Roles */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/90 italic font-light tracking-wide font-sans max-w-2xl mx-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] mb-6"
          >
            Multi-Genre Music Producer
          </motion.p>

          {/* Action Navigation Row */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Link
              href="/#music"
              className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-indigo-950 bg-white hover:bg-blue-50 transition-all duration-300 shadow-[0_0_25px_rgba(165,180,252,0.45)] hover:scale-105 inline-flex items-center gap-2 font-heading"
            >
              <Disc className="w-4 h-4 text-indigo-900" />
              <span>Explore Discography</span>
            </Link>

            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 backdrop-blur-md hover:scale-105 inline-flex items-center gap-2 font-heading"
            >
              <span>Book Studio Session</span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-20 animate-bounce">
          <span className="text-[10px] tracking-widest uppercase font-mono">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </section>

      {/* Resume & Credentials Container */}
      <div className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col gap-12 z-20 relative">
        {/* 1. The 'Sonic Journey' (Bio) Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold tracking-widest text-white/80 uppercase font-heading mb-4">
              ABOUT THE ARCHITECT
            </h2>
            <p className="text-lg text-white/70 leading-relaxed font-sans">
              A passionate and accomplished Music Professional with over 15 years of experience in music composition, sound engineering, vocal instruction, and live performance. Specializing in a wide range of genres—from Semi-Classical and Pop to high-end Bollywood production—Himanshu seamlessly bridges the gap between raw artistic emotion and industry-standard technical precision.
            </p>
          </div>
        </motion.div>

        {/* 2. Industry Collaborations (The Flex Section) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Platinum Releases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold tracking-wider text-white uppercase font-heading">
                  PLATINUM RELEASES
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'T-Series',
                  'Zee Music Company',
                  'Apeksha Films',
                  'Hot Cup Entertainment',
                ].map((label, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.08] transition-all duration-300 group"
                  >
                    <Disc className="w-4 h-4 text-blue-400 group-hover:rotate-180 transition-transform duration-700 shrink-0" />
                    <span className="font-bold text-white tracking-wide text-sm">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Featured Artists */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-indigo-400" />
                <h3 className="text-xl font-bold tracking-wider text-white uppercase font-heading">
                  COLLABORATIONS
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {['Javed Ali', 'Udit Narayan', 'Armaan Malik'].map((artist, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-indigo-400/40 hover:bg-white/[0.08] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0">
                        <Mic2 className="w-4 h-4 text-indigo-300" />
                      </div>
                      <span className="font-bold text-white tracking-wide text-base">
                        {artist}
                      </span>
                    </div>
                    <span className="text-xs uppercase font-mono tracking-widest text-indigo-300/70 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                      Playback Artist
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. Technical Arsenal & Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Core Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sliders className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold tracking-wider text-white uppercase font-heading">
                  Core Competencies
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Music Composition & Songwriting',
                  'Sound Recording & Mixing',
                  'Vocal Training (Western & Hindustani Classical)',
                  'Live Programming',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] mt-1.5 shrink-0" />
                    <span className="font-medium text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column 2: The Toolkit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold tracking-wider text-white uppercase font-heading">
                  The Toolkit
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Logic Pro X',
                  'Guitar',
                  'Piano',
                  'Harmonium',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)] mt-1.5 shrink-0" />
                    <span className="font-medium text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column 3: Legacy & Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold tracking-wider text-white uppercase font-heading">
                  Legacy & Education
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Independent Music Professional (2015-Present)',
                  'Former Music Director at ZOEE INDIA',
                  'Diploma in Sound Engineering & Music Production (Mumbai)',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] mt-1.5 shrink-0" />
                    <span className="font-medium text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Audio Ambient Music Toggle Button (Bottom Right) */}
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Mute ambient music' : 'Play ambient music'}
        className="fixed bottom-8 right-8 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3.5 rounded-full border border-white/20 text-white shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:scale-110 transition-all duration-300 group flex items-center gap-2.5"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-blue-300 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 text-gray-400" />
        )}
        <span className="text-xs font-semibold text-white/90 pr-1.5 hidden sm:inline font-sans">
          {isPlaying ? 'Ambient Music On' : 'Ambient Music Off'}
        </span>
      </button>
    </div>
  );
}
