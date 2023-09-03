export default function Button({ children, color = "bg-cyan" }) {
  return (
    <button
      className={`${color} py-4 rounded-full shadow-lg relative  text-[#fff] tracking-widest `}
    >
      <span
        className={` bg-dBlue w-full h-full absolute -bottom-1  rounded-full ${
          color === "bg-cyan" ? "opacity-50" : "opacity-75"
        }  left-0 -z-10`}
      ></span>
      {children}
    </button>
  );
}
