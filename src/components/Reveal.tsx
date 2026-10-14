"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper. Server markup is fully visible; the hidden state is
 * applied from JS on mount only for elements below the fold, so there is no
 * flash and nothing is hidden without JavaScript. Respects reduced motion.
 */
export function Reveal({
  children,
  className = "",
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  /**
   * Animate the items of the single list/grid inside the wrapper one after
   * another (grandchildren), instead of the wrapper as a block.
   */
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    // Already on screen at mount (e.g. above the fold): leave it alone.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.dataset.reveal = "hidden";
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.reveal = "shown";
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${stagger ? "reveal-stagger" : "reveal"} ${className}`}>
      {children}
    </div>
  );
}
