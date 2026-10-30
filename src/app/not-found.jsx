import Link from "next/link";
import Image from "next/image";

const T       = "font-['Times_New_Roman']";
const cursive = "font-['Cedarville_Cursive']";
const MAROON  = "text-[#651A1A]";
const ORANGE  = "text-[#B5651D]";

export default function NotFound() {
  return (
    <main
      className="relative mt-5 w-full overflow-hidden flex flex-col items-center justify-center px-6 text-center"
      style={{
        backgroundImage: "url('/images/backgroud.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundColor: "#f2ede8",
      }}
    >
      {/* Decorative watercolor blobs — reuse existing images */}
      <img
        src="/images/hero-left.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-[280px] sm:w-[340px] lg:w-[400px] object-contain opacity-40 select-none"
      />
      <img
        src="/images/hero-right.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[280px] sm:w-[360px] lg:w-[440px] object-contain opacity-30 select-none"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Logo */}
        {/* <Image
          src="/logo.png"
          alt="Royal Treasure"
          width={90}
          height={90}
          priority
          className="object-contain mb-6"
        /> */}

        {/* 404 number */}
        <p
          className={`${T} font-normal uppercase tracking-[0.3em] text-[clamp(70px,12vw,160px)] leading-none ${MAROON} opacity-20 mb-4 select-none`}
        >
          404
        </p>

        {/* Headline */}
        <h1
          className={`${T} font-normal uppercase text-[clamp(22px,3.5vw,52px)] leading-[1.2] ${MAROON} -mt-4 sm:-mt-6`}
        >
          This Piece Has<br />
          <span className={ORANGE}>Found Its Home</span>
        </h1>

        {/* Cursive sub-line */}
        <p className={`${cursive} text-[clamp(14px,1.6vw,22px)] text-[#2b2b2b]/50 mt-4`}>
          Some things are not lost — just waiting to be rediscovered.
        </p>

        {/* Body */}
        <p
          className={`${T} text-[clamp(11px,1vw,15px)] uppercase tracking-[0.12em] leading-[1.8] text-[#2b2b2b]/70 mt-5 max-w-[500px]`}
        >
          The page you are looking for may have moved, or perhaps it was never here to begin with.
          Let us guide you back.
        </p>

        {/* Divider */}
        <div className="mt-7 h-px w-[120px] bg-[#651A1A]/30" />

        {/* CTAs */}
        <div className="mt-7 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className={`${T} text-[11px] uppercase tracking-[0.14em] bg-[#651A1A] text-white px-8 py-3 hover:bg-[#4a1010] transition-colors duration-300`}
          >
            Return Home
          </Link>
          <Link
            href="/shop-heritage"
            className={`${T} text-[11px] uppercase tracking-[0.14em] border border-[#651A1A] text-[#651A1A] px-8 py-3 hover:bg-[#651A1A] hover:text-white transition-colors duration-300`}
          >
            Explore Collection
          </Link>
          <Link
            href="/begin-conversation"
            className={`${T} text-[11px] uppercase tracking-[0.14em] text-[#2b2b2b]/60 hover:text-[#651A1A] transition-colors duration-300`}
          >
            Begin Conversation →
          </Link>
        </div>

        {/* Location tag */}
        <p className={`${T} text-[10px] uppercase tracking-[0.2em] text-[#2b2b2b]/40 mt-10`}>
          Jaipur, Rajasthan · India · 26.9124° N · 75.7873° E
        </p>

      </div>
    </main>
  );
}
