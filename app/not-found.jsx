'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
      <h1 className="text-6xl font-extrabold text-white font-heading">404</h1>
      <h2 className="text-2xl font-bold text-blue-300">Page Not Found</h2>
      <p className="text-slate-400 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all"
      >
        Return to Home
      </Link>
    </div>
  );
}
