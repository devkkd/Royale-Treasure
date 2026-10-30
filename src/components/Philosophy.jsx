import { Fragment } from "react";

// Quote lines break exactly like Figma on desktop (md+), flow normally on mobile.
const quote = [
  "“The Finest Things Were Made To Last If Only Someone",
  "Cares Enough To Ensure They Do. We Have Cared For",
  "Twenty-five Years. We Intend To Keep Caring.”",
];

export default function Philosophy() {
  return (
    <section
      className="relative flex min-h-[70vw] w-full items-center justify-center overflow-hidden  bg-cover bg-center md:min-h-[40vw]"
      style={{ backgroundImage: "url('/images/philosophy-bg.png')" }}
    >
      {/* ── Thin inner frame (same insets as Figma) ── */}
      <div className="pointer-events-none absolute inset-x-[6.9%] bottom-[1.4vw] top-[2.6vw] border border-white/50 max-md:inset-x-[4%]" />

      {/* ── Content ── */}
      <div className="relative z-10 px-[8%] text-center">
        <p className="font-['Times_New_Roman'] text-[clamp(10px,3.7vw,23px)] font-semibold uppercase leading-[1.2] text-white">
          The Philosophy
        </p>

        <p className="mt-[2.3vw] font-['Cedarville_Cursive'] text-[clamp(15px,2.3vw,36px)] leading-[1.3] text-white max-md:mt-6">
          {quote.map((line, i) => (
            <Fragment key={i}>
              {line}
              {i < quote.length - 1 && (
                <>
                  <span className="md:hidden"> </span>
                  <br className="hidden md:block" />
                </>
              )}
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}
