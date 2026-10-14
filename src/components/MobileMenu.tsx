"use client";

import { navItems } from "@/data/site";
import { CloseIcon, MenuIcon } from "./icons";
import { Logo } from "./Logo";
import { ButtonLink, Latin } from "./ui";
import { useDialog } from "./useDialog";

export function MobileMenu() {
  const { open, close, isOpen, dialogProps } = useDialog();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="inline-flex size-11 items-center justify-center text-white"
      >
        <MenuIcon width={26} height={26} />
        <span className="sr-only">فتح القائمة</span>
      </button>

      <dialog
        id="mobile-menu"
        aria-label="القائمة"
        {...dialogProps}
        className="on-dark m-0 h-dvh max-h-none w-full max-w-none bg-navy p-0 text-white"
      >
        <div className="flex h-full flex-col px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] sm:px-8">
          <div className="flex h-16 items-center justify-between">
            <Logo variant="goldTransparent" size={40} alt="STOCK HOUSE" className="size-10" />
            <button
              type="button"
              onClick={close}
              className="inline-flex size-11 items-center justify-center"
            >
              <CloseIcon width={26} height={26} />
              <span className="sr-only">إغلاق القائمة</span>
            </button>
          </div>

          <nav aria-label="القائمة الرئيسية" className="mt-8 flex-1">
            <ul className="border-t border-white/10">
              {navItems.map((item) => (
                <li key={item.href} className="border-b border-white/10">
                  <a
                    href={item.href}
                    onClick={close}
                    className="flex min-h-16 items-center text-2xl font-semibold transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-5">
            <ButtonLink href="#branches" onClick={close} variant="gold" className="w-full">
              زور أقرب فرع
            </ButtonLink>
            <p className="text-center text-xs tracking-[0.2em] text-stone">
              <Latin>BIG BRANDS. SMART PRICES.</Latin>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}
