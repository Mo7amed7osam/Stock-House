import { ArrowIcon } from "./icons";
import { Reveal } from "./Reveal";
import { ButtonLink, Latin } from "./ui";

/** Typographic interlude on gold: the one loud moment on the page. */
export function Urgency() {
  return (
    <section
      aria-labelledby="urgency-title"
      className="relative overflow-hidden bg-gold py-20 text-navy sm:py-28"
    >
      {/* Oversized outlined watermark */}
      <Latin
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[26vw] leading-none font-extrabold tracking-[-0.04em] text-transparent [-webkit-text-stroke:1.5px_rgb(8_19_43/0.18)] sm:text-[14.5vw]"
      >
        DON’T WAIT.
      </Latin>

      <Reveal className="relative mx-auto grid max-w-[90rem] gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-end lg:px-12">
        <div className="lg:col-span-8">
          <h2
            id="urgency-title"
            className="text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-[5.5rem]"
          >
            <span className="block">شوفت قطعة عجبتك؟</span>
            <span className="block">متستناش.</span>
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="max-w-md text-lg leading-relaxed text-navy/80 sm:text-xl">
            القطع والمقاسات بتتغير مع كل دروب. اللي تشوفه النهارده ممكن ميكونش موجود بكرة.
          </p>
          <div className="mt-8">
            <ButtonLink href="#branches" variant="navy">
              اختار الفرع
              <ArrowIcon width={18} height={18} />
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
