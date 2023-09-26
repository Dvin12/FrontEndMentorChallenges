export default function Article() {
  return (
    <article className="flex flex-col justify-center my-36 text-cyan xl:flex-row xl:px-20 xl:gap-20 xl:my-16 ">
      <img src="./assets/images/illustration-stay-productive.png" alt="" />
      <div className="flex flex-col justify-center ">
        <h4 className="pt-10 text-lg font-bold tracking-wide text-center font-raleway xl:text-left xl:text-4xl xl:w-[22rem] xl:tracking-wider text-[#fff]">
          Stay productive, wherever you are
        </h4>
        <p className="py-4 text-sm xl:py-7 xl:text-base xl:w-[35rem]">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs. <br />
          <br />
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          href="#"
          className="text-sm border-b-[2px] w-fit pb-1 flex items-center justify-center gap-1 opacity-80 xl:text-base hover:brightness-125 duration-300"
        >
          See how Fylo works
          <img src="./assets/images/icon-arrow.svg" alt="arrow" />
        </a>
      </div>
    </article>
  );
}
