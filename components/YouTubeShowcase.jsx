'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Youtube, Clapperboard, ChevronLeft, ChevronRight } from 'lucide-react';

const featuredVideos = [
  { id: 1, youtubeId: 'L5x2svfZNP8' },
  { id: 2, youtubeId: '0QiKbE0bZTE' },
  { id: 3, youtubeId: '3gtzU2Ci0jo' },
  { id: 4, youtubeId: 'Xi96vTGm-Ww' },
  { id: 5, youtubeId: 'cFeMtFEc6SU' },
  { id: 6, youtubeId: 'zFyquKD9E0g' },
  { id: 7, youtubeId: 'QU45SpsttlY' },
  { id: 8, youtubeId: 'WUgNAKypVpc' },
  { id: 9, youtubeId: 'VJAhIcWV0zg' },
  { id: 10, youtubeId: 'xKv3z8vaK8k' },
  { id: 11, youtubeId: 'EJj-WkASnn0' },
  { id: 12, youtubeId: 'NDfO56NEzmQ' },
  { id: 13, youtubeId: 'PHQAeT-Zalw' },
  { id: 14, youtubeId: 'r7DQTpMC0so' },
  { id: 15, youtubeId: '0IArKB8yjrI' },
  { id: 16, youtubeId: 'by-BSdpj0SY' },
  { id: 17, youtubeId: 'yjjFivlK8BQ' },
  { id: 18, youtubeId: 'Hlvy8_pc3s4' },
  { id: 19, youtubeId: 'jbPLWNxwM9w' },
];

export default function YouTubeShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalVideos = featuredVideos.length;

  return (
    <section id="videos" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-24 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-blue-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          <Youtube className="w-4 h-4 text-red-400 animate-pulse" />
          Official Video Showcase • 19 Releases
        </div>

        <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight font-heading">
          YOUTUBE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white">WATERFALL SHOWCASE</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans">
          Explore official music videos, studio session breakdowns, analog gear shootouts, and multi-platinum beat tutorials. Drag or swipe cards to explore.
        </p>
      </div>

      {/* 3D Coverflow Perspective Container with Drag Swipe */}
      <div className="relative flex justify-center items-center h-[340px] sm:h-[360px] md:h-[380px] w-full [perspective:1000px] my-6 select-none">
        {featuredVideos.map((video, index) => {
          // Calculate relative circular distance from currentIndex
          let diff = index - currentIndex;
          if (diff > totalVideos / 2) diff -= totalVideos;
          if (diff < -totalVideos / 2) diff += totalVideos;

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
            rotateY = 25;
            opacity = 0.5;
            x = '-65%';
          } else if (diff === 1) {
            // Card to the Right
            zIndex = 20;
            scale = 0.85;
            rotateY = -25;
            opacity = 0.5;
            x = '65%';
          } else {
            // Hidden Cards further out
            zIndex = 10;
            scale = 0.6;
            rotateY = diff < 0 ? 40 : -40;
            opacity = 0;
            x = diff < 0 ? '-130%' : '130%';
          }

          return (
            <motion.div
              key={video.id}
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
                  setCurrentIndex((prev) => (prev + 1) % totalVideos);
                } else if (offset.x > swipeThreshold) {
                  // Swiped Right -> Previous Slide
                  setCurrentIndex((prev) => (prev - 1 + totalVideos) % totalVideos);
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
              <div className="bg-white/5 backdrop-blur-md rounded-3xl sm:rounded-[32px] md:rounded-[36px] p-5 sm:p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.65)] relative overflow-hidden group">
                {/* Header Tag / Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold bg-indigo-500/20 text-indigo-200 border border-indigo-400/40 shadow-sm">
                    <Clapperboard className="w-3 h-3 text-blue-300" />
                    Video {video.id < 10 ? `0${video.id}` : video.id} / 19
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-heading">
                    Official Studio Release
                  </span>
                </div>

                {/* Responsive Embedded YouTube Frame with Exact YouTube Video URL */}
                <div className="rounded-2xl overflow-hidden bg-black/50 border border-white/10 aspect-video relative shadow-inner">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    width="100%"
                    height="100%"
                    className="aspect-video w-full h-full rounded-2xl pointer-events-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    title={`YouTube Video ${video.id}`}
                  />
                  {/* Invisible drag-shield overlay only on inactive side cards, allowing direct playback on center card */}
                  {!isCenter && (
                    <div className="absolute inset-0 z-50 cursor-pointer bg-black/20 backdrop-blur-[2px] rounded-3xl sm:rounded-[32px] md:rounded-[36px]" />
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination Controls & Navigation Arrows Row */}
      <div className="flex items-center justify-center gap-4 mt-6 relative z-20">
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + totalVideos) % totalVideos)}
          aria-label="Previous video"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-gray-300 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-md"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Interactive Pagination Dots */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center max-w-lg px-2">
          {featuredVideos.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to video ${dotIdx + 1}`}
              className={`rounded-full transition-all duration-300 ${
                dotIdx === currentIndex
                  ? 'w-6 h-2 bg-white shadow-[0_0_12px_rgba(255,255,255,0.85)]'
                  : 'w-2 h-2 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % totalVideos)}
          aria-label="Next video"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-gray-300 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-md"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
