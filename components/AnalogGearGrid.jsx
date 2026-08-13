'use client';

import { motion } from 'framer-motion';
import { Cpu, Music, Sparkles, Sliders, Layers } from 'lucide-react';

const GEAR_ITEMS = [
  {
    id: 1,
    title: 'Universal Audio Interface',
    specs: 'UAD Volt 2',
    category: 'AUDIO INTERFACE & CONVERSION',
    badge: 'AUDIO INTERFACE & CONVERSION',
    icon: Cpu,
    image: '/uad-volt.png',
    description: 'Vintage mic preamp emulation, built-in 76 compressor circuitry, and studio-grade 24-bit/192kHz audio conversion.',
  },
  {
    id: 2,
    title: 'Studio MIDI Controller',
    specs: 'M-Audio Keystation 49 MK3',
    category: 'MIDI & PRODUCTION CONTROL',
    badge: 'MIDI & PRODUCTION CONTROL',
    icon: Sliders,
    image: '/maudio-midi.png',
    description: 'Velocity-sensitive semi-weighted keys with pitch and modulation wheels for expressive DAW production.',
  },
  {
    id: 3,
    title: 'Weighted Digital Piano',
    specs: 'Casio PX-S1100',
    category: 'PREMIUM KEYS & SYNTHS',
    badge: 'PREMIUM KEYS & SYNTHS',
    icon: Music,
    image: '/casio-piano.png',
    description: 'Ultra-slim smart scaled hammer action keyboard delivering authentic grand piano acoustic resonance.',
  },
  {
    id: 4,
    title: 'Custom Electric Guitar',
    specs: 'Hertz Les Paul Custom',
    category: 'STUDIO INSTRUMENTS',
    badge: 'STUDIO INSTRUMENTS',
    icon: Music,
    image: '/hertz-guitar.png',
    description: 'Flame maple top with dual humbucking pickups crafted for rich vintage crunch, warm cleans, and searing leads.',
  },
  {
    id: 5,
    title: 'Intelligent Multi-Effects',
    specs: 'Mooer GE1000 Pro Li',
    category: 'EFFECTS & PROCESSING',
    badge: 'EFFECTS & PROCESSING',
    icon: Layers,
    image: '/mooer-pedal.png',
    description: 'Flagship MNRS amp modeling, high-resolution IR cabinet simulation, and studio-grade multi-effects processing.',
  },
];

export default function AnalogGearGrid() {
  return (
    <section id="hardware" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-blue-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          <Cpu className="w-3.5 h-3.5 text-blue-300" />
          Studio Architecture &amp; Analog Gear
        </div>
        <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight font-heading">
          ANALOG HARDWARE &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white">STUDIO SETUP</span>
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans">
          State-of-the-art studio environment combining legendary analog outboard hardware with pristine digital conversion.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {GEAR_ITEMS.map((item, index) => {
          const Icon = item.icon;
          const isLastOdd = index === 4;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className={`glass-card rounded-[2.5rem] p-6 sm:p-8 border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.3)] transition-all duration-500 bg-white/10 backdrop-blur-xl relative overflow-hidden group flex flex-col justify-between ${
                isLastOdd ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : ''
              }`}
            >
              {/* Image Preview Container */}
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-black/40 border border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d21] via-[#0c0d21]/30 to-transparent" />

                {/* Floating Top Badge */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold bg-black/70 backdrop-blur-md border border-white/20 text-blue-200 shadow-md">
                  <Sparkles className="w-3 h-3 text-blue-300" />
                  {item.badge}
                </span>
              </div>

              {/* Hardware Information */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-400/30">
                    <Icon className="w-4 h-4 text-blue-300" />
                  </div>
                  <span className="text-xs font-bold text-blue-300 tracking-wider uppercase font-heading">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-extrabold text-2xl text-white font-heading group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                {/* Gear Specs Pill */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-blue-200 font-mono">
                  ✨ Key Gear: <span className="text-white">{item.specs}</span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-sans pt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

