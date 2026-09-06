'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  MessageSquare,
  X,
  Sparkles,
  ExternalLink,
  Loader2,
  Send,
  AlertCircle,
  Calendar,
  Wrench,
  BookOpen,
  Layers,
  RotateCcw,
  Clock
} from 'lucide-react';
import { RecommendedCard } from '@/app/lib/voice-knowledge';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function encodeWAV(samples: Float32Array, sampleRate = 16000): Blob {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);

  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + samples.length * 2, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM format
  view.setUint16(22, 1, true); // Mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(36, 'data');
  view.setUint32(40, samples.length * 2, true);

  let offset = 44;
  for (let i = 0; i < samples.length; i++, offset += 2) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }

  return new Blob([buffer], { type: 'audio/wav' });
}

function downsampleBuffer(buffer: Float32Array, inputRate: number, outputRate = 16000): Float32Array {
  if (inputRate === outputRate) return buffer;
  const ratio = inputRate / outputRate;
  const newLength = Math.round(buffer.length / ratio);
  const result = new Float32Array(newLength);
  let offsetResult = 0;
  let offsetBuffer = 0;
  while (offsetResult < result.length) {
    const nextOffsetBuffer = Math.round((offsetResult + 1) * ratio);
    let accum = 0;
    let count = 0;
    for (let i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
      accum += buffer[i];
      count++;
    }
    result[offsetResult] = count > 0 ? accum / count : 0;
    offsetResult++;
    offsetBuffer = nextOffsetBuffer;
  }
  return result;
}

function formatTimerDisplay(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function VoiceDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'voice' | 'text'>('voice');
  const [status, setStatus] = useState<'idle' | 'listening' | 'processing' | 'speaking' | 'limit_reached'>('idle');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [activeCard, setActiveCard] = useState<RecommendedCard | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(90);
  const [visualizerBars, setVisualizerBars] = useState<number[]>([4, 8, 12, 8, 4]);
  const [micError, setMicError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const processorNodeRef = useRef<ScriptProcessorNode | null>(null);
  const pcmChunksRef = useRef<Float32Array[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const sessionEndTimeRef = useRef<number | null>(null);
  const savedRemainingSecRef = useRef(90);
  const hasSessionEndedRef = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const initialAudioRef = useRef<string | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('rew_voice_session_ended');
      }
    } catch {
      // Ignore
    }
  }, []);

  // Auto-detect when user grants microphone permission in Chrome or browser settings
  useEffect(() => {
    if (typeof window === 'undefined' || !navigator?.permissions?.query) return;

    try {
      navigator.permissions
        .query({ name: 'microphone' as PermissionName })
        .then((permissionStatus) => {
          permissionStatus.onchange = () => {
            if (permissionStatus.state === 'granted') {
              setMicError(null);
            }
          };
        })
        .catch(() => {
          // Ignore if permission query for microphone is not supported
        });
    } catch {
      // Ignore
    }
  }, []);

  // Initialize audio element on client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioPlayerRef.current = new Audio();
      audioPlayerRef.current.onplay = () => {
        if (!hasSessionEndedRef.current) setStatus('speaking');
      };
      audioPlayerRef.current.onended = () => {
        setStatus(hasSessionEndedRef.current ? 'limit_reached' : 'idle');
      };
      audioPlayerRef.current.onerror = () => {
        setStatus(hasSessionEndedRef.current ? 'limit_reached' : 'idle');
      };
    }

    return () => {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
        audioPlayerRef.current = null;
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      }
      if (processorNodeRef.current) {
        processorNodeRef.current.disconnect();
        processorNodeRef.current = null;
      }
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
        audioContextRef.current = null;
      }
    };
  }, []);

  // Scroll to bottom when messages or status change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, status]);

  // Session timer cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  // Visualizer animation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (status === 'listening' || status === 'speaking') {
      interval = setInterval(() => {
        setVisualizerBars(
          Array.from({ length: 5 }, () => Math.floor(Math.random() * 22) + 4)
        );
      }, 100);
    } else {
      setVisualizerBars([4, 6, 8, 6, 4]);
    }
    return () => clearInterval(interval);
  }, [status]);

  const playNeuralAudio = (audioDataUrl: string) => {
    if (isMuted || !audioPlayerRef.current || !audioDataUrl) {
      if (!hasSessionEndedRef.current) setStatus('idle');
      return;
    }

    try {
      audioPlayerRef.current.src = audioDataUrl;
      audioPlayerRef.current.play().catch((err) => {
        console.warn('Audio play was interrupted or blocked:', err);
        if (!hasSessionEndedRef.current) setStatus('idle');
      });
    } catch {
      if (!hasSessionEndedRef.current) setStatus('idle');
    }
  };

  const resumeOrStartTimer = (initialSec = 90) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (hasSessionEndedRef.current) return;

    const sec = savedRemainingSecRef.current > 0 ? savedRemainingSecRef.current : initialSec;
    setSecondsRemaining(sec);
    const endTime = Date.now() + sec * 1000;
    sessionEndTimeRef.current = endTime;

    timerRef.current = setInterval(() => {
      if (!sessionEndTimeRef.current) return;
      const msLeft = sessionEndTimeRef.current - Date.now();
      const secsLeft = Math.max(0, Math.ceil(msLeft / 1000));
      savedRemainingSecRef.current = secsLeft;
      setSecondsRemaining(secsLeft);

      if (secsLeft <= 0) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        sessionEndTimeRef.current = null;
        savedRemainingSecRef.current = 0;
        handleSessionLimitReached();
      }
    }, 250);
  };

  const handleOpen = async () => {
    setIsOpen(true);
    setMicError(null);

    if (!hasSessionEndedRef.current) {
      resumeOrStartTimer(savedRemainingSecRef.current || 90);
    }

    if (messages.length === 0 && !hasSessionEndedRef.current) {
      const initialGreeting: Message = {
        role: 'assistant',
        content: "Richard here. What are you wrestling with right now in your team, architecture, or career?"
      };
      setMessages([initialGreeting]);

      // Fetch session initialization and pre-rendered neural greeting audio
      try {
        const res = await fetch('/api/voice/session', { method: 'POST' });
        const sessionData = await res.json();
        if (sessionData.initialAudioDataUrl) {
          initialAudioRef.current = sessionData.initialAudioDataUrl;
          if (!isMuted) {
            playNeuralAudio(sessionData.initialAudioDataUrl);
          }
        }
      } catch {
        // Continue normally
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    stopRecording();
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    sessionEndTimeRef.current = null;
    if (!hasSessionEndedRef.current) {
      setStatus('idle');
    }
  };

  const handleRestartSession = () => {
    hasSessionEndedRef.current = false;
    savedRemainingSecRef.current = 90;
    setStatus('idle');
    setActiveCard(null);
    setMicError(null);
    setInputText('');

    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('rew_voice_session_ended');
      }
    } catch {
      // Ignore
    }

    const initialGreeting: Message = {
      role: 'assistant',
      content: "Richard here. What are you wrestling with right now in your team, architecture, or career?"
    };
    setMessages([initialGreeting]);

    resumeOrStartTimer(90);

    if (initialAudioRef.current && !isMuted) {
      playNeuralAudio(initialAudioRef.current);
    }
  };

  const handleSessionLimitReached = () => {
    if (hasSessionEndedRef.current) return;
    hasSessionEndedRef.current = true;

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    sessionEndTimeRef.current = null;
    savedRemainingSecRef.current = 0;
    setSecondsRemaining(0);

    stopRecording();
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
    }

    setStatus('limit_reached');

    const closeMsg: Message = {
      role: 'assistant',
      content: "We have reached our 90-second quick diagnostic chat limit. Rather than leaving you hanging, choose an option below to book working time with me, audit your architecture with diagnostic tools, or explore the curriculum."
    };

    setMessages((prev) => [...prev, closeMsg]);
  };

  // Start recording actual audio from user's microphone as 16kHz PCM WAV
  const startRecording = async () => {
    if (hasSessionEndedRef.current || status === 'limit_reached') return;

    setMicError(null);

    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
    }

    if (typeof window === 'undefined' || !navigator?.mediaDevices?.getUserMedia) {
      setMicError(
        'Microphone recording is not supported in this browser. You can still talk with Richard using the text chat below.'
      );
      setStatus('idle');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });
      mediaStreamRef.current = stream;

      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const audioCtx = new AudioCtx();
        audioContextRef.current = audioCtx;
        const source = audioCtx.createMediaStreamSource(stream);
        const processor = audioCtx.createScriptProcessor(4096, 1, 1);
        processorNodeRef.current = processor;
        pcmChunksRef.current = [];

        processor.onaudioprocess = (e) => {
          if (hasSessionEndedRef.current) return;
          const channelData = e.inputBuffer.getChannelData(0);
          pcmChunksRef.current.push(new Float32Array(channelData));
        };

        source.connect(processor);
        processor.connect(audioCtx.destination);
        setStatus('listening');
      } else {
        // Fallback for older browsers without AudioContext
        const mimeType = MediaRecorder.isTypeSupported('audio/webm')
          ? 'audio/webm'
          : MediaRecorder.isTypeSupported('audio/mp4')
          ? 'audio/mp4'
          : 'audio/ogg';

        const mediaRecorder = new MediaRecorder(stream, { mimeType });
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = async () => {
          if (mediaStreamRef.current) {
            mediaStreamRef.current.getTracks().forEach((track) => track.stop());
            mediaStreamRef.current = null;
          }
          const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
          if (audioBlob.size < 500) {
            setStatus(hasSessionEndedRef.current ? 'limit_reached' : 'idle');
            return;
          }
          setStatus('processing');
          const reader = new FileReader();
          reader.readAsDataURL(audioBlob);
          reader.onloadend = async () => {
            const base64Audio = (reader.result as string).split(',')[1];
            await sendAudioTurn(base64Audio, mimeType);
          };
        };

        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.start(250);
        setStatus('listening');
      }
    } catch (err: any) {
      console.warn('Microphone permission request failed:', err);
      const isDenied = err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError';
      const isNotFound = err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError';
      const isNotReadable = err.name === 'NotReadableError' || err.name === 'TrackStartError';

      if (isDenied) {
        setMicError(
          `Microphone permission was denied. If Chrome didn't show a popup, click the slider settings icon next to richardewing.io, click "Site settings", and set Microphone to Allow. Then click Try Again. (${err.name}${err.message ? ': ' + err.message : ''})`
        );
      } else if (isNotFound) {
        setMicError(`No microphone was detected on your device. Please plug in a microphone or headset, or use text chat below. (${err.name})`);
      } else if (isNotReadable) {
        setMicError(`Microphone is in use by another program (such as Zoom or Teams) or blocked by Windows privacy settings. (${err.name})`);
      } else {
        setMicError(`Microphone could not be accessed. Click the slider icon left of richardewing.io, click "Site settings", set Microphone to Allow, or use text mode below. (${err.name}${err.message ? ': ' + err.message : ''})`);
      }
      setStatus('idle');
    }
  };

  const stopRecording = () => {
    if (processorNodeRef.current && audioContextRef.current) {
      const audioCtx = audioContextRef.current;
      const processor = processorNodeRef.current;
      const stream = mediaStreamRef.current;

      processor.disconnect();
      processorNodeRef.current = null;
      audioContextRef.current = null;

      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        mediaStreamRef.current = null;
      }

      const inputRate = audioCtx.sampleRate;
      audioCtx.close().catch(() => {});

      const chunks = pcmChunksRef.current;
      pcmChunksRef.current = [];

      let totalLength = 0;
      for (const chunk of chunks) totalLength += chunk.length;

      // If user tapped without speaking (< 0.25s)
      if (totalLength < inputRate * 0.25) {
        setStatus(hasSessionEndedRef.current ? 'limit_reached' : 'idle');
        return;
      }

      setStatus('processing');

      const merged = new Float32Array(totalLength);
      let offset = 0;
      for (const chunk of chunks) {
        merged.set(chunk, offset);
        offset += chunk.length;
      }

      const downsampled = downsampleBuffer(merged, inputRate, 16000);
      const wavBlob = encodeWAV(downsampled, 16000);

      const reader = new FileReader();
      reader.readAsDataURL(wavBlob);
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(',')[1];
        await sendAudioTurn(base64Audio, 'audio/wav');
      };
      return;
    }

    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
  };

  const sendAudioTurn = async (base64Audio: string, mimeType: string) => {
    if (hasSessionEndedRef.current) return;
    try {
      const response = await fetch('/api/voice/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          audioBase64: base64Audio,
          mimeType,
          messages
        })
      });

      const data = await response.json();

      // Show user's transcribed question if returned
      const userText = data.transcription || '(Audio message)';
      const userMsg: Message = { role: 'user', content: userText };
      
      let replyText = data.reply || '';
      if (hasSessionEndedRef.current) {
        // Strip trailing question marks and open-ended queries so the user isn't left hanging
        replyText = replyText.replace(/([.!?])\s+[A-Z][^.!?]*\?\s*$/, '$1').trim();
        if (!replyText) {
          replyText = "Understood.";
        }
      }
      const assistantMsg: Message = { role: 'assistant', content: replyText };

      setMessages((prev) => [...prev, userMsg, assistantMsg]);

      if (data.card) {
        setActiveCard(data.card);
      }

      if (data.audioDataUrl && !isMuted) {
        playNeuralAudio(data.audioDataUrl);
      } else {
        setStatus(hasSessionEndedRef.current ? 'limit_reached' : 'idle');
      }
    } catch {
      const errorMsg: Message = {
        role: 'assistant',
        content: "Richard here. I had trouble connecting. Feel free to book a direct session or explore the curriculum below."
      };
      setMessages((prev) => [...prev, errorMsg]);
      setStatus(hasSessionEndedRef.current ? 'limit_reached' : 'idle');
    }
  };

  const handleSendTextMessage = async (text: string) => {
    if (!text.trim() || hasSessionEndedRef.current) return;

    const userMessage: Message = { role: 'user', content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputText('');
    setStatus('processing');

    try {
      const response = await fetch('/api/voice/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      const data = await response.json();

      if (data.card) {
        setActiveCard(data.card);
      }

      let replyText = data.reply || '';
      if (hasSessionEndedRef.current) {
        replyText = replyText.replace(/([.!?])\s+[A-Z][^.!?]*\?\s*$/, '$1').trim();
        if (!replyText) {
          replyText = "Understood.";
        }
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: replyText
      };

      setMessages((prev) => [...prev, assistantMessage]);

      if (data.audioDataUrl && !isMuted) {
        playNeuralAudio(data.audioDataUrl);
      } else {
        setStatus(hasSessionEndedRef.current ? 'limit_reached' : 'idle');
      }
    } catch {
      const errorMsg: Message = {
        role: 'assistant',
        content: "Richard here. I had trouble connecting. Feel free to book a direct session or explore the curriculum below."
      };
      setMessages((prev) => [...prev, errorMsg]);
      setStatus(hasSessionEndedRef.current ? 'limit_reached' : 'idle');
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Minimized Floating Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="group relative flex items-center gap-3 px-5 py-3.5 bg-zinc-950 border border-cyan-500/40 hover:border-cyan-400 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20"
          aria-label="Open Voice Companion"
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-30 animate-ping" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-600 to-emerald-500 flex items-center justify-center shadow-inner">
              <Mic className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold tracking-wide text-zinc-100">Talk with Richard</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <p className="text-[11px] text-zinc-400 font-mono">Real-Time Voice Companion</p>
          </div>
        </button>
      )}

      {/* Expanded Voice Panel */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[410px] max-h-[85vh] flex flex-col bg-zinc-950/95 border border-zinc-800 text-white rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800/80 bg-zinc-900/50">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-600 to-emerald-500 flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-zinc-100">
                    Richard Ewing
                  </h3>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                    Audio Partner
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  {secondsRemaining > 0 && status !== 'limit_reached' ? (
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-mono font-medium transition-colors ${
                          secondsRemaining <= 15
                            ? 'text-rose-400 animate-pulse font-bold'
                            : secondsRemaining <= 30
                            ? 'text-amber-400 font-semibold'
                            : 'text-cyan-400'
                        }`}
                      >
                        <Clock className="w-3 h-3 inline-block shrink-0" />
                        <span>{formatTimerDisplay(secondsRemaining)} remaining</span>
                      </span>
                      <span className="text-[10px] text-zinc-500 font-mono">
                        (90s budget)
                      </span>
                    </div>
                  ) : (
                    <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-500" />
                      Session ended
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  if (!isMuted && audioPlayerRef.current) {
                    audioPlayerRef.current.pause();
                  }
                  setIsMuted(!isMuted);
                }}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
              </button>
              <button
                onClick={() => setMode(mode === 'voice' ? 'text' : 'voice')}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                aria-label="Toggle text mode"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
              <button
                onClick={handleClose}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Real-time 90s Countdown Bar */}
          <div className="w-full h-1 bg-zinc-900 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ease-linear ${
                secondsRemaining <= 15
                  ? 'bg-rose-500'
                  : secondsRemaining <= 30
                  ? 'bg-amber-500'
                  : 'bg-gradient-to-r from-cyan-500 to-emerald-400'
              }`}
              style={{
                width: `${
                  status === 'limit_reached'
                    ? 0
                    : Math.max(0, Math.min(100, (secondsRemaining / 90) * 100))
                }%`
              }}
            />
          </div>

          {/* Transcript Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto max-h-[360px] space-y-3.5 scrollbar-thin scrollbar-thumb-zinc-800">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  msg.role === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-cyan-600 text-white rounded-br-none'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {messages.length <= 1 && status !== 'processing' && (
              <div className="pt-2">
                <p className="text-[11px] text-zinc-400 font-mono mb-2">Or ask directly about:</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: "Book 30m Working Session", prompt: "How do I book a 1:1 strategy session with Richard directly?" },
                    { label: "30m Gut-Check Call ($450)", prompt: "I need a fast 30-minute gut check on our architecture and token burn." },
                    { label: "Diagnostic Tools Library ($199)", prompt: "What diagnostic calculators and tools can I access to measure tech debt?" },
                    { label: "Curriculum Tracks ($149)", prompt: "What curriculum tracks do you have for AI economics and engineering leadership?" },
                    { label: "All-Access Vault Pass ($999)", prompt: "Tell me about the All-Access Vault Pass for lifetime access to everything." }
                  ].map((btn, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendTextMessage(btn.prompt)}
                      className="text-left text-[11px] px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-cyan-500/50 hover:bg-zinc-800 transition-colors"
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {status === 'processing' && (
              <div className="flex items-center gap-2 text-zinc-400 text-xs py-1">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                <span>Thinking through this...</span>
              </div>
            )}

            {status === 'limit_reached' && (
              <div className="pt-2 pb-1 space-y-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    Recommended Next Steps
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono">Direct Actions</span>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {/* 1. Book Working Session */}
                  <a
                    href="/contact"
                    className="group flex items-start gap-3 p-2.5 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-cyan-500/60 hover:bg-zinc-800 transition-all text-left shadow-sm"
                  >
                    <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/60 group-hover:scale-105 transition-transform shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h5 className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                          1:1 Advisory Strategy Session
                        </h5>
                        <span className="text-[10px] font-mono text-cyan-400 shrink-0">richardewing.io</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">
                        Direct 30-min working review on your architecture or team burn.
                      </p>
                    </div>
                  </a>

                  {/* 2. Diagnostic Tools */}
                  <a
                    href="/tools"
                    className="group flex items-start gap-3 p-2.5 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-emerald-500/60 hover:bg-zinc-850 transition-all text-left shadow-sm"
                  >
                    <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/60 group-hover:scale-105 transition-transform shrink-0">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h5 className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors truncate">
                          Executive Diagnostic Tools
                        </h5>
                        <span className="text-[10px] font-mono text-emerald-400 shrink-0">Free / Pro</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">
                        Audit Product Debt Index (PDI), Copilot ROI, and AI Unit Economics.
                      </p>
                    </div>
                  </a>

                  {/* 3. Curriculum Tracks */}
                  <a
                    href="/curriculum"
                    className="group flex items-start gap-3 p-2.5 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-indigo-500/60 hover:bg-zinc-850 transition-all text-left shadow-sm"
                  >
                    <div className="p-2 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-800/60 group-hover:scale-105 transition-transform shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h5 className="text-xs font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                          Academy Curriculum Tracks
                        </h5>
                        <span className="text-[10px] font-mono text-indigo-400 shrink-0">From $149</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">
                        AI economics, R&D capital triage, and engineering leadership.
                      </p>
                    </div>
                  </a>

                  {/* 4. Digital Products & Vault */}
                  <a
                    href="/pricing"
                    className="group flex items-start gap-3 p-2.5 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-amber-500/60 hover:bg-zinc-850 transition-all text-left shadow-sm"
                  >
                    <div className="p-2 rounded-lg bg-amber-950 text-amber-400 border border-amber-800/60 group-hover:scale-105 transition-transform shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h5 className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors truncate">
                          Playbooks & All-Access Vault
                        </h5>
                        <span className="text-[10px] font-mono text-amber-400 shrink-0">Lifetime</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">
                        13 engineering economics playbooks and complete vault access.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Active Paid Conversion Card */}
          {activeCard && (
            <div className="mx-4 mb-3 p-3.5 rounded-2xl bg-zinc-900/90 border border-cyan-500/30 shadow-lg relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                      {activeCard.badge || 'Recommended Resource'}
                    </span>
                    {activeCard.price && (
                      <span className="text-xs font-semibold text-zinc-300 font-mono">
                        {activeCard.price}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-white">{activeCard.title}</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2 leading-normal">
                    {activeCard.description}
                  </p>
                </div>
                <button
                  onClick={() => setActiveCard(null)}
                  className="text-zinc-500 hover:text-zinc-300 p-0.5"
                  aria-label="Dismiss card"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="mt-2.5 pt-2 border-t border-zinc-800/80 flex items-center justify-between">
                <a
                  href={activeCard.link}
                  target={activeCard.link.startsWith('/') ? undefined : '_blank'}
                  rel={activeCard.link.startsWith('/') ? undefined : 'noopener noreferrer'}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 text-white text-xs font-medium transition-all shadow-md"
                >
                  <span>{activeCard.ctaText}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[10px] text-zinc-500 font-mono">Direct link</span>
              </div>
            </div>
          )}

          {/* Microphone Error Banner */}
          {micError && (
            <div className="mx-4 mb-2 p-3 rounded-2xl bg-rose-950/90 border border-rose-800/80 text-rose-100 text-xs flex flex-col gap-2.5 shadow-lg animate-in fade-in duration-200">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div className="flex-1 space-y-1">
                  <p className="font-semibold text-rose-200">Microphone Blocked</p>
                  <p className="text-[11px] text-rose-300 leading-relaxed">{micError}</p>
                </div>
                <button
                  onClick={() => setMicError(null)}
                  className="text-rose-400 hover:text-white p-0.5"
                  aria-label="Dismiss error"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-rose-900/60">
                <button
                  onClick={() => {
                    setMicError(null);
                    startRecording();
                  }}
                  className="px-2.5 py-1 rounded-lg bg-rose-700 hover:bg-rose-600 text-white text-[11px] font-medium transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={() => {
                    setMode('text');
                    setMicError(null);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white text-[11px] transition-colors"
                >
                  Switch to Text Mode
                </button>
              </div>
            </div>
          )}

          {/* Controls Footer */}
          <div className="p-4 border-t border-zinc-800/80 bg-zinc-900/30">
            {status === 'limit_reached' ? (
              <div className="flex flex-col gap-2.5 animate-in fade-in duration-200">
                <a
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 text-white text-xs font-semibold shadow-lg shadow-cyan-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book 1:1 Working Session</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <button
                  onClick={handleRestartSession}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/70 text-zinc-300 hover:text-white text-xs font-medium transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Start New 90s Session</span>
                </button>

                <p className="text-[11px] text-zinc-400 font-mono text-center">
                  90s diagnostic limit reached. Explore direct resources below:
                </p>
                <div className="flex items-center justify-center gap-3 text-[11px] text-zinc-400 font-mono pt-0.5">
                  <a
                    href="/contact"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    Book Call
                  </a>
                  <span className="text-zinc-600">•</span>
                  <a href="/tools" className="hover:text-cyan-300 transition-colors">
                    Tools
                  </a>
                  <span className="text-zinc-600">•</span>
                  <a href="/curriculum" className="hover:text-cyan-300 transition-colors">
                    Curriculum
                  </a>
                  <span className="text-zinc-600">•</span>
                  <a href="/pricing" className="hover:text-cyan-300 transition-colors">
                    Vault
                  </a>
                </div>
              </div>
            ) : mode === 'voice' ? (
              <div className="flex flex-col items-center gap-3">
                {/* Visualizer and Mic button */}
                <div className="flex items-center justify-center gap-4 w-full">
                  {/* Waveform Left */}
                  <div className="flex items-center gap-1 h-6">
                    {visualizerBars.map((height, idx) => (
                      <div
                        key={idx}
                        className="w-1 bg-cyan-400/70 rounded-full transition-all duration-100"
                        style={{ height: `${height}px` }}
                      />
                    ))}
                  </div>

                  {/* Main Record/Talk Button */}
                  <button
                    onClick={status === 'listening' ? stopRecording : startRecording}
                    className={`relative p-4 rounded-full transition-all duration-300 shadow-xl ${
                      status === 'listening'
                        ? 'bg-rose-600 hover:bg-rose-500 ring-4 ring-rose-500/30 scale-110'
                        : 'bg-cyan-600 hover:bg-cyan-500 text-white hover:scale-105 shadow-cyan-600/30'
                    }`}
                    aria-label={status === 'listening' ? 'Finish Speaking' : 'Start Talking'}
                  >
                    {status === 'listening' ? (
                      <MicOff className="w-6 h-6 text-white animate-pulse" />
                    ) : (
                      <Mic className="w-6 h-6 text-white" />
                    )}
                  </button>

                  {/* Waveform Right */}
                  <div className="flex items-center gap-1 h-6">
                    {visualizerBars.slice().reverse().map((height, idx) => (
                      <div
                        key={idx}
                        className="w-1 bg-cyan-400/70 rounded-full transition-all duration-100"
                        style={{ height: `${height}px` }}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-[11px] text-zinc-400 font-mono text-center">
                  {status === 'listening'
                    ? 'Listening... Speak now (Tap mic when done)'
                    : status === 'speaking'
                    ? 'Richard is speaking...'
                    : status === 'processing'
                    ? 'Thinking through this...'
                    : secondsRemaining <= 25
                    ? `${secondsRemaining}s left - Tap microphone to talk`
                    : 'Tap microphone to talk'}
                </p>

                <button
                  onClick={() => setMode('text')}
                  className="text-[11px] text-zinc-500 hover:text-zinc-300 underline transition-colors"
                >
                  Prefer to type? Switch to text chat
                </button>
              </div>
            ) : (
              /* Text Input Mode */
              <div className="flex flex-col gap-2">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendTextMessage(inputText);
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask about career, AI burn, or team velocity..."
                    disabled={status === 'processing'}
                    className="flex-1 bg-zinc-900 border border-zinc-700/80 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim() || status === 'processing'}
                    className="p-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white transition-colors"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                <button
                  onClick={() => setMode('voice')}
                  className="text-[11px] text-zinc-500 hover:text-zinc-300 underline transition-colors text-center"
                >
                  Switch back to voice mode
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
