/**
 * Exogram AI Governance & Vault Client
 * ======================================
 * Server-side client for Exogram's REST API.
 * Provides fact storage (Vault), semantic search, and action governance.
 *
 * Base URL: https://api.exogram.ai
 * Auth: Bearer sk_exogram_...
 */

const EXOGRAM_BASE_URL = 'https://api.exogram.ai';
const EXOGRAM_API_KEY = process.env.EXOGRAM_API_KEY || '';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface VaultStoreRequest {
    claim: string;
    source: string;
    confidence: number;
}

export interface VaultStoreResponse {
    id: string;
    version: number;
    conflicts: string[];
    state_hash: string;
}

export interface VaultSearchRequest {
    query: string;
    top_k?: number;
}

export interface VaultSearchResult {
    claim: string;
    confidence: number;
    source: string;
}

export interface VaultSearchResponse {
    results: VaultSearchResult[];
}

export interface ActionEvaluateRequest {
    action_type: string;
    actor: string;
    actor_role: 'user' | 'admin' | 'assistant';
    payload: Record<string, unknown>;
    impact_scope: 'internal' | 'external' | 'critical';
}

export interface ActionEvaluateResponse {
    decision: 'ALLOWED' | 'BLOCKED' | 'ESCALATE';
    reason: string;
    evaluation_id: string;
    gates: Record<string, { passed: boolean }>;
}

// ---------------------------------------------------------------------------
// Internal Fetch Helper
// ---------------------------------------------------------------------------

async function exogramFetch<T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'DELETE' = 'GET',
    body?: unknown
): Promise<T> {
    if (!EXOGRAM_API_KEY) {
        console.warn('[Exogram] No API key configured — skipping API call to', endpoint);
        return {} as T;
    }

    const url = `${EXOGRAM_BASE_URL}${endpoint}`;
    const options: RequestInit = {
        method,
        headers: {
            'Authorization': `Bearer ${EXOGRAM_API_KEY}`,
            'Content-Type': 'application/json',
        },
    };

    if (body && (method === 'POST')) {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorText = await response.text().catch(() => 'Unknown error');
            console.error(`[Exogram] ${method} ${endpoint} failed (${response.status}):`, errorText);
            return {} as T;
        }
        return (await response.json()) as T;
    } catch (error) {
        console.error(`[Exogram] Network error on ${method} ${endpoint}:`, error);
        return {} as T;
    }
}

// ---------------------------------------------------------------------------
// Vault Operations (Ledger Governance)
// ---------------------------------------------------------------------------

/**
 * Store a verifiable claim into the Exogram semantic ledger.
 * Runs PII scrubbing, conflict detection, and Pinecone embedding.
 */
export async function vaultStore(
    claim: string,
    source: string,
    confidence: number = 0.95
): Promise<VaultStoreResponse> {
    return exogramFetch<VaultStoreResponse>('/v2/vault/store', 'POST', {
        claim,
        source,
        confidence,
    });
}

/**
 * Semantic search across the Exogram ledger.
 * Returns facts ranked by relevance × confidence.
 */
export async function vaultSearch(
    query: string,
    topK: number = 5
): Promise<VaultSearchResponse> {
    return exogramFetch<VaultSearchResponse>('/v2/vault/search', 'POST', {
        query,
        top_k: topK,
    });
}

// ---------------------------------------------------------------------------
// Actions (Judgment Engine)
// ---------------------------------------------------------------------------

/**
 * Submit a proposed action through the 7-gate Judgment Engine.
 * Returns ALLOWED, BLOCKED, or ESCALATE.
 */
export async function evaluateAction(
    actionType: string,
    actor: string,
    actorRole: 'user' | 'admin' | 'assistant',
    payload: Record<string, unknown>,
    impactScope: 'internal' | 'external' | 'critical' = 'internal'
): Promise<ActionEvaluateResponse> {
    return exogramFetch<ActionEvaluateResponse>('/v2/actions/evaluate', 'POST', {
        action_type: actionType,
        actor,
        actor_role: actorRole,
        payload,
        impact_scope: impactScope,
    });
}

// ---------------------------------------------------------------------------
// Convenience: Store business consultation facts
// ---------------------------------------------------------------------------

/**
 * Store a structured business fact from a consultation session.
 * Wraps vaultStore with consistent source formatting.
 */
export async function storeBusinessFact(
    sessionId: string,
    factType: string,
    factContent: string,
    confidence: number = 0.9
): Promise<VaultStoreResponse> {
    const claim = `[${factType}] ${factContent}`;
    const source = `ai-advisor-session:${sessionId}`;
    return vaultStore(claim, source, confidence);
}

/**
 * Search for similar business contexts across all consultations.
 * Useful for industry benchmarking and pattern matching.
 */
export async function searchBusinessContext(
    query: string,
    topK: number = 5
): Promise<VaultSearchResult[]> {
    const response = await vaultSearch(query, topK);
    return response.results || [];
}
