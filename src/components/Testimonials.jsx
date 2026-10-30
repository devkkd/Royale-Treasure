// ─── Data ─────────────────────────────────────────────────────────────────────
const testimonials = [
  {
    text: "Throughout our purchase journey he was fully satisfied with the approach and guidance provided by the team in documentation. I would recommend them definitely I was able to shortlist my choice through them.",
    lines: ["Duke Rajeshwar Singh", "Jodhpur, Rajasthan"],
  },
  {
    text: "This year the art installations depict poetry in the woods – signifying the celebration of art and literature, while the wall arts showcase ideas being transformed into art. Royal Treasure understands the soul of this festival.",
    lines: ["Padmini Kumari, Patrika Plus", "Jaipur Literature Festival"],
  },
  {
    text: "Royal Treasure somehow managed to create a backdrop befitting enough to match the height and glory of the occasion. The grand palatial door with Shiva was magnificent – an unforgettable evening.",
    lines: ["Session Organiser, JLF", "Amitabh Bachchan Session,", "Diggi Palace"],
  },
  {
    text: "We are having a great experience working with this company. The team members are fantastic – they truly understand what the customer wants. Highly recommended for any heritage project.",
    lines: ["Vijay Laxmi & Shashank Kaushik", "Jaipur, Rajasthan"],
  },
];

// ─── Big red opening quote mark ───────────────────────────────────────────────
const QuoteMark = () => (
  <svg
    viewBox="0 0 28 22"
    aria-hidden="true"
    className="h-[clamp(16px,1.9vw,28px)] w-auto fill-[#7D1612]"
  >
    <path d="M12 0C4.8 1.7 0 6.9 0 13.6 0 18.6 3.2 22 7.3 22c3.6 0 6.2-2.6 6.2-6 0-3.1-2.3-5.5-5.2-5.5-.4 0-.9.1-1.3.2C7.6 7.6 9.8 5.3 12.6 4L12 0z" />
    <path d="M26.5 0c-7.200 1.7-12 6.9-12 13.600 0 5 3.2 8.4 7.300 8.4 3.600 0 6.2-2.600 6.2-6 0-3.1-2.3-5.5-5.200-5.5-.4 0-.9.1-1.300.2.600-3.1 2.800-5.200 5.600-6.500L26.5 0z" />
  </svg>
);

// ─── One card ─────────────────────────────────────────────────────────────────
// body font in Figma is a clean sans (looks like Hanken Grotesk) — load it, or swap the family below
const sans = "font-['Hanken_Grotesk',ui-sans-serif,system-ui,sans-serif]";

function Card({ t }) {
  return (
    <article
      className="mr-[clamp(16px,3.13vw,48px)] flex min-h-[21.8vw] w-[clamp(220px,16.6vw,320px)] shrink-0 flex-col border border-[#2b2b2b]/35 px-[1.6vw] pt-[1.6vw] pb-[1.6vw] max-md:min-h-0 max-md:px-5 max-md:py-5"
    >
      {/* <QuoteMark /> */}
      <img src="/images/card-quote.png" className="w-5"/>

      <p className={`${sans} mt-[1.65vw] text-[clamp(10px,0.92vw,14px)] leading-[1.5] text-[#3a3a3a] max-md:mt-4`}>
        {t.text}
      </p>

      <p className={`${sans} mt-[1.3vw] text-[clamp(10px,0.92vw,14px)] font-bold leading-[1.55] text-[#2b2b2b] max-md:mt-4`}>
        {t.lines.map((l) => (
          <span key={l} className="block">
            {l}
          </span>
        ))}
      </p>
    </article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Testimonials({ duration = 50 }) {
  return (
    <section className="relative w-full overflow-hidden pb-[8vw] pt-[1.9vw] max-md:pb-16 max-md:pt-15 top-14">
      {/* keyframes live here so the component is self-contained */}
      <style>{`
        @keyframes rt-marquee { from { transform: translate3d(0,0,0); } to { transform: translate3d(-33.3333%,0,0); } }
        .rt-track { animation: rt-marquee ${duration}s linear infinite; will-change: transform; }
        .rt-marquee:hover .rt-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .rt-track { animation: none; } }
      `}</style>

      {/* ── Heading ── */}
      <div className="px-[5%] text-center">
        <p className="font-['Times_New_Roman'] text-[clamp(9px,0.9vw,14px)] uppercase leading-[1.2] text-[#2b2b2b]">
          Voices
        </p>
        <h2 className="mt-[1.2vw] font-['Times_New_Roman'] text-[clamp(22px,2.65vw,44px)] font-normal uppercase leading-[1.2] text-[#651A1A]">
          Those Who Trust Us
        </h2>
      </div>

      {/* ── Marquee: same list rendered 3x (4 cards alone are narrower than a wide screen), track moves one set (-33.33%) then loops seamlessly ── */}
      <div className="rt-marquee mt-[4.7vw] overflow-hidden max-md:mt-8">
        <div className="rt-track ml-[5.1%] flex w-max items-stretch">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div key={i} aria-hidden={i >= testimonials.length ? "true" : undefined} className="flex">
              <Card t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
