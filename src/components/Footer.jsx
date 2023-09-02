export default function Footer() {
  return (
    <footer className="w-full bg-black text-white   py-14">
      <section className="flex flex-col items-center justify-center w-full">
        <img
          src="./assets/images/logo.svg"
          alt="loop studios"
          className="w-2/5"
        />
        <article className="flex flex-col items-center justify-center py-8 gap-4">
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Events</a>
          <a href="#">Products</a>
          <a href="#">Support</a>
        </article>
      </section>
      <section className="flex flex-col items-center justify-center">
        <article className="flex gap-4 my-5">
          <a href="#">
            <img src="./assets/images/icon-facebook.svg" alt="" />
          </a>
          <a href="#">
            <img src="./assets/images/icon-twitter.svg" alt="" />
          </a>
          <a href="#">
            <img src="./assets/images/icon-pinterest.svg" alt="" />
          </a>
          <a href="#">
            <img src="./assets/images/icon-instagram.svg" alt="" />
          </a>
        </article>
        <p className=" text-darkGray">
          &copy; 2023 Loopstudios. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
