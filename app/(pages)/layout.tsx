import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ReactNode } from 'react';
import { TransitionComponent } from '@/components/transition';
import ChatWidget from '@/components/chat-widget';
import { CountdownBlocker } from '@/components/countdown-blocker';

export default async function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <CountdownBlocker>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 relative">
          <TransitionComponent>
            {children}
          </TransitionComponent>
          <ChatWidget />
          <SiteFooter />
        </main>
      </div>
    </CountdownBlocker>
  );
}
