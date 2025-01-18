import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img01 from "@/public/images/konservasi/terumbu1.jpg";
import img02 from "@/public/images/konservasi/terumbu2.jpg";
import img03 from "@/public/images/konservasi/terumbu3.jpg";
import img04 from "@/public/images/konservasi/terumbu4.jpg";

const swiperVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const imageDescriptions = [
  {
    src: img01,
  },
  {
    src: img02,
  },
  {
    src: img03,
  },
  {
    src: img04,
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
              alt={`Image ${index + 1}`}
              className="select-none rounded-xl cursor-pointer transform transition-transform hover:scale-105 w-full h-64 object-cover"
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
            <motion.img
              src={imageDescriptions[selectedImage].src.src}
              alt={`Image ${selectedImage + 1}`}
              className="max-w-full max-h-full rounded-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
