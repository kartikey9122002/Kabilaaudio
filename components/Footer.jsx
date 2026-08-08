'use client';

import Link from 'next/link';
import { Sparkles, Music, Youtube, Instagram, Twitter, Mail, ArrowUpRight, PhoneCall } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-28 mb-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="glass-card rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-white/10 backdrop-blur-2xl">
        {/* Background Soft Blue Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 p-0.5 flex items-center justify-center shadow-lg">
                <span className="font-extrabold text-xs tracking-tighter text-blue-300 font-heading">KA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-wider text-white font-heading">
                  KABILA <span className="text-white">AUDIO</span>
                </span>
                <span className="text-[9px] tracking-widest text-blue-300 font-semibold uppercase -mt-1">
                  SONIC VISIONARY
                </span>
              </div>
            </Link>

            <p className="text-gray-300 text-xs sm:text-sm max-w-sm leading-relaxed font-sans">
              Sculpting sounds that resonate forever. Multi-Platinum producer & audio architect turning raw artistic visions into chart-topping records.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Music, href: 'https://spotify.com', label: 'Spotify' },
                { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4 text-blue-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-extrabold text-base text-white tracking-wide font-heading">Explore Portfolio</h3>
            <ul className="space-y-2 text-xs font-semibold text-gray-300 font-sans">
              <li>
                <Link href="#music" className="hover:text-blue-300 transition-colors flex items-center gap-1">
                  Spotify Discography <ArrowUpRight className="w-3 h-3 opacity-60 text-blue-400" />
                </Link>
              </li>
              <li>
                <Link href="#videos" className="hover:text-blue-300 transition-colors flex items-center gap-1">
                  YouTube Vlogs & Videos <ArrowUpRight className="w-3 h-3 opacity-60 text-blue-400" />
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-300 transition-colors flex items-center gap-1">
                  Services & Pricing <ArrowUpRight className="w-3 h-3 opacity-60 text-blue-400" />
                </Link>
              </li>
              <li>
                <Link href="#hardware" className="hover:text-blue-300 transition-colors flex items-center gap-1">
                  Analog Studio Setup <ArrowUpRight className="w-3 h-3 opacity-60 text-blue-400" />
                </Link>
              </li>
              <li>
                <Link href="/sounds" className="hover:text-blue-300 transition-colors flex items-center gap-1">
                  Sound Vault Membership <ArrowUpRight className="w-3 h-3 opacity-60 text-blue-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Location */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-extrabold text-base text-white tracking-wide font-heading">Direct Booking Hotline</h3>
            <p className="text-gray-300 text-xs flex items-center gap-2 font-sans">
              <Mail className="w-4 h-4 text-blue-300" /> booking@kabilaaudio.com
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 space-y-1 font-sans">
              <p className="text-white font-bold font-heading">Headquarters & Analog Studio</p>
              <p>Los Angeles, CA / New Delhi, IN</p>
              <p className="text-blue-300 text-[11px] pt-1 font-semibold">Sessions by advance reservation only</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400 font-sans relative z-10">
          <p>© {new Date().getFullYear()} Kabila Audio. All rights reserved. Sonic Visionary & Audio Architect.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-blue-300">
              <Sparkles className="w-3 h-3" /> Multi-Platinum Master Producer
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
