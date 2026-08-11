'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Music, Youtube, Instagram, Twitter, Mail, ArrowUpRight, Phone, MapPin } from 'lucide-react';
import KabilaLogo from './KabilaLogo';

export default function Footer() {
  const musicians = [
    {
      name: 'Himanshu Rawat',
      role: 'Multi-Genre Music Producer',
      image: '/himanshu.jpeg',
      alt: 'Himanshu Rawat - Multi-Genre Music Producer',
    },
    {
      name: 'Pawan Sharma',
      role: 'Sound Engineer',
      image: '/pawan.jpeg',
      alt: 'Pawan Sharma - Sound Engineer',
    },
  ];

  const studioSocials = [
    {
      name: 'Spotify',
      icon: Music,
      href: 'https://open.spotify.com/playlist/0leCNHrIVjJYLHVgTKWuuW?si=rKLiJxoWSM2kDGPMw5YjOQ&utm_source=copy-link&pi=DK4T9OSBSxurT',
      color: 'hover:text-emerald-400 hover:border-emerald-500/40',
      label: 'Listen on Spotify',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://youtube.com/playlist?list=PLpgDJaGurXAlF8jR3WyZG5FektozSIt4T&si=7qt1O0b89Pws3ZeA',
      color: 'hover:text-red-400 hover:border-red-500/40',
      label: 'Watch on YouTube',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/thekabilastudio?igsh=MTRwOHVqaHpxcXd5bA==',
      color: 'hover:text-pink-400 hover:border-pink-500/40',
      label: 'Follow on Instagram',
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      href: 'https://x.com/kabilaaudio?s=11',
      color: 'hover:text-sky-400 hover:border-sky-500/40',
      label: 'Follow on X',
    },
  ];

  return (
    <footer className="mt-28 mb-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="glass-card rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-white/10 backdrop-blur-2xl">
        {/* Background Soft Blue Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center" aria-label="Kabila Audio Home">
              <KabilaLogo className="h-10 w-auto" />
            </Link>

            <p className="text-gray-300 text-xs sm:text-sm max-w-sm leading-relaxed font-sans">
              Sculpting sounds that resonate forever. Multi-Platinum producer &amp; audio architect turning raw artistic visions into chart-topping records.
            </p>
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
                  YouTube Vlogs &amp; Videos <ArrowUpRight className="w-3 h-3 opacity-60 text-blue-400" />
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-300 transition-colors flex items-center gap-1">
                  Services &amp; Pricing <ArrowUpRight className="w-3 h-3 opacity-60 text-blue-400" />
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
              <li>
                <Link href="/owner" className="hover:text-blue-300 transition-colors flex items-center gap-1">
                  Owner Profile <ArrowUpRight className="w-3 h-3 opacity-60 text-blue-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Business Details */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-extrabold text-base text-white tracking-wide font-heading">
              Direct Contact &amp; Studio
            </h3>

            {/* Email Addresses */}
            <div className="space-y-2 font-sans">
              <a
                href="mailto:info@kabilaaudio.com"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-blue-300 shrink-0 group-hover:scale-110 transition-transform" />
                <span>info@kabilaaudio.com</span>
              </a>
              <a
                href="mailto:kabilaaudio@gmail.com"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-blue-300 shrink-0 group-hover:scale-110 transition-transform" />
                <span>kabilaaudio@gmail.com</span>
              </a>
            </div>

            {/* Phone Number */}
            <div className="font-sans">
              <a
                href="tel:7710925944"
                className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white/80 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-blue-300 shrink-0 group-hover:scale-110 transition-transform" />
                <span>7710925944</span>
              </a>
            </div>

            {/* Studio Address Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 space-y-1.5 font-sans">
              <div className="flex items-center gap-2 text-white font-bold font-heading">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0" />
                <span>Headquarters &amp; Analog Studio</span>
              </div>
              <p className="text-white/80 pl-6 leading-relaxed">
                New Ashok Nagar, New Delhi, 110096
              </p>
              <p className="text-blue-300 text-[11px] pt-0.5 pl-6 font-semibold">
                Sessions by advance reservation only
              </p>
            </div>
          </div>
        </div>

        {/* Musician Profiles Section */}
        <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
            {musicians.map((musician, index) => (
              <div
                key={index}
                className="flex-1 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-row items-center gap-5 hover:border-indigo-400/30 transition-all duration-300 hover:bg-white/[0.07]"
              >
                {/* Circular Profile Image */}
                <img
                  src={musician.image}
                  alt={musician.alt}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white/20 shadow-lg shrink-0"
                />

                {/* Info */}
                <div className="flex flex-col items-start text-left">
                  <h3 className="font-extrabold text-lg text-white font-heading tracking-wide">
                    {musician.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-300 font-medium font-sans mt-0.5">
                    {musician.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prominent Studio Social Media Links Row */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-4 relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-300 font-heading">
            Connect With Kabila Studio
          </p>
          <div className="flex items-center justify-center gap-5 sm:gap-7">
            {studioSocials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-3.5 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white hover:scale-110 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] ${social.color}`}
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400 font-sans relative z-10">
          <p>© {new Date().getFullYear()} Kabila Audio. All rights reserved. Sonic Visionary &amp; Audio Architect.</p>
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
