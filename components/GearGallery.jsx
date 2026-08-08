'use client';

import { motion } from 'framer-motion';
import { Camera, Sparkles, Sliders, Cpu, Radio, ShieldCheck } from 'lucide-react';

export default function GearGallery() {
  const gearItems = [
    {
      id: 1,
      title: 'Solid State Logic 9000J Console',
      category: 'Analogue Desk',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
      badge: '72 Channels',
      aspectRatio: 'h-64',
    },
    {
      id: 2,
      title: 'Neumann U87 Vintage Tube Microphone',
      category: 'Vocal Chain',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
      badge: '1974 Original',
      aspectRatio: 'h-80',
    },
    {
      id: 3,
      title: 'Moog Synthesizers & Analog Sequencer Wall',
      category: 'Synthesizers',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      badge: 'Analog Vault',
      aspectRatio: 'h-72',
    },
    {
      id: 4,
      title: 'PMC 7.1.4 Dolby Atmos Speaker Array',
      category: 'Monitoring System',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      badge: 'Calibrated Atmos',
      aspectRatio: 'h-60',
    },
    {
      id: 5,
      title: 'Universal Audio Apollo x16 Heritage Rack',
      category: 'Converters',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
      badge: 'DSP Processing',
      aspectRatio: 'h-80',
    },
    {
      id: 6,
      title: 'Custom Floating Vocal Booth Acoustics',
      category: 'Live Room',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
      badge: 'Acoustic Sanctuary',
      aspectRatio: 'h-64',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-purple-300">
          <Camera className="w-3.5 h-3.5 text-pink-400" />
          Analog & Digital Hardware Gallery
        </div>
        <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">GEAR ARCHIVE</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          High-resolution gallery of our world-class analogue outboard gear, rare vintage synths, and spatial monitoring setups.
        </p>
      </div>

      {/* Masonry Image Layout: CSS multi-column */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {gearItems.map((item, index) => {
          const isEven = index % 2 === 0;
          const initialX = isEven ? -50 : 50;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: initialX, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: (index % 3) * 0.1 }}
              whileHover={{ y: -5 }}
              className="break-inside-avoid inline-block w-full mb-6"
            >
              <div className="glass-card rounded-3xl p-4 border border-white/10 shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)] hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.4)] transition-all duration-500 relative group overflow-hidden">
                {/* Image Container */}
                <div className={`relative ${item.aspectRatio} w-full rounded-2xl overflow-hidden mb-4 bg-black/40`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-transparent opacity-80" />

                  {/* Floating Badge */}
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md border border-white/15 text-purple-300">
                    <Sparkles className="w-3 h-3 text-pink-400" />
                    {item.badge}
                  </span>
                </div>

                {/* Content Details */}
                <div className="space-y-1 px-1">
                  <span className="text-[11px] font-bold text-purple-400 tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
