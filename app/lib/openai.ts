import { GoogleGenerativeAI } from '@google/generative-ai';

if (!process.env.GOOGLE_API_KEY) {
    // Warn instead of throw to prevent build failure if env not set during build
    console.warn('Missing GOOGLE_API_KEY environment variable. LLM features will fail.');
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || 'dummy_key');

export const gemini = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
