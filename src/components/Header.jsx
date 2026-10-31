"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Home page: solid bg after slide 5 starts (400vh)
const SLIDE5_VH = 400;

const leftLinks = [
  { label: "The Story",      href: "#story",      slide: 2 },  // StorySlide = slide index 1 (100vh)
  { label: "The Collection", href: "#collection", slide: 3 },
  { label: "The Spaces",     href: "#spaces",     slide: 4 },  // SpacesSlide = slide index 4 (400vh)
  { label: "What We Do",     href: "#what-we-do", slide: null },
];

const rightLinks = [
  { label: "Shop Heritage", href: "/shop-heritage", slide: null },
  { label: "The Legacy",    href: "/legacy",         slide: null },
  { label: "Visit",         href: "/contact-us",     slide: null },
];

const allLinks = [...leftLinks, ...rightLinks];

const linkClass =
  "font-['Times_New_Roman'] text-[14px] font-normal not-italic leading-[160%] tracking-[0%] uppercase text-[#2b2b2b] transition-colors hover:text-[#651A1A]";

export default function Header() {
  const [open, setOpen]         = useState(false);
  const [solidBg, setSolidBg]   = useState(false);
  const pathname                 = usePathname();
  const isHome                   = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      if (isHome) {
        // Home: solid after slide 5 starts (400vh)
        setSolidBg(window.scrollY > SLIDE5_VH / 100 * window.innerHeight);
      } else {
        // Other pages: solid after just 10px scroll
        setSolidBg(window.scrollY > 10);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const close = () => setOpen(false);

  // Slide navigation — scrolls to the correct slide in HorizontalScroller
  // Each slide = 100vh of vertical scroll
  const handleNav = (e, item) => {
    close();

    if (item.slide !== null && item.slide !== undefined) {
      e.preventDefault();
      // If not on home page, go home first then scroll
      if (window.location.pathname !== "/") {
        window.location.href = `/?slide=${item.slide}`;
        return;
      }
      const targetY = item.slide * window.innerHeight;
      window.scrollTo({ top: targetY, behavior: "smooth" });
      return;
    }

    // For section anchors on home page (#what-we-do)
    if (item.href.startsWith("#")) {
      e.preventDefault();
      if (window.location.pathname !== "/") {
        window.location.href = `/${item.href}`;
        return;
      }
      // Scroll past all slides first, then find the section
      const slidesHeight = 5 * window.innerHeight;
      const section = document.querySelector(item.href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: slidesHeight, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* ── Header ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out ${
          solidBg
            ? "bg-[#f2ede8] border-b border-[#2b2b2b]/15 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}>
        <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-6 py-2 lg:px-8">

          {/* Left nav (desktop) */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
            {leftLinks.map((item) => (
              <Link key={item.label} href={item.href} onClick={(e) => handleNav(e, item)} className={linkClass}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link
            href="/"
            className="col-start-1 flex justify-start lg:col-start-2 lg:justify-center"
          >
            <Image
              src="/logo.png"
              alt="Royale Treasure"
              width={160}
              height={130}
              priority
              className="h-auto w-[110px] lg:w-[180px]"
            />
          </Link>

          {/* Right nav (desktop) */}
          <div className="hidden items-center justify-end gap-6 lg:flex xl:gap-8">
            {rightLinks.map((item) => (
              <Link key={item.label} href={item.href} onClick={(e) => handleNav(e, item)} className={linkClass}>
                {item.label}
              </Link>
            ))}
            <Link
              href="/begin-conversation"
              className="font-['Times_New_Roman'] text-[16px] font-normal leading-[160%] tracking-[0%] uppercase bg-[#651A1A] px-4 py-3 text-white transition-colors hover:bg-[#4d1313]"
            >
              Begin Conversation
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="col-start-3 justify-self-end p-2 lg:hidden"
          >
            <span className="block h-0.5 w-6 bg-[#651A1A]" />
            <span className="mt-1.5 block h-0.5 w-6 bg-[#651A1A]" />
            <span className="mt-1.5 block h-0.5 w-6 bg-[#651A1A]" />
          </button>
        </div>
      </header>

      {/* ── Mobile Overlay ── */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`
          fixed inset-0 z-[60] bg-black/30 backdrop-blur-[2px]
          transition-opacity duration-300 lg:hidden
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* ── Mobile Sidebar ── */}
      <aside
        className={`
          fixed right-0 top-0 z-[70] h-dvh w-[min(84vw,320px)]
          flex flex-col bg-[#f8f4ec] border-t-4 border-[#651A1A]
          shadow-[-20px_0_50px_-20px_rgba(0,0,0,0.3)]
          transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          lg:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Top: logo + close */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#2b2b2b]/10">
          <Link href="/" onClick={close}>
            <Image src="/logo.png" alt="Royale Treasure" width={72} height={60} className="h-auto w-[72px]" />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="p-2"
          >
            <span className="relative block h-5 w-6">
              <span className="absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rotate-45 bg-[#651A1A]" />
              <span className="absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 -rotate-45 bg-[#651A1A]" />
            </span>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-6 pt-4">
          <ul>
            {allLinks.map((item, i) => (
              <li
                key={item.label}
                className="border-b border-[#2b2b2b]/10"
                style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleNav(e, item)}
                  className="block py-4 font-['Times_New_Roman'] text-[15px] uppercase tracking-[0.1em] text-[#2b2b2b] hover:text-[#651A1A] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/begin-conversation"
            onClick={close}
            className="mt-6 block bg-[#651A1A] px-6 py-3.5 text-center font-['Times_New_Roman'] text-[14px] uppercase tracking-[0.1em] text-white hover:bg-[#4d1313] transition-colors duration-200"
          >
            Begin Conversation
          </Link>
        </nav>

        {/* Contact info */}
        <div className="px-6 pb-8 pt-5 font-['Times_New_Roman'] text-[12px] leading-[1.7] text-[#2b2b2b]/60 border-t border-[#2b2b2b]/10">
          <a href="tel:+919314065354" className="block hover:text-[#651A1A] transition-colors">
            +91 93140 65354
          </a>
          <a href="mailto:theroyaleindia@gmail.com" className="block hover:text-[#651A1A] transition-colors">
            theroyaleindia@gmail.com
          </a>
        </div>
      </aside>
    </>
  );
}
