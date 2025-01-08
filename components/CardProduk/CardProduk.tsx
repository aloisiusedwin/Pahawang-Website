import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

const Produk = () => {
  const list = [
    {
      img: "https://i.imgur.com/Hg0sUJP.png",
      title: "Asbak Banana",
      type: "Souvenir",
    },
    {
      img: "https://i.imgur.com/Hg0sUJP.png",
      title: "Asbak Banana",
      type: "Souvenir",
    },
    {
      img: "https://i.imgur.com/Hg0sUJP.png",
      title: "Asbak Banana",
      type: "Souvenir",
    },
  ];

  return (
    <section id="Produk" className="py-2 bg-cover bg-no-repeat bg-center p-8">
      <div className="max-w-7xl mx-auto my-8">
        <h1 className="regular-24 xl:regular-40 mb-14 text-green-900">
          Produk UMKM
        </h1>
        <div className="mx-auto grid md:grid-cols-3 gap-8">
          {list.map((item, index) => (
            <Card key={index} className="w-full h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className="text-black font-medium text-large">
                  {item.title}
                </h4>
                <p className="text-tiny text-black uppercase font-bold">
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
                <Button className="text-tiny bg-[#ecfccb] hover:text-[#3f6212] hover:bg-[#ecfccb]" radius="full" size="sm">
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
