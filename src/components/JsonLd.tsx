import { branches, images, logos, openingHours, site } from "@/data/site";

/** ClothingStore structured data for both branches, built from src/data/site.ts. */
export function JsonLd() {
  const abs = (path: string) => new URL(path, site.url).toString();

  const data = {
    "@context": "https://schema.org",
    "@graph": branches.map((b) => ({
      "@type": "ClothingStore",
      "@id": `${abs("/")}#${b.id}`,
      name: `${site.name} – ${b.name}`,
      brand: { "@type": "Brand", name: site.name },
      description: site.description,
      ...(site.hasFinalUrl ? { url: abs("/") } : {}),
      image: abs(images.og),
      logo: abs(logos.primaryGoldField),
      telephone: b.phoneE164,
      hasMap: b.mapUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: b.address,
        addressLocality: b.addressLocality,
        addressRegion: b.addressRegion,
        addressCountry: "EG",
      },
      openingHoursSpecification: openingHours.map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.schemaDays.map((d) => `https://schema.org/${d}`),
        opens: h.opens,
        closes: h.closes,
      })),
    })),
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so the payload can never close the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
