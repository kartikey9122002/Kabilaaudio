'use client';

import { motion } from 'framer-motion';
import { Play, Sparkles, Youtube, Disc, Flame } from 'lucide-react';

export default function MasonryGallery() {
  // Gallery items featuring Spotify tracks (152px), albums (352px), and YouTube videos (aspect-video)
  const items = [
    {
      id: 1,
      type: 'spotify-track',
      title: 'Midnight Echoes (Single)',
      artist: 'ARKIVE feat. Kaelen',
      genre: 'Cyberpunk Synthwave',
      spotifyEmbedUrl: 'https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=generator&theme=0',
      badge: '50M+ Streams',
    },
    {
      id: 2,
      type: 'youtube',
      title: 'Studio Session: Producing "Hyperdrive" Beat from Scratch',
      views: '1.2M Views',
      youtubeEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1',
      badge: 'Behind The Scenes',
    },
    {
      id: 3,
      type: 'spotify-album',
      title: 'NEON HORIZONS - LP',
      artist: 'ARKIVE',
      genre: 'Futuristic Hip-Hop / Trap',
      spotifyEmbedUrl: 'https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3?utm_source=generator&theme=0',
      badge: 'Platinum Album',
    },
    {
      id: 4,
      type: 'spotify-track',
      title: 'Velvet Pressure (Spatial Audio Remix)',
      artist: 'ARKIVE & Aria V',
      genre: 'Deep Melodic Techno',
      spotifyEmbedUrl: 'https://open.spotify.com/embed/track/0VjZ8J9w4N3p506Xv8zN8x?utm_source=generator&theme=0',
      badge: 'Editorial Playlist',
    },
    {
      id: 5,
      type: 'youtube',
      title: 'Analog Synthesizers & Sound Design Masterclass',
      views: '850K Views',
      youtubeEmbedUrl: 'https://www.youtube.com/embed/L_LUpnjgPso?autoplay=0&controls=1',
      badge: 'Masterclass',
    },
    {
      id: 6,
      type: 'spotify-album',
      title: 'CHRONICLES OF BASS - EP',
      artist: 'ARKIVE',
      genre: 'Bass Music / Dubstep',
      spotifyEmbedUrl: 'https://open.spotify.com/embed/album/43977jM2z84E07kK4fU3n9?utm_source=generator&theme=0',
      badge: 'Grammy Nominated',
    },
    {
      id: 7,
      type: 'spotify-track',
      title: 'Obsidian Pulse (Orchestral Trap)',
      artist: 'ARKIVE',
      genre: 'Cinematic Trap',
      spotifyEmbedUrl: 'https://open.spotify.com/embed/track/2Fwvk92Z3z8X61M6K528Vz?utm_source=generator&theme=0',
      badge: 'Chart Top 10',
    },
    {
      id: 8,
      type: 'youtube',
      title: 'Mixing & Mastering Dolby Atmos Spatial Audio',
      views: '620K Views',
      youtubeEmbedUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ?autoplay=0&controls=1',
      badge: 'Tutorial',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
          <Disc className="w-3.5 h-3.5 text-purple-400" />
          Discography & Media Vault
        </div>
        <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          CURATED <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">DISCOGRAPHY</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Explore multi-platinum singles, full album productions, live studio breakdown vlogs, and official music video releases.
        </p>
      </div>

      {/* Multi-Column Pinterest Masonry */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {items.map((item, index) => {
          // Even index drifts in from left (x: -50), odd from right (x: 50)
          const isEven = index % 2 === 0;
          const initialX = isEven ? -50 : 50;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: initialX, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: (index % 3) * 0.1 }}
              whileHover={{ y: -5 }}
              className="break-inside-avoid inline-block w-full mb-6"
            >
              <div className="glass-card rounded-3xl p-5 border border-white/10 shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)] hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.4)] transition-all duration-500 relative group overflow-hidden">
                {/* Header Tag / Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/15 text-purple-300">
                    <Sparkles className="w-3 h-3 text-pink-400" />
                    {item.badge}
                  </span>
                  {item.type === 'youtube' ? (
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Youtube className="w-3.5 h-3.5 text-red-400" /> {item.views}
                    </span>
                  ) : (
                    <span className="text-xs text-purple-400 font-bold">
                      {item.type === 'spotify-album' ? 'ALBUM' : 'SINGLE'}
                    </span>
                  )}
                </div>

                {/* Card Title & Info */}
                <h3 className="font-bold text-lg text-white mb-1 leading-snug group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                {item.artist && (
                  <p className="text-xs text-gray-400 mb-4">
                    {item.artist} • <span className="text-gray-300">{item.genre}</span>
                  </p>
                )}

                {/* Embed Renderers */}
                {item.type === 'spotify-track' && (
                  <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                    <iframe
                      src={item.spotifyEmbedUrl}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-2xl"
                      title={item.title}
                    />
                  </div>
                )}

                {item.type === 'spotify-album' && (
                  <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                    <iframe
                      src={item.spotifyEmbedUrl}
                      width="100%"
                      height="352"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-2xl"
                      title={item.title}
                    />
                  </div>
                )}

                {item.type === 'youtube' && (
                  <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 aspect-video relative">
                    <iframe
                      src={item.youtubeEmbedUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-2xl"
                      title={item.title}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
