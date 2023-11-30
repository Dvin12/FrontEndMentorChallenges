import { useEffect, useState } from "react";
import data from "../../data.json";
import CrewMember from "./components/CrewMember";

export default function Crew() {
  const [isSelected, setIsSelected] = useState(0);

  const [heightClass, setHeightClass] = useState("h-full");

  useEffect(() => {
    function handleResize() {
      const height = window.innerHeight;
      if (height > 820) {
        setHeightClass("h-screen");
      } else {
        setHeightClass("h-full");
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={` ${heightClass}  overflow-hidden bg-[url('./assets/images/crew/background-crew-mobile.jpg')] bg-cover  font-barlowCondensed text-white  md:h-full  md:bg-[url('./assets/images/crew/background-crew-tablet.jpg')] xl:h-screen  xl:bg-[url('./assets/images/crew/background-crew-desktop.jpg')]  `}
    >
      <section className="flex h-full flex-col  items-center justify-start px-6 py-24 md:items-start   md:justify-between  md:px-10 md:py-0 md:pt-48   xl:items-start xl:px-52 xl:pt-48  ">
        <div className="flex gap-5 tracking-[0.27em] md:text-xl md:tracking-[0.338em] xl:text-3xl xl:tracking-[0.472em]      ">
          <span className="font-bold text-white text-opacity-50 ">02</span>

          <span>MEET YOUR CREW</span>
        </div>

        {data.crew.map((member, i) => (
          <CrewMember
            member={member}
            number={i}
            key={i}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        ))}
      </section>
    </header>
  );
}
