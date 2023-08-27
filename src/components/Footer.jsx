export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-full px-10 gap-11 py-14 bg-mCyan brightness-150">
      <img
        src="./assets/images/logo.svg"
        alt="logo"
        className="flex w-2/3 filter invert-[72%] "
      />
      <section className="flex items-center justify-between w-full text-xl text-dCyan ">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
      </section>
      <section className="flex py-10 gap-7">
        <a href="#">
          <img
            src="./assets/images/icon-facebook.svg"
            alt="facebook"
            className="filter saturate-[1%]  brightness-[65%] "
          />
        </a>
        <a href="#">
          <img
            src="./assets/images/icon-instagram.svg"
            alt="instagram"
            className="filter saturate-[1%]  brightness-[65%] "
          />
        </a>
        <a href="#">
          <img
            src="./assets/images/icon-twitter.svg"
            alt="twitter"
            className="filter saturate-[1%]  brightness-[65%] "
          />
        </a>
        <a href="#">
          <img
            src="./assets/images/icon-pinterest.svg"
            alt="pinterest"
            className="filter saturate-[1%]  brightness-[65%] "
          />
        </a>
      </section>
    </footer>
  );
}
