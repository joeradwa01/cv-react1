import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref to attach to any element and a boolean `visible`
 * that flips to true once the element enters the viewport.
 * Once visible it stays visible (no re-hiding on scroll out).
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}
