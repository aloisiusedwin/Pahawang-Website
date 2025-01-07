import React from "react";

type CardProps = {
  image: string;
  title: string;
  label: string;
};

type ProdukTemplateProps = {
  cards: CardProps[];
  backgroundImage: string;
};

const Card = ({ image, title, label }: CardProps) => {
  return (
    <div
      className={`w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 relative bg-white`}
    >
      {/* Gambar dengan Ukuran Konsisten */}
      <div className="w-full h-48 rounded-lg overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>

      {/* Judul */}
      <h2 className="text-2xl font-bold text-center py-4">{title}</h2>

      {/* Deskripsi dengan Margin Bawah */}
      <p className="text-center text-l font-light py-2 mb-16">{label}</p>

      {/* Tombol Tetap di Bawah */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <button
          className={`bg-[#ecfccb] hover:text-[#3f6212] hover:bg-[#ecfccb] duration-100 w-[200px] rounded-md font-medium px-6 py-3`}
        >
          Lihat Produk
        </button>
      </div>
    </div>
  );
};

const ProdukTemplate = ({ cards, backgroundImage }: ProdukTemplateProps) => {
  return (
    <section
      className="bg-cover bg-no-repeat bg-center p-4 shadow-md" // Shadow tipis untuk container
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-container">
        <div className="w-100 py-[3rem] px-4">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                title={card.title}
                label={card.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProdukTemplate;
