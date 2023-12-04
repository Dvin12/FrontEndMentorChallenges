import { Splide } from "@splidejs/react-splide";

import Image from "./Image";

export default function ImageMobile({ images }) {
  return (
    <div className="xl:hidden">
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
    </div>
  );
}
