import React from 'react';
import EditorialAdSlot from '@/components/monetization/EditorialAdSlot';

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <EditorialAdSlot
        pillar="blog"
        contextLabel="Published Essays & Framework Briefings"
        wrapperClassName="max-w-4xl mx-auto px-6 pb-16 pt-4"
      />
    </>
  );
}
