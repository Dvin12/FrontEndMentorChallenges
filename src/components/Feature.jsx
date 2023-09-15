export default function Feature({ feature, num, selected }) {
  const { title, text, image } = feature;
  return (
    <>
      {selected === num && (
        <section className="flex flex-col items-center justify-center my-16">
          <div className="relative flex flex-col items-center justify-center">
            <img src={image} alt={title} className="z-30 px-6 w-[95%]" />
            <div className="absolute left-0 z-20 h-52 w-72 top-8 bg-sBlue rounded-tr-[6rem] rounded-br-[6rem]"></div>
          </div>
          <div className="flex flex-col items-center justify-center px-6 my-20 text-center">
            <h3 className="text-2xl font-medium">{title}</h3>
            <p className="mt-2">{text}</p>
          </div>
        </section>
      )}
    </>
  );
}
