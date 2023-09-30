export default function Button({ children }) {
  return (
    <button className=" bg-gradient-to-r from-lGreen to-bCyan px-8 py-3 rounded-full text-white font-semibold tracking-wide border-gBlue border-[3px] border-opacity-20">
      {children}
    </button>
  );
}
