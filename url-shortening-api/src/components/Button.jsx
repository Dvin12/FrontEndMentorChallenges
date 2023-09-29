export default function Button({
  children,
  width = "auto",
  rounded = "full",
  onClick,
  isLoading,
  text = "text-sm",
  paddingY,
  paddingX = "px-6",
}) {
  return (
    <button
      className={`${
        width === "full" ? "px-0 w-full" : `px-10 xl:${paddingX}  w-auto }`
      }  py-3 text-lg font-bold tracking-wider text-white ${
        rounded === "md" ? "rounded-md" : "rounded-full"
      } xl:${text} ${paddingY}   bg-Cyan hover:bg-opacity-50 duration-200 disabled:bg-opacity-40 disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={isLoading}
    >
      {children}
    </button>
  );
}
