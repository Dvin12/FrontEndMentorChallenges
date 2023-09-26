export default function Footer() {
  return (
    <footer className="px-8 bg-cyan bg-opacity-10">
      <section className="flex flex-col items-center justify-center py-8 text-center xl:flex-row xl:w-full xl:justify-between xl:px-40 ">
        <img src="./assets/images/logo.svg" className="w-[5rem]" alt="" />
        <div className="flex flex-col gap-5 my-12 text-xl text-dBlue xl:flex-row xl:justify-evenly xl:w-full">
          <div className="hidden xl:flex xl:flex-col xl:items-start xl:gap-4">
            <a href="#" className="duration-200 hover:text-grayBlue">
              FAQs
            </a>
            <a href="#" className="duration-200 hover:text-grayBlue">
              Contact Us
            </a>
          </div>
          <div className="hidden xl:flex xl:flex-col xl:items-start xl:gap-4">
            <a href="#" className="duration-200 hover:text-grayBlue">
              Privacy Policy
            </a>
            <a href="#" className="duration-200 hover:text-grayBlue">
              Press Kit
            </a>
          </div>
          <a href="#" className="block xl:hidden">
            FAQs
          </a>
          <a href="#" className="block xl:hidden">
            Contact Us
          </a>
          <a href="#" className="block xl:hidden">
            Privacy Policy
          </a>
          <a href="#" className="block xl:hidden">
            Press Kit
          </a>
          <a href="#" className="duration-200 hover:text-grayBlue">
            Install Guide
          </a>
        </div>
        <div className="flex items-center justify-center gap-10">
          <a href="#" className="w-full">
            <img
              src="./assets/images/icon-facebook.svg"
              alt="facebook"
              className="xl:w-[2rem] filter hover:brightness-150 duration-200"
            />
          </a>
          <a href="#" className="w-full">
            <img
              src="./assets/images/icon-twitter.svg"
              alt="twitter"
              className="xl:w-[2rem] filter hover:brightness-150 duration-200"
            />
          </a>
          <a href="#" className="w-full">
            <img
              src="./assets/images/icon-instagram.svg"
              alt="instagram"
              className="xl:w-[2rem] filter hover:brightness-150 duration-200"
            />
          </a>
        </div>
      </section>
    </footer>
  );
}
