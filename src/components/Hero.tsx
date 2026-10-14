import Image from "next/image";
import { images } from "@/data/site";
import { ArrowIcon } from "./icons";
import { ButtonLink, Latin } from "./ui";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="on-dark relative bg-navy pt-(--header-h) text-white"
    >
      <div className="grid lg:min-h-[min(54rem,calc(100svh-var(--header-h)))] lg:grid-cols-12">
        {/* Copy: start side (right in RTL) */}
        <div className="order-2 flex flex-col justify-center px-5 pt-10 pb-14 sm:px-8 lg:order-1 lg:col-span-6 lg:py-20 xl:col-span-5 lg:ps-[max(3rem,calc((100vw-90rem)/2+3rem))] lg:pe-10">
          <p className="mb-7 text-[0.7rem] font-bold tracking-[0.14em] whitespace-nowrap text-gold sm:text-xs sm:tracking-[0.24em]">
            <Latin>STOCK HOUSE / FASHION DISCOVERY</Latin>
          </p>

          <h1
            id="hero-title"
            className="text-[2.9rem] leading-[1.12] font-bold tracking-tight sm:text-6xl lg:text-[4.1rem] xl:text-[4.9rem]"
          >
            <span className="block">ماركات كبيرة.</span>
            <span className="block text-gold">أسعار أذكى.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80 sm:text-xl">
            اختار القطع اللي تعجبك من براندات معروفة، وإحنا هنحسب السعر بالوزن.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#branches" variant="gold">
              اكتشف أقرب فرع
              <ArrowIcon width={18} height={18} />
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="outline-light">
              اعرف النظام
            </ButtonLink>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-sm">
            <Latin className="text-xs font-bold tracking-[0.2em] text-white">
              BIG BRANDS. SMART PRICES.
            </Latin>
            <span className="text-stone">رجالي · حريمي · أطفال</span>
          </div>
          <a
            href="#branches"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold"
          >
            <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" />
            فرعين: الهرم – اللبيني، والمقطم
          </a>
        </div>

        {/* Photography: end side (left in RTL) */}
        <div className="relative order-1 aspect-[5/4] sm:aspect-[16/10] lg:order-2 lg:col-span-6 lg:aspect-auto xl:col-span-7">
          <Image
            src={images.editorial}
            alt="ثلاثة شباب مصريين بيختاروا قطع لبس من راك منظم ومكوي في مساحة عرض هادية"
            fill
            preload
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-[62%_40%]"
          />
        </div>
      </div>
    </section>
  );
}
