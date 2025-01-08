import React from "react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/273612897", "_blank");
  };

  return (
    <section id="contact" className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="flex flexCenter bg-opacity-50 bg-white pt-8 text-black font-bold mb-4 lg:m-10 regular-24 xl:regular-40">
          Contact
        </h1>

        {/* WhatsApp button */}
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
        >
          {/* WhatsApp Icon */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Logo"
            className="w-6 h-6 mr-2" // Adjust the size of the logo
          />
          Hubungi via WhatsApp
        </button>
      </div>
    </section>
  );
};

export default Contact;
