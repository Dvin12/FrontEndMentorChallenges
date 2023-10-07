import SearchIP from "./SearchIP";

export default function Header({ setIp }) {
  return (
    <header className="relative z-30 w-full">
      <img
        src="./images/pattern-bg-mobile.png"
        alt="background"
        className="block w-full sm:hidden"
      />
      <img
        src="./images/pattern-bg-desktop.png"
        alt="background"
        className="hidden sm:block sm:h-[15rem] lg:h-full w-full "
      />
      <h1 className="absolute top-6 xl:top-8 2xl:top-14  text-[#fff] w-full flex items-center justify-center text-xl xl:text-3xl font-semibold tracking-wide">
        IP Address Tracker
      </h1>
      <SearchIP setIp={setIp} />
    </header>
  );
}
