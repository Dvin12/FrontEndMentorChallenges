export default function Footer() {
  return (
    <footer className="w-full h-full bg-vLightGray px-6 relative overflow-hidden">
      <img
        src="./assets/images/bg-pattern-footer-mobile.svg"
        alt=""
        className="absolute -top-2 left-0 z-10"
      />
      <section
        className="flex items-center justify-center 
      flex-col mt-20 gap-8 pb-10 border-b border-b-grayBLue "
      >
        <img src="./assets/images/logo.svg" alt="" className="z-20" />
        <div className="flex gap-4 z-20">
          <img src="./assets/images/icon-facebook.svg" alt="" />
          <img src="./assets/images/icon-twitter.svg" alt="" />
          <img src="./assets/images/icon-pinterest.svg" alt="" />
          <img src="./assets/images/icon-instagram.svg" alt="" />
        </div>
      </section>
      <section className="py-10">
        <article className="flex flex-col items-center justify-center gap-6">
          <span className="uppercase text-grayBLue font-bold tracking-widest">
            Our Company
          </span>
          <div className="flex flex-col items-center justify-center gap-2 text-darkViolet font-bold tracking-widest">
            <a href="#">HOW WE WORK</a>
            <a href="#">WHY INSURE?</a>
            <a href="#">CHECK PRICE</a>
            <a href="#">REVIEWS</a>
          </div>
        </article>
        <article className="mt-7 flex flex-col items-center justify-center gap-6 ">
          <span className="uppercase text-grayBLue font-bold tracking-widest">
            HELP ME
          </span>
          <div className="flex flex-col items-center justify-center  gap-2 text-darkViolet font-bold tracking-widest">
            <a href="#">FAQ</a>
            <a href="#">TERSM OF USE</a>
            <a href="#">PRIVACY POLICY</a>
            <a href="#">COOKIES</a>
          </div>
        </article>
        <article className="flex flex-col items-center justify-center mt-8 gap-6">
          <span className="uppercase text-grayBLue font-bold tracking-widest">
            CONTACT
          </span>
          <div className="flex flex-col items-center justify-center gap-2 text-darkViolet font-bold tracking-widest ">
            <a href="#">SALES</a>
            <a href="#">SUPPORT</a>
            <a href="#">LIVE CHAT</a>
          </div>
        </article>

        <article className=" flex flex-col items-center justify-center mt-8 gap-6">
          <span className="uppercase text-grayBLue font-bold tracking-widest">
            OTHERS
          </span>
          <div className="flex flex-col items-center justify-center gap-2 text-darkViolet font-bold tracking-widest">
            <a href="#">CAREERS</a>
            <a href="#">PRESS</a>
            <a href="#">LICENSES</a>
          </div>
        </article>
      </section>
    </footer>
  );
}
