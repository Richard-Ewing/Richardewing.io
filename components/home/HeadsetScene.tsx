"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function Headset() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.getElapsedTime();

    group.current.rotation.y = Math.sin(t * 0.22) * 0.25;
    group.current.rotation.x = Math.sin(t * 0.17) * 0.08;
    group.current.position.y = Math.sin(t * 0.45) * 0.12;
  });

  return (
    <group ref={group}>
      {/* Main headband */}
      <mesh position={[0, 0.55, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.35, 0.11, 32, 96, Math.PI]} />
        <MeshTransmissionMaterial
          thickness={0.35}
          roughness={0.12}
          transmission={0.88}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={0.2}
          color="#0891B2"
        />
      </mesh>

      {/* Left ear */}
      <mesh position={[-1.18, -0.05, 0]}>
        <sphereGeometry args={[0.48, 48, 48]} />
        <MeshTransmissionMaterial
          thickness={0.4}
          roughness={0.12}
          transmission={0.85}
          ior={1.48}
          chromaticAberration={0.06}
          color="#6366F1"
        />
      </mesh>

      {/* Right ear */}
      <mesh position={[1.18, -0.05, 0]}>
        <sphereGeometry args={[0.48, 48, 48]} />
        <MeshTransmissionMaterial
          thickness={0.4}
          roughness={0.12}
          transmission={0.85}
          ior={1.48}
          chromaticAberration={0.06}
          color="#7C3AED"
        />
      </mesh>

      {/* Central intelligence core */}
      <mesh position={[0, -0.02, 0.42]}>
        <icosahedronGeometry args={[0.25, 3]} />
        <meshStandardMaterial
          color="#7C3AED"
          emissive="#7C3AED"
          emissiveIntensity={1.8}
          metalness={0.3}
          roughness={0.15}
        />
      </mesh>

      {/* Inference ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.52, 0.008, 12, 100]} />
        <meshBasicMaterial color="#0891B2" transparent opacity={0.65} />
      </mesh>
    </group>
  );
}

export default function HeadsetScene() {
  return (
    <div className="headset-scene">
      <Canvas
        camera={{
          position: [0, 0, 4.4],
          fov: 35,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.85} />
        <pointLight position={[2, 2, 3]} intensity={25} color="#0891B2" />
        <pointLight position={[-3, -1, 2]} intensity={18} color="#7C3AED" />

        <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.35}>
          <Headset />
        </Float>

        <Sparkles count={60} scale={5} size={1.2} speed={0.25} opacity={0.4} color="#7C3AED" />

        <Environment preset="studio" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          enableDamping
          dampingFactor={0.04}
        />
      </Canvas>
    </div>
  );
}
