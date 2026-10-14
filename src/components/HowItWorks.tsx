import { Reveal } from "./Reveal";
import { Latin, SectionLabel } from "./ui";

const steps = [
  { n: "01", title: "اختار", body: "اختار القطع والماركات اللي تناسب ستايلك." },
  { n: "02", title: "وزن", body: "نجمع اختياراتك ونحسب الوزن." },
  { n: "03", title: "ادفع بسعر أذكى", body: "خد اختياراتك بقيمة أفضل وطريقة مختلفة." },
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="bg-cream py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="03">HOW IT WORKS</SectionLabel>
          <h2 id="how-title" className="mt-5 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            اختيارك أسهل. والسعر أذكى.
          </h2>
        </Reveal>

        <Reveal stagger className="mt-14">
        <ol className="grid gap-0 md:grid-cols-3 md:gap-8 lg:gap-12">
          {steps.map((step) => (
            <li key={step.n} className="border-t-2 border-navy py-8 md:pb-0">
              <Latin className="block text-right text-[4.5rem] leading-none font-extrabold tracking-tight text-navy sm:text-[5.5rem]">
                {step.n}
              </Latin>
              <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
              <p className="mt-2 max-w-xs text-lg leading-relaxed text-navy/75">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
        </Reveal>

        <p className="mt-12 max-w-md border-t-2 border-navy pt-4 text-base font-medium text-navy md:mt-16">
          السعر النهائي بيتحدد حسب وزن القطع المختارة.
        </p>
      </div>
    </section>
  );
}
