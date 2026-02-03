import { Metadata } from 'next';
import ToolsPage from './content';

export const metadata: Metadata = {
  title: 'Engineering Diagnostic Tools | Richard Ewing',
  description: 'Free forensic engineering tools. Calculate PDI, Revenue Per Engineer (APER), AI Unit Economics (AUEB), and Valuation Risk (EV-SE).',
  openGraph: {
    title: 'Engineering Diagnostic Tools | Boardroom-Ready Insights',
    description: 'Stop guessing. Get the exact numbers you need to defend your engineering strategy.',
    url: 'https://richardewing.io/tools',
  },
};

export default function Page() {
  return <ToolsPage />;
}
