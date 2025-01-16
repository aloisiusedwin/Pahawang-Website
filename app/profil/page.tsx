"use client";

import React, { useEffect } from "react";
import Video from "@/components/Header/HeaderVideo";
import { HeaderHeroText } from "@/components/Header/HeaderHero";
import CardDusun from "@/components/Dusun/CardDusun";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes";

// Import font Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dusunData = [
  {
    images: ["./images/sand.jpg", "./images/maledives01.jpg"],
    name: "Dusun I Suak Buah",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu arcu commodo, eleifend mauris in, vulputate lorem.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 831-3137-4581",
  },
  {
    images: ["./images/maledives01.jpg"],
    name: "Dusun II Penggetahan",
    description:
      "Surga bawah laut dengan terumbu karang yang masih alami, cocok untuk snorkeling.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 813 4567 8901",
  },
  {
    images: ["./images/maledives02.jpg"],
    name: "Dusun III Jeralangan",
    description:
      "Memiliki hutan mangrove yang lebat dan menjadi rumah bagi berbagai spesies burung.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 814 5678 9012",
  },
  {
    images: ["./images/maledives01.jpg"],
    name: "Dusun IV Kalangan",
    description:
      "Destinasi populer untuk homestay dan pengalaman hidup bersama warga lokal.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 815 6789 0123",
  },
  {
    images: ["./images/maledives02.jpg"],
    name: "Dusun V Pahawang",
    description:
      "Jantung pulau dengan berbagai aktivitas budaya dan seni tradisional.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 816 7890 1234",
  },
  {
    images: ["./images/sand.jpg"],
    name: "Dusun VI Cukuh Nyai",
    description:
      "Dusun kecil yang menawarkan ketenangan dan keindahan alam tropis.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 817 8901 2345",
  },
];

export default function Profil() {
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          src={"/videos/bech.mp4"}
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

      <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-8">
        <div className="mb-8">
          <h2
            className={`text-2xl sm:text-4xl lg:text-6xl font-bold ${
              theme === "dark" ? "text-green-200" : "text-green-900"
            } mb-4 text-center lg:text-left`}
          >
            Dusun di Pulau Pahawang
          </h2>
          <p
            className={`text-sm sm:text-base lg:text-lg leading-loose text-justify lg:text-justify ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Setiap dusun di Pulau Pahawang memiliki daya tarik unik yang siap
            dijelajahi. Dari pantai berpasir putih hingga hutan mangrove yang
            asri, temukan pesona masing-masing dusun!
          </p>
          <hr
            className={`border-t-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            } mb-4 lg:mb-1 mt-5`}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dusunData.map((dusun, index) => (
            <CardDusun
              key={index}
              images={dusun.images}
              name={dusun.name}
              description={dusun.description}
              location={dusun.location}
              contactInfo={dusun.contactInfo}
            />
          ))}
        </div>
      </div>

      <ScrollToTopButton />
      <SmoothScroll />
    </div>
  );
}
