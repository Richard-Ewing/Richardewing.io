import React from 'react';
import EditorialAdSlot from '@/components/monetization/EditorialAdSlot';

export default function AnswersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <EditorialAdSlot
        pillar="glossary"
        contextLabel="Executive Q&A Knowledge Spoke"
        wrapperClassName="max-w-4xl mx-auto px-6 pb-16 pt-4"
      />
    </>
  );
}
