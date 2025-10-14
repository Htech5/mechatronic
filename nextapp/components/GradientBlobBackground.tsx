"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Decorative animated gradient blobs, inspired by reactbits.dev "Aurora" style
 * backgrounds. Purely decorative, aria-hidden, sits behind content.
 */
export default function GradientBlobBackground() {
  const blobA = useRef<HTMLDivElement>(null);
  const blobB = useRef<HTMLDivElement>(null);
  const blobC = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } });
    tl.to(blobA.current, { x: 60, y: -40, scale: 1.15, duration: 8 }, 0)
      .to(blobB.current, { x: -50, y: 50, scale: 1.1, duration: 10 }, 0)
      .to(blobC.current, { x: 30, y: 30, scale: 0.9, duration: 9 }, 0);
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        ref={blobA}
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl"
      />
      <div
        ref={blobB}
        className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-cyan-400/25 blur-3xl"
      />
      <div
        ref={blobC}
        className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl"
      />
    </div>
  );
}
