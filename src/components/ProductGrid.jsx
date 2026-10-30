import Link from "next/link";

const T = "font-['Times_New_Roman']";
const LINE = "border-[#E8CFCB]"; // soft pink divider lines

// ─── One product card (image, bold title, 2 meta lines) ──────────────────────
export function ProductCard({ product }) {
  return (
    <Link href={`/shop-heritage/${product.slug}`} className="group block">
      <div className="aspect-[4/3] overflow-hidden bg-[#e9e2d8]">
        <img
          src={product.images[0]}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <h3
        className={`${T} mt-3 text-[clamp(13px,1.25vw,19px)] font-bold leading-[1.3] text-[#2b2b2b] transition-colors duration-300 group-hover:text-[#651A1A] lg:mt-[1.2vw]`}
      >
        {product.title}
      </h3>

      <p className={`${T} mt-2 text-[clamp(10.5px,0.98vw,15px)] leading-[1.6] text-[#2b2b2b] lg:mt-[0.95vw]`}>
        {product.category}
        <br />
        Estimated Price Range : {product.price}
      </p>
    </Link>
  );
}

// ─── Grid: 3 columns, thin pink lines between rows and columns ───────────────
// topBorder = line above the first row (listing page has it, "more products" does not)
export default function ProductGrid({ products, topBorder = true }) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${topBorder ? `border-t ${LINE}` : ""}`}
    >
      {products.map((p, i) => (
        <div
          key={p.slug}
          className={`border-b px-1 py-5 sm:px-[2vw] lg:px-[1.53vw] lg:py-[1.53vw] ${LINE} ${
            i % 2 === 1 ? "sm:border-l lg:border-l-0" : ""
          } ${i % 3 !== 0 ? "lg:border-l" : ""} ${i % 3 === 0 ? "lg:pl-0" : ""} ${i % 3 === 2 ? "lg:pr-0" : ""}`}
        >
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}
