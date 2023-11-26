import { useState } from "react";
import data from "./../../data.json";
import Planet from "./components/Planet";

export default function Destination() {
  const [slide, setSlide] = useState(0);

  return (
    <section className="bg-[url('./assets/images/destination/background-destination-mobile.jpg')] h-full bg-cover font-barlowCondensed flex flex-col items-center justify-between py-28 text-white ">
      <div className="flex text-lg gap-4 tracking-[0.18em] ">
        <span className="text-white text-opacity-50">01</span>
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
