import Image from "next/image";
import { logos } from "@/data/site";

type LogoVariant = keyof typeof logos;

/** Supplied SH shield artwork, rendered unmodified. */
export function Logo({
  variant,
  size,
  className = "",
  alt = "STOCK HOUSE",
}: {
  variant: LogoVariant;
  size: number;
  className?: string;
  alt?: string;
}) {
  return (
    <Image
      src={logos[variant]}
      width={size}
      height={size}
      alt={alt}
      unoptimized
      className={className}
    />
  );
}
