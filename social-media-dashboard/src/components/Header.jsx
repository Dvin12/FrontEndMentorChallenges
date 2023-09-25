import DarkMode from "./DarkMode";
import TotalFollowers from "./TotalFollowers";

export default function Header({ theme, setTheme }) {
  return (
    <header className="border-black xl:flex xl:items-center xl:justify-between xl:mb-8 ">
      <div>
        <h1 className="text-2xl font-extrabold text-lightTextBig dark:text-darkBigText ">
          Social Media Dahsboard
        </h1>
        <TotalFollowers />
      </div>
      <DarkMode theme={theme} setTheme={setTheme} />
    </header>
  );
}
