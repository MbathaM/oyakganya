import type { Metadata } from "next";
import { Home } from "@/app/(pages)/_components/home";

export const metadata: Metadata = {
  title: "Strategic HR Consulting & Leadership Coaching",
  description:
    "Oyakganya Consulting Hub is a transformation-driven coaching and HR consulting practice dedicated to elevating individuals and organisations.",
};

export default function HomePage() {

  return (
    <Home />
  );
}
