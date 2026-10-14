import { Latin } from "./ui";

export type Category = {
  id: string;
  ar: string;
  en: string;
  /** Short line under the name, e.g. "تيشيرتات · قمصان · جينز" */
  items: string;
  tone: "navy" | "gold" | "white";
};

const tones = {
  navy: {
    card: "bg-navy text-white on-dark",
    label: "text-gold",
    ghost: "[-webkit-text-stroke:1.5px_rgb(255_255_255/0.14)]",
    rule: "bg-gold",
    items: "text-white/65",
  },
  gold: {
    card: "bg-gold text-navy",
    label: "text-navy/70",
    ghost: "[-webkit-text-stroke:1.5px_rgb(8_19_43/0.18)]",
    rule: "bg-navy",
    items: "text-navy/70",
  },
  white: {
    card: "bg-white text-navy border border-navy/15",
    label: "text-navy/60",
    ghost: "[-webkit-text-stroke:1.5px_rgb(8_19_43/0.12)]",
    rule: "bg-gold",
    items: "text-navy/65",
  },
} as const;

/**
 * Typographic category tile. No photography: the tone, the oversized
 * ghost number and the Latin wordmark carry the card.
 */
export function CategoryCard({ category, index }: { category: Category; index: number }) {
  const t = tones[category.tone];
  const n = String(index + 1).padStart(2, "0");

  return (
    <li
      className={`group @container relative flex aspect-[5/3] flex-col justify-between overflow-hidden rounded-xs p-6 sm:aspect-[4/5] sm:p-8 ${t.card}`}
    >
      {/* Ghost index, bleeding off the start edge */}
      <Latin
        aria-hidden="true"
        className={`pointer-events-none absolute -top-[6cqw] -start-[4cqw] select-none text-[58cqw] leading-none font-extrabold tracking-[-0.06em] text-transparent transition-transform duration-700 ease-out group-hover:-translate-y-2 ${t.ghost}`}
      >
        {n}
      </Latin>

      <div className={`relative flex items-center justify-between text-xs font-bold tracking-[0.22em] ${t.label}`}>
        <Latin>{n}</Latin>
        <Latin>STOCK HOUSE</Latin>
      </div>

      <div className="relative">
        <span
          aria-hidden="true"
          className={`mb-5 block h-1 w-10 transition-[width] duration-500 ease-out group-hover:w-16 ${t.rule}`}
        />
        <Latin className="block text-right text-[clamp(2.25rem,22cqw,5rem)] leading-[0.88] font-extrabold tracking-[-0.04em]">
          {category.en}
        </Latin>
        <h3 className="mt-3 text-[clamp(1.25rem,9cqw,1.875rem)] font-bold">{category.ar}</h3>
        <p className={`mt-2 text-sm ${t.items}`}>{category.items}</p>
      </div>
    </li>
  );
}
