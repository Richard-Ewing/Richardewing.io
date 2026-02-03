'use client';

import { ReactNode } from 'react';

interface ShineBorderProps {
    children: ReactNode;
    className?: string;
    classNameOverlay?: string;
    borderColor?: string;
    borderWidth?: number;
    duration?: number;
}

export function ShineBorder({
    children,
    className = '',
    classNameOverlay = '',
    borderColor = 'rgba(0, 240, 255, 0.5)',
    borderWidth = 1,
    duration = 3,
}: ShineBorderProps) {
    return (
        <div className={`relative overflow-hidden rounded-xl ${className}`}>
            <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    padding: borderWidth,
                    background: `linear-gradient(90deg, transparent, ${borderColor.replace('0.5', '0.3').replace('0.6', '0.3')}, transparent)`,
                    backgroundSize: '200% 100%',
                    animation: `shine ${duration * 2}s linear infinite`,
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                }}
            />
            {/* Gradient Background border - simplified approach */}
            <div
                className={`absolute inset-0 w-full h-full pointer-events-none shine-overlay transition-opacity duration-300 ${classNameOverlay}`}
                style={{
                    padding: borderWidth,
                    background: `linear-gradient(90deg, transparent, ${borderColor.replace('0.5', '0.3').replace('0.6', '0.3')}, transparent)`,
                    backgroundSize: '200% 100%',
                    animation: `shine ${duration * 2}s linear infinite`,
                }}
            />

            <div className="relative bg-obsidian rounded-xl h-full w-full z-10">
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
