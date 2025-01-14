import React, { useState } from "react";
import { useTheme } from "next-themes";
import { FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";

const CloseButton = ({ onClose }: { onClose: () => void }) => {
  const { theme } = useTheme();

  return (
    <button
      className={`absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full ${
        theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
      } hover:bg-red-500 hover:text-white duration-200`}
      onClick={onClose}
      aria-label="Close"
    >
      ✕
    </button>
  );
};

interface CardDusunProps {
  image: string;
  name: string;
  description: string;
  location: string;
  contactInfo: string;
}

const CardDusun: React.FC<CardDusunProps> = ({
  image,
  name,
  description,
  location,
  contactInfo,
}) => {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className={`relative shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
        onClick={handleOpenModal}
      >
        <img src={image} alt={name} className="w-full h-64 object-cover" />

        <div
          className={`absolute bottom-0 w-full p-4 text-center ${
            theme === "dark"
              ? "bg-gray-800 bg-opacity-70"
              : "bg-white bg-opacity-90"
          }`}
        >
          <h3
            className={`text-lg font-bold ${
              theme === "dark" ? "text-green-400" : "text-green-800"
            }`}
          >
            {name}
          </h3>
          <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
            {location}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-[90vw] h-[95vh] flex flex-col md:flex-row gap-6 overflow-hidden relative`}
          >
            <CloseButton onClose={handleCloseModal} />

            <div className="flex-shrink-0 w-full md:w-2/5 h-full flex justify-center items-center">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="flex-grow flex flex-col justify-between overflow-y-auto">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-center text-green-600">
                  {name}
                </h2>

                <div className="text-center md:text-left text-gray-600 dark:text-gray-300 mb-4">
                  <FaMapMarkerAlt className="inline-block mr-2 text-green-500" />
                  {location}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 text-justify">
                  {description}
                </p>

                <div className="text-center md:text-left mb-6">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">
                    <FaInfoCircle className="inline-block mr-2 text-green-500" />
                    Kontak: {contactInfo}
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-end gap-4 mt-4">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md"
                  onClick={() => alert("Info lanjut akan ditambahkan")}
                >
                  Info Lanjut
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md"
                  onClick={handleCloseModal}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDusun;
