import Testimonial from "./Testimonial";

export default function Article() {
  return (
    <article className="flex flex-col items-center justify-center w-full gap-20 p-6 xl:py-20 xl:px-20 xl:flex-row xl:justify-between">
      <img
        src="./assets/images/illustration-2.svg"
        alt="illustration"
        className="xl:w-2/5"
      />
      <section className="flex flex-col items-center justify-center xl:order-first xl:items-start xl:justify-between">
        <h3 className="font-bold tracking-wide text-center font-Raleway xl:text-4xl">
          Stay productive, wherever you are
        </h3>
        <p className="text-sm py-7 xl:text-base xl:pt-10 xl:w-[34rem]">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs. <br /> <br />
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required!
        </p>
        <a
          href="#"
          className="flex items-center justify-center gap-1 text-sm tracking-wide border-b-[1px] pb-1 text-cyan xl:text-base hover:opacity-70 duration-200  "
        >
          See how Fylo works
          <img
            src="./assets/images/icon-arrow.svg"
            alt="icon"
            className="xl:w-[20px]"
          />
        </a>

        <Testimonial />
      </section>
    </article>
  );
}
