"use client";

import React, { useEffect } from "react";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import Video from "@/components/Header/HeaderVideo";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes";
import CardDusun from "@/components/Dusun/CardDusun";

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
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 812 3456 7890",
  },
  {
    image: "./images/maledives01.jpg",
    name: "Dusun II Penggetahan",
    description:
      "Surga bawah laut dengan terumbu karang yang masih alami, cocok untuk snorkeling.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 813 4567 8901",
  },
  {
    image: "./images/maledives02.jpg",
    name: "Dusun III Jeralangan",
    description:
      "Memiliki hutan mangrove yang lebat dan menjadi rumah bagi berbagai spesies burung.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 814 5678 9012",
  },
  {
    image: "./images/maledives01.jpg",
    name: "Dusun IV Kalangan",
    description:
      "Destinasi populer untuk homestay dan pengalaman hidup bersama warga lokal.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 815 6789 0123",
  },
  {
    image: "./images/maledives02.jpg",
    name: "Dusun V Pahawang",
    description:
      "Jantung pulau dengan berbagai aktivitas budaya dan seni tradisional.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 816 7890 1234",
  },
  {
    image: "./images/sand.jpg",
    name: "Dusun VI Cukuh Nyai",
    description:
      "Dusun kecil yang menawarkan ketenangan dan keindahan alam tropis.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 817 8901 2345",
  },
];

const DusunSection = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} py-12`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2
          className={`text-3xl font-bold text-center mb-8 ${
            theme === "dark" ? "text-green-300" : "text-green-900"
          }`}
        >
          Dusun di Pulau Pahawang
        </h2>
        <p
          className={`$${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          } text-center mb-12`}
        >
          Setiap dusun di Pulau Pahawang memiliki daya tarik unik yang siap
          dijelajahi. Dari pantai berpasir putih hingga hutan mangrove yang
          asri, temukan pesona masing-masing dusun!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dusunData.map((dusun, index) => (
            <CardDusun
              key={index}
              image={dusun.image}
              name={dusun.name}
              description={dusun.description}
              location={dusun.location}
              contactInfo={dusun.contactInfo}
            />
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
          src={"/videos/bech.mp4"} // Pastikan video berada di folder public/videos
          className="object-cover w-full h-[40vh] md:h-[60vh] lg:h-[85vh]"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 text-center overflow-hidden">
          <div className="text-white px-4">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              PULAU PAHAWANG
            </h1>
            <p className="text-lg sm:text-xl">
              Surga Tersembunyi di Selatan Lampung
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left ${
              theme === "dark" ? "text-green-300" : "text-green-900"
            }`}
          >
            Tentang Pulau Pahawang
          </h2>
          <p
            className={`$${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            } leading-relaxed mb-6 text-justify`}
          >
            Pulau Pahawang adalah sebuah pulau kecil yang terletak di Kabupaten
            Pesawaran, Provinsi Lampung. Pulau ini terkenal dengan keindahan
            alam bawah lautnya, pantai berpasir putih, dan suasana yang tenang.
            Dengan luas sekitar 1.084 hektar, Pulau Pahawang menjadi destinasi
            wisata favorit bagi pencinta alam dan wisata bahari.
          </p>
          <hr
            className={`border-t-2 mb-4 lg:mb-1 mt-5 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            }`}
          />
        </div>
      </section>

      <DusunSection />

      {/* Scroll To Top Button */}
      <ScrollToTopButton />
      <SmoothScroll />
    </div>
  );
}
