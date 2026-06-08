/**
 * Agent Logger
 * 
 * Centralized structured logging for all autonomous agents.
 * Logs to console in development, and to Supabase `agent_runs` table in production.
 * Every agent run creates an immutable audit record.
 */
import { supabaseAdmin } from '../supabase';

export type AgentName = 
    | 'intelligence-digest'
    | 'benchmark-aggregator'
    | 'seo-health'
    | 'lead-scorer'
    | 'content-expander'
    | 'daily-ops-email'
    | 'seo-optimizer'
    | 'auto-rewriter';

export type AgentStatus = 'started' | 'completed' | 'failed' | 'skipped';

export interface AgentRunLog {
    agent: AgentName;
    status: AgentStatus;
    duration_ms: number;
    items_processed: number;
    summary: string;
    metadata?: Record<string, unknown>;
}

/**
 * Logs an autonomous agent run to the `agent_runs` Supabase table.
 * Falls back to console.log if Supabase is unavailable.
 */
export async function logAgentRun(log: AgentRunLog): Promise<void> {
    const record = {
        ...log,
        created_at: new Date().toISOString(),
    };

    // Always log to console for Vercel function logs
    console.log(`[AGENT:${log.agent}] ${log.status.toUpperCase()} — ${log.summary} (${log.duration_ms}ms, ${log.items_processed} items)`);

    try {
        await supabaseAdmin
            .from('agent_runs')
            .insert(record);
    } catch (err) {
        // Don't fail the agent if logging fails
        console.warn('[AGENT:LOGGER] Failed to persist agent run to Supabase:', err);
    }
}

/**
 * Helper to time agent execution.
 */
export function createAgentTimer() {
    const start = Date.now();
    return {
        elapsed: () => Date.now() - start,
    };
}
