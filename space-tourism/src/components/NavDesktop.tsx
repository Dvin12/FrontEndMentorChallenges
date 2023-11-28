import { Link, useLocation } from "react-router-dom";

export default function NavDesktop() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed hidden w-full items-center justify-between bg-transparent md:flex xl:py-10 ">
      <div className="px-12 xl:px-20">
        <img src="./assets/images/shared/logo.svg" alt="logo" />
      </div>

      <div className="absolute left-52 z-30 hidden h-[1px] w-[38%] items-center justify-center bg-white/30 xl:flex"></div>

      <ul className=" flex items-center justify-center gap-8  bg-white/5 px-8 py-12 font-barlowCondensed text-xl tracking-[0.18em] text-white backdrop-blur xl:w-[56%] xl:gap-14 xl:text-lg">
        <Link to="/">
          <li className="relative flex flex-col items-center justify-between ">
            <div className="flex gap-2">
              <span className="hidden xl:inline-block ">00</span>
              <span>HOME</span>
            </div>

            {pathname === "/" && (
              <span className=" absolute -bottom-12 h-[5px] w-full bg-white"></span>
            )}
          </li>
        </Link>

        <Link to="/destination">
          <li className="relative flex flex-col items-center justify-between ">
            <div className="flex gap-2">
              <span className="hidden xl:inline-block ">01</span>
              <span>DESTINATION</span>
            </div>
            {pathname === "/destination" && (
              <span className=" absolute -bottom-12 h-[4px] w-full bg-white"></span>
            )}
          </li>
        </Link>

        <Link to="/crew">
          <li className="relative flex flex-col items-center justify-between ">
            <div className="flex gap-2">
              <span className="hidden xl:inline-block ">02</span>
              <span>CREW</span>
            </div>
            {pathname === "/crew" && (
              <span className=" absolute -bottom-12 h-[4px] w-full bg-white"></span>
            )}
          </li>
        </Link>

        <Link to="/technology">
          <li className="relative flex flex-col items-center justify-between ">
            <div className="flex gap-2">
              <span className="hidden xl:inline-block ">03</span>
              <span>TECHNOLOGY</span>
            </div>
            {pathname === "/technology" && (
              <span className=" absolute -bottom-12 h-[4px] w-full bg-white"></span>
            )}
          </li>
        </Link>
      </ul>
    </nav>
  );
}
