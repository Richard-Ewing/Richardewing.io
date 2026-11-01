/**
 * Exogram AI Governance & Vault Client
 * ======================================
 * Server-side client for Exogram's REST API.
 * Provides fact storage (Vault), semantic search, and action governance.
 *
 * Base URL: https://api.exogram.ai
 * Auth: Bearer sk_exogram_...
 */

const DEFAULT_EXOGRAM_BASE_URL = 'https://api.exogram.ai';
const DEFAULT_TIMEOUT_MS = 8000;
const VALID_GOVERNANCE_DECISIONS = new Set(['ALLOWED', 'BLOCKED', 'ESCALATE']);

function getExogramApiKey(): string {
    return (process.env.EXOGRAM_API_KEY || '').trim();
}

function getExogramBaseUrl(): string {
    return (process.env.EXOGRAM_BASE_URL || DEFAULT_EXOGRAM_BASE_URL).replace(/\/+$/, '');
}

// ---------------------------------------------------------------------------
// Core Vault & Governance Types
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
    degraded?: boolean;
    error?: string;
}

export interface VaultSearchRequest {
    query: string;
    top_k?: number;
}

export interface VaultSearchResult {
    claim: string;
    confidence: number;
    source: string;
    id?: string;
}

export interface VaultSearchResponse {
    results: VaultSearchResult[];
    degraded?: boolean;
    error?: string;
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
// Versioned L1 -> L2 -> L3 Provenance Memory Contracts (ADR-0020)
// ---------------------------------------------------------------------------

/** L1 Immutable Raw Observation Event */
export interface ExogramL1Event {
    id: string;
    layer: 'L1';
    actor: string;
    source_uri: string;
    raw_event_hash: string;
    summary: string;
    observed_at: string;
    metadata?: Record<string, unknown>;
}

/** L2 Atomic Evidence-Backed Claim referencing >= 1 L1 Event IDs */
export interface ExogramL2Claim {
    id: string;
    layer: 'L2';
    claim: string;
    confidence: number;
    version: number;
    evidence_l1_ids: string[];
    supersedes_l2_id?: string;
    state_hash: string;
    recorded_at: string;
}

/** L3 Executive Synthesis referencing >= 1 L2 Claim IDs and explicit conflicts */
export interface ExogramL3Synthesis {
    id: string;
    layer: 'L3';
    topic: string;
    directive: string;
    confidence: number;
    version: number;
    provenance_l2_ids: string[];
    conflict_ids: string[];
    synthesized_at: string;
}

export interface ProvenanceStoreRequest {
    events?: ExogramL1Event[];
    claims?: ExogramL2Claim[];
    syntheses?: ExogramL3Synthesis[];
}

export interface ProvenanceStoreResponse {
    stored_l1: number;
    stored_l2: number;
    stored_l3: number;
    state_hash: string;
    conflicts: string[];
    degraded?: boolean;
    error?: string;
}

export interface ProvenanceGraphResponse {
    events: ExogramL1Event[];
    claims: ExogramL2Claim[];
    syntheses: ExogramL3Synthesis[];
    degraded?: boolean;
    error?: string;
}

export interface ProvenanceValidationResult {
    valid: boolean;
    errors: string[];
}

/**
 * Deterministically verifies L1 -> L2 -> L3 provenance integrity before storage
 * or synthesis display (rejecting orphan L2 claims or ungrounded L3 directives).
 */
export function validateProvenanceChain(bundle: ProvenanceStoreRequest): ProvenanceValidationResult {
    const errors: string[] = [];
    const events = Array.isArray(bundle?.events) ? bundle.events : [];
    const claims = Array.isArray(bundle?.claims) ? bundle.claims : [];
    const syntheses = Array.isArray(bundle?.syntheses) ? bundle.syntheses : [];

    if (events.length === 0 && claims.length === 0 && syntheses.length === 0) {
        errors.push('Provenance bundle is empty; at least one L1 event, L2 claim, or L3 synthesis is required.');
        return { valid: false, errors };
    }

    const l1Ids = new Set<string>();
    for (const evt of events) {
        const id = typeof evt?.id === 'string' ? evt.id.trim() : '';
        if (!id) {
            errors.push('L1 event has an empty or missing id.');
        } else {
            l1Ids.add(id);
        }
        if (evt?.layer !== 'L1') {
            errors.push(`L1 event "${id || 'unknown'}" has invalid layer "${String(evt?.layer)}".`);
        }
        if (!evt?.raw_event_hash || typeof evt.raw_event_hash !== 'string' || !evt.raw_event_hash.trim()) {
            errors.push(`L1 event "${id || 'unknown'}" is missing raw_event_hash.`);
        }
    }

    const l2Ids = new Set<string>();
    for (const claim of claims) {
        const id = typeof claim?.id === 'string' ? claim.id.trim() : '';
        if (!id) {
            errors.push('L2 claim has an empty or missing id.');
        } else {
            l2Ids.add(id);
        }
        if (claim?.layer !== 'L2') {
            errors.push(`L2 claim "${id || 'unknown'}" has invalid layer "${String(claim?.layer)}".`);
        }
        if (
            typeof claim?.confidence !== 'number' ||
            !Number.isFinite(claim.confidence) ||
            claim.confidence < 0 ||
            claim.confidence > 1
        ) {
            errors.push(`L2 claim "${id || 'unknown'}" has confidence outside [0, 1].`);
        }
        if (claim?.supersedes_l2_id && claim.supersedes_l2_id.trim() === id) {
            errors.push(`L2 claim "${id}" cannot supersede itself.`);
        }
        const rawRefs = Array.isArray(claim?.evidence_l1_ids) ? claim.evidence_l1_ids : [];
        const cleanRefs = rawRefs
            .filter((r): r is string => typeof r === 'string')
            .map((r) => r.trim())
            .filter((r) => r.length > 0);
        if (cleanRefs.length === 0 || cleanRefs.length !== rawRefs.length) {
            errors.push(`L2 claim "${id || 'unknown'}" must contain only non-empty evidence_l1_ids references.`);
            continue;
        }
        if (l1Ids.size > 0) {
            for (const ref of cleanRefs) {
                if (!l1Ids.has(ref)) {
                    errors.push(`L2 claim "${id || 'unknown'}" references missing L1 event "${ref}".`);
                }
            }
        }
    }

    for (const syn of syntheses) {
        const id = typeof syn?.id === 'string' ? syn.id.trim() : '';
        if (!id) {
            errors.push('L3 synthesis has an empty or missing id.');
        }
        if (syn?.layer !== 'L3') {
            errors.push(`L3 synthesis "${id || 'unknown'}" has invalid layer "${String(syn?.layer)}".`);
        }
        if (
            typeof syn?.confidence !== 'number' ||
            !Number.isFinite(syn.confidence) ||
            syn.confidence < 0 ||
            syn.confidence > 1
        ) {
            errors.push(`L3 synthesis "${id || 'unknown'}" has confidence outside [0, 1].`);
        }
        const rawRefs = Array.isArray(syn?.provenance_l2_ids) ? syn.provenance_l2_ids : [];
        const cleanRefs = rawRefs
            .filter((r): r is string => typeof r === 'string')
            .map((r) => r.trim())
            .filter((r) => r.length > 0);
        if (cleanRefs.length === 0 || cleanRefs.length !== rawRefs.length) {
            errors.push(`L3 synthesis "${id || 'unknown'}" must contain only non-empty provenance_l2_ids references.`);
            continue;
        }
        if (l2Ids.size > 0) {
            for (const ref of cleanRefs) {
                if (!l2Ids.has(ref)) {
                    errors.push(`L3 synthesis "${id || 'unknown'}" references missing L2 claim "${ref}".`);
                }
            }
        }
    }

    return { valid: errors.length === 0, errors };
}

// ---------------------------------------------------------------------------
// Internal Discriminated Fetch Helper (Zero `{}` Casts)
// ---------------------------------------------------------------------------

type ExogramFetchResult<T> =
    | { ok: true; status: number; data: T }
    | { ok: false; status: number; error: string };

async function exogramFetch<T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'DELETE' = 'GET',
    body?: unknown,
    timeoutMs: number = DEFAULT_TIMEOUT_MS
): Promise<ExogramFetchResult<T>> {
    const apiKey = getExogramApiKey();
    if (!apiKey) {
        console.warn('[Exogram] No API key configured; skipping API call to', endpoint);
        return {
            ok: false,
            status: 0,
            error: 'EXOGRAM_API_KEY is not configured',
        };
    }

    const url = `${getExogramBaseUrl()}${endpoint}`;
    const options: RequestInit = {
        method,
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        signal: AbortSignal.timeout(timeoutMs),
    };

    if (body !== undefined && method === 'POST') {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorText = await response.text().catch(() => 'Unknown upstream error');
            console.error(`[Exogram] ${method} ${endpoint} failed (${response.status}):`, errorText);
            return {
                ok: false,
                status: response.status,
                error: `HTTP ${response.status}: ${errorText.slice(0, 240)}`,
            };
        }

        const parsed = await response.json().catch(() => null);
        if (parsed === null || typeof parsed !== 'object') {
            return {
                ok: false,
                status: response.status,
                error: 'Invalid JSON object returned from Exogram upstream',
            };
        }

        return {
            ok: true,
            status: response.status,
            data: parsed as T,
        };
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`[Exogram] Network error on ${method} ${endpoint}:`, message);
        return {
            ok: false,
            status: 0,
            error: message,
        };
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
    const res = await exogramFetch<VaultStoreResponse>('/v2/vault/store', 'POST', {
        claim,
        source,
        confidence,
    });

    if (!res.ok) {
        return {
            id: '',
            version: 0,
            conflicts: [],
            state_hash: '',
            degraded: true,
            error: res.error,
        };
    }

    return {
        id: String(res.data.id || ''),
        version: typeof res.data.version === 'number' ? res.data.version : 1,
        conflicts: Array.isArray(res.data.conflicts) ? res.data.conflicts : [],
        state_hash: String(res.data.state_hash || ''),
        degraded: false,
    };
}

/**
 * Non-blocking semantic search across the Exogram ledger for advisory enrichment.
 * Returns `{ results: [], degraded: true, error }` when unconfigured or unreachable.
 */
export async function vaultSearch(
    query: string,
    topK: number = 5
): Promise<VaultSearchResponse> {
    const res = await exogramFetch<VaultSearchResponse>('/v2/vault/search', 'POST', {
        query,
        top_k: topK,
    });

    if (!res.ok || !Array.isArray(res.data.results)) {
        return {
            results: [],
            degraded: true,
            error: res.ok ? 'Upstream vault search response missing results array' : res.error,
        };
    }

    return {
        results: res.data.results,
        degraded: false,
    };
}

/**
 * Strict semantic search for benchmark harnesses (`run-retrieval-eval.mjs --live`).
 * Throws an honest transport/auth Error instead of masking failures with empty arrays.
 */
export async function vaultSearchStrict(
    query: string,
    topK: number = 5
): Promise<VaultSearchResponse> {
    const res = await exogramFetch<VaultSearchResponse>('/v2/vault/search', 'POST', {
        query,
        top_k: topK,
    });

    if (!res.ok) {
        throw new Error(`[Exogram vaultSearchStrict] ${res.error}`);
    }

    if (!Array.isArray(res.data.results)) {
        throw new Error('[Exogram vaultSearchStrict] Upstream payload missing results array');
    }

    return {
        results: res.data.results,
        degraded: false,
    };
}

/**
 * Persist a validated L1 -> L2 -> L3 provenance bundle into the Exogram v3 ledger.
 */
export async function vaultStoreProvenance(
    bundle: ProvenanceStoreRequest
): Promise<ProvenanceStoreResponse> {
    const check = validateProvenanceChain(bundle);
    if (!check.valid) {
        return {
            stored_l1: 0,
            stored_l2: 0,
            stored_l3: 0,
            state_hash: '',
            conflicts: [],
            degraded: true,
            error: `Provenance validation failed: ${check.errors.join('; ')}`,
        };
    }

    const res = await exogramFetch<ProvenanceStoreResponse>(
        '/v3/vault/store-provenance',
        'POST',
        bundle
    );

    if (!res.ok) {
        return {
            stored_l1: 0,
            stored_l2: 0,
            stored_l3: 0,
            state_hash: '',
            conflicts: [],
            degraded: true,
            error: res.error,
        };
    }

    return {
        stored_l1: Number(res.data.stored_l1 || 0),
        stored_l2: Number(res.data.stored_l2 || 0),
        stored_l3: Number(res.data.stored_l3 || 0),
        state_hash: String(res.data.state_hash || ''),
        conflicts: Array.isArray(res.data.conflicts) ? res.data.conflicts : [],
        degraded: false,
    };
}

/**
 * Query L1 -> L2 -> L3 provenance lineage for a topic or synthesis ID.
 */
export async function vaultQueryProvenanceGraph(
    topicOrId: string
): Promise<ProvenanceGraphResponse> {
    const encoded = encodeURIComponent(topicOrId.trim());
    const res = await exogramFetch<ProvenanceGraphResponse>(
        `/v3/vault/graph?target=${encoded}`,
        'GET'
    );

    if (!res.ok) {
        return {
            events: [],
            claims: [],
            syntheses: [],
            degraded: true,
            error: res.error,
        };
    }

    return {
        events: Array.isArray(res.data.events) ? res.data.events : [],
        claims: Array.isArray(res.data.claims) ? res.data.claims : [],
        syntheses: Array.isArray(res.data.syntheses) ? res.data.syntheses : [],
        degraded: false,
    };
}

// ---------------------------------------------------------------------------
// Actions (7-Gate Judgment Engine - Strictly Fail-Closed)
// ---------------------------------------------------------------------------

/**
 * Submit a proposed action through the 7-gate Judgment Engine.
 * Strictly FAIL-CLOSED: any missing API key, timeout, HTTP error, or malformed
 * decision payload returns `{ decision: 'BLOCKED', evaluation_id: 'fail-closed' }`.
 */
export async function evaluateAction(
    actionType: string,
    actor: string,
    actorRole: 'user' | 'admin' | 'assistant',
    payload: Record<string, unknown>,
    impactScope: 'internal' | 'external' | 'critical' = 'internal'
): Promise<ActionEvaluateResponse> {
    const res = await exogramFetch<ActionEvaluateResponse>('/v2/actions/evaluate', 'POST', {
        action_type: actionType,
        actor,
        actor_role: actorRole,
        payload,
        impact_scope: impactScope,
    });

    if (
        !res.ok ||
        typeof res.data.decision !== 'string' ||
        !VALID_GOVERNANCE_DECISIONS.has(res.data.decision)
    ) {
        return {
            decision: 'BLOCKED',
            reason: res.ok
                ? 'Exogram governance returned malformed decision payload (fail-closed)'
                : `Exogram governance unreachable or unconfigured (fail-closed): ${res.error}`,
            evaluation_id: 'fail-closed',
            gates: {},
        };
    }

    return {
        decision: res.data.decision,
        reason: String(res.data.reason || ''),
        evaluation_id: String(res.data.evaluation_id || 'verified'),
        gates:
            res.data.gates && typeof res.data.gates === 'object'
                ? res.data.gates
                : {},
    };
}

// ---------------------------------------------------------------------------
// Convenience: Store & Search Business Consultation Facts
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
