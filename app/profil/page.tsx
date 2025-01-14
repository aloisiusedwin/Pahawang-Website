"use client";

import React, { useEffect } from "react";
import ScrollToTopButton from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScrolling";
import Video from "@/components/Header/HeaderVideo";
import { Montserrat } from "next/font/google";
import { useTheme } from "next-themes";
import CardDusun from "@/components/Dusun/CardDusun";

// Impor font Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dusunData = [
  {
    images: [
      "./images/sand.jpg",
      "./images/maledives01.jpg",
      "./images/maledives01.jpg",
    ],
    name: "Dusun I Suak Buah",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu arcu commodo, eleifend mauris in, vulputate lorem. Pellentesque eu erat accumsan, ullamcorper erat et, blandit ligula. Integer ullamcorper fringilla mauris. Aliquam et quam sodales, euismod metus gravida, convallis tortor. Sed tempor et enim sed laoreet. Aliquam laoreet, metus sed tincidunt auctor, felis ex dignissim erat, nec mattis mi lorem porta enim. Aenean ut iaculis lacus. Etiam rutrum diam nulla, sed feugiat leo gravida non. Phasellus at bibendum leo. Aliquam vel leo libero. Cras aliquet metus ut aliquet ultricies. Donec vel erat convallis, sollicitudin quam a, convallis quam. Integer ullamcorper, orci id iaculis blandit, lectus elit malesuada arcu, eu porttitor lorem neque eu libero. Sed tortor lacus, lacinia quis interdum a, consequat vitae quam. Integer eget libero turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sit amet venenatis ante. Mauris metus lectus, fermentum eu purus quis, mattis convallis velit. Nunc tristique lectus ac nisl convallis, ultricies efficitur augue faucibus. Phasellus vel ante sed dolor ornare aliquam at quis enim. Etiam scelerisque purus eget sapien varius mollis. Aliquam dignissim vehicula tempor. Sed gravida mauris mauris, eget congue nisl vestibulum a. Suspendisse vitae libero quis elit accumsan mollis vel sed urna. Sed elementum metus nec lectus posuere, et pretium ante mattis. Proin consectetur pellentesque leo, eu vulputate nulla pulvinar ac. Curabitur pharetra tristique est, id tincidunt arcu malesuada ullamcorper. Aliquam auctor rutrum sapien, ut placerat risus luctus ut. Nullam ullamcorper felis lorem, et placerat libero efficitur a. Nullam vel nulla pharetra, vehicula massa non, dictum augue. Donec enim turpis, ornare sed sem eget, eleifend consectetur metus. Duis purus elit, dignissim vitae ipsum non, maximus tempor enim. Sed molestie maximus eros, ac egestas ex tincidunt sed. Integer rhoncus tortor id ipsum scelerisque, vitae finibus orci molestie.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 812 3456 7890",
  },
  {
    images: ["./images/maledives01.jpg","./images/maledives01.jpg"],
    name: "Dusun II Penggetahan",
    description:
      "Surga bawah laut dengan terumbu karang yang masih alami, cocok untuk snorkeling.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 813 4567 8901",
  },
  {
    images: ["./images/maledives02.jpg"],
    name: "Dusun III Jeralangan",
    description:
      "Memiliki hutan mangrove yang lebat dan menjadi rumah bagi berbagai spesies burung.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 814 5678 9012",
  },
  {
    images: ["./images/maledives01.jpg"],
    name: "Dusun IV Kalangan",
    description:
      "Destinasi populer untuk homestay dan pengalaman hidup bersama warga lokal.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 815 6789 0123",
  },
  {
    images: ["./images/maledives02.jpg"],
    name: "Dusun V Pahawang",
    description:
      "Jantung pulau dengan berbagai aktivitas budaya dan seni tradisional.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 816 7890 1234",
  },
  {
    images: ["./images/sand.jpg"],
    name: "Dusun VI Cukuh Nyai",
    description:
      "Dusun kecil yang menawarkan ketenangan dan keindahan alam tropis.",
    location: "Pulau Pahawang, Lampung",
    contactInfo: "+62 817 8901 2345",
  },
];

const DusunSection = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} py-12`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2
          className={`text-3xl font-bold text-center mb-8 ${
            theme === "dark" ? "text-green-300" : "text-green-900"
          }`}
        >
          Dusun di Pulau Pahawang
        </h2>
        <p
          className={`${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          } text-center mb-12`}
        >
          Setiap dusun di Pulau Pahawang memiliki daya tarik unik yang siap
          dijelajahi. Dari pantai berpasir putih hingga hutan mangrove yang
          asri, temukan pesona masing-masing dusun!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dusunData.map((dusun, index) => (
            <CardDusun
              key={index}
              images={dusun.images}
              name={dusun.name}
              description={dusun.description}
              location={dusun.location}
              contactInfo={dusun.contactInfo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Profil() {
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          src={"/videos/bech.mp4"}
          className="object-cover w-full h-[40vh] md:h-[60vh] lg:h-[85vh]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 text-center overflow-hidden">
          <div className="text-white px-4">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              PULAU PAHAWANG
            </h1>
            <p className="text-lg sm:text-xl">
              Surga Tersembunyi di Selatan Lampung
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left ${
              theme === "dark" ? "text-green-300" : "text-green-900"
            }`}
          >
            Tentang Pulau Pahawang
          </h2>
          <p
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            } leading-relaxed mb-6 text-justify`}
          >
            Pulau Pahawang adalah sebuah pulau kecil yang terletak di Kabupaten
            Pesawaran, Provinsi Lampung. Pulau ini terkenal dengan keindahan
            alam bawah lautnya, pantai berpasir putih, dan suasana yang tenang.
          </p>
          <hr
            className={`border-t-2 mb-4 lg:mb-1 mt-5 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            }`}
          />
        </div>
      </section>

      <DusunSection />
      <ScrollToTopButton />
      <SmoothScroll />
    </div>
  );
}
