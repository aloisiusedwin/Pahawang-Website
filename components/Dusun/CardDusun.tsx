"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface CardDusunProps {
  images: string[];
  name: string;
  description: string;
  location: string;
  contactInfo: string;
}

const CardDusun: React.FC<CardDusunProps> = ({
  images,
  name,
  description,
  location,
  contactInfo,
}) => {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatic Slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [activeImageIndex]);

  return (
    <>
      <div
        className={`relative shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
        onClick={handleOpenModal}
      >
        <img src={images[0]} alt={name} className="w-full h-64 object-cover" />

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
          <p
            className={`text-sm mt-1 text-gray-600 dark:text-gray-300 ${
              theme === "dark" ? "text-white" : "text-green-800"
            }`}
          >
            {location}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
            } p-8 rounded-lg shadow-xl w-11/12 h-5/6 flex flex-col md:flex-row gap-4 overflow-hidden relative`}
          >
            {/* Close Button */}
            <button
              className={`absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full ${
                theme === "dark"
                  ? "bg-gray-700 text-white"
                  : "bg-gray-300 text-black"
              } hover:bg-red-500 hover:text-white duration-200`}
              onClick={handleCloseModal}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Left Section: Images with Navigation */}
            <div className="w-full md:w-1/2 h-full flex justify-center items-center">
              <img
                src={images[activeImageIndex]}
                alt={name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right Section: Content */}
            <div className="flex flex-col w-full md:w-1/2 h-full px-4 overflow-y-auto">
              <h2 className="text-4xl font-bold mb-4 text-center text-green-600">
                {name}
              </h2>

              <div
                className={`text-gray-600 dark:text-gray-300 mb-4 flex items-center justify-center md:justify-start gap-2 ${
                  theme === "dark" ? "text-white" : "text-green-800"
                }`}
              >
                <FaMapMarkerAlt className="text-green-500" />
                <span>{location}</span>
              </div>

              <p
                className={`text-gray-700 dark:text-gray-300 mb-6 text-justify ${
                  theme === "dark" ? "text-white" : "text-green-800"
                }`}
              >
                {description}
              </p>

              <div className="mb-6">
                <p
                  className={`text-gray-700 dark:text-gray-300 font-semibold flex items-center gap-2 ${
                    theme === "dark" ? "text-white" : "text-green-800"
                  }`}
                >
                  <FaInfoCircle className="text-green-500" />
                  Kontak: {contactInfo}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDusun;
