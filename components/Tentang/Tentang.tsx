import React from "react";
import MaledviesImg01 from "@/public/images/maledives01.jpg";
import MaledviesImg02 from "@/public/images/maledives02.jpg";

const Tentang = () => {
  return (
    <section
      id="Tentang"
      className="relative flex max-container padding-container items-center py-10 mb-10"
    >
      <div className="flex h-[400px]">
        <div className="flex absolute left-[-80px] top-[-16px] 2xl:top-[-60px] lg:top-[-20px] md:top-[-80px] md:left-0">
          <img
            className="rounded-3xl border-2 border-white"
            src={MaledviesImg01.src}
            alt="img"
            width={400}
            height={1200}
          />
        </div>
        <div className="flex absolute z-[-1] left-1/3 right-[-40px] top-[80px] h-5/6 2xl:top-[-120px] lg:top-[-60px] lg:h-[120%] lg:z-0">
          <img
            className="rounded-3xl border-2 border-white"
            src={MaledviesImg02.src}
            alt="img"
            width={400}
            height={1200}
          />
        </div>
      </div>
      <div className="p-4 bg-white rounded-3xl m-4 left-1/4 absolute xl:top-[80px] xl:left-2/3">
        <h1 className="regular-24 xl:regular-40 mb-5 text-green-900">Pulau Pahawang</h1>
        <p className="regular-14 xl:regular-16 text-justify">
        Surga Tersembunyi Nusantara yang Memikat dengan Keindahan Alam Bawah Laut, 
        Pantai Berpasir Putih, dan Kehangatan Penduduk Lokal, Serta Kekayaan Kuliner 
        Khas Seperti Dodol Mangrove dan Kerupuk Jengkol yang Mendukung UMKM Lokal, 
        Menjadikannya Destinasi Sempurna untuk Menikmati Wisata, Budaya, dan 
        Petualangan yang Tak Terlupakan.
        </p>
      </div>
    </section>
  );
};

export default Tentang;
