import React from "react";

const DocumentarySection = () => {
  return (
    <div className="py-10">
      <div
        className="min-h-screen w-full flex flex-col md:flex-row items-center gap-12 px-8"
        style={{
          backgroundColor: "#1F3D3B",
          padding: "40px",
        }}
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
            Menyelamatkan Surga Bawah Laut: Konservasi Terumbu Karang Pahawang
          </h2>
          <p className="text-[#A3FFCC] text-lg md:text-xl">
            Dokumenter ini mengeksplorasi upaya konservasi terumbu karang di
            Pulau Pahawang, salah satu destinasi laut terindah di Indonesia.
            Ikuti perjalanan para pejuang lingkungan dan masyarakat lokal dalam
            menjaga ekosistem laut yang rapuh. Dengan kisah inspiratif dan
            visual memukau, film ini mengajak kita memahami pentingnya
            melindungi terumbu karang demi masa depan biodiversitas dan generasi
            mendatang.
          </p>
        </div>

        <div className="flex-1 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-[500px]"
            src="https://www.youtube.com/embed/aGGBGcjdjXA?si=Emx9tRNcpd-tPHQz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DocumentarySection;
