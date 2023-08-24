import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-10 py-16 bg-dBlue text-gBlue xl:flex xl:items-center xl:justify-between xl:py-20 xl:px-20 xl:pr-60 ">
      <section className="flex flex-col items-start gap-12">
        <img
          src="./assets/images/logo.svg"
          alt="logo"
          className="invert-[98%] sepia-[62%] saturate-[184%] hue-rotate-[230deg] brightness-[20%] contrast-[100%]"
        />
        <div>
          <span className="flex items-center gap-5 pb-2">
            <img src="./assets/images/icon-phone.svg" alt="phone icon" />
            Phone: +1-543-123-4567
          </span>
          <span className="flex items-center gap-5">
            <img src="./assets/images/icon-email.svg" alt="email icon" />
            example@fylo.com
          </span>
        </div>
      </section>

      <section className="flex flex-col gap-4 pt-14 xl:pt-20">
        <a href="#" className="duration-200 hover:text-blue">
          About Us
        </a>
        <a href="#" className="duration-200 hover:text-blue">
          Jobs
        </a>
        <a href="#" className="duration-200 hover:text-blue">
          Press
        </a>
        <a href="#" className="duration-200 hover:text-blue">
          Blog
        </a>
      </section>

      <section className="flex flex-col gap-4 py-10 xl:pt-20">
        <a href="#" className="duration-200 hover:text-blue">
          Contact Us
        </a>
        <a href="#" className="duration-200 hover:text-blue">
          Terms
        </a>
        <a href="#" className="duration-200 hover:text-blue">
          Privacy
        </a>
      </section>

      <section className="flex items-center justify-center gap-3">
        <a
          href="#"
          className="border-[1px] rounded-full p-[6px] hover:text-[#3a5fae]  duration-200"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="border-[1px] rounded-full p-[6px] hover:text-blue duration-200"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="border-[1px] rounded-full p-[6px] hover:text-[#fa5549] duration-200"
        >
          <FaInstagram />
        </a>
      </section>
    </footer>
  );
}
