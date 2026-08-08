'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Sparkles, Menu, X, Music, Radio } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-5 inset-x-0 z-50 px-4 sm:px-8 max-w-7xl mx-auto">
      <nav className="rounded-full px-5 py-2.5 flex items-center justify-between shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-white/20 backdrop-blur-2xl bg-white/10">
        
        {/* Left: Circular dark badge KA + text KABILA AUDIO (Subtitle: SONIC VISIONARY in soft blue) */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-black/80 border border-white/20 flex items-center justify-center relative shadow-[0_0_18px_rgba(129,140,248,0.35)] group-hover:border-indigo-400/60 transition-colors">
            <div className="w-6 h-6 rounded-full border border-indigo-400/50 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-wider text-white font-heading leading-tight">
              KABILA <span className="text-white">AUDIO</span>
            </span>
            <span className="text-[9px] tracking-[0.25em] text-blue-300 font-bold uppercase -mt-0.5 font-sans">
              SONIC VISIONARY
            </span>
          </div>
        </Link>

        {/* Center Nav Capsule */}
        <div className="hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-white/20 shadow-inner">
          <Link
            href="/#music"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-all"
          >
            Music
          </Link>
          
          <Link
            href="/#videos"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-all"
          >
            Videos
          </Link>
          
          <Link
            href="/#services"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-all"
          >
            Services
          </Link>

          {/* Sound Vault in blue glass pill */}
          <Link
            href="/sounds"
            className="px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-200 border border-indigo-400/40 hover:border-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)] flex items-center gap-1.5 transition-all hover:scale-105"
          >
            <span className="text-indigo-300 text-xs">🎵</span>
            <span>Sound Vault</span>
          </Link>

          {/* Studio Hub in soft blue glass pill */}
          <Link
            href="/studio"
            className="px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/40 hover:border-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] flex items-center gap-1.5 transition-all hover:scale-105"
          >
            <Radio className="w-3.5 h-3.5 text-blue-300" />
            <span>Studio Hub</span>
          </Link>

          <Link
            href="/#contact"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-all"
          >
            Contact
          </Link>
        </div>

        {/* Right CTA: Sleek White/Indigo pill button ✨ Book Session */}
        <div className="hidden md:block">
          <Link
            href="/#booking"
            className="px-5 py-2.5 rounded-full text-xs font-bold bg-white text-indigo-900 hover:bg-blue-50 transition-all duration-300 shadow-[0_0_20px_rgba(165,180,252,0.35)] hover:shadow-[0_0_30px_rgba(165,180,252,0.6)] hover:scale-105 inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Book Session</span>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-white rounded-full bg-white/10 border border-white/20"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 rounded-3xl p-6 border border-white/20 shadow-2xl flex flex-col gap-3 bg-[#0c0d21]/95 backdrop-blur-2xl">
          <Link
            href="/#music"
            onClick={() => setMobileOpen(false)}
            className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-gray-200 hover:bg-white/10"
          >
            Music
          </Link>
          <Link
            href="/#videos"
            onClick={() => setMobileOpen(false)}
            className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-gray-200 hover:bg-white/10"
          >
            Videos
          </Link>
          <Link
            href="/#services"
            onClick={() => setMobileOpen(false)}
            className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-gray-200 hover:bg-white/10"
          >
            Services
          </Link>
          <Link
            href="/sounds"
            onClick={() => setMobileOpen(false)}
            className="px-4 py-2.5 rounded-2xl text-sm font-semibold bg-indigo-950/40 text-indigo-200 border border-indigo-400/30 flex items-center gap-2"
          >
            <span>🎵</span> Sound Vault
          </Link>
          <Link
            href="/studio"
            onClick={() => setMobileOpen(false)}
            className="px-4 py-2.5 rounded-2xl text-sm font-semibold bg-blue-950/40 text-blue-200 border border-blue-400/30 flex items-center gap-2"
          >
            <Radio className="w-4 h-4 text-blue-300" /> Studio Hub
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-gray-200 hover:bg-white/10"
          >
            Contact
          </Link>
          <Link
            href="/#booking"
            onClick={() => setMobileOpen(false)}
            className="w-full text-center mt-2 py-3 rounded-2xl bg-white text-indigo-900 font-bold text-sm shadow-[0_0_25px_rgba(165,180,252,0.4)] flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Book Session</span>
          </Link>
        </div>
      )}
    </header>
  );
}




