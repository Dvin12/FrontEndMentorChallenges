export default function Slider() {
  return (
    <section className="grid grid-cols-2 w-full align-middle px-44">
      <div className="flex flex-col  justify-center  z-20 w-full mx-20">
        <p className="text-4xl  font-thin leading-tight">
          "I've been intrested in coding for a while but never taken the jump.
          until now. I couldn't recommend this course enough. I'm now in the job
          of my dreams and so excited about the future."
        </p>
        <p className="mt-8 font-bold text-[hsl(240,38%,20%)] text-lg">
          Tanya Sinclair{" "}
          <span className="font-normal text-[hsl(240,18%,77%)]">
            UX Engineer
          </span>
        </p>
      </div>
      <div className="flex items-center relative">
        <img
          src="./assets/images/image-tanya.jpg"
          alt="Tanya"
          className="shadow-xl rounded-md"
        />
        <div className="flex flex-row gap-8 justify-between bg-white shadow-lg px-4 py-3 rounded-3xl absolute bottom-[-20px] left-20">
          <img src="./assets/images/icon-prev.svg" />
          <img src="./assets/images/icon-next.svg" />
        </div>
      </div>
    </section>
  );
}
