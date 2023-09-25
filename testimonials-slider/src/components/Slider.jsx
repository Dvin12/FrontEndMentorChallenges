import { useEffect, useState } from "react";
import SliderItem from "./SliderItem";

export default function Slider({ testimonials }) {
  const [selected, setSelected] = useState(0);

  function handleClick() {
    if (selected >= testimonials.length - 1) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  }

  const handleArrowKeys = (event) => {
    if (event.key === "ArrowRight") {
      setSelected((prevSelected) =>
        prevSelected >= testimonials.length - 1 ? 0 : prevSelected + 1
      );
    } else if (event.key === "ArrowLeft") {
      setSelected((prevSelected) =>
        prevSelected <= 0 ? testimonials.length - 1 : prevSelected - 1
      );
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleArrowKeys);
    return () => {
      document.removeEventListener("keydown", handleArrowKeys);
    };
  });

  return (
    <>
      {testimonials.map((item, i) => (
        <SliderItem
          testimonials={item}
          key={i}
          index={i}
          selected={selected}
          setSelected={setSelected}
          handleClick={handleClick}
        />
      ))}
    </>
  );
}
