'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Disc, Sparkles } from 'lucide-react';

const SPOTIFY_ITEMS = [
  {
    id: 1,
    title: 'Curated Sounds Vol. 1 [Official Playlist]',
    artist: 'Kabila Audio Executive Selection',
    category: 'Hip-Hop & Trap',
    badge: '50M+ Spotify Streams',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/playlist/0leCNHrIVjJYLHVgTKWuuW?utm_source=generator&theme=0',
  },
  {
    id: 2,
    title: 'Kabila Master Mix [Spatial Audio]',
    artist: 'Kabila Audio & Featured Artists',
    category: 'R&B / Soul',
    badge: '18M+ Streams • Multi-Platinum',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/playlist/0leCNHrIVjJYLHVgTKWuuW?utm_source=generator&theme=0',
  },
  {
    id: 3,
    title: 'Multi-Platinum Studio Vault',
    artist: 'Kabila Audio Official Release',
    category: 'Hip-Hop & Trap',
    badge: '12x Platinum Certified',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/playlist/0leCNHrIVjJYLHVgTKWuuW?utm_source=generator&theme=0',
  },
  {
    id: 4,
    title: 'Executive Audio Architecture',
    artist: 'Kabila Audio Stem Master Series',
    category: 'Mixed & Mastered',
    badge: 'Billboard Top 10',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/playlist/0leCNHrIVjJYLHVgTKWuuW?utm_source=generator&theme=0',
  },
  {
    id: 5,
    title: 'Deep Analog Space & Bass',
    artist: 'Kabila Audio Sound Design',
    category: 'Pop',
    badge: '25M+ Streams • Global Hit',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/playlist/0leCNHrIVjJYLHVgTKWuuW?utm_source=generator&theme=0',
  },
];

const CATEGORIES = ['All', 'Hip-Hop & Trap', 'R&B / Soul', 'Mixed & Mastered', 'Pop'];

export default function SpotifyWaterfallGallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = activeTab === 'All'
    ? SPOTIFY_ITEMS
    : SPOTIFY_ITEMS.filter((item) => item.category === activeTab);

  const totalItems = filteredItems.length;

  return (
    <section id="music" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-24 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-blue-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          <Disc className="w-3.5 h-3.5 text-blue-300 animate-spin-slow" />
          Multi-Platinum Discography
        </div>
        <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight font-heading">
          SPOTIFY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white">WATERFALL GALLERY</span>
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans">
          Stream multi-platinum releases, executive album productions, spatial stem mixes, and radio chart-toppers produced by Kabila Audio. Swipe left or right to explore.
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
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold bg-indigo-500/20 text-indigo-200 border border-indigo-400/40 shadow-sm">
                    <Sparkles className="w-3 h-3 text-blue-300" />
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider font-heading">
                    {item.category}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-extrabold text-lg text-white mb-1 font-heading group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 mb-4 font-sans">
                  {item.artist}
                </p>

                {/* Embedded Spotify Player with Exact Playlist Link */}
                <div className="rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-inner relative">
                  <iframe
                    src={item.spotifyEmbedUrl}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-2xl pointer-events-auto"
                    title={item.title}
                  />
                  {/* Invisible drag-shield overlay only on inactive side cards, allowing full playability on the active center card */}
                  {!isCenter && <div className="absolute inset-0 z-50 cursor-pointer bg-transparent" />}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Glowing Navigation Dots Row */}
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
