import { Splide } from "@splidejs/react-splide";

import Image from "./Image";
import { Product } from "./Interfaces";

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
