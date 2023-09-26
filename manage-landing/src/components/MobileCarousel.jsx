import { Splide, SplideSlide } from "@splidejs/react-splide";
import Testimonial from "./Testimonial";

import "@splidejs/splide/dist/css/splide.min.css";
import "../Slider.css";

export default function MobileCarousel({ testimonials }) {
  return (
    <div className="block h-auto mt-6 xl:hidden">
      <Splide
        options={{
          type: "loop",
          arrows: false,

          height: 340,
          gap: "2rem",
          breakpoints: {
            764: {
              width: 320,
            },
            1280: {
              width: 740,
            },
          },
        }}
      >
        {testimonials.map((testimonial, i) => (
          <Testimonial key={i} testimonial={testimonial} />
        ))}
      </Splide>
    </div>
  );
}
