import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

const Produk = () => {
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
    <section id="Produk" className="py-2 bg-cover bg-no-repeat bg-center p-8">
      <div className="max-w-7xl mx-auto my-8">
        <h1 className="text-center regular-24 xl:regular-40 mb-1 text-green-900">
          Produk UMKM
        </h1>
        <p className="text-center regular-16 xl:regular-20 mb-14 text-green-900">
          Oleh-Oleh dengan Sentuhan Cinta dan Tradisi, Sempurnakan Perjalanan
          Anda
        </p>
        <div className="mx-auto grid md:grid-cols-3 gap-8">
          {list.map((item, index) => (
            <Card key={index} className="w-full h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className="text-yellow-300 font-medium text-large">
                  {item.title}
                </h4>
                <p className="text-tiny text-yellow-200 uppercase font-bold">
                  {item.type}
                </p>
              </CardHeader>
              <Image
                removeWrapper
                alt={item.title}
                className="z-0 w-full h-full object-cover"
                src={item.img}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <Button
                  className="text-tiny bg-[#ecfccb] hover:text-[#3f6212] hover:bg-[#ecfccb]"
                  radius="full"
                  size="sm"
                >
                  Check it
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <hr className="border-t-2 border-gray-300 mb-4 lg:mb-1 mt-20" />
      </div>
    </section>
  );
};

export default Produk;
