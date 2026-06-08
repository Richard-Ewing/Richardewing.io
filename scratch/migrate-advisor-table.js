require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function migrate() {
    // Use the Supabase REST API directly to run raw SQL
    const sql = `
        CREATE TABLE IF NOT EXISTS public.ai_advisor_sessions (
            id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            user_id TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'in_progress',
            current_phase INTEGER DEFAULT 1,
            business_profile JSONB DEFAULT '{}'::jsonb,
            conversation_history JSONB DEFAULT '[]'::jsonb,
            generated_plan JSONB DEFAULT NULL,
            exogram_facts TEXT[] DEFAULT '{}',
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
        );
    `;

    const indexSql = `CREATE INDEX IF NOT EXISTS idx_ai_advisor_user ON public.ai_advisor_sessions(user_id);`;
    
    const rlsSql = `ALTER TABLE public.ai_advisor_sessions ENABLE ROW LEVEL SECURITY;`;
    
    const policySql = `
        DO $$ BEGIN
            IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'ai_advisor_sessions' AND policyname = 'Service Role Only') THEN
                CREATE POLICY "Service Role Only" ON public.ai_advisor_sessions FOR ALL USING (false);
            END IF;
        END $$;
    `;

    const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    for (const statement of [sql, indexSql, rlsSql, policySql]) {
        try {
            const response = await fetch(`${baseUrl}/rest/v1/rpc/exec_sql`, {
                method: 'POST',
                headers: {
                    'apikey': key,
                    'Authorization': `Bearer ${key}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: statement.trim() }),
            });
            const text = await response.text();
            console.log('Result:', response.status, text.slice(0, 100));
        } catch (err) {
            console.log('Error:', err.message);
        }
    }

    // Fallback: Try a simple insert to verify the table exists or create via upsert
    try {
        const testId = '00000000-0000-0000-0000-000000000000';
        const { error } = await supabase
            .from('ai_advisor_sessions')
            .select('id')
            .eq('id', testId)
            .limit(1);
        
        if (error && error.message.includes('does not exist')) {
            console.log('\n⚠️  Table does not exist. Please run this SQL in the Supabase SQL Editor:');
            console.log('---');
            console.log(sql);
            console.log(indexSql);
            console.log(rlsSql);
            console.log('CREATE POLICY "Service Role Only" ON public.ai_advisor_sessions FOR ALL USING (false);');
            console.log('---');
        } else if (error) {
            console.log('Table query result:', error.message);
        } else {
            console.log('✅ Table ai_advisor_sessions exists and is accessible');
        }
    } catch (err) {
        console.log('Verification error:', err.message);
    }
}

migrate();
