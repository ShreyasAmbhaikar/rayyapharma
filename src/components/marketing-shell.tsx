import type { ReactNode } from 'react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { WhatsAppFloat } from '@/components/whatsapp-float';

type MarketingShellProps = {
  currentPath: string;
  children: ReactNode;
};

export function MarketingShell({ currentPath, children }: MarketingShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader currentPath={currentPath} />
      <main id="main-content" className={`flex-1 ${currentPath === '/' ? 'bg-surface-container-low' : ''}`}>
        {children}
      </main>
      <WhatsAppFloat />
      <SiteFooter />
    </div>
  );
}
