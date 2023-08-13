import Button from "./Button";

export default function SliderItem({
  testimonials,
  index,
  selected,
  handleClick,
}) {
  const { name, position, text, image } = testimonials;

  return (
    <section
      className={`  w-full h-full  ${
        selected !== index ? "hidden" : "grid"
      } grid-rows-1 lg:grid-rows-0 lg:grid-cols-2 lg:px-24`}
    >
      <div className="  z-20  order-last flex items-center lg:items-start justify-center w-full flex-col my-16 lg:my-0 lg:mx-0 lg:order-first ">
        <p className=" text-lg lg:text-4xl lg:font-thin  lg:leading-tight lg:text-left  text-center lg:px-0 lg:w-[800px] px-4 text-[hsl(240,38%,20%)] ">
          {selected === index ? `“ ${text} ”` : ""}
        </p>
        <p className=" text-[hsl(240,38%,20%)] text-lg flex flex-col justify-center lg:inline-block items-center pt-12 lg:pt-0 lg:mt-8 font-[700]">
          {selected === index ? name : ""}{" "}
          <span className="font-[500] text-[hsl(240,18%,77%)] ">
            {selected === index ? position : ""}
          </span>
        </p>
      </div>
      <div className="  relative flex justify-center  items-center z-10 ">
        {selected === index ? (
          <>
            <img
              src={image}
              alt="Tanya"
              className="shadow-xl rounded-md w-[85%] lg:w-auto  "
            />
            <Button handleClick={handleClick} />
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
