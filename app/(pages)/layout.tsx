import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ReactNode } from 'react';
import { TransitionComponent } from '@/components/transition';

export default async function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 relative">
        <TransitionComponent>
          {children}
        </TransitionComponent>

        <SiteFooter />
      </main>
    </div>
  );
}
