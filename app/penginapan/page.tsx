"use client";

import React, { useEffect } from "react";
import Video from "@/components/Header/HeaderVideo";
import { HeaderHeroText } from "@/components/Header/HeaderHero";
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

const data = [
  {
    image: "./images/penginapan/teras pahawang.jpg",
    title: "Teras Pahawang",
    label: "Penginapan Pulau Pahawang",
    description: "Penginapan dengan nuansa asri pinggir pantai.",
    specifications: [
      "Seluruh cottage",
      "2 orang",
      "1 kamar tidur",
      "1 kamar mandi",
      "1 tempat tidur",
      "50 m²",
      "Dusun Penggetahan, Desa Pulau Pahawang",
    ],
    phoneNumber: "6281995731245",
  },
  {
    image: "./images/penginapan/villa mangrove.jpg",
    title: "Villa Mangrove Pulau Pahawang",
    label: "Penginapan Pulau Pahawang",
    description: "Penginapan dengan sensasi menginap di atas laut.",
    specifications: [
      "Di tepi pantai",
      "Kamar Tidur",
      "Kamar Mandi",
      "Dusun Kalangan, Desa Pulau Pahawang",
    ],
    phoneNumber: "6281286158696",
  },
  {
    image: "./images/penginapan/la nadiya.jpg",
    title: "La Nadiya Villa Pahawang",
    label: "Penginapan Pulau Pahawang",
    description: "Penginapan dengan pemandangan hijau Pulau Pahawang.",
    specifications: [
      "Di tepi pantai",
      "Wi-Fi",
      "Ber-AC",
      "Sarapan",
      "Dusun Cukuh Nyai, Desa Pulau Pahawang",
    ],
    phoneNumber: "62817858085",
  },
  {
    image: "./images/penginapan/villa kembar.jpg",
    title: "Villa Kembar",
    label: "Penginapan dengan nuansa asri pinggir pantai.",
    description:
      "Pilihan villa nyaman di Pulau Pahawang dengan berbagai fasilitas, seperti akses pantai, Wi-Fi, dan pengalaman menginap yang berkesan.",
    specifications: [
      "Kamar Mandi Pribadi",
      "Wi-Fi",
      "Ber-AC",
      "Sarapan",
      "Perlengkapan Mandi",
      "Televisi",
    ],
    phoneNumber: "08127289425",
  },
  {
    image: "./images/penginapan/de boer.png",
    title: "De'Boer Pahawang",
    label: "Penginapan Pulau Pahawang",
    description: "Penginapan dengan nuansa tenang di pinggir pantai.",
    specifications: [
      "Double Bed dan Single Bed",
      "Air Mineral, kopi dan Teh",
      "Teko Pemanas Air listrik",
      "Perlengkapan Mandi",
      "Dusun Cukuh Nyai, Desa Pulau Pahawang",
    ],
    phoneNumber: "087798908789",
  },
];

export default function Home() {
  const { theme } = useTheme();

  useEffect(() => {
    scrollToTop(); 
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

        {/* Products */}
        <ProdukTemplate
          cards={data.map((card) => ({
            ...card,
            onClick: () => {
              console.log(`Klik pada produk: ${card.title}`);
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
