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
    const phoneNumber = details.phoneNumber || "6281234567890"; // Gunakan nomor dari props
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan produk ${details.title}. Bisakah saya mendapatkan informasi lebih lanjut?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className={`${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        } p-8 rounded-lg shadow-xl w-11/12 h-5/6 flex flex-col md:flex-row gap-4 overflow-hidden relative`}
      >
        {/* Button Close */}
        <button
          className={`absolute top-4 right-4 ${
            theme === "dark"
              ? "bg-red-700 text-gray-200"
              : "bg-red-500 text-white"
          } rounded-md px-4 py-2 text-sm`}
          onClick={onClose}
        >
          Close
        </button>

        {/* Gambar Produk */}
        {details.image && (
          <div className="w-full md:w-1/2 h-full flex justify-center items-center">
            <img
              src={details.image}
              alt={details.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}

        {/* Konten Produk */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-between p-4 overflow-y-auto">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-center">
              {details.title}
            </h2>
            <p className="text-xl font-light mb-4 text-center">
              {details.label}
            </p>
            <hr
              className={`my-4 ${
                theme === "dark" ? "border-gray-600" : "border-gray-300"
              }`}
            />

            <div className="text-left">
              <h2 className="text-xl font-semibold mb-2">Deskripsi Produk</h2>
              <p
                className={`mb-4 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {details.description}
              </p>

              <h2 className="text-xl font-semibold mb-2">Spesifikasi Produk</h2>
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

            <div className="text-center mt-4">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg"
              >
                Pesan / Hubungi Penjual
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
          className="bg-[#ecfccb] hover:text-[#3f6212] hover:bg-[#ecfccb] duration-100 w-[200px] rounded-md font-medium px-6 py-3"
          onClick={onClick}
        >
          Cek Selengkapnya
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
    document.body.style.overflow = "hidden"; // Disable background scrolling
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Re-enable background scrolling
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
