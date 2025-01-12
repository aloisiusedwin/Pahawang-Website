"use client";
import React from "react";
import Swiper from "./Swiper";

const Galeri = () => {
  return (
    <section id="Galeri" className="py-2 bg-cover bg-no-repeat bg-center p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center regular-24 xl:regular-40 mb-1 text-green-900">
          Konservasi Terumbu Karang
        </h1>
        <p className="text-center regular-16 xl:regular-20 mb-1 text-green-900">
          Konservasi terumbu karang di Pulau Pahawang merupakan langkah penting
          untuk melestarikan ekosistem laut, menjaga keberagaman hayati, dan
          mendukung mata pencaharian masyarakat lokal yang bergantung pada hasil
          laut.
        </p>
        <Swiper />
        <hr className="border-t-2 border-gray-300 mb-4 lg:mb-1 mt-10" />
      </div>
    </section>
  );
};

export default Galeri;
