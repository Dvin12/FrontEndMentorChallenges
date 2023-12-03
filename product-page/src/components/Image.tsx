import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Product } from "./Interfaces";

interface imageProp {
  images: Product;
  image: Product;
}

export default function Image({ image }: imageProp) {
  return (
    <SplideSlide>
      <img src={image.image} alt="" className=" h-full  w-full object-cover" />
    </SplideSlide>
  );
}
