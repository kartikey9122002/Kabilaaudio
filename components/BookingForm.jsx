'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, User, Mail, IndianRupee, Music, CheckCircle2 } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Single Song Production (₹25,000)',
  '5-Song Album for Artists (₹75,000)',
  'Film Production (₹1,500 - ₹6,000/min)',
  'Music Production Course - 6 Months (₹29,999)',
  'Music Production Course - 12 Months (₹59,999)',
  'Other / Custom Inquiry',
];

const BUDGET_OPTIONS = [
  'Under ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000+',
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: SERVICE_OPTIONS[0],
    budget: BUDGET_OPTIONS[1],
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

    const messageTemplate = `🔥 *KABILA AUDIO — STUDIO BOOKING INQUIRY* 🔥
━━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
✉️ *Email:* ${formData.email}
🎛️ *Service Needed:* ${formData.service}
💰 *Estimated Budget:* ${formData.budget}
📝 *Project Details:* ${formData.details || 'N/A'}
━━━━━━━━━━━━━━━━━━━━━━
Sent via Kabila Audio Portfolio`;

    const encodedString = encodeURIComponent(messageTemplate);
    const whatsappUrl = `https://wa.me/917710925944?text=${encodedString}`;

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
        className="glass-card rounded-[2.5rem] p-8 sm:p-12 border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden bg-white/10 backdrop-blur-2xl"
      >
        {/* Ambient Top Glow Blob */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

        <div className="text-center space-y-3 mb-10 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-xs font-bold text-blue-200">
            <MessageSquare className="w-3.5 h-3.5 text-blue-300" />
            Direct WhatsApp Session Inquiry
          </span>
          <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight font-heading">
            BOOK YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white">SESSION</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto font-sans">
            Ready to elevate your project? Fill out your requirements below to start a direct WhatsApp conversation with Kabila Audio management.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                <User className="w-3.5 h-3.5 text-blue-300" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Divine / Badshah / AR"
                className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all text-sm font-sans"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                <Mail className="w-3.5 h-3.5 text-indigo-300" /> Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="artist@recordlabel.com"
                className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all text-sm font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Service Select */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                <Music className="w-3.5 h-3.5 text-cyan-300" /> Service Required
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-2xl bg-[#0c0d21] border border-white/15 text-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all text-sm font-sans cursor-pointer"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0c0d21] text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Select */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                <IndianRupee className="w-3.5 h-3.5 text-blue-300" /> Project Budget
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-2xl bg-[#0c0d21] border border-white/15 text-white focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all text-sm font-sans cursor-pointer"
              >
                {BUDGET_OPTIONS.map((budgetOpt) => (
                  <option key={budgetOpt} value={budgetOpt} className="bg-[#0c0d21] text-white">
                    {budgetOpt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Details Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5 font-heading">
              <MessageSquare className="w-3.5 h-3.5 text-indigo-300" /> Project Details & References
            </label>
            <textarea
              name="details"
              rows={4}
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell us about your genre, deadline, reference tracks, or sound vision..."
              className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all text-sm font-sans resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitted}
            className="w-full py-4 px-8 rounded-2xl bg-white hover:bg-blue-50 text-indigo-950 font-extrabold text-base shadow-[0_0_35px_rgba(165,180,252,0.4)] hover:shadow-[0_0_50px_rgba(165,180,252,0.7)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-75 font-heading tracking-wide uppercase"
          >
            {submitted ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-indigo-950 animate-bounce" />
                <span>Redirecting to WhatsApp...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 text-indigo-950" />
                <span>Send WhatsApp Inquiry (+91 77109 25944)</span>
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
