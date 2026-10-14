import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

/** English fashion label: isolated LTR run in the Latin typeface. */
export function Latin({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span lang="en" dir="ltr" {...props} className={`font-latin ${className}`}>
      {children}
    </span>
  );
}

/** Section eyebrow: a two-digit index in gold, then the label. */
export function SectionLabel({
  children,
  index,
  tone = "dark",
}: {
  children: ReactNode;
  index: string;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`text-xs font-bold tracking-[0.22em] ${
        tone === "light" ? "text-gold" : "text-navy"
      }`}
    >
      <Latin>
        <span className="text-gold">{index}</span>
        <span aria-hidden="true" className="mx-2 opacity-40">/</span>
        {children}
      </Latin>
    </p>
  );
}

const variants = {
  gold: "bg-gold text-navy hover:bg-white",
  navy: "bg-navy text-white hover:bg-[#162443]",
  "outline-light":
    "border border-white/45 text-white hover:border-gold hover:text-gold",
  "outline-dark":
    "border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-white",
} as const;

export type ButtonVariant = keyof typeof variants;

export function ButtonLink({
  variant = "gold",
  className = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
}) {
  return (
    <a
      {...props}
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xs px-6 text-[0.95rem] font-semibold transition-colors duration-200 [&_[data-arrow]]:transition-transform [&_[data-arrow]]:duration-200 hover:[&_[data-arrow]]:-translate-x-1 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
