import { useState } from "react";
import data from "../../data.json";
import Tech from "./components/Tech";

export default function Technology() {
  const [slide, setSlide] = useState(0);

  return (
    <section className=" bg-[url('./assets/images/technology/background-technology-mobile.jpg')] w-full h-full bg-cover text-white justify-between py-28 font-barlowCondensed flex items-center  flex-col gap-6">
      <div className="flex items-center justify-center text-xl tracking-[0.17em] gap-4 ">
        <span>03</span>
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
