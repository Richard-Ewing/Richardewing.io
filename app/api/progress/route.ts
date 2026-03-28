import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
    try {
        const { userId } = await auth();
        
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { content_id, content_type, progress_percentage, is_completed } = body;

        if (!content_id || !content_type || progress_percentage === undefined) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const { error } = await supabaseAdmin
            .from('user_content_progress')
            .upsert({
                user_id: userId,
                content_id,
                content_type,
                progress_percentage,
                is_completed: is_completed || false,
                last_accessed: new Date().toISOString()
            }, {
                onConflict: 'user_id,content_id'
            });

        if (error) {
            console.error('Supabase Progress Error:', error);
            return NextResponse.json({ error: 'Database update failed' }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Progress tracking route error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const { userId } = await auth();
        
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { data, error } = await supabaseAdmin
            .from('user_content_progress')
            .select('*')
            .eq('user_id', userId)
            .order('last_accessed', { ascending: false });

        if (error) {
            console.error('Supabase fetch error:', error);
            return NextResponse.json({ error: 'Database fetch failed' }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        console.error('Progress fetch route error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
