"use client";

import React, { useEffect } from "react";
import Video from "@/components/Header/HeaderVideo";
import { HeaderHeroText } from "@/components/Header/HeaderHero";
import ProdukTemplate from "@/components/Card/card";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes"; // Import useTheme for theme detection

// Import font Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Smooth scrolling on page load
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const data = [
  {
    image: "./images/produk/umkm1.jpg",
    title: "Asbak Bambu",
    label:
      "Asbak olahan dari limbah yang diperoleh dari sampah-sampah sekitar Pulau Pahawang.",
    description:
      "Asbak bambu unik yang dibuat dari limbah bambu, menghadirkan keindahan dan kesederhanaan dari Pulau Pahawang.",
    specifications: ["Material: Bambu", "Dimensi: 10x10 cm", "Berat: 200 gram"],
    phoneNumber: "628123456789",
  },
  {
    image: "./images/produk/umkm2.jpeg",
    title: "Dodol Mangrove",
    label: "Dodol mangrove khas pahawang cik. enak loh langsung diborong der.",
    description:
      "Dodol mangrove khas Pahawang, dibuat dengan bahan alami dari hutan mangrove setempat.",
    specifications: [
      "Rasa: Original, Pandan",
      "Berat: 500 gram",
      "Bahan: Tepung ketan, mangrove",
    ],
    phoneNumber: "628987654321",
  },
  {
    image: "./images/produk/umkm3.jpeg",
    title: "Ikan Asin Tawar",
    label:
      "Ikan asin tawar dari Pulau Pahawang yang diolah secara higienis untuk rasa terbaik.",
    description:
      "Ikan asin tawar khas Pulau Pahawang, cocok sebagai lauk atau bahan masakan.",
    specifications: [
      "Berat: 1 kg",
      "Jenis: Ikan tawar",
      "Proses: Pengeringan alami",
    ],
    phoneNumber: "628111223344",
  },
];

export default function Home() {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  useEffect(() => {
    scrollToTop(); // Scroll to top on page load
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
          src={"./videos/produk.mp4"}
          className="object-cover w-full h-[40vh] md:h-[60vh] lg:h-[85vh]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 text-center overflow-hidden">
          <div className="text-white px-4">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">PRODUK UMKM</h1>
            <p className="text-lg sm:text-xl">
              Oleh-Oleh dengan Sentuhan Cinta dan Tradisi, Sempurnakan
              Perjalanan Anda
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
            Pilihan Produk Terbaik
          </h2>
          <p
            className={`text-sm sm:text-base lg:text-lg leading-loose text-justify lg:text-justify ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Temukan keindahan Pulau Pahawang dalam setiap produk UMKM yang
            dihasilkan dengan penuh cinta dan dedikasi. Mulai dari kerajinan
            tangan unik, makanan khas yang menggugah selera, hingga produk alami
            yang mencerminkan kekayaan alamnya, semuanya dirancang untuk membawa
            pesona Pahawang ke dalam hidup Anda. Setiap item tidak hanya cocok
            untuk dijadikan oleh-oleh spesial, tetapi juga sebagai koleksi
            pribadi yang sarat cerita dan makna. Dukung kreativitas lokal dan
            bawa pulang kehangatan budaya Pahawang melalui produk-produk
            istimewa ini!
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
