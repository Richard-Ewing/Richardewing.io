import { NextRequest, NextResponse } from 'next/server';
import { PAID_RESOURCES, CORE_TOPICS, REWS_VOICE_SYSTEM_PROMPT } from '@/app/lib/voice-knowledge';

export const dynamic = 'force-dynamic';

// In-memory sliding window IP rate limiter for anonymous voice sessions
const ipSessionTracker = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipSessionTracker.get(ip);

  if (!record || now > record.expiresAt) {
    if (ipSessionTracker.size >= 2000) {
      const oldestKey = ipSessionTracker.keys().next().value;
      if (oldestKey) ipSessionTracker.delete(oldestKey);
    }
    ipSessionTracker.set(ip, { count: 1, expiresAt: now + 24 * 60 * 60 * 1000 });
    return false;
  }

  if (record.count >= 10) {
    return true;
  }

  record.count += 1;
  return false;
}

// Prepend standard 44-byte WAV header to 24kHz 16-bit mono PCM
function addWavHeader(pcmBuffer: Buffer, sampleRate = 24000, numChannels = 1, bitsPerSample = 16): Buffer {
  const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
  const blockAlign = numChannels * (bitsPerSample / 8);
  const dataSize = pcmBuffer.length;
  const header = Buffer.alloc(44);

  header.write('RIFF', 0);
  header.writeUInt32LE(36 + dataSize, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, pcmBuffer]);
}

// Cached default greeting audio so anonymous sessions only synthesize once per isolate
let cachedGreetingAudio: string | null = null;

async function getInitialGreetingAudio(apiKey: string, text: string, useDefaultCache: boolean): Promise<string | null> {
  if (useDefaultCache && cachedGreetingAudio) {
    return cachedGreetingAudio;
  }

  const models = ['gemini-3.8-flash'];
  for (const ttsModel of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${ttsModel}:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text }] }],
          generationConfig: {
            responseModalities: ["AUDIO"],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: {
                  voiceName: "Puck"
                }
              }
            }
          }
        })
      });

      if (!response.ok) continue;

      const data = await response.json();
      const rawPcmBase64 = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!rawPcmBase64) continue;

      const pcmBuffer = Buffer.from(rawPcmBase64, 'base64');
      const wavBuffer = addWavHeader(pcmBuffer);
      const audioUrl = `data:audio/wav;base64,${wavBuffer.toString('base64')}`;
      if (useDefaultCache) {
        cachedGreetingAudio = audioUrl;
      }
      return audioUrl;
    } catch {
      // try next model
    }
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const cfIp = req.headers.get('cf-connecting-ip')?.trim();
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = cfIp || (forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1');

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error: 'Daily voice session limit reached. Please try again tomorrow or book a 1:1 session.',
          rateLimited: true,
          bookingUrl: '/contact'
        },
        { status: 429 }
      );
    }

    let userName = '';
    try {
      const rawText = await req.text();
      if (rawText && rawText.length <= 2048) {
        const body = JSON.parse(rawText);
        userName = typeof body?.userName === 'string'
          ? body.userName.replace(/[\r\n<>]/g, '').trim().slice(0, 60)
          : '';
      }
    } catch {
      // Body is optional
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '';
    const hasKey = Boolean(apiKey);

    const firstName = userName ? userName.split(' ')[0].slice(0, 30) : '';
    const initialGreeting = firstName
      ? `Good to meet you, ${firstName}. Richard here. What are you wrestling with right now in your team, architecture, or career?`
      : "Richard here. What are you wrestling with right now in your team, architecture, or career?";

    let initialAudioDataUrl: string | null = null;
    if (hasKey) {
      initialAudioDataUrl = await getInitialGreetingAudio(apiKey, initialGreeting, !firstName);
    }

    const randomBytes = new Uint8Array(6);
    globalThis.crypto.getRandomValues(randomBytes);
    const sessionHex = Array.from(randomBytes, (b) => b.toString(16).padStart(2, '0')).join('');

    return NextResponse.json({
      success: true,
      sessionId: `voice_${Date.now()}_${sessionHex}`,
      hasKey,
      maxDurationSeconds: 90,
      initialGreeting,
      initialAudioDataUrl,
      systemPrompt: REWS_VOICE_SYSTEM_PROMPT,
      resources: PAID_RESOURCES,
      topics: CORE_TOPICS
    });
  } catch (error: any) {
    console.error('Error starting voice session:', error);
    return NextResponse.json(
      { error: 'Failed to initialize voice session' },
      { status: 500 }
    );
  }
}
