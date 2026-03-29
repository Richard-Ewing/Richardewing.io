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
        const { moduleIds } = body;

        if (!moduleIds || !Array.isArray(moduleIds)) {
            return NextResponse.json({ error: 'Missing moduleIds array' }, { status: 400 });
        }

        if (moduleIds.length === 0) {
            return NextResponse.json({ success: true, count: 0 });
        }

        // Prepare bulk upsert
        const rows = moduleIds.map(id => ({
            user_id: userId,
            content_id: id,
            content_type: 'module',
            progress_percentage: 100,
            is_completed: true,
            last_accessed: new Date().toISOString()
        }));

        const { error } = await supabaseAdmin
            .from('user_content_progress')
            .upsert(rows, { onConflict: 'user_id,content_id' });

        if (error) {
            console.error('Bulk progress sync error:', error);
            return NextResponse.json({ error: 'Database update failed' }, { status: 500 });
        }

        return NextResponse.json({ success: true, count: rows.length });
    } catch (error) {
        console.error('Progress sync route error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
