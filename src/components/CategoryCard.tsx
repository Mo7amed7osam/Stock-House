import type { CSSProperties } from "react";
import Image from "next/image";
import { images } from "@/data/site";
import { Latin } from "./ui";

export type Category = {
  id: string;
  ar: string;
  en: string;
  /** Photo alt text for this crop */
  alt: string;
  /** object-position of the crop, e.g. "48% 30%" */
  focal: string;
  /** Extra zoom applied to the crop */
  zoom: number;
};

export function CategoryCard({ category, index }: { category: Category; index: number }) {
  return (
    <li className="group @container relative aspect-[4/3] overflow-hidden rounded-xs bg-navy text-white on-dark sm:aspect-[4/5]">
      {/*
        Zoom lives on the wrapper via `transform`; the hover uses the separate
        `scale` property so the two compose instead of overriding each other.
      */}
      <div
        className="absolute inset-0 [--z:calc(var(--zoom)*1.35)] transition-[scale] duration-700 ease-out group-hover:scale-105 sm:[--z:var(--zoom)]"
        style={
          {
            "--zoom": category.zoom,
            transform: "scale(var(--z))",
            transformOrigin: category.focal,
          } as CSSProperties
        }
      >
        <Image
          src={images.editorial}
          alt={category.alt}
          fill
          loading="lazy"
          sizes="(min-width: 640px) 33vw, 100vw"
          className="object-cover"
          style={{ objectPosition: category.focal }}
        />
      </div>
      {/* Navy wash so the type stays legible over any crop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy from-5% via-navy/45 via-45% to-navy/5"
      />

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
        <div className="flex items-center justify-between text-xs font-bold tracking-[0.22em]">
          <Latin className="text-gold">{String(index + 1).padStart(2, "0")}</Latin>
          <Latin className="text-white/80">STOCK HOUSE</Latin>
        </div>

        <div>
          <span aria-hidden="true" className="mb-5 block h-1 w-10 bg-gold" />
          <Latin className="block text-right text-[clamp(2rem,21cqw,4.5rem)] leading-[0.9] font-extrabold tracking-[-0.03em]">
            {category.en}
          </Latin>
          <h3 className="mt-3 text-[clamp(1.25rem,9cqw,1.875rem)] font-bold">{category.ar}</h3>
        </div>
      </div>
    </li>
  );
}
