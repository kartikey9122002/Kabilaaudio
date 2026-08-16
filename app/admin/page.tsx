'use client';

import React from 'react';
import {
  Music,
  Calendar,
  Database,
  CheckCircle2,
  Clock,
} from 'lucide-react';

interface Booking {
  id: string;
  clientName: string;
  projectType: string;
  date: string;
  status: 'Pending' | 'Confirmed';
}

export default function AdminDashboardPage() {
  const stats = [
    {
      title: 'Total Tracks Live',
      value: 38,
      icon: Music,
      accent: 'text-blue-400',
      badge: '+4 this month',
    },
    {
      title: 'New Booking Requests',
      value: 5,
      icon: Calendar,
      accent: 'text-purple-400',
      badge: 'Action required',
    },
    {
      title: 'Vault Assets',
      value: 142,
      icon: Database,
      accent: 'text-emerald-400',
      badge: '+18 updated',
    },
  ];

  const recentBookings: Booking[] = [
    {
      id: '1',
      clientName: 'Sarah Jenkins (Sony Music)',
      projectType: 'Full Album Stem Mix & Master',
      date: 'Oct 24, 2026',
      status: 'Confirmed',
    },
    {
      id: '2',
      clientName: 'Marcus Vance',
      projectType: 'Custom Beat Production',
      date: 'Oct 22, 2026',
      status: 'Pending',
    },
    {
      id: '3',
      clientName: 'Aura Collective',
      projectType: 'Studio Session (4-Hour Block)',
      date: 'Oct 20, 2026',
      status: 'Confirmed',
    },
    {
      id: '4',
      clientName: 'Dmitri Rostov',
      projectType: 'Film Score Sound Design',
      date: 'Oct 18, 2026',
      status: 'Pending',
    },
    {
      id: '5',
      clientName: 'Elena Rostova',
      projectType: 'Vocal Tuning & Analog Mastering',
      date: 'Oct 15, 2026',
      status: 'Confirmed',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <h1 className="text-3xl font-bold mb-8">Overview</h1>

      {/* Quick-Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-6 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-400">
                  {stat.title}
                </span>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <Icon className={`w-5 h-5 ${stat.accent}`} />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <div className="text-4xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {stat.badge}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Bookings Section */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-6">
        <h2 className="text-xl font-bold text-white mb-6">Recent Bookings</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400 font-semibold">
                <th className="pb-4 pl-2">Client Name</th>
                <th className="pb-4 px-4">Project Type</th>
                <th className="pb-4 px-4">Date</th>
                <th className="pb-4 pr-2 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {recentBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="hover:bg-white/[0.03] transition-colors duration-150"
                >
                  <td className="py-4 pl-2 font-medium text-white">
                    {booking.clientName}
                  </td>
                  <td className="py-4 px-4 text-slate-300">
                    {booking.projectType}
                  </td>
                  <td className="py-4 px-4 text-slate-400 text-xs whitespace-nowrap">
                    {booking.date}
                  </td>
                  <td className="py-4 pr-2 text-right">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                        booking.status === 'Confirmed'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      }`}
                    >
                      {booking.status === 'Confirmed' ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : (
                        <Clock className="w-3.5 h-3.5" />
                      )}
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
