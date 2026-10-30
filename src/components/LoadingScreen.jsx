"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 1200;
    const interval = 30;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => onComplete?.(), 700);
          }, 400);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex flex-col items-center justify-center
        bg-royal-cream
        bg-[url('/images/backgroud.png')] bg-repeat bg-auto
        px-6
        transition-opacity duration-700
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      {/* ── Logo ── */}
      <Image
        src="/logo.png"
        alt="Royal Treasure Logo"
        width={210}
        height={210}
        priority
        className="object-contain w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52"
      />

      {/* ── Tagline ── */}
      <p
        className="
          text-center text-royal uppercase tracking-[0.08em]
          text-xs sm:text-sm md:text-base lg:text-lg
          mt-10 mb-5 px-4
        "
      >
        Uncovering Stories, Preserved Through Time
      </p>

      {/* ── Progress Bar ── */}
      <div className="flex flex-col items-center gap-2 w-full max-w-xs sm:max-w-sm md:max-w-lg px-4">
        {/* Percentage */}
        <span className="text-xs sm:text-sm text-royal-gold">
          {Math.round(progress)}%
        </span>

        {/* Track */}
        <div className="w-full h-[2px] bg-royal-border rounded-full overflow-hidden">
          {/* Fill */}
          <div
            className="h-full bg-royal rounded-full transition-[width] duration-[30ms] ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
