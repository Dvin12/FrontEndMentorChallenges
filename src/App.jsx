import { useEffect } from "react";
import Articles from "./components/Articles";
import HamburgerNav from "./components/HamburgerNav";
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import Navigation from "./components/Navigation";
import News from "./components/News";
import { useState } from "react";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 760;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= breakpoint;
  return (
    <main className=" font-Inter bg-[hsl(36,100%,96%)]  xl:py-20 xl:px-20  px-6 py-8">
      <Navigation>
        <Logo />
        {isMobile ? (
          <HamburgerNav />
        ) : (
          <>
            <NavLinks />
          </>
        )}
      </Navigation>
      <News>
        <Articles isMobile={isMobile} />
      </News>
    </main>
  );
}
