export default function Footer() {
  return (
    <footer className="px-8 bg-cyan bg-opacity-10">
      <section className="flex flex-col items-center justify-center py-8 text-center">
        <img src="./assets/images/logo.svg" className="w-[5rem]" alt="" />
        <div className="flex flex-col gap-5 my-12 text-xl text-dBlue">
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Press Kit</a>
          <a href="#">Install Guide</a>
        </div>
        <div className="flex items-center justify-center gap-10">
          <a href="#">
            <img src="./assets/images/icon-facebook.svg" alt="" />
          </a>
          <a href="#">
            <img src="./assets/images/icon-twitter.svg" alt="" />
          </a>
          <a href="#">
            <img src="./assets/images/icon-instagram.svg" alt="" />
          </a>
        </div>
      </section>
    </footer>
  );
}
