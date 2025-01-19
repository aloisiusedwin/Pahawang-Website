"use client";
import React from "react";
import { useTheme } from "next-themes"; // Import useTheme for theme detection
import Swiper from "./Swiper";

const Galeri = () => {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  return (
    <section
      id="Galeri"
      className={`py-2 bg-cover bg-no-repeat bg-center p-8 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h1
          className={`text-center regular-24 xl:regular-40 mb-1 ${
            theme === "dark" ? "text-green-300" : "text-green-900"
          }`}
        >
          Konservasi Terumbu Karang
        </h1>
        <p
          className={`text-center regular-16 xl:regular-20 mb-1 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Konservasi terumbu karang di Pulau Pahawang merupakan langkah penting
          untuk melestarikan ekosistem laut, menjaga keberagaman hayati, dan
          mendukung mata pencaharian masyarakat lokal yang bergantung pada hasil
          laut.
        </p>
        <Swiper />
        <hr className="border-t-2 mb-4 lg:mb-1 mt-10" />
      </div>
    </section>
  );
};

export default Galeri;
