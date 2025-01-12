// File: components/CustomSwiper/CustomSwiper.js

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img01 from "@/public/images/swiper/swiper-image01.jpg";
import img02 from "@/public/images/swiper/swiper-image02.jpg";
import img03 from "@/public/images/swiper/swiper-image03.jpg";
import img04 from "@/public/images/swiper/swiper-image04.jpg";

const swiperVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const imageDescriptions = [
  {
    src: img01,
    title: "Protect Coral Reefs",
    description:
      "Coral reefs are vital ecosystems that support marine life and protect coastlines from erosion.",
  },
  {
    src: img02,
    title: "Restoration Efforts",
    description:
      "Conservation projects focus on regrowing coral reefs to restore marine biodiversity.",
  },
  {
    src: img03,
    title: "Marine Ecosystems",
    description:
      "Healthy coral reefs provide habitat and shelter for many species of fish and other organisms.",
  },
  {
    src: img04,
    title: "Community Involvement",
    description:
      "Local communities play a crucial role in coral reef conservation and sustainable fishing practices.",
  },
];

export default () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={swiperVariants}
      className="relative flex flex-col items-center justify-center"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={false}
        className="w-full"
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex % imageDescriptions.length);
        }}
      >
        {imageDescriptions.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-auto">
              <motion.img
                src={img.src.src}
                alt={img.title}
                className="select-none w-full h-auto rounded-xl cursor-pointer transform transition-transform"
                onClick={() => setSelectedImage(index)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative flex flex-col md:flex-row max-w-[90%] max-h-[90%] bg-white rounded-xl shadow-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={imageDescriptions[selectedImage].src.src}
                alt={imageDescriptions[selectedImage].title}
                className="md:w-1/2 w-full h-auto object-contain rounded-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
              <div className="p-6 md:w-1/2 flex flex-col justify-center items-start text-left">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  {imageDescriptions[selectedImage].title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  {imageDescriptions[selectedImage].description}
                </p>
              </div>
              <button
                className="absolute top-4 right-4 text-white bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 focus:outline-none"
                onClick={() => setSelectedImage(null)}
              >
                &#x2715;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
