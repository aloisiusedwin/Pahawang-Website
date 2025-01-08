"use client";
import React, { useEffect, useRef } from "react";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import Video from "@/components/Header/HeaderVideo";
import { Montserrat } from "next/font/google";

// Impor font Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const programKerjaData = [
  {
    video: "./videos/paving.mp4",
    name: "Pengolahan Sampah",
    description:
      "Pengelolaan sampah anorganik menjadi paving block ramah lingkungan melalui edukasi dan pelatihan masyarakat.",
  },
  {
    video: "./videos/website.mp4",
    name: "Pembuatan Website",
    description:
      "Pembuatan platform digital berisi informasi, edukasi, dan promosi pelestarian lingkungan Desa Pahawang.",
  },
  {
    video: "./videos/kampanye.mp4",
    name: "Kampanye Kebersihan",
    description:
      "Edukasi kebersihan dan penyediaan fasilitas untuk meningkatkan kesadaran lingkungan masyarakat dan wisatawan.",
  },
  {
    video: "./videos/maggot.mp4",
    name: "Pemberdayaan Maggot",
    description:
      "Pengolahan sampah organik menggunakan maggot untuk menghasilkan pakan ternak ramah lingkungan.",
  },
  {
    video: "./videos/asbak.mp4",
    name: "Asbak Portable",
    description:
      "Produksi asbak portable berbahan dasar bambu untuk mengurangi pencemaran puntung rokok di lingkungan wisata.",
  },
  {
    video: "./videos/umkm.mp4",
    name: "Peningkatan UMKM",
    description:
      "Meningkatkan kualitas dan pemasaran produk UMKM lokal, seperti dodol mangrove, untuk memperluas pasar.",
  },
];

const ProgramKerjaSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
          Program Kerja KKN Tematik ITERA
        </h2>
        <p className="text-gray-700 text-center mb-12">
          Program kerja yang dirancang untuk mendukung pembangunan berkelanjutan
          dan pemberdayaan masyarakat di desa tempat KKN Tematik ITERA
          berlangsung.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {programKerjaData.map((program, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <video
                ref={(ref) => {
                  if (ref) {
                    ref.addEventListener("mouseover", () => ref.play());
                    ref.addEventListener("mouseout", () => {
                      ref.pause();
                      ref.currentTime = 0; // Kembali ke frame awal
                    });
                  }
                }}
                src={program.video}
                className="w-full h-64 object-cover"
                muted
                loop={false}
              ></video>
              <div className="absolute bottom-0 w-full bg-white bg-opacity-65 p-4 text-center">
                <h3 className="text-lg font-bold text-green-900">
                  {program.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll ke atas saat halaman dimuat
  }, []);

  return (
    <div className={montserrat.className}>
      {/* Video Section */}
      <div className="relative h-full">
        <Video
          loop
          autoPlay
          muted
          src={"/videos/program kerja.mp4"} // Pastikan video berada di folder public/videos
          className="object-cover w-full h-[40vh] md:h-[60vh] lg:h-[85vh]"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 text-center overflow-hidden">
          <div className="text-white px-4">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              KKN Tematik ITERA
            </h1>
            <p className="text-lg sm:text-xl">
              Bersama Membangun Desa yang Mandiri dan Berkelanjutan
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900 mb-8">
            Tentang KKN Tematik ITERA
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            KKN Tematik ITERA adalah program pengabdian masyarakat yang berfokus
            pada pemberdayaan dan pembangunan desa dengan pendekatan tematik.
            Program ini melibatkan mahasiswa untuk mengaplikasikan ilmu yang
            telah dipelajari di kampus guna memberikan solusi nyata bagi
            permasalahan di masyarakat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dengan tema "Desa Mandiri dan Berkelanjutan", KKN Tematik ITERA
            berkomitmen untuk mendukung pembangunan berkelanjutan melalui
            berbagai program kerja yang inovatif dan kolaboratif.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Melalui KKN Tematik, mahasiswa ITERA diharapkan dapat memberikan
            dampak positif yang signifikan bagi masyarakat desa dan sekaligus
            memperkaya pengalaman belajar mereka di dunia nyata.
          </p>
        </div>
      </section>

      {/* Program Kerja Section */}
      <ProgramKerjaSection />

      {/* Scroll To Top Button */}
      <ScrollToTopButton />
      <SmoothScroll />
    </div>
  );
}
