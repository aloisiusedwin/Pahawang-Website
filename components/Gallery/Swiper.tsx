import { 
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
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
import img05 from "@/public/images/produk/pembohong.png"

const swiperVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Deskripsi Untuk Setiap Gambar
const imageDescriptions = [
  { src: img01, title: "Image 01", description: "This is a description for Image 01." },
  { src: img02, title: "Image 02", description: "This is a description for Image 02." },
  { src: img03, title: "Image 03", description: "This is a description for Image 03." },
  { src: img04, title: "Image 04", description: "This is a description for Image 04." },
  { src: img05, title: "Pembohong Publik", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at bibendum tellus. Donec sit amet libero eget sapien lacinia rutrum id in orci. Quisque et tincidunt neque, non mollis orci. Morbi interdum, metus tincidunt ultrices interdum, diam sapien tristique magna, et dictum enim magna eget nulla. In et molestie nulla. Nunc mollis orci quis lacinia egestas. Aenean ante leo, rutrum gravida consequat eget, vulputate quis lectus. Curabitur lobortis egestas dui, sed pellentesque erat tincidunt in. Curabitur vel semper ex."},
];

export default () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Close modal when Esc is pressed
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on component unmount
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
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={true} // Navigation enabled
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
            spaceBetween: 40,
          },
        }}
        className="w-full xl:w-[80%]"
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

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="flex flex-row max-w-[90%] max-h-[90%] bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Image Section */}
              <div className="w-1/2 flex items-center justify-center bg-gray-900">
                <motion.img
                  src={imageDescriptions[selectedImage].src.src}
                  alt={imageDescriptions[selectedImage].title}
                  className="max-w-full max-h-full rounded-xl"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                />
              </div>
              {/* Text Section */}
              <div className="w-1/2 p-6 flex flex-col">
                <h2 className="text-4xl font-bold mb-4 text-center">
                  {imageDescriptions[selectedImage].title}
                </h2>
                <p className="text-gray-600 text-justify">
                  {imageDescriptions[selectedImage].description}
                </p>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="mt-auto px-4 py-2 bg-lime-400 hover:text-white text-[#3f6212] rounded hover:bg-lime-700"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
