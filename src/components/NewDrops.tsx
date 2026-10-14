import { site } from "@/data/site";
import { CategoryCard, type Category } from "./CategoryCard";
import { ArrowIcon } from "./icons";
import { Reveal } from "./Reveal";
import { ButtonLink, SectionLabel, externalLinkProps } from "./ui";

/** All three crops come from the single supplied editorial photo. */
const categories: readonly Category[] = [
  {
    id: "men",
    ar: "رجالي",
    en: "MEN",
    alt: "شاب بيتفرج على القطع المعروضة في STOCK HOUSE",
    focal: "53% 30%",
    zoom: 1.85,
  },
  {
    id: "women",
    ar: "حريمي",
    en: "WOMEN",
    alt: "بنت ماسكة قميص أبيض وبتختار من القطع",
    focal: "27% 34%",
    zoom: 1.6,
  },
  {
    id: "kids",
    ar: "أطفال",
    en: "KIDS",
    alt: "راك قطع ملونة ومكوية على شماعات",
    focal: "97% 30%",
    zoom: 1.45,
  },
];

export function NewDrops() {
  const follow = site.socialFollowUrl;

  return (
    <section id="new-drop" aria-labelledby="drop-title" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel>NEW DROP</SectionLabel>
            <h2 id="drop-title" className="mt-5 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              كل زيارة فيها اكتشاف جديد.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-navy/75">
              وصل جديد بينزل باستمرار، والقطع المتاحة بتتغير من دروب للتاني.
            </p>
            <div className="mt-6">
              {follow ? (
                <ButtonLink href={follow} variant="navy" {...externalLinkProps}>
                  تابع أحدث الدروبات
                  <ArrowIcon width={18} height={18} />
                </ButtonLink>
              ) : (
                // No verified social URL yet: route to the branch WhatsApp groups.
                <ButtonLink
                  href="#branches"
                  variant="navy"
                  aria-label="تابع أحدث الدروبات من خلال جروب واتساب الفرع"
                >
                  تابع أحدث الدروبات
                  <ArrowIcon width={18} height={18} />
                </ButtonLink>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal stagger className="mt-14">
          <ul id="categories" aria-label="الأقسام" className="grid gap-4 sm:grid-cols-3 lg:gap-6">
            {categories.map((c, i) => (
              <CategoryCard key={c.id} category={c} index={i} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
