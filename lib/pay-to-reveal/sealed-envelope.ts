/**
 * Sovereign Cryptographic Sealed-Envelope & Token Engine (ADR-0021)
 *
 * Uses native Web Crypto (`globalThis.crypto.subtle`) compatible with both
 * Cloudflare Workers V8 isolates and Node.js 20+.
 *
 * Security Guarantees:
 * 1. AES-256-GCM authenticated encryption seals full diagnostic findings and SOPs
 *    so unpaid browser network responses contain zero plaintext locked content.
 * 2. Additional Authenticated Data (AAD) binds every ciphertext to `(toolId, runId)`,
 *    preventing cross-run replay or envelope splicing.
 * 3. Domain-separated HMAC-SHA256 tokens (`rescanToken` and `badgeToken`) use
 *    constant-time byte comparison (`timingSafeEqualBytes`) and explicit expirations.
 */

export type PayToRevealToolId = 'vibe-security-scanner' | 'department-ai-playbook';
export type PayToRevealSku = 'vibe_scan_29' | 'vibe_scan_49' | 'dept_playbook_39' | 'dept_playbook_79';

export const PAY_TO_REVEAL_CATALOG: Record<
  PayToRevealSku,
  {
    toolId: PayToRevealToolId;
    tier: 'single_pass' | 'clearance_pack';
    priceCents: number;
    productName: string;
    productDescription: string;
    defaultReturnPath: string;
  }
> = {
  vibe_scan_29: {
    toolId: 'vibe-security-scanner',
    tier: 'single_pass',
    priceCents: 2900,
    productName: 'Vibe-Coded App & AI Agent Security Scanner (Single Scan Pass)',
    productDescription:
      'Opens every remaining vulnerability trace, SQL/TypeScript patches, 1-click Cursor/Claude Code fix prompts, and 24-hour verification re-scans.',
    defaultReturnPath: '/tools/vibe-security-scanner',
  },
  vibe_scan_49: {
    toolId: 'vibe-security-scanner',
    tier: 'clearance_pack',
    priceCents: 4900,
    productName: 'Vibe-Coded App & AI Agent Security Scanner (Founder & CTO Clearance Pack)',
    productDescription:
      'Full vulnerability traces + Signed Buyer Security Clearance Certificate PDF + 30-day unlimited re-scans + HMAC-signed public verification badge.',
    defaultReturnPath: '/tools/vibe-security-scanner',
  },
  dept_playbook_39: {
    toolId: 'department-ai-playbook',
    tier: 'single_pass',
    priceCents: 3900,
    productName: 'Department AI Risk & SOP Playbook (Single Department Pack)',
    productDescription:
      'All 8 stack-customized governed AI SOPs, SOX / EU AI Act human approval thresholds, sanitized prompts, and live 5-tab Excel (.xlsx) ROI model.',
    defaultReturnPath: '/tools/department-ai-playbook',
  },
  dept_playbook_79: {
    toolId: 'department-ai-playbook',
    tier: 'clearance_pack',
    priceCents: 7900,
    productName: 'Department AI Risk & SOP Playbook (Complete 5-Department Bundle)',
    productDescription:
      'All 40 governed SOPs across Finance, Operations, Customer Support, HR, and Small Business + 6-tab master Excel (.xlsx) + Board AI Policy PDF.',
    defaultReturnPath: '/tools/department-ai-playbook',
  },
};

export interface RescanTokenClaims {
  v: 1;
  toolId: PayToRevealToolId;
  sku: 'vibe_scan_29' | 'vibe_scan_49' | 'dept_playbook_39' | 'dept_playbook_79';
  tier: 'single_pass' | 'clearance_pack';
  sessionId: string;
  iat: number;
  exp: number;
}

export interface BadgeTokenClaims {
  v: 1;
  auditId: string;
  target: string;
  score: number;
  grade: string;
  criticalCount: number;
  highCount: number;
  issuedAt: string;
  expiresAt: string;
  exp: number;
}

interface EnvelopeContainer<T> {
  v: 1;
  runId: string;
  toolId: PayToRevealToolId;
  iat: number;
  exp: number;
  data: T;
}

const ENVELOPE_PREFIX = 'RESEAL1';
const RESCAN_PREFIX = 'RERESCAN1';
const BADGE_PREFIX = 'REBADGE1';
const ENVELOPE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

const encoder = new TextEncoder();
const decoder = new TextDecoder();

function toBase64Url(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function fromBase64Url(input: string): Uint8Array {
  const normalized = input.replace(/-/g, '+').replace(/_/g, '/');
  const padLen = (4 - (normalized.length % 4)) % 4;
  const padded = normalized + '='.repeat(padLen);
  const binary = atob(padded);
  const out = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    out[i] = binary.charCodeAt(i);
  }
  return out;
}

export function timingSafeEqualBytes(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a[i] ^ b[i];
  }
  return diff === 0;
}

function getRawSecretMaterial(): string {
  const stripeKey = process.env.STRIPE_SECRET_KEY?.trim() || '';
  const clerkKey = process.env.CLERK_SECRET_KEY?.trim() || '';
  const cronKey = process.env.CRON_SECRET?.trim() || '';
  const dedicatedKey = process.env.PAY_TO_REVEAL_SECRET?.trim() || '';

  const combined = [dedicatedKey, stripeKey, clerkKey, cronKey].filter(Boolean).join('|');
  if (combined.length >= 16) {
    return combined;
  }

  if (process.env.NODE_ENV === 'production') {
    throw new Error('ADR-0021 Fail-Closed: Missing server cryptographic secret material in production.');
  }

  return 'DEV_ONLY_EPHEMERAL_FALLBACK_DO_NOT_USE_IN_PROD_ADR_0021';
}

async function deriveAesKey(purpose: string): Promise<CryptoKey> {
  const material = `${getRawSecretMaterial()}|RE_ADR0021_AES|${purpose}`;
  const hash = await globalThis.crypto.subtle.digest('SHA-256', encoder.encode(material));
  return globalThis.crypto.subtle.importKey(
    'raw',
    hash,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

async function deriveHmacKey(purpose: string): Promise<CryptoKey> {
  const material = `${getRawSecretMaterial()}|RE_ADR0021_HMAC|${purpose}`;
  const hash = await globalThis.crypto.subtle.digest('SHA-256', encoder.encode(material));
  return globalThis.crypto.subtle.importKey(
    'raw',
    hash,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
}

export function generateRunId(prefix: 'scan' | 'sop'): string {
  const rand = new Uint8Array(10);
  globalThis.crypto.getRandomValues(rand);
  return `${prefix}_${Date.now().toString(36)}_${toBase64Url(rand)}`;
}

export async function sealServerPayload<T>(
  runId: string,
  toolId: PayToRevealToolId,
  data: T
): Promise<string> {
  const key = await deriveAesKey('envelope-v1');
  const iv = new Uint8Array(12);
  globalThis.crypto.getRandomValues(iv);

  const now = Date.now();
  const container: EnvelopeContainer<T> = {
    v: 1,
    runId,
    toolId,
    iat: now,
    exp: now + ENVELOPE_TTL_MS,
    data,
  };

  const aad = encoder.encode(`RE_ENVELOPE_V1:${toolId}:${runId}`);
  const plaintext = encoder.encode(JSON.stringify(container));
  const encryptedBuffer = await globalThis.crypto.subtle.encrypt(
    { name: 'AES-GCM', iv, additionalData: aad },
    key,
    plaintext
  );

  return `${ENVELOPE_PREFIX}.${toBase64Url(iv)}.${toBase64Url(new Uint8Array(encryptedBuffer))}`;
}

export async function openServerPayload<T>(
  envelope: string,
  expectedRunId: string,
  expectedToolId: PayToRevealToolId
): Promise<T> {
  if (!envelope || typeof envelope !== 'string') {
    throw new Error('Malformed sealed envelope.');
  }
  const parts = envelope.split('.');
  if (parts.length !== 3 || parts[0] !== ENVELOPE_PREFIX) {
    throw new Error('Invalid sealed envelope header.');
  }

  const iv = fromBase64Url(parts[1]);
  const ciphertext = fromBase64Url(parts[2]);
  if (iv.length !== 12 || ciphertext.length < 17) {
    throw new Error('Invalid sealed envelope dimensions.');
  }

  const key = await deriveAesKey('envelope-v1');
  const aad = encoder.encode(`RE_ENVELOPE_V1:${expectedToolId}:${expectedRunId}`);

  let decryptedBuffer: ArrayBuffer;
  try {
    decryptedBuffer = await globalThis.crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: iv as BufferSource, additionalData: aad },
      key,
      ciphertext as BufferSource
    );
  } catch {
    throw new Error('Sealed envelope authentication failed.');
  }

  const parsed = JSON.parse(decoder.decode(decryptedBuffer)) as EnvelopeContainer<T>;
  if (
    parsed.v !== 1 ||
    parsed.runId !== expectedRunId ||
    parsed.toolId !== expectedToolId ||
    typeof parsed.exp !== 'number' ||
    parsed.exp < Date.now()
  ) {
    throw new Error('Sealed envelope expired or mismatched.');
  }

  return parsed.data;
}

export async function signRescanToken(claims: RescanTokenClaims): Promise<string> {
  const key = await deriveHmacKey('rescan-token-v1');
  const payloadBytes = encoder.encode(JSON.stringify(claims));
  const payloadB64 = toBase64Url(payloadBytes);
  const sigBuffer = await globalThis.crypto.subtle.sign('HMAC', key, encoder.encode(payloadB64));
  return `${RESCAN_PREFIX}.${payloadB64}.${toBase64Url(new Uint8Array(sigBuffer))}`;
}

export async function verifyRescanToken(token: string): Promise<RescanTokenClaims | null> {
  try {
    if (!token || typeof token !== 'string') return null;
    const parts = token.split('.');
    if (parts.length !== 3 || parts[0] !== RESCAN_PREFIX) return null;

    const key = await deriveHmacKey('rescan-token-v1');
    const expectedSig = new Uint8Array(
      await globalThis.crypto.subtle.sign('HMAC', key, encoder.encode(parts[1]))
    );
    const actualSig = fromBase64Url(parts[2]);

    if (!timingSafeEqualBytes(expectedSig, actualSig)) return null;

    const claims = JSON.parse(decoder.decode(fromBase64Url(parts[1]))) as RescanTokenClaims;
    if (claims.v !== 1 || typeof claims.exp !== 'number' || claims.exp < Date.now()) {
      return null;
    }
    return claims;
  } catch {
    return null;
  }
}

export async function signBadgeToken(claims: BadgeTokenClaims): Promise<string> {
  const key = await deriveHmacKey('clearance-badge-v1');
  const payloadBytes = encoder.encode(JSON.stringify(claims));
  const payloadB64 = toBase64Url(payloadBytes);
  const sigBuffer = await globalThis.crypto.subtle.sign('HMAC', key, encoder.encode(payloadB64));
  return `${BADGE_PREFIX}.${payloadB64}.${toBase64Url(new Uint8Array(sigBuffer))}`;
}

export async function verifyBadgeToken(token: string): Promise<BadgeTokenClaims | null> {
  try {
    if (!token || typeof token !== 'string') return null;
    const parts = token.split('.');
    if (parts.length !== 3 || parts[0] !== BADGE_PREFIX) return null;

    const key = await deriveHmacKey('clearance-badge-v1');
    const expectedSig = new Uint8Array(
      await globalThis.crypto.subtle.sign('HMAC', key, encoder.encode(parts[1]))
    );
    const actualSig = fromBase64Url(parts[2]);

    if (!timingSafeEqualBytes(expectedSig, actualSig)) return null;

    const claims = JSON.parse(decoder.decode(fromBase64Url(parts[1]))) as BadgeTokenClaims;
    if (claims.v !== 1 || typeof claims.exp !== 'number' || claims.exp < Date.now()) {
      return null;
    }
    return claims;
  } catch {
    return null;
  }
}
