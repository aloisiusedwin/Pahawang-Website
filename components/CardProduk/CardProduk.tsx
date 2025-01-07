import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

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
    {
      img: "https://i.imgur.com/Hg0sUJP.png",
      title: "Asbak Banana",
      type: "Souvenir",
    },
  ];

  return (
    <section id="Produk" className="py-2 bg-cover bg-no-repeat bg-center p-8"
    >
      <div id= "Produk" className="max-w-7xl mx-auto my-8">
        <div className=" text-black mb-4 regular-24 xl:regular-40 flex">
          PRODUK UMKM
        </div>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {list.map((item, index) => (
            /* eslint-disable no-console */
            <Card
              key={index}
              isPressable
              shadow="sm"
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  radius="lg"
                  shadow="sm"
                  src={item.img}
                  width="100%"
                  height="100%"
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.type}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        <hr className="border-t-2 border-gray-300 mb-4 lg:mb-1 mt-10" />
      </div>
    </section>
    
  );
};

export default Produk;
