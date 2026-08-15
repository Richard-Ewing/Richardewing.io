'use client';

import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Sparkles, 
  Headphones, 
  Video, 
  ExternalLink,
  Clock,
  Maximize2
} from 'lucide-react';

export default function ProgramMediaPlayers() {
  const [activeMedia, setActiveMedia] = useState<'audio' | 'video'>('audio');
  
  // Audio state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Audio stream URL from NotebookLM artifact 5
  const audioSrc = "https://notebook.google.com/notebook/b7f9f035-0e8e-410f-a817-11f331fd254c/artifact/41962ba9-357c-4b6e-a0aa-7ab8a3fc8b9b";

  const handleAudioToggle = () => {
    if (!audioRef.current) return;
    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current.play().catch(e => console.log('Audio play blocked', e));
      setIsPlayingAudio(true);
    }
  };

  const handleAudioTimeUpdate = () => {
    if (!audioRef.current) return;
    const cur = audioRef.current.currentTime;
    const dur = audioRef.current.duration || 1461; // 24:21 fallback
    setAudioCurrentTime(cur);
    setAudioProgress((cur / dur) * 100);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-100 backdrop-blur-sm">
      {/* Selector Tabs */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveMedia('audio')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              activeMedia === 'audio'
                ? "bg-sky-500 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-white bg-slate-950/60 border border-slate-800"
            }`}
          >
            <Headphones className="w-3.5 h-3.5" />
            24-Min Deep Dive Audio
          </button>
          <button
            onClick={() => setActiveMedia('video')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              activeMedia === 'video'
                ? "bg-sky-500 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-white bg-slate-950/60 border border-slate-800"
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            5-Min Video Sprint
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
          <Clock className="w-3.5 h-3.5 text-sky-400" />
          <span>{activeMedia === 'audio' ? '24 Min 21 Sec' : '5 Min 11 Sec'}</span>
        </div>
      </div>

      {/* Audio Player Mode */}
      {activeMedia === 'audio' ? (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-sky-400">Masterclass Audio Essay</span>
              <h3 className="text-xl font-bold text-white">
                Why Flawless Code Kills AI Startups
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                A rigorous exploration of why technical founders fall into the trap of over-architecting backends while completely neglecting distribution, pricing discovery, and customer conversations.
              </p>
            </div>

            <button
              onClick={handleAudioToggle}
              className="flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-lg shadow-sky-400/25 shrink-0"
              aria-label={isPlayingAudio ? "Pause Audio" : "Play Audio"}
            >
              {isPlayingAudio ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
            </button>
          </div>

          {/* Hidden HTML Audio element */}
          <audio
            ref={audioRef}
            src={audioSrc}
            onTimeUpdate={handleAudioTimeUpdate}
            onEnded={() => setIsPlayingAudio(false)}
          />

          {/* Timeline Bar */}
          <div className="space-y-1.5 pt-2">
            <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800 cursor-pointer">
              <div 
                className="h-full bg-sky-400 transition-all duration-150"
                style={{ width: `${audioProgress}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span>{formatTime(audioCurrentTime)}</span>
              <span>24:21</span>
            </div>
          </div>
        </div>
      ) : (
        /* Video Mode */
        <div className="space-y-4">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-sky-400">Execution Sprint Video</span>
            <h3 className="text-xl font-bold text-white">
              The 48-Hour AI Validation Sprint
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Watch how to mine Reddit forums for high-friction workflows, synthesize a 1-sentence value proposition in Claude, and draft a $5,000 forensic audit offer before opening VS Code.
            </p>
          </div>

          <div className="relative w-full aspect-video bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden group">
            {/* Visual Thumbnail overlay */}
            <div className="text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <div className="text-xs font-semibold text-slate-200">
                Interactive Video Walkthrough (5m 11s)
              </div>
              <p className="text-[11px] text-slate-400 max-w-md mx-auto">
                Step-by-step breakdown of the Cognitive Division of Labor (Perplexity Pro + Claude 3.5 + Kimi) applied to real B2B workflows.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
