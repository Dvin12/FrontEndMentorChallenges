export default function Button({ children, colour = "red" }) {
  return (
    <button
      className={`py-3 xl:text-base xl:px-8 xl:py-4 text-sm font-semibold rounded-full shadow-lg  px-7 ${
        colour === "gray"
          ? "bg-veryLightGray text-brightRed hover:bg-opacity-70 duration-200"
          : "bg-brightRed text-veryLightGray hover:bg-opacity-70 duration-200"
      } `}
    >
      {children}
    </button>
  );
}
