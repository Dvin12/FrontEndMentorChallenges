import { Link, useLocation } from "react-router-dom";

export default function NavDesktop() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed hidden w-full items-center justify-between bg-transparent md:flex xl:py-10 ">
      <div className="px-10 xl:px-20">
        <img
          src="./assets/images/shared/logo.svg"
          alt="logo"
          className="w-[48px]"
        />
      </div>

      <div className="absolute left-52 z-30 hidden h-[1px] w-[41%] items-center justify-center bg-white/30 xl:flex"></div>

      <ul className=" flex w-[60%] items-center justify-center gap-10   bg-white bg-opacity-[4%]  py-12 font-barlowCondensed text-sm tracking-[0.24em] text-white backdrop-blur xl:w-[50%] xl:gap-20 ">
        <Link to="/">
          <li className="relative flex flex-col items-center justify-between ">
            <div className="flex gap-2">
              <span className=" hidden font-bold xl:inline-block ">00</span>
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
              <span className="hidden font-bold xl:inline-block ">01</span>
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
              <span className="hidden font-bold xl:inline-block ">02</span>
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
              <span className="hidden font-bold xl:inline-block ">03</span>
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
