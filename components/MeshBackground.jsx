'use client';

export default function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-[#0c0d21]">
      {/* Base Deep Blue Backdrop */}
      <div className="absolute inset-0 bg-[#0c0d21]" />

      {/* Hero Glow (Behind Headline) */}
      <div className="absolute top-12 left-1/3 w-[600px] h-[500px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Widget Glow (Top Right) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Ambient subtle deep violet bottom glow */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-950/30 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Studio Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}
