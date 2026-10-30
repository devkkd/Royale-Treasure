import { Fragment } from "react";

// ─── Type styles (measured from the Figma screen, 1033px wide frame) ─────────
const sans = "font-['Hanken_Grotesk',ui-sans-serif,system-ui,sans-serif]";
const serif = "font-['Times_New_Roman']";
const RED = "text-[#8E1212]";

const small = `${sans} text-[clamp(9px,0.9vw,13px)] uppercase leading-[1.5] text-[#3a3a3a]`;
const smallBold = `${sans} text-[clamp(9px,0.9vw,13px)] font-bold uppercase leading-[1.5] text-[#1f1f1f]`;
const para = `${sans} text-[clamp(9.5px,1vw,15px)] uppercase leading-[1.6] text-[#3a3a3a]`;

const Rule = () => <div className="h-px w-full bg-[#2b2b2b]/20" />;

// Explicit line breaks on desktop (md+) to match Figma, natural wrap on mobile.
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

const A = ({ href, children }) => (
  <a href={href} className="transition-opacity duration-300 hover:opacity-60">
    {children}
  </a>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const mainLinks = [
  { label: "Royale Treasure", href: "/" },
  { label: "Legacy", href: "/legacy" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Begin Conversation", href: "/contact" },
];

const services = [
  "Interior Design",
  "Fort & Heritage Restoration",
  "Hotel & Resort Conversion",
  "Artefacts & Furniture",
  "Art Installation",
  "Antique Restoration",
];

const trusted = [
  "Jaipur Literature Festival",
  "Jaigarh Heritage Festival",
  "Vedanta",
  "Royal Fables",
  "Fairmont Jaipur",
  "Chokhi Dhani",
  "Kingdom of Dreams",
  "Mumbai Airport T2",
  "Singhvillas",
  "Ranthambore",
  "Kahna Earth Lodge",
  "Chomu Palace",
];

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* ── 1. Brand block ── */}
      <div className="flex flex-col items-center px-[5%] pb-[1.45vw] pt-[2.6vw] text-center max-md:pt-10">
        <img
          src="/images/footer-logo.png"
          alt="Royale Treasure"
          className="h-auto w-[16.5vw] min-w-[130px] object-contain"
        />

        <p
          className={`${serif} mt-[2vw] text-[clamp(12px,1.5vw,24px)] font-bold uppercase leading-[1.3] ${RED} max-md:mt-6`}
        >
          Object d’Art · Furniture · Jewels · Textiles · Interiors · Concept
        </p>

        <p className={`${para} mt-[1.75vw] max-w-[74vw] max-md:mt-5 max-md:max-w-full`}>
          <Lines
            lines={[
              "Royale Treasure is a Jaipur-based design and curation house with over 25 years of experience in luxury interiors, heritage hospitality,",
              "rare artefacts, and turnkey project execution blending heritage aesthetics with contemporary luxury to create timeless spaces",
              "that reflect culture, elegance and individuality.",
            ]}
          />
        </p>
      </div>

      <Rule />

      {/* ── 2. Red statement band ── */}
      <div className="px-[5%] pb-[2.4vw] pt-[1.65vw] text-center max-md:py-6">
        <p className={`${serif} text-[clamp(8.5px,0.98vw,15px)] font-bold uppercase leading-[1.7] ${RED}`}>
          <Lines
            lines={[
              "A Jaipur-based design and curation house with over 25 years of experience in luxury interiors, heritage hospitality, rare artifacts, and",
              "turnkey project execution.\u00A0 50+ projects delivered across India and abroad.",
            ]}
          />
        </p>
      </div>

      <Rule />

      {/* ── 3. Link columns ── */}
      <div className="grid grid-cols-2 gap-y-8 px-[7.07%] pb-[1.55vw] pt-[1.55vw] max-md:py-8 md:grid-cols-4 md:gap-y-0">
        {/* col 1 – main links */}
        <ul className={`${sans} text-[clamp(10px,1vw,14px)] uppercase leading-[1.5] text-[#2b2b2b]`}>
          {mainLinks.map((l) => (
            <li key={l.label}>
              <A href={l.href}>{l.label}</A>
            </li>
          ))}
        </ul>

        {/* col 2 – services */}
        <div>
          <p className={smallBold}>Services</p>
          <ul className={small}>
            {services.map((s) => (
              <li key={s}>
                <A href="/services">{s}</A>
              </li>
            ))}
          </ul>
        </div>

        {/* col 3 – addresses */}
        <div>
          <p className={smallBold}>Showroom</p>
          <p className={small}>
            <Lines lines={["5 Jacob Road, Civil Lines\u00A0 Jaipur,", "Rajasthan India"]} />
          </p>

          <p className={`${smallBold} mt-[1.35vw]`}>Design Studio</p>
          <p className={small}>
            <Lines lines={["A 131, First Floor, Ram Lane No. 4", "Jaipur, India"]} />
          </p>

          <p className={`${smallBold} mt-[1.35vw]`}>O’D Gulabee Jaipur</p>
          <p className={small}>
            <Lines lines={["The Kanota Courtyard\u00A0 Narain", "Niwas, Jaipur"]} />
          </p>
        </div>

        {/* col 4 – contact */}
        <div>
          <p className={smallBold}>Get in Touch</p>
          <p className={small}>
            <A href="tel:+919829065354">+91 9829065354</A>
            <br />
            <A href="tel:+919413345495">+91 9413345495</A>
            <br />
            <A href="tel:+911414035354">0141 4035354</A>
          </p>

          <p className={`${small} mt-[1.35vw]`}>
            <A href="mailto:info@royaltreasure.com">info@royaltreasure.com</A>
            <br />
            <A href="mailto:theroyaleindia@gmail.com">theroyaleindia@gmail.com</A>
          </p>

          <p className={`${small} mt-[1.35vw]`}>
            <A href="https://www.royaltreasure.com">www.royaltreasure.com</A>
            <br />
            <A href="https://www.fortinrajasthan.com">www.fortinrajasthan.com</A>
          </p>
        </div>
      </div>

      <Rule />

      {/* ── 4. Trusted by ── */}
      <div className="px-[5%] pb-[1.55vw] pt-[1.55vw] text-center max-md:py-6">
        <p className={smallBold}>Trusted By</p>
        <p className={`${small} mx-auto mt-[1.3vw] max-w-[78vw] max-md:mt-3 max-md:max-w-full`}>
          {trusted.map((t, i) => (
            <Fragment key={t}>
              {t}
              {i < trusted.length - 1 && " · "}
              {/* Figma breaks the list after "Singhvillas" */}
              {t === "Singhvillas" && <br className="hidden md:block" />}
            </Fragment>
          ))}
        </p>
      </div>

      <Rule />

      {/* ── 5. Copyright + closing quote ── */}
      <div className="px-[5%] pb-[2vw] pt-[1.65vw] text-center max-md:pb-8 max-md:pt-5">
        <p className={small}>© 2025 Royale Treasures · All rights reserved · Jaipur, Rajasthan, India</p>

        <p
          className={`${serif} mt-[1.8vw] text-[clamp(11px,1.72vw,28px)] font-bold uppercase leading-[1.3] ${RED} max-md:mt-4`}
        >
          “The finest things were made to last if only someone cares enough to ensure they do.”
        </p>
      </div>
    </footer>
  );
}
