export default function Button({
  children,
  backgroundColour,
  text,
  border,
  hover,
  px,
  py,
}) {
  return (
    <button
      className={`${backgroundColour} px-${px} py-${py} rounded-2xl ${text} ${border} ${hover} duration-300 `}
    >
      {children}
    </button>
  );
}
