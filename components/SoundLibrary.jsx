'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Download, Filter, Search, Sliders, Music, Zap, Tag, Check, Sparkles } from 'lucide-react';

export default function SoundLibrary({ activeTrack, isPlaying, onSelectTrack, onTogglePlay }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInstrument, setSelectedInstrument] = useState('All');
  const [selectedBpmRange, setSelectedBpmRange] = useState('All');
  const [downloadedId, setDownloadedId] = useState(null);

  // Sample sound catalog (deterministic static seeds for SSR hydration safety)
  const soundCatalog = [
    {
      id: 'sound-1',
      title: 'Neon Cyber Synth Loop 01',
      instrument: 'Synth',
      genre: 'Synthwave / Cyberpunk',
      bpm: 128,
      key: 'F Minor',
      duration: '0:32',
      audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=synthwave-beat-112521.mp3',
      waveform: [35, 60, 85, 40, 90, 75, 45, 100, 65, 80, 50, 95, 30, 70, 85, 40, 60, 90, 75, 50, 80, 65, 40, 95, 60, 45],
    },
    {
      id: 'sound-2',
      title: '808 Sub Pressure - Sub Bass One-Shot',
      instrument: 'Bass',
      genre: 'Trap / Drill',
      bpm: 140,
      key: 'C Minor',
      duration: '0:18',
      audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a689b9.mp3?filename=trap-beat-10521.mp3',
      waveform: [90, 80, 100, 85, 70, 95, 60, 40, 30, 20, 15, 10, 85, 95, 70, 40, 30, 20, 10, 5, 40, 80, 90, 60, 30, 15],
    },
    {
      id: 'sound-3',
      title: 'Etherial Vocal Chop Melody Stems',
      instrument: 'Vocals',
      genre: 'Pop / Melodic EDM',
      bpm: 120,
      key: 'G Major',
      duration: '0:45',
      audioUrl: 'https://cdn.pixabay.com/download/audio/2021/09/06/audio-[#15234].mp3?filename=ambient-piano-10781.mp3',
      waveform: [20, 40, 65, 85, 70, 90, 100, 85, 60, 45, 75, 90, 80, 65, 40, 55, 75, 90, 65, 40, 30, 50, 70, 85, 60, 30],
    },
    {
      id: 'sound-4',
      title: 'Dark Cinematic Brass Impact FX',
      instrument: 'FX',
      genre: 'Orchestral / Film',
      bpm: 100,
      key: 'D Minor',
      duration: '0:24',
      audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=cinematic-impact-11254.mp3',
      waveform: [100, 90, 75, 60, 45, 35, 25, 15, 10, 80, 95, 60, 40, 20, 10, 5, 60, 85, 40, 20, 10, 5, 30, 70, 50, 20],
    },
    {
      id: 'sound-5',
      title: 'Analog Rhodes Chords & Vinyl Crackle',
      instrument: 'Keys',
      genre: 'Lo-Fi / R&B',
      bpm: 85,
      key: 'A Minor',
      duration: '0:50',
      audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/16/audio-[#11854].mp3?filename=lofi-study-112191.mp3',
      waveform: [40, 50, 60, 55, 70, 65, 80, 75, 60, 50, 65, 70, 60, 55, 45, 65, 75, 60, 50, 45, 60, 65, 55, 45, 40, 35],
    },
    {
      id: 'sound-6',
      title: 'Afrobeats Percussion & Shaker Loop',
      instrument: 'Drums',
      genre: 'Afrobeats / Amapiano',
      bpm: 112,
      key: 'E Minor',
      duration: '0:36',
      audioUrl: 'https://cdn.pixabay.com/download/audio/2022/10/14/audio_993f345638.mp3?filename=afrobeats-loop-124985.mp3',
      waveform: [80, 40, 90, 50, 85, 45, 95, 60, 75, 40, 85, 50, 90, 45, 80, 60, 95, 50, 85, 40, 75, 50, 85, 45, 90, 50],
    },
    {
      id: 'sound-7',
      title: 'Hyperpop Guitar Arp & Distortion stem',
      instrument: 'Guitar',
      genre: 'Hyperpop / Rock',
      bpm: 150,
      key: 'F# Minor',
      duration: '0:28',
      audioUrl: 'https://cdn.pixabay.com/download/audio/2022/02/07/audio_bf0d76bf38.mp3?filename=hyperpop-beat-11854.mp3',
      waveform: [60, 95, 70, 100, 65, 90, 80, 95, 60, 85, 70, 100, 65, 90, 75, 95, 60, 85, 70, 90, 65, 95, 80, 70, 60, 45],
    },
  ];

  const instruments = ['All', 'Synth', 'Bass', 'Vocals', 'FX', 'Keys', 'Drums', 'Guitar'];
  const bpmRanges = ['All', '< 100 BPM', '100 - 125 BPM', '125+ BPM'];

  // Filtering Logic
  const filteredSounds = soundCatalog.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.genre.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesInstrument = selectedInstrument === 'All' || item.instrument === selectedInstrument;
    let matchesBpm = true;
    if (selectedBpmRange === '< 100 BPM') matchesBpm = item.bpm < 100;
    if (selectedBpmRange === '100 - 125 BPM') matchesBpm = item.bpm >= 100 && item.bpm <= 125;
    if (selectedBpmRange === '125+ BPM') matchesBpm = item.bpm > 125;

    return matchesSearch && matchesInstrument && matchesBpm;
  });

  const handleDownload = (id, title) => {
    setDownloadedId(id);
    setTimeout(() => setDownloadedId(null), 2500);
  };

  // Stagger animation container config
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="py-12 px-4 sm:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar Filters */}
        <div className="lg:col-span-3 space-y-6">
          <div className="glass-card rounded-[2rem] p-6 border border-white/10 shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)]">
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/10">
              <Filter className="w-4 h-4 text-purple-400" />
              <h3 className="font-bold text-lg text-white">Library Filters</h3>
            </div>

            {/* Instrument Filter */}
            <div className="space-y-3 mb-6">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                Instrument Category
              </label>
              <div className="flex flex-wrap gap-1.5">
                {instruments.map((inst) => (
                  <button
                    key={inst}
                    onClick={() => setSelectedInstrument(inst)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      selectedInstrument === inst
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
                    }`}
                  >
                    {inst}
                  </button>
                ))}
              </div>
            </div>

            {/* BPM Filter */}
            <div className="space-y-3 mb-6">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                Tempo (BPM Range)
              </label>
              <div className="space-y-1.5">
                {bpmRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => setSelectedBpmRange(range)}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                      selectedBpmRange === range
                        ? 'bg-purple-600/30 border border-purple-400 text-purple-200'
                        : 'bg-white/5 hover:bg-white/10 text-gray-400 border border-transparent'
                    }`}
                  >
                    <span>{range}</span>
                    {selectedBpmRange === range && <Check className="w-3.5 h-3.5 text-purple-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats Box */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-400 space-y-2">
              <div className="flex items-center justify-between">
                <span>Total Samples:</span>
                <span className="text-white font-bold">{soundCatalog.length} Sounds</span>
              </div>
              <div className="flex items-center justify-between">
                <span>License Type:</span>
                <span className="text-emerald-400 font-semibold">100% Royalty Free</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Sound Catalog Area */}
        <div className="lg:col-span-9 space-y-6">
          {/* Search Bar */}
          <div className="glass-card rounded-full p-2 pl-6 pr-3 border border-white/10 flex items-center gap-3 shadow-lg">
            <Search className="w-5 h-5 text-purple-400" />
            <input
              type="text"
              placeholder="Search sample loops by instrument, genre, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-gray-400 hover:text-white px-3 py-1 bg-white/10 rounded-full"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sound Rows Cascading Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {filteredSounds.length === 0 ? (
              <div className="glass-card rounded-3xl p-12 text-center space-y-3">
                <Music className="w-10 h-10 text-purple-400 mx-auto opacity-50" />
                <p className="text-gray-300 font-bold text-lg">No sounds matched your filter.</p>
                <p className="text-xs text-gray-500">Try adjusting your BPM range or instrument category.</p>
              </div>
            ) : (
              filteredSounds.map((sound) => {
                const isThisActive = activeTrack?.id === sound.id;
                const isThisPlaying = isThisActive && isPlaying;

                return (
                  <motion.div
                    key={sound.id}
                    variants={itemVariants}
                    className={`glass-card rounded-3xl p-4 sm:p-5 border transition-all duration-300 flex flex-col sm:flex-row items-center gap-4 justify-between group ${
                      isThisActive
                        ? 'border-purple-500/60 bg-purple-900/20 shadow-[0_0_40px_rgba(168,85,247,0.35)]'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Play Button & Title */}
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <button
                        onClick={() => {
                          if (isThisActive) {
                            onTogglePlay();
                          } else {
                            onSelectTrack(sound);
                          }
                        }}
                        aria-label={`Play ${sound.title}`}
                        className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 ${
                          isThisPlaying
                            ? 'bg-gradient-to-tr from-pink-600 to-rose-600 text-white shadow-[0_0_25px_rgba(225,29,72,0.6)] animate-pulse'
                            : 'bg-gradient-to-tr from-purple-600 to-pink-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                        }`}
                      >
                        {isThisPlaying ? (
                          <Pause className="w-5 h-5 fill-white" />
                        ) : (
                          <Play className="w-5 h-5 fill-white translate-x-0.5" />
                        )}
                      </button>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-base text-white group-hover:text-purple-300 transition-colors">
                            {sound.title}
                          </h4>
                          {isThisActive && (
                            <span className="text-[10px] font-bold text-pink-400 bg-pink-500/20 px-2 py-0.5 rounded-full border border-pink-500/30 animate-pulse">
                              NOW PLAYING
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400">
                          {sound.instrument} • <span className="text-purple-300">{sound.genre}</span>
                        </p>
                      </div>
                    </div>

                    {/* Fake Animated Waveform Bar */}
                    <div className="flex items-center gap-1 h-8 w-full sm:w-48 px-2 overflow-hidden">
                      {sound.waveform.map((heightPct, idx) => (
                        <div
                          key={idx}
                          className={`w-1 rounded-full transition-all duration-300 ${
                            isThisPlaying
                              ? 'bg-gradient-to-t from-purple-500 to-pink-400 animate-pulse'
                              : 'bg-white/20 group-hover:bg-purple-400/50'
                          }`}
                          style={{
                            height: `${isThisPlaying ? Math.max(20, (heightPct * (idx % 2 === 0 ? 1 : 0.7))) : heightPct * 0.5}%`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Badges & Actions */}
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-cyan-300">
                          {sound.bpm} BPM
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-pink-300">
                          {sound.key}
                        </span>
                      </div>

                      <button
                        onClick={() => handleDownload(sound.id, sound.title)}
                        className={`p-2.5 rounded-full transition-all duration-300 ${
                          downloadedId === sound.id
                            ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-300'
                            : 'bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white'
                        }`}
                        title="Download sample stem"
                      >
                        {downloadedId === sound.id ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Download className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
