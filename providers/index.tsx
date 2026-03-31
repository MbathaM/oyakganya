"use client"
import { ReactNode } from "react";
import { TransitionProvider } from "@/hooks/use-transition";

export function Providers({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <TransitionProvider>
      {children}
    </TransitionProvider>
  );
}
