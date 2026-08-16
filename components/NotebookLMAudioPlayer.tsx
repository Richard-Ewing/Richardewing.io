'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX, Download, FileText, Sparkles, Share2 } from 'lucide-react';

interface Chapter {
  title: string;
  time: number;
}

interface NotebookLMAudioPlayerProps {
  title?: string;
  subtitle?: string;
  audioUrl?: string;
  durationStr?: string;
  chapters?: Chapter[];
  transcript?: string;
}

export default function NotebookLMAudioPlayer({
  title = "AI Architecture Deep Dive",
  subtitle = "Generated with Google Ultra & NotebookLM Audio Overview",
  audioUrl,
  durationStr = "14:20",
  chapters = [
    { title: "System Introduction & Problem Statement", time: 0 },
    { title: "Context Rot & Retry Loops Analysis", time: 180 },
    { title: "Deterministic Governance Solutions", time: 480 },
    { title: "Key Principles & Summary", time: 720 },
  ],
  transcript = "Welcome to this deep dive discussion on systems governance. Today we analyze how modern engineering organizations manage context rot, prevent retry loops in autonomous agents, and implement deterministic QA gates."
}: NotebookLMAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(860); // 14:20 in seconds
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const rates = [1, 1.25, 1.5, 2];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const togglePlay = () => {
    if (!audioRef.current && !audioUrl) {
      // Mock simulation mode if no audio file provided
      setIsPlaying(!isPlaying);
      return;
    }
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const curr = audioRef.current.currentTime;
      setCurrentTime(curr);
      // Update active chapter
      for (let i = chapters.length - 1; i >= 0; i--) {
        if (curr >= chapters[i].time) {
          setActiveChapter(i);
          break;
        }
      }
    }
  };

  const seekTo = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = seconds;
    }
    setCurrentTime(seconds);
  };

  const skipSeconds = (seconds: number) => {
    const nextTime = Math.max(0, Math.min(duration, currentTime + seconds));
    seekTo(nextTime);
  };

  const cyclePlaybackRate = () => {
    const nextIdx = (rates.indexOf(playbackRate) + 1) % rates.length;
    setPlaybackRate(rates[nextIdx]);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full my-8 bg-zinc-950/90 border border-zinc-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:border-zinc-700">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hidden audio element if real audio URL provided */}
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={() => audioRef.current && setDuration(audioRef.current.duration)}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      {/* Top Header */}
      <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NotebookLM Audio Deep Dive</span>
          </div>
          <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">{title}</h3>
          <p className="text-xs text-zinc-400 mt-0.5">{subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowTranscript(!showTranscript)}
            className={`p-2 rounded-lg border text-xs font-mono transition-colors ${
              showTranscript 
                ? 'bg-zinc-800 border-zinc-700 text-zinc-100' 
                : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
            title="Toggle Transcript"
            aria-label="Toggle Transcript"
          >
            <FileText className="w-4 h-4" />
          </button>

          {audioUrl && (
            <a
              href={audioUrl}
              download
              className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-zinc-200 text-xs font-mono transition-colors"
              title="Download MP3"
              aria-label="Download Audio"
            >
              <Download className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Scrubber and Waveform Bar */}
      <div className="my-4 relative z-10">
        <div 
          className="h-2.5 w-full bg-zinc-800/80 rounded-full cursor-pointer overflow-hidden relative"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            seekTo(pos * duration);
          }}
        >
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-100"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[11px] font-mono text-zinc-500 mt-1.5">
          <span>{formatTime(currentTime)}</span>
          <span className="text-zinc-400">{chapters[activeChapter]?.title || "Playing"}</span>
          <span>{durationStr || formatTime(duration)}</span>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex items-center justify-between mt-2 pt-3 border-t border-zinc-900 relative z-10">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => skipSeconds(-15)}
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
            title="Rewind 15 seconds"
            aria-label="Rewind 15 seconds"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className="w-11 h-11 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 flex items-center justify-center shadow-lg shadow-emerald-500/20 transition-transform active:scale-95"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <button
            type="button"
            onClick={() => skipSeconds(15)}
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
            title="Forward 15 seconds"
            aria-label="Forward 15 seconds"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        </div>

        {/* Speed & Volume Controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={cyclePlaybackRate}
            className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-100 text-xs font-mono font-medium transition-colors"
            title="Playback Speed"
          >
            {playbackRate}x
          </button>

          <button
            type="button"
            onClick={() => {
              if (audioRef.current) {
                audioRef.current.muted = !isMuted;
              }
              setIsMuted(!isMuted);
            }}
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
            title="Toggle Mute"
            aria-label="Toggle Mute"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expandable Transcript Drawer */}
      {showTranscript && (
        <div className="mt-4 pt-4 border-t border-zinc-800/80 text-xs leading-relaxed text-zinc-300 bg-zinc-900/40 p-4 rounded-xl relative z-10 animate-in fade-in slide-in-from-top-2 duration-200">
          <h4 className="text-zinc-100 font-semibold mb-2 font-mono uppercase tracking-wider text-[10px]">
            Executive Transcript
          </h4>
          <p className="font-sans text-zinc-300">{transcript}</p>
        </div>
      )}
    </div>
  );
}
