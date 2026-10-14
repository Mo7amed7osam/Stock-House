/**
 * Single source of truth for all STOCK HOUSE business data.
 * Every component, the footer, the mobile contact bar and the JSON-LD
 * read from this file. Do not duplicate branch details elsewhere.
 */

export type Branch = {
  id: string;
  /** Display name, Arabic */
  name: string;
  /** Short name used inside aria-labels, e.g. "فرع الهرم اللبيني" */
  ariaName: string;
  address: string;
  /** Used for JSON-LD PostalAddress only */
  addressLocality: string;
  addressRegion: string;
  phoneDisplay: string;
  phoneHref: string;
  /** E.164 phone, used in JSON-LD */
  phoneE164: string;
  mapUrl: string;
  whatsappGroupUrl: string;
};

export const branches: readonly Branch[] = [
  {
    id: "haram-el-lebeni",
    name: "فرع الهرم – اللبيني",
    ariaName: "فرع الهرم اللبيني",
    address:
      "4 برج الشعراوي، اللبيني، الهرم، بجوار جزارة الضياء وأمام التلاتيني الجديد.",
    addressLocality: "الهرم",
    addressRegion: "الجيزة",
    phoneDisplay: "01144345330",
    phoneHref: "tel:+201144345330",
    phoneE164: "+201144345330",
    mapUrl: "https://maps.app.goo.gl/7uu1sDTmdL3AGeso8",
    whatsappGroupUrl: "https://chat.whatsapp.com/JguXrjAtaC1An32wRH5I8q?mode=ac_t",
  },
  {
    id: "mokattam",
    name: "فرع المقطم",
    ariaName: "فرع المقطم",
    address: "شارع 9، المقطم، بجوار كنتاكي، أسفل لابوار، وأمام فودافون.",
    addressLocality: "المقطم",
    addressRegion: "القاهرة",
    phoneDisplay: "01144345229",
    phoneHref: "tel:+201144345229",
    phoneE164: "+201144345229",
    mapUrl: "https://maps.app.goo.gl/73jWaapZ19aHEjr48?g_st=ac",
    whatsappGroupUrl: "https://chat.whatsapp.com/HwvUleR6Y0d0RCPKRgcm9M?mode=ac_t",
  },
] as const;

export type OpeningHoursRow = {
  days: string;
  hours: string;
  /** schema.org day names, used in JSON-LD */
  schemaDays: readonly string[];
  opens: string;
  /** "00:00" after "opens" means the store closes at midnight */
  closes: string;
};

/** Same hours apply to both branches, as supplied. */
export const openingHours: readonly OpeningHoursRow[] = [
  {
    days: "السبت إلى الخميس",
    hours: "من 12 ظهرًا حتى 12 صباحًا",
    schemaDays: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
    ],
    opens: "12:00",
    closes: "00:00",
  },
  {
    days: "الجمعة",
    hours: "من 3 مساءً حتى 12 صباحًا",
    schemaDays: ["Friday"],
    opens: "15:00",
    closes: "00:00",
  },
] as const;

/**
 * Site configuration placeholders.
 * Set NEXT_PUBLIC_SITE_URL to the final domain once it is confirmed.
 */
const SITE_URL_PLACEHOLDER = "https://replace-with-final-domain.example";

export const site = {
  name: "STOCK HOUSE",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL_PLACEHOLDER,
  hasFinalUrl: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
  title: "STOCK HOUSE | ماركات كبيرة بأسعار أذكى",
  description:
    "اكتشف اختيارات رجالي وحريمي وأطفال من براندات معروفة في STOCK HOUSE. اختار القطع اللي تعجبك والسعر يتحسب بالوزن. زور فرع الهرم – اللبيني أو فرع المقطم.",
  /**
   * SOCIAL_FOLLOW_URL_PLACEHOLDER — no verified Instagram/Facebook URL yet.
   * While null, "تابع أحدث الدروبات" points to the branches section,
   * where the verified WhatsApp groups live.
   */
  socialFollowUrl: null as string | null,
} as const;

export const logos = {
  primaryGoldField:
    "/assets/logos/sh-monogram/final-navy-gold/stock-house-shield-primary-gold-field.svg",
  navyTransparent:
    "/assets/logos/sh-monogram/final-navy-gold/stock-house-shield-navy-transparent.svg",
  goldTransparent:
    "/assets/logos/sh-monogram/final-navy-gold/stock-house-shield-gold-transparent.svg",
  twoColor:
    "/assets/logos/sh-monogram/final-navy-gold/stock-house-shield-two-color.svg",
} as const;

export const images = {
  editorial: "/assets/images/editorial-discovery.png",
  og: "/assets/images/og-editorial-discovery.jpg",
} as const;

export type NavItem = { href: string; label: string };

export const navItems: readonly NavItem[] = [
  { href: "#home", label: "الرئيسية" },
  { href: "#new-drop", label: "وصل جديد" },
  { href: "#how-it-works", label: "إزاي بيشتغل؟" },
  { href: "#branches", label: "الفروع" },
  { href: "#faq", label: "الأسئلة الشائعة" },
] as const;
