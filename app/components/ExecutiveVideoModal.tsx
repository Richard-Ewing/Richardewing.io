"use client";

import React, { useState, useEffect } from 'react';
import { Play, Pause, X, Shield, Award, Sparkles, Volume2, VolumeX, RotateCcw, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface Chapter {
    time: string;
    title: string;
    description: string;
    keyTakeaway: string;
}

const CHAPTERS: Chapter[] = [
    {
        time: '0:00 - 0:25',
        title: 'Chapter 1: What is an AI Economist?',
        description: 'The translation layer between raw engineering output and CFO-level financial outcomes.',
        keyTakeaway: 'An AI Economist audits R&D capital spend and calculates the cost per useful output.',
    },
    {
        time: '0:25 - 0:55',
        title: 'Chapter 2: The R&D Capital Leak',
        description: 'Engineers spend an average of 4.3 hrs/week checking non-deterministic model outputs.',
        keyTakeaway: '30% of enterprise AI bills produce zero margin value due to un-governed retry loops.',
    },
    {
        time: '0:55 - 1:30',
        title: 'Chapter 3: Deterministic Governance',
        description: 'How Exogram installs VPC-level cost caps before code hits production.',
        keyTakeaway: 'Predictability over probability. Stop using one AI to babysit another AI.',
    },
];

export const ExecutiveVideoModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeChapter, setActiveChapter] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(false);

    // Simulated active video playback progression
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying && isOpen) {
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        setIsPlaying(false);
                        return 100;
                    }
                    const next = prev + 2;
                    if (next > 60 && activeChapter < 2) setActiveChapter(2);
                    else if (next > 30 && activeChapter < 1) setActiveChapter(1);
                    return next;
                });
            }, 300);
        }
        return () => clearInterval(interval);
    }, [isPlaying, isOpen, activeChapter]);

    const togglePlay = () => {
        if (progress >= 100) setProgress(0);
        setIsPlaying(!isPlaying);
    };

    const handleChapterClick = (index: number) => {
        setActiveChapter(index);
        setProgress(index === 0 ? 5 : index === 1 ? 35 : 65);
        setIsPlaying(true);
    };

    return (
        <>
            {/* Inline Video Trigger Button */}
            <div
                onClick={() => { setIsOpen(true); setIsPlaying(true); }}
                className="group relative cursor-pointer inline-flex items-center gap-4 p-3 pr-6 rounded-2xl bg-gradient-to-r from-purple-950 via-indigo-950 to-zinc-950 border border-purple-500/40 text-white shadow-xl shadow-purple-950/30 hover:border-purple-400 hover:scale-[1.01] transition-all duration-200"
            >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-purple-400/60 shrink-0 bg-purple-950">
                    <Image
                        src="/assets/headshot.jpg"
                        alt="Richard Ewing Video Briefing"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-purple-950/50 flex items-center justify-center">
                        <div className="w-6.5 h-6.5 rounded-full bg-white text-purple-950 flex items-center justify-center pl-0.5 shadow-md group-hover:scale-110 transition-transform">
                            <Play className="w-3.5 h-3.5 fill-current" />
                        </div>
                    </div>
                </div>

                <div className="text-left">
                    <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-purple-300 uppercase tracking-widest">
                        <Sparkles className="w-3 h-3 text-purple-400" />
                        <span>Interactive 90-Sec Video Brief</span>
                    </div>
                    <div className="font-bold text-sm text-white group-hover:text-purple-200 transition-colors">
                        What is an AI Economist?
                    </div>
                    <div className="text-xs text-zinc-300 font-medium">
                        Watch Richard Ewing explain AI unit economics & governance →
                    </div>
                </div>
            </div>

            {/* Video Modal Screen */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
                    <div className="relative w-full max-w-4xl bg-zinc-950 border border-purple-900/60 rounded-3xl p-6 sm:p-8 shadow-2xl text-white overflow-hidden">
                        
                        {/* Top Bar */}
                        <div className="flex justify-between items-center border-b border-zinc-800 pb-4 mb-6">
                            <div>
                                <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest">
                                    EXECUTIVE BRIEFING PRESENTATION
                                </span>
                                <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-white">
                                    What is an AI Economist? — Richard Ewing
                                </h3>
                            </div>

                            <button
                                onClick={() => { setIsOpen(false); setIsPlaying(false); }}
                                className="p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Interactive Video Player Window */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            
                            {/* Main Video Presentation Canvas */}
                            <div className="lg:col-span-2 bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between relative min-h-[320px] shadow-inner">
                                <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                                        <span>LIVE PRESENTATION PLAYBACK</span>
                                    </div>
                                    <span>{CHAPTERS[activeChapter].time}</span>
                                </div>

                                {/* Active Slide Content */}
                                <div className="my-6 space-y-4">
                                    <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-lg text-xs font-mono font-bold">
                                        {CHAPTERS[activeChapter].title}
                                    </div>

                                    <h4 className="text-xl sm:text-2xl font-grotesk font-bold text-white leading-snug">
                                        {CHAPTERS[activeChapter].description}
                                    </h4>

                                    <div className="p-4 bg-zinc-950/80 border border-zinc-800 rounded-xl">
                                        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                                            KEY EXECUTIVE TAKEAWAY:
                                        </span>
                                        <p className="text-sm font-semibold text-zinc-200">
                                            &ldquo;{CHAPTERS[activeChapter].keyTakeaway}&rdquo;
                                        </p>
                                    </div>
                                </div>

                                {/* Player Controls & Progress Bar */}
                                <div className="space-y-3 pt-4 border-t border-zinc-800">
                                    {/* Progress Bar */}
                                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden cursor-pointer">
                                        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full transition-all duration-200" style={{ width: `${progress}%` }} />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={togglePlay}
                                                className="w-10 h-10 rounded-xl bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center cursor-pointer transition-colors"
                                            >
                                                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                                            </button>
                                            <button
                                                onClick={() => { setProgress(0); setActiveChapter(0); setIsPlaying(true); }}
                                                className="p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                                                title="Restart"
                                            >
                                                <RotateCcw className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => setIsMuted(!isMuted)}
                                                className="p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                                            >
                                                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                            </button>
                                        </div>

                                        <span className="text-xs font-mono text-zinc-400">
                                            {Math.round((progress / 100) * 90)}s / 90s
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar: Presentation Chapters */}
                            <div className="space-y-3">
                                <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                                    Presentation Chapters
                                </span>

                                {CHAPTERS.map((chap, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => handleChapterClick(idx)}
                                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                                            activeChapter === idx
                                                ? 'bg-purple-950/60 border-purple-500 text-white shadow'
                                                : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                                            <span className={activeChapter === idx ? 'text-purple-300 font-bold' : 'text-zinc-500'}>{chap.time}</span>
                                            {activeChapter === idx && <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />}
                                        </div>
                                        <div className="text-xs font-bold text-white mb-1">
                                            {chap.title}
                                        </div>
                                        <p className="text-[11px] leading-relaxed text-zinc-300 line-clamp-2">
                                            {chap.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Modal Footer */}
                        <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
                            <span>Presenter: Richard Ewing — Founder of Exogram & CareerWin.ai</span>
                            <div className="flex gap-3">
                                <a
                                    href="/services#gut_check"
                                    className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-opacity hover:opacity-90"
                                >
                                    Book $450 Diagnostic →
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default ExecutiveVideoModal;
