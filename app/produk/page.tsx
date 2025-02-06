"use client";

import React, { useEffect, useState } from "react";
import Video from "@/components/Header/HeaderVideo";
import { HeaderHeroText } from "@/components/Header/HeaderHero";
import ProdukTemplate from "@/components/Card/card";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Home() {
  const { theme } = useTheme();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    scrollToTop();
    // Ambil data produk dari API
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
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
            Produk UMKM di Desa Pulau Pahawang merupakan hasil karya penuh
            kreativitas dari kelompok ibu-ibu setempat. Menggunakan bahan-bahan
            alami yang melimpah di sekitar Pulau Pahawang, setiap produk
            mencerminkan kekayaan alam dan kearifan tradisional. Dengan sentuhan
            tangan terampil, setiap produk yang dihasilkan memberikan kesan
            mendalam tentang keindahan dan budaya Pulau Pahawang.
          </p>
          <hr
            className={`border-t-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            } mb-4 lg:mb-1 mt-5`}
          />
        </div>

        <ProdukTemplate
          cards={products.map((product) => ({
            image: product.image,
            title: product.title,
            label: product.label,
            description: product.description,
            specifications: product.specifications,
            phoneNumber: product.phoneNumber,
            onClick: () => {
              console.log(`Klik pada produk: ${product.title}`);
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
