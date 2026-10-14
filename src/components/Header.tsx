"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { ButtonLink } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`on-dark fixed inset-x-0 top-0 z-40 text-white transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
      >
        تخطى إلى المحتوى
      </a>
      <div className="mx-auto flex h-(--header-h) max-w-[90rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <a
          href="#home"
          className="flex min-h-11 min-w-11 items-center"
          aria-label="STOCK HOUSE — الرئيسية"
        >
          <Logo variant="goldTransparent" size={44} alt="" className="size-10 lg:size-11" />
        </a>

        <nav aria-label="القائمة الرئيسية" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center px-3 text-[0.92rem] font-medium text-white/85 transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href="#branches" variant="gold" className="min-h-11! px-5!">
              زور أقرب فرع
            </ButtonLink>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
