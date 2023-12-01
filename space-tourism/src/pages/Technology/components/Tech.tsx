import { motion } from "framer-motion";

interface Tech {
  name: string;
  description: string;
  images: { landscape: string; portrait: string };
}

interface TechProps {
  tech: Tech;
  number: number;
  slide: number;
  setSlide: (slide: number) => void;
}

export default function Tech({
  tech: { name, description, images },
  number,
  slide,
  setSlide,
}: TechProps) {
  function handleClick(number: number) {
    setSlide(number);
  }

  return (
    <>
      {slide === number && (
        <motion.section
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="  xl:flex   xl:items-center xl:justify-center"
        >
          <div className="my-8 h-[40%] md:my-12 md:h-full xl:order-last xl:my-8 xl:flex xl:w-full  xl:justify-end ">
            <img
              src={images.landscape}
              alt=""
              className=" h-full w-full object-cover   xl:hidden   "
            />

            <img src={images.portrait} alt="" className="hidden xl:block  " />
          </div>
          <div className=" xl:flex xl:items-center xl:justify-center xl:px-16     ">
            <ul className="my-10 flex items-center justify-center gap-4 font-bellefair md:text-2xl xl:w-full xl:flex-col xl:gap-8 xl:text-3xl  ">
              <li>
                <button
                  className={`h-10 w-10 rounded-full ${
                    slide === 0
                      ? "bg-white text-darkBlue"
                      : "bg-transparent text-white hover:bg-white/10"
                  } border-[1px] border-white/80  duration-300 md:h-16 md:w-16 xl:h-20 xl:w-20`}
                  onClick={() => handleClick(0)}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  className={`h-10 w-10 rounded-full ${
                    slide === 1
                      ? "bg-white text-darkBlue"
                      : "bg-transparent text-white hover:bg-white/10"
                  } border-[1px] border-white/80  duration-300 md:h-16 md:w-16 xl:h-20 xl:w-20`}
                  onClick={() => handleClick(1)}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  className={`h-10 w-10 rounded-full ${
                    slide === 2
                      ? "bg-white text-darkBlue"
                      : "bg-transparent text-white hover:bg-white/10"
                  } border-[1px] border-white/80  duration-300 md:h-16 md:w-16 xl:h-20 xl:w-20`}
                  onClick={() => handleClick(2)}
                >
                  3
                </button>
              </li>
            </ul>
            <div className="flex flex-col items-center justify-center gap-2 px-6  text-center md:px-36  xl:items-start xl:px-0 xl:text-left ">
              <span className=" tracking-[0.236em] text-skyBlue  ">
                THE TERMINOLOGY...
              </span>
              <h2 className="font-bellefair text-2xl uppercase md:text-4xl xl:text-6xl ">
                {name}
              </h2>
              <p className="font-barlow  leading-[25px] text-skyBlue md:my-4 md:text-xl md:leading-[40px] xl:my-6 xl:leading-[32px] 2xl:w-[80%]  ">
                {description}
              </p>
            </div>
          </div>
        </motion.section>
      )}
    </>
  );
}
