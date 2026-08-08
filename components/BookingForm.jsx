'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, User, Mail, DollarSign, Music, CheckCircle2 } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full Track Production',
    budget: '$1,000 - $3,000',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const messageTemplate = `🔥 *NEW STUDIO BOOKING INQUIRY* 🔥
━━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
✉️ *Email:* ${formData.email}
🎛️ *Service Needed:* ${formData.service}
💰 *Estimated Budget:* ${formData.budget}
📝 *Project Details:* ${formData.details || 'N/A'}
━━━━━━━━━━━━━━━━━━━━━━
Sent via ARKIVE.AUDIO Portfolio`;

    const encodedString = encodeURIComponent(messageTemplate);
    const whatsappUrl = `https://wa.me/916393237854?text=${encodedString}`;

    // Small delay to show feedback tick before redirecting
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
    }, 800);
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-[2.5rem] p-8 sm:p-12 border border-white/15 shadow-[0_0_50px_-10px_rgba(168,85,247,0.25)] relative overflow-hidden"
      >
        {/* Ambient Top Glow Blob */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-600/15 blur-3xl pointer-events-none" />

        <div className="text-center space-y-3 mb-10 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <MessageSquare className="w-3.5 h-3.5 text-pink-400" />
            Direct WhatsApp Session Inquiry
          </span>
          <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            BOOK YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">SESSION</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto">
            Ready to elevate your project? Fill out your requirements below to start a direct WhatsApp conversation with ARKIVE studio management.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-purple-400" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Kendrick Lamar"
                className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-sm"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-pink-400" /> Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="artist@recordlabel.com"
                className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Service Select */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-cyan-400" /> Service Required
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-2xl bg-[#16123a] border border-white/10 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-sm cursor-pointer"
              >
                <option value="Full Track Production">Full Track Production & Composition</option>
                <option value="Mixing & Dolby Atmos Mastering">Mixing & Dolby Atmos Mastering</option>
                <option value="Vocal Recording & Tuning">Vocal Production & Tuning</option>
                <option value="Custom Beatpack / Executive Producing">Custom Beatpack / Executive Production</option>
                <option value="Sound Design & Film Score">Custom Sound Design & Film Score</option>
              </select>
            </div>

            {/* Budget Select */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> Project Budget
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-2xl bg-[#16123a] border border-white/10 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-sm cursor-pointer"
              >
                <option value="$500 - $1,000">$500 - $1,000 (Single Mix/Master)</option>
                <option value="$1,000 - $3,000">$1,000 - $3,000 (Full Production)</option>
                <option value="$3,000 - $5,000">$3,000 - $5,000 (EP Production)</option>
                <option value="$5,000+">$5,000+ (Full Album / Executive)</option>
              </select>
            </div>
          </div>

          {/* Details Input */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-yellow-400" /> Project Details & References
            </label>
            <textarea
              name="details"
              rows={4}
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell us about your genre, deadline, reference tracks, or sound vision..."
              className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-sm resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitted}
            className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-500 hover:to-rose-500 text-white font-bold text-base shadow-[0_0_35px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(225,29,72,0.7)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-75"
          >
            {submitted ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-green-300 animate-bounce" />
                <span>Redirecting to WhatsApp...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send WhatsApp Inquiry (+91 63932 37854)</span>
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
