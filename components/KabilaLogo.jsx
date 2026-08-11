'use client';

export default function KabilaLogo({ className = 'h-8 sm:h-9 w-auto', showGlow = true }) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 264 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Green Glow for Chevron */}
          <filter id="greenGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Blue Line Gradient */}
          <linearGradient id="blueLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#00BFFF" />
          </linearGradient>

          {/* Green Line Gradient */}
          <linearGradient id="greenLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FF88" />
            <stop offset="100%" stopColor="#00E676" />
          </linearGradient>
        </defs>

        {/* --- KABILA WORDMARK --- */}
        <g stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* 'K' */}
          <path d="M 16,14 L 16,56" />
          <path d="M 40,15 L 16,36" />
          <path d="M 23,31 L 43,56" />

          {/* 'A' (First) Outer Arch */}
          <path d="M 50,56 L 68,17 C 70.5,12 75.5,12 78,17 L 96,56" />

          {/* 'B' */}
          <path d="M 112,14 L 112,56" />
          <path d="M 112,14 L 130,14 C 140,14 140,33 130,33 L 112,33" />
          <path d="M 112,33 L 132,33 C 143,33 143,56 132,56 L 112,56" />

          {/* 'I' */}
          <path d="M 158,14 L 158,56" />

          {/* 'L' */}
          <path d="M 176,14 L 176,53.5 C 176,55 177,56 178.5,56 L 200,56" />

          {/* 'A' (Second) Outer Arch */}
          <path d="M 210,56 L 228,17 C 230.5,12 235.5,12 238,17 L 256,56" />
        </g>

        {/* --- GREEN INNER CHEVRONS / ACCENTS ON 'A's --- */}
        <g
          stroke="#00FF88"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter={showGlow ? "url(#greenGlow)" : undefined}
        >
          {/* First A Inner Chevron */}
          <path d="M 59,52 L 70,36 C 71.5,33.8 74.5,33.8 76,36 L 87,52" />

          {/* Second A Inner Chevron */}
          <path d="M 219,52 L 230,36 C 231.5,33.8 234.5,33.8 236,36 L 247,52" />
        </g>

        {/* --- BOTTOM SECTION: SPLIT GRADIENT LINES & AUDIO --- */}
        {/* Left Blue Accent Line */}
        <line
          x1="22"
          y1="75"
          x2="78"
          y2="75"
          stroke="url(#blueLineGrad)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Center 'A U D I O' Text */}
        <text
          x="132"
          y="78.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="11"
          fontWeight="800"
          letterSpacing="0.45em"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          className="uppercase select-none"
        >
          AUDIO
        </text>

        {/* Right Green Accent Line */}
        <line
          x1="186"
          y1="75"
          x2="248"
          y2="75"
          stroke="url(#greenLineGrad)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
