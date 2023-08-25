export default function Testimonials() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-6 px-4 my-48 text-xs text-cyan">
      <article className="px-8 py-4 rounded-md shadow-lg bg-testimonials">
        <p className="leading-relaxed ">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex items-center gap-3 pt-4">
          <img
            src="./assets/images/profile-1.jpg"
            alt="profile"
            className="w-[15%] rounded-full"
          />
          <section className="flex flex-col text-xs">
            <span className="font-bold">Satish Patel</span>
            <span>Founder & CEO, Huddle</span>
          </section>
        </div>
      </article>

      <article className="px-8 py-4 rounded-md shadow-lg bg-testimonials">
        <p className="leading-relaxed ">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex items-center gap-3 pt-4">
          <img
            src="./assets/images/profile-2.jpg"
            alt="profile"
            className="w-[15%] rounded-full"
          />
          <section className="flex flex-col text-xs">
            <span className="font-bold">Bruce McKenzie</span>
            <span>Founder & CEO, Huddle</span>
          </section>
        </div>
      </article>

      <article className="px-8 py-4 rounded-md shadow-lg bg-testimonials">
        <p className="leading-relaxed ">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex items-center gap-3 pt-4">
          <img
            src="./assets/images/profile-3.jpg"
            alt="profile"
            className="w-[15%] rounded-full"
          />
          <section className="flex flex-col text-xs">
            <span className="font-bold">Iva Boyd</span>
            <span>Founder & CEO, Huddle</span>
          </section>
        </div>
      </article>
      <img
        src="./assets/images/bg-quotes.png"
        alt=""
        className="absolute -top-7 left-7 w-[10%] "
      />
    </section>
  );
}
