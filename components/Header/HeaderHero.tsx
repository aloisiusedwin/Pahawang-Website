import React from "react";

interface HeroTextProps {
  title: string; // Tipe string
  description: string; // Tipe string
  containerStyle?: string; // Opsional
  titleStyle?: string; // Opsional
  descriptionStyle?: string; // Opsional
}

export const HeaderHeroText: React.FC<HeroTextProps> = ({
  title,
  description,
  containerStyle = "",
  titleStyle = "",
  descriptionStyle = "",
}) => {
  return (
    <div
      className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-10/12 md:w-4/5 lg:w-3/5 xl:w-2/5 max-container z-1 p-6 rounded-3xl ${containerStyle}`}
    >
      <div className="text-center w-full px-4 sm:px-6 md:px-8">
        <h1
          className={`font-bold text-white mb-4 [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${titleStyle}`}
        >
          {title}
        </h1>
        <p
          className={`text-white mb-4 [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-normal ${descriptionStyle}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
