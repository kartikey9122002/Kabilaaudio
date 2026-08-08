'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, X, SkipForward, SkipBack, ChevronUp, Music2, Headphones, Flame, Sparkles } from 'lucide-react';


const TRACK_PLAYLIST = [
  {
    id: 1,
    title: 'Midnight Tokyo',
    bpm: '140 BPM',
    key: 'F# Minor',
    genre: 'Dark Trap',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3',
  },
  {
    id: 2,
    title: 'Velvet Pressure',
    bpm: '128 BPM',
    key: 'C Minor',
    genre: 'Melodic Techno',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=cyberpunk-2099-10701.mp3',
  },
  {
    id: 3,
    title: 'Highest In The Room (Remix)',
    bpm: '135 BPM',
    key: 'D Minor',
    genre: 'Platinum Trap',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/11/06/audio_c478644558.mp3?filename=trap-future-bass-126242.mp3',
  },
];

export default function StickyPlayer({ activeTrack: propTrack, isPlaying: propIsPlaying, onTogglePlay: propOnTogglePlay, onClose }) {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [showQueue, setShowQueue] = useState(false);

  const activeTrack = propTrack || TRACK_PLAYLIST[currentTrackIndex];

  useEffect(() => {
    if (propIsPlaying !== undefined) {
      setIsPlaying(propIsPlaying);
    }
  }, [propIsPlaying]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (activeTrack) {
      if (audioRef.current.src !== activeTrack.audioUrl) {
        audioRef.current.src = activeTrack.audioUrl;
        audioRef.current.load();
      }

      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [activeTrack, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const togglePlay = () => {
    if (propOnTogglePlay) {
      propOnTogglePlay();
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    const nextIdx = (currentTrackIndex + 1) % TRACK_PLAYLIST.length;
    setCurrentTrackIndex(nextIdx);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    const prevIdx = (currentTrackIndex - 1 + TRACK_PLAYLIST.length) % TRACK_PLAYLIST.length;
    setCurrentTrackIndex(prevIdx);
    setIsPlaying(true);
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds === 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 35;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 120, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
        exit={{ y: 120, opacity: 0, x: '-50%' }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center justify-between gap-4"
      >
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleNext}
        />

        {/* Floating Queue Popup */}
        {showQueue && (
          <div className="absolute bottom-20 right-8 w-72 rounded-2xl p-4 border border-white/20 shadow-2xl bg-[#0c0d21]/95 backdrop-blur-2xl z-50">
            <h5 className="font-bold text-xs text-blue-300 mb-3 flex items-center justify-between font-heading uppercase tracking-wider">
              <span>Studio Playlist</span>
              <span className="text-[10px] text-gray-300">Track {currentTrackIndex + 1} of 18</span>
            </h5>
            <div className="space-y-2">
              {TRACK_PLAYLIST.map((tr, idx) => (
                <button
                  key={tr.id}
                  onClick={() => {
                    setCurrentTrackIndex(idx);
                    setIsPlaying(true);
                    setShowQueue(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition-all ${
                    idx === currentTrackIndex
                      ? 'bg-white/20 border border-white/40 text-white font-bold'
                      : 'hover:bg-white/10 text-gray-300'
                  }`}
                >
                  <div className="truncate pr-2">
                    <p className="truncate font-semibold">{tr.title}</p>
                    <p className="text-[10px] text-gray-300">{tr.genre}</p>
                  </div>
                  <span className="text-[10px] text-blue-300 shrink-0 font-mono">{tr.bpm}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 2. Left Track Info, Play Button & Progress Bar */}
        <div className="flex items-center gap-3.5 min-w-[240px] sm:min-w-[290px] shrink-0">
          {/* Circular play button with solid white and dark indigo icon */}
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-white hover:bg-blue-50 text-indigo-950 flex items-center justify-center shadow-[0_0_20px_rgba(165,180,252,0.6)] hover:scale-105 transition-transform shrink-0"
            aria-label="Play or Pause"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-indigo-950 text-indigo-950" />
            ) : (
              <Play className="w-4 h-4 fill-indigo-950 text-indigo-950 translate-x-0.5" />
            )}
          </button>

          {/* Track metadata and progress bar container */}
          <div className="flex flex-col flex-1 overflow-hidden">
            <div className="flex items-center gap-2">
              <h4 className="font-extrabold text-xs sm:text-sm text-white truncate max-w-[140px] sm:max-w-[170px] font-heading">
                {activeTrack.title}
              </h4>
              <span className="bg-white/15 text-blue-200 text-[10px] px-2 py-0.5 rounded-full border border-white/20 font-mono font-bold shrink-0">
                {activeTrack.bpm}
              </span>
            </div>

            <p className="text-[10px] sm:text-[11px] text-gray-300 truncate flex items-center gap-1.5 mt-0.5 font-sans">
              <Music2 className="w-3 h-3 text-blue-300 shrink-0" />
              <span>{activeTrack.genre} • {activeTrack.key}</span>
            </p>

            {/* 3. Gradient Progress Bar in Soft Blue / Indigo */}
            <div className="h-1 w-full bg-white/15 rounded-full overflow-hidden mt-1.5 relative cursor-pointer group">
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
              />
              <div
                className="bg-gradient-to-r from-blue-400 via-indigo-300 to-white h-full rounded-full transition-all shadow-[0_0_8px_rgba(147,197,253,0.6)]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* 4. Center Visualizer: 10 soft blue pulsing dot indicators */}
        <div className="hidden lg:flex items-center gap-1.5 opacity-50 px-2 shrink-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full bg-blue-300 ${isPlaying ? 'animate-pulse' : ''}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>

        {/* Right Controls: Previous, Next, Volume, Tracks ^ 18, and Flame button */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Playback Buttons: SkipBack, SkipForward, Volume2 */}
          <div className="hidden md:flex items-center gap-2 text-gray-200">
            <button
              onClick={handlePrev}
              className="p-1.5 hover:text-white transition-colors"
              aria-label="Previous track"
            >
              <SkipBack className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 hover:text-white transition-colors"
              aria-label="Next track"
            >
              <SkipForward className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-1.5 hover:text-white transition-colors"
              aria-label="Toggle mute"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-red-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-gray-200 hover:text-white" />
              )}
            </button>
          </div>

          {/* Tracks Dropdown Pill */}
          <button
            onClick={() => setShowQueue(!showQueue)}
            className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-4 py-1.5 text-xs text-white flex items-center gap-2 transition-all shadow-inner"
            title="Toggle Tracks"
          >
            <Headphones className="w-3.5 h-3.5 text-blue-300" />
            <span className="font-semibold hidden sm:inline">Tracks</span>
            <ChevronUp className="w-3 h-3 text-gray-300" />
            <span className="text-[10px] font-bold text-white bg-blue-500/30 px-1.5 py-0.2 rounded-full">
              18
            </span>
          </button>

          {/* Far-Right Accent: Glowing soft blue flame button */}
          <button
            onClick={() => setShowQueue(!showQueue)}
            className="bg-white/10 border border-white/20 p-2 rounded-xl text-blue-300 hover:text-white shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:scale-105 transition-all"
            aria-label="Studio vibe flame"
          >
            <Flame className="w-4 h-4 fill-blue-400/20 text-blue-300 animate-pulse" />
          </button>

          {/* Close button if parent provided */}
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/20 ml-1"
              aria-label="Close player"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </motion.div>
    </AnimatePresence>


  );
}


