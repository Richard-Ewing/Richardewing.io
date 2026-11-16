import React from 'react';
import EditorialAdSlot from '@/components/monetization/EditorialAdSlot';

export default function FrameworkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <EditorialAdSlot
        pillar="concepts"
        contextLabel="Canonical Architecture Framework"
        wrapperClassName="max-w-4xl mx-auto px-6 pb-16 pt-4"
      />
    </>
  );
}
