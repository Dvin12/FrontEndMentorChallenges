import React from "react";

export default function Button({ children, color = "grey" }) {
  const blue = "";

  return (
    <button
      className={`px-4 py-3 xl:py-4 xl:px-6 rounded-md shadow-lg text-sm xl:text-base   font-medium ${
        color === "grey" &&
        "bg-gBlue bg-opacity-10 text-vDarkBlue border-[2px] border-gBlue border-opacity-0 hover:border-opacity-100 hover:border-vDarkBlue duration-200 hover:bg-[#fff]"
      } ${
        color === "red" &&
        " xl:px-10 opacity-90 xl:py-3 shadow-lg hover:bg-[#fff] border-sRed border-[2px] tracking-wider hover:text-sRed duration-200 rounded-md bg-sRed xl:w-auto w-[80%] text-[#fff]"
      } ${
        color === "blue" &&
        "bg-sBlue text-[#fff] text-opacity-95 border-sBlue border-[2px] hover:bg-[#fff] duration-200 hover:text-sBlue"
      }
      `}
    >
      {children}
    </button>
  );
}
