import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FluidBackground = dynamic(() => import('@/components/FluidBackground'), { ssr: false });

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'Kabila Audio | SONIC VISIONARY — Multi-Platinum Producer & Audio Architect',
  description: 'Official portfolio & studio vault for Kabila Audio. Multi-platinum production, stem mixing & mastering, studio vlogs, analog gear archive, and royalty-free sample vault.',
  keywords: 'Kabila Audio, music producer, audio architect, sound visionary, stem mixing, mastering, studio setup, beatmaker',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body className="bg-[#0c0d21] text-white font-sans antialiased selection:bg-indigo-500 selection:text-white min-h-screen flex flex-col relative overflow-x-hidden">
        {/* 3D Liquid Metal Background Scene */}
        <FluidBackground />

        {/* Brand Glass Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow relative z-10">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}

