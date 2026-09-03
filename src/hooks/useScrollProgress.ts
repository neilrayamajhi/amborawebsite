import { useEffect, type RefObject } from 'react';

export type ScrollProgressOptions = {
  /**
   * How much of a viewport-height to start counting *before* the sticky pin
   * engages (section top hits viewport top). Higher = reveals sooner while
   * content is still entering. Default 0.55.
   */
  leadIn?: number;
  /**
   * Fraction of the sticky hold (0–1) at which progress reaches 1.
   * Lower = finishes early in the pin so content is fully revealed while
   * you're still looking at it — not as you scroll away. Default 0.5.
   */
  completeBy?: number;
};

/**
 * Writes a 0→1 CSS custom property on `ref.current` as the element scrolls.
 *
 * Tuned for sticky sections (tall outer wrapper + sticky 100vh inner):
 * progress climbs while the section enters, and reaches 1 about halfway
 * through the sticky hold — so reveals finish *as you arrive*, not as you leave.
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  varName: string,
  options: ScrollProgressOptions = {},
) {
  const leadIn = options.leadIn ?? 0.55;
  const completeBy = options.completeBy ?? 0.5;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const compute = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const pinTravel = Math.max(1, r.height - vh);

      // 0 when section top is `leadIn * vh` below the viewport top
      // 1 when we've scrolled `completeBy` of the sticky hold
      const leadPx = leadIn * vh;
      const range = pinTravel * completeBy + leadPx;
      const scrolled = -r.top + leadPx;
      const p = Math.min(1, Math.max(0, scrolled / range));
      el.style.setProperty(varName, p.toFixed(4));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref, varName, leadIn, completeBy]);
}
