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
      className={`${backgroundColour} ${px} ${py} rounded-2xl ${text} ${border} ${hover} duration-300 `}
    >
      {children}
    </button>
  );
}
