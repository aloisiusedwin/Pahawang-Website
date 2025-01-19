// Import dependencies
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
    images: ["./images/dusun/suakbuah.jpg"],
    name: "Dusun I Suak Buah",
    description:
      "Dusun Suak Buah merupakan sentral pendidikan. Di dusun tersebut terdapat sekolah mulai dari SD dan SMP. Keseharian masyarakat dusun Suak Buah berfokus di sektor perkebunan yaitu kelapa. Produk UMKM yang dikerjakan oleh ibu-ibu PKK di dusun Suak Buah yaitu olahan mangrove seperti dodol mangrove dan sirup mangrove.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 831-3137-4581",
  },
  {
    images: ["./images/dusun/suakbuah.jpg"],
    name: "Dusun II Penggetahan",
    description:
      "Di Dusun Penggetahan, terdapat balai desa yang menjadi lokasi administrasi desa. Mata pencaharian yang terdapat di Dusun Penggetahan yakni pertanian coklat dan kelapa, nelayan, jasa transportasi, serta penginapan (Villa Teras). ",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 813 4567 8901",
  },
  {
    images: ["./images/dusun/suakbuah.jpg"],
    name: "Dusun III Jeralangan",
    description:
      "Masyarakat Dusun Jelarangan banyak bergerak di sektor pariwisata yang didukung dengan banyaknya villa penginapan, rumah makan, pantai, spot snorkeling dan diving. Karena keunggulannya di bidang pariwisata, menjadikan masyarakat Dusun Jelarangan memiliki potensi untuk menjadi pemandu wisata. Selain itu, terdapat Kelompok Konservasi Terumbu Karang yang diinisiasi oleh masyarakat setempat. Dengan adanya kelompok konservasi tersebut, menjadikan lokasi tersebut sebagai lokasi wisata yang dikenal dengan nama Sea Walker.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 814 5678 9012",
  },
  {
    images: ["./images/dusun/suakbuah.jpg"],
    name: "Dusun IV Kalangan",
    description:
      "Dusun Kalangan menjadi satu-satunya dusun yang terpisah dengan dusun lainnya yang berada di Pulau Pahawang besar. Dusun Kalangan memiliki berbagai sektor ekonomi yang beragam. Sektor ekonomi yang terdapat di dusun ini yaitu nelayan, pertanian kelapa, penginapan (Villa Mangrove), dan area penanaman mangrove yang hasilnya dimanfaatkan dalam pembuatan produk UMKM seperti dodol mangrove. ",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 815 6789 0123",
  },
  {
    images: ["./images/dusun/suakbuah.jpg"],
    name: "Dusun V Pahawang",
    description:
      "Letak Dusun Pahawang berbatasan langsung dengan Dusun II Penggetahan, dimana fasilitas yang terdapat di Dusun ini yaitu fasilitas kesehatan yaitu Puskesmas dan Sekolah Menengah Atas. Masyarakat Dusun Pahawang ini banyak bermata pencaharian di sektor perkebunan kelapa, jasa transportasi kapal, dan beberapa penginapan (Villa Family dan Andreas Ressort). Selain itu, masyarakat Dusun Penggetahan juga memproduksi beberapa produk UMKM seperti kerupuk ikan dan kemplang.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 816 7890 1234",
  },
  {
    images: ["./images/dusun/suakbuah.jpg"],
    name: "Dusun VI Cukuh Nyai",
    description:
      "Sama seperti Dusun Jelarangan, mata pencaharian di Dusun ini banyak berfokus di sektor wisata dengan didukung banyaknya villa, seperti Villa Turi dan Villa La Nadiya. Produk UMKM yang dapat ditemukan di Dusun ini yaitu Virgin Coconut Oil (VCO).",
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
          src={"/videos/profil.mp4"}
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
            Desa Pulau Pahawang terbagi menjadi 6 dusun. Di setiap dusunnya
            memiliki daya tarik dan potensi unik yang mewakili beberapa sektor
            dengan pesona memukau mata.
          </p>
          <hr
            className={`border-t-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            } mb-4 lg:mb-1 mt-5`}
          />
        </div>

        {/* Dusun list layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8">
          {dusunData.map((dusun, index) => (
            <div key={index} className="w-full shadow-lg rounded-lg p-4">
              <CardDusun
                images={dusun.images}
                name={dusun.name}
                description={dusun.description}
                location={dusun.location}
                contactInfo={dusun.contactInfo}
              />
            </div>
          ))}
        </div>
      </div>

      <ScrollToTopButton />
      <SmoothScroll />
    </div>
  );
}
