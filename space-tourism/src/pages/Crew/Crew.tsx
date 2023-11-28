import { useState } from "react";
import data from "../../data.json";
import CrewMember from "./components/CrewMember";

export default function Crew() {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <section className=" flex h-full w-full flex-col  items-start justify-between gap-3 bg-[url('./assets/images/crew/background-crew-mobile.jpg')] bg-cover py-28 text-white   md:bg-[url('./assets/images/crew/background-crew-tablet.jpg')] md:py-0">
      <div className="flex gap-3 font-barlowCondensed text-xl tracking-[0.17em] md:mt-36 md:px-12 ">
        <span className="text-white text-opacity-50 ">02</span>

        <span>MEET YOUR CREW</span>
      </div>

      {data.crew.map((member, i) => (
        <CrewMember
          member={member}
          number={i}
          key={i}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      ))}
    </section>
  );
}
