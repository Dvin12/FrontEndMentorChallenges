import Mobile from "./Mobile";

export default function Nav() {
  return (
    <nav className="absolute top-0 w-full flex items-center justify-between px-6 py-10">
      <img
        src="./assets/images/logo.svg"
        alt="loop studios"
        className="w-[45%]"
      />
      <Mobile />
    </nav>
  );
}
