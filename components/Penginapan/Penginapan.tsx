"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

const Penginapan = () => {
  const { theme } = useTheme();

  const list = [
    {
      img: "/images/penginapan/teras pahawang.jpg",
      title: "Teras Pahawang",
      type: "Vila",
    },
    {
      img: "/images/penginapan/villa mangrove.jpg",
      title: "Villa Mangrove",
      type: "Resort",
    },
    {
      img: "/images/penginapan/la nadiya.jpg",
      title: "La Nadiya",
      type: "Penginapan",
    },
    {
      img: "/images/penginapan/villa kembar.jpg",
      title: "Villa Kembar",
      type: "Guest House",
    },
    {
      img: "/images/penginapan/de boer.png",
      title: "De'Boer Pahawang",
      type: "Hotel",
    },
  ];

  return (
    <section
      id="Proker"
      className={`py-2 bg-cover bg-no-repeat bg-center p-8 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto my-8">
        <h1
          className={`text-center regular-24 xl:regular-40 mb-1 ${
            theme === "dark" ? "text-green-300" : "text-green-900"
          }`}
        >
          Temukan Penginapan Nyaman di Pahawang
        </h1>
        <p
          className={`text-center regular-16 xl:regular-20 ${
            theme === "dark" ? "text-white" : "text-[#1F3D3B]"
          }`}
        >
          Nikmati kenyamanan menginap dengan pilihan penginapan yang bersih,
          nyaman, dan dekat dengan keindahan alam Pahawang. Lengkapi liburan
          Anda dengan fasilitas terbaik dan suasana tenang yang membuat
          pengalaman semakin berkesan.
        </p>
        <div className="mx-auto flex flex-wrap justify-center gap-8 mt-10">
          {list.slice(0, 3).map((item, index) => (
            <Link href="/penginapan" key={index}>
              <Card className="w-[300px] h-[300px] transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <Image
                  removeWrapper
                  alt={item.title}
                  className="z-0 w-full h-full object-cover"
                  src={item.img}
                />
                <CardFooter
                  className={`absolute bg-white/30 bottom-0 border-t border-zinc-100/50 z-10 justify-between p-4 ${
                    theme === "dark"
                      ? "bg-black/50 text-white"
                      : "bg-white/70 text-black"
                  }`}
                >
                  <div
                    className={`flex flex-col items-start ${
                      theme === "dark" ? "text-yellow-300" : "text-yellow-600"
                    }`}
                  >
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p
                      className={`text-sm uppercase font-bold mt-1 ${
                        theme === "dark" ? "text-yellow-200" : "text-yellow-500"
                      }`}
                    >
                      {item.type}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/penginapan">
            <button
              className={`px-6 py-2 rounded-lg font-semibold transform transition duration-300 hover:scale-105 ${
                theme === "dark"
                  ? "bg-green-300 text-gray-800 hover:bg-green-400"
                  : "bg-green-900 text-white hover:bg-green-700"
              }`}
            >
              Lihat Penginapan Lainnya
            </button>
          </Link>
        </div>

        <hr
          className={`border-t-2 ${
            theme === "dark" ? "border-gray-700" : "border-gray-300"
          } mb-4 lg:mb-1 mt-20`}
        />
      </div>
    </section>
  );
};

export default Penginapan;
