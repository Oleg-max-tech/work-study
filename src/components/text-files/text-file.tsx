import React from "react";
import { CgArrowRight } from "react-icons/cg";

const TextFile = () => {
  return (
    <div className="pl-10 pt-5 pb-20 lg:px-10 font-roboto">
      {/* Контейнер для двох div в рядок */}
      <div className="flex flex-col lg:flex-row gap-10 mb-10 mt-10">
        {/* Перший заголовок */}
        <div className="flex items-center justify-center lg:justify-start">
          <h1 className="text-3xl sm:text-4xl lg:text-3xl text-center lg:text-left relative inline-block">
            Більше робіт
            <CgArrowRight className="ml-2 inline" />
          </h1>

          {/* Круг на рівні заголовка */}
          <span className="absolute top-15 lg:left-4 w-16 h-16 bg-accent sm:w-20 sm:h-20 border-4 border-yellow-400 rounded-full -z-10 transform -translate-x-1/1"></span>
        </div>
        {/* Другий заголовок з квадратом */}
        <div className="relative z-10 text-3xl sm:text-4xl  lg:ml-30 lg:text-3xl text-center lg:text-left mb-10 mt-10 inline-block ml-16">
          Більше робіт
          <CgArrowRight className="ml-2 inline" />
          <span className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-80 h-[70px] bg-accent opacity-80 z-[-1] rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default TextFile;
