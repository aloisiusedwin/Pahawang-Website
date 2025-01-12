"use client";
import React, { useEffect, useRef } from "react";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import Video from "@/components/Header/HeaderVideo";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const programKerjaData = [
  {
    video: "./videos/asbak.mp4",
    name: "Rehabilitasi Terumbu Karang",
    description:
      "Mengadakan kegiatan transplantasi terumbu karang untuk mendukung pemulihan ekosistem laut yang rusak.",
  },
  {
    video: "./videos/kampanye.mp4",
    name: "Edukasi Masyarakat",
    description:
      "Memberikan pelatihan dan edukasi kepada masyarakat pesisir tentang pentingnya menjaga ekosistem laut.",
  },
  {
    video: "./videos/maggot.mp4",
    name: "Penelitian Ekosistem Laut",
    description:
      "Melakukan penelitian ilmiah terkait kondisi ekosistem laut untuk mendukung pengambilan kebijakan.",
  },
  {
    video: "./videos/paving.mp4",
    name: "Aksi Bersih Pantai",
    description:
      "Mengadakan kampanye bersih pantai untuk mengurangi sampah yang mengancam kelangsungan terumbu karang.",
  },
  {
    video: "./videos/umkm.mp4",
    name: "Wisata Edukasi Laut",
    description:
      "Mengembangkan wisata edukasi berbasis kelautan untuk meningkatkan kesadaran lingkungan.",
  },
  {
    video: "./videos/website.mp4",
    name: "Kemitraan dengan Nelayan",
    description:
      "Bermitra dengan nelayan lokal untuk menjaga kelestarian laut melalui praktik perikanan yang ramah lingkungan.",
  },
];

const ProgramKerjaSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
          Dokumentasi Konservasi Terumbu Karang
        </h2>
        <p className="text-gray-700 text-center mb-12">
          Bergabunglah dengan kami dalam berbagai program kerja untuk
          melestarikan ekosistem terumbu karang dan mendukung keberlanjutan
          ekosistem laut.
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
                      ref.currentTime = 0;
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={montserrat.className}>
      {/* Video Section */}
      <div className="relative h-full">
        <Video
          loop
          autoPlay
          muted
          src={"/videos/program kerja.mp4"}
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
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-green-900 mb-4 text-center lg:text-left">
            Konservasi Terumbu Karang
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Konservasi terumbu karang adalah upaya untuk melindungi dan
            memulihkan ekosistem laut yang vital bagi kehidupan bawah laut dan
            masyarakat pesisir. Terumbu karang menyediakan habitat bagi berbagai
            jenis biota laut, mendukung ekonomi lokal, dan melindungi garis
            pantai dari abrasi.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Dengan kolaborasi bersama masyarakat dan pemangku kepentingan
            terkait, kami berkomitmen untuk menjaga keanekaragaman hayati laut
            serta mendorong pembangunan berkelanjutan di kawasan pesisir.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Program-program konservasi ini dirancang untuk meningkatkan
            kesadaran, melibatkan masyarakat, dan memberikan dampak positif bagi
            lingkungan serta generasi mendatang.
          </p>
          <hr className="border-t-2 border-gray-300 mb-4 lg:mb-1 mt-5" />
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
