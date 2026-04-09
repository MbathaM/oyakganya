"use client";

import { useState, useEffect } from "react";

export function CountdownBlocker({ children }: { children: React.ReactNode }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isReady, setIsReady] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const clientTimeout = setTimeout(() => setIsClient(true), 0);
    const targetDate = new Date("2026-05-01T00:00:00").getTime();

    // Initial check
    const now = new Date().getTime();
    if (targetDate - now <= 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsReady(true);
      return;
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setIsReady(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(clientTimeout);
    };
  }, []);

  if (!isClient) return null; // Avoid hydration mismatch

  if (isReady) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-primary text-white flex flex-col items-center justify-center p-4 min-h-screen overflow-hidden">
      {/* Video Background Layer matching the site's Hero section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="min-w-full min-h-full absolute object-cover"
          poster="/poster.jpeg"
        >
          <source
            src="/video/project.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlays for readability and branding */}
        <div className="absolute inset-0 bg-primary/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      </div>

      <div className="relative z-10 text-center animate-in fade-in zoom-in duration-1000 max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-accent"></div>
          <span className="text-accent font-bold tracking-widest uppercase text-xs">Transformation-Driven Consulting</span>
          <div className="h-px w-12 bg-accent"></div>
        </div>

        <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight text-white mb-6">
          Oyakganya <span className="text-accent">Consulting Hub</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 font-light mb-16">
          We are launching our new experience shortly. Stay tuned for purposeful transformation.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pt-8">
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md shadow-2xl p-8 rounded-sm border border-white/20">
            <span className="text-5xl md:text-7xl font-bold font-serif text-white mb-2">{timeLeft.days}</span>
            <span className="text-xs md:text-sm text-accent uppercase tracking-widest font-bold">Days</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md shadow-2xl p-8 rounded-sm border border-white/20">
            <span className="text-5xl md:text-7xl font-bold font-serif text-white mb-2">{timeLeft.hours}</span>
            <span className="text-xs md:text-sm text-accent uppercase tracking-widest font-bold">Hours</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md shadow-2xl p-8 rounded-sm border border-white/20">
            <span className="text-5xl md:text-7xl font-bold font-serif text-white mb-2">{timeLeft.minutes}</span>
            <span className="text-xs md:text-sm text-accent uppercase tracking-widest font-bold">Minutes</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md shadow-2xl p-8 rounded-sm border border-white/20">
            <span className="text-5xl md:text-7xl font-bold font-serif text-white mb-2">{timeLeft.seconds}</span>
            <span className="text-xs md:text-sm text-accent uppercase tracking-widest font-bold">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
