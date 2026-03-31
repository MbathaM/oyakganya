'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { type ReactNode, useRef, useState, useEffect } from 'react';

import { useTransition } from '@/hooks/use-transition';
import { usePathname } from 'next/navigation';

interface TransitionProps {
  children: ReactNode;
  className?: string;
}

export function TransitionComponent({ children, className }: TransitionProps) {
  const pathname = usePathname();
  const { toggleCompleted } = useTransition();
  const nodeRef = useRef<HTMLDivElement>(null);

  const [displayedChildren, setDisplayedChildren] = useState<ReactNode>(children);
  const [displayedPath, setDisplayedPath] = useState(pathname);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (pathname === displayedPath) return;
    if (isAnimating.current) return;
    isAnimating.current = true;

    const node = nodeRef.current;
    if (!node) {
      setDisplayedChildren(children);
      setDisplayedPath(pathname);
      isAnimating.current = false;
      return;
    }

    toggleCompleted(false);

    // Subtle exit animation (slide right + fade)
    gsap.timeline({
      onComplete: () => {
        setDisplayedChildren(children);
        setDisplayedPath(pathname);
      },
    })
    .to(node, {
      xPercent: 4,
      autoAlpha: 0,
      duration: 0.18,
      ease: 'power1.inOut',
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useGSAP(
    () => {
      const node = nodeRef.current;
      if (!node) return;

      // Subtle enter animation (from left + fade)
      gsap.set(node, { autoAlpha: 0, xPercent: -4 });

      gsap.timeline({
        onComplete: () => {
          toggleCompleted(true);
          isAnimating.current = false;
        },
      })
      .to(node, {
        autoAlpha: 1,
        xPercent: 0,
        duration: 0.32,
        ease: 'power1.out',
        delay: 0.05,
      });
    },
    { scope: nodeRef, dependencies: [displayedPath] }
  );

  return (
    <div
      ref={nodeRef}
      style={{ position: 'relative', width: '100%' }}
      className={className}
    >
      {displayedChildren}
    </div>
  );
}