"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import logo from "./../public/images/logo/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  // Animation variants
  const navVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      height: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.nav
      className="absolute top-0 left-0 z-30 w-full"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="w-full flexBetween max-container padding-container z-30 py-2 lg:py-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <img
              className="lg:w-[120px] h-auto w-[60px]"
              src={logo.src}
              alt="logo"
              width="150"
              height="143"
            />
          </Link>
        </motion.div>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link, index) => (
            <motion.li
              key={link.key}
              custom={index}
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={link.href}
                className="regular-16 text-white flexCenter [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)] cursor-pointer transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="lg:hidden" onClick={toggleMenu}>
          <Image
            src="./bx-menu-alt-right.svg"
            alt="menu"
            width="32"
            height="32"
            className="inline-flex cursor-pointer invert lg:hidden"
          />
          <AnimatePresence>
            {open && (
              <motion.ul
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-20 left-0 flex flex-col gap-5 p-3 w-full bg-white"
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.key}
                    variants={menuItemVariants}
                    custom={index}
                  >
                    <Link
                      href={link.href}
                      className="regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
