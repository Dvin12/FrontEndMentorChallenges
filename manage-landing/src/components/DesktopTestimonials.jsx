import DesktopTestimonial from "./DesktopTestimonial";

export default function DesktopTestimonials({ testimonials }) {
  return (
    <section className="items-center justify-between hidden w-full mt-40 xl:flex">
      {testimonials.map((testimonial, i) => (
        <DesktopTestimonial testimonial={testimonial} key={i} />
      ))}
    </section>
  );
}
