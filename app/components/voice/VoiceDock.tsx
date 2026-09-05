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
  AlertCircle
} from 'lucide-react';
import { RecommendedCard } from '@/app/lib/voice-knowledge';

interface Message {
  role: 'user' | 'assistant';
  content: string;
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
  const [interimText, setInterimText] = useState<string>('');

  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const hasSessionEndedRef = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Initialize Speech Synthesis and pre-cache natural human voices
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    synthRef.current = window.speechSynthesis;

    const loadVoices = () => {
      const list = window.speechSynthesis.getVoices();
      if (list && list.length > 0) {
        voicesRef.current = list;
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  // Scroll to bottom when messages or status change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, status, interimText]);

  // Session timer: 90-second cap (guaranteed zero infinite re-trigger loop)
  useEffect(() => {
    if (!isOpen) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    if (hasSessionEndedRef.current) return;

    timerRef.current = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleSessionLimitReached();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen]);

  // Visualizer animation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (status === 'listening' || status === 'speaking') {
      interval = setInterval(() => {
        setVisualizerBars(
          Array.from({ length: 5 }, () => Math.floor(Math.random() * 20) + 4)
        );
      }, 120);
    } else {
      setVisualizerBars([4, 6, 8, 6, 4]);
    }
    return () => clearInterval(interval);
  }, [status]);

  const selectBestHumanVoice = (voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null => {
    if (!voices || voices.length === 0) return null;

    // 1. Natural online male voices (sounds remarkably close to a real human operator)
    const naturalMale = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (v.name.includes('Christopher Online (Natural)') ||
          v.name.includes('Guy Online (Natural)') ||
          v.name.includes('Eric Online (Natural)') ||
          v.name.includes('Ryan Online (Natural)'))
    );
    if (naturalMale) return naturalMale;

    // 2. Any English Natural voice (Microsoft/Google Neural)
    const naturalGeneral = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        v.name.includes('Natural') &&
        !v.name.includes('Jenny') &&
        !v.name.includes('Aria')
    );
    if (naturalGeneral) return naturalGeneral;

    // 3. Google US English (Chrome native high quality)
    const googleVoice = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (v.name.includes('Google US English') || v.name.includes('Google UK English Male'))
    );
    if (googleVoice) return googleVoice;

    // 4. Apple Alex or Daniel
    const appleVoice = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (v.name.includes('Alex') || v.name.includes('Daniel'))
    );
    if (appleVoice) return appleVoice;

    // 5. Fallback to any English voice
    return voices.find((v) => v.lang.startsWith('en')) || voices[0] || null;
  };

  const speakResponse = (text: string) => {
    if (isMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (!hasSessionEndedRef.current) setStatus('idle');
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 0.96; // Grounded, authentic operator pitch

      const availableVoices =
        voicesRef.current.length > 0
          ? voicesRef.current
          : window.speechSynthesis.getVoices();

      const chosenVoice = selectBestHumanVoice(availableVoices);
      if (chosenVoice) {
        utterance.voice = chosenVoice;
      }

      utterance.onstart = () => {
        if (!hasSessionEndedRef.current) {
          setStatus('speaking');
        }
      };

      utterance.onend = () => {
        if (!hasSessionEndedRef.current) {
          setStatus('idle');
        }
      };

      utterance.onerror = () => {
        if (!hasSessionEndedRef.current) {
          setStatus('idle');
        }
      };

      window.speechSynthesis.speak(utterance);
    } catch {
      if (!hasSessionEndedRef.current) setStatus('idle');
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setMicError(null);
    if (messages.length === 0) {
      const initialGreeting: Message = {
        role: 'assistant',
        content: "Richard here. What are you wrestling with right now in your team, architecture, or career?"
      };
      setMessages([initialGreeting]);
      setTimeout(() => {
        if (!isMuted) {
          speakResponse(initialGreeting.content);
        }
      }, 300);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    stopListening();
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    if (!hasSessionEndedRef.current) {
      setStatus('idle');
    }
  };

  const handleSessionLimitReached = () => {
    if (hasSessionEndedRef.current) return;
    hasSessionEndedRef.current = true;

    if (timerRef.current) clearInterval(timerRef.current);
    stopListening();
    setStatus('limit_reached');

    const closeMsg: Message = {
      role: 'assistant',
      content: "We have reached our 90-second quick chat limit. If you want to dig deeper into your numbers, grab time on my calendar or explore the curriculum below."
    };

    setMessages((prev) => [...prev, closeMsg]);
    if (!isMuted) {
      speakResponse(closeMsg.content);
    }
  };

  const startListening = async () => {
    if (hasSessionEndedRef.current || status === 'limit_reached') return;
    if (typeof window === 'undefined') return;

    setMicError(null);
    setInterimText('');

    // Step 1: Explicitly request browser microphone permission to trigger Chrome's Allow prompt
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
    } catch (err: any) {
      console.warn('Microphone permission request failed:', err);
      setMicError(
        'Microphone access was blocked. Please click the lock or camera icon in your address bar to allow microphone, or use text mode below.'
      );
      setStatus('idle');
      return;
    }

    // Step 2: Initialize Speech Recognition
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setMicError('Speech recognition is not supported in this browser. Please use text mode.');
      setMode('text');
      setStatus('idle');
      return;
    }

    try {
      if (synthRef.current) {
        synthRef.current.cancel();
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setStatus('listening');
      };

      recognition.onresult = (event: any) => {
        let interim = '';
        let final = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final += event.results[i][0].transcript;
          } else {
            interim += event.results[i][0].transcript;
          }
        }

        if (interim) {
          setInterimText(interim);
        }

        if (final.trim()) {
          setInterimText('');
          stopListening();
          handleSendMessage(final.trim());
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('SpeechRecognition error:', event.error);
        if (event.error === 'not-allowed') {
          setMicError('Microphone access was blocked. Please allow microphone permissions in your browser settings.');
        }
        setStatus('idle');
      };

      recognition.onend = () => {
        if (status === 'listening') {
          setStatus('idle');
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error('Speech recognition failed to start:', err);
      setStatus('idle');
      setMode('text');
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // Ignore already stopped
      }
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    if (status === 'listening') {
      setStatus('idle');
    }
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || hasSessionEndedRef.current) return;

    const userMessage: Message = { role: 'user', content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputText('');
    setInterimText('');
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

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.reply
      };

      setMessages((prev) => [...prev, assistantMessage]);

      if (mode === 'voice' && !isMuted) {
        speakResponse(data.reply);
      } else {
        setStatus('idle');
      }
    } catch {
      const errorMsg: Message = {
        role: 'assistant',
        content: "Richard here. I had trouble connecting. Feel free to book a direct 30-minute session or explore the curriculum."
      };
      setMessages((prev) => [...prev, errorMsg]);
      setStatus('idle');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Minimized Floating Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="group relative flex items-center gap-3 px-5 py-3.5 bg-zinc-950 border border-cyan-500/40 hover:border-cyan-400 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20"
          aria-label="Open Voice Companion"
        >
          {/* Subtle pulse orb */}
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
          <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800/80 bg-zinc-900/50">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-600 to-emerald-500 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-1.5">
                  Richard Ewing
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                    AI Companion
                  </span>
                </h3>
                <p className="text-[11px] text-zinc-400 font-mono">
                  {secondsRemaining > 0 ? `${secondsRemaining}s session budget` : 'Session ended'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMuted(!isMuted)}
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

            {/* Interim live speech feedback */}
            {interimText && (
              <div className="flex flex-col items-end">
                <div className="max-w-[85%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed bg-cyan-900/40 border border-cyan-500/40 text-cyan-200 rounded-br-none animate-pulse">
                  {interimText}...
                </div>
              </div>
            )}

            {status === 'processing' && (
              <div className="flex items-center gap-2 text-zinc-400 text-xs py-1">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                <span>Thinking...</span>
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
                  target="_blank"
                  rel="noopener noreferrer"
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
            <div className="mx-4 mb-2 p-2.5 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-200 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="leading-snug">{micError}</p>
                <button
                  onClick={() => {
                    setMode('text');
                    setMicError(null);
                  }}
                  className="mt-1.5 font-semibold underline text-rose-300 hover:text-white"
                >
                  Switch to Text Mode
                </button>
              </div>
              <button
                onClick={() => setMicError(null)}
                className="text-rose-400 hover:text-white p-0.5"
                aria-label="Dismiss error"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Controls Footer */}
          <div className="p-4 border-t border-zinc-800/80 bg-zinc-900/30">
            {mode === 'voice' ? (
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
                    onClick={status === 'listening' ? stopListening : startListening}
                    disabled={status === 'limit_reached'}
                    className={`relative p-4 rounded-full transition-all duration-300 shadow-xl ${
                      status === 'listening'
                        ? 'bg-rose-600 hover:bg-rose-500 ring-4 ring-rose-500/20 scale-110'
                        : status === 'limit_reached'
                        ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                        : 'bg-cyan-600 hover:bg-cyan-500 text-white hover:scale-105 shadow-cyan-600/30'
                    }`}
                    aria-label={status === 'listening' ? 'Stop Listening' : 'Start Talking'}
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
                    ? 'Listening... Speak clearly (Tap to finish)'
                    : status === 'speaking'
                    ? 'Richard is speaking...'
                    : status === 'processing'
                    ? 'Synthesizing diagnosis...'
                    : status === 'limit_reached'
                    ? 'Limit reached - book a session above'
                    : 'Tap microphone to talk'}
                </p>

                {/* Quick button to toggle text mode */}
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
                    handleSendMessage(inputText);
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={
                      status === 'limit_reached'
                        ? 'Session ended'
                        : 'Ask about career, AI burn, or team velocity...'
                    }
                    disabled={status === 'limit_reached' || status === 'processing'}
                    className="flex-1 bg-zinc-900 border border-zinc-700/80 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim() || status === 'processing' || status === 'limit_reached'}
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
