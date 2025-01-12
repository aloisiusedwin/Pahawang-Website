"use client";
import AboutUs from "@/components/Tentang/Tentang";
import Galeri from "@/components/Gallery/Gallery";
import { Hero } from "@/components/Hero/Hero";
import CardProduk from "@/components/CardProduk/CardProduk";
import Penginapan from "@/components/Penginapan/Penginapan";
import Contact from "@/components/Contact/Contact"
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
      <SmoothScroll />
      <Hero />
      <AboutUs />

      {/* Section untuk video */}
      <div className="py-7 bg-gray-100 border-t border-b border-gray-300">
        <h2 className="text-center regular-24 xl:regular-40 mb-7 text-green-900">
          Dokumenter Terbaru
        </h2>
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-[250px] sm:h-[350px] md:h-[450px]"
            src="https://www.youtube.com/embed/zyXmsVwZqX4?si=fRFGXljAUoDRFs4E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <CardProduk />
      <Galeri />
      <Penginapan />
      <Contact />
      <ScrollToTopButton />
    </>
  );
}
