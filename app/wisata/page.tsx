"use client";
import React, { useEffect } from "react";
import Video from "@/components/Header/HeaderVideo";
import { HeaderHeroText } from "@/components/Header/HeaderHero";
import ProdukTemplate from "@/components/Card/card";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import { Montserrat } from "next/font/google";

// Impor font Montserrat
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
    image: "./images/produk/bald eagle.jpeg",
    title: "Wisata Bahari",
    label:
      "Asbak olahan dari limbah yang diperoleh dari sampah-sampah sekitar Pulau Pahawang.",
    description:
      "Asbak bambu unik yang dibuat dari limbah bambu, menghadirkan keindahan dan kesederhanaan dari Pulau Pahawang.Asbak bambu unik yang dibuat dari limbah bambu, menghadirkan keindahan dan kesederhanaan dari Pulau Pahawang.Asbak bambu unik yang dibuat dari limbah bambu, menghadirkan keindahan dan kesederhanaan dari Pulau Pahawang.",
    specifications: ["Material: Bambu", "Dimensi: 10x10 cm", "Berat: 200 gram"],
    phoneNumber: "628123456789",
  },
  {
    image: "./images/produk/pembohong.png",
    title: "Snorekeling",
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
    image: "./images/produk/pajamass.jpg",
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
  useEffect(() => {
    scrollToTop(); // Scroll to top on page load
  }, []);

  return (
    <div className={montserrat.className}>
      {/* Video Section */}
      <div className="relative h-full">
        <Video
          loop
          autoPlay
          muted
          src={"./videos/jaw.mp4"}
          className="object-cover w-full h-[40vh] md:h-[60vh] lg:h-[85vh]" // Tinggi video responsif
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 text-center overflow-hidden">
          <HeaderHeroText
            title="Wisata Pahawang"
            description="Surga tersembunyi di Lampung, menawarkan keindahan pantai berpasir putih, air laut jernih, serta pesona bawah laut yang memikat untuk snorkeling dan diving."
            containerStyle="max-w-[90%] mx-auto text-center lg:text-left overflow-hidden"
            titleStyle="text-white font-bold text-[clamp(1.2rem, 4vw, 2rem)] leading-tight"
            descriptionStyle="text-gray-200 text-[clamp(0.8rem, 3vw, 1rem)] leading-relaxed"
          />
        </div>
      </div>

      {/* Kontainer Title, Deskripsi, dan Produk */}
      <div className="max-w-7xl mx-auto my-12 px-4 sm:px-8">
        {/* Title dan Deskripsi */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-green-900 mb-4 text-center lg:text-left">
            Wisata Pulau Pahawang
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-loose text-center lg:text-justify">
          Pulau Pahawang adalah destinasi wisata yang memadukan keindahan alam dengan pengalaman seru yang tak terlupakan. 
          Dari pantai berpasir putih dan air laut yang jernih hingga pesona bawah laut yang memukau untuk snorkeling dan diving, 
          Pahawang menawarkan keajaiban alam yang memanjakan mata. Anda juga dapat menjelajahi hutan mangrove, 
          menikmati matahari terbenam yang menawan, serta berinteraksi dengan kehidupan masyarakat lokal yang ramah. 
          Setiap sudut Pulau Pahawang menyimpan cerita indah yang membuat kunjungan Anda semakin berkesan. 
          Temukan keajaiban tersembunyi di surga tropis ini dan jadikan momen liburan Anda tak terlupakan!
          </p>
          <hr className="border-t-2 border-gray-300 mb-4 lg:mb-1 mt-5" />
        </div>

        {/* Produk */}
        <ProdukTemplate
          cards={data.map((card) => ({
            ...card,
            onClick: () => {
              console.log(`Klik pada produk: ${card.title}`);
            },
          }))}
          backgroundImage="https://i.imgur.com/yourBackgroundImage.jpg"
        />
      </div>

      <ScrollToTopButton />
      <SmoothScroll />
    </div>
  );
}
