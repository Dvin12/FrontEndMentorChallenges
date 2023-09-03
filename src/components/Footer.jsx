export default function Footer() {
  return (
    <footer className="items-start justify-between w-full text-white bg-black py-14 xl:flex xl:h-full xl:px-40">
      <section className="flex flex-col items-center justify-center w-full xl:items-start">
        <img
          src="./assets/images/logo.svg"
          alt="loop studios"
          className="w-2/5 xl:w-1/3"
        />
        <article className="flex flex-col items-center justify-center gap-4 py-8 xl:flex-row xl:gap-8">
          <a
            href="#"
            className="relative flex flex-col items-center justify-center transition duration-300 group"
          >
            About
            <span className="w-0 h-[2px] bg-white absolute top-8 group-hover:w-3/4 transition-all duration-200 "></span>
          </a>
          <a
            href="#"
            className="relative flex flex-col items-center justify-center transition duration-300 group"
          >
            Careers
            <span className="w-0 h-[2px] bg-white absolute top-8 group-hover:w-3/4 transition-all duration-200 "></span>
          </a>
          <a
            href="#"
            className="relative flex flex-col items-center justify-center transition duration-300 group"
          >
            Events
            <span className="w-0 h-[2px] bg-white absolute top-8 group-hover:w-3/4 transition-all duration-200 "></span>
          </a>
          <a
            href="#"
            className="relative flex flex-col items-center justify-center transition duration-300 group"
          >
            Products
            <span className="w-0 h-[2px] bg-white absolute top-8 group-hover:w-3/4 transition-all duration-200 "></span>
          </a>
          <a
            href="#"
            className="relative flex flex-col items-center justify-center transition duration-300 group"
          >
            Support
            <span className="w-0 h-[2px] bg-white absolute top-8 group-hover:w-3/4 transition-all duration-200 "></span>
          </a>
        </article>
      </section>
      <section className="flex flex-col items-center justify-center xl:items-end xl:w-full xl:h-full">
        <article className="flex items-center gap-4 my-5 xl:my-0 ">
          <a
            href="#"
            className="relative flex flex-col items-center justify-center transition duration-300 group"
          >
            <img src="./assets/images/icon-facebook.svg" alt="logo" />
            <span className="w-0 h-[2px] bg-white absolute top-8 group-hover:w-3/4 transition-all duration-200 "></span>
          </a>
          <a
            href="#"
            className="relative flex flex-col items-center justify-center transition duration-300 group"
          >
            <img src="./assets/images/icon-twitter.svg" alt="logo" />
            <span className="w-0 h-[2px] bg-white absolute top-8 group-hover:w-3/4 transition-all duration-200 "></span>
          </a>
          <a
            href="#"
            className="relative flex flex-col items-center justify-center transition duration-300 group"
          >
            <img src="./assets/images/icon-pinterest.svg" alt="logo" />
            <span className="w-0 h-[2px] bg-white absolute top-8 group-hover:w-3/4 transition-all duration-200 "></span>
          </a>
          <a
            href="#"
            className="relative flex flex-col items-center justify-center transition duration-300 group"
          >
            <img src="./assets/images/icon-instagram.svg" alt="logo" />
            <span className="w-0 h-[2px] bg-white absolute top-8 group-hover:w-3/4 transition-all duration-200 "></span>
          </a>
        </article>
        <p className=" text-darkGray xl:py-12">
          &copy; 2023 Loopstudios. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
