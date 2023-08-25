import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-footer text-cyan xl:px-20 xl:py-24 ">
      <img
        src="./assets/images/logo.svg"
        alt="logo"
        className="px-10 pt-80 xl:pt-36 "
      />
      <section className="flex flex-col w-full h-full xl:flex-row xl:justify-between">
        <article className="flex items-start justify-center pt-8 gap-7 px-7 xl:px-10 xl:w-[30rem]">
          <img src="./assets/images/icon-location.svg" alt="location" />
          <p className="-my-2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </article>

        <article className="flex flex-col gap-5 py-6 px-7 xl:px-0 xl:pt-8 xl:justify-start">
          <div className="flex items-center gap-6">
            <img src="./assets/images/icon-phone.svg" alt="phone icon" />
            <span className="text-sm">+1-543-123-4567</span>
          </div>
          <div className="flex items-center gap-6">
            <img src="./assets/images/icon-email.svg" alt="email icon" />
            <span className="text-sm">example@fylo.com</span>
          </div>
        </article>

        <article className="flex flex-col gap-4 py-14 px-7 xl:pt-8 xl:justify-start">
          <a href="#" className="hover:text-[#fff] duration-200">
            About Us
          </a>
          <a href="#" className="hover:text-[#fff] duration-200">
            Jobs
          </a>
          <a href="#" className="hover:text-[#fff] duration-200">
            Press
          </a>
          <a href="#" className="hover:text-[#fff] duration-200">
            Blog
          </a>
        </article>

        <article className="flex flex-col gap-3 px-7 xl:pt-8 xl:justify-start">
          <a href="#" className="hover:text-[#fff] duration-200">
            Contact Us
          </a>
          <a href="#" className="hover:text-[#fff] duration-200">
            Terms
          </a>
          <a href="#" className="hover:text-[#fff] duration-200">
            Privacy
          </a>
        </article>

        <article className="flex items-center justify-center gap-2 py-14 xl:pt-8 xl:justify-center xl:items-start">
          <a
            href="#"
            className="p-2 border rounded-full hover:text-[#4167ff] duration-200 "
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-2 duration-200 border rounded-full hover:text-blue "
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="p-2 duration-200 border rounded-full hover:text-lRed"
          >
            <FaInstagram />
          </a>
        </article>
      </section>
    </footer>
  );
}
