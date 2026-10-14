import { ArrowIcon } from "./icons";
import { Logo } from "./Logo";
import { ButtonLink } from "./ui";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-title"
      className="on-dark bg-navy py-24 text-center text-white sm:py-32"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 sm:px-8">
        <Logo variant="goldTransparent" size={88} alt="" className="size-20 sm:size-22" />
        <h2 id="final-title" className="mt-10 text-4xl leading-tight font-bold sm:text-6xl">
          اكتشافك الجاي مستنيك.
        </h2>
        <p className="mt-5 text-lg text-white/75 sm:text-xl">
          زور أقرب فرع، اختار ستايلك، وخد قيمة أذكى.
        </p>
        <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href="#branches" variant="gold">
            اختار أقرب فرع
            <ArrowIcon width={18} height={18} />
          </ButtonLink>
          <ButtonLink href="#hours" variant="outline-light">
            اعرف مواعيد العمل
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
