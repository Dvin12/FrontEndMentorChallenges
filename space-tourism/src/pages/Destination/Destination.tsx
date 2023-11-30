import { useEffect, useState } from "react";
import data from "./../../data.json";
import Planet from "./components/Planet";

export default function Destination() {
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
      className={` ${heightClass} h-full bg-[url('./assets/images/destination/background-destination-mobile.jpg')] bg-cover  font-barlowCondensed text-white transition-all duration-500 ease-in-out  md:h-full md:bg-[url('./assets/images/destination/background-destination-tablet.jpg')] xl:h-screen   xl:bg-[url('./assets/images/destination/background-destination-desktop.jpg')]`}
    >
      <section className="flex flex-col items-center justify-between px-6  py-24 md:items-start md:px-10 md:py-48 xl:h-full xl:px-40 xl:py-48">
        <div className="flex gap-5  tracking-[0.27em] md:text-xl md:tracking-[0.338em] xl:text-3xl xl:tracking-[0.472em]">
          <span className="font-bold text-white text-opacity-50 ">01</span>
          <span>PICK YOUR DESTINATION</span>
        </div>

        {data.destinations.map((item, i) => (
          <Planet
            destination={item}
            number={i}
            slide={slide}
            setSlide={setSlide}
            key={i}
          />
        ))}
      </section>
    </header>
  );
}
