"use client";

import React from "react";
import logo from "./../public/images/logo/logo.png";
import { useTheme } from "next-themes"; // Import useTheme for theme detection

const Footer = () => {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  return (
    <footer
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-black text-white"
      } padding-container py-2 lg:py-6 w-[100vw] flex justify-center lg:justify-between`}
    >
      <div className="max-container flex items-center lg:items-start w-full lg:flex-row flex-col justify-center lg:justify-between">
        <div className="flex-col mb-2 lg:mb-4 text-center">
          <a href="/" className="flex justify-center">
            <img
              className="lg:w-[100px] w-[50px] h-auto mb-2 lg:mb-4"
              src={logo.src}
              alt="logo"
              width="100"
              height="100"
            />
          </a>
          <p className="text-xs lg:text-sm">© 2025 Pulau Pahawang</p>
        </div>
        <div className="flex-col mb-2 lg:mb-4">
          <h3 className="uppercase text-sm lg:text-base mb-2">Navigation</h3>
          <ul>
            <li className="text-center">
              <a
                className={`text-xs lg:text-sm hover:text-[#00df9a] ${
                  theme === "dark" ? "text-white" : "text-white"
                }`}
                href="/profil"
              >
                Profil
              </a>
            </li>
            <li className="text-center">
              <a
                className={`text-xs lg:text-sm hover:text-[#00df9a] ${
                  theme === "dark" ? "text-white" : "text-white"
                }`}
                href="/produk"
              >
                Produk
              </a>
            </li>
            <li className="text-center">
              <a
                className={`text-xs lg:text-sm hover:text-[#00df9a] ${
                  theme === "dark" ? "text-white" : "text-white"
                }`}
                href="/penginapan"
              >
                Penginapan
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-col text-center">
          <h3 className="uppercase text-sm lg:text-base mb-2">Social Media</h3>
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/kkn.tematik_pahawang/"
              target="_blank"
              className="mx-1"
            >
              <i
                className={`bx bxl-instagram text-lg hover:text-[#00df9a] ${
                  theme === "dark" ? "text-white" : "text-white"
                }`}
              ></i>
            </a>
            <a
              href="https://www.tiktok.com/@kkntematikpahawangitera"
              target="_blank"
              className="mx-1"
            >
              <i
                className={`bx bxl-tiktok text-lg hover:text-[#00df9a] ${
                  theme === "dark" ? "text-white" : "text-white"
                }`}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
