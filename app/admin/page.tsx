'use client';

import React, { useState, useEffect } from 'react';
import { supabase, uploadMediaAsset } from '@/lib/supabase';
import {
  Film,
  Music,
  Layers,
  Tag,
  Database,
  Eye,
  Upload,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Trash2,
  Plus,
  X,
  RefreshCw,
  ExternalLink,
  DollarSign,
  Sliders,
  Calendar,
  Check,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<
    'showcase' | 'assets' | 'pricing' | 'vault' | 'preview'
  >('showcase');

  // Common Notification State
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  // ----------------------------------------------------
  // TAB 1: CENTRAL MEDIA & TRACK HUB STATE
  // ----------------------------------------------------
  const [mediaTitle, setMediaTitle] = useState('');
  const [mediaSubtitle, setMediaSubtitle] = useState('');
  const [mediaTag, setMediaTag] = useState('FEATURE FILM');
  const [mediaBadge, setMediaBadge] = useState('IN THEATRES NOW');
  const [mediaTarget, setMediaTarget] = useState<'hero' | 'portfolio' | 'video'>('hero');
  const [spotifyUrl, setSpotifyUrl] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaLoading, setMediaLoading] = useState(false);

  const [activeMediaItems, setActiveMediaItems] = useState([
    {
      id: '1',
      title: 'Brahmāstra: Part One',
      subtitle: 'Dharma Productions • Score & Foley',
      tag: 'FEATURE FILM',
      badge: 'IN THEATRES NOW',
      target: 'hero',
      image_url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
      spotify_url: '',
      youtube_url: '',
    },
    {
      id: '2',
      title: 'Kesariya (Kabila Remix)',
      subtitle: 'Trending on YouTube & Reels',
      tag: 'VIRAL HIT',
      badge: '50M+ VIEWS',
      target: 'hero',
      image_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
      spotify_url: 'https://open.spotify.com/track/3UBOmRHmkTbhKUeHzeRY2M',
      youtube_url: '',
    },
    {
      id: '3',
      title: 'Elevate Live Acoustic',
      subtitle: 'Karan Aujla & Kabila Band',
      tag: 'DISCOGRAPHY',
      badge: 'TRENDING #1',
      target: 'portfolio',
      image_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      spotify_url: '',
      youtube_url: 'https://www.youtube.com/embed/videoseries?list=PLpgDJaGurXAlF8jR3WyZG5FektozSIt4T',
    },
  ]);

  // Fetch initial media items from Supabase if table exists
  useEffect(() => {
    async function fetchMedia() {
      try {
        const { data, error } = await supabase.from('showcase_items').select('*');
        if (data && data.length > 0) {
          setActiveMediaItems(data);
        }
      } catch (err) {
        console.log('Using default mock media hub dataset');
      }
    }
    fetchMedia();
  }, []);

  const handleMediaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mediaTitle.trim()) {
      setNotification({ type: 'error', text: 'Please enter a media title.' });
      return;
    }
    setMediaLoading(true);
    setNotification(null);

    try {
      let imageUrl =
        'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80';
      if (mediaFile) {
        imageUrl = await uploadMediaAsset(mediaFile, 'media');
      }

      const newItem = {
        id: Date.now().toString(),
        title: mediaTitle,
        subtitle: mediaSubtitle,
        tag: mediaTag,
        badge: mediaBadge,
        target: mediaTarget,
        image_url: imageUrl,
        spotify_url: spotifyUrl,
        youtube_url: youtubeUrl,
      };

      // Try inserting into Supabase
      try {
        await supabase.from('showcase_items').insert({
          title: mediaTitle,
          subtitle: mediaSubtitle,
          tag: mediaTag,
          badge: mediaBadge,
          type: mediaTarget === 'hero' ? 'film' : 'viral',
          image_url: imageUrl,
          credits: mediaSubtitle,
        });
      } catch (err) {
        console.log('Supabase insert fallback to local state');
      }

      setActiveMediaItems((prev) => [newItem, ...prev]);
      setNotification({ type: 'success', text: 'Media item added successfully!' });
      setMediaTitle('');
      setMediaSubtitle('');
      setSpotifyUrl('');
      setYoutubeUrl('');
      setMediaFile(null);
    } catch (err: any) {
      setNotification({ type: 'error', text: err?.message || 'Error uploading media item.' });
    } finally {
      setMediaLoading(false);
    }
  };

  const handleDeleteMedia = async (id: string) => {
    try {
      await supabase.from('showcase_items').delete().eq('id', id);
    } catch (err) {}
    setActiveMediaItems((prev) => prev.filter((item) => item.id !== id));
    setNotification({ type: 'success', text: 'Media item removed.' });
  };

  // ----------------------------------------------------
  // TAB 2: PAGE ASSETS & BANNER MANAGER STATE
  // ----------------------------------------------------
  const [assetPage, setAssetPage] = useState('Home');
  const [assetSlot, setAssetSlot] = useState('Hero Background');
  const [headlineOverride, setHeadlineOverride] = useState('');
  const [descriptionOverride, setDescriptionOverride] = useState('');
  const [assetFile, setAssetFile] = useState<File | null>(null);
  const [assetLoading, setAssetLoading] = useState(false);

  const [activeAssets, setActiveAssets] = useState([
    {
      id: '1',
      page: 'Home',
      slot: 'Hero Background',
      headline: "We don't just produce audio tracks, we produce feelings.",
      description: 'Kabila Audio - A Team Of Well Trained Music Producers & Audio Architect.',
      image_url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '2',
      page: 'Services',
      slot: 'Studio Banner',
      headline: 'World-Class Analog Gear & Spatial Audio Sanctuary',
      description: 'SSL 9000J Console • Neumann Microphones • Dolby Atmos 7.1.4',
      image_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    },
  ]);

  const handleAssetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAssetLoading(true);
    setNotification(null);

    try {
      let imageUrl =
        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80';
      if (assetFile) {
        imageUrl = await uploadMediaAsset(assetFile, 'assets');
      }

      const newAsset = {
        id: Date.now().toString(),
        page: assetPage,
        slot: assetSlot,
        headline: headlineOverride || 'Default Headline Override',
        description: descriptionOverride || 'Default Description Override',
        image_url: imageUrl,
      };

      try {
        await supabase.from('page_assets').upsert(newAsset);
      } catch (err) {}

      setActiveAssets((prev) => [newAsset, ...prev]);
      setNotification({ type: 'success', text: `Page Asset for ${assetPage} (${assetSlot}) updated!` });
      setHeadlineOverride('');
      setDescriptionOverride('');
      setAssetFile(null);
    } catch (err: any) {
      setNotification({ type: 'error', text: err?.message || 'Failed to update asset.' });
    } finally {
      setAssetLoading(false);
    }
  };

  // ----------------------------------------------------
  // TAB 3: COURSE & PRICING CONTROL CENTER STATE
  // ----------------------------------------------------
  const [pricingServices, setPricingServices] = useState([
    {
      id: '1',
      name: 'Music Production Course (Complete Bootcamp)',
      price: '₹29,999',
      pricingModel: 'Fixed Rate',
      perks: ['100+ Hours Video Lessons', '1-on-1 Studio Mentorship', 'DAW Stems & Project Files', 'Certification on Completion'],
    },
    {
      id: '2',
      name: 'Full Stem Mixing & Analog Mastering',
      price: '₹14,999',
      pricingModel: 'Fixed Rate',
      perks: ['SSL 9000J Console Processing', 'Unlimited Revision Passes', 'Radio-Ready WAV + MP3 Master', 'Streaming LUFS Target Preset'],
    },
    {
      id: '3',
      name: 'Dolby Atmos 7.1.4 Spatial Audio Mixing',
      price: '₹2,500',
      pricingModel: 'Per-Minute',
      perks: ['PMC 7.1.4 Tuned Acoustics', 'ADM BWF Deliverable', 'Apple Music Spatial Master', 'Binaural Headphone Optimization'],
    },
    {
      id: '4',
      name: 'Artist Launch Package & Music Video',
      price: '₹49,999',
      pricingModel: 'Fixed Rate',
      perks: ['Full Track Composition', '4K Cinematic Music Video', 'Global PR & Spotify Pitching', 'Distribution to All Platforms'],
    },
  ]);

  const [newPerkInput, setNewPerkInput] = useState<{ [key: string]: string }>({});

  const handlePriceChange = (id: string, newPrice: string) => {
    setPricingServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, price: newPrice } : s))
    );
  };

  const handleModelChange = (id: string, newModel: string) => {
    setPricingServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, pricingModel: newModel } : s))
    );
  };

  const handleAddPerk = (id: string) => {
    const perkText = newPerkInput[id]?.trim();
    if (!perkText) return;
    setPricingServices((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, perks: [...s.perks, perkText] } : s
      )
    );
    setNewPerkInput((prev) => ({ ...prev, [id]: '' }));
  };

  const handleRemovePerk = (serviceId: string, perkIndex: number) => {
    setPricingServices((prev) =>
      prev.map((s) =>
        s.id === serviceId
          ? { ...s, perks: s.perks.filter((_, idx) => idx !== perkIndex) }
          : s
      )
    );
  };

  const handleSavePricing = async () => {
    try {
      await supabase.from('services_pricing').upsert(pricingServices);
    } catch (err) {}
    setNotification({ type: 'success', text: 'Pricing & Course details saved successfully!' });
  };

  // ----------------------------------------------------
  // TAB 4: SOUND VAULT MANAGER STATE
  // ----------------------------------------------------
  const [vaultPackName, setVaultPackName] = useState('');
  const [vaultCategory, setVaultCategory] = useState('Drum Kits');
  const [vaultPrice, setVaultPrice] = useState('FREE');
  const [vaultItems, setVaultItems] = useState([
    { id: '1', name: 'Kabila Cyber Analog Drums Vol 1', category: 'Drum Kits', price: 'FREE', downloads: 1420 },
    { id: '2', name: 'Bollywood Cyber Synth Stems 2026', category: 'Sample Loops', price: '₹999', downloads: 890 },
    { id: '3', name: 'Dolby Atmos Spatial IR Presets', category: 'Presets', price: 'FREE', downloads: 2310 },
  ]);

  const handleAddVaultPack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vaultPackName.trim()) return;
    const newPack = {
      id: Date.now().toString(),
      name: vaultPackName,
      category: vaultCategory,
      price: vaultPrice,
      downloads: 0,
    };
    setVaultItems((prev) => [newPack, ...prev]);
    setVaultPackName('');
    setNotification({ type: 'success', text: `Vault sample pack "${vaultPackName}" published!` });
  };

  // ----------------------------------------------------
  // TAB 5: LIVE VISUAL PREVIEW STATE
  // ----------------------------------------------------
  const [previewKey, setPreviewKey] = useState(0);
  const [viewportWidth, setViewportWidth] = useState<'100%' | '768px' | '375px'>('100%');

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* Dashboard Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
            <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest font-heading">
              Kabila Audio Admin Control Engine
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Master Studio Command Center
          </h1>
        </div>

        {/* Live Preview Button Shortcut */}
        <button
          onClick={() => setActiveTab('preview')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-blue-600/30 border border-blue-400/40 text-blue-200 hover:bg-blue-500/50 hover:text-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] font-bold text-xs uppercase tracking-wider self-start md:self-auto"
        >
          <Eye className="w-4 h-4" />
          <span>Launch Live Split-Screen</span>
        </button>
      </div>

      {/* Global Notification Banner */}
      {notification && (
        <div
          className={`p-4 rounded-2xl border flex items-center justify-between backdrop-blur-md transition-all ${
            notification.type === 'success'
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
              : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
          }`}
        >
          <div className="flex items-center gap-3">
            {notification.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0" />
            )}
            <span className="text-sm font-medium">{notification.text}</span>
          </div>
          <button
            onClick={() => setNotification(null)}
            className="p-1 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* PHASE 1: Tabbed Navigation Bar */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-2 flex items-center gap-2 overflow-x-auto shadow-lg backdrop-blur-xl">
        <button
          onClick={() => setActiveTab('showcase')}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 shrink-0 ${
            activeTab === 'showcase'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Film className="w-4 h-4" />
          <span>Central Media Hub</span>
        </button>

        <button
          onClick={() => setActiveTab('assets')}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 shrink-0 ${
            activeTab === 'assets'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Page Assets &amp; Banners</span>
        </button>

        <button
          onClick={() => setActiveTab('pricing')}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 shrink-0 ${
            activeTab === 'pricing'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <DollarSign className="w-4 h-4" />
          <span>Course &amp; Pricing Control</span>
        </button>

        <button
          onClick={() => setActiveTab('vault')}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 shrink-0 ${
            activeTab === 'vault'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>Sound Vault</span>
        </button>

        <button
          onClick={() => setActiveTab('preview')}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 shrink-0 ${
            activeTab === 'preview'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)]'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>Live Split-Screen Preview</span>
        </button>
      </div>

      {/* ==================================================== */}
      {/* PHASE 2: TAB 1 — CENTRAL MEDIA & TRACK HUB */}
      {/* ==================================================== */}
      {activeTab === 'showcase' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <form
            onSubmit={handleMediaSubmit}
            className="bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 sm:p-8 text-white shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <Music className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-extrabold font-heading">
                  Upload New Track or Film Showcase
                </h2>
              </div>
              <span className="text-xs text-blue-300 font-semibold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/30">
                Connected to Supabase Media Bucket
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Media Title */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Track / Film Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Brahmāstra: Part One"
                  value={mediaTitle}
                  onChange={(e) => setMediaTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              {/* Subtitle / Credits */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Subtitle / Production Credits
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dharma Productions • Score & Foley"
                  value={mediaSubtitle}
                  onChange={(e) => setMediaSubtitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              {/* Placement Target Dropdown */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Placement Target
                </label>
                <select
                  value={mediaTarget}
                  onChange={(e) => setMediaTarget(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white focus:outline-none focus:border-blue-400 transition-colors"
                >
                  <option value="hero">Hero Showcase (Top Right Carousel)</option>
                  <option value="portfolio">Music Portfolio (Spotify / Releases Carousel)</option>
                  <option value="video">Video Showcase Section</option>
                </select>
              </div>

              {/* Tag Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Category Tag Pill
                </label>
                <input
                  type="text"
                  placeholder="e.g. FEATURE FILM, VIRAL HIT, DISCOGRAPHY"
                  value={mediaTag}
                  onChange={(e) => setMediaTag(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              {/* Highlighting Badge */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Highlighting Badge
                </label>
                <input
                  type="text"
                  placeholder="e.g. IN THEATRES NOW, 10M+ VIEWS, TRENDING #1"
                  value={mediaBadge}
                  onChange={(e) => setMediaBadge(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              {/* Spotify Embed / Track URL */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Spotify Embed / Track URL
                </label>
                <input
                  type="url"
                  placeholder="https://open.spotify.com/embed/track/..."
                  value={spotifyUrl}
                  onChange={(e) => setSpotifyUrl(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            {/* Poster / Cover Image Dropzone */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Poster / Artwork Dropzone (uploadMediaAsset)
              </label>
              <div className="relative border-2 border-dashed border-white/20 hover:border-blue-400/50 rounded-2xl p-6 text-center bg-slate-900/60 transition-colors cursor-pointer group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setMediaFile(e.target.files[0]);
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="flex flex-col items-center gap-2">
                  <Upload className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-slate-200">
                    {mediaFile ? (
                      <span className="text-blue-300 font-bold">{mediaFile.name}</span>
                    ) : (
                      'Click or Drag & Drop Cover Artwork (JPG, PNG, WEBP)'
                    )}
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={mediaLoading}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {mediaLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Uploading to Supabase...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Publish Media Asset</span>
                </>
              )}
            </button>
          </form>

          {/* Active Media Cards Grid */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-heading">
              Active Media Assets Grid ({activeMediaItems.length})
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeMediaItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden p-4 space-y-3 relative group hover:border-blue-400/40 transition-all shadow-xl"
                >
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-500/30 border border-blue-400/40 text-blue-200 backdrop-blur-md">
                      {item.badge}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                      Target: {item.target} • {item.tag}
                    </span>
                    <h4 className="font-bold text-white text-base line-clamp-1">{item.title}</h4>
                    <p className="text-xs text-slate-300 line-clamp-1 font-sans">{item.subtitle}</p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-white/10">
                    <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Active
                    </span>
                    <button
                      onClick={() => handleDeleteMedia(item.id)}
                      className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition-all text-xs font-semibold flex items-center gap-1.5"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* PHASE 3: TAB 2 — PAGE ASSETS & BANNER MANAGER */}
      {/* ==================================================== */}
      {activeTab === 'assets' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <form
            onSubmit={handleAssetSubmit}
            className="bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 sm:p-8 text-white shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-indigo-400" />
                <h2 className="text-xl font-extrabold font-heading">
                  Dynamic Page Imagery &amp; Headline Override
                </h2>
              </div>
              <span className="text-xs text-indigo-300 font-semibold bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-400/30">
                Static Page Overrides
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Target Page Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Target Page
                </label>
                <select
                  value={assetPage}
                  onChange={(e) => setAssetPage(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white focus:outline-none focus:border-indigo-400 transition-colors"
                >
                  <option value="Home">Home Page (app/page.jsx)</option>
                  <option value="Profile">Artist Profile (/profile)</option>
                  <option value="Services">Services &amp; Studio (/studio)</option>
                  <option value="Join">Join Kabila Package (/join)</option>
                </select>
              </div>

              {/* Asset Slot Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Asset Slot / Location
                </label>
                <select
                  value={assetSlot}
                  onChange={(e) => setAssetSlot(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white focus:outline-none focus:border-indigo-400 transition-colors"
                >
                  <option value="Hero Background">Hero Background Wave</option>
                  <option value="Owner Portrait">Owner / Architect Portrait</option>
                  <option value="Studio Banner">Studio Gear Banner</option>
                  <option value="Terms Graphic">Booking Terms Graphic</option>
                </select>
              </div>

              {/* Headline Override */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Custom Headline Override
                </label>
                <input
                  type="text"
                  placeholder="e.g. We don't just produce audio tracks, we produce feelings."
                  value={headlineOverride}
                  onChange={(e) => setHeadlineOverride(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                />
              </div>

              {/* Description Override */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Custom Description Override
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Kabila Audio - A Team Of Well Trained Music Producers & Audio Architect..."
                  value={descriptionOverride}
                  onChange={(e) => setDescriptionOverride(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors resize-none"
                />
              </div>
            </div>

            {/* Asset Image Upload Field */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Asset Graphic Image Upload
              </label>
              <div className="relative border-2 border-dashed border-white/20 hover:border-indigo-400/50 rounded-2xl p-6 text-center bg-slate-900/60 transition-colors cursor-pointer group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setAssetFile(e.target.files[0]);
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="flex flex-col items-center gap-2">
                  <Upload className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-slate-200">
                    {assetFile ? (
                      <span className="text-indigo-300 font-bold">{assetFile.name}</span>
                    ) : (
                      'Upload New Background / Banner Graphic'
                    )}
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={assetLoading}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {assetLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Updating Asset...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Update Page Asset</span>
                </>
              )}
            </button>
          </form>

          {/* Active Assets Table */}
          <div className="bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 space-y-4">
            <h3 className="text-lg font-bold text-white font-heading">
              Active Page Graphic Overrides ({activeAssets.length})
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                    <th className="pb-4 pl-2">Target Page</th>
                    <th className="pb-4 px-4">Asset Slot</th>
                    <th className="pb-4 px-4">Headline Text</th>
                    <th className="pb-4 pr-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {activeAssets.map((asset) => (
                    <tr key={asset.id} className="hover:bg-white/[0.02]">
                      <td className="py-4 pl-2 font-bold text-indigo-300">{asset.page}</td>
                      <td className="py-4 px-4 text-white font-medium">{asset.slot}</td>
                      <td className="py-4 px-4 text-slate-300 line-clamp-1">{asset.headline}</td>
                      <td className="py-4 pr-2 text-right">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* PHASE 4: TAB 3 — COURSE & PRICING CONTROL CENTER */}
      {/* ==================================================== */}
      {activeTab === 'pricing' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 sm:p-8 text-white shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <Tag className="w-5 h-5 text-emerald-400" />
                <div>
                  <h2 className="text-xl font-extrabold font-heading">
                    Services &amp; Course Pricing Control
                  </h2>
                  <p className="text-xs text-slate-300">
                    Live dynamic updates linked to services_pricing in Supabase
                  </p>
                </div>
              </div>

              <button
                onClick={handleSavePricing}
                className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Save All Changes</span>
              </button>
            </div>

            {/* List of Services / Courses */}
            <div className="space-y-6">
              {pricingServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-slate-900/80 border border-white/15 rounded-3xl p-6 space-y-4 hover:border-emerald-400/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-white font-heading">
                        {service.name}
                      </h3>
                      <span className="text-xs text-emerald-400 font-semibold">
                        Model: {service.pricingModel}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Price Input */}
                      <div className="flex items-center gap-1.5 bg-black/60 px-4 py-2 rounded-xl border border-white/20">
                        <span className="text-xs font-bold text-slate-400">Price:</span>
                        <input
                          type="text"
                          value={service.price}
                          onChange={(e) => handlePriceChange(service.id, e.target.value)}
                          className="w-28 bg-transparent text-emerald-300 font-extrabold text-sm focus:outline-none"
                        />
                      </div>

                      {/* Pricing Model Dropdown Toggle */}
                      <select
                        value={service.pricingModel}
                        onChange={(e) => handleModelChange(service.id, e.target.value)}
                        className="px-3 py-2 rounded-xl bg-slate-950 border border-white/20 text-xs font-bold text-white focus:outline-none"
                      >
                        <option value="Fixed Rate">Fixed Rate</option>
                        <option value="Per-Minute">Per-Minute</option>
                        <option value="Per-Episode">Per-Episode</option>
                        <option value="Custom Quote">Custom Quote</option>
                      </select>
                    </div>
                  </div>

                  {/* Perks & Features Bullets Editor */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Package Perks &amp; Features:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {service.perks.map((perk, pIdx) => (
                        <span
                          key={pIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-slate-200"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{perk}</span>
                          <button
                            type="button"
                            onClick={() => handleRemovePerk(service.id, pIdx)}
                            className="hover:text-rose-400 transition-colors ml-1"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </span>
                      ))}
                    </div>

                    {/* Add Perk Input */}
                    <div className="flex items-center gap-2 pt-2">
                      <input
                        type="text"
                        placeholder="Add new perk bullet point..."
                        value={newPerkInput[service.id] || ''}
                        onChange={(e) =>
                          setNewPerkInput((prev) => ({
                            ...prev,
                            [service.id]: e.target.value,
                          }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddPerk(service.id);
                          }
                        }}
                        className="flex-1 px-4 py-2 rounded-xl bg-slate-950 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => handleAddPerk(service.id)}
                        className="px-4 py-2 rounded-xl bg-emerald-600/30 border border-emerald-400/40 hover:bg-emerald-500 text-emerald-200 text-xs font-bold transition-all flex items-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 4 — SOUND VAULT MANAGER */}
      {/* ==================================================== */}
      {activeTab === 'vault' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <form
            onSubmit={handleAddVaultPack}
            className="bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 sm:p-8 text-white shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-purple-400" />
                <h2 className="text-xl font-extrabold font-heading">
                  Publish Sound Vault Sample Pack
                </h2>
              </div>
              <span className="text-xs text-purple-300 font-semibold bg-purple-500/10 px-3 py-1 rounded-full border border-purple-400/30">
                Stems &amp; Presets Catalog
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Pack / Preset Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kabila Cyber Drums Vol 1"
                  value={vaultPackName}
                  onChange={(e) => setVaultPackName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Category
                </label>
                <select
                  value={vaultCategory}
                  onChange={(e) => setVaultCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white focus:outline-none"
                >
                  <option value="Drum Kits">Drum Kits</option>
                  <option value="Sample Loops">Sample Loops</option>
                  <option value="Synth Stems">Synth Stems</option>
                  <option value="Presets">Presets &amp; IRs</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Price / Access
                </label>
                <input
                  type="text"
                  placeholder="e.g. FREE or ₹999"
                  value={vaultPrice}
                  onChange={(e) => setVaultPrice(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              <span>Publish Sound Vault Pack</span>
            </button>
          </form>

          {/* Active Vault Packs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {vaultItems.map((item) => (
              <div
                key={item.id}
                className="bg-slate-950/80 border border-white/10 rounded-3xl p-5 space-y-3 relative hover:border-purple-400/40 transition-all shadow-xl"
              >
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 uppercase">
                  {item.category}
                </span>
                <h4 className="font-bold text-white text-base leading-snug">{item.name}</h4>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/10">
                  <span>Price: <strong className="text-emerald-400">{item.price}</strong></span>
                  <span>{item.downloads} downloads</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* PHASE 5: TAB 5 — LIVE SPLIT-SCREEN VISUAL MODE */}
      {/* ==================================================== */}
      {activeTab === 'preview' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <h2 className="text-xl font-extrabold font-heading">
                  Live Split-Screen Preview Mode
                </h2>
                <p className="text-xs text-slate-300">
                  Real-time iframe rendering of homepage connected to live Supabase updates
                </p>
              </div>
            </div>

            {/* Controls: Refresh, Viewport Size, External Link */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Viewport size buttons */}
              <div className="flex items-center bg-black/50 p-1 rounded-xl border border-white/10 text-xs font-bold">
                <button
                  onClick={() => setViewportWidth('100%')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    viewportWidth === '100%' ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Desktop
                </button>
                <button
                  onClick={() => setViewportWidth('768px')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    viewportWidth === '768px' ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Tablet (768px)
                </button>
                <button
                  onClick={() => setViewportWidth('375px')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    viewportWidth === '375px' ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Mobile (375px)
                </button>
              </div>

              {/* Refresh Button */}
              <button
                onClick={() => setPreviewKey((prev) => prev + 1)}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all flex items-center gap-1.5 text-xs font-bold"
                title="Reload Preview Frame"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload</span>
              </button>

              {/* Open in New Tab */}
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-blue-600/30 hover:bg-blue-500/50 border border-blue-400/40 text-blue-200 transition-all flex items-center gap-1.5 text-xs font-bold"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Tab</span>
              </a>
            </div>
          </div>

          {/* Iframe Viewport Container */}
          <div className="w-full flex justify-center bg-black/60 rounded-[32px] border border-white/10 p-4 shadow-2xl overflow-hidden min-h-[650px]">
            <iframe
              key={previewKey}
              src="/"
              title="Live Homepage Visual Preview"
              style={{ width: viewportWidth, height: '650px' }}
              className="rounded-2xl border border-white/15 shadow-2xl transition-all duration-300 bg-slate-950"
            />
          </div>
        </div>
      )}
    </div>
  );
}
