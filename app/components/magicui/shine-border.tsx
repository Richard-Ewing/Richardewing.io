'use client';

import { ReactNode } from 'react';

interface ShineBorderProps {
    children: ReactNode;
    className?: string;
    borderColor?: string;
    borderWidth?: number;
    duration?: number;
}

export function ShineBorder({
    children,
    className = '',
    borderColor = 'rgba(0, 240, 255, 0.5)',
    borderWidth = 1,
    duration = 3,
}: ShineBorderProps) {
    return (
        <div
            className={`relative overflow-hidden rounded-xl ${className}`}
            style={{
                padding: borderWidth,
                background: `linear-gradient(90deg, transparent, ${borderColor.replace('0.5', '0.3').replace('0.6', '0.3')}, transparent)`,
                backgroundSize: '200% 100%',
                animation: `shine ${duration * 2}s linear infinite`,
            }}
        >
            <div className="relative bg-obsidian rounded-xl h-full w-full">
                {children}
            </div>
            <style jsx>{`
        @keyframes shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
        </div>
    );
}
