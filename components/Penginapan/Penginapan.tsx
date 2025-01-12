"use client";

import React from "react";
import { useTheme } from "next-themes"; // Import useTheme for theme detection
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

const Penginapan = () => {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  const cardData = [
    {
      image: "https://i.imgur.com/Ql4jRdB.png",
      title: "Program Kerja Sampah",
      Desc: "Pemilahan sampah",
    },
    {
      image: "https://i.imgur.com/Ql4jRdB.png",
      title: "Program Kerja Sampah",
      Desc: "Pemilahan sampah",
    },
    {
      image: "https://i.imgur.com/Ql4jRdB.png",
      title: "Program Kerja Sampah",
      Desc: "Pemilahan sampah",
    },
    {
      image: "https://i.imgur.com/Ql4jRdB.png",
      title: "Program Kerja Sampah",
      Desc: "Pemilahan sampah",
    },
    {
      image: "https://i.imgur.com/Ql4jRdB.png",
      title: "Program Kerja Sampah",
      Desc: "Pemilahan sampah",
    },
    {
      image: "https://i.imgur.com/Ql4jRdB.png",
      title: "Program Kerja Sampah",
      Desc: "Pemilahan sampah",
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
          className={`text-center regular-16 xl:regular-20 mb-1 ${
            theme === "dark" ? "text-white" : "text-[#1F3D3B]"
          }`}
        >
          Nikmati kenyamanan menginap dengan pilihan penginapan yang bersih,
          nyaman, dan dekat dengan keindahan alam Pahawang. Lengkapi liburan
          Anda dengan fasilitas terbaik dan suasana tenang yang membuat
          pengalaman semakin berkesan.
        </p>
        <div className="my-12 mx-auto grid md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className={`w-full h-[300px] ${
                theme === "dark" ? "bg-gray-700" : "bg-white"
              }`}
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4
                  className={`${
                    theme === "dark" ? "text-white" : "text-[#1F3D3B]"
                  } font-medium text-large`}
                >
                  {card.title}
                </h4>
                <p
                  className={`${
                    theme === "dark" ? "text-white" : "text-[#1F3D3B]"
                  } text-tiny uppercase font-bold`}
                >
                  {card.Desc}
                </p>
              </CardHeader>
              <Image
                removeWrapper
                alt={`${card.title} plan image`}
                className="z-0 w-full h-full object-cover"
                src={card.image}
              />
              <CardFooter
                className={`absolute bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between ${
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
          } mb-4 lg:mb-1 mt-10`}
        />
      </div>
    </section>
  );
};

export default Penginapan;
