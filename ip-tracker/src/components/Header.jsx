import SearchIP from "./SearchIP";

export default function Header({ setIp }) {
  return (
    <header className="relative z-30 w-full">
      <img
        src="./images/pattern-bg-mobile.png"
        alt="background"
        className="w-full"
      />
      <h1 className="absolute top-6 text-[#fff] w-full flex items-center justify-center text-xl font-semibold tracking-wide">
        IP Address Tracker
      </h1>
      <SearchIP setIp={setIp} />
    </header>
  );
}
