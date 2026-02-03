'use client';

import { useEffect, useState } from 'react';

interface Meteor {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

interface MeteorsProps {
  count?: number;
}

export default function Meteors({ count = 20 }: MeteorsProps) {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    setMeteors(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 3,
      }))
    );
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-60"
          style={{
            left: `${meteor.left}%`,
            top: '-5%',
            boxShadow: '0 0 6px 2px rgba(0, 240, 255, 0.3)',
            animation: `meteor ${meteor.duration}s linear ${meteor.delay}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes meteor {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) translateX(50px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
