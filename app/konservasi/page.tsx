"use client";
import React, { useEffect } from "react";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import Video from "@/components/Header/HeaderVideo";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dokumentasiFoto = [
  {
    image: "./images/konservasi/terumbu1.jpg",
    title: "Rehabilitasi Terumbu Karang",
    description:
      "Kegiatan transplantasi terumbu karang yang berhasil memulihkan keanekaragaman hayati laut di wilayah ini.",
  },
  {
    image: "/images/konservasi/terumbu2.jpg",
    title: "Edukasi Masyarakat",
    description:
      "Pelatihan dan edukasi yang melibatkan masyarakat pesisir untuk menjaga ekosistem laut.",
  },
  {
    image: "/images/konservasi/terumbu3.jpg",
    title: "Penelitian Ekosistem Laut",
    description:
      "Hasil penelitian yang memberikan pemahaman lebih dalam tentang kondisi ekosistem terumbu karang.",
  },
  {
    image: "/images/konservasi/terumbu4.jpg",
    title: "Aksi Bersih Pantai",
    description:
      "Kampanye bersih pantai yang melibatkan ratusan relawan untuk menciptakan lingkungan yang bebas sampah.",
  },
  {
    image: "/images/konservasi/terumbu5.jpg",
    title: "Wisata Edukasi Laut",
    description:
      "Pengembangan wisata edukasi berbasis kelautan untuk meningkatkan kesadaran lingkungan.",
  },
  {
    image: "/images/konservasi/terumbu6.jpg",
    title: "Kemitraan dengan Nelayan",
    description:
      "Kolaborasi dengan nelayan lokal dalam menjaga kelestarian laut melalui praktik perikanan berkelanjutan.",
  },
];

const ProgramKerjaSection = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`py-12 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2
          className={`text-3xl font-bold text-center ${
            theme === "dark" ? "text-green-200" : "text-green-900"
          } mb-8`}
        >
          Dokumentasi Konservasi Terumbu Karang
        </h2>
        <p
          className={`text-center mb-12 ${
            theme === "dark" ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Bergabunglah dengan kami dalam berbagai program kerja untuk
          melestarikan ekosistem terumbu karang dan mendukung keberlanjutan
          ekosistem laut.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dokumentasiFoto.map((item, index) => (
            <div
              key={index}
              className={`relative shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
                muted
                loop={false}
              ></video>
              <div
                className={`absolute bottom-0 w-full p-4 text-center ${
                  theme === "dark"
                    ? "bg-gray-800 bg-opacity-80"
                    : "bg-white bg-opacity-65"
                }`}
              >
                <h3
                  className={`text-lg font-bold ${
                    theme === "dark" ? "text-green-200" : "text-green-900"
                  }`}
                >
                  {program.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
      {/* Video Section */}
      <div className="relative h-full">
        <Video
          loop
          autoPlay
          muted
          src={"/videos/konservasi.mp4"}
          className="object-cover w-full h-[40vh] md:h-[60vh] lg:h-[85vh]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 text-center overflow-hidden">
          <div className="text-white px-4">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              Konservasi Terumbu Karang
            </h1>
            <p className="text-lg sm:text-xl">
              Bersama Lindungi Ekosistem Laut untuk Masa Depan Berkelanjutan
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left ${
              theme === "dark" ? "text-green-200" : "text-green-900"
            }`}
          >
            Konservasi Terumbu Karang
          </h2>
          <p
            className={`leading-relaxed mb-6 text-justify ${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Konservasi terumbu karang adalah upaya untuk melindungi dan
            memulihkan ekosistem laut yang vital bagi kehidupan bawah laut dan
            masyarakat pesisir. Terumbu karang menyediakan habitat bagi berbagai
            jenis biota laut, mendukung ekonomi lokal, dan melindungi garis
            pantai dari abrasi.
          </p>
          <hr
            className={`border-t-2 mb-4 lg:mb-1 mt-5 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            }`}
          />
        </div>
      </section>

      {/* Dokumentasi Section */}
      <DokumentasiSection />

      {/* Scroll To Top Button */}
      <ScrollToTopButton />
      <SmoothScroll />
    </div>
  );
}
