'use client';

import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { ReactNode } from 'react';

/**
 * Global WebGL Scene Orchestrator
 * Persists across route changes via Next.js App Router layout.
 * Ensures smooth WebGL transitions without re-mounting the canvas context.
 */
export default function Scene({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        {children}
        <Preload all />
      </Canvas>
    </div>
  );
}
