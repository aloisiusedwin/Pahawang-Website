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
    title: "Image 01",
    description: "This is a description for Image 01.",
  },
  {
    src: img02,
    title: "Image 02",
    description: "This is a description for Image 02.",
  },
  {
    src: img03,
    title: "Image 03",
    description: "This is a description for Image 03.",
  },
  {
    src: img04,
    title: "Image 04",
    description: "This is a description for Image 04.",
  },
];

export default () => {
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
        spaceBetween={30}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="w-full"
      >
        {imageDescriptions.map((img, index) => (
          <SwiperSlide key={index}>
            <motion.img
              src={img.src.src}
              alt={img.title}
              className="select-none rounded-xl cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedImage(index)}
            />
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
              className="relative max-w-[90%] max-h-[90%] bg-white rounded-xl shadow-lg overflow-hidden flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-1/2 flex items-center justify-center bg-gray-900 p-4">
                <motion.img
                  src={imageDescriptions[selectedImage].src.src}
                  alt={imageDescriptions[selectedImage].title}
                  className="max-w-full max-h-full rounded-xl"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                />
              </div>
              <div className="w-1/2 p-6 flex flex-col justify-start items-center text-center">
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
