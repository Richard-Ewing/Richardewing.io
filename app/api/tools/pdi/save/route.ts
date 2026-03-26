import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../../lib/supabase';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        
        if (body.score === undefined || body.financial_waste === undefined) {
            return NextResponse.json({ error: 'Missing required payload fields' }, { status: 400 });
        }

        const { error } = await supabaseAdmin
            .from('tool_runs')
            .insert({
                user_id: userId,
                tool_id: 'pdi',
                score: body.score,
                financial_waste: body.financial_waste,
                inputs: body.inputs || {},
                created_at: new Date().toISOString()
            });

        if (error) {
            console.error('Supabase Insert Error:', error);
            return NextResponse.json({ error: 'Failed to save to Vault' }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Save Tool Run Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
