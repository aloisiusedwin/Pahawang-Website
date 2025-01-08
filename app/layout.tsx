import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./../components/Gallery/gallery.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pulau Pahawang",
  description: "Destinasi wisata tropis di Lampung dengan pantai indah dan spot snorkeling memukau.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="overflow-x-hidden">
      <body>
        <div className="flexCenter flex-col">
          <Navbar />
          <main className="relative overflow-x-hidden w-[100vw] lg:w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
