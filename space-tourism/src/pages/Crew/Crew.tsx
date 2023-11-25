import { useState } from "react";
import data from "../../data.json";
import CrewMember from "./components/CrewMember";

export default function Crew() {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <section className=" bg-[url('./assets/images/crew/background-crew-mobile.jpg')] w-full h-full  bg-cover items-center justify-between gap-3 flex-col flex py-28 text-white">
      <div className="flex gap-3 text-xl tracking-[0.12em] font-barlowCondensed">
        <span>02</span>
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
