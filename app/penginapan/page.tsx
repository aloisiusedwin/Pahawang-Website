"use client";

import React, { useEffect, useState } from "react";
import Video from "@/components/Header/HeaderVideo";
import ProdukTemplate from "@/components/Card/card";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes"; // Import useTheme for theme switching

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Home() {
  const { theme } = useTheme();
  const [penginapan, setPenginapan] = useState<any[]>([]);

  useEffect(() => {
    scrollToTop();
    // Mengambil data penginapan dari API
    fetch("/api/penginapan")
      .then((response) => response.json())
      .then((data) => setPenginapan(data))
      .catch((error) => console.error("Error fetching penginapan:", error));
  }, []);

  return (
    <div
      className={`${montserrat.className} ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="relative h-full">
        <Video
          loop
          autoPlay
          muted
          src={"./videos/penginapan.mp4"}
          className="object-cover w-full h-[40vh] md:h-[60vh] lg:h-[85vh]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 text-center overflow-hidden">
          <div className="text-white px-4">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">Penginapan</h1>
            <p className="text-lg sm:text-xl">
              Penginapan nyaman di Pulau Pahawang dengan fasilitas lengkap,
              pemandangan indah, dan dekat spot snorkeling
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-8">
        <div className="mb-8">
          <h2
            className={`text-2xl sm:text-4xl lg:text-6xl font-bold ${
              theme === "dark" ? "text-green-200" : "text-green-900"
            } mb-4 text-center lg:text-left`}
          >
            Penginapan Pulau Pahawang
          </h2>
          <p
            className={`text-sm sm:text-base lg:text-lg leading-loose text-justify lg:text-justify${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Penginapan di Pulau Pahawang menawarkan kenyamanan dan keindahan
            alam tropis yang memukau. Dengan fasilitas lengkap dan suasana yang
            asri, penginapan ini menjadi tempat sempurna untuk beristirahat
            setelah menikmati aktivitas seru seperti snorkeling, diving, atau
            menjelajahi keindahan alam sekitar. Lokasinya strategis, dekat
            dengan pantai berpasir putih dan spot wisata utama, serta dilengkapi
            layanan ramah untuk membuat liburan Anda semakin berkesan. Nikmati
            momen istimewa di surga tropis ini dan rasakan pengalaman menginap
            yang tak terlupakan!
          </p>
          <hr
            className={`border-t-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            } mb-4 lg:mb-1 mt-5`}
          />
        </div>

        {/* Display Penginapan */}
        <ProdukTemplate
          cards={penginapan.map((card) => ({
            image: card.image,
            title: card.title,
            label: card.label,
            description: card.description,
            specifications: card.specifications,
            phoneNumber: card.phoneNumber,
            onClick: () => {
              console.log(`Klik pada penginapan: ${card.title}`);
            },
          }))}
          backgroundImage={`${
            theme === "dark"
              ? "https://i.imgur.com/darkBackground.jpg"
              : "https://i.imgur.com/lightBackground.jpg"
          }`}
        />
      </div>

      <ScrollToTopButton />
      <SmoothScroll />
    </div>
  );
}
