import { branches } from "@/data/site";
import { BranchCard } from "./BranchCard";
import { ClockIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./ui";
import { WorkingHours } from "./WorkingHours";

export function Branches() {
  return (
    <section
      id="branches"
      aria-labelledby="branches-title"
      className="bg-cream pt-20 pb-16 sm:pt-28 sm:pb-20"
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel>FIND YOUR BRANCH</SectionLabel>
            <h2 id="branches-title" className="mt-5 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              اختار أقرب فرع وابدأ رحلة البحث.
            </h2>
          </div>

          {/* Single source for hours on the page; both branches share them. */}
          <div id="hours" className="border-s-2 border-gold ps-5 lg:col-span-5">
            <h3 className="flex items-center gap-2 text-sm font-bold">
              <ClockIcon width={18} height={18} />
              مواعيد العمل — الفرعين
            </h3>
            <WorkingHours
              className="mt-3 grid gap-4 sm:grid-cols-2"
              dayClassName="text-sm text-navy/70"
              hoursClassName="mt-1 text-lg font-bold"
            />
          </div>
        </Reveal>

        <Reveal stagger className="mt-14">
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
            {branches.map((b, i) => (
              <BranchCard key={b.id} branch={b} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
