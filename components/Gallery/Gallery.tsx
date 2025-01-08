"use client";
import React from "react";
import Swiper from "./Swiper";

const Gallery = () => {
  return (
    <section
      id="Galeri"
      className="py-2 bg-cover bg-no-repeat bg-center p-8"
    >
      <div className="max-w-7xl mx-auto my-8">
        <h1 className="regular-24 xl:regular-40 mb-1 text-green-900">
          Galeri
        </h1>
        <Swiper />
        <hr className="border-t-2 border-gray-300 mb-4 lg:mb-1 mt-10" />
      </div>
    </section>

  );
};

export default Gallery;
