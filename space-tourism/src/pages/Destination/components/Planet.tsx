interface Planet {
  images: { png: string; webp: string };
  name: string;
  description: string;
  distance: string;
  travel: string;
}

interface DestinationProps {
  destination: Planet;
  number: number;
  slide: number;
  setSlide: (slide: number) => void;
}

export default function Planet({
  destination: { images, name, description, distance, travel },
  number,
  slide,
  setSlide,
}: DestinationProps): JSX.Element {
  function handleClick(number: number) {
    setSlide(number);
  }

  return (
    <>
      {slide === number && (
        <article className="xl:my-10 xl:flex   xl:items-center xl:justify-between ">
          <div className="flex w-full items-center justify-center">
            <img
              src={images.png}
              alt=""
              className="w-[170px] py-8 md:w-[300px] md:py-14 xl:w-1/2 "
            />
          </div>

          <div className=" xl:w-2/3  ">
            <ul className="flex items-center justify-center gap-7 text-sm md:gap-9 md:text-base xl:justify-start ">
              <li className="relative flex items-center justify-center">
                <button
                  onClick={() => handleClick(0)}
                  className="tracking-[0.236em] md:tracking-[0.27em]"
                >
                  MOON
                </button>
                {slide === 0 && (
                  <span className=" absolute -bottom-2 h-[3px] w-full bg-white"></span>
                )}
              </li>
              <li className="relative flex items-center justify-center">
                <button
                  onClick={() => handleClick(1)}
                  className="tracking-[0.236em] md:tracking-[0.27em]"
                >
                  MARS
                </button>
                {slide === 1 && (
                  <span className=" absolute -bottom-2 h-[3px] w-full bg-white"></span>
                )}
              </li>
              <li className="relative flex items-center justify-center">
                <button
                  onClick={() => handleClick(2)}
                  className="tracking-[0.236em] md:tracking-[0.27em]"
                >
                  EUROPA
                </button>

                {slide === 2 && (
                  <span className=" absolute -bottom-2 h-[3px] w-full bg-white"></span>
                )}
              </li>
              <li className="relative flex items-center justify-center">
                <button
                  onClick={() => handleClick(3)}
                  className="tracking-[0.236em] md:tracking-[0.27em]"
                >
                  TITAN
                </button>
                {slide === 3 && (
                  <span className=" absolute -bottom-2 h-[3px] w-full bg-white"></span>
                )}
              </li>
            </ul>

            <div className="my-8 flex flex-col items-center justify-center gap-4 text-center md:my-12 xl:items-start xl:px-0 xl:text-left">
              <h1 className="font-bellefair text-6xl uppercase md:text-8xl">
                {name}
              </h1>
              <p className="  border-b-[1px] border-white/30   pb-10 font-barlow leading-[25px]  text-skyBlue md:mx-16  md:pb-14  md:leading-loose xl:mx-0  xl:w-[83%] xl:text-xl xl:leading-[32px]">
                {description}
              </p>
            </div>

            <div className=" md:flex md:w-full md:items-center md:justify-center md:gap-20 xl:justify-start xl:gap-28 ">
              <div className=" my-6 flex  flex-col items-center justify-center gap-3 md:my-0">
                <span className=" tracking-[0.236em] text-skyBlue">
                  AVG. DISTANCE
                </span>
                <h3 className="font-bellefair text-3xl uppercase ">
                  {distance}
                </h3>
              </div>

              <div className="flex flex-col items-center justify-center gap-3">
                <span className=" tracking-[0.236em] text-skyBlue">
                  EST. TRAVEL TIME
                </span>
                <h3 className="font-bellefair text-3xl uppercase ">{travel}</h3>
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
