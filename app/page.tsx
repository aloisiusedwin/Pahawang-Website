"use client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AboutUs from "@/components/Tentang/Tentang";
import Galeri from "@/components/Konservasi/Gallery";
import { Hero } from "@/components/Hero/Hero";
import Dokumenter from "@/components/Dokumenter/Dokumenter";
import CardProduk from "@/components/CardProduk/CardProduk";
import Penginapan from "@/components/Penginapan/Penginapan";
import Contact from "@/components/Contact/Contact";
import React, { useEffect } from "react";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Analytics />
      <SpeedInsights />
      <SmoothScroll />
      <Hero />
      <AboutUs />
      <Dokumenter />
      <CardProduk />
      <Galeri />
      <Penginapan />
      <Contact />
      <ScrollToTopButton />
    </>
  );
}
