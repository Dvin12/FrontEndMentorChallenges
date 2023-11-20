import { Items } from "./Header";

interface ItemProps {
  item: Items;
  num: number;
  slide: number;
}

export default function Item({
  item: { imageDesktop, imageMobile, title, description },
  num,
  slide,
}: ItemProps): JSX.Element {
  return (
    <>
      {slide === num && (
        <>
          <section>
            <img src={imageMobile} alt="" />
          </section>
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
        </>
      )}
    </>
  );
}
