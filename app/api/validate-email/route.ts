import { NextResponse } from 'next/server';
import dns from 'dns';

// Common disposable email domains to block
const DISPOSABLE_DOMAINS = new Set([
    'tempmail.com', 'guerrillamail.com', 'guerrillamail.info', 'grr.la',
    'guerrillamail.net', 'sharklasers.com', 'guerrillamail.org', 'guerrillamail.de',
    'throwaway.email', 'mailinator.com', 'yopmail.com', 'maildrop.cc',
    'dispostable.com', 'mailnesia.com', 'tempmailaddress.com', 'trashmail.com',
    'trashmail.me', 'trashmail.net', 'fakeinbox.com', 'tempail.com',
    'temp-mail.org', 'harakirimail.com', 'mailcatch.com', 'mailsac.com',
    'meltmail.com', 'mintemail.com', 'mt2015.com', 'mytemp.email',
    'getairmail.com', 'getnada.com', 'mohmal.com', 'burner.kiwi',
    '10minutemail.com', 'tempr.email', 'discard.email', 'emailondeck.com',
]);

function checkMxRecords(domain: string): Promise<boolean> {
    return new Promise((resolve) => {
        dns.resolveMx(domain, (err, addresses) => {
            if (err || !addresses || addresses.length === 0) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
}

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || typeof email !== 'string') {
            return NextResponse.json({ valid: false, reason: 'Email is required.' }, { status: 400 });
        }

        // 1. Basic format validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ valid: false, reason: 'Please enter a valid email address.' });
        }

        const domain = email.split('@')[1].toLowerCase();

        // 2. Block disposable email providers
        if (DISPOSABLE_DOMAINS.has(domain)) {
            return NextResponse.json({ valid: false, reason: 'Please use a non-disposable email address.' });
        }

        // 3. MX record check  -  verify domain accepts email
        const hasMx = await checkMxRecords(domain);
        if (!hasMx) {
            return NextResponse.json({ valid: false, reason: 'This email domain doesn\'t appear to accept emails. Please check for typos.' });
        }

        return NextResponse.json({ valid: true, reason: 'ok' });

    } catch (error) {
        console.error('Email validation error:', error);
        // On server error, allow the submission (don't block legitimate users)
        return NextResponse.json({ valid: true, reason: 'ok' });
    }
}
