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
    image: "./images/penginapan/teras.jpeg",
    title: "Teras Pahawang",
    label: "Penginapan Pulau Pahawang",
    description:
      "Pilihan villa nyaman di Pulau Pahawang dengan berbagai fasilitas, seperti akses pantai dan pengalaman menginap yang berkesan.",
    specifications: [
      "Seluruh cottage",
      "2 orang",
      "1 kamar tidur",
      "1 kamar mandi",
      "1 tempat tidur",
      "50 m²"
    ],
    phoneNumber: "6281995731245",
  },
  {
    image: "./images/penginapan/andreas.jpeg",
    title: "Andreas Resort Villa Air Pahawang",
    label: "Penginapan Pulau Pahawang",
    description:
      "Pilihan villa nyaman di Pulau Pahawang dengan berbagai fasilitas, seperti akses pantai, Wi-Fi, dan pengalaman menginap yang berkesan.",
    specifications: [
      "Kamar mandi pribadi",
      "Ber-AC",
      "Dapur",
      "Lemari es",
      "Mesin pembuat kopi",
      "Akses ke pantai",
      "Snorkeling",
      "Wi-Fi gratis",
      "Wi-Fi di area publik",
      "Tempat kerja dengan internet publik"
    ],
    phoneNumber: "628118888513",
  },
  {
    image: "./images/penginapan/mangrove.jpeg",
    title: "Villa Mangrove Pulau Pahawang",
    label: "Penginapan Pulau Pahawang",
    description:
      "Pilihan villa nyaman di Pulau Pahawang dengan berbagai fasilitas, seperti akses pantai dan pengalaman menginap yang berkesan.",
    specifications: [
      "Di tepi pantai",
      "Kamar Tidur",
      "Kamar Mandi",
    ],
    phoneNumber: "6281286158696",
  },
  {
    image: "./images/penginapan/nadiya.jpeg",
    title: "La Nadiya Villa Pahawang",
    label: "Penginapan Pulau Pahawang",
    description:
      "Villa, food and beverage and tourism destination",
    specifications: [
      "Di tepi pantai",
      "Wi-Fi",
      "Ber-AC",
      "Sarapan"
    ],
    phoneNumber: "62817858085",
  },
  {
    image: "./images/penginapan/nadiya.jpeg",
    title: "Villa Kembar",
    label: "Penginapan Pulau Pahawang",
    description:
      "Pilihan villa nyaman di Pulau Pahawang dengan berbagai fasilitas, seperti akses pantai, Wi-Fi, dan pengalaman menginap yang berkesan.",
    specifications: [
      "Kamar Mandi Pribad",
      "Wi-Fi",
      "Ber-AC",
      "Sarapan",
      "Perlengkapan Mandi",
      "Televisi"
    ],
    phoneNumber: "08127289425",
  },
  {
    image: "./images/penginapan/nadiya.jpeg",
    title: "De'Boer Pahawang",
    label: "Penginapan Pulau Pahawang",
    description:
      " Swasana Alam,  pantai dan perbukitan yang sejuk. Rasa hidangan laut di sajikan langsung dari alam. Membuka pintu dan jendela kamar menyatu  dengan alam, pantai dan debur ombak. Bersantai di tepi pantai atau berenang di air laut yang tenang. Bersantap dengan hidangan khas laut dengan menu pilihan.",
    specifications: [
      "Double Bed dan Single Bed",
      "Air Mineral, kopi dan Teh",
      "Teko Pemanas Air listrik",
      "Perlengkapan Mandi",
    ],
    phoneNumber: "087798908789",
  },
];

export default function Home() {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  useEffect(() => {
    scrollToTop(); 
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
          src={"./videos/jaw.mp4"}
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
            className={`text-sm sm:text-base lg:text-lg leading-loose text-center lg:text-justify ${
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
