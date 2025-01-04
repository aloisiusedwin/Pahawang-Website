'use client'

import Image from "next/image";
import { motion } from "framer-motion";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_light_lime";
  width: string;
};

const Button = ({ type, title, icon, variant, width }: ButtonProps) => {
  return (
    <motion.button
      className={`flex items-center justify-center rounded-md font-medium 
      ${variant} ${width} px-6 py-3 transition-all`}
      type={type}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      {icon && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Image
            src={icon}
            alt={title}
            width={22}
            height={22}
            className="mr-3"
          />
        </motion.div>
      )}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.span>
    </motion.button>
  );
};

export default Button;
