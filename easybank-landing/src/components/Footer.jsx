import Button from "./Button";

export default function Footer() {
  return (
    <footer className=" bg-dBlue py-8 text-veryLighG text-opacity-80">
      <section className="flex flex-col items-center justify-center gap-8 ">
        <div className="relative">
          <img src="./images/logo.svg" alt="" />
          <span className="absolute -top-1 left-8 font-bold text-xl text-white tracking-wide">
            easybank
          </span>
        </div>
        <ul className="flex items-center justify-center gap-4 mb-4 ">
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
      <section>
        <ul className="flex flex-col items-center justify-center gap-2 my-4  ">
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
        <ul className="flex flex-col items-center justify-center gap-2 mt-2">
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
      <section className="flex flex-col items-center justify-center mt-8 gap-6">
        <Button>Request Invite</Button>
        <p className=" text-gBlue">&copy; Easybank. All Rights Reserved</p>
      </section>
    </footer>
  );
}
