"use client";
import React from "react";
import { useTheme } from "next-themes";
import tentang1 from "@/public/images/tentang1.jpg";
import tentang2 from "@/public/images/tentang2.jpg";

const Tentang = () => {
  const { theme } = useTheme();

  return (
    <section
      id="Tentang"
      className={`relative flex flex-col md:flex-row items-center gap-8 padding-container py-10 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-[#E6F9F4] text-black"
      }`}
    >
      {/* Image Container */}
      <div className="flex-1 flex gap-4 justify-center">
        {/* Image 1 */}
        <div className="relative w-[45%] md:w-[40%] h-[250px] md:h-[350px] rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={tentang1.src}
            alt="Pulau Pahawang Image 1"
          />
        </div>
        {/* Image 2 */}
        <div className="relative w-[45%] md:w-[40%] h-[250px] md:h-[350px] rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={tentang2.src}
            alt="Pulau Pahawang Image 2"
          />
        </div>
      </div>

      {/* Text Container */}
      <div
        className={`flex-1 p-6 rounded-3xl ${
          theme === "dark" ? "bg-black/50 text-white" : "bg-white/30 text-black"
        }`}
      >
        <h1
          className={`text-xl md:text-3xl font-bold mb-5 ${
            theme === "dark" ? "text-green-300" : "text-green-900"
          }`}
        >
          Pulau Pahawang
        </h1>
        <p
          className={`text-justify text-sm md:text-base leading-relaxed ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Surga Tersembunyi Nusantara yang Memikat dengan Keindahan Alam Bawah
          Laut, Pantai Berpasir Putih, dan Kehangatan Penduduk Lokal. Kekayaan
          kuliner khas seperti Dodol Mangrove dan Kerupuk Jengkol mendukung UMKM
          lokal, menjadikannya destinasi sempurna untuk menikmati wisata,
          budaya, dan petualangan yang tak terlupakan.
        </p>
      </div>
    </section>
  );
};

export default Tentang;
