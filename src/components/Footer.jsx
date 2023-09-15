export default function Footer() {
  return (
    <footer className="w-full py-10 bg-vDarkBlue text-[#FFF] text-opacity-90 tracking-widest ">
      <section className="flex flex-col items-center justify-center gap-6 ">
        <div className="relative mb-3">
          <img src="./assets/images/logo-bookmark.svg" alt="company name" />
          <span className="   z-30 absolute top-0.5 left-9 font-medium tracking-wider ">
            BOOKMARK
          </span>
        </div>
        <a href="#">FEATURES</a>
        <a href="#">PRICING</a>
        <a href="#">CONTACT</a>
      </section>

      <section className="flex items-center justify-center gap-10 mt-10">
        <img src="./assets/images/icon-facebook.svg" alt="facebook" />
        <img src="./assets/images/icon-twitter.svg" alt="twitter" />
      </section>
    </footer>
  );
}
