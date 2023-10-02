export default function Button({ children, onClick }) {
  return (
    <button
      className="px-3 py-2 font-bold duration-200 rounded-md bg-Cyan text-dCyan hover:bg-dCyan hover:text-lCyan"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
