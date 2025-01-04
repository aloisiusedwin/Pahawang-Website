import Tentang from "@/components/AboutUs/AboutUs";
import Contact from "@/components/Contact/Contact";
import Gallery from "@/components/Gallery/Gallery";
import { Hero } from "@/components/Hero/Hero";
import Produk from "@/components/HowWeWork/HowWeWork";
import PricingCards from "@/components/PricingCards/PricingCards";

export default function Home() {
  return (
    <>
      <Hero />
      <Tentang />
      <Produk />
      <Gallery />
      <PricingCards />
      <Contact />
    </>
  );
}
