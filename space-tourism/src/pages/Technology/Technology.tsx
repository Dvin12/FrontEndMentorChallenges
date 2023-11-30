import { useEffect, useState } from "react";
import data from "../../data.json";
import Tech from "./components/Tech";

export default function Technology() {
  const [slide, setSlide] = useState(0);

  const [heightClass, setHeightClass] = useState("h-full");

  useEffect(() => {
    function handleResize() {
      const height = window.innerHeight;
      if (height > 800) {
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
      className={`${heightClass}  bg-[url('./assets/images/technology/background-technology-mobile.jpg')]   bg-cover  bg-no-repeat  font-barlowCondensed  text-white md:h-full md:bg-[url('./assets/images/technology/background-technology-tablet.jpg')]  xl:h-screen xl:bg-[url('./assets/images/technology/background-technology-desktop.jpg')]`}
    >
      <section className="flex  h-full flex-col items-center justify-evenly   gap-4 py-24 md:items-start md:justify-evenly md:py-36   xl:pt-56    ">
        <div className="flex   gap-4  tracking-[0.27em] md:px-10 md:text-xl md:tracking-[0.338em] xl:px-52 xl:text-3xl xl:tracking-[0.472rem] ">
          <span className="font-bold text-white text-opacity-50">03</span>
          <span>SPACE LAUNCH 101</span>
        </div>

        {data.technology.map((tech, i) => (
          <Tech
            tech={tech}
            number={i}
            key={i}
            slide={slide}
            setSlide={setSlide}
          />
        ))}
      </section>
    </header>
  );
}
