import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Richard Ewing',
    default: 'Executive Workspace | Richard Ewing',
  },
  description: 'Interactive executive browser workspace for running P&L models, AI pricing simulations, and boardroom governance audits by Richard Ewing.',
  robots: { index: false, follow: false },
};

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
