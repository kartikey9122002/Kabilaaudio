'use client';

import React, { useState } from 'react';
import { supabase, uploadMediaAsset } from '@/lib/supabase';
import { Film, Upload, Sparkles, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ShowcaseAdminPage() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [type, setType] = useState<'film' | 'viral'>('film');
  const [tag, setTag] = useState('FEATURE FILM');
  const [badge, setBadge] = useState('IN THEATRES NOW');
  const [credits, setCredits] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleTypeChange = (newType: 'film' | 'viral') => {
    setType(newType);
    if (newType === 'film') {
      setTag('FEATURE FILM');
      setBadge('IN THEATRES NOW');
    } else {
      setTag('VIRAL HIT');
      setBadge('50M+ VIEWS');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!file) {
      setStatusMessage({ type: 'error', text: 'Please select a poster/artwork image to upload.' });
      return;
    }

    if (!title.trim()) {
      setStatusMessage({ type: 'error', text: 'Please enter a title for the showcase item.' });
      return;
    }

    try {
      setLoading(true);

      // 1. Upload media asset to Supabase Storage ('kabila-media' bucket, 'showcase' folder)
      const imageUrl = await uploadMediaAsset(file, 'showcase');

      // 2. Insert record into Supabase database table 'showcase_items'
      const { error } = await supabase.from('showcase_items').insert({
        title,
        subtitle,
        type,
        tag,
        badge,
        image_url: imageUrl,
        credits,
      });

      if (error) {
        throw error;
      }

      // 3. Success feedback & form reset
      setStatusMessage({ type: 'success', text: 'Showcase item uploaded successfully!' });
      setTitle('');
      setSubtitle('');
      setType('film');
      setTag('FEATURE FILM');
      setBadge('IN THEATRES NOW');
      setCredits('');
      setFile(null);

      // Reset file input element if present
      const fileInput = document.getElementById('poster-file-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (err: any) {
      console.error('Error submitting showcase item:', err);
      setStatusMessage({
        type: 'error',
        text: err?.message || 'Failed to upload showcase item. Please check your Supabase connection.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-2xl bg-blue-500/20 border border-blue-400/30 text-blue-300">
            <Film className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-white font-heading">
              Hero Showcase Manager
            </h1>
            <p className="text-sm text-slate-300 font-sans">
              Upload feature film posters, viral hits, and soundtrack achievements directly to Supabase.
            </p>
          </div>
        </div>
      </div>

      {/* Status Feedback Message */}
      {statusMessage && (
        <div
          className={`p-4 rounded-2xl border flex items-center gap-3 backdrop-blur-md transition-all ${
            statusMessage.type === 'success'
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
              : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
          }`}
        >
          {statusMessage.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 shrink-0" />
          )}
          <span className="text-sm font-medium">{statusMessage.text}</span>
        </div>
      )}

      {/* Glassmorphic Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 sm:p-8 shadow-2xl space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Item Type Dropdown */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Showcase Category / Type
            </label>
            <select
              value={type}
              onChange={(e) => handleTypeChange(e.target.value as 'film' | 'viral')}
              className="w-full px-4 py-3 rounded-2xl bg-slate-900/80 border border-white/15 text-white focus:outline-none focus:border-blue-400 transition-colors font-sans"
            >
              <option value="film">Feature Film Release</option>
              <option value="viral">Viral Track / Hit Single</option>
            </select>
          </div>

          {/* Title Input */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Showcase Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Brahmāstra: Part One"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-900/80 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors font-sans"
            />
          </div>

          {/* Subtitle / Role Input */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Role / Subtitle
            </label>
            <input
              type="text"
              placeholder="e.g. Background Score & Foley Arts"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-900/80 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors font-sans"
            />
          </div>

          {/* Tag Pill Input */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Category Tag Pill
            </label>
            <input
              type="text"
              placeholder="e.g. FEATURE FILM or VIRAL HIT"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-900/80 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors font-sans"
            />
          </div>

          {/* Badge Input */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Highlight Badge
            </label>
            <input
              type="text"
              placeholder="e.g. IN THEATRES NOW or 50M+ VIEWS"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-900/80 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors font-sans"
            />
          </div>

          {/* Credits Input */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              Credits / Production House
            </label>
            <input
              type="text"
              placeholder="e.g. Dharma Productions • Kabila Score Team"
              value={credits}
              onChange={(e) => setCredits(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-900/80 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors font-sans"
            />
          </div>
        </div>

        {/* Poster File Upload Input */}
        <div className="space-y-2 pt-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
            Poster / Artwork File *
          </label>
          <div className="relative border-2 border-dashed border-white/20 hover:border-blue-400/50 rounded-2xl p-6 text-center bg-slate-900/50 transition-colors cursor-pointer group">
            <input
              id="poster-file-input"
              type="file"
              accept="image/*"
              required
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="flex flex-col items-center gap-2">
              <Upload className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-slate-200">
                {file ? (
                  <span className="text-blue-300 font-bold">{file.name}</span>
                ) : (
                  'Click to upload or drag & drop poster image (PNG, JPG, WEBP)'
                )}
              </p>
              <span className="text-xs text-slate-400">High resolution portrait or landscape image</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Uploading...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 text-blue-200" />
                <span>Publish to Showcase</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
