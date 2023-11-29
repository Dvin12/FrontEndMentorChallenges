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
        <section className="md:flex md:flex-col xl:h-full xl:flex-row xl:items-center xl:justify-between ">
          <div className=" order-last mx-6 my-12 flex items-center justify-center border-b-[1px] border-white/30 md:my-0 md:border-none xl:h-full xl:w-[50%] xl:items-start">
            <img
              src={images.png}
              alt=""
              className="w-[80%] md:w-[70%] xl:w-full "
            />
          </div>
          <div className="md:flex md:h-full md:flex-col md:justify-between">
            <ul className="order-2 my-8 flex items-center justify-center gap-4 text-sm md:my-14 xl:justify-start">
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

            <div className="flex flex-col items-center justify-center gap-3 font-bellefair md:mt-14 xl:h-full xl:w-[60%] xl:items-start  ">
              <span className="text-xl uppercase text-white text-opacity-40 md:text-2xl ">
                {role}
              </span>
              <h2 className="text-center text-3xl uppercase tracking-wide md:text-5xl ">
                {name}
              </h2>
              <p className="whitespace-break-spaces  px-5 text-center font-serif leading-relaxed tracking-wide text-skyBlue  md:text-xl md:leading-loose xl:px-0 xl:text-left">
                {bio}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
