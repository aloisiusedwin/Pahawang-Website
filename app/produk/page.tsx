"use client";

import React, { useEffect } from "react";
import Video from "@/components/Header/HeaderVideo";
import { HeaderHeroText } from "@/components/Header/HeaderHero";
import ProdukTemplate from "@/components/Card/card";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const data = [
  {
    image: "./images/produk/dodol.jpg",
    title: "Dodol Mangrove",
    label: "Dodol Mangrove adalah camilan kenyal khas berbahan buah mangrove.",
    description:
      "Dodol Mangrove adalah camilan kenyal khas berbahan buah mangrove (Sonneratia caseolaris). Rasanya manis dengan sedikit asam, aromanya khas, dan kaya akan antioksidan serta serat.",
    specifications: [
      "Bahan Utama : Buah Bidara",
      "Dimensi: 10x10 cm",
      "Berat: 200 gram",
    ],
    phoneNumber: "6283135302496",
  },
  {
    image: "./images/produk/kemplang tunu1.JPG",
    title: "Kemplang",
    label:
      "Kemplang Mak Endut, camilan panggang khas dengan rasa ikan asli dan sambal pedas manis.",
    description:
      "Kemplang Mak Endut adalah camilan tradisional berbahan ikan segar dan sagu tanpa terigu. Dipanggang hingga renyah dan dipadukan dengan sambal pedas manis, menjadikannya camilan yang lezat dan berbeda.",
    specifications: [
      "Bahan Utama: Ikan Barakuda, King Kobia, atau Kepiting, dan sagu (tanpa terigu)",
      "Varian Rasa: Ikan Barakuda, Ikan King Kobia, Kepiting",
      "Kemasan: Plastik vakum atau kertas kraft.",
      "Sambal: Cabe rawit, cabe merah, gula merah, asam, garam",
    ],
    phoneNumber: "6285357626147",
  },
  {
    image: "./images/produk/kerupuk.JPG",
    title: "Kerupuk Ikan",
    label:
      "Kerupuk Ikan Mak Endut, camilan gurih dengan rasa asli ikan segar yang renyah dan lezat.",
    description:
      "Kerupuk Ikan Mak Endut terbuat dari ikan segar seperti King Kobia dan Barakuda, dipadukan dengan tepung berkualitas. Renyah dan gurih, camilan ini cocok untuk menemani hari-hari Anda atau sebagai pelengkap makanan.",
    specifications: [
      "Bahan Utama: Ikan segar (King Kobia, Barakuda, dll), tepung sagu, tepung terigu, tapioka, bawang putih, garam, penyedap rasa, minyak.",
      "Kemasan: Plastik vakum",
      "Berat: ±250 gram per kemasan",
    ],
    phoneNumber: "6285357626147",
  },
  {
    image: "./images/produk/rempeyek kacang.jpg",
    title: "Rempeyek Kacang",
    label:
      "Rempeyek Kacang, camilan renyah dengan kacang tanah dan bumbu rempah khas yang menggugah selera.",
    description:
      "Rempeyek Kacang adalah camilan renyah dengan perpaduan kacang tanah yang gurih dan bumbu rempah khas, seperti bawang putih, kencur, daun jeruk, dan santan. Rasanya yang kaya, dengan tekstur krispi, menjadikannya pilihan sempurna untuk teman santai atau oleh-oleh.",
    specifications: [
      "Bahan Utama: Kacang tanah, tepung sagu, tepung beras, daun jeruk, daun pandan, bawang putih, kencur, kemiri, lada, garam, mentega, santan, telur, air, minyak goreng.",
      "Kemasan: Plastik",
      "Berat: ±200 gram per kemasan.",
    ],
    phoneNumber: "6283167990520",
  },
  {
    image: "./images/produk/keripik pisang.jpg",
    title: "Keripik Pisang",
    label:
      "Keripik Pisang Tradisional, camilan renyah dengan pilihan rasa bumbu yang gurih dan menggoda.",
    description:
      "Keripik Pisang Tradisional terbuat dari pisang segar yang dipotong tipis dan digoreng hingga renyah. Diberikan bumbu perasa pilihan seperti balado atau jagung untuk menambah rasa, camilan ini sempurna untuk menemani waktu santai Anda.",
    specifications: [
      "Bahan Utama: Pisang (Raja, Jantan, dll), bumbu perasa (balado, jagung, dll), air, minyak goreng.",
      "Proses Produksi: Pisang dikupas, diserut tipis, digoreng hingga renyah, diberi bumbu perasa, dan dikemas.",
      "Berat: ±200 gram per kemasan.",
    ],
    phoneNumber: "628388728220",
  },
  {
    image: "./images/produk/VCO.jpg",
    title: "Virgin Coconut Oil",
    label:
      "Virgin Coconut Oil (VCO), minyak kelapa murni dengan banyak manfaat untuk kulit, tubuh, dan rambut.",
    description:
      "Virgin Coconut Oil (VCO) atau minyak kelapa murni adalah minyak yang didapatkan dari daging buah kelapa yang diproses tanpa pemanasan tinggi atau bahan kimia. VCO memiliki banyak manfaat untuk kesehatan dan kecantikan.",
    specifications: [
      "Bahan Utama: 100 % daging kelapa asli",
      "Manfaat: Mengatasi gangguan kulit akibat jamur dan bakteri. Menstimulus sistem kekebalan tubuh. Membantu produksi ASI pada ibu menyusui. Memiliki sifat anti inflamasi. Menyuburkan dan menyehatkan rambut.",
      "Kemasan: Tersedia dalam kemasan 250 ml, 100 ml, dan 60 ml.",
    ],
    phoneNumber: "6282175638853",
  },
];

export default function Home() {
  const { theme } = useTheme();

  useEffect(() => {
    scrollToTop();
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
          src={"./videos/produk.mp4"}
          className="object-cover w-full h-[40vh] md:h-[60vh] lg:h-[85vh]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 text-center overflow-hidden">
          <div className="text-white px-4">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">PRODUK UMKM</h1>
            <p className="text-lg sm:text-xl">
              Oleh-Oleh dengan Sentuhan Cinta dan Tradisi, Sempurnakan
              Perjalanan Anda
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
            Pilihan Produk Terbaik
          </h2>
          <p
            className={`text-sm sm:text-base lg:text-lg leading-loose text-justify lg:text-justify ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Produk UMKM di Desa Pulau Pahawang merupakan hasil karya penuh
            kreativitas dari kelompok ibu-ibu setempat. Menggunakan bahan-bahan
            alami yang melimpah di sekitar Pulau Pahawang, setiap produk
            mencerminkan kekayaan alam dan kearifan tradisional. Dengan sentuhan
            tangan terampil, setiap produk yang dihasilkan memberikan kesan
            mendalam tentang keindahan dan budaya Pulau Pahawang.
          </p>
          <hr
            className={`border-t-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            } mb-4 lg:mb-1 mt-5`}
          />
        </div>

        <ProdukTemplate
          cards={data.map((card) => ({
            ...card,
            onClick: () => {
              console.log(`Klik pada produk: ${card.title}`);
            },
          }))}
          backgroundImage={`${
            theme === "dark"
              ? "https://i.imgur.com/darkBackground.jpg"
              : "https://i.imgur.com/lightBackground.jpg"
          }`}
        />
      </div>

      <ScrollToTopButton />
      <SmoothScroll />
    </div>
  );
}
