import React from "react";

export default function Button({ children }) {
  return (
    <button
      className={`px-4 py-3 xl:py-4 xl:px-6 rounded-md shadow-lg text-sm xl:text-base  font-medium ${
        children === "Get it on Chrome"
          ? "bg-sBlue text-[#fff] text-opacity-95"
          : " bg-gBlue bg-opacity-10 text-vDarkBlue"
      } `}
    >
      {children}
    </button>
  );
}
