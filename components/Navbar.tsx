"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "./Button"; // Import Button component
import Image from "next/image";
import logo from "./../public/images/logo/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setOpen(!open);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".menu-container") && open) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [open]);

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
            <div className="flex justify-center lg:justify-start mb-4 space-x-4">
              <Image src={logo} alt="logo" width={120} height={80} priority />
            </div>
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

        <div className="lg:hidden menu-container">
          <Button
            type="button"
            title="Menu"
            icon="./bx-menu-alt-right.svg"
            variant="btn_light_lime"
            width="w-auto"
            onClick={toggleMenu}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
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
                    onClick={() => setOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="regular-16 text-gray-800 flexCenter cursor-pointer transition-all hover:font-bold"
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
