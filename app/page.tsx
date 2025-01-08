'use client';
import AboutUs from "@/components/Tentang/Tentang";
import Contact from "@/components/Contact/Contact";
import Gallery from "@/components/Gallery/Gallery";
import { Hero } from "@/components/Hero/Hero";
import CardProduk from "@/components/CardProduk/CardProduk";
import PricingCards from "@/components/Proker/Proker";
import React, { useEffect } from "react";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"], // Pilih subset yang dibutuhkan
  weight: ["400", "700"], // Pilih berat font (400 = normal, 700 = bold)
});


// Smooth scrolling on page load
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <SmoothScroll /> 
      <Hero />
      <AboutUs />
      <Gallery />
      <CardProduk />
      <PricingCards />
      <ScrollToTopButton />
    </>
  );
}
