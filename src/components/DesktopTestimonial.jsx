export default function DesktopTestimonial({ testimonial }) {
  const { name, image, text } = testimonial;
  return (
    <article className="relative flex flex-col items-center justify-center w-full p-8 mx-4 text-center bg-veryPaleRed text-darkGrayBlue">
      <div className="absolute flex items-center justify-center w-full -top-16">
        <img src={image} alt={name} className="w-[20%]" />
      </div>
      <h5 className="py-2 text-2xl font-medium text-darkBlue">{name}</h5>
      <p className="px-4">&ldquo;{text}&rdquo;</p>
    </article>
  );
}
