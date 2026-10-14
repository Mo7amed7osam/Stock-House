import type { Branch } from "@/data/site";
import { ChatIcon, PhoneIcon, PinIcon } from "./icons";
import { ButtonLink, Latin, externalLinkProps } from "./ui";

export function BranchCard({ branch, index }: { branch: Branch; index: number }) {
  const titleId = `branch-${branch.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="flex flex-col rounded-xs border border-navy/15 bg-white transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgb(8_19_43/0.35)]"
    >
      <div className="flex items-center justify-between border-b border-navy/10 px-6 py-4 sm:px-8">
        <Latin className="text-xs font-bold tracking-[0.22em] text-navy/70">
          BRANCH {String(index + 1).padStart(2, "0")}
        </Latin>
        <span aria-hidden="true" className="h-2 w-8 bg-gold" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 id={titleId} className="text-3xl font-bold sm:text-4xl">
          {branch.name}
        </h3>

        <dl className="mt-7 space-y-5 text-base">
          <div className="flex gap-3">
            <dt className="mt-0.5 shrink-0 text-navy">
              <PinIcon width={22} height={22} />
              <span className="sr-only">العنوان</span>
            </dt>
            <dd className="leading-relaxed text-navy/80">{branch.address}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="mt-0.5 shrink-0 text-navy">
              <PhoneIcon width={22} height={22} />
              <span className="sr-only">رقم التليفون</span>
            </dt>
            <dd>
              <a
                href={branch.phoneHref}
                dir="ltr"
                className="font-latin inline-flex min-h-11 items-center text-lg font-bold tracking-wide underline decoration-gold decoration-2 underline-offset-[6px] -my-2.5"
              >
                {branch.phoneDisplay}
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-auto grid gap-3 pt-8">
          <ButtonLink
            href={branch.phoneHref}
            variant="navy"
            aria-label={`الاتصال ب${branch.ariaName}`}
          >
            <PhoneIcon width={18} height={18} />
            اتصل بالفرع
          </ButtonLink>
          <div className="grid gap-3 sm:grid-cols-2">
            <ButtonLink
              href={branch.mapUrl}
              variant="outline-dark"
              aria-label={`فتح موقع ${branch.ariaName} على خرائط جوجل`}
              {...externalLinkProps}
            >
              <PinIcon width={18} height={18} />
              افتح على الخريطة
            </ButtonLink>
            <ButtonLink
              href={branch.whatsappGroupUrl}
              variant="outline-dark"
              aria-label={`الانضمام إلى جروب واتساب ${branch.ariaName}`}
              {...externalLinkProps}
            >
              <ChatIcon width={18} height={18} />
              انضم لجروب الفرع
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}
