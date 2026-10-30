"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

// ─── Parallax wrapper ─────────────────────────────────────────────────────────
export const Px = ({ speed = 10, className = "", style = {}, children }) => (
  <div
    className={className}
    style={{
      transform: `translate3d(calc(var(--o, 0) * ${speed}vw), 0, 0)`,
      willChange: "transform",
      backfaceVisibility: "hidden",
      ...style,
    }}
  >
    {children}
  </div>
);

// ─── Vertical slide wrapper ───────────────────────────────────────────────────
export function VerticalSlide({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) ref.current.style.setProperty("--o", "0");
  }, []);
  return (
    <div ref={ref} className="relative w-full overflow-hidden" style={{ minHeight: "100svh" }}>
      {children}
    </div>
  );
}

// ─── Shared styles ────────────────────────────────────────────────────────────
const T       = "font-['Times_New_Roman']";
const eyebrow = `${T} text-[10px] sm:text-[11px] lg:text-[clamp(9px,0.9vw,14px)] uppercase leading-[1.6] tracking-[0.15em] text-[#2b2b2b]`;
const body    = `${T} text-[12px] sm:text-[13px] lg:text-[clamp(12px,0.97vw,15px)] leading-[1.65] text-[#2b2b2b]`;
const h2      = `${T} font-normal uppercase text-[22px] sm:text-[28px] lg:text-[clamp(22px,2.65vw,46px)] leading-[1.2]`;
const h1      = `${T} font-normal uppercase text-[28px] sm:text-[36px] lg:text-[clamp(30px,3.9vw,66px)] leading-[1.1]`;
const cursive = "font-['Cedarville_Cursive'] text-[#2b2b2b]/60 leading-[1.6]";
const MAROON  = "text-[#651A1A]";
const ORANGE  = "text-[#B45F16]";

// ─── Arrow / CTA ──────────────────────────────────────────────────────────────
const Arrow = () => (
  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#2b2b2b] text-[10px] leading-none">›</span>
);
const CTA = ({ children, column = false }) => (
  <button className={`${eyebrow} flex ${column ? "flex-col items-start gap-1" : "items-center gap-2"} hover:opacity-70 transition-opacity duration-300`}>
    <span>{children}</span>
    <Arrow />
  </button>
);

// ─── Slide Nav ────────────────────────────────────────────────────────────────
function SlideNav({ active, total = 5, hidden = false }) {
  if (hidden) return null;
  return (
    <div className="absolute bottom-[3%] right-[4%] z-20 flex items-center gap-[2vw] lg:gap-[1.1vw]">
      {Array.from({ length: total }).map((_, i) => {
        const on = i + 1 === active;
        return (
          <div key={i} className="flex items-center gap-[1vw] lg:gap-[0.55vw]">
            <span className={`${T} transition-all duration-500 ${on ? "text-[13px] text-[#2b2b2b]" : "text-[9px] text-[#2b2b2b]/50"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className={`relative h-px bg-[#2b2b2b]/30 transition-all duration-500 ${on ? "w-[8vw] lg:w-[10vw]" : "w-[3vw] lg:w-[4vw]"}`}>
              {on && (
                <>
                  <div className="absolute inset-0 bg-[#2b2b2b]" />
                  <span className="absolute -right-[3px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#2b2b2b]" />
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 1 — HERO
// ═══════════════════════════════════════════════════════════════════════════════
export function HeroSlide({ vertical = false }) {
  return (
    <section className="relative h-full min-h-[100svh] w-full overflow-hidden">

      {/* ── MOBILE layout (< lg) ── */}
      <div className="lg:hidden flex flex-col h-full min-h-[100svh] px-5 pt-6 pb-16">
        {/* eyebrow */}
        <p className={eyebrow}>Some Treasures Are Not Found.</p>

        {/* heading */}
        <h1 className={`${h1} ${MAROON} mt-2`}>
          They Are<br />
          <span className={ORANGE}>Discovered</span>
        </h1>

        {/* body */}
        <p className={`${body} mt-3 max-w-[80%]`}>
          A Journey Through Objects, Spaces, Stories And Memories Collected Across Time.
        </p>

        {/* cta */}
        <div className="mt-4">
          <CTA>Scroll to Begin</CTA>
        </div>

        {/* cursive top-right */}
        <p className={`${cursive} text-[13px] self-end mt-2 mr-2`}>
          A finer way to experience time.
        </p>

        {/* images row */}
        <div className="relative flex-1 mt-4">
          <img src="/images/hero-left.png" alt="Royal Treasure store"
            className="absolute bottom-5 left-0 w-[62%] object-contain" />
          <p className={`${cursive} text-[11px] absolute left-[8%] top-[30%] z-10 max-w-[30%]`}>
            Objects hold the stories we forgot.
          </p>
          <img src="/images/hero-right.png" alt="Heritage palace"
            className="absolute  -top-[8%] right-0 w-[65%] object-contain" />
        </div>

        {/* bottom meta */}
        <div className="mt-auto pt-2">
          <p className={eyebrow}>A World, Collected Over Time.</p>
          <div className="my-1 h-px w-[40vw] bg-[#2b2b2b]/30" />
          <p className={eyebrow}>Jaipur, Rajasthan · India</p>
        </div>
      </div>

      {/* ── DESKTOP layout (lg+) ── absolute positioned, unchanged ── */}
      <Px speed={3} className="hidden lg:block absolute left-[5.3%] top-[5.5%] z-10">
        <p className={eyebrow}>Some Treasures Are Not Found.</p>
      </Px>
      <Px speed={4} className="hidden lg:block absolute left-[5.3%] top-[10.5%] z-10">
        <h1 className={`${h1} ${MAROON}`}>They Are<br /><span className={ORANGE}>Discovered</span></h1>
      </Px>
      <Px speed={5} className="hidden lg:block absolute left-[31.8%] top-[21.7%] z-10">
        <p className={`${body} text-[clamp(14px,1.19vw,19px)]`}>
          A Journey Through Objects, Spaces, Stories<br />And Memories Collected Across Time.
        </p>
      </Px>
      <Px speed={4} className="hidden lg:block absolute left-[5.3%] top-[32.5%] z-10">
        <CTA>Scroll to Begin</CTA>
      </Px>
      <Px speed={10} className="hidden lg:block absolute right-[9.5%] top-[5%] z-10">
        <p className={`${cursive} text-[clamp(16px,1.47vw,23px)]`}>A finer way to experience time.</p>
      </Px>
      <Px speed={0} className="hidden lg:block absolute bottom-7 left-[1%] w-[42%]">
        <img src="/images/hero-left.png" alt="Royal Treasure store" className="h-auto w-full object-contain" />
      </Px>
      <Px speed={4} className="hidden lg:block absolute left-[24.5%] top-[37%] z-10">
        <p className={`${cursive} text-[clamp(16px,1.55vw,22px)]`}>Objects hold the stories<br />we forgot.</p>
      </Px>
      <Px speed={0} className="hidden lg:block absolute bottom-[17%] right-0 w-[53%]">
        <img src="/images/hero-right.png" alt="Heritage palace" className="h-auto w-full object-contain" />
      </Px>
      <Px speed={3} className="hidden lg:block absolute bottom-[4%] left-[44.8%] z-10">
        <p className={eyebrow}>A World, Collected Over Time.</p>
        <div className="my-[0.9vw] h-px w-[14vw] bg-[#2b2b2b]/40" />
        <p className={eyebrow}>Jaipur, Rajasthan · India</p>
        <p className={eyebrow}>26.9124° N · 75.7873° E</p>
      </Px>

      <SlideNav active={1} hidden={vertical} />
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 2 — STORY
// ═══════════════════════════════════════════════════════════════════════════════
export function StorySlide({ vertical = false }) {
  return (
    <section className="relative h-full min-h-[100svh] w-full overflow-hidden">

      {/* ── MOBILE ── */}
      <div className="lg:hidden flex flex-col h-full min-h-[100svh] px-5 pt-6 pb-16">
        <p className={eyebrow}>The Beginning</p>
        <h2 className={`${h2} ${MAROON} mt-2`}>
          Every Story<br /><span className={ORANGE}>Begins Somewhere</span>
        </h2>
        <p className={`${body} font-bold mt-4`}>Royale Treasure began with more than a collection of objects</p>
        <p className={`${body} mt-2`}>
          It began with curiosity - for forgotten spaces, extraordinary craftsmanship, and stories waiting to be remembered.
        </p>
        <div className="mt-4"><CTA>Explore the Story</CTA></div>

        {/* image */}
        <div className="relative flex-1 mt-4 min-h-[200px]">
          <img src="/images/story-right.png" alt="Story illustration"
            className="absolute top-[3%] right-0 w-[85%] object-contain" />
          <p className={`${cursive} text-[17px] absolute bottom-[25%] left-0 max-w-[60%]`}>
            Old doors open new stories.
          </p>
        </div>

        {/* tags */}
        <ul className={`${eyebrow} flex flex-wrap gap-x-4 gap-y-1 mt-1`}>
          {["Objects", "Space", "People", "Craftsmanship", "A Richer Tomorrow"].map((t) => (
            <li key={t} className="text-[#2b2b2b]/60">{t}</li>
          ))}
        </ul>
      </div>

      {/* ── DESKTOP ── */}
      <Px speed={0} className="hidden lg:block absolute bottom-[14.4%] left-0 w-[15.3%] overflow-hidden">
        <img src="/images/story-left.png" alt="" className="h-auto w-full object-contain translate-x-[-41%]" />
      </Px>
      <Px speed={5} className="hidden lg:block absolute left-[17.8%] top-[22.8%] z-10">
        <p className={eyebrow}>The Beginning</p>
      </Px>
      <Px speed={5} className="hidden lg:block absolute left-[17.8%] top-[27.6%] z-10">
        <h2 className={`${h2} ${MAROON}`}>Every Story<br /><span className={ORANGE}>Begins Somewhere</span></h2>
      </Px>
      <Px speed={6} className="hidden lg:block absolute left-[17.8%] top-[47.3%] z-10 w-[30%]">
        <p className={`${body} font-bold`}>Royal Treasure began with more than a collection of objects</p>
        <p className={`${body} mt-[1.6vw]`}>
          It began with curiosity - for forgotten spaces, extraordinary craftsmanship, and stories waiting to be remembered.
        </p>
      </Px>
      <Px speed={6} className="hidden lg:block absolute left-[17.8%] top-[62.8%] z-10">
        <CTA>Explore the Story</CTA>
      </Px>
      <Px speed={7} className="hidden lg:block absolute left-[17.8%] top-[76.5%] z-10">
        <ul className={`${eyebrow} flex flex-col`}>
          {["Objects", "Space", "People", "Craftsmanship", "A Richer Tomorrow"].map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Px>
      <Px speed={9} className="hidden lg:block absolute left-[34%] top-[80%] z-10">
        <p className={`${cursive} text-[clamp(14px,1.9vw,28px)]`}>Old doors open<br />new stories.</p>
      </Px>
      <Px speed={0} className="hidden lg:block absolute bottom-[10%] right-0 w-[51%]">
        <img src="/images/story-right.png" alt="Story illustration" className="h-auto w-full object-contain" />
      </Px>

      <SlideNav active={2} hidden={vertical} />
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 3 — FOUNDER
// ═══════════════════════════════════════════════════════════════════════════════
export function FounderSlide({ vertical = false }) {
  const stats = [
    { num: "25+",       label: "Years of\nExperience" },
    { num: "10+",       label: "Countries &\nConnections" },
    { num: "50+",       label: "Heritage\nStories" },
    { num: "Countless", label: "Objects\nPreserved" },
  ];
  const cell = (i) => ["pb-3 pr-3 border-r border-b","pb-3 pl-3 border-b","pt-3 pr-3 border-r","pt-3 pl-3"][i];

  return (
    <section className="relative h-full min-h-[100svh] w-full overflow-hidden">

      {/* ── MOBILE ── */}
      <div className="lg:hidden flex flex-col h-full min-h-[100svh] px-5 pt-6 pb-16">
        <p className={eyebrow}>The Story Behind the Treasure</p>
        <h2 className={`${h2} ${MAROON} mt-2`}>
          A Lifetime<br /><span className={ORANGE}>Of Collecting Stories</span>
        </h2>

        <p className={`${body} mt-4`}>
          For over two decades, <strong>Narendra Singh Bijoliya</strong> has followed a simple belief:
        </p>
        <p className={`${body} mt-2 font-bold`}>
          "The finest things are made to last if someone cares enough to preserve them."
        </p>

        <div className="mt-4"><CTA>Meet the Founder</CTA></div>

        {/* stats grid */}
        <div className="mt-4 grid grid-cols-2 w-[70%]">
          {stats.map((s, i) => (
            <div key={s.num} className={`${cell(i)} border-[#2b2b2b]/30`}>
              <p className={`${T} text-[18px] font-bold leading-none ${ORANGE}`}>{s.num}</p>
              <p className={`${eyebrow} mt-1 whitespace-pre-line`}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* image + quote */}
        <div className="relative flex-1 mt-4 min-h-[160px]">
          <img src="/images/founder-right.png" alt="Founder"
            className="absolute bottom-0 right-0 w-[55%] object-contain" />
          <div className="absolute bottom-[40%] left-0 max-w-[45%]">
            <p className={`${T} text-[11px] font-bold leading-[1.6] ${MAROON}`}>
              "The finest things were made to last if someone cares enough to keep them."
            </p>
            <p className={`${cursive} text-[11px] ${ORANGE} mt-1`}>Vikramaditya Singh Bijoliya</p>
          </div>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <Px speed={0} className="hidden lg:block absolute bottom-[11%] left-0 w-[15.5%]">
        <img src="/images/founder-left.png" alt="" className="h-auto w-full object-contain translate-x-[-29.6%]" />
      </Px>
      <Px speed={5} className="hidden lg:block absolute left-[18.4%] top-[22.8%] z-10">
        <p className={eyebrow}>The Story Behind the Treasure</p>
      </Px>
      <Px speed={5} className="hidden lg:block absolute left-[18.4%] top-[27.6%] z-10">
        <h2 className={`${h2} ${MAROON}`}>A Lifetime<br /><span className={ORANGE}>Of Collecting Stories</span></h2>
      </Px>
      <Px speed={6} className="hidden lg:block absolute left-[18.4%] top-[46.5%] z-10 w-[36%]">
        <p className={body}>For over two decades, <strong>Narendra Singh Bijoliya</strong> has followed a simple belief:</p>
        <p className={`${body} mt-[1.6vw] font-bold`}>"The finest things are made to last if someone cares enough to preserve them."</p>
      </Px>
      <Px speed={6} className="hidden lg:block absolute left-[18.4%] top-[59.8%] z-10">
        <CTA>Meet the Founder</CTA>
      </Px>
      <Px speed={7} className="hidden lg:block absolute left-[18.4%] top-[66.5%] z-10 w-[21%]">
        <div className="grid grid-cols-[40%_60%]">
          {stats.map((s, i) => (
            <div key={s.num} className={`${["pb-[1vw] pr-[1.5vw] border-r border-b","pb-[1vw] pl-[2.6vw] border-b","pt-[1vw] pr-[1.5vw] border-r","pt-[1vw] pl-[2.6vw]"][i]} border-[#2b2b2b]/40`}>
              <p className={`${T} text-[clamp(14px,1.45vw,22px)] font-bold leading-none ${ORANGE}`}>{s.num}</p>
              <p className={`${eyebrow} mt-[0.6vw] whitespace-pre-line`}>{s.label}</p>
            </div>
          ))}
        </div>
      </Px>
      <Px speed={10} className="hidden lg:block absolute left-[46%] top-[71%] z-10">
        <p className={`${T} text-[clamp(11px,1.2vw,18px)] font-bold leading-[1.7] ${MAROON}`}>
          "The finest things were made to last<br />if someone cares enough to keep them."
        </p>
        <p className={`${cursive} mt-[0.6vw] pl-[1.6vw] text-[clamp(13px,1.5vw,22px)] ${ORANGE}`}>Vikramaditya Singh Bijoliya</p>
      </Px>
      <Px speed={0} className="hidden lg:block absolute bottom-[15%] right-[5.5%] w-[27.5%]">
        <img src="/images/founder-right.png" alt="Founder" className="h-auto w-full object-contain" />
      </Px>

      <SlideNav active={3} hidden={vertical} />
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 4 — COLLECTION
// ═══════════════════════════════════════════════════════════════════════════════
export function CollectionSlide({ vertical = false }) {
  return (
    <section className="relative h-full min-h-[100svh] w-full overflow-hidden">

      {/* ── MOBILE ── */}
      <div className="lg:hidden flex flex-col h-full min-h-[100svh] px-5 pt-6 pb-16">
        <p className={eyebrow}>The Collection</p>
        <h2 className={`${h2} ${MAROON} mt-2`}>
          Every Object<br /><span className={ORANGE}>Has Lived a Life</span>
        </h2>
        <p className={`${body} font-bold mt-4`}>Some have travelled across generations.</p>
        <p className={`${body} mt-1`}>Some have witnessed changing homes and disappearing traditions.</p>
        <p className={`${body} mt-1`}>Some were forgotten. Until they were found again.</p>
        <div className="mt-4">
          <Link href="/shop-heritage" className={`${eyebrow} flex items-center gap-2 hover:opacity-70 transition-opacity duration-300`}>
            <span>Explore the Collection</span>
            <Arrow />
          </Link>
        </div>

        {/* images */}
        <div className="relative flex-1 mt-4 min-h-[200px]">
          <img src="/images/collection-left.png" alt="Collection objects"
            className="absolute bottom-0 left-0 w-[68%] object-contain" />
          <img src="/images/collection-right.png" alt="Heritage furniture"
            className="absolute top-[8%] right-0 w-[70%] object-contain" />
          <p className={`${cursive} text-[11px] absolute bottom-[50%] left-[5%] z-10`}>
            Objects carry the memory of places.
          </p>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <Px speed={4} className="hidden lg:block absolute left-[5.2%] top-[10%] z-10">
        <p className={eyebrow}>The Collection</p>
      </Px>
      <Px speed={4} className="hidden lg:block absolute left-[5.2%] top-[14%] z-10">
        <h2 className={`${h2} ${MAROON}`}>Every Object<br /><span className={ORANGE}>Has Lived a Life</span></h2>
      </Px>
      <Px speed={6} className="hidden lg:block absolute left-[30.3%] top-[15.5%] z-10 w-[17%]">
        <p className={`${body} font-bold`}>Some have travelled across generations.</p>
        <p className={body}>Some have witnessed changing homes and disappearing traditions.</p>
        <p className={body}>Some were forgotten. Until they were found again.</p>
      </Px>
      <Px speed={6} className="hidden lg:block absolute left-[30.3%] top-[35%] z-10">
        <Link href="/shop-heritage" className={`${eyebrow} flex flex-col items-start gap-1 hover:opacity-70 transition-opacity duration-300`}>
          <span>Explore the Collection</span>
          <Arrow />
        </Link>
      </Px>
      <Px speed={0} className="hidden lg:block absolute bottom-0 left-0 w-[34.5%]">
        <img src="/images/collection-left.png" alt="Collection objects" className="h-auto w-full object-contain" />
      </Px>
      <Px speed={0} className="hidden lg:block absolute bottom-[14%] right-0 w-[54%]">
        <img src="/images/collection-right.png" alt="Heritage furniture" className="h-auto w-full object-contain" />
      </Px>
      <Px speed={7} className="hidden lg:block absolute bottom-[7%] left-[35%] z-10">
        <p className={`${cursive} text-[clamp(13px,1.6vw,24px)]`}>Objects carry the<br />memory of places.</p>
      </Px>

      <SlideNav active={4} hidden={vertical} />
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 5 — SPACES
// ═══════════════════════════════════════════════════════════════════════════════
export function SpacesSlide({ vertical = false }) {
  return (
    <section className="relative h-full min-h-[100svh] w-full overflow-hidden">

      {/* ── MOBILE ── */}
      <div className="lg:hidden flex flex-col h-full min-h-[100svh] px-5 pt-6 pb-16">
        <p className={eyebrow}>The Spaces</p>
        <h2 className={`${h2} ${MAROON} mt-2`}>
          Spaces Do Not<br /><span className={ORANGE}>Forget</span>
        </h2>
        <p className={`${body} mt-4`}>
          Walls remember. Objects remain. And over time, a space becomes a collection of everything that has happened within it.
        </p>
        <div className="mt-4"><CTA>Step Inside</CTA></div>

        {/* images */}
        <div className="relative flex-1 mt-4 min-h-[200px]">
          <img src="/images/spaces-right.png" alt="Royal Treasure entrance"
            className="absolute top-0 right-12 w-[75%] object-contain" />
          <img src="/images/spaces-center.png" alt="Heritage space"
            className="absolute bottom-10 right-[5%] w-[40%] object-contain" />
          <img src="/images/spaces-left.png" alt=""
            className="absolute bottom-10 left-0 w-[42%] object-contain" />
        </div>

        {/* list */}
        <ul className={`${eyebrow} flex flex-wrap gap-x-3 gap-y-1 mt-3`}>
          {["Heritage Homes", "Boutique Spaces", "Private Residences", "Hospitality Spaces", "And More"].map((t) => (
            <li key={t} className="text-[#2b2b2b]/60">{t}</li>
          ))}
        </ul>

        <p className={`${cursive} text-[12px] mt-3`}>Interiors that live long.</p>
      </div>

      {/* ── DESKTOP ── */}
      <Px speed={4} className="hidden lg:block absolute left-[5.2%] top-[9.5%] z-10">
        <p className={eyebrow}>The Spaces</p>
      </Px>
      <Px speed={4} className="hidden lg:block absolute left-[5.2%] top-[12%] z-10">
        <h2 className={`${h2} ${MAROON}`}>Spaces Do Not<br /><span className={ORANGE}>Forget</span></h2>
      </Px>
      <Px speed={5} className="hidden lg:block absolute left-[5.2%] top-[31.5%] z-10 w-[25%]">
        <p className={body}>Walls remember. Objects remain. And over time, a space becomes a collection of everything that has happened within it.</p>
      </Px>
      <Px speed={5} className="hidden lg:block absolute left-[5.2%] top-[40.8%] z-10">
        <CTA>Step Inside</CTA>
      </Px>
      <Px speed={0} className="hidden lg:block absolute bottom-[4%] left-[0.3%] w-[24%]">
        <img src="/images/spaces-left.png" alt="" className="h-auto w-full object-contain" />
      </Px>
      <Px speed={0} className="hidden lg:block absolute bottom-[13%] left-[28.6%] w-[24.2%]">
        <img src="/images/spaces-center.png" alt="Heritage space" className="h-auto w-full object-contain" />
      </Px>
      <Px speed={0} className="hidden lg:block absolute right-0 top-[6%] w-[47%]">
        <img src="/images/spaces-right.png" alt="Royal Treasure entrance" className="h-auto w-full object-contain" />
      </Px>
      <Px speed={6} className="hidden lg:block absolute left-[62.2%] top-[73%] z-10">
        <ul className={`${eyebrow} flex flex-col`}>
          {["Heritage Homes", "Boutique Spaces", "Private Residences", "Hospitality Spaces", "And More"].map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Px>
      <Px speed={6} className="hidden lg:block absolute bottom-[4%] left-[38.2%] z-10">
        <p className={`${cursive} whitespace-nowrap text-[clamp(13px,1.7vw,26px)]`}>Interiors that live long.</p>
      </Px>

      <SlideNav active={5} hidden={vertical} />
    </section>
  );
}
