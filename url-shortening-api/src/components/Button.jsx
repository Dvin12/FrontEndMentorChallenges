export default function Button({
  children,
  width = "auto",
  rounded = "full",
  onClick,
  isLoading,
}) {
  return (
    <button
      className={`${
        width === "full" ? "px-0 w-full" : "px-10 w-auto"
      }  py-3 text-lg font-bold tracking-wider text-white ${
        rounded === "md" ? "rounded-md" : "rounded-full"
      }  bg-Gray`}
      onClick={onClick}
      disabled={isLoading}
    >
      {children}
    </button>
  );
}
