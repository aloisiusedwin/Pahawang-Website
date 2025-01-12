"use client";
import React, { useEffect } from "react";
import Video from "@/components/Header/HeaderVideo";
import { HeaderHeroText } from "@/components/Header/HeaderHero";
import ProdukTemplate from "@/components/Card/card";
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

const data = [
  {
    image: "./images/penginapan/andreas.jpeg",
    title: "Andreas Resort",
    label:
      "Asbak olahan dari limbah yang diperoleh dari sampah-sampah sekitar Pulau Pahawang.",
    description:
      "Asbak bambu unik yang dibuat dari limbah bambu, menghadirkan keindahan dan kesederhanaan dari Pulau Pahawang.Asbak bambu unik yang dibuat dari limbah bambu, menghadirkan keindahan dan kesederhanaan dari Pulau Pahawang.Asbak bambu unik yang dibuat dari limbah bambu, menghadirkan keindahan dan kesederhanaan dari Pulau Pahawang.",
    specifications: ["Material: Bambu", "Dimensi: 10x10 cm", "Berat: 200 gram"],
    phoneNumber: "628123456789",
  },
  {
    image: "./images/produk/pembohong.png",
    title: "Villa Cakrawala",
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
    title: "Villa Penggetahan",
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
    scrollToTop(); 
  }, []);

  return (
    <div className={montserrat.className}>
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
            title="Penginapan"
            description="Penginapan nyaman di Pulau Pahawang dengan fasilitas lengkap, pemandangan indah, dan lokasi dekat spot snorkeling terbaik"
            containerStyle="max-w-[90%] mx-auto text-center lg:text-left overflow-hidden"
            titleStyle="text-white font-bold text-[clamp(1.2rem, 4vw, 2rem)] leading-tight"
            descriptionStyle="text-gray-200 text-[clamp(0.8rem, 3vw, 1rem)] leading-relaxed"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-12 px-4 sm:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-green-900 mb-4 text-center lg:text-left">
            Penginapan Pulau Pahawang
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-loose text-center lg:text-justify">
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
          <hr className="border-t-2 border-gray-300 mb-4 lg:mb-1 mt-5" />
        </div>

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
