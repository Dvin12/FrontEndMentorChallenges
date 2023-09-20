export default function Button({ children, colour = "red" }) {
  return (
    <button
      className={`py-3 text-sm font-semibold rounded-full shadow-lg  px-7 ${
        colour === "gray"
          ? "bg-veryLightGray text-brightRed"
          : "bg-brightRed text-veryLightGray"
      } `}
    >
      {children}
    </button>
  );
}
