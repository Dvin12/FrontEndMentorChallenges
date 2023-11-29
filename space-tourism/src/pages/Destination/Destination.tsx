import { useState } from "react";
import data from "./../../data.json";
import Planet from "./components/Planet";

export default function Destination() {
  const [slide, setSlide] = useState(0);

  return (
    <header className="h-full bg-[url('./assets/images/destination/background-destination-mobile.jpg')] bg-cover  font-barlowCondensed text-white md:bg-[url('./assets/images/destination/background-destination-tablet.jpg')] xl:h-screen xl:bg-[url('./assets/images/destination/background-destination-desktop.jpg')] ">
      <section className="flex flex-col items-center justify-between py-28  md:items-start md:px-12 md:py-36 xl:h-full xl:px-40 xl:py-48">
        <div className="flex gap-4 text-xl tracking-[0.18em]">
          <span className="text-white text-opacity-50 ">01</span>
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
