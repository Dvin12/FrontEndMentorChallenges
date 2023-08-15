export default function DarkMode({ setTheme, theme }) {
  function handleClick() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="flex justify-between mt-4 mb-8">
      <span className="font-bold text-lightTextSmall dark:text-darkSmallText">
        Dark Mode
      </span>
      <button onClick={handleClick}>SWITCH</button>
    </div>
  );
}
