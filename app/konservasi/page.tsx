"use client";
import React, { useRef, useEffect, useState } from "react";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import Video from "@/components/Header/HeaderVideo";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dokumentasiFoto = [
  { image: "/images/konservasi/terumbu1.jpg" },
  { image: "/images/konservasi/terumbu2.jpg" },
  { image: "/images/konservasi/terumbu3.jpg" },
  { image: "/images/konservasi/terumbu4.jpg" },
  { image: "/images/konservasi/terumbu5.jpg" },
  { image: "/images/konservasi/terumbu6.jpg" },
];

const KonservasiSecrtion = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationFrameId = useRef<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (containerRef.current) {
      const container = containerRef.current;
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    if (containerRef.current) {
      const container = containerRef.current;
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;

      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
      animationFrameId.current = requestAnimationFrame(() => {
        container.scrollLeft = scrollLeft - walk;
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth - container.clientWidth;
      } else if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const infiniteData = [
    ...dokumentasiFoto,
    ...dokumentasiFoto,
    ...dokumentasiFoto,
  ];

  return (
    <section
      className={`py-16 px-4 sm:px-8 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl font-extrabold text-center ${
            theme === "dark" ? "text-green-200" : "text-green-900"
          } mb-10`}
        >
          Dokumentasi Konservasi Terumbu Karang
        </h2>
        <p
          className={`text-center text-lg sm:text-xl mb-8 ${
            theme === "dark" ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Geser ke kiri atau kanan untuk menjelajahi momen penting dalam program
          konservasi kami.
        </p>

        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto py-4 scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {infiniteData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={`Dokumentasi ${index + 1}`}
                className="w-full h-48 rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default function Profil() {
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`${montserrat.className} ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Video Section */}
      <div className="relative h-full">
        <Video
          loop
          autoPlay
          muted
          src={"/videos/konservasi.mp4"}
          className="object-cover w-full h-[40vh] md:h-[60vh] lg:h-[85vh]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 text-center overflow-hidden">
          <div className="text-white px-4">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              Konservasi Terumbu Karang
            </h1>
            <p className="text-lg sm:text-xl">
              Bersama Lindungi Ekosistem Laut untuk Masa Depan Berkelanjutan
            </p>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto mt-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left ${
              theme === "dark" ? "text-green-200" : "text-green-900"
            }`}
          >
            Konservasi Terumbu Karang
          </h2>
          <p
            className={`text-sm sm:text-base lg:text-lg leading-loose text-justify lg:text-justify ${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Konservasi terumbu karang merupakan upaya untuk melindungi dan
            memulihkan ekosistem laut yang vital bagi kehidupan bawah laut dan
            masyarakat pesisir. Terumbu karang menyediakan habitat bagi berbagai
            jenis biota laut, mendukung ekonomi lokal, dan melindungi garis
            pantai dari abrasi.
          </p>
          <hr
            className={`border-t-2 mb-4 lg:mb-1 mt-5 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            }`}
          />
        </div>
      </section>

      <KonservasiSecrtion />

      {/* Scroll To Top Button */}
      <ScrollToTopButton />
      <SmoothScroll />
    </div>
  );
}
