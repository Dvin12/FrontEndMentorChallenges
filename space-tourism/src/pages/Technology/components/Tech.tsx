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
  function handleClick(number) {
    setSlide(number);
  }

  return (
    <>
      {slide === number && (
        <section>
          <div>
            <img
              src={images.landscape}
              alt=""
              className="object-cover h-[180px] "
            />
          </div>

          <ul className="flex items-center justify-center gap-5 text-2xl my-11 font-bellefair">
            <li>
              <button
                className="px-6 py-3 bg-white rounded-full text-darkBlue "
                onClick={() => handleClick(0)}
              >
                1
              </button>
            </li>
            <li>
              <button
                className="px-6 py-3 bg-white rounded-full text-darkBlue "
                onClick={() => handleClick(1)}
              >
                2
              </button>
            </li>
            <li>
              <button
                className="px-6 py-3 bg-white rounded-full text-darkBlue "
                onClick={() => handleClick(2)}
              >
                3
              </button>
            </li>
          </ul>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <span className="text-lg tracking-[0.18em] text-skyBlue ">
              THE TERMINOLOGY...
            </span>
            <h2 className="text-3xl uppercase font-bellefair">{name}</h2>
            <p className="px-5 my-4 font-serif text-lg leading-relaxed tracking-wide whitespace-break-spaces text-skyBlue">
              {description}
            </p>
          </div>
        </section>
      )}
    </>
  );
}
