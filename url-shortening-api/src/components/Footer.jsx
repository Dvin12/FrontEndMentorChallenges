export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-10 font-medium text-center bg-veryDarkViolet gap-7 text-Gray xl:flex-row xl:justify-between xl:items-start xl:px-40 xl:text-left xl:py-16">
      <section>
        <img
          src="./assets/images/logo.svg"
          alt="company name"
          className=" grayscale brightness-[500%]"
        />
      </section>
      <section>
        <span className="text-[#fff] font-bold tracking-wide">Features</span>
        <ul className="flex flex-col gap-2 my-3">
          <li>
            <a href="#" className="duration-200 hover:text-gViolet">
              Link Shortening
            </a>
          </li>
          <li>
            <a href="#" className="duration-200 hover:text-gViolet">
              Branded Links
            </a>
          </li>
          <li>
            <a href="#" className="duration-200 hover:text-gViolet">
              Analytics
            </a>
          </li>
        </ul>
      </section>
      <section>
        <span className="text-[#fff] font-bold tracking-wide">Resources</span>
        <ul className="flex flex-col gap-2 my-3">
          <li>
            <a href="#" className="duration-200 hover:text-gViolet">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="duration-200 hover:text-gViolet">
              Developers
            </a>
          </li>
          <li>
            <a href="#" className="duration-200 hover:text-gViolet">
              Support
            </a>
          </li>
        </ul>
      </section>
      <section>
        <span className="text-[#fff] font-bold tracking-wide">Company</span>
        <ul className="flex flex-col gap-2 my-3">
          <li>
            <a href="#" className="duration-200 hover:text-gViolet">
              About
            </a>
          </li>
          <li>
            <a href="#" className="duration-200 hover:text-gViolet">
              Our Team
            </a>
          </li>
          <li>
            <a href="#" className="duration-200 hover:text-gViolet">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="duration-200 hover:text-gViolet">
              Contact
            </a>
          </li>
        </ul>
      </section>
      <section className="flex items-center justify-center gap-6">
        <a href="#">
          <img
            src="./assets/images/icon-facebook.svg"
            alt="icon"
            className="duration-200 hover:opacity-50"
          />
        </a>
        <a href="#">
          <img
            src="./assets/images/icon-twitter.svg"
            alt="icon"
            className="duration-200 hover:opacity-50"
          />
        </a>
        <a href="#">
          <img
            src="./assets/images/icon-pinterest.svg"
            alt="icon"
            className="duration-200 hover:opacity-50"
          />
        </a>
        <a href="#">
          <img
            src="./assets/images/icon-instagram.svg"
            alt="icon"
            className="duration-200 hover:opacity-50"
          />
        </a>
      </section>
    </footer>
  );
}
