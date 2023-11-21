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
  function handleNext() {
    if (slide > Item.length) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  }

  function handlePrevious() {
    if (slide < Item.length) {
      setSlide(2);
    } else {
      setSlide(slide - 1);
    }
  }

  return (
    <>
      {slide === num ? (
        <section className="transition-all duration-100 ">
          <div className="relative">
            <img src={imageMobile} alt="" />
            <Switch handleNext={handleNext} handlePrevious={handlePrevious} />
          </div>
          <section className="flex flex-col items-start justify-center gap-3 px-6 py-14">
            <h1 className="text-4xl font-semibold tracking-tighter ">
              {title}
            </h1>
            <p className=" text-darkGrey">{description}</p>
            <button className="flex items-start gap-4 my-4">
              <span className="tracking-[0.8em] text-lg font-semibold ">
                SHOP NOW
              </span>
              <img
                src="./assets/images/icon-arrow.svg"
                alt=""
                className="mt-1"
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
