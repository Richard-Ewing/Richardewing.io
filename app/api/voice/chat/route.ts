import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PAID_RESOURCES, REWS_VOICE_SYSTEM_PROMPT } from '@/app/lib/voice-knowledge';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

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
  const models = ['gemini-3.1-flash-tts-preview', 'gemini-2.5-flash-preview-tts'];
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

      if (!response.ok) {
        continue;
      }

      const data = await response.json();
      const rawPcmBase64 = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!rawPcmBase64) continue;

      const pcmBuffer = Buffer.from(rawPcmBase64, 'base64');
      const wavBuffer = addWavHeader(pcmBuffer);
      return `data:audio/wav;base64,${wavBuffer.toString('base64')}`;
    } catch {
      // Try next model fallback
    }
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages = [], audioBase64, mimeType = 'audio/wav', userName } = body;

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

    const conversationHistory = messages
      .map((m: any) => `${m.role === 'user' ? 'Visitor' : 'Richard'}: ${m.content}`)
      .join('\n');

    const availableCardsList = Object.entries(PAID_RESOURCES)
      .map(([id, item]) => `- ${id}: ${item.title} (${item.price || 'Direct Booking'}) - ${item.description}`)
      .join('\n');

    const visitorPersonalization = userName && typeof userName === 'string' && userName.trim()
      ? `You are speaking directly with ${userName.trim()}. Address them by their first name (${userName.trim().split(' ')[0]}) naturally when it fits, but never overuse it or sound like an artificial salesperson.`
      : 'You are speaking directly with an executive visitor.';

    const promptInstructions = `
${REWS_VOICE_SYSTEM_PROMPT}

${visitorPersonalization}

You have these paid resource cards available to recommend when relevant:
${availableCardsList}

Conversation history:
${conversationHistory}

Execution Guidelines:
- Go with the flow of the conversation. Listen to the visitor, validate their specific context, and never pivot abruptly.
- Be genuinely helpful first. Give them actionable, high-density insight right away.
- Make the sale naturally: recommend a relevant card and mention it in speech ONLY when it flows naturally as the next step, or when the user asks how to work together, book time, or access tools/curriculums. If the turn is purely exploratory, set recommendedCardId to null.

Respond ONLY with a valid JSON object matching this exact schema:
{
  "transcription": "If user provided audio, your verbatim transcript of what they said. Otherwise null.",
  "reply": "Your punchy, spoken response as Richard (2 to 3 sentences max, no em-dashes, no buzzwords, helpful first, earned conversion)",
  "recommendedCardId": "cal_advisory_booking" | "gut_check" | "strategy_session" | "insolvency_diagnostic" | "full_audit" | "tools_library_unlock" | "single_track" | "module_ai_economics" | "module_rd_capital" | "module_bundle_3" | "all_access_pass" | "premium_bundle_ultimate" | "pe_intelligence_tier" | "team_license_pass" | null
}
`;

    const candidateModels = ['gemini-3.7-flash', 'gemini-3.6-flash', 'gemini-2.5-flash'];
    let text = '';
    let usedAudio = Boolean(audioBase64);

    if (audioBase64) {
      const audioParts: any[] = [
        {
          inlineData: {
            mimeType: mimeType || 'audio/wav',
            data: audioBase64
          }
        },
        {
          text: `Listen to this user audio recording. Transcribe it into "transcription", then diagnose and reply as Richard.\n\n${promptInstructions}`
        }
      ];

      for (const modelName of candidateModels) {
        try {
          const model = genAI.getGenerativeModel({
            model: modelName,
            generationConfig: { responseMimeType: 'application/json' }
          });
          const result = await model.generateContent(audioParts);
          const candidate = result.response.candidates?.[0];
          const candidateText = candidate?.content?.parts?.find((p: any) => p.text)?.text || '';
          if (candidateText) {
            text = candidateText;
            break;
          }
        } catch (err: any) {
          console.warn(`Audio turn failed on ${modelName}:`, err.message || err);
        }
      }

      // If audio transcription failed across models (e.g. muffled, truncated, or invalid mic buffer),
      // gracefully recover by asking the user to repeat or type without throwing an error
      if (!text) {
        usedAudio = false;
        try {
          const fallbackModel = genAI.getGenerativeModel({
            model: 'gemini-3.7-flash',
            generationConfig: { responseMimeType: 'application/json' }
          });
          const recoveryPrompt = `The visitor attempted an audio input, but the audio was silent, muffled, or inaudible.
Acknowledge as Richard Ewing that you couldn't hear their microphone clearly, ask them to say it again or type it below, and tie back to where the conversation was.
Keep it conversational, punchy, human, and no em-dashes.\n\n${promptInstructions}`;
          const res = await fallbackModel.generateContent([{ text: recoveryPrompt }]);
          text = res.response.text();
        } catch {
          text = JSON.stringify({
            transcription: null,
            reply: "I couldn't quite hear your microphone on that turn. What was that? Feel free to speak again or type your question in the chat below.",
            recommendedCardId: null
          });
        }
      }
    } else {
      // Text-based turn
      for (const modelName of candidateModels) {
        try {
          const model = genAI.getGenerativeModel({
            model: modelName,
            generationConfig: { responseMimeType: 'application/json' }
          });
          const result = await model.generateContent([{ text: promptInstructions }]);
          const candidate = result.response.candidates?.[0];
          const candidateText = candidate?.content?.parts?.find((p: any) => p.text)?.text || '';
          if (candidateText) {
            text = candidateText;
            break;
          }
        } catch (err: any) {
          console.warn(`Text turn failed on ${modelName}:`, err.message || err);
        }
      }
    }

    let parsed: { transcription?: string | null; reply: string; recommendedCardId?: string | null };
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
      transcription: usedAudio ? (parsed.transcription || null) : null,
      card,
      audioDataUrl
    });
  } catch (error: any) {
    console.error('Error in voice chat API:', error);
    return NextResponse.json(
      {
        reply: "Richard here. I didn't catch that last turn clearly. What is the main roadblock you are wrestling with right now? You can reply by voice, type below, or grab time directly on my calendar.",
        card: PAID_RESOURCES.cal_advisory_booking,
        audioDataUrl: null
      },
      { status: 200 }
    );
  }
}
