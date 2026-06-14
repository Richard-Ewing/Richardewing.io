'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * The Neural Substrate (Section 1)
 * A generative particle system representing unstructured prompt data and 'Shadow AI'.
 * Particles react to a simulated 'heat map' representing runaway API costs.
 */
export default function NeuralSubstrate() {
  const pointsRef = useRef<THREE.Points>(null);

  const particleCount = 2000;
  
  // Generate procedural starting positions
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const color = new THREE.Color();
    
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      
      // Default color: chaotic neutral
      color.setHSL(0.6, 0.8, 0.5);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, [particleCount]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Ambient orbital rotation
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    
    // Simulate 'Billing Shock Heatmap' by pulsing particles
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < particleCount; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;
      
      // Add subtle noise displacement
      positions[ix] += Math.sin(state.clock.elapsedTime + positions[iy]) * 0.002;
      positions[iy] += Math.cos(state.clock.elapsedTime + positions[ix]) * 0.002;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
