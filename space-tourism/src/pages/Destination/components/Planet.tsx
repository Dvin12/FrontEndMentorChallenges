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
        <section>
          <div className="flex items-center justify-center">
            <img src={images.png} alt="" className="w-[240px] py-12 " />
          </div>

          <ul className="flex items-center justify-center text-xl gap-7 ">
            <li>
              <button
                onClick={() => handleClick(0)}
                className="tracking-[0.18em]"
              >
                MOON
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick(1)}
                className="tracking-[0.18em]"
              >
                MARS
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick(2)}
                className="tracking-[0.18em]"
              >
                EUROPA
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick(3)}
                className="tracking-[0.18em]"
              >
                TITAN
              </button>
            </li>
          </ul>

          <div className="flex flex-col items-center justify-center gap-6 px-4 my-10 text-center">
            <h1 className="text-6xl uppercase font-bellefair">{name}</h1>
            <p className="mx-2  font-serif leading-relaxed text-skyBlue border-b-[1px] pb-10 border-opacity-5 ">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 my-8">
            <span className="text-lg tracking-[0.18em] text-skyBlue">
              AVG. DISTANCE
            </span>
            <h3 className="text-3xl tracking-wider uppercase font-bellefair">
              {distance}
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-lg tracking-[0.18em] text-skyBlue">
              EST. TRAVEL TIME
            </span>
            <h3 className="text-3xl tracking-wider uppercase font-bellefair">
              {travel}
            </h3>
          </div>
        </section>
      )}
    </>
  );
}
