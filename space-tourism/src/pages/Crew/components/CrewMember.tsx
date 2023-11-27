interface CrewMember {
  bio: string;
  images: { png: string; webp: string };
  name: string;
  role: string;
}

interface CrewProps {
  member: CrewMember;
  number: number;
  isSelected: number;
  setIsSelected: (isSelected: number) => void;
}

export default function CrewMember({
  member: { bio, images, name, role },
  number,
  isSelected,
  setIsSelected,
}: CrewProps) {
  function handleClick(number: number) {
    setIsSelected(number);
  }

  return (
    <>
      {isSelected === number && (
        <section className="md:flex md:flex-col ">
          <div className=" order-last mx-6 my-12 flex items-center justify-center border-b-[1px] border-white/30 md:my-0 md:border-none  ">
            <img src={images.png} alt="" className="w-[80%] md:w-3/4 " />
          </div>

          <ul className="order-2 my-8 flex items-center justify-center gap-4 text-sm md:my-14">
            <li>
              <button onClick={() => handleClick(0)}>&#9898;</button>
            </li>
            <li>
              <button onClick={() => handleClick(1)}>&#9898;</button>
            </li>
            <li>
              <button onClick={() => handleClick(2)}>&#9898;</button>
            </li>
            <li>
              <button onClick={() => handleClick(3)}>&#9898;</button>
            </li>
          </ul>

          <div className="flex flex-col items-center justify-center gap-3 font-bellefair md:mt-14  ">
            <span className="text-xl uppercase text-white text-opacity-40 md:text-2xl ">
              {role}
            </span>
            <h2 className="text-center text-3xl uppercase tracking-wide md:text-5xl ">
              {name}
            </h2>
            <p className="whitespace-break-spaces px-5 py-2 text-center font-serif leading-relaxed tracking-wide text-skyBlue md:px-24  md:text-xl md:leading-loose">
              {bio}
            </p>
          </div>
        </section>
      )}
    </>
  );
}