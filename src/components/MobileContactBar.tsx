"use client";

import { branches } from "@/data/site";
import { ChatIcon, CloseIcon, PhoneIcon, PinIcon } from "./icons";
import { externalLinkProps } from "./ui";
import { useDialog } from "./useDialog";

function BranchSheet({
  id,
  title,
  dialog,
  items,
}: {
  id: string;
  title: string;
  dialog: ReturnType<typeof useDialog>;
  items: { key: string; label: string; detail: string; href: string; ariaLabel: string; external?: boolean }[];
}) {
  const titleId = `${id}-title`;
  return (
    <dialog
      id={id}
      aria-labelledby={titleId}
      {...dialog.dialogProps}
      className="m-0 mt-auto w-full max-w-none bg-white p-0 text-navy"
    >
      <div className="px-5 pt-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-between">
          <h2 id={titleId} className="text-lg font-bold">
            {title}
          </h2>
          <button
            type="button"
            onClick={dialog.close}
            className="inline-flex size-11 items-center justify-center"
          >
            <CloseIcon width={22} height={22} />
            <span className="sr-only">إغلاق</span>
          </button>
        </div>
        <ul className="mt-3 grid gap-3">
          {items.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                aria-label={item.ariaLabel}
                onClick={dialog.close}
                {...(item.external ? externalLinkProps : {})}
                className="flex min-h-16 flex-col justify-center border border-navy/15 px-5 py-3 transition-colors hover:border-navy"
              >
                <span className="font-bold">{item.label}</span>
                <span dir="ltr" className="font-latin mt-0.5 text-right text-sm text-navy/70">
                  {item.detail}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  );
}

const barButton =
  "flex min-h-11 flex-1 flex-col items-center justify-center gap-1 text-xs font-semibold text-white transition-colors hover:text-gold";

export function MobileContactBar() {
  const call = useDialog();
  const location = useDialog();
  const whatsapp = useDialog();

  return (
    <>
      <nav
        aria-label="تواصل سريع"
        className="on-dark fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-navy pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <div className="flex h-(--bar-h) items-stretch [&>*+*]:border-s [&>*+*]:border-white/10">
          <button
            type="button"
            onClick={call.open}
            aria-haspopup="dialog"
            aria-expanded={call.isOpen}
            aria-controls="call-sheet"
            className={barButton}
          >
            <PhoneIcon width={20} height={20} />
            اتصال
          </button>
          <button
            type="button"
            onClick={location.open}
            aria-haspopup="dialog"
            aria-expanded={location.isOpen}
            aria-controls="location-sheet"
            className={barButton}
          >
            <PinIcon width={20} height={20} />
            الفروع
          </button>
          <button
            type="button"
            onClick={whatsapp.open}
            aria-haspopup="dialog"
            aria-expanded={whatsapp.isOpen}
            aria-controls="whatsapp-sheet"
            className={barButton}
          >
            <ChatIcon width={20} height={20} />
            واتساب
          </button>
        </div>
      </nav>

      <BranchSheet
        id="call-sheet"
        title="اختار الفرع للاتصال"
        dialog={call}
        items={branches.map((b) => ({
          key: b.id,
          label: b.name,
          detail: b.phoneDisplay,
          href: b.phoneHref,
          ariaLabel: `الاتصال ب${b.ariaName}`,
        }))}
      />
      <BranchSheet
        id="location-sheet"
        title="اختار الفرع على الخريطة"
        dialog={location}
        items={branches.map((b) => ({
          key: b.id,
          label: b.name,
          detail: b.address,
          href: b.mapUrl,
          ariaLabel: `فتح موقع ${b.ariaName} على خرائط جوجل`,
          external: true,
        }))}
      />
      <BranchSheet
        id="whatsapp-sheet"
        title="اختار جروب الفرع"
        dialog={whatsapp}
        items={branches.map((b) => ({
          key: b.id,
          label: `جروب ${b.name}`,
          detail: "واتساب",
          href: b.whatsappGroupUrl,
          ariaLabel: `الانضمام إلى جروب واتساب ${b.ariaName}`,
          external: true,
        }))}
      />
    </>
  );
}
