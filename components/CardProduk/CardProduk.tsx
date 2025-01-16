"use client";

import React from "react";
import Link from "next/link"; // Import NextLink
import { useTheme } from "next-themes";
import { Card, CardFooter, Image } from "@nextui-org/react";

const Produk = () => {
  const { theme } = useTheme();

  const list = [
    {
      img: "./images/produk/umkm1.jpg",
      title: "Peyek Kacang",
      type: "Konsumsi",
    },
    {
      img: "./images/produk/umkm2.jpeg",
      title: "Dodol Mangrove",
      type: "Konsumsi",
    },
    {
      img: "./images/produk/umkm3.jpeg",
      title: "Keripik Pisang",
      type: "Konsumsi",
    },
  ];

  return (
    <section
      id="Produk"
      className={`py-2 bg-cover bg-no-repeat bg-center p-8 ${
        theme === "dark" ? "bg-gray-800" : "bg-[#E6F9F4]"
      }`}
    >
      <div className="max-w-7xl mx-auto my-8">
        <h1
          className={`text-center regular-24 xl:regular-40 mb-1 ${
            theme === "dark" ? "text-green-300" : "text-green-900"
          }`}
        >
          Produk UMKM
        </h1>
        <p
          className={`text-center regular-16 xl:regular-20 mb-14 ${
            theme === "dark" ? "text-green-200" : "text-green-900"
          }`}
        >
          Oleh-Oleh dengan Sentuhan Cinta dan Tradisi, Sempurnakan Perjalanan
          Anda
        </p>
        <div className="mx-auto grid md:grid-cols-3 gap-8">
          {list.map((item, index) => (
            <Link href="/produk" key={index}>
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
      </div>
    </section>
  );
};

export default Produk;
