import { useState } from "react";
import data from "../../data.json";
import CrewMember from "./components/CrewMember";

export default function Crew() {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <header className=" h-full bg-[url('./assets/images/crew/background-crew-mobile.jpg')] bg-cover  text-white  md:bg-[url('./assets/images/crew/background-crew-tablet.jpg')] xl:bg-[url('./assets/images/crew/background-crew-desktop.jpg')]   ">
      <section className="flex flex-col items-center  justify-between gap-3 py-28 md:items-start md:px-14 md:py-40 xl:px-36 xl:py-48  ">
        <div className="flex gap-3 font-barlowCondensed text-xl tracking-[0.17em]      ">
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
    </header>
  );
}
