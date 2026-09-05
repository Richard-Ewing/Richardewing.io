import { NextRequest, NextResponse } from 'next/server';
import { PAID_RESOURCES, CORE_TOPICS, REWS_VOICE_SYSTEM_PROMPT } from '@/app/lib/voice-knowledge';

// In-memory sliding window IP rate limiter for anonymous voice sessions
// Max 3 sessions per 24 hours per IP
const ipSessionTracker = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipSessionTracker.get(ip);

  if (!record || now > record.expiresAt) {
    ipSessionTracker.set(ip, { count: 1, expiresAt: now + 24 * 60 * 60 * 1000 });
    return false;
  }

  if (record.count >= 5) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error: 'Daily voice session limit reached (5 sessions per day). Please try again tomorrow or book a 1:1 session.',
          rateLimited: true,
          bookingUrl: 'https://cal.com/richard-ewing-2cevwb'
        },
        { status: 429 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '';
    const hasKey = Boolean(apiKey);

    return NextResponse.json({
      success: true,
      sessionId: `voice_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      hasKey,
      maxDurationSeconds: 90,
      initialGreeting: "Richard here. What are you wrestling with right now in your team, architecture, or career?",
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
