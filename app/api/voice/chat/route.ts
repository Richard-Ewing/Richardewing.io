import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PAID_RESOURCES, CORE_TOPICS, REWS_VOICE_SYSTEM_PROMPT } from '@/app/lib/voice-knowledge';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
    }

    const lastUserMessage = messages[messages.length - 1].content;
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    // Fallback if API key is not configured
    if (!apiKey) {
      const lower = lastUserMessage.toLowerCase();
      let matchedCard = null;
      let reply = "Richard here. In my experience, when teams struggle with this, the real bottleneck is not the tooling, but the incentive structure and how decisions get signed off. What is the immediate roadblock you are running into?";

      if (lower.includes('cal') || lower.includes('book') || lower.includes('talk') || lower.includes('hire') || lower.includes('consult')) {
        matchedCard = PAID_RESOURCES.cal_advisory_booking;
        reply = "Let us skip the back and forth. You can grab 30 minutes directly on my calendar and we can look at your actual numbers and architecture.";
      } else if (lower.includes('drag') || lower.includes('velocity') || lower.includes('metric') || lower.includes('burn') || lower.includes('review')) {
        matchedCard = PAID_RESOURCES.tools_library_unlock;
        reply = "You are likely dealing with production drag. The hours are disappearing in review queues and rework. Our Diagnostic Tools Library has the exact PDI rubric to audit this.";
      } else if (lower.includes('curriculum') || lower.includes('course') || lower.includes('learn') || lower.includes('track') || lower.includes('career') || lower.includes('staff') || lower.includes('management')) {
        matchedCard = PAID_RESOURCES.single_track;
        reply = "Moving between engineering tracks is about expanding your leverage, not just writing code. Our curriculum tracks break down the exact rubrics and frameworks.";
      }

      return NextResponse.json({
        reply,
        card: matchedCard
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      generationConfig: {
        responseMimeType: 'application/json'
      }
    });

    const conversationHistory = messages.map(m => `${m.role === 'user' ? 'Visitor' : 'Richard'}: ${m.content}`).join('\n');

    const prompt = `
${REWS_VOICE_SYSTEM_PROMPT}

You have these paid resource cards available to recommend when relevant:
- single_track: Single Curriculum Track ($149) for career progression, IC vs Management, or foundational AI economics.
- tools_library_unlock: Diagnostic Tools Library ($199) for team velocity, PDI audit, AI burn, or PR review bottlenecks.
- module_bundle_3: 3-Track Curriculum Bundle ($349) for broader technical and economic upskilling.
- all_access_pass: All-Access Vault Pass ($999) for full organization-wide curriculum and all tools.
- cal_advisory_booking: 1:1 Advisory Strategy Session on Cal.com for bespoke, messy problems, hiring, or direct working calls.

Current conversation:
${conversationHistory}

Respond ONLY with a valid JSON object matching this exact schema:
{
  "reply": "Your punchy, spoken response as Richard (2 to 3 sentences max, no em-dashes, no buzzwords, helpful first)",
  "recommendedCardId": "single_track" | "tools_library_unlock" | "module_bundle_3" | "all_access_pass" | "cal_advisory_booking" | null
}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    let parsed: { reply: string; recommendedCardId?: string | null };
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

    // Clean any accidental em-dashes from model output
    const cleanReply = parsed.reply.replace(/—/g, ' - ').replace(/–/g, ' - ');

    return NextResponse.json({
      reply: cleanReply,
      card
    });
  } catch (error: any) {
    console.error('Error in voice chat API:', error);
    return NextResponse.json(
      {
        reply: "Richard here. I ran into a brief connection hitch, but if you want to dig into your specific setup, you can reach me directly or grab time on my calendar.",
        card: PAID_RESOURCES.cal_advisory_booking
      },
      { status: 200 }
    );
  }
}
