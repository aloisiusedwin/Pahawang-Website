"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import Video from "@/components/Header/HeaderVideo";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes"; // Import useTheme for theme handling

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const programKerjaData = [
  {
    video: "./videos/paving.mp4",
    name: "Pemilahan dan Pengolahan Sampah Anorganik",
    slug: "pemilahan-dan-pengolahan-sampah-anorganik",
    description:
      "Pengelolaan sampah anorganik menjadi paving block ramah lingkungan melalui edukasi dan pelatihan masyarakat.",
  },
  {
    video: "./videos/website.mp4",
    name: "Pembuatan Website",
    slug: "pembuatan-website",
    description:
      "Pembuatan platform digital berisi informasi, edukasi, dan promosi pelestarian lingkungan Desa Pahawang.",
  },
  {
    video: "./videos/kampanye.mp4",
    name: "Kampanye Kebersihan",
    slug: "kampanye-kebersihan",
    description:
      "Edukasi kebersihan dan penyediaan fasilitas untuk meningkatkan kesadaran lingkungan masyarakat dan wisatawan.",
  },
  {
    video: "./videos/maggot.mp4",
    name: "Pemberdayaan Maggot",
    slug: "pemberdayaan-maggot",
    description:
      "Pengolahan sampah organik menggunakan maggot untuk menghasilkan pakan ternak ramah lingkungan.",
  },
  {
    video: "./videos/asbak.mp4",
    name: "Asbak Portable",
    slug: "asbak-portable",
    description:
      "Produksi asbak portable berbahan dasar bambu untuk mengurangi pencemaran puntung rokok di lingkungan wisata.",
  },
  {
    video: "./videos/umkm.mp4",
    name: "Peningkatan UMKM",
    slug: "peningkatan-umkm",
    description:
      "Meningkatkan kualitas dan pemasaran produk UMKM lokal, seperti dodol mangrove, untuk memperluas pasar.",
  },
];

const ProgramKerjaSection = () => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <section className={`${theme === "dark" ? "bg-gray-900" : "bg-white"} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className={`text-3xl font-bold text-center ${theme === "dark" ? "text-green-200" : "text-green-900"} mb-8`}>
          Program Kerja KKN Tematik ITERA
        </h2>
        <p className={`text-center mb-12 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
          Program kerja yang dirancang untuk mendukung pembangunan berkelanjutan
          dan pemberdayaan masyarakat di desa tempat KKN Tematik ITERA
          berlangsung.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {programKerjaData.map((program, index) => (
            <div
              key={index}
              className={`relative shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer ${
                theme === "dark" ? "bg-gray-700" : "bg-white"
              }`}
              onClick={() => router.push(`/detail-proker?slug=${program.slug}`)}
            >
              <video
                ref={(ref) => {
                  if (ref) {
                    ref.addEventListener("mouseover", () => ref.play());
                    ref.addEventListener("mouseout", () => {
                      ref.pause();
                      ref.currentTime = 0;
                    });
                  }
                }}
                src={program.video}
                className="w-full h-64 object-cover"
                muted
                loop={false}
              ></video>
              <div className={`absolute bottom-0 w-full p-4 text-center ${theme === "dark" ? "bg-gray-900" : "bg-white"} bg-opacity-65`}>
                <h3 className={`text-lg font-bold ${theme === "dark" ? "text-green-200" : "text-green-900"}`}>
                  {program.name}
                </h3>
                <p className={`text-sm mt-1 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
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

const MediaSection = () => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <section className={`${theme === "dark" ? "bg-gray-900" : "bg-white"} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className={`text-3xl font-bold text-center ${theme === "dark" ? "text-green-200" : "text-green-900"} mb-8`}>
          Galeri KKN Tematik ITERA
        </h2>
        <p className={`text-center mb-12 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
          Dokumentasi kegiatan mahasiswa KKN Tematik ITERA yang mencerminkan
          kontribusi mereka dalam pembangunan desa dan pemberdayaan masyarakat.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["day1.jpg", "day2.jpg", "day3.png"].map((day, index) => (
            <div key={index} className="relative">
              <img
                src={`/images/galeri/${day}`}
                alt={`Media ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <p className={`text-center text-lg font-bold mt-2 ${theme === "dark" ? "text-green-200" : "text-green-900"}`}>
                Day {index + 1}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            className={`px-6 py-3 rounded-lg ${
              theme === "dark" ? "bg-[#ecfccb] hover:text-[#3f6212] hover:bg-[#ecfccb]" : "bg-[#ecfccb] hover:text-[#3f6212] hover:bg-[#ecfccb]"
            }`}
            onClick={() => router.push("/galeri")}
          >
            Lihat Galeri Lengkap
          </button>
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
          src="/videos/program kerja.mp4"
          className="object-cover w-full h-[40vh] md:h-[60vh] lg:h-[85vh]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 text-center overflow-hidden">
          <div className="px-4">
            {/* Excluded text */}
            <h1
              className="text-4xl sm:text-6xl font-bold mb-4 text-white"
              style={{ color: "white" }}
            >
              KKN Tematik ITERA
            </h1>
            <p
              className="text-lg sm:text-xl"
              style={{ color: "white" }}
            >
              Bersama Membangun Desa yang Mandiri dan Berkelanjutan
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold mb-4 ${theme === "dark" ? "text-green-200" : "text-green-900"} text-center`}>
            Tentang KKN Tematik ITERA
          </h2>
          <p className={`text-justify mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            KKN Tematik ITERA adalah program pengabdian masyarakat yang berfokus pada pemberdayaan dan pembangunan desa dengan pendekatan tematik.
          </p>
        </div>
      </section>

      <ProgramKerjaSection />
      <MediaSection />
      <ScrollToTopButton />
      <SmoothScroll />
    </div>
  );
}
