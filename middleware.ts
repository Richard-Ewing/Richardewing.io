import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Redirect www → non-www (canonical domain is richardewing.io)
  if (hostname.startsWith('www.')) {
    const newHost = hostname.replace('www.', '');
    url.host = newHost;
    url.port = '';
    return NextResponse.redirect(url, 301);
  }

  // Redirect http → https (handled by Vercel, but belt-and-suspenders)
  if (request.nextUrl.protocol === 'http:') {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Run on all routes except static assets and API routes
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/).*)',
  ],
};
