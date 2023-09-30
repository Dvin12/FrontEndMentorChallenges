import Button from "./Button";

export default function Footer() {
  return (
    <footer className="py-8 bg-dBlue text-veryLighG text-opacity-80 xl:flex xl:w-full xl:items-start xl:justify-between xl:px-40 xl:py-12">
      <section className="flex flex-col items-center justify-center gap-8 xl:items-start">
        <div className="relative">
          <img src="./images/logo.svg" alt="" />
          <span className="absolute text-xl font-bold tracking-wide text-white -top-1 left-8">
            easybank
          </span>
        </div>
        <ul className="flex items-center justify-center gap-4 mb-4 xl:mb-0 xl:justify-end xl:mt-2 ">
          <li>
            <a href="#">
              <img
                src="./images/icon-facebook.svg"
                alt=""
                className="w-[25px]"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="./images/icon-youtube.svg"
                alt=""
                className="w-[25px]"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="./images/icon-twitter.svg"
                alt=""
                className="w-[25px]"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="./images/icon-pinterest.svg"
                alt=""
                className="w-[25px]"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="./images/icon-instagram.svg"
                alt=""
                className="w-[25px]"
              />
            </a>
          </li>
        </ul>
      </section>
      <section className="xl:pl-36 xl:flex xl:justify-start xl:flex-1 xl:gap-32">
        <ul className="flex flex-col items-center justify-center gap-2 my-4 xl:items-start xl:my-0">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul className="flex flex-col items-center justify-center gap-2 mt-2 xl:items-start xl:mt-0">
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center justify-center gap-6 mt-8 xl:mt-0 xl:items-end">
        <Button>Request Invite</Button>
        <p className=" text-gBlue">&copy; Easybank. All Rights Reserved</p>
      </section>
    </footer>
  );
}
