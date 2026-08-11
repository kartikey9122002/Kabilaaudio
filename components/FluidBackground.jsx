'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';

function SoftIndigoLiquidMesh() {
  return (
    <Icosahedron args={[1, 128]} scale={2.4}>
      <MeshDistortMaterial
        color="#4f46e5"
        distort={0.6}
        metalness={0.6}
        roughness={0.2}
        speed={2}
      />
    </Icosahedron>
  );
}

export default function FluidBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-20 pointer-events-none overflow-hidden bg-[#0c0d21]">
      {/* 1. Base Deep Cinematic Blue & Indigo Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1026] via-[#0c0d21] to-[#060713]" />

      {/* 2. Soft Glowing Blue & Indigo Ambient Orbs */}
      {/* Top-Left Ambient Orb */}
      <div className="absolute -top-28 -left-28 w-[650px] h-[650px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Top-Right Ambient Orb */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Center Core Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Bottom Subtle Violet/Indigo Glow */}
      <div className="absolute -bottom-24 -left-20 w-[700px] h-[700px] bg-indigo-950/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[650px] h-[650px] bg-blue-950/40 rounded-full blur-[150px] pointer-events-none" />

      {/* 3. 3D Canvas with Soft Blue/Indigo Studio Lighting */}
      {mounted && (
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 4.2], fov: 45 }}
          className="w-full h-full pointer-events-none"
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        >
          {/* Soft Monochromatic Blue/Indigo Studio Lighting */}
          <ambientLight intensity={0.8} color="#ffffff" />
          <directionalLight position={[5, 10, 5]} intensity={3} color="#a5b4fc" />
          <directionalLight position={[-10, -10, -5]} intensity={2} color="#818cf8" />

          {/* 3D Undulating Liquid Metal Mesh in Indigo */}
          <SoftIndigoLiquidMesh />
        </Canvas>
      )}
    </div>
  );
}
