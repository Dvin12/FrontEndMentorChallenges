import Button from "./Button";

export default function Feature({ feature, num, selected }) {
  const { title, text, image } = feature;
  return (
    <>
      {selected === num && (
        <section className="flex flex-col items-center justify-center my-16 xl:flex-row ">
          <div className="relative flex flex-col items-center justify-center xl:w-full">
            <img
              src={image}
              alt={title}
              className="z-30 px-6 w-[95%] xl:w-[35rem]  "
            />
            <div className="absolute left-0 z-20 h-52 w-72 top-8 bg-sBlue rounded-tr-[6rem] rounded-br-[6rem] xl:rounded-br-[8rem] xl:top-20 xl:h-full xl:w-[60%]"></div>
          </div>
          <div className="flex flex-col items-center justify-center px-6 my-20 text-center xl:w-2/3 xl:text-left xl:items-start ">
            <h3 className="text-2xl font-medium xl:text-4xl">{title}</h3>
            <p className="mt-2 xl:w-[60%] xl:text-lg xl:py-6">{text}</p>
            <Button>More Info</Button>
          </div>
        </section>
      )}
    </>
  );
}
