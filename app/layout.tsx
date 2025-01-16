import { ThemeProvider } from "@/components/theme-provider"; // Import the ThemeProvider component
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../components/Konservasi/gallery.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pulau Pahawang",
  description:
    "Destinasi wisata tropis di Lampung dengan pantai indah dan spot snorkeling memukau.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="overflow-x-hidden">
      <body className="bg-gray-100 text-black dark:bg-gray-800 dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flexCenter flex-col">
            <Navbar />
            <main className="relative overflow-x-hidden w-[100vw] lg:w-full">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
