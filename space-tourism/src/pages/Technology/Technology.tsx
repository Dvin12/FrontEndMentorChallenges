import { useState } from "react";
import data from "../../data.json";
import Tech from "./components/Tech";

export default function Technology() {
  const [slide, setSlide] = useState(0);

  return (
    <header className="h-full   bg-[url('./assets/images/technology/background-technology-mobile.jpg')] bg-cover  font-barlowCondensed  text-white  md:bg-[url('./assets/images/technology/background-technology-tablet.jpg')]  xl:h-screen xl:bg-[url('./assets/images/technology/background-technology-desktop.jpg')]">
      <section className="flex  flex-col items-center  justify-between gap-6 py-24 md:items-start md:justify-start md:py-36 xl:h-full  xl:py-48   ">
        <div className="flex   gap-4  tracking-[0.27em] md:px-10 md:text-xl md:tracking-[0.338em] xl:px-40 xl:text-3xl xl:tracking-[0.472rem] ">
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
