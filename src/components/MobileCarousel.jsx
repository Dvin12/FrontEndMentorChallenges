import { Splide, SplideSlide } from "@splidejs/react-splide";
import Testimonial from "./Testimonial";

import "@splidejs/splide/dist/css/splide.min.css";
import "../Slider.css";

export default function MobileCarousel({ testimonials }) {
  return (
    <div className="h-auto mt-6">
      <Splide
        options={{
          type: "loop",
          arrows: false,
          width: 320,
          height: 340,
          gap: "2rem",
        }}
      >
        {testimonials.map((testimonial, i) => (
          <Testimonial key={i} testimonial={testimonial} />
        ))}
      </Splide>
    </div>
  );
}
