"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Zap, X } from "lucide-react";

export default function JoinPage() {
  const [showTerms, setShowTerms] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <main className="min-h-screen w-full bg-transparent flex flex-col items-center justify-center px-4 pt-32 pb-24 relative z-10">
      {/* Glassmorphic Card */}
      <div className="w-full max-w-4xl bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative z-20">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-white">
            Artist Launch Package
          </h1>
          <p className="text-lg md:text-xl font-medium text-blue-300 tracking-wide uppercase">
            By Kabila Audio
          </p>
        </div>

        {/* Value Proposition */}
        <p className="text-lg md:text-xl text-center text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
          Giving aspiring artists & independent rappers the opportunity to build their music career with uncompromising, industry-standard professional production.
        </p>

        {/* Pricing Highlight */}
        <div className="flex justify-center mb-16">
          <div className="bg-gradient-to-b from-blue-600/20 to-transparent border border-blue-500/30 rounded-3xl px-12 py-6 text-center shadow-[0_0_40px_rgba(37,99,235,0.15)]">
            <p className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs mb-3 flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" /> Special Subscription
            </p>
            <p className="text-4xl md:text-5xl font-black text-white tracking-tight">₹19,999<span className="text-2xl text-white/50 font-medium">/-</span></p>
          </div>
        </div>

        {/* Features Grid (Professional Look replacing Emojis) */}
        <div className="mb-16">
          <h3 className="text-sm font-bold tracking-[0.2em] mb-8 text-white/40 uppercase text-center border-b border-white/10 pb-4">Comprehensive Features Included</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 text-white/80 text-base md:text-lg">
            {[
              "Unlimited Songs for YouTube & Spotify",
              "Full Song Music Production",
              "Professional Mix & Master",
              "Release on All Major Platforms",
              "Pro Vocal Production & Editing",
              "Music Arrangement & Programming",
              "Distribution & Digital Release Support",
              "Artist Development & Guidance",
              "Build Your Independent Catalogue",
              "1-on-1 Support from Kabila Audio"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 opacity-80" />
                <span className="font-light">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="text-center flex flex-col items-center">
          <p className="text-2xl font-light italic text-white/60 mb-8">
            "Your Music. Your Identity. Your Journey."
          </p>
          
          <button 
            onClick={() => setShowTerms(true)}
            className="group relative inline-flex items-center justify-center bg-white text-black hover:bg-blue-50 hover:scale-105 transition-all duration-300 rounded-full px-10 py-5 font-bold tracking-[0.15em] uppercase text-sm md:text-base overflow-hidden"
          >
            <span className="relative z-10">Join Kabila Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <p className="mt-6 text-xs font-bold tracking-widest text-red-400/80 uppercase animate-pulse">
            Limited Slots Available
          </p>
        </div>
      </div>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-slate-900/90 border border-white/10 rounded-[32px] p-6 md:p-10 max-w-2xl w-full shadow-[0_0_50px_rgba(0,0,0,0.8)] relative animate-in fade-in zoom-in-95 duration-300">
            
            {/* Close Button */}
            <button 
              onClick={() => setShowTerms(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-white mb-6 tracking-widest uppercase">Terms & Conditions</h3>
            
            {/* Scrollable Terms Content */}
            <div className="bg-black/30 border border-white/5 rounded-2xl p-6 h-64 overflow-y-auto mb-8 text-sm text-white/70 space-y-4">
              <p><strong className="text-white">1. Project Timelines:</strong> Standard production timelines vary between 2 to 4 weeks depending on track complexity. Delays in client feedback will extend this timeline.</p>
              <p><strong className="text-white">2. Revisions:</strong> The Artist Launch Package includes up to 3 major mix revisions. Further structural changes post-approval may incur additional studio fees.</p>
              <p><strong className="text-white">3. Payments & Deposits:</strong> The ₹19,999 fee is required to commence work. Studio booking times and session musician fees (if applicable beyond the package scope) are strictly non-refundable.</p>
              <p><strong className="text-white">4. Royalties & Rights:</strong> Kabila Audio retains standard producer credits. Specific royalty splits for major streaming distribution will be negotiated and signed in a separate split sheet agreement prior to release.</p>
              <p><strong className="text-white">5. Conduct:</strong> Kabila Audio reserves the right to terminate sessions immediately if studio guidelines are violated.</p>
            </div>

            {/* Checkbox Acknowledgment */}
            <label className="flex items-center gap-4 cursor-pointer mb-8 group">
              <div className={`w-6 h-6 rounded flex items-center justify-center border transition-colors ${accepted ? 'bg-blue-600 border-blue-500' : 'bg-white/5 border-white/20 group-hover:border-blue-400'}`}>
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={accepted} 
                  onChange={() => setAccepted(!accepted)} 
                />
                {accepted && <span className="text-white text-lg leading-none mb-1">✓</span>}
              </div>
              <span className="text-white/90 select-none">I acknowledge and accept the Kabila Audio studio terms and conditions.</span>
            </label>

            {/* Proceed Action */}
            <div className="flex justify-end">
              <Link 
                href="/#booking" 
                className={`px-8 py-4 rounded-full font-bold tracking-widest uppercase transition-all duration-300 ${
                  accepted 
                    ? 'bg-white text-black hover:bg-blue-100 hover:scale-105 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                    : 'bg-white/10 text-white/30 cursor-not-allowed pointer-events-none'
                }`}
              >
                Proceed to Booking
              </Link>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}
