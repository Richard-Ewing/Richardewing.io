import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PAID_RESOURCES, REWS_VOICE_SYSTEM_PROMPT } from '@/app/lib/voice-knowledge';

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
  header.writeUInt16LE(1, 20); // PCM format
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write('data', 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, pcmBuffer]);
}

// Generate authentic Gemini neural voice audio (voice: Puck)
async function generateNeuralAudio(text: string, apiKey: string): Promise<string | null> {
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;
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

    if (!response.ok) {
      console.warn('Gemini TTS request failed with status:', response.status);
      return null;
    }

    const data = await response.json();
    const rawPcmBase64 = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!rawPcmBase64) return null;

    const pcmBuffer = Buffer.from(rawPcmBase64, 'base64');
    const wavBuffer = addWavHeader(pcmBuffer);
    return `data:audio/wav;base64,${wavBuffer.toString('base64')}`;
  } catch (err: any) {
    console.error('Error generating neural audio:', err?.message || err);
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages = [], audioBase64, mimeType = 'audio/webm' } = body;

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    // Fallback if API key is not configured
    if (!apiKey) {
      return NextResponse.json({
        reply: "Richard here. Most teams wrestling with this are stuck between shipping fast and protecting gross margins. What is the immediate roadblock you are hitting?",
        card: PAID_RESOURCES.cal_advisory_booking,
        audioDataUrl: null
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      generationConfig: {
        responseMimeType: 'application/json'
      }
    });

    const conversationHistory = messages
      .map((m: any) => `${m.role === 'user' ? 'Visitor' : 'Richard'}: ${m.content}`)
      .join('\n');

    const promptInstructions = `
${REWS_VOICE_SYSTEM_PROMPT}

You have these paid resource cards available to recommend when relevant:
- single_track: Single Curriculum Track ($149) for career progression, IC vs Management, or foundational AI economics.
- tools_library_unlock: Diagnostic Tools Library ($199) for team velocity, PDI audit, AI burn, or PR review bottlenecks.
- module_bundle_3: 3-Track Curriculum Bundle ($349) for broader technical and economic upskilling.
- all_access_pass: All-Access Vault Pass ($999) for full organization-wide curriculum and all tools.
- cal_advisory_booking: 1:1 Advisory Strategy Session on Cal.com for bespoke, messy problems, hiring, or direct working calls.

Conversation history:
${conversationHistory}

Respond ONLY with a valid JSON object matching this exact schema:
{
  "transcription": "If user provided audio, your verbatim transcript of what they said. Otherwise null.",
  "reply": "Your punchy, spoken response as Richard (2 to 3 sentences max, no em-dashes, no buzzwords, helpful first)",
  "recommendedCardId": "single_track" | "tools_library_unlock" | "module_bundle_3" | "all_access_pass" | "cal_advisory_booking" | null
}
`;

    let contentParts: any[] = [];
    if (audioBase64) {
      contentParts.push({
        inlineData: {
          mimeType: mimeType || 'audio/webm',
          data: audioBase64
        }
      });
      contentParts.push({
        text: `Listen to this user audio recording. Transcribe it into "transcription", then diagnose and reply as Richard.\n\n${promptInstructions}`
      });
    } else {
      contentParts.push({
        text: promptInstructions
      });
    }

    const result = await model.generateContent(contentParts);
    const text = result.response.text();

    let parsed: { transcription?: string; reply: string; recommendedCardId?: string | null };
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = {
        reply: text.replace(/[\{\}\"]/g, '').trim(),
        recommendedCardId: null
      };
    }

    const card = parsed.recommendedCardId && PAID_RESOURCES[parsed.recommendedCardId]
      ? PAID_RESOURCES[parsed.recommendedCardId]
      : null;

    // Clean any accidental em-dashes
    const cleanReply = (parsed.reply || "Richard here. What are you looking to solve?")
      .replace(/\u2014/g, ' - ')
      .replace(/\u2013/g, ' - ');

    // Generate real neural AI audio
    const audioDataUrl = await generateNeuralAudio(cleanReply, apiKey);

    return NextResponse.json({
      reply: cleanReply,
      transcription: parsed.transcription || null,
      card,
      audioDataUrl
    });
  } catch (error: any) {
    console.error('Error in voice chat API:', error);
    return NextResponse.json(
      {
        reply: "Richard here. I had a brief connection hitch. If you want to review your numbers directly, grab time on my calendar.",
        card: PAID_RESOURCES.cal_advisory_booking,
        audioDataUrl: null
      },
      { status: 200 }
    );
  }
}
