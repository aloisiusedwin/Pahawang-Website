"use client";

import React from "react";
import { useTheme } from "next-themes"; // Import useTheme for theme detection
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

const Produk = () => {
  const { theme } = useTheme(); // Get the current theme (light or dark)

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
        theme === "dark" ? "bg-gray-800" : "bg-[#E6F9F4]" // Light theme bg color updated
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
            <Card key={index} className="w-full h-[300px]">
              <CardHeader
                className={`absolute z-10 top-1 flex-col items-start ${
                  theme === "dark" ? "text-yellow-300" : "text-yellow-600"
                }`}
              >
                <h4 className="font-medium text-large">{item.title}</h4>
                <p
                  className={`text-tiny uppercase font-bold ${
                    theme === "dark" ? "text-yellow-200" : "text-yellow-500"
                  }`}
                >
                  {item.type}
                </p>
              </CardHeader>
              <Image
                removeWrapper
                alt={item.title}
                className="z-0 w-full h-full object-cover"
                src={item.img}
              />
              <CardFooter
                className={`absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between ${
                  theme === "dark" ? "bg-black/50" : "bg-white/30"
                }`}
              >
                <Button
                  className={`text-tiny ${
                    theme === "dark"
                      ? "bg-[#3f6212] text-white hover:bg-[#4d8533]"
                      : "bg-[#ecfccb] text-[#3f6212] hover:text-[#3f6212] hover:bg-[#ecfccb]"
                  }`}
                  radius="full"
                  size="sm"
                >
                  Check it
                </Button>
              </CardFooter>
            </Card>
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

export default Produk;
