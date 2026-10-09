import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";
import { Compare } from "@/components/compare";
import { Doctors } from "@/components/doctors";
import { Faq } from "@/components/faq";
import { Header } from "@/components/header";
import { Reviews } from "@/components/reviews";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Treatment } from "@/components/treatment";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WhyUs } from "@/components/why-us";
import { pendingAnchors } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <WhyUs />
        <Services />
        <Compare />
        <Treatment />
        <Doctors />
        <Reviews />
        <Faq />
        <Booking />
      </main>
      {pendingAnchors.map((id) => (
        <div key={id} id={id} className="h-0 scroll-mt-8" />
      ))}
      <Footer />
      <ScrollReveal />
    </>
  );
}
