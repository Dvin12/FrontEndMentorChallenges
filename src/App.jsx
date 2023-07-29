import { useState, useEffect } from "react";
import Header from "./component/Header";
import Navigation from "./component/Navigation";
import NavigationMobile from "./component/NavigationMobile";

export default function App() {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 1025;
  const isMobile = windowWidth <= breakpoint;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleFeatures() {
    setFeatures((feature) => (feature !== true ? true : false));
    setCompany(false);
  }

  function handleCompany() {
    setCompany((company) => (company !== true ? true : false));
    setFeatures(false);
  }

  function handleIsOpen() {
    setIsOpen((open) => (open !== true ? true : false));
  }

  return (
    <main className=" bg-[hsl(0,0%,98%)] font-Epilogue h-screen w-full px-8 py-8 lg:px-14 relative">
      <Navigation
        isMobile={isMobile}
        isOpen={isOpen}
        features={features}
        company={company}
        handleCompany={handleCompany}
        handleFeatures={handleFeatures}
        handleIsOpen={handleIsOpen}
      />
      {isOpen && (
        <aside className="z-40  lg:hidden">
          <div className="fixed bg-black opacity-60 h-screen w-screen top-0 left-0 z-10"></div>
          <div className="fixed bg-white  h-screen w-[280px] right-0 top-0 z-20">
            <NavigationMobile
              handleIsOpen={handleIsOpen}
              handleFeatures={handleFeatures}
              handleCompany={handleCompany}
              features={features}
              company={company}
            />
          </div>
        </aside>
      )}
      <Header isMobile={isMobile} />
    </main>
  );
}
