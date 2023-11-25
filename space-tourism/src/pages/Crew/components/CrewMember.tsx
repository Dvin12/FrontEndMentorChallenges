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
        <section>
          <div className=" border-b-[1px] mx-6 my-10 flex items-center justify-center border-white border-opacity-30">
            <img src={images.png} alt="" className="w-[70%] " />
          </div>

          <ul className="flex items-center justify-center gap-4 my-8 text-sm">
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

          <div className="flex flex-col items-center justify-center gap-2 font-bellefair">
            <span className="text-xl text-white uppercase text-opacity-40 ">
              {role}
            </span>
            <h2 className="text-3xl tracking-wide uppercase ">{name}</h2>
            <p className="px-5 py-2 font-serif leading-relaxed tracking-wide text-center whitespace-break-spaces text-skyBlue">
              {bio}
            </p>
          </div>
        </section>
      )}
    </>
  );
}
