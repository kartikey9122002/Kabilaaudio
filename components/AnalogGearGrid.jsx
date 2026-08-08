'use client';

import { motion } from 'framer-motion';
import { Cpu, Mic, Volume2, Music, Sparkles, Sliders } from 'lucide-react';

const GEAR_ITEMS = [
  {
    id: 1,
    title: 'Analog Outboard Rack',
    specs: 'SSL Fusion, Neve 1073, LA-2A',
    category: 'Analogue Outboard & Summing',
    icon: Sliders,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    description: 'Hardware master bus saturation, Neve preamp warmth, and legendary Teletronix LA-2A optical tube limiting.',
    badge: 'Analogue Hardware',
  },
  {
    id: 2,
    title: 'Vocal Isolation & Microphones',
    specs: 'Neumann U 87, Sony C-800G',
    category: 'Vocal Chain & Capture',
    icon: Mic,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    description: 'Gold-standard vintage vocal microphones paired with custom acoustically isolated vocal sanctuary booth.',
    badge: 'Vocal Chain',
  },
  {
    id: 3,
    title: 'Monitoring & Conversion',
    specs: 'Focal Trio11',
    category: 'Monitoring & Conversion',
    icon: Volume2,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    description: 'Flawless 3-way active monitoring accuracy with UA Apollo x16 converters for uncompromised sonic detail.',
    badge: 'Reference Monitors',
  },
  {
    id: 4,
    title: 'Instruments & Synths',
    specs: 'Sequential Prophet-6',
    category: 'Synthesizers & Keys',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    description: 'Pure analog 6-voice polyphonic synth engine for lush vintage pads, sub-bass, and cutting synth leads.',
    badge: 'Analog Synths',
  },
];

export default function AnalogGearGrid() {
  return (
    <section id="hardware" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-blue-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          <Cpu className="w-3.5 h-3.5 text-blue-300" />
          Studio Architecture & Analog Gear
        </div>
        <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight font-heading">
          ANALOG HARDWARE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white">STUDIO SETUP</span>
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans">
          State-of-the-art studio environment combining legendary analog outboard hardware with pristine digital conversion.
        </p>
      </div>

      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {GEAR_ITEMS.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-[2.5rem] p-6 sm:p-8 border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.3)] transition-all duration-500 bg-white/10 backdrop-blur-xl relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6 bg-black/40 border border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d21] via-[#0c0d21]/40 to-transparent" />

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

