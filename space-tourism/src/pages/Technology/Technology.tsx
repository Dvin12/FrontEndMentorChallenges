import { useState } from "react";
import data from "../../data.json";
import Tech from "./components/Tech";

export default function Technology() {
  const [slide, setSlide] = useState(0);

  return (
    <section className=" flex h-full w-full flex-col justify-between  gap-6 bg-[url('./assets/images/technology/background-technology-mobile.jpg')] bg-cover py-28 font-barlowCondensed  text-white  md:bg-[url('./assets/images/technology/background-technology-tablet.jpg')] md:py-40">
      <div className="flex   gap-4 text-xl tracking-[0.18em] md:px-12  ">
        <span className="text-white text-opacity-50">03</span>
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
  );
}
