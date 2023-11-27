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
        <section>
          <div className="md:py-4">
            <img
              src={images.landscape}
              alt=""
              className="h-[180px] object-cover md:h-full md:w-full "
            />
          </div>

          <ul className="my-11 flex items-center justify-center gap-5 font-bellefair text-2xl md:text-3xl">
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
          <div className="flex flex-col items-center justify-center gap-3 text-center md:gap-8">
            <span className="text-lg tracking-[0.18em] text-skyBlue md:text-xl ">
              THE TERMINOLOGY...
            </span>
            <h2 className="font-bellefair text-3xl uppercase md:text-5xl">
              {name}
            </h2>
            <p className="my-6 whitespace-break-spaces px-5 font-serif text-lg leading-relaxed tracking-wide text-skyBlue md:my-0 md:px-24 md:text-xl md:leading-loose">
              {description}
            </p>
          </div>
        </section>
      )}
    </>
  );
}
