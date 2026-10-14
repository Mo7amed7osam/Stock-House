import { branches, navItems } from "@/data/site";
import { CopyrightYear } from "./CopyrightYear";
import { Logo } from "./Logo";
import { Latin, externalLinkProps } from "./ui";
import { WorkingHours } from "./WorkingHours";

const linkClass =
  "inline-flex min-h-11 items-center text-white/80 underline-offset-4 transition-colors hover:text-gold hover:underline";

export function Footer() {
  return (
    <footer className="on-dark border-t border-white/10 bg-navy text-white">
      <div className="mx-auto max-w-[90rem] px-5 pt-16 pb-10 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Logo variant="goldTransparent" size={64} alt="STOCK HOUSE" className="size-16" />
            <p className="mt-6 max-w-xs leading-relaxed text-white/75">
              ماركات كبيرة. أسعار أذكى. اختار القطع اللي تعجبك من براندات معروفة، والسعر بيتحسب بالوزن.
            </p>
            <p className="mt-4 text-xs font-bold tracking-[0.2em] text-gold">
              <Latin>BIG BRANDS. SMART PRICES.</Latin>
            </p>
          </div>

          <nav aria-label="روابط الفوتر" className="lg:col-span-2">
            <h2 className="text-sm font-bold text-gold">روابط</h2>
            <ul className="mt-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2 lg:col-span-5">
            <h2 className="text-sm font-bold text-gold">الفروع</h2>
            <div className="mt-4 grid gap-8 sm:grid-cols-2">
              {branches.map((b) => (
                <div key={b.id}>
                  <h3 className="text-lg font-bold">{b.name}</h3>
                  <a
                    href={b.phoneHref}
                    dir="ltr"
                    aria-label={`الاتصال ب${b.ariaName}`}
                    className={`font-latin font-bold tracking-wide ${linkClass}`}
                  >
                    {b.phoneDisplay}
                  </a>
                  <p className="text-sm leading-relaxed text-white/70">{b.address}</p>
                  <ul className="mt-2 flex flex-wrap gap-x-5">
                    <li>
                      <a
                        href={b.mapUrl}
                        aria-label={`فتح موقع ${b.ariaName} على خرائط جوجل`}
                        className={`text-sm ${linkClass}`}
                        {...externalLinkProps}
                      >
                        خرائط جوجل
                      </a>
                    </li>
                    <li>
                      <a
                        href={b.whatsappGroupUrl}
                        aria-label={`الانضمام إلى جروب واتساب ${b.ariaName}`}
                        className={`text-sm ${linkClass}`}
                        {...externalLinkProps}
                      >
                        جروب واتساب
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold text-gold">مواعيد العمل</h2>
            <WorkingHours
              className="mt-4 space-y-4"
              dayClassName="text-sm text-white/70"
              hoursClassName="mt-1 font-bold"
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>
            <Latin>© <CopyrightYear />STOCK HOUSE</Latin>. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
