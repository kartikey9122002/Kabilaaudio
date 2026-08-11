'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, GraduationCap, ArrowRight, BookOpen, Layers, Zap, Award } from 'lucide-react';

const SYLLABUS_MODULES = [
  {
    number: '01',
    title: 'DAW (Logic Pro)',
    subtopics: 'Interface navigation, track architecture, smart controls, audio engine & project setup.',
  },
  {
    number: '02',
    title: 'MIDI Programming',
    subtopics: 'Piano roll mastery, velocity humanization, groove quantization & MIDI CC automation.',
  },
  {
    number: '03',
    title: 'Sound Design',
    subtopics: 'Subtractive, wavetable & FM synthesis, oscillators, filters, envelopes & modulation LFOs.',
  },
  {
    number: '04',
    title: 'Virtual Instruments',
    subtopics: 'Samplers, Kontakt multi-libraries, orchestral textures & vintage analog emulations.',
  },
  {
    number: '05',
    title: 'Beat Making',
    subtopics: 'Hip-Hop, Trap, R&B & Pop groove creation, chord progressions & 808 glide patterns.',
  },
  {
    number: '06',
    title: 'Drum Programming',
    subtopics: 'Drum machines, multi-layering, transient shaping, swing manipulation & acoustic fills.',
  },
  {
    number: '07',
    title: 'Arrangement',
    subtopics: 'Song structure, energy builds, impact drops, seamless transitions & melodic hooks.',
  },
  {
    number: '08',
    title: 'Recording',
    subtopics: 'Microphone polar patterns, gain staging, acoustic isolation & preamp signal chains.',
  },
  {
    number: '09',
    title: 'Audio Editing',
    subtopics: 'Take comping, phase alignment, crossfades, pitch quantization & noise removal.',
  },
  {
    number: '10',
    title: 'Vocal Production',
    subtopics: 'Melodyne pitch sculpting, Auto-Tune, vocal harmony stacking, ad-libs & space design.',
  },
  {
    number: '11',
    title: 'Mixing',
    subtopics: 'Balance & panning, EQ frequency carving, dynamic control, bus routing & stem summing.',
  },
  {
    number: '12',
    title: 'Audio Effects',
    subtopics: 'Algorithmic/convolution reverb, dynamic delays, parallel saturation, chorus & phasers.',
  },
  {
    number: '13',
    title: 'Mastering',
    subtopics: 'Multi-band dynamics, stereo image widening, True Peak brickwall limiting & LUFS targets.',
  },
  {
    number: '14',
    title: 'Live Instruments Integration',
    subtopics: 'Tracking acoustic & electric guitars, basslines, live percussion & hardware synth patches.',
  },
  {
    number: '15',
    title: 'Film & Background Scoring',
    subtopics: 'Cinematic composition, mood mapping, cue placement & thematic leitmotif architecture.',
  },
  {
    number: '16',
    title: 'Foley & Sound Effects',
    subtopics: 'Field recording, custom Foley creation, atmospheric layering, cinematic impacts & risers.',
  },
  {
    number: '17',
    title: 'Music Production Workflow',
    subtopics: 'Custom studio templates, CPU efficiency management, stems batch export & archiving.',
  },
  {
    number: '18',
    title: 'Industry Standards',
    subtopics: 'Streaming loudness calibration (-14 LUFS), Apple Digital Masters & broadcast protocols.',
  },
  {
    number: '19',
    title: 'Release & Distribution',
    subtopics: 'DSP distribution (Spotify/Apple), ISRC & UPC generation, royalties & publishing rights.',
  },
  {
    number: '20',
    title: 'Studio Setup',
    subtopics: 'Studio monitor acoustic calibration, room treatment, audio interfaces & cable routing.',
  },
  {
    number: '21',
    title: 'Plugins',
    subtopics: 'FabFilter, Waves, Soundtoys, UAD analog gear emulations & iZotope Ozone mastering suite.',
  },
  {
    number: '22',
    title: 'Genre-Based Production',
    subtopics: 'Deep dive into Trap, Drill, Neo-Soul, Commercial Pop, EDM, Bollywood & Cinematic genres.',
  },
  {
    number: '23',
    title: 'Professional Project Practice',
    subtopics: 'Recreating Billboard chart hits from scratch, stem breakdown sessions & commercial client simulations.',
  },
  {
    number: '24',
    title: 'Portfolio & Career Guidance',
    subtopics: 'Building a professional producer portfolio, artist outreach, pitching music & contract basics.',
  },
];

export default function MusicProductionCourse() {
  return (
    <section id="course" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-16 scroll-mt-24">
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-blue-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          <GraduationCap className="w-3.5 h-3.5 text-blue-300" />
          Kabila Audio Academy
        </div>

        <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight font-heading">
          MUSIC PRODUCTION <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white">COURSE</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
          Master the art of professional music production, audio engineering, and cinematic scoring through 1-on-1 hands-on studio mentorship at Kabila Audio.
        </p>
      </div>

      {/* 2-Column Course Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Card 1: 6 Months (Beginners) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/25 hover:bg-white/[0.08] transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between relative overflow-hidden group"
        >
          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold bg-blue-500/20 text-blue-200 border border-blue-400/30">
                <BookOpen className="w-3 h-3 text-blue-300" /> FOUNDATION DIPLOMA
              </span>
              <span className="text-xs font-semibold text-gray-400">6 Months</span>
            </div>

            {/* Title & Price */}
            <h3 className="font-extrabold text-2xl text-white font-heading tracking-wide mb-2">
              6 Months — For Beginners
            </h3>
            <p className="text-xs text-gray-300 font-sans mb-6">
              Complete foundational course taking you from absolute zero to composing, recording, and mixing your own original music.
            </p>

            <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-baseline gap-2">
                <span className="font-extrabold text-4xl text-white font-heading tracking-tight drop-shadow-[0_0_20px_rgba(165,180,252,0.3)]">
                  ₹29,999/-
                </span>
                <span className="text-xs text-gray-300 font-semibold uppercase">Total Fee</span>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {[
                'DAW Setup & Logic Pro Workflow Fundamentals',
                'MIDI Programming, Virtual Instruments & Synthesis',
                'Drum Programming, 808s & Beat Creation',
                'Vocal Recording, Mic Techniques & Audio Editing',
                'Introductory Mixing, EQ, Dynamics & Effects',
                'Hands-on Practical Studio Assignments',
              ].map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-200">
                  <div className="w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-400/40 shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-blue-300" />
                  </div>
                  <span className="font-sans leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/917710925944?text=Hi%20Kabila%20Audio%2C%20I%20want%20to%20enroll%20in%20the%206%20Months%20Beginner%20Music%20Production%20Course"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-xl font-bold text-xs text-center transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider font-heading bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 hover:scale-[1.02]"
          >
            <span>Join Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Card 2: 12 Months (Pro Level) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          whileHover={{ y: -6 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-indigo-400/60 shadow-[0_15px_50px_rgba(99,102,241,0.3)] bg-gradient-to-b from-indigo-950/40 via-white/5 to-white/5 hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
        >
          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold bg-white text-indigo-950 shadow-md">
                <Sparkles className="w-3 h-3 text-indigo-950 fill-indigo-950" /> PRO MASTERCLASS
              </span>
              <span className="text-xs font-semibold text-blue-300 font-bold">12 Months</span>
            </div>

            {/* Title & Price */}
            <h3 className="font-extrabold text-2xl text-white font-heading tracking-wide mb-2">
              12 Months — Pro Level Course
            </h3>
            <p className="text-xs text-gray-300 font-sans mb-6">
              Advanced industry program covering end-to-end commercial production, analog mixing, mastering, film scoring & career launch.
            </p>

            <div className="mb-6 p-4 rounded-xl bg-white/10 border border-indigo-400/30">
              <div className="flex items-baseline gap-2">
                <span className="font-extrabold text-4xl text-white font-heading tracking-tight drop-shadow-[0_0_25px_rgba(165,180,252,0.4)]">
                  ₹59,999/-
                </span>
                <span className="text-xs text-gray-300 font-semibold uppercase">Total Fee</span>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {[
                'Everything in 6-Month Course Included',
                'Advanced Modular Sound Design & Custom Preset Synthesis',
                'Analog Stem Mixing, Summing & True Peak Mastering',
                'Film & Background Scoring, Foley & Sound FX Design',
                'Melodyne Vocal Tuning & Spatial Atmos Stem Polish',
                'Music Business, DSP Distribution, Royalties & Portfolio',
                '1-on-1 Studio Mentorship & Hit Project Practice',
              ].map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-200">
                  <div className="w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-400/40 shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-blue-300" />
                  </div>
                  <span className="font-sans leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/917710925944?text=Hi%20Kabila%20Audio%2C%20I%20want%20to%20enroll%20in%20the%2012%20Months%20Pro%20Level%20Music%20Production%20Course"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-xl font-bold text-xs text-center transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider font-heading bg-white text-indigo-950 shadow-[0_0_25px_rgba(165,180,252,0.5)] hover:bg-blue-50 hover:scale-[1.02]"
          >
            <span>Join the Masterclass</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

      {/* Course Syllabus Grid Section */}
      <div className="space-y-8 pt-8 border-t border-white/10">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-blue-300">
            <Layers className="w-3.5 h-3.5 text-blue-300" />
            Comprehensive 24-Module Curriculum
          </div>
          <h3 className="font-extrabold text-2xl sm:text-4xl text-white tracking-tight font-heading">
            COURSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white">SYLLABUS</span>
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto font-sans">
            A step-by-step roadmap designed to transform beginners into industry-ready audio producers and sound designers.
          </p>
        </div>

        {/* 24-Module Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SYLLABUS_MODULES.map((mod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }}
              whileHover={{ y: -3 }}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-indigo-400/30 transition-all duration-300 shadow-md group flex flex-col justify-between"
            >
              <div>
                {/* Module Number Tag */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-extrabold text-blue-300 bg-indigo-500/15 px-2.5 py-0.5 rounded-full border border-indigo-400/20 font-heading">
                    Module {mod.number}
                  </span>
                </div>

                {/* Module Title */}
                <h4 className="font-extrabold text-sm sm:text-base text-white font-heading group-hover:text-blue-300 transition-colors">
                  {mod.title}
                </h4>

                {/* Subtopics Description */}
                <p className="text-xs text-gray-300 font-sans mt-1.5 leading-relaxed">
                  {mod.subtopics}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
