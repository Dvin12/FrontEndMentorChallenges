import { useState } from "react";
import data from "./../../data.json";
import Item from "./components/Item";

export default function Destination() {
  const [slide, setSlide] = useState(0);

  return (
    <section className="bg-[url('./assets/images/destination/background-destination-mobile.jpg')] h-full bg-cover font-barlowCondensed flex flex-col items-center justify-between py-28 text-white ">
      <div className="flex text-xl gap-4 tracking-[0.17em] ">
        <span>01</span>
        <span>PICK YOUR DESTINATION</span>
      </div>
      {data.destinations.map((item, i) => (
        <Item
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
