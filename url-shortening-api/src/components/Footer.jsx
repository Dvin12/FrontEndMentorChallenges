export default function Footer() {
  return (
    <footer className=" bg-veryDarkViolet flex flex-col items-center justify-center text-center py-10 gap-7 text-Gray font-medium">
      <section>
        <img
          src="./images/logo.svg"
          alt="company name"
          className=" grayscale brightness-[500%]"
        />
      </section>
      <section>
        <span className="text-[#fff] font-bold tracking-wide">Features</span>
        <ul className="my-3 flex flex-col gap-2">
          <li>
            <a href="#">Link Shortening</a>
          </li>
          <li>
            <a href="#">Branded Links</a>
          </li>
          <li>
            <a href="#">Analytics</a>
          </li>
        </ul>
      </section>
      <section>
        <span className="text-[#fff] font-bold tracking-wide">Resources</span>
        <ul className="my-3 flex flex-col gap-2">
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </section>
      <section>
        <span className="text-[#fff] font-bold tracking-wide">Company</span>
        <ul className="my-3 flex flex-col gap-2">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </section>
      <section className="flex gap-6 items-center justify-center">
        <a href="#">
          <img src="./images/icon-facebook.svg" alt="icon" />
        </a>
        <a href="#">
          <img src="./images/icon-twitter.svg" alt="icon" />
        </a>
        <a href="#">
          <img src="./images/icon-pinterest.svg" alt="icon" />
        </a>
        <a href="#">
          <img src="./images/icon-instagram.svg" alt="icon" />
        </a>
      </section>
    </footer>
  );
}
