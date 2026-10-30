// ─── Type styles (measured from the Figma screen, 1127px wide frame) ─────────
const T = "font-['Times_New_Roman']";
const ORANGE = "text-[#B5651D]";

const doors = [
  {
    title: "Royale Treasure",
    text: "Objects & Interiors, Given New Rooms to Live in.",
    img: "/images/doors-royale.png",
    alt: "Royale Treasure",
    imgW: "md:w-[18.2vw]", // image widths follow the Figma sizes
  },
  {
    title: "Fort in Rajasthan",
    text: "Forts and Palaces, Opened as Places to Stay.",
    img: "/images/doors-fort.png",
    alt: "Fort in Rajasthan",
    imgW: "md:w-[15vw]",
  },
  {
    title: "Atelier Sage Design",
    text: "Architecture, Asked to Remember Rather than Perform.",
    img: "/images/doors-atelier.png",
    alt: "Atelier Sage Design",
    imgW: "md:w-[15.5vw]",
  },
];

export default function ThreeDoors() {
  return (
    <section className="relative w-full overflow-hidden pb-[2.5vw] pt-[2vw]">
      {/* ── Heading ── */}
      <div className="px-[5.3%] text-center">
        <p className={`${T} text-[clamp(9px,0.9vw,14px)] uppercase leading-[1.6] text-[#2b2b2b]`}>
          One Root, Three Branches
        </p>
        <h2
          className={`${T} mt-[1.6vw] text-[clamp(22px,2.67vw,44px)] font-normal uppercase leading-[1.2] text-[#651A1A]`}
        >
          Three Doors One Belief
        </h2>
      </div>

      {/* ── 3 doors ──
          justify-between + content width = same uneven spacing as Figma
          (left edge 5.3%, right edge 4.8%) */}
      <div className="mt-[3vw] flex flex-col items-center gap-[8vw] pl-[5.3%] pr-[4.8%] md:flex-row md:items-start md:justify-between md:gap-0">
        {doors.map((d) => (
          <div key={d.title} className="group flex flex-col items-center text-center">
            {/* images share one bottom line */}
            <div className="flex h-[10vw] items-end max-md:h-auto">
              <img
                src={d.img}
                alt={d.alt}
                className={`h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03] max-md:w-[60vw] ${d.imgW}`}
              />
            </div>

            <h3 className={`${T} mt-[2.5vw] text-[clamp(16px,2.05vw,32px)] font-bold leading-[1.3] ${ORANGE}`}>
              {d.title}
            </h3>

            <p className={`${T} mt-[0.9vw] text-[clamp(11px,1.2vw,18px)] leading-[1.5] text-[#2b2b2b] md:whitespace-nowrap`}>
              {d.text}
            </p>
          </div>
        ))}
      </div>

      {/* ── Closing line ── */}
      <p
        className={`mt-[4.5vw] px-[5%] text-center font-['Cedarville_Cursive'] text-[clamp(14px,2.1vw,32px)] leading-[1.5] ${ORANGE}`}
      >
        Heritage isn’t preserved by being untouched. It’s preserved by being lived in.
      </p>
    </section>
  );
}
