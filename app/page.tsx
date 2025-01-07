'use client';
import AboutUs from "@/components/AboutUs/AboutUs";
import Contact from "@/components/Contact/Contact";
import Gallery from "@/components/Gallery/Gallery";
import { Hero } from "@/components/Hero/Hero";
import CardProduk from "@/components/CardProduk/CardProduk";
import PricingCards from "@/components/PricingCards/PricingCards";
import React, { useEffect } from "react";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";

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
      <Contact />
      <ScrollToTopButton />
    </>
  );
}
