"use client";

import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ArtikelPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`${montserrat.className} ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Tambahkan padding top agar konten tidak nabrak navbar */}
      <div className="max-w-screen-2xl px-5 md:px-20 py-6 mx-auto pt-36">
        <div className="flex flex-col md:flex-row md:gap-24">
          {/* Bagian Artikel Utama */}
          <div className="flex flex-col md:w-3/4">
            <Image
              className="mt-6 w-auto h-96 aspect-square object-cover rounded-xl bg-black"
              src="/images/program kerja/artikel.jpg"
              height={1080}
              width={2160}
              alt="Gambar Berita"
            />
            <div className="flex flex-col mt-4 font-poppins">
              <h1 className="font-bold text-2xl">
                Mahasiswa KKN ITERA Lakukan Analisis Komposisi Paving Blok
                Berbahan Dasar Sampah dan Pengembangan Website Promosi Desa
              </h1>
              <hr className="h-0.5 my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="flex flex-row items-center">
                <p>Pada Januari 2025</p>
              </div>
              <div className="text-justify mt-4 space-y-4">
                <p>
                  Tim KKN Tematik ITERA telah menyelesaikan 6 (enam) program
                  kerja di Desa Pulau Pahawang. Desa Pulau Pahawang sendiri
                  merupakan desa dengan enam dusun yang terletak di Kecamatan
                  Punduh Pidada, Kabupaten Pesawaran, Provinsi Lampung. Pulau
                  Pahawang sudah terkenal di kalangan masyarakat sebagai salah
                  satu tempat wisata bahari dan konservasi terumbu karang dengan
                  pemandangan alam yang indah. Namun, dibalik identitasnya
                  sebagai tempat wisata, potensi Desa Pulau Pahawang sebagai
                  wisata bahari dan konservasi sudah mulai terancam.
                </p>
                <p>
                  Berdasarkan survey yang telah dilakukan, ditemukan penumpukan
                  sampah pada pinggiran pantai serta permukaan laut. Melalui
                  wawancara terhadap masyarakat setempat juga diperoleh hasil
                  berupa kurangnya koordinasi pengelolaan sampah dengan tidak
                  tersedianya TPA di tiap dusun, sehingga menjadi keresahan
                  tersendiri bagi masyarakat. Permasalahan tersebut yang
                  mendasari program kerja KKN Tematik ini berfokus pada
                  pengelolaan sampah dan pemberdayaan masyarakat untuk
                  menciptakan Desa Pulau Pahawang sebagai destinasi wisata
                  peduli lingkungan.
                </p>
                <p>
                  Sebanyak 27 mahasiswa ITERA melaksanakan KKN Tematik di Desa
                  Pulau Pahawang dengan beberapa inovasi yang mengedepankan
                  pengolahan sampah sebagai titik masalah utama di desa
                  tersebut. Hal tersebut sejalan dengan kegiatan yang dilakukan
                  mahasiswa KKN Tematik ITERA dalam bentuk percobaan dan
                  analisis terhadap alat paving block dari limbah plastik,
                  pengembangan website desa, pemanfaatan maggot sebagai pupuk
                  dan pakan ternak, serta pembuatan produk berbahan ramah
                  lingkungan dalam bentuk papan kampanye kebersihan dan asbak
                  portable.
                </p>
                <p>
                  Dalam rangkaian kegiatan KKN Tematik ini, mahasiswa ITERA juga
                  turut melakukan pengembangan terhadap sektor UMKM melalui
                  pelatihan dan penyediaan media promosi berupa website. Selain
                  itu, sebagai bentuk kesadaran dalam penjagaan lingkungan, KKN
                  Tematik ITERA juga turut ambil bagian dalam upaya konservasi
                  terumbu karang yang ada di Desa Pulau Pahawang. Pemahaman
                  mengenai pengolahan sampah secara berkelanjutan tentunya akan
                  sejalan dengan upaya konservasi terumbu karang yang telah
                  dilakukan untuk menjaga kelestarian ekosistem laut.
                </p>
                <p>
                  Seluruh aktivitas, dokumentasi, hasil program kerja, dan
                  segala kegiatan yang dilakukan mahasiswa KKN Tematik ITERA
                  dapat ditinjau lebih lanjut pada website ini. Harapannya,
                  dengan keberadaan website Desa Pulau Pahawang ini, dapat
                  menjadi wahana eksklusif bagi wisatawan, konservator, dan
                  peneliti bahari untuk berwisata maupun mengembangkan Desa
                  Pulau Pahawang.
                </p>
              </div>
            </div>
          </div>
          {/* Sidebar: Dokumentasi dipindahkan ke sini */}
          <div className="md:w-1/4 mt-8 md:mt-0">
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl mb-4">Dokumentasi</h2>
              <Image
                className="w-full h-64 object-cover rounded-xl"
                src="/images/program kerja/artikel.jpg"
                alt="Dokumentasi"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
