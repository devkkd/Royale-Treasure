"use client";

import { Fragment } from "react";
import Reveal from "./Reveal";
import ProductGrid from "./ProductGrid";
import { products } from "@/data/products";

const T = "font-['Times_New_Roman']";

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

export default function ShopHeritagePage() {
  return (
    // pt = room for your fixed header (the Figma crop started below it) — tweak if needed
    <main className="relative w-full overflow-hidden pb-16 pt-18 lg:pb-[8vw] ">
      {/* ───────────── Intro ───────────── */}
      <section className="px-6 text-center">
        <Reveal>
          <p className={`${T} text-[clamp(11px,1.53vw,22px)] font-bold uppercase leading-[1.4] text-[#651A1A]`}>
            Shop Heritage
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1
            className={`${T} mt-3 text-[clamp(20px,2.5vw,42px)] font-normal leading-[1.3] text-[#B5651D] lg:mt-[2.4vw]`}
          >
            Discover Heritage, Own a Piece of History
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p
            className={`${T} mx-auto mt-4 max-w-[640px] text-[clamp(11px,1.25vw,19px)] leading-[1.7] text-[#2b2b2b] lg:mt-[1.9vw] lg:max-w-none lg:whitespace-nowrap`}
          >
            <Lines
              lines={[
                "Explore Royale Treasure’s collection of extraordinary heritage pieces, each reflecting the artistry, craftsmanship, and stories of a bygone era.",
                "From timeless antiques to distinctive objects of cultural significance, discover pieces that bring history into the present and offer a lasting",
                "connection to the past.",
              ]}
            />
          </p>
        </Reveal>
      </section>

      {/* ───────────── Products (no category filter) ───────────── */}
      <section className="mt-10 px-4 sm:px-6 lg:mt-[5.2vw] lg:pl-[5.3%] lg:pr-[4.6%]">
        <Reveal delay={120}>
          <ProductGrid products={products} />
        </Reveal>
      </section>
    </main>
  );
}
