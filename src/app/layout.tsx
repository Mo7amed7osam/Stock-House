import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Manrope } from "next/font/google";
import { images, site } from "@/data/site";
import "./globals.css";

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  // CANONICAL_URL_PLACEHOLDER: set NEXT_PUBLIC_SITE_URL to the final domain.
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: images.og,
        width: 1200,
        height: 800,
        alt: "ثلاثة شباب بيختاروا قطع لبس من راك منظم في STOCK HOUSE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [images.og],
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#08132B",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${plexArabic.variable} ${manrope.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
