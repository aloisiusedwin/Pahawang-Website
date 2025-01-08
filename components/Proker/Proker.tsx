import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import sandImage from "./../../public/images/sand.jpg";

const PricingCards = () => {
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
    <section id="Proker" className="py-2 bg-cover bg-no-repeat bg-center p-8">
      <div className="max-w-7xl mx-auto my-8">
        <h1 className="regular-24 xl:regular-40 mb-14 text-green-900">
          Program Kerja
        </h1>
        <div className="mx-auto grid md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Card key={index} className="w-full h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className="text-black font-medium text-large">{card.title}</h4>
                <p className="text-tiny text-black uppercase font-bold">{card.Desc}</p>
              </CardHeader>
              <Image
                removeWrapper
                alt={`${card.title} plan image`}
                className="z-0 w-full h-full object-cover"
                src={card.image}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <Button className="text-tiny bg-[#ecfccb] hover:text-[#3f6212] hover:bg-[#ecfccb]" radius="full" size="sm">
                  Check it
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
