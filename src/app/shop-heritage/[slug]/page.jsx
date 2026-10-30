// app/shop-heritage/[slug]/page.jsx
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { products, getProduct, getRelated } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  return p ? { title: `${p.title} | Royal Treasure`, description: p.tagline } : {};
}

export default async function Page({ params }) {
  const { slug } = await params; // works on Next 14 and 15
  const product = getProduct(slug);
  if (!product) notFound();
  return <ProductDetail product={product} related={getRelated(slug)} />;
}
