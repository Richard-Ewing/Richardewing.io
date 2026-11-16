import React from 'react';
import EditorialAdSlot from '@/components/monetization/EditorialAdSlot';

export default function FailuresLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <EditorialAdSlot
        pillar="concepts"
        contextLabel="Runtime Failure Taxonomy"
        wrapperClassName="max-w-4xl mx-auto px-6 pb-16 pt-4"
      />
    </>
  );
}
