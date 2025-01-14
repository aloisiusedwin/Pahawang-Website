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
        <h1 className="text-4xl font-bold text-green-900 mb-10 text-center mt-4 pt-7">
          {program.name}
        </h1>
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
