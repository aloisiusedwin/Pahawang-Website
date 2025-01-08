"use client";
import React from "react";
import Swiper from "./Swiper";

const Gallery = () => {
  return (
    <section
      id="Galeri"
      className="max-container padding-container overflow-x-hidden pb-20"
    >
      <h1 className="flex bg-opacity-50 bg-white p-8 rounded-3xl text-black font-bold mb-4 lg:m-10 regular-24 xl:regular-40">
        Galeri
      </h1>
      <Swiper />
      <hr className="border-t-2 border-gray-300 mb-4 lg:mb-1 mt-10" />
    </section>
  );
};

export default Gallery;
