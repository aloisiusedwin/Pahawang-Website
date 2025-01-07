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
    title: "Asbak Bambu",
    label:
      "Asbak olahan dari limbah yang diperoleh dari sampah-sampah sekitar Pulau Pahawang.",
  },
  {
    image: "./images/produk/pembohong.png",
    title: "Dodol Mangrove",
    label: "Dodol mangrove khas pahawang cik. enak loh langsung diborong der.",
  },
  {
    image: "./images/produk/pajamass.jpg",
    title: "Ikan Asin Tawar",
    label:
      "Asbak olahan dari limbah yang diperoleh dari sampah-sampah sekitar Pulau Pahawang.",
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
            title="PRODUK UMKM"
            description="Oleh-Oleh dengan Sentuhan Cinta dan Tradisi, Sempurnakan Perjalanan Anda"
            containerStyle="max-w-[90%] mx-auto text-center lg:text-left overflow-hidden"
            titleStyle="text-white font-bold text-[clamp(1.2rem, 4vw, 2rem)] leading-tight"
            descriptionStyle="text-gray-200 text-[clamp(0.8rem, 3vw, 1rem)]  leading-relaxed"
          />
        </div>
      </div>

      {/* Kontainer Title, Deskripsi, dan Produk */}
      <div className="max-w-7xl mx-auto my-12 px-4 sm:px-8">
        {/* Title dan Deskripsi */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-green-900 mb-4 text-center lg:text-left">
            Pilihan Produk Terbaik
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-loose text-center lg:text-left">
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
          <hr className="border-t-2 border-gray-300 mb-4 lg:mb-1 mt-5" />
        </div>

        {/* Produk */}
        <ProdukTemplate
          cards={data}
          backgroundImage="https://i.imgur.com/yourBackgroundImage.jpg"
        />
      </div>

      <ScrollToTopButton />
      <SmoothScroll />
    </div>
  );
}
