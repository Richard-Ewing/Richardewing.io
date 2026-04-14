'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    color: string;
    size: number;
    speedX: number;
    speedY: number;
    rotation: number;
    rotationSpeed: number;
    opacity: number;
    shape: 'rect' | 'circle' | 'star';
}

interface CelebrationOverlayProps {
    isActive: boolean;
    onComplete?: () => void;
    title?: string;
    subtitle?: string;
    duration?: number;
}

const COLORS = [
    '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444',
    '#ec4899', '#6366f1', '#14b8a6', '#f97316', '#a855f7',
    '#22d3ee', '#34d399', '#fbbf24', '#fb923c', '#818cf8',
];

const CELEBRATION_SOUND_DATA = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';

export default function CelebrationOverlay({
    isActive,
    onComplete,
    title = 'Module Complete!',
    subtitle = 'Excellent work. Keep building your engineering economics expertise.',
    duration = 4000,
}: CelebrationOverlayProps) {
    const [visible, setVisible] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const animRef = useRef<number | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const createParticles = useCallback(() => {
        const newParticles: Particle[] = [];
        for (let i = 0; i < 150; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * window.innerWidth,
                y: -20 - Math.random() * 200,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                size: 4 + Math.random() * 8,
                speedX: (Math.random() - 0.5) * 6,
                speedY: 2 + Math.random() * 5,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
                opacity: 1,
                shape: (['rect', 'circle', 'star'] as const)[Math.floor(Math.random() * 3)],
            });
        }
        return newParticles;
    }, []);

    const drawStar = useCallback((ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) => {
        const spikes = 5;
        const outerRadius = size;
        const innerRadius = size * 0.4;
        let rot = (Math.PI / 2) * 3;
        const step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
            ctx.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
            rot += step;
            ctx.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
            rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.fill();
    }, []);

    useEffect(() => {
        if (!isActive) return;

        const initTimer = setTimeout(() => {
            setVisible(true);
            setFadeOut(false);
            setShowContent(false);
        }, 10);
        
        const particleData = createParticles();

        // Show content after a brief delay
        const contentTimer = setTimeout(() => setShowContent(true), 300);

        // Play a subtle celebration chime
        try {
            const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5-E5-G5-C6 major chord arpeggio
            notes.forEach((freq, i) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.12);
                gain.gain.setValueAtTime(0, audioCtx.currentTime + i * 0.12);
                gain.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + i * 0.12 + 0.05);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.12 + 0.6);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(audioCtx.currentTime + i * 0.12);
                osc.stop(audioCtx.currentTime + i * 0.12 + 0.6);
            });
        } catch (e) {
            // Audio not available, continue without sound
        }

        // Start canvas animation
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                let currentParticles = [...particleData];
                const animate = () => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    currentParticles = currentParticles.map(p => ({
                        ...p,
                        x: p.x + p.speedX,
                        y: p.y + p.speedY,
                        speedY: p.speedY + 0.1,
                        rotation: p.rotation + p.rotationSpeed,
                        opacity: Math.max(0, p.opacity - 0.003),
                    })).filter(p => p.y < canvas.height + 50 && p.opacity > 0);

                    currentParticles.forEach(p => {
                        ctx.save();
                        ctx.translate(p.x, p.y);
                        ctx.rotate((p.rotation * Math.PI) / 180);
                        ctx.globalAlpha = p.opacity;
                        ctx.fillStyle = p.color;

                        if (p.shape === 'rect') {
                            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
                        } else if (p.shape === 'circle') {
                            ctx.beginPath();
                            ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                            ctx.fill();
                        } else {
                            drawStar(ctx, 0, 0, p.size / 2);
                        }
                        ctx.restore();
                    });

                    if (currentParticles.length > 0) {
                        animRef.current = requestAnimationFrame(animate);
                    }
                };
                animate();
            }
        }

        // Fade out
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, duration - 800);

        // Hide
        const hideTimer = setTimeout(() => {
            setVisible(false);
            setShowContent(false);
            if (animRef.current) cancelAnimationFrame(animRef.current);
            onComplete?.();
        }, duration);

        return () => {
            clearTimeout(initTimer);
            clearTimeout(contentTimer);
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, [isActive, createParticles, drawStar, duration, onComplete]);

    if (!visible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
                fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
            }`}
            onClick={() => {
                setFadeOut(true);
                setTimeout(() => {
                    setVisible(false);
                    onComplete?.();
                }, 700);
            }}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

            {/* Confetti Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none z-[1]"
            />

            {/* Content */}
            <div
                className={`relative z-10 text-center transform transition-all duration-700 ${
                    showContent ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-8'
                }`}
            >
                {/* Glowing ring */}
                <div className="relative inline-block mb-8">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-500 via-violet-500 to-emerald-500 p-[3px] animate-spin-slow">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <span className="text-5xl">🏆</span>
                        </div>
                    </div>
                    {/* Pulse rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping" />
                    <div className="absolute inset-[-8px] rounded-full border border-violet-400/20 animate-pulse" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-3">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400">
                        {title}
                    </span>
                </h2>
                <p className="text-zinc-400 text-lg max-w-md mx-auto mb-6">{subtitle}</p>

                {/* Progress streak indicator */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-zinc-200">
                    <span className="text-amber-400">🔥</span>
                    <span className="text-sm text-zinc-300 font-mono">Keep the momentum going</span>
                </div>

                <p className="text-xs text-zinc-600 mt-6">Click anywhere to continue</p>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 4s linear infinite;
                }
            `}</style>
        </div>
    );
}
