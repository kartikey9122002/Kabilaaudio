'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Youtube, Eye, Clapperboard } from 'lucide-react';

const YOUTUBE_ITEMS = [
  {
    id: 1,
    title: 'Studio Hub Vlog — Behind The Boards',
    subtitle: 'Full Ableton & SSL 9000J Console Workflow Breakdown',
    category: 'Studio Breakdowns',
    views: '850K Views',
    badge: 'Official Studio Vlog',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/videoseries?list=PLpgDJaGurXAlF8jR3WyZG5FektozSIt4T',
  },
  {
    id: 2,
    title: 'Beat Breakdown — Multi-Platinum Hit Production',
    subtitle: 'Trap & Cinematic Synth Sound Design Masterclass',
    category: 'Official Music Videos',
    views: '1.2M Views',
    badge: 'Beat Breakdown',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/videoseries?list=PLpgDJaGurXAlF8jR3WyZG5FektozSIt4T',
  },
  {
    id: 3,
    title: 'Behind the Boards — Executive Stem Mixing',
    subtitle: 'Neve 1073 Harmonic Warmth & Tube Compression Shootout',
    category: 'Studio Breakdowns',
    views: '980K Views',
    badge: 'Masterclass Session',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/videoseries?list=PLpgDJaGurXAlF8jR3WyZG5FektozSIt4T',
  },
  {
    id: 4,
    title: 'Analog Hardware Showcase — Prophet-6 & Moog Modular',
    subtitle: 'Synthesizer Vault & Floating Vocal Sanctuary Tour',
    category: 'Studio Breakdowns',
    views: '650K Views',
    badge: 'Gear Breakdown',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/videoseries?list=PLpgDJaGurXAlF8jR3WyZG5FektozSIt4T',
  },
  {
    id: 5,
    title: 'Dolby Atmos Spatial Mastering & 808 Architecture',
    subtitle: 'Precision PMC 7.1.4 Monitoring & Stem Separation',
    category: 'Official Music Videos',
    views: '1.4M Views',
    badge: 'Spatial Masterclass',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/videoseries?list=PLpgDJaGurXAlF8jR3WyZG5FektozSIt4T',
  },
];

const CATEGORIES = ['All', 'Official Music Videos', 'Studio Breakdowns'];

export default function YouTubeShowcase() {
  const [activeTab, setActiveTab] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = activeTab === 'All'
    ? YOUTUBE_ITEMS
    : YOUTUBE_ITEMS.filter((item) => item.category === activeTab);

  const totalItems = filteredItems.length;

  return (
    <section id="videos" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-24 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-blue-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          <Youtube className="w-4 h-4 text-blue-400" />
          Visual Breakdown & Vlogs
        </div>
        <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight font-heading">
          YOUTUBE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white">WATERFALL SHOWCASE</span>
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans">
          Explore official music videos, studio session breakdowns, analog gear shootouts, and multi-platinum beat tutorials. Swipe left or right to explore.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setCurrentIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeTab === cat
                  ? 'bg-white text-indigo-950 shadow-[0_0_20px_rgba(165,180,252,0.4)] scale-105'
                  : 'bg-white/10 hover:bg-white/20 text-gray-200 border border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Coverflow Perspective Container with Drag Swipe */}
      <div className="relative flex justify-center items-center h-[520px] w-full [perspective:1000px] my-4 select-none">
        {filteredItems.map((item, index) => {
          // Calculate relative circular distance from currentIndex
          let diff = index - currentIndex;
          if (diff > totalItems / 2) diff -= totalItems;
          if (diff < -totalItems / 2) diff += totalItems;

          // Compute 3D Transform attributes strictly according to Coverflow mechanics
          let zIndex = 10;
          let scale = 0.6;
          let rotateY = 0;
          let opacity = 0;
          let x = '0%';
          let isCenter = diff === 0;

          if (isCenter) {
            // Active Center Card
            zIndex = 30;
            scale = 1;
            rotateY = 0;
            opacity = 1;
            x = '0%';
          } else if (diff === -1) {
            // Card to the Left
            zIndex = 20;
            scale = 0.85;
            rotateY = 30;
            opacity = 0.6;
            x = '-60%';
          } else if (diff === 1) {
            // Card to the Right
            zIndex = 20;
            scale = 0.85;
            rotateY = -30;
            opacity = 0.6;
            x = '60%';
          } else {
            // Hidden Cards further out
            zIndex = 10;
            scale = 0.6;
            rotateY = diff < 0 ? 45 : -45;
            opacity = 0;
            x = diff < 0 ? '-120%' : '120%';
          }

          return (
            <motion.div
              key={item.id}
              onClick={() => {
                if (!isCenter) setCurrentIndex(index);
              }}
              drag={isCenter ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset }) => {
                const swipeThreshold = 50;
                if (offset.x < -swipeThreshold) {
                  // Swiped Left -> Next Slide
                  setCurrentIndex((prev) => (prev + 1) % totalItems);
                } else if (offset.x > swipeThreshold) {
                  // Swiped Right -> Previous Slide
                  setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
                }
              }}
              animate={{
                scale,
                rotateY,
                opacity,
                x,
                zIndex,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{
                transformStyle: 'preserve-3d',
              }}
              className={`absolute w-full max-w-[460px] sm:max-w-[520px] ${
                isCenter ? 'cursor-grab active:cursor-grabbing pointer-events-auto' : 'cursor-pointer pointer-events-auto'
              }`}
            >
              <div className="glass-card rounded-3xl p-5 border border-white/20 shadow-[0_15px_45px_rgba(0,0,0,0.6)] bg-white/10 backdrop-blur-xl relative overflow-hidden group">
                {/* Header Tag / Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold bg-indigo-500/20 text-indigo-200 border border-indigo-400/40 shadow-sm">
                    <Clapperboard className="w-3 h-3 text-blue-300" />
                    {item.badge}
                  </span>
                  <span className="text-xs text-gray-300 font-semibold flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-blue-300" /> {item.views}
                  </span>
                </div>

                {/* Video Title & Subtitle */}
                <h3 className="font-extrabold text-lg text-white mb-1 font-heading group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 mb-4 font-sans">
                  {item.subtitle}
                </p>

                {/* Responsive Embedded YouTube Frame with Exact Playlist URL */}
                <div className="rounded-2xl overflow-hidden bg-black/50 border border-white/10 aspect-video relative shadow-inner">
                  <iframe
                    src={item.youtubeEmbedUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-2xl pointer-events-auto"
                    title={item.title}
                  />
                  {/* Invisible drag-shield overlay only on inactive side cards, allowing direct playback on center card */}
                  {!isCenter && <div className="absolute inset-0 z-50 cursor-pointer bg-transparent" />}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Glowing Navigation Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {filteredItems.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setCurrentIndex(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
            className={`rounded-full transition-all duration-300 ${
              dotIdx === currentIndex
                ? 'w-6 h-2 bg-white shadow-[0_0_12px_rgba(255,255,255,0.85)]'
                : 'w-2 h-2 bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
