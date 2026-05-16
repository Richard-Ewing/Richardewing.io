import React from 'react';
import RelatedFailures from './RelatedFailures';
import RelatedSkills from './RelatedSkills';
import RelatedDiagnostics from './RelatedDiagnostics';
import RuntimeMappings from './RuntimeMappings';

interface GovernancePathwaysProps {
  relatedFailures?: string[];
  relatedSkills?: string[];
  relatedDiagnostics?: string[];
  exogramMapping?: string;
}

export default function GovernancePathways({
  relatedFailures,
  relatedSkills,
  relatedDiagnostics,
  exogramMapping
}: GovernancePathwaysProps) {
  
  const hasPathways = 
    (relatedFailures && relatedFailures.length > 0) || 
    (relatedSkills && relatedSkills.length > 0) || 
    (relatedDiagnostics && relatedDiagnostics.length > 0) || 
    exogramMapping;

  if (!hasPathways) return null;

  return (
    <section className="mt-16 pt-12 border-t border-zinc-200">
      <div className="mb-8">
        <h2 className="text-2xl font-grotesk font-bold text-zinc-950">Ontology Pathways</h2>
        <p className="text-sm font-semibold text-zinc-600 mt-2">
          Explore the structurally connected systems, failures, and controls related to this concept.
        </p>
      </div>

      <div className="space-y-4">
        {relatedFailures && relatedFailures.length > 0 && (
          <RelatedFailures slugs={relatedFailures} />
        )}
        
        {relatedSkills && relatedSkills.length > 0 && (
          <RelatedSkills slugs={relatedSkills} />
        )}

        {relatedDiagnostics && relatedDiagnostics.length > 0 && (
          <RelatedDiagnostics slugs={relatedDiagnostics} />
        )}

        {exogramMapping && (
          <RuntimeMappings mapping={exogramMapping} />
        )}
      </div>
    </section>
  );
}
