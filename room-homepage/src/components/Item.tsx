import { Items } from "./Header";
import Switch from "./Switch";

interface ItemProps {
  item: Items;
  num: number;
  slide: number;
  setSlide: (slide: number) => void;
}

export default function Item({
  item: { imageDesktop, imageMobile, title, description },
  num,
  slide,
  setSlide,
}: ItemProps): JSX.Element {
  function handleNext(): void {
    if (slide > Item.length) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  }

  function handlePrevious(): void {
    if (slide < Item.length) {
      setSlide(2);
    } else {
      setSlide(slide - 1);
    }
  }

  return (
    <>
      {slide === num ? (
        <section className="grid w-full grid-cols-1 transition-all duration-100 xl:grid-cols-2">
          <div className="relative w-full ">
            <img
              src={imageMobile}
              alt={title}
              className="object-cover w-full xl:hidden"
            />
            <img
              src={imageDesktop}
              alt={title}
              className="hidden object-cover w-full h-full xl:block"
            />
            <Switch handleNext={handleNext} handlePrevious={handlePrevious} />
          </div>
          <section className="flex flex-col items-start justify-center gap-3 px-6 py-14 xl:px-20 xl:py-28 2xl:px-44 xl:gap-8">
            <h1 className="text-4xl font-semibold tracking-tighter 2xl:text-6xl ">
              {title}
            </h1>
            <p className=" text-darkGrey xl:text-lg">{description}</p>
            <button className="flex items-start gap-4 my-4 xl:items-center group">
              <span className="tracking-[0.8em] text-lg xl:text-xl font-semibold group-hover:opacity-50 duration-200 ">
                SHOP NOW
              </span>
              <img
                src="./assets/images/icon-arrow.svg"
                alt="arrow pointing right"
                className="mt-1 duration-200 xl:mt-0 group-hover:opacity-50"
              />
            </button>
          </section>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
