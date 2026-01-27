import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
    // Warn instead of throw to prevent build failure if env not set during build
    console.warn('Missing OPENAI_API_KEY environment variable. LLM features will fail.');
}

export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'dummy_key',
});
