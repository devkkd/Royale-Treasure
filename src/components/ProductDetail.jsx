"use client";
import Link from "next/link";
import { useState } from "react";
import Reveal from "./Reveal";
import ProductGrid from "./ProductGrid";

// ─── Type styles (measured from the Figma screens) ───────────────────────────
const T = "font-['Times_New_Roman']";
const LINE = "border-[#E8CFCB]";
const RED = "text-[#8E1212]";

const info = `${T} text-[clamp(10.5px,1.07vw,15px)] leading-[1.45] text-[#2b2b2b]`;
const small = `${T} text-[clamp(10px,0.88vw,14px)] leading-[1.58] text-[#2b2b2b]`;
const colHeading = `${T} text-[clamp(13px,1.5vw,22px)] font-bold uppercase leading-[1.3] ${RED}`;

// ─── Gallery: big image + thumbnails ─────────────────────────────────────────
function Gallery({ images, title }) {
  const [active, setActive] = useState(0);
  const many = images.length > 1;

  return (
    <div>
      <style>{`@keyframes rt-fade { from { opacity: .2 } to { opacity: 1 } }`}</style>

      <div className="aspect-[572/318] w-full overflow-hidden bg-[#e9e2d8]">
        <img
          key={active}
          src={images[active]}
          alt={title}
          className="h-full w-full object-cover"
          style={{ animation: "rt-fade .5s ease-out" }}
        />
      </div>

      {many && (
        <div className="mt-3 flex justify-start gap-[0.65vw] overflow-x-auto pb-1 max-lg:gap-2 lg:mt-[0.8vw] lg:justify-center lg:overflow-visible">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === active}
              className={`aspect-[47/44] w-[clamp(52px,6.1vw,92px)] shrink-0 overflow-hidden outline outline-1 outline-offset-2 transition-all duration-300 ${
                i === active ? "outline-[#651A1A]" : "outline-transparent hover:outline-[#651A1A]/40"
              }`}
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// small label/value line: "Period: To be confirmed"
const Fact = ({ label, value }) => (
  <p className={info}>
    <strong>{label}:</strong> {value}
  </p>
);

// ═══════════════════════════════════════════════════════════════════════════════
export default function ProductDetail({ product: p, related = [] }) {
  const enquiryHref = `/begin-conversation?product=${encodeURIComponent(p.title)}`;

  return (
    // pt = room for your fixed header (the Figma crop started below it) — tweak if needed
    <main className="relative w-full overflow-hidden pb-16 pt-28 lg:pb-[8vw]">
      <div className="px-4 sm:px-6 lg:pl-[5.4%] lg:pr-[4.9%]">
        {/* ───────────── Top: gallery + info ───────────── */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,60.9fr)_minmax(0,27.6fr)] lg:gap-x-[3.16vw] lg:gap-y-0">
          <Reveal>
            <Gallery images={p.images} title={p.title} />
          </Reveal>

          <Reveal delay={120}>
            <h1 className={`${T} text-[clamp(20px,2vw,32px)] font-bold leading-[1.7] text-[#2b2b2b] lg:mt-[2.8vw]`}>
              {p.title}
            </h1>

            <p className={`${info} mt-2 lg:mt-[1vw]`}>
              {p.category}
              <br />
              {p.tagline}
            </p>

            <div className="mt-4 lg:mt-[1.4vw]">
              <Fact label="Period" value={p.period} />
              <Fact label="Material" value={p.material} />
              <Fact label="Origin" value={p.origin} />
            </div>

            <p className={`${T} mt-4 text-[clamp(12px,1.35vw,20px)] font-bold leading-[1.4] text-[#2b2b2b] lg:mt-[1.2vw]`}>
              Estimated Price Range :
            </p>
            <p className={`${T} mt-1 text-[clamp(13px,1.45vw,22px)] font-bold leading-[1.4] text-[#2b2b2b] lg:mt-[0.4vw]`}>
              {p.price}
            </p>

            <Link
              href={enquiryHref}
              className={`${T} mt-5 flex h-12 w-full items-center justify-center bg-[#651A1A] px-4 text-[clamp(10px,1.22vw,17px)] font-bold uppercase tracking-[0.02em] text-white transition-colors duration-300 hover:bg-[#4d1313] lg:mt-[2.7vw] lg:h-[4.1vw]`}
            >
              Get Product Enquiry
            </Link>

            <div className="mt-5 lg:mt-[2.5vw]">
              {p.intro.map((t, i) => (
                <p key={i} className={`${info} ${i > 0 ? "mt-4 lg:mt-[2.6vw]" : ""}`}>
                  {t}
                </p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ───────────── Three information columns ───────────── */}
        <Reveal className="mt-10 lg:mt-[4.3vw]">
          <section className={`grid grid-cols-1 border-y ${LINE} lg:grid-cols-3`}>
            {/* PRODUCT DETAILS */}
            <div className="py-6 lg:py-[2.3vw] lg:pr-[1.6vw]">
              <h2 className={colHeading}>Product Details</h2>
              <div className="mt-3 lg:mt-[1.8vw]">
                <p className={small}>
                  <strong>{p.details.lead}</strong>
                  <br />
                  {p.details.paragraphs[0]}
                </p>
                {p.details.paragraphs.slice(1).map((t, i) => (
                  <p key={i} className={`${small} mt-3 lg:mt-[1.3vw]`}>
                    {t}
                  </p>
                ))}
                <p className={`${small} mt-3 font-bold lg:mt-[1.3vw]`}>Features:</p>
                <ul className={`${small} list-disc pl-[1.6vw] max-lg:pl-5`}>
                  {p.details.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CARE & PRESERVATION */}
            <div className={`border-t py-6 ${LINE} lg:border-l lg:border-t-0 lg:px-[1.6vw] lg:py-[2.3vw]`}>
              <h2 className={colHeading}>Care &amp; Preservation</h2>
              <div className="mt-3 lg:mt-[1.8vw]">
                <p className={small}>{p.care.intro}</p>
                {p.care.tips.map((t) => (
                  <p key={t.title} className={`${small} mt-3 lg:mt-[1.15vw]`}>
                    <strong>{t.title}</strong> {t.text}
                  </p>
                ))}
                <p className={`${small} mt-3 lg:mt-[1.15vw]`}>
                  {p.care.note.title}
                  <br />
                  {p.care.note.text}
                </p>
              </div>
            </div>

            {/* DELIVERY & SHIPPING */}
            <div className={`border-t py-6 ${LINE} lg:border-l lg:border-t-0 lg:py-[2.3vw] lg:pl-[1.6vw]`}>
              <h2 className={colHeading}>Delivery &amp; Shipping</h2>
              <div className="mt-3 lg:mt-[1.8vw]">
                <p className={small}>{p.delivery.intro}</p>
                {p.delivery.items.map((d) => (
                  <p key={d.title} className={`${small} mt-3 lg:mt-[1.15vw]`}>
                    <strong>{d.title}</strong>
                    <br />
                    {d.text}
                  </p>
                ))}
                <p className={`${small} mt-3 lg:mt-[1.15vw]`}>{p.delivery.closing}</p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ───────────── More products (no heading, like Figma) ───────────── */}
        {related.length > 0 && (
          <Reveal className="mt-10 lg:mt-[5.2vw]">
            <ProductGrid products={related} topBorder={false} />
          </Reveal>
        )}
      </div>
    </main>
  );
}
