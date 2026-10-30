"use client";

import { Children, useEffect, useRef } from "react";

/**
 * Converts vertical scroll into a horizontal right-to-left slide.
 * Scrolling UP on the first slide or DOWN on the last slide
 * behaves like normal scroll (page moves naturally).
 *
 * smooth: lerp factor (0.04 = very smooth, 0.12 = snappier)
 */
export default function HorizontalScroller({ children, smooth = 0.07 }) {
  const slides = Children.toArray(children);
  const count  = slides.length;

  const wrapRef   = useRef(null);
  const trackRef  = useRef(null);
  const slideRefs = useRef([]);
  const stateRef  = useRef({ target: 0, current: 0 });

  useEffect(() => {
    const wrap  = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    let raf;

    /* ── measure scroll progress ── */
    const measure = () => {
      const scrollable = wrap.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const top = wrap.getBoundingClientRect().top;
      // p: 0 = first slide fully visible, 1 = last slide fully visible
      const p = Math.min(Math.max(-top / scrollable, 0), 1);
      stateRef.current.target = p * (count - 1);
    };

    /* ── rAF loop: lerp current → target ── */
    const tick = () => {
      const s    = stateRef.current;
      const diff = s.target - s.current;

      if (Math.abs(diff) > 0.0003) {
        s.current += diff * smooth;
      } else {
        s.current = s.target;
      }

      // move the whole track horizontally
      track.style.transform = `translate3d(${(-s.current * 100) / count}%, 0, 0)`;

      // expose --o on every slide so Px parallax works
      slideRefs.current.forEach((el, i) => {
        if (el) el.style.setProperty("--o", (i - s.current).toFixed(4));
      });

      raf = requestAnimationFrame(tick);
    };

    // initialise without a jump
    measure();
    stateRef.current.current = stateRef.current.target;
    raf = requestAnimationFrame(tick);

    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [count, smooth]);

  return (
    /*
      Total height = slides × 100vh
      → gives enough scroll room for all slides in both directions.
    */
    <div
      ref={wrapRef}
      className="relative"
      style={{ height: `${count * 100}svh` }}
    >
      {/* sticky viewport — pinned while user scrolls through the scroller */}
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* horizontal track — shifted left/right by transform */}
        <div
          ref={trackRef}
          className="flex h-full will-change-transform"
          style={{ width: `${count * 100}%` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              ref={(el) => (slideRefs.current[i] = el)}
              className="relative h-full shrink-0 overflow-hidden"
              style={{ width: `${100 / count}%` }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
