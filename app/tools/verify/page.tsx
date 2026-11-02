import React, { Suspense } from 'react';
import { Metadata } from 'next';
import SecurityBadgeVerifyClient from '@/components/tools/SecurityBadgeVerifyClient';

export const metadata: Metadata = {
  title: 'Security Clearance Badge Verification',
  description:
    'Verify HMAC-SHA256 cryptographic signatures and audit scores for buyer security clearance certificates issued on the RichardEwing.io platform.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://www.richardewing.io/tools/verify',
  },
};

export default function SecurityBadgeVerifyPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <header className="max-w-3xl mx-auto px-6 pt-28 pb-6 border-b border-[#24332b]/10">
        <p className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-bold mb-2">
          Cryptographic Provenance &middot; HMAC-SHA256 Certificate Registry
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#162e26] leading-tight mb-3">
          Application Security Clearance Verification
        </h1>
        <p
          itemProp="description"
          className="font-sans text-base text-[#4a5850] leading-relaxed"
        >
          Independently verify the cryptographic authenticity, clearance grade, and expiration window of a RichardEwing.io Founder &amp; CTO Security Clearance Badge.
        </p>
      </header>

      <Suspense
        fallback={
          <div className="max-w-3xl mx-auto px-6 py-12 font-mono text-xs text-[#66716a]">
            Loading Verification Registry...
          </div>
        }
      >
        <SecurityBadgeVerifyClient />
      </Suspense>
    </div>
  );
}
