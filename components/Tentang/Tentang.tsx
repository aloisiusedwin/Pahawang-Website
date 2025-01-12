"use client";
import React from "react";
import { useTheme } from "next-themes"; // Import useTheme for theme detection
import maledivesImg01 from "@/public/images/maledives01.jpg";
import maledivesImg02 from "@/public/images/maledives02.jpg";

const Tentang = () => {
  const { theme } = useTheme(); 

  return (
    <section
      id="Tentang"
      className={`relative flex padding-container items-center py-10 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-[#E6F9F4] text-black"
      }`}
    >
      <div className="flex h-[400px]">
        <div className="flex absolute left-[-80px] top-[-16px] 2xl:top-[-60px] lg:top-[-20px] md:top-[-80px] md:left-28">
          <img
            className="rounded-3xl border-2 border-white"
            src={maledivesImg01.src}
            alt="img"
            width={400}
            height={1200}
          />
        </div>
        <div className="flex absolute z-[-1] left-1/3 right-[-40px] top-[80px] h-5/6 2xl:top-[-120px] lg:top-[-60px] lg:h-[120%] lg:z-0">
          <img
            className="rounded-3xl border-2 border-white"
            src={maledivesImg02.src}
            alt="img"
            width={400}
            height={1200}
          />
        </div>
      </div>
      <div
        className={`p-4 rounded-3xl m-4 left-1/4 absolute xl:top-[80px] xl:left-2/3 ${
          theme === "dark" ? "bg-black/50 text-white" : "bg-white/30 text-black"
        }`}
      >
        <h1
          className={`regular-24 xl:regular-40 mb-5 ${
            theme === "dark" ? "text-green-300" : "text-green-900"
          }`}
        >
          Pulau Pahawang
        </h1>
        <p
          className={`regular-14 xl:regular-16 text-justify ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Surga Tersembunyi Nusantara yang Memikat dengan Keindahan Alam Bawah
          Laut, Pantai Berpasir Putih, dan Kehangatan Penduduk Lokal, Serta
          Kekayaan Kuliner Khas Seperti Dodol Mangrove dan Kerupuk Jengkol yang
          Mendukung UMKM Lokal, Menjadikannya Destinasi Sempurna untuk Menikmati
          Wisata, Budaya, dan Petualangan yang Tak Terlupakan.
        </p>
      </div>
    </section>
  );
};

export default Tentang;
