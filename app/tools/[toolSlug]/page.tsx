import { permanentRedirect } from 'next/navigation';

export default function MissingToolFallback() {
    // This dynamic route acts as a catch-all safety net for the /tools directory.
    // Explicit tool directories (like /tools/aueb) take precedence in Next.js routing.
    // If a user visits a tool path that doesn't exist (like an old /tools/agentic-drift ghost link),
    // they hit this interceptor and are instantly given a 308 Permanent Redirect to the tools index.
    permanentRedirect('/tools');
}
