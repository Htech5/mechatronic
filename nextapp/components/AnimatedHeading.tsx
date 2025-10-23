"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * GSAP text-reveal heading: splits text into words and animates them
 * up + fade in on mount, reactbits.dev "SplitText" style.
 */
export default function AnimatedHeading({
  text,
  as = "h1",
  className = "",
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLSpanElement>("span.word");
    gsap.fromTo(
      words,
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.06, ease: "power3.out" }
    );
  }, [text]);

  const content = text.split(" ").map((word, i) => (
    <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
      <span className="word inline-block">{word}&nbsp;</span>
    </span>
  ));

  if (as === "h2") {
    return (
      <h2 ref={ref} className={className}>
        {content}
      </h2>
    );
  }
  if (as === "h3") {
    return (
      <h3 ref={ref} className={className}>
        {content}
      </h3>
    );
  }
  return (
    <h1 ref={ref} className={className}>
      {content}
    </h1>
  );
}
