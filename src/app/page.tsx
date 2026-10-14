import { BrandDiscovery } from "@/components/BrandDiscovery";
import { Branches } from "@/components/Branches";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { JsonLd } from "@/components/JsonLd";
import { MobileContactBar } from "@/components/MobileContactBar";
import { NewDrops } from "@/components/NewDrops";
import { Urgency } from "@/components/Urgency";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <NewDrops />
        <BrandDiscovery />
        <HowItWorks />
        <Urgency />
        <Branches />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileContactBar />
    </>
  );
}
