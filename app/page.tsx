import type { Metadata } from 'next';
import SiteHeader from '@/components/home/SiteHeader';
import EditorialHero from '@/components/home/EditorialHero';
import CapitalFlowDiagram from '@/components/home/CapitalFlowDiagram';
import MethodRows from '@/components/home/MethodRows';
import UnitEconomicsExperiment from '@/components/home/UnitEconomicsExperiment';
import EvidenceLinks from '@/components/home/EvidenceLinks';
import ThesisStatement from '@/components/home/ThesisStatement';
import EngagementCTA from '@/components/home/EngagementCTA';
import SiteFooter from '@/components/home/SiteFooter';

export const metadata: Metadata = {
  title: 'AI Economist & Enterprise R&D Capital Audits | Richard Ewing',
  description: 'Richard Ewing helps organizations measure, govern, and improve the economics of enterprise AI.',
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <EditorialHero />
        <ThesisStatement />
        <CapitalFlowDiagram />
        <MethodRows />
        <UnitEconomicsExperiment />
        <EvidenceLinks />
        <EngagementCTA />
      </main>
      <SiteFooter />
    </>
  );
}
