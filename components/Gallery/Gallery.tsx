// File: components/GaleriSection/GaleriSection.js

import React from "react";
import Swiper from "./Swiper";

const GaleriSection = () => {
  return (
    <div className="py-10">
      <div
        className="min-h-screen w-full flex flex-col md:flex-row items-center gap-12 px-8"
        style={{
          backgroundColor: "#1F3D3B",
          padding: "40px",
        }}
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
            Konservasi Terumbu Karang
          </h2>
          <p className="text-[#A3FFCC] text-lg md:text-xl">
            Konservasi terumbu karang di Pulau Pahawang merupakan langkah
            penting untuk melestarikan ekosistem laut, menjaga keberagaman
            hayati, dan mendukung mata pencaharian masyarakat lokal yang
            bergantung pada hasil laut.
          </p>
        </div>

        <div className="flex-1 rounded-lg overflow-hidden shadow-lg">
          <Swiper />
        </div>
      </div>
    </div>
  );
};

export default GaleriSection;
