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
    <section className="absolute left-0 top-0 z-40 flex h-full w-full  flex-col items-center justify-center gap-8 bg-black/70 text-white">
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
        <ul className="flex items-center justify-center gap-4">
          {thumbnails.map((thumbnail, i) => (
            <li
              key={i}
              onClick={() => handleThumbs(i)}
              className={` cursor-pointer rounded-2xl border-[3px] ${
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
                    : " duration-300 hover:opacity-40"
                } `}
              />
            </li>
          ))}
        </ul>
      </div>
      <button className="absolute left-[78rem] top-20 " onClick={handleModal}>
        <img
          src="./images/icon-close.svg"
          alt=""
          className="w-[24px] contrast-200 hue-rotate-[348deg] duration-200 hover:invert  hover:saturate-200 hover:sepia"
        />
      </button>
    </section>
  );
}
