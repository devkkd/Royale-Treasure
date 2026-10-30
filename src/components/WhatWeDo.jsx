import { Fragment } from "react";

// ─── Type styles (measured from the Figma screen, 1130px wide frame) ─────────
const T = "font-['Times_New_Roman']";
const MAROON = "text-[#651A1A]";
const ORANGE = "text-[#B5651D]";
const LINE = "border-[#E8CBC7]"; // soft pink divider lines

const small = `${T} text-[clamp(10px,0.95vw,15px)] leading-[1.62] text-[#2b2b2b]`;
const big = `${T} font-normal text-[clamp(18px,2.05vw,34px)]`;
const colHeading = `${T} font-normal text-[clamp(14px,1.5vw,24px)] leading-[1.65] ${ORANGE}`;

// Lines break exactly like Figma on desktop (md+), and flow normally on mobile.
const Lines = ({ lines }) =>
  lines.map((l, i) => (
    <Fragment key={i}>
      {l}
      {i < lines.length - 1 && (
        <>
          <span className="md:hidden"> </span>
          <br className="hidden md:block" />
        </>
      )}
    </Fragment>
  ));

const columns = [
  {
    no: "01",
    label: ["INTERIOR DESIGN &", "HOSPITALITY"],
    title: ["Spaces Designed to", "Be Experienced."],
    text: [
      "We create distinctive interiors for private",
      "residences, hotels, resorts, and heritage",
      "properties blending timeless character",
      "with modern comfort.",
    ],
    items: ["Interior Design", "Space Planning", "Hotel & Resort Conversion", "Bespoke Interiors"],
  },
  {
    no: "02",
    label: ["HERITAGE & ARCHITECTURAL", "RESTORATION"],
    title: ["Preserving the Stories of", "the Past"],
    text: [
      "We carefully restore heritage buildings,",
      "historic architecture, and culturally",
      "significant spaces while respecting their",
      "original character.",
    ],
    items: ["Heritage Conservation", "Fort Restoration", "Architectural Restoration", "Adaptive Reuse"],
  },
  {
    no: "03",
    label: ["ARTEFACTS, ANTIQUES &", "FURNITURE"],
    title: ["Objects with", "Stories"],
    text: [
      "From rare antiques to bespoke furniture,",
      "we source, curate, restore, and create",
      "exceptional pieces for timeless spaces.",
    ],
    items: ["Antique Restoration", "Artefact Curation", "Furniture Restoration", "Bespoke Furniture"],
  },
  {
    no: "04",
    label: ["ART & BESPOKE", "INSTALLATIONS"],
    title: ["Spaces That", "Speak"],
    text: [
      "We create custom artistic installations",
      "and decorative experiences that bring",
      "personality, culture, and meaning into",
      "every environment.",
    ],
    items: ["Art Installations", "Sculptures", "Custom Décor", "Site-Specific Experiences"],
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative w-full overflow-hidden pb-[5vw] pt-[6vw] md:pt-[4vw]">
      {/* ── Top-right watercolor image ── */}
      <img
        src="/images/what-we-do-right.png"
        alt="Heritage verandah"
        className="pointer-events-none absolute right-[2.2%] top-0 hidden h-auto w-[30%] object-contain md:block"
      />

      {/* ── Intro ── */}
      <div className="relative z-10 px-[5.3%]">
        <h2 className={`${big} uppercase leading-[1.3] ${MAROON}`}>What We Do</h2>

        <h3 className={`${big} mt-[1.2vw] leading-[1.3] ${ORANGE}`}>
          Preserving Heritage. Creating Timeless Experiences
        </h3>

        <p className={`${small} mt-[1.4vw] max-w-[42vw]`}>
          <Lines
            lines={[
              <>
                From historic spaces and heritage properties to rare artefacts and bespoke interiors,{" "}
                <strong>Royal Treasure</strong> combines
              </>,
              "craftsmanship, restoration, and design to preserve stories and create spaces that last.",
            ]}
          />
        </p>
      </div>

      {/* ── 4 columns ── */}
      <div className="mt-[4.2vw] grid grid-cols-1 md:ml-[0.9%] md:w-[96.7%] md:grid-cols-4">
        {columns.map((c, i) => (
          <div
            key={c.no}
            className={`px-[5.3%] pb-[3vw] pt-[3vw] md:pl-[4.3vw] md:pr-[1vw] ${
              i > 0 ? `border-t md:border-l md:border-t-0 ${LINE}` : ""
            }`}
          >
            <p className={small}>
              {c.no}&nbsp;&nbsp;
              <Lines lines={c.label} />
            </p>

            <h4 className={`${colHeading} mt-[1.8vw]`}>
              <Lines lines={c.title} />
            </h4>

            <p className={`${small} mt-[1.9vw]`}>
              <Lines lines={c.text} />
            </p>

            <ul className={`${small} mt-[1.5vw]`}>
              {c.items.map((it) => (
                <li key={it}>→ {it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Divider ── */}
      <div className={`mx-auto mt-[2.6vw] h-px w-[79%] border-t ${LINE}`} />

      {/* ── CTA block ── */}
      <div className="mt-[3vw] flex flex-col items-center px-[5.3%] text-center">
        <h3 className={`${big} leading-[1.3] ${MAROON}`}>Have Something Worth Preserving?</h3>

        <p className={`${small} mt-[1.2vw]`}>
          From heritage properties and interiors to antiques and artistic installations, we transform stories into
          timeless experiences.
        </p>

        <button
          className={`${T} mt-[2vw] flex h-[clamp(34px,3.4vw,52px)] w-[clamp(140px,13.8vw,210px)] items-center justify-center bg-[#651A1A] text-[clamp(8px,0.85vw,13px)] font-bold uppercase tracking-[0.02em] text-white transition-opacity duration-300 hover:opacity-85`}
        >
          Begin Conversation
        </button>
      </div>
    </section>
  );
}
