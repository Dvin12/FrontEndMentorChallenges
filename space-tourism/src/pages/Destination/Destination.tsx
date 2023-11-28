import { useState } from "react";
import data from "./../../data.json";
import Planet from "./components/Planet";

export default function Destination() {
  const [slide, setSlide] = useState(0);

  return (
    <section className="flex h-full flex-col items-center justify-between bg-[url('./assets/images/destination/background-destination-mobile.jpg')] bg-cover py-28 font-barlowCondensed text-white md:items-start md:bg-[url('./assets/images/destination/background-destination-tablet.jpg')] md:py-36 ">
      <div className="flex gap-4 text-xl tracking-[0.18em] md:px-12 ">
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
  );
}
