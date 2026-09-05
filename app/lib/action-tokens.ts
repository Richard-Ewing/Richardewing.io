import crypto from 'crypto';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.richardewing.io';
const SECRET = process.env.CRON_SECRET || 'fallback-secret';

export function generateActionToken(action: string, payload: Record<string, string>, expiresInHours = 72): string {
    const data = JSON.stringify({ action, payload, exp: Date.now() + expiresInHours * 3600000 });
    const hmac = crypto.createHmac('sha256', SECRET).update(data).digest('hex');
    const token = Buffer.from(JSON.stringify({ data, hmac })).toString('base64url');
    return token;
}

export function generateActionUrl(action: string, payload: Record<string, string>): string {
    const token = generateActionToken(action, payload);
    return `${SITE_URL}/api/actions/trigger?token=${token}`;
}

export function verifyToken(token: string): { action: string; payload: Record<string, string> } | null {
    try {
        const decoded = JSON.parse(Buffer.from(token, 'base64url').toString());
        const { data, hmac } = decoded;
        const expected = crypto.createHmac('sha256', SECRET).update(data).digest('hex');
        if (hmac !== expected) return null;

        const parsed = JSON.parse(data);
        if (parsed.exp < Date.now()) return null; // Expired
        return { action: parsed.action, payload: parsed.payload };
    } catch {
        return null;
    }
}
