"use client";

import React from "react";
import { useTheme } from "next-themes"; // Import useTheme for theme detection
import { Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

const Penginapan = () => {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  const list = [
    {
      img: "https://i.imgur.com/Ql4jRdB.png",
      title: "Vila Hijau",
      type: "Vila",
    },
    {
      img: "https://i.imgur.com/Ql4jRdB.png",
      title: "Homestay Asri",
      type: "Homestay",
    },
    {
      img: "https://i.imgur.com/Ql4jRdB.png",
      title: "Resort Pantai",
      type: "Resort",
    },
    {
      img: "https://i.imgur.com/Ql4jRdB.png",
      title: "Penginapan Nyaman",
      type: "Penginapan",
    },
    {
      img: "https://i.imgur.com/Ql4jRdB.png",
      title: "Guest House Ceria",
      type: "Guest House",
    },
    {
      img: "https://i.imgur.com/Ql4jRdB.png",
      title: "Hotel Tropis",
      type: "Hotel",
    },
  ];

  return (
    <section
      id="Proker"
      className={`py-2 bg-cover bg-no-repeat bg-center p-8 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-[#E6F9F4] text-black"
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
        <div className="mx-auto grid md:grid-cols-3 gap-8 mt-10">
          {list.map((item, index) => (
            <Link href="/penginapan" key={index}>
              <Card className="w-full h-[300px] transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
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
