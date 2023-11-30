import { useState } from "react";
import data from "./../../data.json";
import Planet from "./components/Planet";

export default function Destination() {
  const [slide, setSlide] = useState(0);

  return (
    <header className="h-full bg-[url('./assets/images/destination/background-destination-mobile.jpg')] bg-cover  font-barlowCondensed text-white md:bg-[url('./assets/images/destination/background-destination-tablet.jpg')] xl:h-screen xl:bg-[url('./assets/images/destination/background-destination-desktop.jpg')] ">
      <section className="flex flex-col items-center justify-between px-6  py-24 md:items-start md:px-10 md:py-36 xl:h-full xl:px-40 xl:py-48">
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
