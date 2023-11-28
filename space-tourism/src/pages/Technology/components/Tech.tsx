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
        <section className="xl:flex   xl:items-center xl:justify-center">
          <div className="md:py-4 xl:order-last xl:flex xl:w-full xl:items-center xl:justify-end xl:py-0">
            <img
              src={images.landscape}
              alt=""
              className="h-[180px] w-full object-cover md:h-full xl:hidden  "
            />

            <img src={images.portrait} alt="" className="hidden xl:block" />
          </div>
          <div className=" items-center justify-center xl:flex ">
            <ul className="my-11 flex items-center justify-center gap-5 font-bellefair text-2xl md:text-3xl  xl:w-full xl:flex-col">
              <li>
                <button
                  className="rounded-full bg-white px-6 py-3 text-darkBlue md:px-8 md:py-5 "
                  onClick={() => handleClick(0)}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  className="rounded-full bg-white px-6 py-3 text-darkBlue md:px-8 md:py-5 "
                  onClick={() => handleClick(1)}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  className="rounded-full bg-white px-6 py-3 text-darkBlue md:px-8 md:py-5 "
                  onClick={() => handleClick(2)}
                >
                  3
                </button>
              </li>
            </ul>
            <div className="flex flex-col items-center justify-center gap-3 text-center md:gap-8 xl:items-start xl:text-left ">
              <span className="text-lg tracking-[0.18em] text-skyBlue md:text-xl ">
                THE TERMINOLOGY...
              </span>
              <h2 className="font-bellefair text-3xl uppercase md:text-5xl">
                {name}
              </h2>
              <p className="my-6 whitespace-break-spaces px-5 font-serif text-lg leading-relaxed tracking-wide text-skyBlue md:my-0 md:px-24 md:text-xl md:leading-loose xl:w-[80%] xl:px-0">
                {description}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
