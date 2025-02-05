"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import Video from "@/components/Header/HeaderVideo";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes";
import { useState} from "react";
import { Alert } from "@nextui-org/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dokumentasiFoto = [
  { image: "/images/konservasi/terumbu1.jpg" },
  { image: "/images/konservasi/terumbu2.jpg" },
  { image: "/images/konservasi/terumbu3.jpg" },
  { image: "/images/konservasi/terumbu4.jpg" },
  { image: "/images/konservasi/terumbu5.jpg" },
  { image: "/images/konservasi/terumbu6.jpg" },
];

const dokumentasiSeawalker = [
  { image: "/images/konservasi/seawalker.jpg" },
  { image: "/images/konservasi/seawalker1.jpg" },
  { image: "/images/konservasi/seawalker3.jpg" },
  { image: "/images/konservasi/seawalker4.jpg" },
  { image: "/images/konservasi/seawalker5.jpg" },
  { image: "/images/konservasi/seawalker7.jpg" },
];


const KonservasiSection = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`py-16 px-4 sm:px-8 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl font-extrabold text-center ${
            theme === "dark" ? "text-green-200" : "text-green-900"
          } mb-10`}
        >
          Dokumentasi Konservasi Terumbu Karang
        </h2>
        <p
          className={`text-center text-lg sm:text-xl mb-8 ${
            theme === "dark" ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Berikut ini merupakan dokumentasi momen penting dalam program
          konservasi kami.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-4"
        >
          {dokumentasiFoto.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={`Dokumentasi ${index + 1}`}
                  className="w-full h-40 sm:h-48 md:h-64 lg:h-72 rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SeawalkerSection = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`py-16 px-4 sm:px-8 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl font-extrabold text-center ${
            theme === "dark" ? "text-green-200" : "text-green-900"
          } mb-10`}
        >
          Dokumentasi Wisata Sea Walker
        </h2>
        <p
          className={`text-center text-lg sm:text-xl mb-8 ${
            theme === "dark" ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Berikut ini merupakan dokumentasi wisata sea walker.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-4"
        >
          {dokumentasiSeawalker.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={`Dokumentasi ${index + 1}`}
                  className="w-full h-40 sm:h-48 md:h-64 lg:h-72 rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default function Profil() {
  const { theme } = useTheme();
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupRekeningVisible, setPopupRekeningVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const copyToClipboardKonservasi = () => {
    navigator.clipboard.writeText("+6283809704662").then(() => {
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 3000);
    });
  };

  const copyToClipboardSeaWalker = () => {
    navigator.clipboard.writeText("+6282282798407").then(() => {
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 3000);
    });
  };

  const copyRekening = () => {
    navigator.clipboard.writeText("4100304009216").then(() => {
      setPopupRekeningVisible(true);
      setTimeout(() => setPopupRekeningVisible(false), 3000);
    });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/6283809704662", "_blank");
  };

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

      <section className="max-w-7xl mx-auto mt-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left ${
              theme === "dark" ? "text-green-200" : "text-green-900"
            }`}
          >
            Konservasi Terumbu Karang
          </h2>
          <p
            className={`text-sm sm:text-base lg:text-lg leading-loose text-justify lg:text-justify ${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Terumbu karang, dikenal sebagai "hutan hujan lautan," adalah
            ekosistem kaya yang menjadi habitat 25% spesies laut. Namun,
            pencemaran, aktivitas ilegal, dan hama telah merusak 50% terumbu
            karang di Pulau Pahawang. Masyarakat setempat membentuk "Kelompok
            Konservasi Terumbu Karang" yang berhasil memulihkan kerusakan
            menggunakan metode paralon, rak, dan substrat, menanam hingga 500
            bibit dalam 3 - 4 hari.
          </p>
          <hr
            className={`border-t-2 mb-4 lg:mb-1 mt-5 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            }`}
          />
        </div>
      </section>

      <KonservasiSection />

      <section className="max-w-7xl mx-auto mt-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left ${
              theme === "dark" ? "text-green-200" : "text-green-900"
            }`}
          >
            Wisata Sea Walker Pahawang
          </h2>
          <p
            className={`text-sm sm:text-base lg:text-lg leading-loose text-justify lg:text-justify ${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Pahawang menawarkan berbagai wahana air, seperti banana boat, donat boat, snorkeling, jetski, dan sea walker diving. 
            Sea walker diving adalah aktivitas berjalan di bawah air menggunakan helm khusus untuk menyelam. 
            Pengunjung dapat merasakan pengalaman snorkeling dengan cara yang unik menggunakan diving helmet. 
            Menariknya, wahana ini bertujuan untuk melindungi terumbu karang dengan memungkinkan wisatawan berjalan mengelilinginya tanpa merusaknya. 
            Selama aktivitas, pengunjung akan didampingi oleh pemandu atau instruktur selam profesional, sehingga keamanan dan kenyamanan tetap terjaga. 
            Peralatan selam yang digunakan juga telah memenuhi standar keselamatan dan kelengkapan. 
            Selain itu, wisatawan dapat belajar lebih banyak tentang terumbu karang, menjadikan tempat ini sebagai destinasi wisata edukasi dan konservasi terumbu karang di Lampung. 
            Mengenai harga wahana sea walker ini dikenakan 160rb/orang selama 15 menit termasuk dokumentasi, donasi terumbu karang, guide.
          </p>
          <hr
            className={`border-t-2 mb-4 lg:mb-1 mt-5 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            }`}
          />
        </div>
      </section>

      <SeawalkerSection />

      <section
        className={`py-16 px-4 sm:px-8 ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center ${
              theme === "dark" ? "text-green-200" : "text-green-900"
            }`}
          >
            Tertarik untuk Mendukung Konservasi?
          </h2>
          <p
            className={`text-sm sm:text-base lg:text-lg text-center mb-8 ${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Jika Anda ingin berkontribusi dalam program konservasi terumbu
            karang atau mendapatkan informasi lebih lanjut, hubungi kami
            melalui:
          </p>
          <div className="text-center">
            <p
              className={`text-base sm:text-lg md:text-xl font-semibold mt-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Telepon Konservasi:
              <a href="tel:+6283809704662" className="underline">
                +62 838-0970-4662
              </a>
            </p>
            <p
              className={`text-base sm:text-lg md:text-xl font-semibold mt-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Telepon Sea Walker:
              <a href="tel:+6282282798407" className="underline">
                +62 822-8279-8407
              </a>
            </p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
              <button
                onClick={copyRekening}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 text-sm sm:text-base w-full"
              >
                Donasi Konservasi
              </button>
              <button
                onClick={copyToClipboardKonservasi}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 text-sm sm:text-base w-full"
              >
                Salin Konservasi
              </button>
              <button
                onClick={copyToClipboardSeaWalker}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 text-sm sm:text-base w-full"
              >
                Salin Sea Walker
              </button>
              <button
                onClick={openWhatsApp}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 text-sm sm:text-base w-full"
              >
                WhatsApp
              </button>
            </div>
          </div>



          {popupVisible && (
            <div className="fixed bottom-4 left-4 w-64 duration-300">
              <Alert
                color="success"
                title="Nomor telepon telah disalin ke clipboard"
              />
            </div>
          )}

          {popupRekeningVisible && (
            <div className="fixed bottom-4 left-4 w-64 duration-300">
              <Alert
                color="success"
                title="Nomor rekening bank lampung telah disalin ke clipboard"
              />
            </div>
          )}
        </div>
      </section>
      <ScrollToTopButton />
      <SmoothScroll />
    </div>
  );
}
