"use client";

import { Fragment, useEffect, useRef, useState } from "react";

// ─── Type styles (measured from the Figma screen, 912px wide frame) ──────────
const T = "font-['Times_New_Roman']";
const sans = "font-['Hanken_Grotesk',ui-sans-serif,system-ui,sans-serif]";
const MAROON = "text-[#860F08]";
const ORANGE = "text-[#B5651D]";
const RED = "text-[#860F08]";

const MAP_SRC =
  "https://www.google.com/maps?q=Royal+Treasure,+5+Jacob+Road,+Civil+Lines,+Jaipur&output=embed";

// Lines break like Figma on desktop (lg+) and flow naturally below that.
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

// ─── Small building blocks ────────────────────────────────────────────────────
const Rule = () => <div className="h-px w-full bg-[#2b2b2b]/20" />;

// label (left) + value (right) row, baselines aligned like Figma
const Row = ({ label, bold = false, children, className = "" }) => (
  <div
    className={`grid grid-cols-1 items-baseline gap-2 lg:grid-cols-[10.7vw_1fr] lg:gap-0 ${className}`}
  >
    <p
      className={`${T} text-[clamp(11px,1.3vw,18px)] leading-[1.5] ${RED} ${
        bold ? "font-bold" : ""
      }`}
    >
      {label}
    </p>
    <div>{children}</div>
  </div>
);

const value = `${T} text-[clamp(14px,1.55vw,24px)] font-bold leading-[1.65] ${RED}`;
const note = `${sans} text-[clamp(10px,1.04vw,15px)] leading-[1.5] ${RED}`;

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════════
export default function ContactPage() {
  return (
    // pt = room for your fixed header (the Figma crop started below it) — tweak if needed
    <main className="relative w-full overflow-hidden pb-16 pt-20 lg:pb-[8vw] ">
      {/* ───────────── Intro ───────────── */}
      <section className="px-6 text-center">
        <Reveal>
          <h1 className={`${T} text-[clamp(32px,3.85vw,57px)] font-normal uppercase leading-[1.2] ${MAROON}`}>
            Contact Us
          </h1>
        </Reveal>

        <Reveal delay={80}>
          <h2 className={`${T} mt-3 text-[clamp(20px,2.5vw,42px)] font-normal leading-[1.3] ${ORANGE} lg:mt-[2.7vw]`}>
            We Are Listening
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className={`${T} mx-auto mt-4 max-w-[640px] text-[clamp(11px,1.28vw,19px)] leading-[1.55] text-[#2b2b2b] lg:mt-[2.15vw] lg:max-w-none lg:whitespace-nowrap`}>
            <Lines
              lines={[
                "A Great Project Begins With Something Better Than A Form, More Honest Than A Proposal, And More Personal Than A Presentation.",
                "A Conversation Unhurried, Honest, And Without Obligation In Which We Listen To What You Have, What You Want, And What You Are",
                "Hoping To Leave Behind.",
              ]}
            />
          </p>
        </Reveal>
      </section>

      {/* ───────────── Find Us + Map ───────────── */}
      <section className="mt-12 grid grid-cols-1 gap-10 px-6 lg:mt-[8.2vw] lg:grid-cols-[39.4vw_39.1vw] lg:gap-x-[11.4vw] lg:gap-y-0 lg:px-0 lg:pl-[5%]">
        {/* left: details */}
        <Reveal>
          <h3 className={`${T} text-[clamp(18px,2vw,32px)] font-bold leading-[1.3] ${RED}`}>Find Us</h3>

          {/* Main showroom */}
          <Row label="Main Showroom" className="mt-4 lg:mt-[1.4vw]">
            <p className={`${T} text-[clamp(14px,1.65vw,26px)] font-bold leading-[1.4] ${MAROON}`}>Royal Treasures</p>
            <p className={`${note} mt-2 lg:mt-[1vw]`}>
              <Lines
                lines={[
                  "5 Jacob Road, Civil Lines, Jaipur, Rajasthan – 302 006,",
                  "India.",
                  <>
                    <strong>Hours:</strong>&nbsp; Monday to Saturday, 10:00 am to 7:00 pm&nbsp; ·
                  </>,
                  "Sundays by appointment",
                ]}
              />
            </p>
          </Row>

          <div className="mt-6 lg:mt-[2.5vw]">
            <Rule />
          </div>

          {/* Telephone */}
          <Row label="Telephone" bold className="mt-6 lg:mt-[2.7vw]">
            <p className={value}>
              <a href="tel:+919314065354" className="transition-opacity duration-300 hover:opacity-70">
                +91 93140 65354
              </a>
              <br />
              <a href="tel:+911414035354" className="transition-opacity duration-300 hover:opacity-70">
                0141 4035354
              </a>
            </p>
            <p className={`${note} mt-3 lg:mt-[3.1vw]`}>
              <Lines
                lines={[
                  "We answer our phones. If we are on a site visit or in a",
                  "consultation, we will return your call the same day.",
                ]}
              />
            </p>
          </Row>

          <div className="mt-6 lg:mt-[2.6vw]">
            <Rule />
          </div>

          {/* Email */}
          <Row label="Email" bold className="mt-6 lg:mt-[2.4vw]">
            <p className={value}>
              <a href="mailto:theroyaleindia@gmail.com" className="transition-opacity duration-300 hover:opacity-70">
                theroyaleindia@gmail.com
              </a>
            </p>
            <p className={`${note} mt-2 lg:mt-[1vw]`}>
              <Lines lines={["We respond to every email within 24 hours, without", "exception."]} />
            </p>
          </Row>
        </Reveal>

        {/* right: map */}
        <Reveal delay={150}>
          <div className="relative aspect-[357/383] w-full overflow-hidden bg-[#ece8e1] max-lg:aspect-[4/3]">
            <iframe
              title="Royal Treasure – 5 Jacob Road, Civil Lines, Jaipur"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
