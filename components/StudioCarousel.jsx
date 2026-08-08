'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';

export default function StudioCarousel() {
  const cardsData = [
    {
      id: 1,
      title: 'Main SSL 9000J Control Room & Dolby Atmos Setup',
      category: 'Flagship Studio A',
      description: 'Custom-tuned PMC 7.1.4 Atmos monitoring system powered by Solid State Logic 9000J console and outboard Neve preamps.',
      youtubeEmbedUrl: 'https://www.youtube.com/embed/videoseries?list=PLpgDJaGurXAlF8jR3WyZG5FektozSIt4T',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
      specs: ['SSL 9000J 72 Ch', 'PMC 7.1.4 Dolby Atmos', 'Neve 1073 (x8)', 'Universal Audio Apollo x16'],
    },
    {
      id: 2,
      title: 'Vintage Synthesizer & Modular Wall Showcase',
      category: 'Analog Vault',
      description: 'Over 40 classic synths including Moog Model D, Sequential Prophet-5, Roland Jupiter-8, and custom Eurorack racks.',
      youtubeEmbedUrl: 'https://www.youtube.com/embed/videoseries?list=PLpgDJaGurXAlF8jR3WyZG5FektozSIt4T',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
      specs: ['Moog Model D', 'Prophet-5', 'Roland Jupiter-8', 'Eurorack 18U Wall'],
    },
    {
      id: 3,
      title: 'Mastering Grade Acoustic Live Booth & Vocal Chain',
      category: 'Vocal Sanctuary',
      description: 'Decoupled floating room construction with Neumann U87 Ai, Telefunken ELA M 251T, and Fairchild 670 compressor.',
      youtubeEmbedUrl: 'https://www.youtube.com/embed/videoseries?list=PLpgDJaGurXAlF8jR3WyZG5FektozSIt4T',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      specs: ['Telefunken ELA M 251T', 'Neumann U87 Ai', 'Fairchild 670', 'Manley VOXBOX'],
    },
    {
      id: 4,
      title: 'Spatial Mastering Room & Custom Speaker Wall',
      category: 'Studio B',
      description: 'Precision acoustics designed by Walters-Storyk Design Group for pristine spatial mix translation.',
      youtubeEmbedUrl: 'https://www.youtube.com/embed/videoseries?list=PLpgDJaGurXAlF8jR3WyZG5FektozSIt4T',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80',
      specs: ['WSDG Acoustic Design', 'Genelec SAM 1238A', 'Trinnov Nova Processor'],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null);

  const totalItems = cardsData.length;

  // Auto-loop every 8 seconds, pause on hover
  useEffect(() => {
    if (isHovered || playingVideo !== null) return;
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex, isHovered, playingVideo]);

  const handleNext = () => {
    setPlayingVideo(null);
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setPlayingVideo(null);
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // Stack positions calculation: 3 cards
  const getCardAt = (offset) => {
    const idx = (activeIndex + offset) % totalItems;
    return { ...cardsData[idx], offset };
  };

  const currentCards = [getCardAt(0), getCardAt(1), getCardAt(2)];

  return (
    <div className="relative py-12">
      {/* Controls & Pagination Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
          <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest">
            Interactive 3D Studio Tour • Swipe or Drag
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Pagination Glowing Dots */}
          <div className="flex items-center gap-2">
            {cardsData.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setPlayingVideo(null);
                  setActiveIndex(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? 'w-7 h-2 bg-white shadow-[0_0_12px_rgba(255,255,255,0.85)]'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3D Perspective Container with Drag Swipe */}
      <div
        className="relative w-full h-[480px] sm:h-[540px] [perspective:1200px] flex items-center justify-center select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="sync">
          {currentCards.map((card) => {
            const isCardActive = card.offset === 0;

            const styleConfigs = {
              0: { zIndex: 30, scale: 1, x: 0, rotateY: 0, opacity: 1 },
              1: { zIndex: 20, scale: 0.92, x: 45, rotateY: -8, opacity: 0.85 },
              2: { zIndex: 10, scale: 0.84, x: 85, rotateY: -15, opacity: 0.65 },
            };

            const config = styleConfigs[card.offset] || styleConfigs[2];

            return (
              <motion.div
                key={`${card.id}-${card.offset}`}
                drag={isCardActive ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset }) => {
                  const swipeThreshold = 50;
                  if (offset.x < -swipeThreshold) {
                    handleNext();
                  } else if (offset.x > swipeThreshold) {
                    handlePrev();
                  }
                }}
                initial={
                  card.offset === 0
                    ? { rotateY: 0, x: 0, opacity: 1, scale: 1 }
                    : { rotateY: config.rotateY, x: config.x, opacity: config.opacity, scale: config.scale }
                }
                animate={{
                  rotateY: config.rotateY,
                  x: config.x,
                  scale: config.scale,
                  opacity: config.opacity,
                }}
                exit={{
                  rotateY: -110,
                  x: -120,
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  zIndex: config.zIndex,
                  transformOrigin: 'left center',
                }}
                className={`absolute inset-0 max-w-3xl mx-auto w-full h-full rounded-[2.5rem] glass-card border border-white/20 p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-white/10 backdrop-blur-2xl overflow-hidden ${
                  isCardActive ? 'cursor-grab active:cursor-grabbing pointer-events-auto' : 'cursor-pointer pointer-events-auto'
                }`}
                onClick={() => {
                  if (!isCardActive) {
                    setPlayingVideo(null);
                    setActiveIndex((activeIndex + card.offset) % totalItems);
                  }
                }}
              >
                {/* Background Image Overlay with Gradient */}
                <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2.5rem]">
                  <img
                    src={card.image}
                    alt={card.title}
                    draggable={false}
                    className="w-full h-full object-cover opacity-35 filter contrast-125 hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d21] via-[#0c0d21]/70 to-transparent pointer-events-none" />
                </div>

                {/* Card Top Info */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-blue-300 backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                    {card.category}
                  </span>
                  {isCardActive && (
                    <span className="text-xs text-blue-300 font-bold uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/30">
                      Swipeable 3D Card
                    </span>
                  )}
                </div>

                {/* Video Container / Play Trigger */}
                <div className="relative z-10 my-4 flex-1 flex flex-col justify-center items-center">
                  {playingVideo === card.id ? (
                    <div className="w-full h-48 sm:h-64 rounded-2xl overflow-hidden border border-blue-400/40 shadow-2xl relative">
                      <iframe
                        src={card.youtubeEmbedUrl}
                        title={card.title}
                        className="w-full h-full pointer-events-auto"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayingVideo(card.id);
                      }}
                      className="group flex flex-col items-center gap-3 pointer-events-auto"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white hover:bg-blue-50 text-indigo-950 p-1 shadow-[0_0_35px_rgba(165,180,252,0.6)] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-indigo-950 translate-x-0.5" />
                      </div>
                      <span className="text-xs font-semibold text-gray-200 tracking-wider bg-black/40 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
                        Click to Play 4K Video Vlog
                      </span>
                    </button>
                  )}

                  {/* Invisible drag-shield overlay only on inactive side cards */}
                  {!isCardActive && <div className="absolute inset-0 z-50 cursor-pointer bg-transparent" />}
                </div>

                {/* Card Footer Details */}
                <div className="relative z-10 space-y-3">
                  <h3 className="font-bold text-xl sm:text-2xl text-white leading-snug font-heading">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 max-w-xl font-sans">
                    {card.description}
                  </p>

                  {/* Gear Specs Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {card.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gray-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
