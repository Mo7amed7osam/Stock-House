import { PlusIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./ui";

const faqs = [
  {
    q: "السعر بيتحسب إزاي؟",
    a: "بعد ما تختار القطع اللي عجبتك، بنجمعها ونحسب السعر النهائي حسب الوزن.",
  },
  {
    q: "إمتى بينزل وصل جديد؟",
    a: "وصل جديد بينزل باستمرار. تابع جروب الفرع علشان تعرف آخر التحديثات.",
  },
  {
    q: "هل فيه رجالي وحريمي وأطفال؟",
    a: "أيوه، STOCK HOUSE فيه اختيارات للرجالي والحريمي والأطفال، حسب المتاح في كل دروب.",
  },
  {
    q: "هل نفس القطع موجودة في كل الفروع؟",
    a: "القطع والمقاسات والبراندات المتاحة ممكن تختلف من فرع للتاني ومن دروب للتاني.",
  },
  {
    q: "هل أقدر أشتري أونلاين؟",
    a: "تجربة STOCK HOUSE متاحة حاليًا من خلال فروعنا. زور أقرب فرع علشان تشوف وتختار القطع.",
  },
  {
    q: "مواعيد العمل إيه؟",
    a: "السبت إلى الخميس من 12 ظهرًا حتى 12 صباحًا، والجمعة من 3 مساءً حتى 12 صباحًا.",
  },
  {
    q: "فين الفروع؟",
    a: "فرع الهرم – اللبيني، وفرع المقطم. هتلاقي العناوين وروابط خرائط جوجل في قسم الفروع.",
  },
] as const;

/**
 * Native <details>/<summary> accordion: keyboard and screen-reader support
 * built in, zero client JavaScript.
 */
export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white py-20 sm:py-28">
      <Reveal className="mx-auto grid max-w-[90rem] gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-4">
          <SectionLabel>FAQ</SectionLabel>
          <h2 id="faq-title" className="mt-5 text-4xl leading-tight font-bold sm:text-5xl">
            الأسئلة الشائعة
          </h2>
        </div>

        <div className="border-t border-navy/20 lg:col-span-8">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-navy/20">
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-5 text-lg font-bold transition-colors hover:text-navy/70 sm:text-xl">
                <h3>{item.q}</h3>
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center border-2 border-navy text-navy transition-colors duration-200 group-open:bg-navy group-open:text-gold"
                >
                  <PlusIcon width={22} height={22} strokeWidth={2.25} className="transition-transform duration-300 group-open:rotate-45" />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-base leading-relaxed text-navy/80 sm:text-lg">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
