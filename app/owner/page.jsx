'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Disc, ArrowDown, Volume2, VolumeX } from 'lucide-react';
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
    <div className="w-full relative">
      {/* Hidden Ambient Background Audio Player */}
      <audio
        ref={audioRef}
        src="/ambient-music.mp3"
        autoPlay
        loop
        preload="auto"
      />

      {/* Massive Cinematic Hero Section (Full Viewport Height) */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* High-Resolution Moody Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2000"
            alt="Studio Instruments and Music Production"
            fill
            priority
            className="object-cover object-center scale-105 filter brightness-100 transition-transform duration-1000"
          />
          {/* Reduced Dark Overlay (35% opacity) for high instrument visibility */}
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d21] via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0d21]/70 via-transparent to-[#0c0d21]" />
        </div>

        {/* Temporary Water Condensation / Droplets on Glass Overlay */}
        <motion.div
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 8, ease: "easeInOut", delay: 1 }}
          className="absolute inset-0 w-full h-full pointer-events-none z-10 bg-[url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=2000')] bg-cover bg-center mix-blend-screen"
        />

        {/* Center Aligned Typography & Layout */}
        <div className="relative z-20 px-4 sm:px-8 max-w-5xl mx-auto text-center flex flex-col items-center justify-center space-y-6 pt-16">
          {/* Subtle Top Accent Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-blue-200 shadow-[0_0_20px_rgba(99,102,241,0.25)] backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            <span>Kabila Audio — Executive Profile</span>
          </motion.div>

          {/* Main Heading: Owner Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-widest uppercase font-heading drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
          >
            HIMANSHU RAWAT
          </motion.h1>

          {/* Elegant Italic Subheading: Roles */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/90 italic font-light tracking-wide font-sans max-w-2xl mx-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          >
            Singer. Composer. Music Producer.
          </motion.p>

          {/* Action Navigation Row */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-6"
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-20 animate-bounce">
          <span className="text-[10px] tracking-widest uppercase font-mono">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </section>

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
