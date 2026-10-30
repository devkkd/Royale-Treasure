// ─── Edit this list: images go in /public/images/, `href` = the post link ─────
// type: "reel" | "carousel"   (decides the small icon in the top-right corner)
// likes / comments are optional – when given they show on hover (like the Figma state)
const PROFILE_URL = "https://www.instagram.com/reel/DfARBmay2Ev/?dlrf=MWNwczJzem43d2czbA==";

const posts = [
  { img: "/images/reel.png", alt: "Antique wooden cabinet", type: "reel", href: PROFILE_URL, likes: 22, comments: 4 },
  { img: "/images/reel.png", alt: "Heritage living room", type: "carousel", href: PROFILE_URL , likes: 52, comments: 9},
  { img: "/images/reel.png", alt: "Carved arch and old door", type: "carousel", href: PROFILE_URL, likes: 72, comments: 13 },
  { img: "/images/reel.png", alt: "Wooden horse at the entrance", type: "reel", href: PROFILE_URL, likes: 32, comments: 10 },
  { img: "/images/reel.png", alt: "Dining room interior", type: "carousel", href: PROFILE_URL , likes: 82, comments: 17},
];

const sans = "font-['Hanken_Grotesk',ui-sans-serif,system-ui,sans-serif]";

// ─── Icons ────────────────────────────────────────────────────────────────────
const InstagramLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[clamp(14px,1.65vw,22px)] w-[clamp(14px,1.65vw,22px)]">
    <defs>
      <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="#FEDA75" />
        <stop offset="0.35" stopColor="#FA7E1E" />
        <stop offset="0.6" stopColor="#D62976" />
        <stop offset="0.8" stopColor="#962FBF" />
        <stop offset="1" stopColor="#4F5BD5" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6.5" fill="url(#ig-grad)" />
    <rect x="5.2" y="5.2" width="13.6" height="13.6" rx="4.2" fill="none" stroke="#fff" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.7" />
    <circle cx="16.2" cy="7.8" r="1" fill="#fff" />
  </svg>
);

const ReelIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" className="h-full w-full">
    <rect x="1.2" y="1.2" width="13.6" height="13.6" rx="3.4" fill="none" stroke="#fff" strokeWidth="1.5" />
    <path d="M6.4 5.2v5.6L11 8z" fill="#fff" />
  </svg>
);

const CarouselIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" className="h-full w-full">
    <rect x="1" y="4.2" width="10.6" height="10.6" rx="2.2" fill="#fff" />
    <path d="M4.6 2.6h7.6a2.600 2.600 0 0 1 2.600 2.600v7.600" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[1.2em] w-[1.2em] fill-white">
    <path d="M12 21s-7.500-4.600-9.600-9.500C.9 8 3 4.500 6.500 4.500c2 0 3.500 1.100 4.400 2.600h2.200c.9-1.500 2.400-2.600 4.400-2.600 3.500 0 5.600 3.500 4.100 7C19.500 16.400 12 21 12 21z" />
  </svg>
);

const CommentIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[1.2em] w-[1.2em] fill-white">
    <path d="M12 3C6.500 3 2 6.700 2 11.300c0 2.500 1.300 4.700 3.400 6.200L4.600 21l4-2c1.100.3 2.200.5 3.400.5 5.500 0 10-3.700 10-8.200S17.500 3 12 3z" />
  </svg>
);

// ─── Section ──────────────────────────────────────────────────────────────────
export default function InstagramFeed() {
  return (
    <section className="relative w-full overflow-hidden pb-[5.3vw] pt-[1.65vw] max-md:pb-12 max-md:pt-8">
      {/* ── Heading ── */}
      <div className="px-[5%] text-center">
        <p className="font-['Times_New_Roman'] text-[clamp(9px,0.95vw,14px)] uppercase leading-[1.6] text-[#2b2b2b]">
          One Follow. An Entire World
        </p>
        <h2 className="mt-[1.2vw] font-['Times_New_Roman'] text-[clamp(22px,2.65vw,44px)] font-normal uppercase leading-[1.2] text-[#651A1A] max-md:mt-3">
          Follow the Living Heritage
        </h2>

        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[2.2vw] inline-flex items-center gap-[0.5vw] font-['Times_New_Roman'] text-[clamp(12px,1.27vw,19px)] leading-none text-[#651A1A] transition-opacity duration-300 hover:opacity-70 max-md:mt-5 max-md:gap-2"
        >
          <InstagramLogo />
          <span>@Royale_treasurers</span>
        </a>
      </div>

      {/* ── Grid: 5 tiles, 3:4, hairline gaps ── */}
      <div className="mt-[2.9vw] grid grid-cols-2 gap-px px-[5.2%] md:grid-cols-5 md:pr-[4.95%] max-md:mt-8">
        {posts.map((p, i) => (
          <a
            key={p.img}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={p.alt}
            className="group relative block aspect-[3/4] overflow-hidden bg-[#e7e0d6] max-md:last:hidden"
          >
            <img
              src={p.img}
              alt={p.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />

            {/* reel / carousel icon, top-right */}
            <span className="absolute right-[6%] top-[4.5%] h-[clamp(11px,1.15vw,16px)] w-[clamp(11px,1.15vw,16px)] opacity-90 drop-shadow-[0_0_2px_rgba(0,0,0,0.45)]">
              {p.type === "reel" ? <ReelIcon /> : <CarouselIcon />}
            </span>

            {/* hover state (as in Figma tile 3): dark veil + counts */}
            <span
              className={`${sans} absolute inset-0 flex items-center justify-center gap-[2.2vw] bg-black/45 text-[clamp(11px,1.05vw,16px)] font-bold text-white opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100`}
            >
              {p.likes !== undefined && (
                <span className="flex items-center gap-[0.45em]">
                  <HeartIcon />
                  {p.likes}
                </span>
              )}
              {p.comments !== undefined && (
                <span className="flex items-center gap-[0.45em]">
                  <CommentIcon />
                  {p.comments}
                </span>
              )}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
