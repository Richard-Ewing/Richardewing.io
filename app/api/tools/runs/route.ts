import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await req.json();
    const { tool_id, run_data, output_metrics } = body;

    if (!tool_id || !run_data) {
      return new NextResponse('Missing required fields: tool_id or run_data', { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from('user_tool_runs')
      .insert([{
        user_id: userId,
        tool_id,
        run_data,
        output_metrics: output_metrics || {}
      }])
      .select()
      .single();

    if (error) {
      console.error('Supabase Insert Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('API /tools/runs POST Error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const tool_id = searchParams.get('tool_id');

    let query = supabaseAdmin
      .from('user_tool_runs')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (tool_id) {
      query = query.eq('tool_id', tool_id);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Supabase Select Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('API /tools/runs GET Error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
