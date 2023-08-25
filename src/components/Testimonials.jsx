export default function Testimonials() {
  return (
    <section className="relative z-30 flex flex-col items-center justify-center gap-6 px-4 my-48 text-xs text-cyan xl:flex-row xl:gap-8 xl:px-28 xl:text-sm xl:mb-60 ">
      <article className="px-8 py-4 rounded-md shadow-lg xl:z-30 bg-testimonials xl:py-12 ">
        <p className="leading-relaxed ">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex items-center gap-3 pt-4">
          <img
            src="./assets/images/profile-1.jpg"
            alt="Satish Patel picture"
            className="w-[15%] rounded-full"
          />
          <section className="flex flex-col text-xs">
            <span className="font-bold text-[#fff]">Satish Patel</span>
            <span>Founder & CEO, Huddle</span>
          </section>
        </div>
      </article>

      <article className="px-8 py-4 rounded-md shadow-lg bg-testimonials xl:py-12">
        <p className="leading-relaxed ">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex items-center gap-3 pt-4">
          <img
            src="./assets/images/profile-2.jpg"
            alt="Bruce McKenzie picture"
            className="w-[15%] rounded-full"
          />
          <section className="flex flex-col text-xs">
            <span className="font-bold text-[#fff]">Bruce McKenzie</span>
            <span>Founder & CEO, Huddle</span>
          </section>
        </div>
      </article>

      <article className="px-8 py-4 rounded-md shadow-lg bg-testimonials xl:py-12">
        <p className="leading-relaxed ">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex items-center gap-3 pt-4">
          <img
            src="./assets/images/profile-3.jpg"
            alt="Iva Boyd picture"
            className="w-[15%] rounded-full"
          />
          <section className="flex flex-col text-xs">
            <span className="font-bold text-[#fff]">Iva Boyd</span>
            <span>Founder & CEO, Huddle</span>
          </section>
        </div>
      </article>
      <img
        src="./assets/images/bg-quotes.png"
        alt="qoutes icon"
        className="absolute -top-7 left-8 w-[2rem] xl:w-[4rem] xl:left-24 xl:-top-10 z-10 "
      />
    </section>
  );
}
