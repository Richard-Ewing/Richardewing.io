import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const { email, source } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const apiKey = process.env.BEEHIIV_API_KEY;
        const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

        if (!apiKey || !publicationId) {
            console.warn('Beehiiv credentials not configured. Skipping auto-subscribe.');
            return NextResponse.json({ skipped: true, reason: 'Beehiiv not configured' });
        }

        const res = await fetch(
            `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    email,
                    reactivate_existing: true,
                    send_welcome_email: true,
                    utm_source: 'tool_gate',
                    utm_medium: source || 'tool',
                    referring_site: 'richardewing.io',
                }),
            }
        );

        if (!res.ok) {
            const errorText = await res.text();
            console.error('Beehiiv API error:', res.status, errorText);
            return NextResponse.json({ error: 'Beehiiv subscription failed' }, { status: 500 });
        }

        const data = await res.json();
        return NextResponse.json({ success: true, id: data?.data?.id });

    } catch (error) {
        console.error('Beehiiv subscription error:', error);
        return NextResponse.json({ error: 'Internal error' }, { status: 500 });
    }
}
