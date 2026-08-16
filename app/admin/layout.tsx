'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Music,
  Database,
  Calendar,
  LogOut,
} from 'lucide-react';
import KabilaLogo from '@/components/KabilaLogo';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();

  const navLinks = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard,
    },
    {
      name: 'Media Manager',
      href: '/admin/media',
      icon: Music,
    },
    {
      name: 'Sound Vault',
      href: '/admin/vault',
      icon: Database,
    },
    {
      name: 'Bookings',
      href: '/admin/bookings',
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black text-white flex">
      {/* Glassmorphic Sidebar */}
      <aside className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 hidden md:flex flex-col">
        {/* Kabila Admin Logo / Header */}
        <div className="mb-8">
          <Link href="/admin" className="block">
            <div className="flex items-center gap-3">
              <KabilaLogo className="h-7 w-auto" />
            </div>
          </Link>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300">
              Admin
            </span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white/15 text-white border border-white/20 shadow-lg shadow-black/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? 'text-blue-400' : 'text-slate-400'
                  }`}
                />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sign Out Button */}
        <div className="pt-6 border-t border-white/10">
          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/';
              }
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
