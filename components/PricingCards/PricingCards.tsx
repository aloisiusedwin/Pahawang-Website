import React, { useState } from "react";
import Modal from "../Modal"
import { div } from "framer-motion/client";

interface Plan {
  image: string;
  video: string
  title: string;
  price: string;
  features: string[];
}

const PricingCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null); // State for the selected plan details

  const cardData: Plan[] = [
    {
      image: "https://i.imgur.com/Ql4jRdB.png",
      title: "Silver",
      price: "$149",
      features: ["1 person", "1 trip", "Europe"],
      video:"https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      image: "https://i.imgur.com/pJNFEHR.png",
      title: "Gold",
      price: "$249",
      features: ["2 persons", "1 trip", "Europe"],
      video: ""
    },
    {
      image: "https://i.imgur.com/Hg0sUJP.png",
      title: "Platinum",
      price: "$449",
      features: ["3 & more persons", "Unlimited trips", "The whole World"],
      video: ""
    },
  ];

  const handleCheckItClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true); // Open the modal with the selected plan details
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedPlan(null); // Reset the selected plan
  };

  return (
    <section id="Proker">
      <div id = "proker" className="max-w-7xl mx-auto my-8 flex-auto">
        <h1 className="flex-auto bg-opacity-50 bg-white rounded-3xl text-black font-bold mb-4 lg:m-10 regular-24 xl:regular-40">
          Program Kerja
        </h1>
        <div className="w-full py-[6rem] px-4 bg-white">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
              >
                <img
                  className="w-20 mx-auto mt-[-3rem] bg-white"
                  src={card.image}
                  alt={card.title}
                />
                <h2 className="text-2xl font-bold text-center py-8">
                  {card.title}
                </h2>
                <p className="text-center text-4xl font-bold">{card.price}</p>
                <div className="text-center font-medium">
                  {card.features.map((feature, index) => (
                    <p
                      key={index}
                      className={`py-2 border-b mx-8 ${index === 0 ? "mt-8" : ""}`}
                    >
                      {feature}
                    </p>
                  ))}
                </div>
                <button
                  className="bg-[#ecfccb] hover:text-[#3f6212] hover:bg-[#ecfccb] duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
                  onClick={() => handleCheckItClick(card)} // Trigger modal with card details
                >
                  Check it
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} details={selectedPlan} />
    </section>
  );
};

export default PricingCards;
