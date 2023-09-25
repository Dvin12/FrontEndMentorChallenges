export default function SmallArticle({ number, title, paragraph, image }) {
  return (
    <section className="flex items-center justify-between gap-8 w-full order-3">
      <img
        src={`./assets/images/${image}`}
        alt=""
        className="w-[140px] h-[160px] "
      />
      <div className="flex flex-col gap-3 w-full">
        <h3 className="text-4xl font-extrabold text-[hsl(233,8%,79%)] ">
          0{number}
        </h3>
        <h4 className="text-2xl font-extrabold hover:text-[hsl(5,85%,63%)] duration-300 cursor-pointer">
          {title}
        </h4>
        <div className="w-full">
          <p className="text-lg w-full">{paragraph}</p>
        </div>
      </div>
    </section>
  );
}
