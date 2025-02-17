import React from "react";

interface ButtonProps {
  appearance: "primary" | "secondary";
}

const But1: React.FC<ButtonProps> = ({ appearance }) => {
  const buttonStyle = appearance === "primary" ? "bg-yellow-500" : "bg-white";

  return (
    <div className="m-10 w-[177px] h-[196px] flex flex-col space-y-[10px] rounded-xl  font-roboto text-xl ">
      <button
        className={`${buttonStyle} w-full h-[60px] rounded-[40px] cursor-pointer`}
      >
        Надіслати
      </button>
      <button
        className={`${buttonStyle} w-full h-[60px] rounded-[40px] cursor-pointer bg-accent`}
      >
        Надіслати
      </button>
      <button
        className={`${
          appearance === "secondary" ? "bg-yellow-500" : "bg-white"
        } w-full h-[60px] rounded-[40px] cursor-pointer border-[2px] border-accent bg-accent `}
      >
        Надіслати
      </button>
    </div>
  );
};

export default But1;
