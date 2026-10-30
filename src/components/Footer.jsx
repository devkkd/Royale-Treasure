"use client";

import { Fragment, useState, useEffect } from "react";

const sans  = "font-['Hanken_Grotesk',ui-sans-serif,system-ui,sans-serif]";
const serif = "font-['Times_New_Roman']";
const RED   = "text-[#8E1212]";

const small     = `${sans} text-[11px] md:text-[clamp(9px,0.9vw,13px)] uppercase leading-[1.6] text-[#3a3a3a]`;
const smallBold = `${sans} text-[11px] md:text-[clamp(9px,0.9vw,13px)] font-bold uppercase leading-[1.5] text-[#1f1f1f]`;
const para      = `${sans} text-[11px] md:text-[clamp(9.5px,1vw,15px)] uppercase leading-[1.7] text-[#3a3a3a]`;

const Rule = () => <div className="h-px w-full bg-[#2b2b2b]/20" />;

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

const mainLinks = [
  { label: "Royale Treasure",      href: "/" },
  { label: "Legacy",               href: "/legacy" },
  { label: "Contact Us",           href: "/contact-us" },
  { label: "Begin Conversation",   href: "/begin-conversation" },
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
  "Royale Fables",
  "Fairmont Jaipur",
  "Chokhi Dhani",
  "Kingdom of Dreams",
  "Mumbai Airport T2",
  "Singhvillas",
  "Ranthambore",
  "Kahna Earth Lodge",
  "Chomu Palace",
];

// ─── Mobile accordion for link groups ────────────────────────────────────────
function MobileAccordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-[#2b2b2b]/15 py-3`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between"
      >
        <span className={smallBold}>{title}</span>
        <span
          className={`text-[#651A1A] text-[18px] leading-none transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[300px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const [year, setYear] = useState(null);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="relative w-full overflow-hidden">

      {/* ── 1. Brand block ── */}
      <div className="flex flex-col items-center px-6 pb-6 pt-8 md:px-[5%] md:pb-[1.45vw] md:pt-[2.6vw] text-center">
        <img
          src="/images/footer-logo.png"
          alt="Royale Treasure"
          className="h-auto w-[120px] md:w-[16.5vw] md:min-w-[130px] object-contain"
        />

        <p className={`${serif} mt-4 md:mt-[2vw] text-[13px] md:text-[clamp(12px,1.5vw,24px)] font-bold uppercase leading-[1.4] ${RED}`}>
          Object d'Art · Furniture · Jewels · Textiles · Interiors · Concept
        </p>

        <p className={`${para} mt-4 md:mt-[1.75vw] max-w-full md:max-w-[74vw]`}>
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
      <div className="px-6 py-5 md:px-[5%] md:pb-[2.4vw] md:pt-[1.65vw] text-center">
        <p className={`${serif} text-[11px] md:text-[clamp(8.5px,0.98vw,15px)] font-bold uppercase leading-[1.7] ${RED}`}>
          <Lines
            lines={[
              "A Jaipur-based design and curation house with over 25 years of experience in luxury interiors, heritage hospitality, rare artifacts, and",
              "turnkey project execution.\u00A0 50+ projects delivered across India and abroad.",
            ]}
          />
        </p>
      </div>

      <Rule />

      {/* ── 3. Link columns — Desktop grid / Mobile accordion ── */}

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-4 gap-y-0 px-[7.07%] pb-[1.55vw] pt-[1.55vw]">
        {/* col 1 */}
        <ul className={`${sans} text-[clamp(10px,1vw,14px)] uppercase leading-[1.5] text-[#2b2b2b]`}>
          {mainLinks.map((l) => (
            <li key={l.label}><A href={l.href}>{l.label}</A></li>
          ))}
        </ul>

        {/* col 2 */}
        <div>
          <p className={smallBold}>Services</p>
          <ul className={small}>
            {services.map((s) => (
              <li key={s}><A href="/services">{s}</A></li>
            ))}
          </ul>
        </div>

        {/* col 3 */}
        <div>
          <p className={smallBold}>Showroom</p>
          <p className={small}><Lines lines={["5 Jacob Road, Civil Lines\u00A0 Jaipur,", "Rajasthan India"]} /></p>
          <p className={`${smallBold} mt-[1.35vw]`}>Design Studio</p>
          <p className={small}><Lines lines={["A 131, First Floor, Ram Lane No. 4", "Jaipur, India"]} /></p>
          <p className={`${smallBold} mt-[1.35vw]`}>O'D Gulabee Jaipur</p>
          <p className={small}><Lines lines={["The Kanota Courtyard\u00A0 Narain", "Niwas, Jaipur"]} /></p>
        </div>

        {/* col 4 */}
        <div>
          <p className={smallBold}>Get in Touch</p>
          <p className={small}>
            <A href="tel:+919829065354">+91 9829065354</A><br />
            <A href="tel:+919413345495">+91 9413345495</A><br />
            <A href="tel:+911414035354">0141 4035354</A>
          </p>
          <p className={`${small} mt-[1.35vw]`}>
            <A href="mailto:info@royaltreasure.com">info@royaltreasure.com</A><br />
            <A href="mailto:theroyaleindia@gmail.com">theroyaleindia@gmail.com</A>
          </p>
          <p className={`${small} mt-[1.35vw]`}>
            <A href="https://www.royaltreasure.com">www.royaltreasure.com</A><br />
            <A href="https://www.fortinrajasthan.com">www.fortinrajasthan.com</A>
          </p>
        </div>
      </div>

      {/* Mobile accordions */}
      <div className="md:hidden px-6 py-2">
        <MobileAccordion title="Pages">
          <ul className={`${small} flex flex-col gap-2`}>
            {mainLinks.map((l) => (
              <li key={l.label}><A href={l.href}>{l.label}</A></li>
            ))}
          </ul>
        </MobileAccordion>

        <MobileAccordion title="Services">
          <ul className={`${small} flex flex-col gap-2`}>
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </MobileAccordion>

        <MobileAccordion title="Locations">
          <div className={`${small} flex flex-col gap-3`}>
            <div>
              <p className="font-bold text-[#1f1f1f]">Showroom</p>
              <p>5 Jacob Road, Civil Lines, Jaipur, Rajasthan India</p>
            </div>
            <div>
              <p className="font-bold text-[#1f1f1f]">Design Studio</p>
              <p>A 131, First Floor, Ram Lane No. 4, Jaipur, India</p>
            </div>
            <div>
              <p className="font-bold text-[#1f1f1f]">O'D Gulabee Jaipur</p>
              <p>The Kanota Courtyard, Narain Niwas, Jaipur</p>
            </div>
          </div>
        </MobileAccordion>

        <MobileAccordion title="Get in Touch">
          <div className={`${small} flex flex-col gap-2`}>
            <A href="tel:+919829065354">+91 9829065354</A>
            <A href="tel:+919413345495">+91 9413345495</A>
            <A href="mailto:info@royaltreasure.com">info@royaltreasure.com</A>
            <A href="mailto:theroyaleindia@gmail.com">theroyaleindia@gmail.com</A>
            <A href="https://www.royaltreasure.com">www.royaltreasure.com</A>
          </div>
        </MobileAccordion>
      </div>

      <Rule />

      {/* ── 4. Trusted by ── */}
      <div className="px-6 py-5 md:px-[5%] md:pb-[1.55vw] md:pt-[1.55vw] text-center">
        <p className={smallBold}>Trusted By</p>
        <p className={`${small} mx-auto mt-3 md:mt-[1.3vw] md:max-w-[78vw]`}>
          {trusted.map((t, i) => (
            <Fragment key={t}>
              {t}
              {i < trusted.length - 1 && " · "}
              {t === "Singhvillas" && <br className="hidden md:block" />}
            </Fragment>
          ))}
        </p>
      </div>

      <Rule />

      {/* ── 5. Copyright ── */}
      <div className="px-6 pb-8 pt-5 md:px-[5%] md:pb-[2vw] md:pt-[1.65vw] text-center">
        <p className={small}>© {year} Royale Treasures · All rights reserved · Jaipur, Rajasthan, India</p>

        <p className={`${serif} mt-4 md:mt-[1.8vw] text-[12px] md:text-[clamp(11px,1.72vw,28px)] font-bold uppercase leading-[1.3] ${RED}`}>
          "The finest things were made to last if only someone cares enough to ensure they do."
        </p>
      </div>

    </footer>
  );
}
