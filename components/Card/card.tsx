import React, { useState } from "react";
import { useTheme } from "next-themes"; // Import useTheme for theme detection

const Modal = ({
  isOpen,
  onClose,
  details,
}: {
  isOpen: boolean;
  onClose: () => void;
  details: any;
}) => {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    const phoneNumber = details.phoneNumber || "6281274448461";
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan ${details.title} Pahawang. Bisakah saya mendapatkan informasi lebih lanjut?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className={`${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        } p-6 rounded-lg shadow-xl w-[90%] max-w-3xl flex flex-col gap-6 overflow-hidden relative`}
      >
        <button
          className={`absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full ${
            theme === "dark"
              ? "bg-gray-700 text-white"
              : "bg-gray-300 text-black"
          } hover:bg-red-500 hover:text-white duration-200`}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row gap-4">
          {details.image && (
            <div className="w-full h-full md:w-1/2 flex justify-center items-center">
              <img
                src={details.image}
                alt={details.title}
                className="w-full h-full object-cover rounded-lg max-h-48 md:max-h-[500px]"
              />
            </div>
          )}

          <div className="w-full md:w-1/2 flex flex-col overflow-y-auto max-h-[60vh]">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">
                {details.title}
              </h2>
              <p className="text-sm md:text-md font-light mb-4 text-center">
                {details.label}
              </p>
              <hr
                className={`my-4 ${
                  theme === "dark" ? "border-gray-600" : "border-gray-300"
                }`}
              />

              <div>
                <h2 className="text-md md:text-lg font-semibold mb-2">
                  Deskripsi
                </h2>
                <p
                  className={`mb-4 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {details.description}
                </p>

                <h2 className="text-md md:text-lg font-semibold mb-2">
                  Spesifikasi
                </h2>
                <ul
                  className={`list-disc list-inside mb-4 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {details.specifications.map((spec: string, index: number) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-4">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg"
              >
                Pesan / Hubungi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type CardProps = {
  image: string;
  title: string;
  label: string;
  description: string;
  specifications: string[];
  phoneNumber: string;
  onClick: () => void;
};

const Card = ({ image, title, label, onClick }: CardProps) => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div
      className={`w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 relative ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full h-48 rounded-lg overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <h2 className="text-2xl font-bold text-center py-4">{title}</h2>
      <p className="text-center text-l font-light py-2 mb-16">{label}</p>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <button
          className={`duration-100 w-[200px] rounded-md font-medium px-6 py-3 ${
            theme === "dark"
              ? "bg-[#ecfccb] text-[#3f6212] hover:text-[#ecfccb]  hover:bg-[#3f6212]"
              : "bg-[#ecfccb] hover:text-[#3f6212] hover:bg-[#ecfccb]"
          }`}
          onClick={onClick}
        >
          Lihat
        </button>
      </div>
    </div>
  );
};

type ProdukTemplateProps = {
  cards: CardProps[];
  backgroundImage: string;
};

const ProdukTemplate = ({ cards, backgroundImage }: ProdukTemplateProps) => {
  const [selectedProduct, setSelectedProduct] = useState<CardProps | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: CardProps) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      className="bg-cover bg-no-repeat bg-center p-4 shadow-md"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-container">
        <div className="w-100 py-[3rem] px-4">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card key={index} {...card} onClick={() => openModal(card)} />
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        details={selectedProduct}
      />
    </section>
  );
};

export default ProdukTemplate;
