"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import bg01 from "@/public/images/program kerja/asbak.jpg";
import bg02 from "@/public/images/program kerja/kampanye.png";
import bg03 from "@/public/images/program kerja/maggot.jpg";
import bg04 from "@/public/images/program kerja/pemilahan.png";
import bg05 from "@/public/images/program kerja/proker-bg.jpg";
import bg06 from "@/public/images/program kerja/umkm.jpg";

const DetailProgramKerja = () => {
  const router = useRouter();
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      setSlug(urlParams.get("slug"));
    }
  }, []);

  const programKerjaData = [
    {
      name: "Pemilahan dan Pengolahan Sampah Anorganik",
      background: bg04,
      videos: ["/videos/paving.mp4"],
      kegiatan: [
        "Sosialisasi dan edukasi masyarakat tentang jenis sampah anorganik dan alat pengolahannya.",
        "Pelaksanaan praktik pemilahan sampah dan monitoring.",
        "Edukasi penggunaan alat pencacah sampah plastik dan mesin paving block.",
        "Penjabaran kualitas dan manfaat paving block yang telah dibuat.",
        "Praktik dan mentoring pembuatan paving block untuk fasilitas TPA.",
      ],
      tujuan: [
        "Peningkatan pemahaman masyarakat terkait pemilahan sampah anorganik.",
        "Pemanfaatan alat pencacah sampah dan mesin paving block.",
        "Produksi paving block sebagai produk inovatif dan media promosi Desa Pahawang.",
      ],
      penanggungJawab: [
        "Nanda Rahmah Putri",
        "Natania Juliantika Agresia",
        "Priyo Akhmad Zacky",
        "Alfon Samuel Hutapea",
        "Muhammad Aqshal Pranaya Wansya",
      ],
    },
    {
      name: "Pembuatan Website",
      background: bg05,
      videos: ["/videos/website.mp4"],
      kegiatan: [
        "Desain menggunakan Figma dan pengembangan dengan Next.js.",
        "Pengembangan platform untuk tutorial pelestarian lingkungan.",
        "Penyusunan dan pengunggahan konten edukatif.",
        "Sosialisasi cara mengakses dan memanfaatkan website.",
      ],
      tujuan: [
        "Membangun perpustakaan digital sebagai pusat edukasi.",
        "Mempermudah akses informasi pelestarian lingkungan.",
        "Meningkatkan pengetahuan masyarakat tentang topik konservasi.",
      ],
      penanggungJawab: [
        "A. Edwin Krisandika Putra",
        "Fathan Andi Kartagama",
        "Rizki Alfariz Ramadhan",
        "Dharma Rizki Geraldo",
      ],
    },
    {
      name: "Kampanye Kebersihan",
      background: bg02,
      videos: ["/videos/kampanye.mp4"],
      kegiatan: [
        "Mengidentifikasi area dengan permasalahan sampah terbesar.",
        "Pengadaan dan pembuatan tempat sampah yang menarik.",
        "Pembuatan papan kampanye yang dihiasi kerang.",
        "Penempatan tempat sampah dan papan kampanye di lokasi strategis.",
        "Sosialisasi dan edukasi kepada masyarakat tentang pemilahan dan penggunaan tempat sampah.",
        "Monitoring secara berkala untuk memastikan penggunaan tempat sampah dengan benar dan sesuai.",
      ],
      tujuan: [
        "Menyediakan tempat sampah dengan tampilan yang menarik dapat meningkatkan perhatian masyarakat dan wisatawan.",
        "Memperkuat citra positif destinasi wisata.",
        "Mengajak masyarakat untuk lebih peduli terhadap kebersihan pantai melalui kampanye kebersihan.",
        "Memanfaatkan pembuatan tempat sampah dan papan kampanye sebagai sarana mengekspresikan kreativitas.",
      ],
      penanggungJawab: [
        "Ilmiyatul Hasanah",
        "Denny Ramadhani",
        "Mirzan Yusuf Rabbani",
        "Amalinda Sherley Vivia",
      ],
    },
    {
      name: "Pemberdayaan Maggot",
      background: bg03,
      videos: ["/videos/maggot.mp4"],
      kegiatan: [
        "Sosialisasi awal dan edukasi masyarakat, terkait penggunaan maggot dalam pengolahan sampah organik.",
        "Penyediaan sarana dan prasarana untuk budidaya maggot dan melakukan pendampingan untuk memonitoring perkembangan maggot.",
        "Panen maggot untuk di distribusikan menjadi pakan ternak.",
        "Dokumentasi seluruh rangkaian kegiatan dari pengolahan, budidaya, hingga pendistribusian untuk pakan ternak.",
      ],
      tujuan: [
        "Mengurangi volume sampah yang berada di TPA.",
        "Pengelolaan limbah ramah lingkungan.",
        "Produksi produk bernilai ekonomi berupa kompos yang dapat digunakan sebagai pupuk.",
      ],
      penanggungJawab: [
        "Mochammad Arby Turoby",
        "Yohana Tresna Oktavia Sigiro",
        "Alvian Putra Hanafi",
        "Rioqi Novandep",
      ],
    },
    {
      name: "Asbak Portable",
      background: bg01,
      videos: ["/videos/asbak.mp4"],
      kegiatan: [
        "Melakukan kegiatan sosialisasi tentang pentingnya menjaga kebersihan lingkungan dan edukasi mengenai penggunaan asbak portable.",
        "Pembuatan asbak dengan bahan baku yang ramah lingkungan.",
        "Penjualan asbak portable.",
        "Melakukan kemitraan atau kerjasama dengan UMKM dengan menyediakan asbak portable kepada pelanggan yang merokok..",
      ],
      tujuan: [
        "Memudahkan para turis untuk membuang sisa puntung rokok.",
        "Meningkatkan kesadaran perokok tentang pentingnya menjaga kebersihan lingkungan dengan membuang puntung rokok.",
        "Menerapkan gaya hidup dan bentuk tanggung jawab terhadap lingkungan.",
      ],
      penanggungJawab: [
        "Nabila Zakiyah Zahra",
        "Rafly Prabu Darmawan",
        "Dylan Azura",
        "Kathleen Theodora Siallagan",
      ],
    },
    {
      name: "Peningkatan UMKM",
      background: bg06,
      videos: ["/videos/umkm.mp4"],
      kegiatan: [
        "Melakukan peningkatan kualitas baik itu dari segi rasa, tekstur, dan kemasan pada dodol olahan mangrove.",
        "Melakukan branding dan promosi produk dodol olahan mangrove yang lebih baik lewat sosial media.",
        "Melakukan evaluasi penjualan rutin demi peningkatan penjualan produk dodol olahan mangrove.",
      ],
      tujuan: [
        "Mendukung dan meningkatkan hasil penjualan dari  usaha, mikro, kecil, dan menengah (UMKM) yang sudah ada sebelumnya.",
      ],
      penanggungJawab: [
        "Rafa Aqilla Jungjunan",
        "Anjas Jevi Surya",
        "Tegar Agung Jaya",
        "Muhammad Faqih Divanaufal",
      ],
    },
  ];

  if (!slug) {
    return <p>Loading...</p>;
  }

  const program = programKerjaData.find((item) => slugify(item.name) === slug);

  if (!program) {
    return <p>Program kerja tidak ditemukan.</p>;
  }

  return (
    <div
      className="bg-gray-100 min-h-screen py-32"
      style={{
        backgroundImage: `url(${program.background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <div className="relative flex items-center justify-center mt-6 py-5">
          <button
            onClick={() => router.back()}
            className="absolute left-0 bg-gray-300 text-black py-2 px-4 rounded-lg shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Kembali
          </button>
          <h1 className="text-4xl font-bold text-green-900 text-center">
            {program.name}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-12 mb-10 p-6">
          <div className="md:w-1/2">
            <div className="space-y-4">
              {program.videos.map((video, index) => (
                <video
                  key={index}
                  src={video}
                  className="w-full h-auto rounded-lg object-cover"
                  controls
                ></video>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Bentuk Program Kegiatan
              </h2>
              <ul className="list-disc ml-6 text-gray-700">
                {program.kegiatan.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Tujuan Program
              </h2>
              <ul className="list-disc ml-6 text-gray-700">
                {program.tujuan.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Penanggung Jawab
              </h2>
              <ul className="list-disc ml-6 text-gray-700">
                {program.penanggungJawab.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProgramKerja;

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\u0000-\u007E\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
