"use client";

import React, { useEffect } from "react";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import Video from "@/components/Header/HeaderVideo";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes";

// Impor font Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dusunData = [
  {
    image: "./images/sand.jpg",
    name: "Dusun I Suak Buah",
    description:
      "Terkenal dengan keindahan pantai dan panorama matahari terbenam yang memukau.",
  },
  {
    image: "./images/maledives01.jpg",
    name: "Dusun II Penggetahan",
    description:
      "Surga bawah laut dengan terumbu karang yang masih alami, cocok untuk snorkeling.",
  },
  {
    image: "./images/maledives02.jpg",
    name: "Dusun III Jeralangan",
    description:
      "Memiliki hutan mangrove yang lebat dan menjadi rumah bagi berbagai spesies burung.",
  },
  {
    image: "./images/maledives01.jpg",
    name: "Dusun IV Kalangan",
    description:
      "Destinasi populer untuk homestay dan pengalaman hidup bersama warga lokal.",
  },
  {
    image: "./images/maledives02.jpg",
    name: "Dusun V Pahawang",
    description:
      "Jantung pulau dengan berbagai aktivitas budaya dan seni tradisional.",
  },
  {
    image: "./images/sand.jpg",
    name: "Dusun VI Cukuh Nyai",
    description:
      "Dusun kecil yang menawarkan ketenangan dan keindahan alam tropis.",
  },
];

const DusunSection = () => {
  const { theme } = useTheme();

  return (
    <section className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className={`text-3xl font-bold text-center mb-8 ${theme === "dark" ? "text-green-300" : "text-green-900"}`}>
          Dusun di Pulau Pahawang
        </h2>
        <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-center mb-12`}>
          Setiap dusun di Pulau Pahawang memiliki daya tarik unik yang siap
          dijelajahi. Dari pantai berpasir putih hingga hutan mangrove yang
          asri, temukan pesona masing-masing dusun!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dusunData.map((dusun, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={dusun.image}
                alt={dusun.name}
                className="w-full h-64 object-cover"
              />
              <div className={`absolute bottom-0 w-full p-4 text-center ${theme === "dark" ? "bg-gray-900 bg-opacity-60" : "bg-white bg-opacity-60"}`}>
                <h3 className={`text-lg font-bold ${theme === "dark" ? "text-green-300" : "text-green-900"}`}>
                  {dusun.name}
                </h3>
                <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} text-sm mt-1`}>
                  {dusun.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Profil() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll ke atas saat halaman dimuat
  }, []);

  return (
    <div className={`${montserrat.className} ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Tombol Tema */}
      <div className="fixed top-4 right-4 z-50">
      </div>

      {/* Video Section */}
      <div className="relative h-full">
        <Video
          loop
          autoPlay
          muted
          src={"/videos/bech.mp4"} // Pastikan video berada di folder public/videos
          className="object-cover w-full h-[40vh] md:h-[60vh] lg:h-[85vh]"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 text-center overflow-hidden">
          <div className="text-white px-4">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">PULAU PAHAWANG</h1>
            <p className="text-lg sm:text-xl">
              Surga Tersembunyi di Selatan Lampung
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left ${theme === "dark" ? "text-green-300" : "text-green-900"}`}>
            Tentang Pulau Pahawang
          </h2>
          <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} leading-relaxed mb-6 text-justify`}>
            Pulau Pahawang adalah sebuah pulau kecil yang terletak di Kabupaten
            Pesawaran, Provinsi Lampung. Pulau ini terkenal dengan keindahan
            alam bawah lautnya, pantai berpasir putih, dan suasana yang tenang.
            Dengan luas sekitar 1.084 hektar, Pulau Pahawang menjadi destinasi
            wisata favorit bagi pencinta alam dan wisata bahari.
          </p>
          <hr className={`border-t-2 mb-4 lg:mb-1 mt-5 ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`} />
        </div>
      </section>

      {/* Dusun Section */}
      <DusunSection />

      {/* Scroll To Top Button */}
      <ScrollToTopButton />
      <SmoothScroll />
    </div>
  );
}
