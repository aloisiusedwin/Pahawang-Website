"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes"; // Import useTheme for theme detection
import { Alert } from "@nextui-org/react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Contact = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const { theme } = useTheme(); // Get the current theme (light or dark)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo, saya ingin menghubungi Anda!");
    window.open(`https://wa.me/273612897?text=${message}`, "_blank");
  };

  const handleGmailClick = () => {
    const subject = encodeURIComponent("Pertanyaan tentang layanan Anda");
    const body = encodeURIComponent(
      "Halo, saya tertarik dengan layanan Anda. Mohon informasinya lebih lanjut."
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=yourname@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  const handleSocialMediaClick = (url: string | URL | undefined) => {
    window.open(url, "_blank");
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+62 123456789";
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 3000); // Hide alert after 3 seconds
    });
  };

  return (
    <section
      id="contact"
      className={`flex justify-center items-center min-h-screen p-4 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-[#E6F9F4] text-black"
      }`}
    >
      <div
        className={`text-center shadow-md p-6 rounded-lg max-w-lg w-full ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        <h1
          className={`text-2xl font-bold mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          Hubungi Kami
        </h1>
        <div className="space-y-4">
          <button
            onClick={handleWhatsAppClick}
            className={`flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition duration-300 w-full ${
              theme === "dark"
                ? "bg-green-500 text-white hover:bg-green-700"
                : "bg-green-500 text-white hover:bg-green-700"
            }`}
          >
            <FaWhatsapp className="w-6 h-6 mr-2" />
            Hubungi via WhatsApp
          </button>

          <button
            onClick={handleGmailClick}
            className={`flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition duration-300 w-full ${
              theme === "dark"
                ? "bg-red-500 text-white hover:bg-red-700"
                : "bg-red-500 text-white hover:bg-red-700"
            }`}
          >
            <FaEnvelope className="w-6 h-6 mr-2" />
            Kirim via Gmail
          </button>

          <button
            onClick={handlePhoneClick}
            className={`flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition duration-300 w-full ${
              theme === "dark"
                ? "bg-purple-500 text-white hover:bg-purple-700"
                : "bg-purple-500 text-white hover:bg-purple-700"
            }`}
          >
            <FaPhoneAlt className="w-6 h-6 mr-2" />
            Telepon kami di +62 123456789
          </button>

          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={() => handleSocialMediaClick("https://facebook.com")}
              className={`text-blue-600 hover:text-blue-800 transition ${
                theme === "dark" ? "text-white" : "text-blue-600"
              }`}
            >
              <FaFacebookF className="w-8 h-8" />
            </button>
            <button
              onClick={() => handleSocialMediaClick("https://instagram.com")}
              className={`text-pink-500 hover:text-pink-700 transition ${
                theme === "dark" ? "text-white" : "text-pink-500"
              }`}
            >
              <FaInstagram className="w-8 h-8" />
            </button>
            <button
              onClick={() => handleSocialMediaClick("https://tiktok.com")}
              className={`text-black hover:text-gray-700 transition ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <FaTiktok className="w-8 h-8" />
            </button>
          </div>
        </div>

        {popupVisible && (
          <div className="fixed bottom-4 left-4 w-64 duration-300">
            <Alert
              color="success"
              title="Nomor telepon telah disalin ke clipboard"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
