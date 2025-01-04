import { 
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img01 from "@/public/images/swiper/swiper-image01.jpg";
import img02 from "@/public/images/swiper/swiper-image02.jpg";
import img03 from "@/public/images/swiper/swiper-image03.jpg";
import img04 from "@/public/images/swiper/swiper-image04.jpg";
import img05 from "@/public/images/swiper/swiper-image05.jpg";
import img06 from "@/public/images/swiper/swiper-image06.jpg";
import img07 from "@/public/images/swiper/swiper-image07.jpg";
import img08 from "@/public/images/swiper/swiper-image08.jpg";

const swiperVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const slideVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={swiperVariants}
    >
      <Swiper
        className="xl:!pl-16"
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
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
      >
        {[img01, img02, img03, img04, img05, img06, img07, img08].map((img, index) => (
          <SwiperSlide key={index}>
            <motion.img
              src={img.src}
              alt={`img-${index}`}
              className="select-none rounded-xl cursor-pointer transform transition-transform hover:scale-105"
              variants={slideVariants}
              onClick={() => setSelectedImage(img.src)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="max-w-[100%] max-h-[100%] rounded-xl shadow-lg transition-transform transform hover:scale-110"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
