import React, { useState } from "react";
import { Alert } from "@nextui-org/react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Contact = () => {
  const [popupVisible, setPopupVisible] = useState(false);

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
      className="flex justify-center items-center min-h-screen bg-gray-100 p-4"
    >
      <div className="text-center bg-white shadow-md p-6 rounded-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Hubungi Kami</h1>
        <div className="space-y-4">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300 w-full"
          >
            <FaWhatsapp className="w-6 h-6 mr-2" />
            Hubungi via WhatsApp
          </button>

          <button
            onClick={handleGmailClick}
            className="flex items-center justify-center px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 w-full"
          >
            <FaEnvelope className="w-6 h-6 mr-2" />
            Kirim via Gmail
          </button>

          <button
            onClick={handlePhoneClick}
            className="flex items-center justify-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300 w-full"
          >
            <FaPhoneAlt className="w-6 h-6 mr-2" />
            Telepon kami di +62 123456789
          </button>

          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={() => handleSocialMediaClick("https://facebook.com")}
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <FaFacebookF className="w-8 h-8" />
            </button>
            <button
              onClick={() => handleSocialMediaClick("https://instagram.com")}
              className="text-pink-500 hover:text-pink-700 transition"
            >
              <FaInstagram className="w-8 h-8" />
            </button>
            <button
              onClick={() => handleSocialMediaClick("https://tiktok.com")}
              className="text-black hover:text-gray-700 transition"
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
