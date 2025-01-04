import React, { useState } from "react";
import sandImage from "./../../public/images/sand.jpg";
import Button from "../Button";

const Modal = ({ isOpen, onClose, details }: { isOpen: boolean, onClose: () => void, details: any }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50"
      style={{ pointerEvents: 'auto' }}
    >
      <div className="bg-white p-8 rounded-lg shadow-xl w-11/12 md:w-1/3 relative z-60 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{details.title}</h2>
        <p className="text-xl font-light mb-4">{details.label}</p>

        {details.image && (
          <div className="my-4">
            <img src={details.image} alt={details.title} className="w-full h-auto rounded-lg" />
          </div>
        )}

        <div className="flex justify-center mt-4">
          <button
            className="bg-red-500 text-white rounded-md px-4 py-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Produk = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable background scrolling
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Re-enable background scrolling
  };

  const cardData = [
    {
      image: "https://i.imgur.com/Hg0sUJP.png",
      title: "Asbak Banana",
      label: "Asbak olahan dari limbah yang diperoleh dari sampah-sampah sekitar Pulau Pahawang.",
    },
    {
      image: "https://i.imgur.com/Hg0sUJP.png",
      title: "Asbak Banana",
      label: "Asbak olahan dari limbah yang diperoleh dari sampah-sampah sekitar Pulau Pahawang.",
    },
    {
      image: "https://i.imgur.com/Hg0sUJP.png",
      title: "Asbak Banana",
      label: "Asbak olahan dari limbah yang diperoleh dari sampah-sampah sekitar Pulau Pahawang.",
    },
    {
      image: "https://i.imgur.com/Hg0sUJP.png",
      title: "Asbak Banana",
      label: "Asbak olahan dari limbah yang diperoleh dari sampah-sampah sekitar Pulau Pahawang.",
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
        <div className="w-100 py-[6rem] px-4">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
              >
                <img
                  className="w-auto mt-[-2rem] h-auto"
                  src={card.image}
                  alt={card.title}
                />
                <h2 className="text-2xl font-bold text-center py-4">
                  {card.title}
                </h2>
                <p className="text-center text-l font-light py-2">{card.label}</p>
                <button
                  className={`bg-[#ecfccb] hover:text-[#3f6212] hover:bg-[#ecfccb] duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`}
                  onClick={() => openModal(card)}
                >
                  Check it
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} details={selectedProduct} />
    </section>
  );
};

export default Produk;
