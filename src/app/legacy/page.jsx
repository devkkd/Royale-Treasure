"use client";

import { Fragment, useEffect, useRef, useState } from "react";

// ─── Type styles (measured from the Figma screens) ────────────────────────────
const T = "font-['Times_New_Roman']";
const MAROON = "text-[#651A1A]";
const ORANGE = "text-[#B5651D]";

const h1 = `${T} text-[clamp(27px,3.9vw,54px)] font-normal uppercase leading-[1.2] ${MAROON}`;
const h2 = `${T} text-[clamp(22px,2.6vw,44px)] font-normal uppercase leading-[1.7] ${MAROON}`;
const eyebrow = `${T} text-[clamp(10px,1.47vw,22px)] font-bold uppercase leading-[1.6] text-[#2b2b2b]`;
const bodyL = `${T} text-[clamp(10px,1.15vw,17px)] leading-[1.65] text-[#2b2b2b]`;
const bodyS = `${T} text-[clamp(10px,0.95vw,15px)] leading-[1.65] text-[#2b2b2b]`;

// Layout switches to the exact Figma positions from `lg` upwards; below that it stacks.
// Lines break like Figma on desktop and flow naturally on smaller screens.
const Lines = ({ lines }) =>
  lines.map((l, i) => (
    <Fragment key={i}>
      {l}
      {i < lines.length - 1 && (
        <>
          <span className="lg:hidden"> </span>
          <br className="hidden lg:block" />
        </>
      )}
    </Fragment>
  ));

// ─── Scroll reveal (soft fade + rise) ─────────────────────────────────────────
function Reveal({ className = "", delay = 0, children }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        on ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const expertise = [
  {
    title: ["Design", "Direction"],
    text: "Creating distinctive spaces with character, purpose, and timeless appeal.",
    icon: "/images/legacy/icon-1.png",
  },
  {
    title: ["Heritage", "Restoration"],
    text: "Preserving architectural identity while respecting traditional craftsmanship.",
    icon: "/images/legacy/icon-2.png",
  },
  {
    title: ["Project", "Consultancy"],
    text: "Providing strategic direction from concept and planning through execution.",
    icon: "/images/legacy/icon-3.png",
  },
  {
    title: ["Execution", "Leadership"],
    text: "Ensuring every detail is delivered with precision, quality, and care.",
    icon: "/images/legacy/icon-4.png",
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════════
export default function LegacyPage() {
  return (
    // pt = space for your fixed header (the Figma crop started below it) — tweak if needed
    <main className="relative w-full overflow-hidden pt-6">
      {/* ───────────────── BLOCK 1 : intro + founder + expertise heading ───────────────── */}
      <section className="relative flex flex-col gap-8 px-6 pb-10 max-lg:items-center max-lg:text-center lg:block lg:h-[89vw] lg:px-0 lg:pb-0">
        {/* title */}
        <Reveal className="lg:absolute lg:inset-x-0 lg:top-[3.4vw] lg:text-center">
          <h1 className={h1}>Our Legacy</h1>
        </Reveal>

        <Reveal delay={80} className="lg:absolute lg:inset-x-0 lg:top-[10.6vw] lg:text-center">
          <h2 className={`${T} text-[clamp(17px,2.5vw,42px)] font-normal leading-[1.3] ${ORANGE}`}>
            Preserving Stories. Restoring Beauty. Creating Timeless Spaces.
          </h2>
        </Reveal>

        <Reveal delay={160} className="lg:absolute lg:inset-x-0 lg:top-[16.1vw] lg:text-center">
          <p className={`${T} text-[clamp(10px,1.18vw,18px)] leading-[1.65] text-[#2b2b2b] lg:whitespace-nowrap`}>
            <Lines
              lines={[
                "Royal Treasure is built on a deep appreciation for history, craftsmanship, and the extraordinary objects that carry stories across generations.",
                "For us, heritage is not something to simply preserve behind glass. It is something to understand, restore, and thoughtfully bring into the present.",
              ]}
            />
          </p>
        </Reveal>

        {/* founder portrait + signature */}
        <Reveal className="w-[70%] lg:absolute lg:left-[6.2%] lg:top-[26vw] lg:w-[25.3%]">
          <img src="/images/founder-right.png" alt="Vikramaditya Singh Bijoliya" className="h-auto w-full object-contain" />
        </Reveal>

        <Reveal delay={120} className="lg:absolute lg:left-[6.2%] lg:top-[64.3vw] lg:w-[26%] lg:text-center">
          <p className="font-['Cedarville_Cursive'] text-[clamp(14px,1.95vw,30px)] leading-[1.5] text-[#2b2b2b]/70">
            Vikramaditya Singh Bijoliya
          </p>
        </Reveal>

        {/* founder text */}
        <Reveal delay={100} className="lg:absolute lg:left-[35.2%] lg:top-[25.7vw]">
          <p className={eyebrow}>The Founder</p>

          <h2 className={`${T} text-[clamp(18px,2.6vw,44px)] font-normal uppercase leading-[1.2] ${MAROON} mt-3 lg:mt-[1.55vw] lg:whitespace-nowrap`}>
            Vikramaditya Singh Bijoliya
          </h2>

          <p className={`${T} text-[clamp(14px,2.2vw,36px)] leading-[1.3] ${ORANGE} mt-3 lg:mt-[2vw]`}>Founder &amp; CEO</p>

          <div className="mx-auto mt-4 h-px w-[13.6vw] min-w-[90px] bg-[#2b2b2b]/50 lg:mx-0 lg:mt-[2.5vw]" />

          <p className={`${bodyL} mt-4 lg:mt-[2.5vw] lg:whitespace-nowrap`}>
            <Lines
              lines={[
                "Royal Treasure was founded with a vision to protect the beauty of traditional",
                "craftsmanship while giving heritage a meaningful place in contemporary spaces.",
              ]}
            />
          </p>

          <p className={`${bodyL} mt-4 lg:mt-[2.3vw] lg:whitespace-nowrap`}>
            <Lines
              lines={[
                "With years of experience working with antiques, heritage architecture, interiors,",
                <>
                  and rare artefacts, <strong>Vikramaditya Singh Bijoliya</strong> brings together historical
                </>,
                "understanding and a modern design perspective.",
              ]}
            />
          </p>

          <p className={`${bodyL} mt-4 lg:mt-[2.4vw] lg:whitespace-nowrap`}>
            <strong>His approach is guided by one belief:</strong>
            <br />
            The finest things were made to last and deserve to be cared for accordingly.
          </p>
        </Reveal>

        {/* stats */}
        <Reveal delay={220} className="flex gap-12 lg:absolute lg:left-[80.9%] lg:top-[26.5vw] lg:block">
          <div>
            <p className={`${T} text-[clamp(28px,3.9vw,64px)] leading-[1.1] ${MAROON}`}>25+</p>
            <p className={`${T} mt-[1.4vw] text-[clamp(14px,1.95vw,30px)] leading-[1.7] ${ORANGE} max-lg:mt-1`}>
              Years of
              <br />
              Experience
            </p>
          </div>

          <div className="hidden h-px w-[14.1vw] bg-[#2b2b2b]/25 lg:mt-[4.25vw] lg:block" />

          <div className="lg:mt-[3.1vw]">
            <p className={`${T} text-[clamp(28px,3.9vw,64px)] leading-[1.1] ${MAROON}`}>10+</p>
            <p className={`${T} mt-[1.4vw] text-[clamp(14px,1.95vw,30px)] leading-[1.7] ${ORANGE} max-lg:mt-1`}>
              Landmarks &amp;
              <br />
              Heritage Projects
            </p>
          </div>
        </Reveal>

        {/* floral line art (bottom right) */}
        <img
          src="/images/objects.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none hidden h-auto lg:absolute lg:left-[71.3%] lg:top-[61.6vw] lg:block lg:w-[28.7%]"
        />

        {/* expertise heading */}
        <Reveal className="lg:absolute lg:left-[5.3%] lg:top-[77.6vw]">
          <p className={eyebrow}>A Curator of Spaces, Stories &amp; Structure</p>
          <h2 className={`${T} text-[clamp(22px,2.6vw,44px)] font-normal uppercase leading-[1.2] ${MAROON} mt-3 lg:mt-[2.05vw]`}>
            Personal Expertise
          </h2>
        </Reveal>
      </section>

      {/* ───────────────── EXPERTISE COLUMNS ───────────────── */}
      <section className="grid grid-cols-2 lg:grid-cols-4">
        {expertise.map((e, i) => (
          <Reveal
            key={e.title.join("")}
            delay={i * 110}
            className={`flex flex-col items-center border-t border-[#2b2b2b]/25 px-6 pb-[1.5vw] pt-[1.9vw] text-center max-lg:py-8 lg:min-h-[21vw] lg:border-t-0 lg:px-[6.2vw] ${
              i > 0 ? "lg:border-l" : ""
            }`}
          >
            <img
              src={e.icon}
              alt=""
              aria-hidden="true"
              className={`h-[clamp(40px,5.8vw,86px)] w-auto object-contain ${i === 3 ? "lg:mt-[0.7vw]" : ""}`}
            />
            <h3 className={`${T} mt-3 text-[clamp(11px,1.45vw,20px)] font-bold leading-[1.7] text-[#2b2b2b] lg:mt-[1.25vw]`}>
              {e.title[0]}
              <br />
              {e.title[1]}
            </h3>
            <p className={`${T} mt-2 text-[clamp(9.5px,0.95vw,14px)] leading-[1.7] text-[#2b2b2b] lg:mt-[1vw]`}>{e.text}</p>
          </Reveal>
        ))}
      </section>

      {/* ───────────────── SCENE A : What we believe in ───────────────── */}
      <section className="relative flex flex-col gap-8 px-6 py-12 lg:block lg:h-[34vw] lg:px-0 lg:py-0">
        <Reveal className="lg:absolute lg:left-[5.5%] lg:top-[10.75vw]">
          <p className={eyebrow}>What We Believe In</p>
          <h2 className={`${h2} mt-2 lg:mt-[1.85vw]`}>
            Heritage is not a style,
            <br />
            it is a responsibility
          </h2>
          <p className={`${bodyS} mt-3 lg:mt-[1.8vw] lg:whitespace-nowrap`}>
            <Lines
              lines={[
                "We believe every historic space, antique object, and handcrafted piece deserves an",
                "approach that understands its past before shaping its future.",
              ]}
            />
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:absolute lg:left-[51.1%] lg:top-[1.7vw] lg:w-[46.9%]">
          <img src="/images/legacy/1.png" alt="Heritage interior" className="h-auto w-full object-contain" />
        </Reveal>
      </section>

      {/* ───────────────── SCENE B : Rooted in Rajasthan ───────────────── */}
      <section className="relative flex flex-col gap-8 px-6 py-12 lg:block lg:h-[45vw] lg:px-0 lg:py-0">
        <Reveal className="lg:absolute lg:left-[2%] lg:top-[4.2vw] lg:w-[53.3%]">
          <img src="/images/legacy/2.png" alt="Rajasthan haveli" className="h-auto w-full object-contain" />
        </Reveal>

        <Reveal delay={120} className="lg:absolute lg:left-[58.3%] lg:top-[6.9vw]">
          <p className={eyebrow}>Rooted in Rajasthan</p>
          <h2 className={`${h2} mt-2 lg:mt-[1.2vw]`}>
            Inspired by a land of
            <br />
            kings, forts &amp;
            <br />
            craftsmanship
          </h2>
          <p className={`${bodyS} mt-3 lg:mt-[1.4vw] lg:whitespace-nowrap`}>
            <Lines
              lines={[
                "Rajasthan has always been a living archive of architecture, art, and extraordinary craftsmanship.",
                "Its forts, palaces, havelis, artisans, and traditions continue to inspire everything we do at Royal",
                "Treasure.",
                "Our roots give us a deep understanding of heritage not simply as history, but as a living cultural",
                "language that continues to evolve.",
              ]}
            />
          </p>
        </Reveal>

        <Reveal delay={200} className="lg:absolute lg:left-[78.6%] lg:top-[43.5vw] lg:w-[16.8%]">
          <a
            href="https://www.fortinrajasthan.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${T} flex h-12 w-full items-center justify-center bg-[#651A1A] px-5 text-[clamp(9px,1.05vw,15px)] font-bold uppercase text-white transition-opacity duration-300 hover:opacity-85 lg:h-[4vw] max-lg:w-fit`}
          >
            Visit Fort in Rajasthan →
          </a>
        </Reveal>
      </section>

      {/* ───────────────── SCENE C : Fort in Rajasthan ───────────────── */}
      <section className="relative flex flex-col gap-6 px-6 pb-14 pt-8 lg:block lg:h-[48vw] lg:px-0 lg:pb-0 lg:pt-0">
        <Reveal className="lg:absolute lg:left-[5.5%] lg:top-[2.85vw] lg:w-[12%]">
          <img src="/images/legacy/fort.png" alt="Fort in Rajasthan" className="h-auto w-[40vw] max-w-[200px] object-contain lg:w-full lg:max-w-none" />
        </Reveal>

        <Reveal delay={80} className="lg:absolute lg:left-[5.5%] lg:top-[10.4vw]">
          <h2 className={h2}>
            Fort in
            <br />
            Rajasthan
          </h2>
        </Reveal>

        <Reveal delay={140} className="lg:absolute lg:left-[5.5%] lg:top-[22.6vw]">
          <p className={`${bodyS} lg:whitespace-nowrap`}>
            <Lines
              lines={[
                <>
                  <strong>Founded in 2020 by Mr. Veer, Fort In Rajasthan</strong> is
                </>,
                "an Indian hospitality brand that offers the best resorts,",
                "hotels, and Rajasthani experiences across India and",
                "beyond. Our commitment is to promote Rajasthan’s",
                "rich heritage and hospitality. We also offer exceptional",
                "fine dining experiences in Dubai and London.",
              ]}
            />
          </p>

          <p className={`${bodyS} mt-4 lg:mt-[1.1vw] lg:whitespace-nowrap`}>
            <Lines
              lines={[
                "Fort In Rajasthan is known worldwide for its",
                "immersive Rajasthani-themed experiences, authentic",
                "food, folk music & dance, and cultural activities. One",
                "can join and experience the true essence of Rajasthan",
                "at Fort In Rajasthan Village.",
              ]}
            />
          </p>
        </Reveal>

        <Reveal delay={200} className="lg:absolute lg:left-[31%] lg:top-[4.2vw] lg:w-[69%]">
          <img src="/images/legacy/3.png" alt="Fort in Rajasthan" className="h-auto w-full object-contain" />
        </Reveal>
      </section>
    </main>
  );
}
