import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Activate Your Enterprise Vault Seat',
  description: 'Activate your enterprise seat to download Excel P&L models, AI pricing calculators, and board defense templates inside the Richard Ewing Vault.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function VaultJoinPage() {
  return <Content />;
}
