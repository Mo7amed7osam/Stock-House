import { Reveal } from "./Reveal";
import { Latin, SectionLabel } from "./ui";

/** Brand names as text only — no third-party logos. */
const brands = ["Adidas", "Zara", "H&M", "Pull&Bear", "Mango", "Levi’s", "AND MORE"] as const;

function BrandRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pe-10 sm:gap-16 sm:pe-16"
    >
      {brands.map((b) => (
        <li key={b} className="flex items-center gap-10 sm:gap-16">
          <Latin
            className={
              b === "AND MORE"
                ? "text-xl font-extrabold tracking-[0.25em] text-gold sm:text-2xl"
                : "text-4xl font-bold tracking-tight whitespace-nowrap sm:text-6xl lg:text-7xl"
            }
          >
            {b}
          </Latin>
          <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-gold" />
        </li>
      ))}
    </ul>
  );
}

export function BrandDiscovery() {
  return (
    <section
      id="brands"
      aria-labelledby="brands-title"
      className="on-dark overflow-hidden bg-navy py-20 text-white sm:py-28"
    >
      <Reveal className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel tone="light">BIG BRANDS. SMART PRICES.</SectionLabel>
            <h2 id="brands-title" className="mt-5 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              <span className="block">براندات تعرفها.</span>
              <span className="block">وقطع تستاهل تكتشفها.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-white/75 lg:col-span-5">
            اختيارات متنوعة من براندات معروفة، والميكس بيتغير مع كل دروب.
          </p>
        </div>
      </Reveal>

      {/* Full-bleed marquee. LTR track so the translateX math is predictable. */}
      <div
        className="marquee mt-14 border-y border-white/15 py-8 sm:mt-16 sm:py-10"
        aria-label="أمثلة لبراندات ممكن تلاقيها"
        role="region"
      >
        <div dir="ltr" className="marquee-track flex w-max">
          <BrandRow />
          <BrandRow hidden />
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-[90rem] px-5 text-sm text-stone sm:px-8 lg:px-12">
        توافر البراندات والمقاسات بيتغير حسب كل دروب.
      </p>
    </section>
  );
}
