/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        space: ["var(--font-space-grotesk)", "sans-serif"],
        jakarta: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      colors: {
        darkbg: "#07050b",
        brand: {
          violet: "#2e0249",
          magenta: "#ec4899",
          deepMagenta: "#be185d",
          accent: "#d946ef",
          glow: "#f472b6",
        },
      },
      boxShadow: {
        'glass': '0 0 40px -10px rgba(236, 72, 153, 0.15)',
        'magenta-glow': '0 0 45px -5px rgba(236, 72, 153, 0.4)',
        'cyan-glow': '0 0 45px -5px rgba(6, 182, 212, 0.4)',
        'neon-green': '0 0 35px 0px rgba(34, 197, 94, 0.4)',
      },
      animation: {
        'mesh-float-1': 'meshFloat1 20s ease-in-out infinite alternate',
        'mesh-float-2': 'meshFloat2 24s ease-in-out infinite alternate',
        'mesh-float-3': 'meshFloat3 28s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        meshFloat1: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(80px, 60px) scale(1.15)' },
          '100%': { transform: 'translate(-40px, 100px) scale(0.95)' },
        },
        meshFloat2: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-100px, -50px) scale(1.2)' },
          '100%': { transform: 'translate(60px, -80px) scale(0.9)' },
        },
        meshFloat3: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(60px, -90px) scale(1.1)' },
          '100%': { transform: 'translate(-70px, 40px) scale(1.05)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};

