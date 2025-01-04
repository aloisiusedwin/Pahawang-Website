import React from "react";
import sandImage from "./../../public/images/sand.jpg";

const Produk = () => {
  const cardData = [
    {
      image: "https://i.imgur.com/Ql4jRdB.png",
      title: "Dodol Mangrove",
      label: "Dodol mangrove adalah oleh-oleh khas Pulau Pahawang dengan rasa manis unik dari buah mangrove.",
    },
    {
      image: "https://i.imgur.com/pJNFEHR.png",
      title: "Kerupuk Jengkol",
      label: "Kerupuk Jengkol adalah oleh-oleh khas Pulau Pahawang dengan rasa yang gurih.",
    },
    {
      image: "https://i.imgur.com/Hg0sUJP.png",
      title: "Asbak Banana",
      label: "Asbak olahan dari limbah yang diperoleh dari sampah-sampah sekitar pulau pahawang ",
    },
  ];
  return (
    <section
      id="Produk"
      className="py-12 bg-cover bg-no-repeat bg-center p-8"
      style={{ backgroundImage: `url(${sandImage.src})` }}
    >
      <div className="max-container">
        <h1 className="flex flexCenter bg-opacity-50 bg-white p-8 rounded-3xl text-black font-bold mb-4 lg:m-10 regular-24 xl:regular-40">
          Produk
        </h1>
        <div className="w-full py-[6rem] px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
            >
              <img
                className="w-20 mx-auto mt-[-3rem] bg-white"
                src={card.image}
                alt="/"
              />
              <h2 className="text-2xl font-bold text-center py-8">
                {card.title}
              </h2>
              <p className="text-center text-xl font-light">{card.label}</p>
              <button
                className={`bg-[#00df9a] hover:text-[#00df9a] hover:bg-gray-50 duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`}
              >
                Check it
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Produk;
