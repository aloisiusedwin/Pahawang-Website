"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Video from "@/components/Header/HeaderVideo";
import { HeaderHeroText } from "@/components/Header/HeaderHero";
import { Montserrat } from "next/font/google";
import SmoothScroll from "@/components/SmoothScrolling";
import ScrollToTopButton from "@/components/ScrollToTop";

// Impor font Montserrat
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"],
  });
  
  // Smooth scrolling on page load
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

interface Event {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
  location: string;
  time: string;
  driveLink: string;
}

const EventPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [events] = useState<Event[]>([
    {
      id: 1,
      title: "NATAL KMK 2024",
      date: "18 Maret 2024",
      imageUrl: "/path-to-image.jpg",
      description:
        "Perayaan Natal KMK 2024 akan dilaksanakan dengan penuh sukacita. Acara ini akan diisi dengan berbagai kegiatan menarik termasuk ibadah bersama, pertunjukan musik, dan sharing session.",
      location: "Aula Utama Kampus",
      time: "19:00 - 22:00 WIB",
      driveLink: "https://drive.google.com/folder1", // Link Google Drive
    },
    {
      id: 2,
      title: "Seminar Kewirausahaan",
      date: "20 Maret 2024",
      imageUrl: "/path-to-image.jpg",
      description:
        "Seminar kewirausahaan akan membahas berbagai topik menarik seputar dunia bisnis dan kewirausahaan. Acara ini akan diisi oleh narasumber-narasumber terkemuka di bidangnya.",
      location: "Gedung Serba Guna Kampus",
      time: "08:00 - 15:00 WIB",
      driveLink: "https://drive.google.com/folder2", // Link Google Drive
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
    <div className={montserrat.className}>
      {/* Video Section */}
      <div className="relative h-full">
        <Video
          loop
          autoPlay
          muted
          src={"./videos/program kerja.mp4"}
          className="object-cover w-full h-[40vh] md:h-[60vh] lg:h-[85vh]" // Tinggi video responsif
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
      {/* Content Section */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-green-900 mb-4 text-center lg:text-left">
                Galeri KKN Tematik ITERA - Pahawang
            </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Selamat datang di galeri dokumentasi KKN Tematik ITERA - Pahawang! Di sini Anda dapat melihat 
            rangkaian momen berharga dan aktivitas bermakna yang telah dilakukan oleh kelompok 
            kami selama menjalankan program pengabdian masyarakat di berbagai dusun yang ada di Pahawang.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Koleksi foto ini merangkum berbagai program kerja inovatif, interaksi dengan 
            masyarakat, dan pencapaian yang telah diraih. Dari kegiatan pemberdayaan ekonomi 
            hingga program pendidikan, setiap gambar menceritakan kisah dedikasi kelompok kami dalam membangun desa yang mandiri dan berkelanjutan.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Mari jelajahi perjalanan inspiratif kelompok kami melalui potret-potret yang 
            menggambarkan semangat pengabdian, kerja sama tim, dan momen-momen tak terlupakan 
            bersama masyarakat desa. Setiap foto adalah bukti nyata kontribusi positif yang 
            telah diberikan untuk kemajuan masyarakat.
          </p>
          <hr className="border-t-2 border-gray-300 mb-4 lg:mb-1 mt-5" />
        </div>
      </section>

      {/* Event List Section */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h1 className="text-3xl font-bold mb-12 text-center">
          EVENT DAN KEGIATAN
        </h1>

        <div className="grid grid-cols-4 gap-6">
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div
                className="aspect-[16/9] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${event.imageUrl})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/90 transition-all duration-300">
                  <div className="absolute bottom-0 p-4 w-full">
                    <h2 className="text-white font-semibold text-xl mb-2 group-hover:text-blue-300 transition-colors">
                      {event.title}
                    </h2>
                    <div className="flex items-center text-sm text-gray-200">
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
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
                        {event.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl w-full"
              >
                <div className="relative h-64">
                  <motion.img
                    src={selectedEvent.imageUrl}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors"
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

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    {selectedEvent.title}
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-600">
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
                      <span>
                        {selectedEvent.date} • {selectedEvent.time}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
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

                    <p className="text-gray-600 mt-4">
                      {selectedEvent.description}
                    </p>

                    <button
                        onClick={() => window.open(selectedEvent?.driveLink, "_blank")}
                        className="flex items-center justify-center gap-2 w-full bg-[#ecfccb] text-[#3f6212] hover:bg-[#ecfccb] hover:text-white font-medium py-2 px-4 rounded-lg transition-colors mt-4"
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path fill="#3F6212" d="M24 2L1.29 39h21.13L45 8.64 24 2z" />
                      <path fill="#ECB22E" d="M45 39L23.95 25.59l-9.21 13.41L20.92 39H45z" />
                      <path fill="#4285F4" d="M23.95 25.59L1.29 39h19.63l-9.21-13.41L23.95 25.59z" />
                    </svg>
                    Link Dokumentasi
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <ScrollToTopButton />
        <SmoothScroll />
      </div>
    </div>
  );
};

export default EventPage;