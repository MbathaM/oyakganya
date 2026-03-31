"use client"
import { ReactNode } from "react";
import { TransitionProvider } from "@/hooks/use-transition";
import ChatWidget from "@/components/chat-widget";

export function Providers({
  children,
}: {
  children: ReactNode;
}) {

  return (
    <TransitionProvider>
      {children}
      <ChatWidget />
    </TransitionProvider>

  );
}
