import { permanentRedirect } from 'next/navigation';

export default function MissingToolFallback() {
    // Redirect all legacy or non-existent tools to the parent tools silo
    permanentRedirect('/tools');
}
