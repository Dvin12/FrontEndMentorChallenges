export default function DarkMode({ setTheme, theme }) {
  const darkToggle =
    "dark:bg-gradient-to-r from-[hsl(210,78%,56%)] to-[hsl(146,68%,55%)]";

  function handleClick() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="flex items-center justify-between gap-4 mt-4 mb-8">
      <span className="font-bold text-lightTextSmall dark:text-darkSmallText">
        Dark Mode
      </span>
      <button onClick={handleClick}>
        <div
          className={`${
            theme === "light" ? "bg-toggle" : darkToggle
          } rounded-2xl w-[70px] h-[35px] relative`}
        >
          <div
            className={`w-[28px] h-[28px] rounded-full bg-lightBg absolute top-1 ${
              theme === "light"
                ? "left-[36px]"
                : `left-[5px] bg-darkCardBgHover `
            } duration-300`}
          ></div>
        </div>
      </button>
    </div>
  );
}
