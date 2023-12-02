import { Splide } from "@splidejs/react-splide";

import { Product } from "../App";
import Image from "./Image";

interface ProductProps {
  product: Pick<Product, "thumbnails" | "images">;
}

export default function Images({ product: { images } }: ProductProps) {
  return (
    <Splide
      options={{
        height: 300,
        pagination: false,
      }}
    >
      {images.map((image, i) => (
        <Image image={image} key={i} />
      ))}
    </Splide>
  );
}
