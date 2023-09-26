export default function Testimonial() {
  return (
    <article className="relative flex flex-col items-start justify-between gap-4 p-6 my-6 rounded w-[95%] bg-[#fff] text-dBlue shadow-lg xl:w-[50%]">
      <img src="./assets/images/icon-quotes.svg" alt="" />
      <p className="text-sm">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div className="flex items-center w-full gap-2">
        <img
          src="./assets/images/avatar-testimonial.jpg"
          alt="Kyle Burton"
          className="w-[15%] rounded-full"
        />
        <div className="flex flex-col justify-center text-sm">
          <span className="font-bold ">Kyle Burton</span>
          <span className="text-xs">Founder & CEO, Huddle</span>
        </div>
      </div>
    </article>
  );
}
