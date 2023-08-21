import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="w-full h-full mt-24 text-blue font-OpenSans relative ">
      <img
        src="./assets/images/bg-footer-top-mobile.svg"
        alt=""
        className=" w-full z-10 absolute -top-10 md:-top-24  "
      />

      <section className="bg-cyan px-6 py-12 flex flex-col gap-24 w-full z-30">
        <article className="z-30">
          <h4 className="font-bold tracking-wide text-lg ">NEWSLETTER</h4>
          <p className="text-sm tracking-wide my-4">
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We'll never send you spam or pass on your email address
          </p>
          <input type="text" className="py-3 rounded-md w-full my-4" />
          <div className="flex items-end justify-end">
            <button className="bg-pink px-10 py-3 rounded-md font-semibold tracking-wider">
              Subscribe
            </button>
          </div>
        </article>

        <article>
          <img
            src="./assets/images/logo.svg"
            alt="logo"
            className="invert  hue-rotate-[100deg] brightness-[20%]"
          />
          <p className="text-sm tracking-wide py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quam
            molestias cum laboriosam totam officia.
          </p>
          <div className="flex flex-col gap-4 py-8">
            <div className="flex items-center gap-4">
              <img src="./assets/images/icon-phone.svg" alt="" />
              <span>Phone: +1-543-123-4567</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="./assets/images/icon-email.svg" alt="" />
              <span>example@company.com</span>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="#">
              <AiFillFacebook size={30} />
            </a>
            <a href="#">
              <AiOutlineInstagram size={30} />
            </a>
            <a href="#">
              <AiFillTwitterSquare size={30} />
            </a>
          </div>
        </article>
      </section>
    </footer>
  );
}
