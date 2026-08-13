'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Music,
  Video,
  Film,
  Activity,
  Footprints,
  Sliders,
  Mic2,
  Radio,
  Share2,
  Megaphone,
  Gamepad2,
  Wrench,
  Layers,
  ArrowRight,
  FileCheck,
  CreditCard,
  Clock,
  Zap,
  Moon,
  FolderArchive,
  Layers2,
  Globe,
  Users,
  Headphones,
  CheckCircle2,
} from 'lucide-react';

const SERVICE_CATEGORIES = [
  {
    id: 'music-production-services',
    cardNumber: '01',
    categoryBadge: 'Flagship Audio',
    title: 'MUSIC PRODUCTION SERVICES',
    icon: Music,
    badge: '9 Service Tiers',
    description: 'Comprehensive music production, live tracking, vocal pitch tuning, analog/digital mixing and mastering.',
    type: 'list',
    items: [
      { name: 'Music Programming', price: '₹30,000' },
      { name: 'Live Instruments', price: '₹15,000 / Instrument' },
      { name: 'Vocal Tuning & Pitch Correction (Normal)', price: '₹2,000' },
      { name: 'Vocal Pitch Correction with Melodyne', price: '₹4,000' },
      { name: 'Mixing – Digital', price: '₹15,000' },
      { name: 'Mixing – Analog', price: '₹30,000' },
      { name: 'Mastering – Digital', price: '₹10,000' },
      { name: 'Mastering – Analog', price: '₹15,000' },
      { name: 'Vocal Recording', price: '₹1,000 / Hour' },
    ],
  },
  {
    id: 'custom-song-production',
    cardNumber: '02',
    categoryBadge: 'Full Composition',
    title: 'CUSTOM SONG PRODUCTION',
    icon: Sparkles,
    badge: 'Turnkey Songwriting',
    description: 'Custom song creation from scratch, including composition, lyrics, arrangement, and elite production.',
    type: 'detailed_list',
    items: [
      {
        name: 'Full Song Production',
        price: '₹50,000–₹60,000',
        detail: 'Composition / Lyrics / Music Production',
      },
      {
        name: 'Premium Song Production',
        price: '₹75,000–₹1,00,000',
        detail: 'Composition / Lyrics / Music Production / Live Instruments',
      },
      {
        name: 'Film / OTT Level Song',
        price: '₹1,00,000–₹3,00,000',
      },
    ],
    footerNote: '*Note: Singer & Studio Charges Not Included.',
  },
  {
    id: 'film-ott-post-production',
    cardNumber: '03',
    categoryBadge: 'Cinematic Post',
    title: 'FILM & OTT AUDIO POST PRODUCTION',
    icon: Film,
    badge: 'Shorts & Features',
    description: 'Comprehensive cinematic scoring, foley, immersive surround sound design, and Dolby/5.1 theatre mastering.',
    type: 'sections',
    sections: [
      {
        sectionTitle: 'SHORT FILM',
        items: [
          {
            name: 'Background Score + Foley & Sound Design',
            price: '₹3,000–₹6,000 / Minute',
          },
        ],
      },
      {
        sectionTitle: 'FEATURE FILM & OTT',
        items: [
          { name: 'Background Score', price: '₹8,000–₹10,000 / Minute' },
          { name: 'Detailed Foley & Sound Design', price: '₹3,000–₹6,000 / Minute' },
          { name: 'Final Stereo Mix', price: '₹25,000' },
          { name: '5.1 Theatre Quality Mix', price: '₹1,00,000' },
        ],
      },
      {
        sectionTitle: 'FULL AUDIO POST-PRODUCTION PACKAGE',
        items: [
          {
            name: '2.5 Hour Film',
            price: '₹5,00,000',
            detail: 'Includes All Audio Post-Production Services',
          },
        ],
      },
    ],
  },
  {
    id: 'sound-design',
    cardNumber: '04',
    categoryBadge: 'Audio FX & Impact',
    title: 'Sound Design',
    icon: Activity,
    badge: 'Custom SFX & Ambience',
    description: 'Custom cinematic SFX, immersive transitions, risers, whooshes, and acoustic world-building.',
    type: 'list_with_tags',
    items: [
      { name: '30-sec Sound Design', price: '₹5,000 – ₹15,000' },
      { name: '60-sec Sound Design', price: '₹10,000 – ₹20,000' },
      { name: '2–3 min Video Sound Design', price: '₹15,000 – ₹35,000' },
      { name: '5–10 min Video Sound Design', price: '₹20,000 – ₹50,000' },
      { name: 'Short Film Sound Design', price: '₹25,000 – ₹1,00,000' },
      { name: 'Cinematic Sound Design', price: '₹15,000 – ₹75,000' },
    ],
    tags: [
      'Whooshes',
      'Impacts',
      'Risers',
      'Ambience',
      'Movement',
      'Environmental Sounds',
      'Cinematic Transitions',
      'Character Sounds',
      'Object Sounds',
    ],
  },
  {
    id: 'foley',
    cardNumber: '05',
    categoryBadge: 'Prop & Motion Tracking',
    title: 'Foley Arts',
    icon: Footprints,
    badge: 'Custom Prop Recording',
    description: 'High-detail footsteps, cloth movement, physical props, and textural sound sync performed to picture.',
    type: 'list',
    items: [
      { name: 'Basic Foley', price: '₹8,000 – ₹20,000' },
      { name: 'Detailed Foley', price: '₹20,000 – ₹50,000' },
      { name: 'Cinematic Foley', price: '₹40,000 – ₹1,00,000+' },
      { name: 'Full Short Film Foley', price: '₹25,000 – ₹1,00,000+' },
      { name: 'Feature Film Foley', price: '₹1,00,000 – ₹5,00,000+' },
    ],
  },
  {
    id: 'background-score',
    cardNumber: '06',
    categoryBadge: 'Original Composition',
    title: 'Background Score',
    icon: Music,
    badge: 'Orchestral & Modern',
    description: 'Emotion-driven thematic score composing, digital orchestrations, and live acoustic summing.',
    type: 'detailed_list',
    items: [
      {
        name: 'Basic Score',
        price: '₹15,000 – ₹30,000',
        detail: 'Digital instruments + stock / royalty-cleared elements',
      },
      {
        name: 'Cinematic Score',
        price: '₹30,000 – ₹75,000',
        detail: 'Custom composition + sound design + advanced orchestration',
      },
      {
        name: 'Premium Original Score',
        price: '₹75,000 – ₹2,00,000+',
        detail: 'Custom composition, musicians, live instruments, orchestration & advanced mixing',
      },
      {
        name: 'Large Scale Projects',
        price: '₹2,00,000 – ₹10,00,000+',
        detail: 'Theatrical scale cinematic original scores with extensive instrumentation',
      },
    ],
  },
  {
    id: 'voice-dubbing',
    cardNumber: '07',
    categoryBadge: 'Voiceover & ADR',
    title: 'Voice / Dubbing',
    icon: Mic2,
    badge: 'Acoustic Isolation',
    description: 'High-definition voice recording, character dubbing, multi-language localization, and ADR.',
    type: 'list',
    items: [
      { name: 'Voice Recording', price: '₹2,000 – ₹5,000 / hr' },
      { name: 'Voice Editing', price: '₹2,000 – ₹5,000' },
      { name: 'Voice Cleanup', price: '₹2,000 – ₹7,000' },
      { name: 'Voice Over Production', price: '₹5,000 – ₹20,000' },
      { name: 'Character Voice Recording', price: '₹5,000 – ₹25,000' },
      { name: 'Dubbing', price: '₹8,000 – ₹25,000 / ep' },
      { name: 'Multi-language Dubbing', price: 'Custom Quote' },
      { name: 'ADR Recording', price: '₹3,000 – ₹8,000 / hr' },
      { name: 'Dialogue Editing', price: '₹5,000 – ₹20,000 / proj' },
    ],
  },
  {
    id: 'mixing-mastering',
    cardNumber: '08',
    categoryBadge: 'Stem Summing & Atmos',
    title: 'Mixing & Mastering',
    icon: Sliders,
    badge: 'Hybrid Analog Chain',
    description: 'Surgical frequency balancing, dynamic analog summing, 3D spatial Atmos, and streaming loudness.',
    type: 'sections',
    sections: [
      {
        sectionTitle: 'Mixing Engineering',
        items: [
          { name: 'Stereo Mix', price: '₹5,000 – ₹15,000 / song' },
          { name: 'Premium Mix', price: '₹15,000 – ₹30,000 / song' },
          { name: 'Cinematic Mix', price: '₹20,000 – ₹50,000 / proj' },
          { name: '5.1 Surround Mix', price: '₹25,000 – ₹60,000 / proj' },
          { name: '7.1 Surround Mix', price: '₹40,000 – ₹80,000 / proj' },
          { name: 'Dolby Atmos Spatial Mix', price: '₹50,000 – ₹1,50,000+ / proj' },
        ],
      },
      {
        sectionTitle: 'Mastering Engineering',
        items: [
          { name: 'Standard Mastering', price: '₹2,000 – ₹5,000 / song' },
          { name: 'Premium Mastering', price: '₹5,000 – ₹10,000 / song' },
        ],
      },
    ],
  },
  {
    id: 'podcast-production',
    cardNumber: '09',
    categoryBadge: 'Broadcast & Media',
    title: 'Podcast Production',
    icon: Radio,
    badge: 'Studio Clarity',
    description: 'Turnkey audio engineering for podcasts, audiobooks, and multi-mic episodic talk shows.',
    type: 'packages',
    packages: [
      {
        title: 'Podcast Basic',
        price: '₹3,000 – ₹6,000 / episode',
        includes: 'Cleanup, editing, noise reduction, EQ, compression, loudness mastering',
      },
      {
        title: 'Podcast Premium',
        price: '₹7,000 – ₹15,000 / episode',
        includes: 'Full editing, music, SFX, transitions, sound design, mixing & mastering',
      },
      {
        title: 'Monthly Retainer Suite',
        price: '₹30,000 – ₹1,00,000+ / month',
        includes: 'Dedicated engineering queue based on weekly episode volume & requirements',
      },
    ],
  },
  {
    id: 'social-media-audio',
    cardNumber: '10',
    categoryBadge: 'Digital Creator',
    title: 'YouTube / Social Media Audio',
    icon: Share2,
    badge: 'Viral Soundcraft',
    description: 'Punchy sound design and dynamic voice balancing tailored for YouTube, Reels, and brand campaigns.',
    type: 'list',
    items: [
      { name: 'Reel Audio Design', price: '₹2,000 – ₹5,000' },
      { name: 'Cinematic Reel Audio', price: '₹5,000 – ₹10,000' },
      { name: 'YouTube Video Audio', price: '₹5,000 – ₹20,000' },
      { name: 'Documentary Audio', price: '₹15,000 – ₹75,000' },
      { name: 'Brand Film Audio', price: '₹15,000 – ₹1,00,000' },
      { name: 'Ad Film Audio', price: '₹20,000 – ₹1,50,000+' },
    ],
  },
  {
    id: 'brand-audio',
    cardNumber: '11',
    categoryBadge: 'Sonic Identity',
    title: 'Advertising / Brand Audio',
    icon: Megaphone,
    badge: 'Brand Recall',
    description: 'Iconic audio branding, catchy commercial jingles, and full advertising audio suites.',
    type: 'packages',
    packages: [
      {
        title: 'Commercial Audio Package',
        price: '₹25,000 – ₹1,50,000+',
        includes: 'Original Music, Jingle, Voice-over, Sound Design, Foley, Mixing, Mastering',
      },
      {
        title: 'Brand Commercial Jingle',
        price: '₹15,000 – ₹75,000+',
        includes: 'Memorable brand melody, vocal hooks, arrangement & commercial mix master',
      },
      {
        title: 'Sonic Branding Identity',
        price: '₹50,000 – ₹5,00,000+',
        includes:
          'Brand Sonic Logo, Intro Sound, Outro, Notification Sound, Transitions, Audio Identity System',
      },
    ],
  },
  {
    id: 'game-app-audio',
    cardNumber: '12',
    categoryBadge: 'Interactive Media',
    title: 'Game / App Audio',
    icon: Gamepad2,
    badge: 'Dynamic Interactive',
    description: 'Dynamic soundscapes, reactive UI audio, procedural SFX packs, and immersive game scores.',
    type: 'list',
    items: [
      { name: 'UI Sound Effects', price: '₹10,000 – ₹50,000' },
      { name: 'Game SFX Pack', price: '₹25,000 – ₹1,00,000+' },
      { name: 'Character Sounds', price: '₹15,000 – ₹75,000' },
      { name: 'Game Music', price: '₹20,000 – ₹1,00,000+' },
      { name: 'Complete Audio Design', price: '₹1,00,000 – ₹10,00,000+' },
    ],
  },
  {
    id: 'audio-restoration',
    cardNumber: '13',
    categoryBadge: 'Spectral Restoration',
    title: 'Audio Restoration',
    icon: Wrench,
    badge: 'iZotope RX Advanced',
    description: 'Surgical artifact removal, clipping repair, background noise extraction, and archival remastering.',
    type: 'restoration',
    features: [
      'Noise Removal',
      'Hiss Removal',
      'Hum Removal',
      'Click / Pop Removal',
      'Dialogue Restoration',
      'Old Recording Restoration',
      'Location Audio Cleanup',
    ],
    pricing: [
      { label: 'Hourly Rate', price: '₹2,000 – ₹10,000 / hour' },
      { label: 'Per Project Package', price: '₹5,000 – ₹50,000 / project' },
    ],
  },
  {
    id: 'post-production-packages',
    cardNumber: '14',
    categoryBadge: 'All-In-One Suites',
    title: 'Audio Post-Production Packages',
    icon: Layers,
    badge: 'Complete Turnkey',
    description: 'End-to-end audio post-production packages tailored to every tier of film and video production.',
    type: 'packages',
    packages: [
      {
        title: 'Starter Package',
        price: '₹35,000+',
        includes: 'Dialogue cleanup, basic sound design, music integration, mixing, mastering',
      },
      {
        title: 'Creator Package',
        price: '₹75,000+',
        includes:
          'Dialogue editing, advanced sound design, foley, background music, mixing, mastering, 2 revisions',
      },
      {
        title: 'Cinematic Package',
        price: '₹1,50,000+',
        includes:
          'Dialogue editing, ADR support, custom background score, detailed foley, cinematic sound design, stereo + 5.1 mix, mastering, 3 revisions',
      },
      {
        title: 'Feature / OTT Suite',
        price: 'Starting ₹30,00,000+ (Custom)',
        includes: 'Complete audio post-production from dialogue to final master in any format',
      },
    ],
  },
];

const SUPPLEMENTARY_TERMS = [
  { icon: Clock, label: 'Additional Revision', value: '₹2,000 – ₹10,000', note: 'Beyond included project rounds' },
  { icon: Zap, label: 'Urgent Delivery', value: '+25% – +50%', note: 'Fast-tracked priority queue' },
  { icon: Moon, label: 'Overnight Work', value: '+50% Surcharge', note: '24-hour turnaround service' },
  { icon: Layers2, label: 'Additional Mix Format', value: '₹5,000 / format', note: '5.1, 7.1, or Stereo alternative' },
  { icon: FolderArchive, label: 'Stem Delivery', value: '₹3,000 – ₹10,000', note: 'Separated 24-bit WAV stems' },
  { icon: FileCheck, label: 'Raw Session Files', value: '₹25,000+', note: 'Full DAW session archives' },
  { icon: Globe, label: 'Additional Language', value: 'Custom Quote', note: 'Localization & dubbing' },
  { icon: Users, label: 'Live Musicians', value: 'Actuals + Production Fee', note: 'Session player bookings' },
  { icon: Headphones, label: 'Voice Artist Coordination', value: 'Standard Studio Fee', note: 'Talent casting & booking' },
];

export default function ServicesPricing({ onSelectService }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = SERVICE_CATEGORIES.length;
  const currentCard = SERVICE_CATEGORIES[currentIndex];

  const handleSelect = (categoryTitle) => {
    if (onSelectService) {
      onSelectService(categoryTitle);
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-24 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-blue-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-blue-300 animate-spin-slow" />
          Official Studio Service Menu • 14 Categories
        </div>

        <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight font-heading">
          STUDIO SERVICES &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white">
            3D PRICING SHOWCASE
          </span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
          Explore all 14 official audio engineering, music production, and post-production categories. Drag or swipe cards to navigate the 3D coverflow showcase.
        </p>

        {/* Active Category Pill Indicator */}
        <div className="pt-2">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 text-xs font-bold font-sans">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            Card {currentCard.cardNumber} of 14: <strong className="text-white">{currentCard.title}</strong>
          </span>
        </div>
      </div>

      {/* 3D Coverflow Perspective Container */}
      <div className="relative flex justify-center items-center min-h-[580px] sm:min-h-[600px] w-full [perspective:1200px] my-6 select-none">
        {SERVICE_CATEGORIES.map((card, index) => {
          // Calculate relative circular distance from currentIndex
          let diff = index - currentIndex;
          if (diff > totalCards / 2) diff -= totalCards;
          if (diff < -totalCards / 2) diff += totalCards;

          // Compute 3D Transform attributes for Coverflow mechanics
          let zIndex = 10;
          let scale = 0.65;
          let rotateY = 0;
          let opacity = 0;
          let x = '0%';
          let isCenter = diff === 0;

          if (isCenter) {
            // Active Center Card: 100% scale, fully opaque, highest z-index, prominent shadow
            zIndex = 30;
            scale = 1;
            rotateY = 0;
            opacity = 1;
            x = '0%';
          } else if (diff === -1) {
            // Left Inactive Card: Scaled down, 45% opacity, angled, lower z-index
            zIndex = 20;
            scale = 0.86;
            rotateY = 22;
            opacity = 0.45;
            x = '-68%';
          } else if (diff === 1) {
            // Right Inactive Card: Scaled down, 45% opacity, angled, lower z-index
            zIndex = 20;
            scale = 0.86;
            rotateY = -22;
            opacity = 0.45;
            x = '68%';
          } else {
            // Outlying Hidden Cards
            zIndex = 10;
            scale = 0.65;
            rotateY = diff < 0 ? 35 : -35;
            opacity = 0;
            x = diff < 0 ? '-135%' : '135%';
          }

          const IconComponent = card.icon;

          return (
            <motion.div
              key={card.id}
              onClick={() => {
                if (!isCenter) setCurrentIndex(index);
              }}
              drag={isCenter ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset }) => {
                const swipeThreshold = 45;
                if (offset.x < -swipeThreshold) {
                  // Swiped Left -> Next Card
                  setCurrentIndex((prev) => (prev + 1) % totalCards);
                } else if (offset.x > swipeThreshold) {
                  // Swiped Right -> Previous Card
                  setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
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
              className={`absolute w-full max-w-[440px] sm:max-w-[500px] md:max-w-[540px] ${
                isCenter
                  ? 'cursor-grab active:cursor-grabbing pointer-events-auto'
                  : 'cursor-pointer pointer-events-auto'
              }`}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-3xl sm:rounded-[32px] md:rounded-[36px] p-6 sm:p-7 md:p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.65)] relative overflow-hidden flex flex-col justify-between h-[550px] sm:h-[570px] group transition-colors duration-300 hover:border-indigo-400/40">
                {/* Background Glass Accent Glow */}
                <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

                {/* Card Top Header */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-blue-300 shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-300 font-mono">
                          Card {card.cardNumber} • {card.categoryBadge}
                        </span>
                        <h3 className="font-extrabold text-xl sm:text-2xl text-white font-heading leading-tight group-hover:text-blue-200 transition-colors">
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/10 text-blue-200 border border-white/15 shrink-0 shadow-sm">
                      {card.badge}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 font-sans mb-4 leading-relaxed line-clamp-2">
                    {card.description}
                  </p>
                </div>

                {/* Card Middle: Dynamic Pricing Data Layout */}
                <div className="relative z-10 flex-1 overflow-y-auto pr-1 my-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                  {/* Type 1: Standard List with Price Badges */}
                  {card.type === 'list' && (
                    <div className="space-y-2">
                      {card.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition-colors"
                        >
                          <span className="text-xs font-medium text-gray-200 font-sans leading-tight">
                            {item.name}
                          </span>
                          <span className="text-xs font-bold text-blue-300 font-mono shrink-0 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-400/20 shadow-inner">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Type 2: Packages with Included Breakdown */}
                  {card.type === 'packages' && (
                    <div className="space-y-3">
                      {card.packages.map((pkg, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors space-y-2"
                        >
                          <div className="flex items-baseline justify-between gap-2 flex-wrap">
                            <h4 className="text-xs font-bold text-white font-heading">
                              {pkg.title}
                            </h4>
                            <span className="text-xs font-bold text-blue-300 font-mono bg-blue-500/10 px-2.5 py-0.5 rounded-lg border border-blue-400/20">
                              {pkg.price}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-300 font-sans leading-relaxed border-t border-white/[0.06] pt-1.5">
                            <strong className="text-indigo-200">Includes:</strong> {pkg.includes}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Type 3: Multi-Sections (e.g. Short Film & Feature Film or Mixing & Mastering) */}
                  {card.type === 'sections' && (
                    <div className="space-y-4">
                      {card.sections.map((sec, secIdx) => (
                        <div key={secIdx} className="space-y-2">
                          <h4 className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider font-heading flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            {sec.sectionTitle}
                          </h4>
                          <div className="space-y-1.5">
                            {sec.items.map((item, idx) => (
                              <div
                                key={idx}
                                className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.07] transition-colors space-y-1"
                              >
                                <div className="flex items-center justify-between gap-3">
                                  <span className="text-xs font-medium text-gray-200 font-sans">
                                    {item.name}
                                  </span>
                                  <span className="text-xs font-bold text-blue-300 font-mono shrink-0 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-400/20">
                                    {item.price}
                                  </span>
                                </div>
                                {item.detail && (
                                  <p className="text-[11px] text-gray-300 font-sans italic">
                                    ({item.detail})
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Type 4: List with Tags (Sound Design) */}
                  {card.type === 'list_with_tags' && (
                    <div className="space-y-3">
                      <div className="space-y-1.5">
                        {card.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between gap-3 p-2 rounded-lg bg-white/[0.04] border border-white/[0.06]"
                          >
                            <span className="text-xs font-medium text-gray-200 font-sans">
                              {item.name}
                            </span>
                            <span className="text-xs font-bold text-blue-300 font-mono shrink-0 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-400/20">
                              {item.price}
                            </span>
                          </div>
                        ))}
                      </div>
                      {card.tags && (
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 font-mono">
                            Includes Custom Sound Assets:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {card.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-gray-200 border border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Type 5: Detailed List (Background Score / Custom Song) */}
                  {card.type === 'detailed_list' && (
                    <div className="space-y-2.5">
                      {card.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors space-y-1"
                        >
                          <div className="flex items-baseline justify-between gap-2">
                            <h4 className="text-xs font-bold text-white font-heading">
                              {item.name}
                            </h4>
                            <span className="text-xs font-bold text-blue-300 font-mono bg-blue-500/10 px-2.5 py-0.5 rounded-lg border border-blue-400/20">
                              {item.price}
                            </span>
                          </div>
                          {item.detail && (
                            <p className="text-[11px] text-gray-300 font-sans italic">
                              ({item.detail})
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Type 6: Restoration */}
                  {card.type === 'restoration' && (
                    <div className="space-y-4">
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 font-mono">
                          Restoration Capabilities:
                        </span>
                        <div className="grid grid-cols-2 gap-1.5">
                          {card.features.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-center gap-1.5 text-[11px] text-gray-200"
                            >
                              <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 font-mono">
                          Pricing Structure:
                        </span>
                        <div className="grid grid-cols-1 gap-2">
                          {card.pricing.map((p, pIdx) => (
                            <div
                              key={pIdx}
                              className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1]"
                            >
                              <span className="text-xs font-medium text-white">{p.label}</span>
                              <span className="text-xs font-bold text-blue-300 font-mono bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-400/20">
                                {p.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Footer Element for Cards with notes */}
                  {card.footerNote && (
                    <p className="text-xs text-white/50 italic pt-4 mt-auto">
                      {card.footerNote}
                    </p>
                  )}
                </div>

                {/* Card Bottom Action */}
                <div className="relative z-10 pt-4 border-t border-white/10 mt-2">
                  <a
                    href="#booking"
                    onClick={() => handleSelect(card.title)}
                    className="w-full py-3 px-5 rounded-2xl font-bold text-xs text-center transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider font-heading bg-white text-indigo-950 shadow-[0_0_25px_rgba(165,180,252,0.4)] hover:bg-blue-50 hover:scale-[1.02]"
                  >
                    <span>Book {card.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Click Shield Overlay for inactive side cards */}
                {!isCenter && (
                  <div className="absolute inset-0 z-50 cursor-pointer bg-black/35 backdrop-blur-[2px] rounded-3xl sm:rounded-[32px] md:rounded-[36px] transition-opacity hover:bg-black/25" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination Controls & Navigation Arrows Row */}
      <div className="flex items-center justify-center gap-4 mt-8 relative z-20">
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards)}
          aria-label="Previous category"
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-gray-300 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Interactive Pagination Dots */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center max-w-md px-2">
          {SERVICE_CATEGORIES.map((cat, dotIdx) => (
            <button
              key={cat.id}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to ${cat.title}`}
              title={cat.title}
              className={`rounded-full transition-all duration-300 ${
                dotIdx === currentIndex
                  ? 'w-6 h-2 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]'
                  : 'w-2 h-2 bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % totalCards)}
          aria-label="Next category"
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-gray-300 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Important Notes / Supplementary Terms Banner */}
      <div className="mt-16 bg-white/5 backdrop-blur-md rounded-3xl sm:rounded-[32px] md:rounded-[36px] p-6 sm:p-8 md:p-10 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        {/* Banner Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 shadow-md">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white font-heading tracking-wide">
                Supplementary Terms & Production Policies
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-sans mt-0.5">
                Standard studio turnarounds, project add-ons, deliverable formats, and booking policies.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold self-start md:self-auto shadow-sm">
            <CreditCard className="w-4 h-4 text-emerald-400" />
            <span>Payment Terms: 50% Advance • 50% on Final Delivery</span>
          </div>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mt-6 relative z-10">
          {SUPPLEMENTARY_TERMS.map((term, tIdx) => {
            const TermIcon = term.icon;
            return (
              <div
                key={tIdx}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 flex flex-col justify-between gap-2 group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-blue-300 group-hover:scale-105 transition-transform">
                      <TermIcon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-white font-sans">
                      {term.label}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-blue-300 font-mono bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-400/20 shrink-0">
                    {term.value}
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 font-sans pl-9 leading-tight">
                  {term.note}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
