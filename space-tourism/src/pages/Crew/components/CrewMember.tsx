import { motion } from "framer-motion";

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
        <motion.section
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="  md:flex  md:flex-col md:items-center md:justify-between xl:flex-row  "
        >
          <div className=" order-last  my-10 flex  items-center justify-center border-b-[1px] border-white/30 md:my-0  md:h-full  md:border-none    ">
            <img
              src={images.png}
              alt=""
              className="w-[260px] md:w-full xl:w-full "
            />
          </div>
          <div className="md:flex md:h-full md:flex-col md:justify-between xl:h-full xl:w-[50%]">
            <ul className="order-2 my-8 flex items-center justify-center gap-4  md:my-14 xl:my-24 xl:justify-start  ">
              <li>
                <button
                  onClick={() => handleClick(0)}
                  className={`h-5 w-5 rounded-full ${
                    isSelected === 0
                      ? "bg-white"
                      : " bg-white/20 duration-300 hover:bg-white/60"
                  } `}
                ></button>
              </li>
              <li>
                <button
                  onClick={() => handleClick(1)}
                  className={`h-5 w-5 rounded-full ${
                    isSelected === 1
                      ? "bg-white"
                      : " bg-white/20 duration-300 hover:bg-white/60"
                  } `}
                ></button>
              </li>
              <li>
                <button
                  onClick={() => handleClick(2)}
                  className={`h-5 w-5 rounded-full ${
                    isSelected === 2
                      ? "bg-white"
                      : " bg-white/20 duration-300 hover:bg-white/60"
                  } `}
                ></button>
              </li>
              <li>
                <button
                  onClick={() => handleClick(3)}
                  className={`h-5 w-5 rounded-full ${
                    isSelected === 3
                      ? "bg-white"
                      : " bg-white/20 duration-300 hover:bg-white/60"
                  } `}
                ></button>
              </li>
            </ul>

            <div className="xl: flex flex-col items-center justify-center gap-2  text-center font-bellefair  md:mt-14 xl:h-full xl:items-start xl:gap-4 xl:text-left ">
              <span className=" uppercase text-white text-opacity-40 md:text-2xl xl:text-3xl ">
                {role}
              </span>
              <h2 className=" text-2xl uppercase  md:text-4xl xl:text-6xl ">
                {name}
              </h2>
              <p className="  font-barlow leading-[32px]  text-skyBlue  md:px-16 md:text-lg md:leading-loose xl:w-[60%] xl:px-0 xl:leading-[32px] ">
                {bio}
              </p>
            </div>
          </div>
        </motion.section>
      )}
    </>
  );
}
