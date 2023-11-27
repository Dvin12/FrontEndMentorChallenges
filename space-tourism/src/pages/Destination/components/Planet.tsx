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
            <img
              src={images.png}
              alt=""
              className="w-[240px] py-12 md:w-[300px] "
            />
          </div>

          <ul className="flex items-center justify-center gap-7 text-xl ">
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

          <div className="my-10 flex flex-col items-center justify-center gap-6 px-4 text-center">
            <h1 className="font-bellefair text-6xl uppercase md:text-8xl">
              {name}
            </h1>
            <p className="mx-2  border-b-[1px]  pb-10 font-serif leading-relaxed tracking-wide text-skyBlue md:mx-10 md:pb-12 md:text-xl md:leading-loose ">
              {description}
            </p>
          </div>

          <div className="md:flex md:w-full md:items-center md:justify-between md:px-40">
            <div className="my-8 flex flex-col items-center justify-center gap-2">
              <span className="text-lg tracking-[0.18em] text-skyBlue">
                AVG. DISTANCE
              </span>
              <h3 className="font-bellefair text-3xl uppercase tracking-wider">
                {distance}
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-lg tracking-[0.18em] text-skyBlue">
                EST. TRAVEL TIME
              </span>
              <h3 className="font-bellefair text-3xl uppercase tracking-wider">
                {travel}
              </h3>
            </div>
          </div>
        </section>
      )}
    </>
  );
}