export default function Button({ children, onClick, hover = true }) {
  return (
    <button
      className={`px-3 py-2 text-sm font-bold duration-200 rounded-md bg-Cyan text-dCyan ${
        hover ? "hover:bg-dCyan hover:text-lCyan" : ""
      } `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
