interface Item {
  images: { png: string; webp: string };
  name: string;
  description: string;
  distance: string;
  travel: string;
}

interface DestinationProps {
  destination: Item;
  number: number;
  slide: number;
  setSlide: (slide: number) => void;
}

export default function Item({
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
          <div className="flex items-center justify-center h-[50%]">
            <img src={images.png} alt="" className="p-16 " />
          </div>

          <ul className="flex items-center justify-center gap-8 text-lg tracking-widest ">
            <li>
              <button onClick={() => handleClick(0)}>MOON</button>
            </li>
            <li>
              <button onClick={() => handleClick(1)}>MARS</button>
            </li>
            <li>
              <button onClick={() => handleClick(2)}>EUROPA</button>
            </li>
            <li>
              <button onClick={() => handleClick(3)}>TITAN</button>
            </li>
          </ul>

          <div className="flex flex-col items-center justify-center gap-4 px-4 my-8 text-center">
            <h1 className="text-6xl uppercase font-bellefair">{name}</h1>
            <p className="mx-2  font-serif leading-relaxed text-skyBlue border-b-[1px] pb-8 border-opacity-5 ">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 my-8">
            <span className="tracking-widest text-skyBlue">AVG. DISTANCE</span>
            <h3 className="text-3xl tracking-wider uppercase font-bellefair">
              {distance}
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <span className="tracking-widest text-skyBlue">
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
