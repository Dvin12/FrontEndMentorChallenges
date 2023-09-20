import { SplideSlide } from "@splidejs/react-splide";

export default function Testimonial({ testimonial }) {
  const { name, image, text } = testimonial;
  return (
    <SplideSlide>
      <article className="relative flex flex-col items-center justify-center py-8 my-12 text-center w-fit bg-veryPaleRed bg-opacity-60 text-darkGrayBlue">
        <img src={image} alt={name} className="absolute w-1/6 -top-6" />
        <h4 className="mt-4 font-semibold text-darkBlue">{name}</h4>
        <p className="px-5 py-2 ">&ldquo;{text}&rdquo;</p>
      </article>
    </SplideSlide>
  );
}
