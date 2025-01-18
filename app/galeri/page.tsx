"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Video from "@/components/Header/HeaderVideo";
import { HeaderHeroText } from "@/components/Header/HeaderHero";
import { Montserrat } from "next/font/google";
import SmoothScroll from "@/components/SmoothScrolling";
import ScrollToTopButton from "@/components/ScrollToTop";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useTheme } from "next-themes";
import img1 from "../../public/images/galeri/day1.jpg";
import img2 from "../../public/images/galeri/day2.jpg";
import img3 from "../../public/images/galeri/day3.png";
import img4 from "../../public/images/galeri/day4.png";
import img5 from "../../public/images/galeri/day5.png";
import img6 from "../../public/images/galeri/day6.jpg";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface Event {
  id: number;
  title: string;
  date: string;
  imageUrl: string | StaticImageData;
  description: string;
  location: string;
  driveLink: string;
}

const EventPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const { theme } = useTheme();

  const [events] = useState<Event[]>([
    {
      id: 1,
      title: "DAY 1",
      date: "3 Januari 2025",
      imageUrl: img1,
      description:
        "Foto bersama dengan warga dusun Jeralangan setelah acara pembukaan KKN Tematik ITERA di Pahawang. Acara dihadiri oleh kepala desa dan tokoh masyarakat setempat.",
      location: "Dusun Jeralangan, Pahawang",
      driveLink:
        "https://drive.google.com/drive/folders/1-8ahp20UoqQrBApdnSsNQsdoiIoa0_x2?usp=drive_link",
    },
    {
      id: 2,
      title: "DAY 2",
      date: "4 Januari 2025",
      imageUrl: img2,
      description: "Rekap Dokumentasi Hari ke-2",
      location: "Dusun Jeralangan",
      driveLink:
        "https://drive.google.com/drive/folders/1-8sVULmCaC0vDwk3JzZmYIhATLcQjxPx?usp=drive_link",
    },
    {
      id: 3,
      title: "DAY 3",
      date: "5 Januari 2025",
      imageUrl: img3,
      description: "Rekap Dokumentasi Hari ke-3",
      location: "Dusun Jeralangan",
      driveLink:
        "https://drive.google.com/drive/folders/1-Aiih0H40-3aBp85ruakzsa8BafdxeKK?usp=drive_link",
    },
    {
      id: 4,
      title: "DAY 4",
      date: "6 Januari 2025",
      imageUrl: img4,
      description: "Rekap Dokumentasi Hari ke-4",
      location: "Dusun Kalangan",
      driveLink:
        "https://drive.google.com/drive/folders/1-DOB3P2JjqAd7p6iJsmJ5fOjnZxiOwAb?usp=drive_link",
    },
    {
      id: 5,
      title: "DAY 5",
      date: "7 Januari 2025",
      imageUrl: img5,
      description: "Rekap Dokumentasi Hari ke-5",
      location: "Dusun Jeralangan",
      driveLink:
        "https://drive.google.com/drive/folders/1-_hmgZkUhPf2RQBaI1vWzNHVb6JEcBmn?usp=drive_link",
    },
    {
      id: 6,
      title: "DAY 6",
      date: "8 Januari 2025",
      imageUrl: img6,
      description: "Rekap Dokumentasi Hari ke-6",
      location: "Dusun Kalangan",
      driveLink:
        "https://drive.google.com/drive/folders/1-gA-U9NTNAfBiYfcDlru3iQpFmd0cxgb?usp=drive_link",
    },
    {
      id: 7,
      title: "DAY 7",
      date: "9 Januari 2025",
      imageUrl: img1,
      description:
        "Foto bersama dengan warga dusun Jeralangan setelah acara pembukaan KKN Tematik ITERA di Pahawang. Acara dihadiri oleh kepala desa dan tokoh masyarakat setempat.",
      location: "Dusun Jeralangan, Pahawang",
      driveLink:
        "https://drive.google.com/drive/folders/1-8ahp20UoqQrBApdnSsNQsdoiIoa0_x2?usp=drive_link",
    },
    {
      id: 8,
      title: "DAY 8",
      date: "10 Januari 2025",
      imageUrl: img2,
      description: "Rekap Dokumentasi Hari ke-2",
      location: "Dusun Jeralangan",
      driveLink:
        "https://drive.google.com/drive/folders/1-8sVULmCaC0vDwk3JzZmYIhATLcQjxPx?usp=drive_link",
    },
    {
      id: 9,
      title: "DAY 9",
      date: "11 Januari 2025",
      imageUrl: img3,
      description: "Rekap Dokumentasi Hari ke-3",
      location: "Dusun Jeralangan",
      driveLink:
        "https://drive.google.com/drive/folders/1-Aiih0H40-3aBp85ruakzsa8BafdxeKK?usp=drive_link",
    },
    {
      id: 10,
      title: "DAY 10",
      date: "12 Januari 2025",
      imageUrl: img4,
      description: "Rekap Dokumentasi Hari ke-4",
      location: "Dusun Kalangan",
      driveLink:
        "https://drive.google.com/drive/folders/1-DOB3P2JjqAd7p6iJsmJ5fOjnZxiOwAb?usp=drive_link",
    },
    {
      id: 11,
      title: "DAY 11",
      date: "13 Januari 2025",
      imageUrl: img5,
      description: "Rekap Dokumentasi Hari ke-5",
      location: "Dusun Jeralangan",
      driveLink:
        "https://drive.google.com/drive/folders/1-_hmgZkUhPf2RQBaI1vWzNHVb6JEcBmn?usp=drive_link",
    },
    {
      id: 12,
      title: "DAY 12",
      date: "14 Januari 2025",
      imageUrl: img6,
      description: "Rekap Dokumentasi Hari ke-6",
      location: "Dusun Kalangan",
      driveLink:
        "https://drive.google.com/drive/folders/1-gA-U9NTNAfBiYfcDlru3iQpFmd0cxgb?usp=drive_link",
    },
    {
      id: 13,
      title: "DAY 13",
      date: "15 Januari 2025",
      imageUrl: img1,
      description:
        "Foto bersama dengan warga dusun Jeralangan setelah acara pembukaan KKN Tematik ITERA di Pahawang. Acara dihadiri oleh kepala desa dan tokoh masyarakat setempat.",
      location: "Dusun Jeralangan, Pahawang",
      driveLink:
        "https://drive.google.com/drive/folders/1-8ahp20UoqQrBApdnSsNQsdoiIoa0_x2?usp=drive_link",
    },
    {
      id: 14,
      title: "DAY 14",
      date: "16 Januari 2025",
      imageUrl: img2,
      description: "Rekap Dokumentasi Hari ke-2",
      location: "Dusun Jeralangan",
      driveLink:
        "https://drive.google.com/drive/folders/1-8sVULmCaC0vDwk3JzZmYIhATLcQjxPx?usp=drive_link",
    },
    {
      id: 15,
      title: "DAY 15",
      date: "17 Januari 2025",
      imageUrl: img3,
      description: "Rekap Dokumentasi Hari ke-3",
      location: "Dusun Jeralangan",
      driveLink:
        "https://drive.google.com/drive/folders/1-Aiih0H40-3aBp85ruakzsa8BafdxeKK?usp=drive_link",
    },
    {
      id: 16,
      title: "DAY 16",
      date: "18 Januari 2025",
      imageUrl: img4,
      description: "Rekap Dokumentasi Hari ke-4",
      location: "Dusun Kalangan",
      driveLink:
        "https://drive.google.com/drive/folders/1-DOB3P2JjqAd7p6iJsmJ5fOjnZxiOwAb?usp=drive_link",
    },
    {
      id: 17,
      title: "DAY 17",
      date: "19 Januari 2025",
      imageUrl: img5,
      description: "Rekap Dokumentasi Hari ke-5",
      location: "Dusun Jeralangan",
      driveLink:
        "https://drive.google.com/drive/folders/1-_hmgZkUhPf2RQBaI1vWzNHVb6JEcBmn?usp=drive_link",
    },
    {
      id: 18,
      title: "DAY 18",
      date: "20 Januari 2025",
      imageUrl: img6,
      description: "Rekap Dokumentasi Hari ke-6",
      location: "Dusun Kalangan",
      driveLink:
        "https://drive.google.com/drive/folders/1-gA-U9NTNAfBiYfcDlru3iQpFmd0cxgb?usp=drive_link",
    },
  ]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedEvent(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className={`${montserrat.className} ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
            {/* Modal Popup */}
            <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            style={{
              backgroundColor:
                theme === "dark"
                  ? "rgba(0, 0, 0, 0.7)"
                  : "rgba(0, 0, 0, 0.5)",
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`rounded-xl shadow-lg overflow-hidden max-w-lg md:max-w-xl lg:max-w-2xl w-full max-h-[calc(100vh-2rem)] overflow-y-auto ${
                theme === "dark"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-black"
              }`}
            >
              <div className="relative w-full pt-[100%]">
                {/* Aspect ratio 1:1 */}
                <motion.img
                  src={
                    typeof selectedEvent.imageUrl === "string"
                      ? selectedEvent.imageUrl
                      : selectedEvent.imageUrl.src
                  }
                  alt={selectedEvent.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
                />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                    theme === "dark"
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-black/50 hover:bg-black/70 text-white"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-4">
                <h2
                  className={`text-xl md:text-2xl font-bold mb-4 text-center md:text-left ${
                    theme === "dark" ? "text-green-300" : "text-gray-800"
                  }`}
                >
                  {selectedEvent.title}
                </h2>
                <div className="space-y-4">
                  <div
                    className={`flex items-center gap-2 text-sm md:text-base ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{selectedEvent.date}</span>
                  </div>

                  <div
                    className={`flex items-center gap-2 text-sm md:text-base ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{selectedEvent.location}</span>
                  </div>

                  <p
                    className={`mt-4 text-sm md:text-base ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {selectedEvent.description}
                  </p>

                  <button
                    onClick={() =>
                      window.open(selectedEvent?.driveLink, "_blank")
                    }
                    className={`flex items-center justify-center gap-2 w-full font-medium py-2 px-4 rounded-lg transition-colors mt-4 ${
                      theme === "dark"
                        ? "bg-green-700 text-green-200 hover:bg-green-800"
                        : "bg-[#ecfccb] text-[#3f6212] hover:bg-[#3f6212] hover:text-white"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fill="#3F6212"
                        d="M24 2L1.29 39h21.13L45 8.64 24 2z"
                      />
                      <path
                        fill="#ECB22E"
                        d="M45 39L23.95 25.59l-9.21 13.41L20.92 39H45z"
                      />
                      <path
                        fill="#4285F4"
                        d="M23.95 25.59L1.29 39h19.63l-9.21-13.41L23.95 25.59z"
                      />
                    </svg>
                    Link Dokumentasi
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-full">
        <Video
          loop
          autoPlay
          muted
          src={"./videos/galeri.mp4"}
          className="object-cover w-full h-[40vh] md:h-[60vh] lg:h-[85vh]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 text-center overflow-hidden">
          <HeaderHeroText
            title="Galeri KKN Tematik ITERA"
            description="Temukan berbagai dokumentasi acara dan kegiatan menarik yang kami selenggarakan selama mengabdi di Pahawang"
            containerStyle="max-w-[90%] mx-auto text-center lg:text-left overflow-hidden"
            titleStyle="text-white font-bold text-[clamp(1.2rem, 4vw, 2rem)] leading-tight"
            descriptionStyle="text-gray-200 text-[clamp(0.8rem, 3vw, 1rem)] leading-relaxed"
          />
        </div>
      </div>

      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left ${
              theme === "dark" ? "text-green-200" : "text-green-900"
            }`}
          >
            Galeri KKN Tematik ITERA - Pahawang
          </h2>
          <p
            className={`leading-relaxed mb-6 text-justify ${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Selamat datang di galeri dokumentasi KKN Tematik ITERA - Pahawang!
            Di sini Anda dapat melihat rangkaian momen berharga dan aktivitas
            bermakna yang telah dilakukan oleh kelompok kami selama menjalankan
            program pengabdian masyarakat di berbagai dusun yang ada di
            Pahawang.
          </p>
          <hr
            className={`border-t-2 ${
              theme === "dark" ? "border-gray-600" : "border-gray-300"
            } mb-4 lg:mb-1 mt-5`}
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <section className="py-12">
          <h1
            className={`text-3xl font-bold text-center mb-8 ${
              theme === "dark" ? "text-green-200" : "text-green-900"
            }`}
          >
            EVENT DAN KEGIATAN
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedEvent(event)}
                className="cursor-pointer group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full pt-[100%]">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    theme === "dark"
                      ? "from-gray-900/80 via-gray-900/50"
                      : "from-black/80 via-black/50"
                  } to-transparent group-hover:from-black/90 transition-all duration-300`}
                >
                  <div className="absolute bottom-0 p-4 w-full">
                    <h2 className="text-white font-semibold text-xl mb-2 group-hover:text-green-300 transition-colors">
                      {event.title}
                    </h2>
                    <div className="flex items-center text-sm text-gray-200">
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m4 4V3m-5 8h10m2 5H4m16 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0M8 17a2 2 0 11-4 0m4 0a2 2 0 10-4 0"
                          />
                        </svg>
                        {event.date}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventPage;
