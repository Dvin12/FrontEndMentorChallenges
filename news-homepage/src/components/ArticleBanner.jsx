export default function ArticleBanner({ image }) {
  return (
    <section className="col-span-2 row-span-2 order-1 xl:order-none">
      <img
        src={`./assets/images/${image}`}
        alt=""
        className="h-full w-full md:h-full md:object-cover"
      />
    </section>
  );
}
