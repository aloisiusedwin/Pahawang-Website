"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import Video from "@/components/Header/HeaderVideo";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PavingSection = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`mb-8 py-12 w-full rounded-lg overflow-hidden shadow-lg ${
        theme === "dark" ? "bg-[#1F3D3B]" : "bg-[#99e9d4]"
      }`}
    >
      <div
        className={`w-full flex flex-col md:flex-row items-center gap-12 px-4 md:px-8 min-h-[500px] ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <div className="flex-1 text-center md:text-left">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === "dark" ? "text-white" : "text-[#1F3D3B]"
            }`}
          >
            Pengelolaan Sampah Berkelanjutan: Mesin Paving Block Plastik
            Pahawang
          </h2>
          <p
            className={`text-lg md:text-xl text-justify ${
              theme === "dark" ? "text-[#A3FFCC]" : "text-[#1F3D3B]"
            }`}
          >
            Poster ini berisi tahapan serta himbauan dalam penggunaan mesin
            paving block yang dapat dikelola dan dikembangkan oleh masyarakat
            Desa Pulau Pahawang.
          </p>
        </div>
        <div
          className="flex-1 rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img
            className="w-full h-auto max-h-[400px] object-contain"
            src="/images/program kerja/Poster Paving Block.jpg"
            alt="Paving Image"
          />
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            className="max-w-full max-h-full rounded-lg"
            src="/images/program kerja/Poster Paving Block.jpg"
            alt="Enlarged Paving Image"
          />
        </div>
      )}
    </div>
  );
};


const programKerjaData = [
  {
    video: "./videos/paving.mp4",
    name: "Pengolahan Sampah Anorganik",
    slug: "pemilahan-dan-pengolahan-sampah-anorganik",
    description:
      "Pengelolaan sampah anorganik menjadi eco-block ramah lingkungan melalui sosialisasi dan praktik penggunaan alat pencacah plastik.",
  },
  {
    video: "./videos/website.mp4",
    name: "Pembuatan Website",
    slug: "pembuatan-website",
    description:
      "Pembuatan platform digital berisi informasi dan edukasi pelestarian lingkungan desa serta promosi produk UMKM di Desa Pulau Pahawang.",
  },
  {
    video: "./videos/kampanye.mp4",
    name: "Kampanye Kebersihan",
    slug: "kampanye-kebersihan",
    description:
      "Sosialisasi kepada masyarakat dan wisatawan tentang pemilahan sampah dengan penyediaan tempat sampah dan pembuatan papan kampanye.",
  },
  {
    video: "./videos/maggot.mp4",
    name: "Pemberdayaan Maggot",
    slug: "pemberdayaan-maggot",
    description:
      "Mengedukasi masyarakat mengenai pemberdayaan maggot untuk mengurai sampah organik dan pemanfaatan maggot sebagai pakan ternak.",
  },
  {
    video: "./videos/asbak.mp4",
    name: "Asbak Portable",
    slug: "asbak-portable",
    description:
      "Pembuatan asbak portable yang mudah dibawa dengan memanfaatkan bahan dasar bambu untuk mengurangi sampah puntung rokok di lingkungan wisata.",
  },
  {
    video: "./videos/umkm.mp4",
    name: "Peningkatan UMKM",
    slug: "peningkatan-umkm",
    description:
      "Pendataan setiap produk UMKM yang ada di Desa Pulau Pahawang dan membantu meningkatkan UMKM yang ada dengan promosi melalui website.",
  },
];

const ProfileSection = () => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center mb-16">
      <img
        src="/images/logo/logo.png"
        alt="Avatar"
        className="w-28 h-28 rounded-full shadow-lg mr-6"
      />
      <div>
        <h3
          className={`text-2xl font-bold ${
            theme === "dark" ? "text-green-200" : "text-green-900"
          }`}
        >
          Novriadi, M.Si.
        </h3>
        <p
          className={`text-lg ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Dosen Pembimbing Lapangan KKN Tematik Pahawang
        </p>
      </div>
    </div>
  );
};

type SmallCardProps = {
  title: string;
  image: string;
  link: string;
};

const SmallCard = ({ title, image, link }: SmallCardProps) => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-row items-center ${
        theme === "dark" ? "bg-[#1F3D3B]" : "bg-[#99e9d4]"
      } shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition relative`}
      onClick={() => router.push(link)}
    >
      <div className="w-2/3 sm:text-left pr-4">
        <h3
          className={`text-xs md:text-lg font-semibold ${
            theme === "dark" ? "text-white" : "text-[#1F3D3B]"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 text-xs md:text-sm ${
            theme === "dark" ? "text-[#A3FFCC]" : "text-[#1F3D3B]"
          }`}
        >
          Klik untuk melihat artikel
        </p>
      </div>
      <div className="w-1/3">
        <img
          src={image}
          alt={title}
          className="w-full md:h-40 sm:h-24 object-cover rounded-md"
        />
      </div>
    </div>
  );
};

const ProgramKerjaSection = () => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <section
      className={`${theme === "dark" ? "bg-gray-900" : "bg-white"} py-12`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 ">
        <ProfileSection />
        <PavingSection />
        <SmallCard
          title="Mahasiswa KKN ITERA Lakukan Analisis Komposisi Paving Blok Berbahan Dasar Sampah dan Pengembangan Website Promosi Desa"
          image="/images/program kerja/artikel.jpg"
          link="/artikel"
        />
        <h2
          className={`text-4xl font-extrabold text-center ${
            theme === "dark" ? "text-green-200" : "text-green-900"
          } mb-10 mt-10`}
        >
          Program Kerja KKN Tematik ITERA
        </h2>
        <p
          className={`text-sm sm:text-base lg:text-lg leading-loose text-justify lg:text-justify mb-8 ${
            theme === "dark" ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Program kerja pada KKN-T adalah program yang telah direncanakan ketika
          pengajuan proposal dengan berlandaskan pada potensi dan atau
          permasalahan pada desa tujuan. Program kerja pada KKN-T dibagi menjadi
          dua (2) yaitu program kerja pokok dan tambahan. Program kerja pokok
          merupakan program kerja wajib yang dilakukan oleh seluruh peserta
          dalam kelompok KKN-T. Sementara itu, program kerja tambahan merupakan
          program kerja yang bersifat membantu program yang telah dan atau
          sedang berjalan di lokasi mitra KKN-T. Program kerja tambahan dapat
          berupa pengembangan, percepatan, dan atau membantu program yang sedang
          berlangsung di desa.
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
              <div
                className={`absolute bottom-0 w-full p-4 text-center ${
                  theme === "dark" ? "bg-gray-900" : "bg-white"
                } bg-opacity-65`}
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
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
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

const MediaSection = () => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <section
      className={`${theme === "dark" ? "bg-gray-900" : "bg-white"} py-12`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2
          className={`text-3xl font-bold text-center ${
            theme === "dark" ? "text-green-200" : "text-green-900"
          } mb-8`}
        >
          Galeri KKN Tematik ITERA
        </h2>
        <p
          className={`text-center mb-12 ${
            theme === "dark" ? "text-gray-400" : "text-gray-700"
          }`}
        >
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
              <p
                className={`text-center text-lg font-bold mt-2 ${
                  theme === "dark" ? "text-green-200" : "text-green-900"
                }`}
              >
                Day {index + 1}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            className={`px-8 py-4 rounded-full text-lg font-semibold shadow-md transition duration-300 transform hover:scale-105 ${
              theme === "dark"
                ? "bg-green-700 text-gray-200 hover:bg-green-600"
                : "bg-green-500 text-white hover:bg-green-600"
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
            <h1
              className="text-4xl sm:text-6xl font-bold mb-4 text-white"
              style={{ color: "white" }}
            >
              KKN Tematik ITERA
            </h1>
            <p className="text-lg sm:text-xl" style={{ color: "white" }}>
              Bersama Membangun Desa yang Mandiri dan Berkelanjutan
            </p>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto mt-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl sm:text-6xl font-bold mb-4 ${
              theme === "dark" ? "text-green-200" : "text-green-900"
            }`}
          >
            Tentang KKN Tematik ITERA
          </h2>
          <p
            className={`text-sm sm:text-base lg:text-lg leading-loose text-justify lg:text-justify ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            KKN-T merupakan salah satu program mahasiswa yaitu Merdeka
            Belajar-Kampus Merdeka (MBKM). Kuliah Kerja Nyata Tematik dirancang
            untuk memberikan pengalaman belajar kepada mahasiswa untuk hidup di
            tengah masyarakat di luar kampus yang secara langsung bersama-sama
            masyarakat mengidentifikasi potensi dan menangani masalah sehingga
            diharapkan mampu mengembangkan potensi desa/daerah dan meramu solusi
            untuk permasalahan yang dihadapi masyarakat pedesaan.
          </p>
          <hr
            className={`border-t-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            } mb-4 lg:mb-1 mt-5`}
          />
        </div>
      </section>

      <ProgramKerjaSection />
      <MediaSection />
      <ScrollToTopButton />
      <SmoothScroll />
    </div>
  );
}
