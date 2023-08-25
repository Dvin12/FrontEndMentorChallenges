import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import NewsLetter from "./NewsLetter";

export default function Footer() {
  return (
    <footer className="relative bg-footer text-cyan">
      <img src="./assets/images/logo.svg" alt="logo" className="px-10 pt-96" />
      <section className="flex flex-col w-full h-full">
        <article className="flex items-start justify-center pt-8 gap-7 px-7">
          <img src="./assets/images/icon-location.svg" alt="location" />
          <p className="-my-2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </article>

        <article className="flex flex-col gap-5 py-6 px-7">
          <div className="flex items-center gap-6">
            <img src="./assets/images/icon-phone.svg" alt="phone icon" />
            <span className="text-sm">+1-543-123-4567</span>
          </div>
          <div className="flex items-center gap-6">
            <img src="./assets/images/icon-email.svg" alt="email icon" />
            <span className="text-sm">example@fylo.com</span>
          </div>
        </article>

        <article className="flex flex-col gap-4 py-14 px-7">
          <a href="#">About Us</a>
          <a href="#">Jobs</a>
          <a href="#">Press</a>
          <a href="#">Blog</a>
        </article>

        <article className="flex flex-col gap-3 px-7">
          <a href="#">Contact Us</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </article>

        <article className="flex items-center justify-center gap-2 py-14">
          <a href="#" className="p-2 border rounded-full ">
            <FaFacebookF />
          </a>
          <a href="#" className="p-2 border rounded-full ">
            <FaTwitter />
          </a>
          <a href="#" className="p-2 border rounded-full">
            <FaInstagram />
          </a>
        </article>
      </section>
    </footer>
  );
}
