import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef } from "react";
export default function Modal({
  images,
  thumbnails,
  selectedSlide,
  handleSlideSelection,
  handleModal,
}) {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;

      if (splideInstance) {
        splideInstance.on("moved", (newIndex) => {
          handleSlideSelection(newIndex);
        });
      }
    }
  }, [handleSlideSelection]);

  const handleThumbs = (index) => {
    handleSlideSelection(index);
    if (splideRef.current) {
      splideRef.current.go(index);
    }
  };

  return (
    <section className="absolute top-0 left-0 bg-black/70 w-full h-full z-40  text-white items-center justify-center flex flex-col gap-8">
      <Splide
        options={{
          width: 560,
          pagination: false,
        }}
        ref={splideRef}
      >
        {images.map((image, i) => (
          <SplideSlide key={i}>
            <img src={image.image} className=" rounded-xl" />
          </SplideSlide>
        ))}
      </Splide>
      <div>
        <ul className="flex gap-4 items-center justify-center">
          {thumbnails.map((thumbnail, i) => (
            <li
              key={i}
              onClick={() => handleThumbs(i)}
              className={` cursor-pointer border-[3px] rounded-2xl ${
                selectedSlide === i
                  ? " border-orange duration-200  "
                  : " border-transparent"
              }`}
            >
              <img
                src={thumbnail.thumbnail}
                className={`w-[80px] rounded-xl ${
                  selectedSlide === i
                    ? " opacity-40 "
                    : " hover:opacity-40 duration-300"
                } `}
              />
            </li>
          ))}
        </ul>
      </div>
      <button className="absolute top-20 left-[78rem] " onClick={handleModal}>
        <img
          src="./images/icon-close.svg"
          alt=""
          className="w-[24px] hover:invert hover:sepia hover:saturate-200 hue-rotate-[348deg]  contrast-200 duration-200"
        />
      </button>
    </section>
  );
}
