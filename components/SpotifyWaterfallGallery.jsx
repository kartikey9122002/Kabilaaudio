'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Disc, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const featuredTracks = [
  { id: 1, spotifyTrackId: '2WD3XM1dcrWbiHYm7F3qqB', isViral: true },
  { id: 2, spotifyTrackId: '6bIQSgagjbpg1RdiGpuQmW' },
  { id: 3, spotifyTrackId: '3UBOmRHmkTbhKUeHzeRY2M' },
  { id: 4, spotifyTrackId: '1Vlp0sbArrFDQpX143k1Kb' },
  { id: 5, spotifyTrackId: '39RlJTsT5BDVixFJ3veFhX' },
  { id: 6, spotifyTrackId: '1Zl5BR8CxCiyUoKpj5Dt5p' },
  { id: 7, spotifyTrackId: '3iGsTIt5lliWtipyKqyNFA' },
  { id: 8, spotifyTrackId: '51rkfiQVUvOARcYLH82SpD' },
  { id: 9, spotifyTrackId: '1ejCIRnJTZmSv3JbCHcxPn' },
  { id: 10, spotifyTrackId: '3DNCyOW7p8EXFQrQAK4rgf' },
  { id: 11, spotifyTrackId: '7hcVEZutFQ25NRi0rxWhu3' },
  { id: 12, spotifyTrackId: '5kmf4oW8RABUy5YjRwZkEW' },
  { id: 13, spotifyTrackId: '36ZIIIGhJIfBccLwXwVADU' },
  { id: 14, spotifyTrackId: '7qs7gUTHPAB5d2M6lGUHgm' },
  { id: 15, spotifyTrackId: '0Q7xUvGk5M2m5myGqirAYK' },
  { id: 16, spotifyTrackId: '5ewX1coKzaBuprVBsDk6zq' },
  { id: 17, spotifyTrackId: '53kuqIuchF2ukyvsaM85DK' },
  { id: 18, spotifyTrackId: '4ROcLmJFgZ3bK3bWkYo9N2' },
  { id: 19, spotifyTrackId: '2a36N7pLn77kJ6UFDwlYsp' },
  { id: 20, spotifyTrackId: '0ZhbWaSMm9krrS2eiZCdtJ' },
];

export default function SpotifyWaterfallGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTracks = featuredTracks.length;

  return (
    <section id="music" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-24 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-blue-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          <Disc className="w-3.5 h-3.5 text-blue-300 animate-spin-slow" />
          Official Discography • {totalTracks} Releases
        </div>

        <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight font-heading">
          SPOTIFY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white">WATERFALL GALLERY</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans">
          Stream official multi-platinum releases, executive album productions, and spatial stem mixes. Drag or swipe cards to navigate the 3D showcase.
        </p>
      </div>

      {/* 3D Coverflow Perspective Container */}
      <div className="relative flex justify-center items-center h-[310px] sm:h-[330px] w-full [perspective:1200px] my-6 select-none">
        {featuredTracks.map((song, index) => {
          let diff = index - currentIndex;
          if (diff > totalTracks / 2) diff -= totalTracks;
          if (diff < -totalTracks / 2) diff += totalTracks;

          let zIndex = 10;
          let scale = 0.6;
          let rotateY = 0;
          let opacity = 0;
          let x = '0%';
          let isCenter = diff === 0;

          if (isCenter) {
            zIndex = 30;
            scale = 1;
            rotateY = 0;
            opacity = 1;
            x = '0%';
          } else if (diff === -1) {
            zIndex = 20;
            scale = 0.85;
            rotateY = 25;
            opacity = 0.5;
            x = '-65%';
          } else if (diff === 1) {
            zIndex = 20;
            scale = 0.85;
            rotateY = -25;
            opacity = 0.5;
            x = '65%';
          } else {
            zIndex = 10;
            scale = 0.6;
            rotateY = diff < 0 ? 40 : -40;
            opacity = 0;
            x = diff < 0 ? '-130%' : '130%';
          }

          return (
            <motion.div
              key={song.id}
              onClick={() => {
                if (!isCenter) setCurrentIndex(index);
              }}
              drag={isCenter ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset }) => {
                const swipeThreshold = 45;
                if (offset.x < -swipeThreshold) {
                  setCurrentIndex((prev) => (prev + 1) % totalTracks);
                } else if (offset.x > swipeThreshold) {
                  setCurrentIndex((prev) => (prev - 1 + totalTracks) % totalTracks);
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
              className={`absolute w-full max-w-[420px] sm:max-w-[480px] ${
                isCenter
                  ? 'cursor-grab active:cursor-grabbing pointer-events-auto'
                  : 'cursor-pointer pointer-events-auto'
              }`}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-blue-500/50 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.65)] relative overflow-hidden group">
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold ${
                    song.isViral
                      ? 'bg-gradient-to-r from-red-500/20 to-amber-500/20 text-amber-300 border border-red-400/40 animate-pulse'
                      : 'bg-indigo-500/20 text-indigo-200 border border-indigo-400/30'
                  }`}>
                    <Sparkles className="w-3 h-3 text-blue-300" />
                    {song.isViral ? 'VIRAL HIT' : `Track ${song.id < 10 ? `0${song.id}` : song.id} / ${totalTracks}`}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-heading">
                    Official Release
                  </span>
                </div>

                {/* Spotify Live 152px Player Embed */}
                <div className="rounded-xl overflow-hidden bg-black/50 border border-white/10 shadow-inner">
                  <iframe
                    style={{ borderRadius: '12px' }}
                    src={`https://open.spotify.com/embed/track/${song.spotifyTrackId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-xl"
                    title={`Spotify Player Track ${song.id}`}
                  />
                </div>

                {/* Click Shield Overlay for inactive side cards */}
                {!isCenter && (
                  <div className="absolute inset-0 z-50 cursor-pointer bg-black/20 backdrop-blur-[2px] rounded-2xl" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination Controls & Navigation Arrows Row */}
      <div className="flex items-center justify-center gap-4 mt-6 relative z-20">
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + totalTracks) % totalTracks)}
          aria-label="Previous track"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-gray-300 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-md"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Interactive Pagination Dots */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center max-w-lg px-2">
          {featuredTracks.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to track ${dotIdx + 1}`}
              className={`rounded-full transition-all duration-300 ${
                dotIdx === currentIndex
                  ? 'w-6 h-2 bg-white shadow-[0_0_12px_rgba(255,255,255,0.85)]'
                  : 'w-2 h-2 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % totalTracks)}
          aria-label="Next track"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-gray-300 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-md"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
