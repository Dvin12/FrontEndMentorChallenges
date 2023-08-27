export default function Testimonials() {
  return (
    <section className="w-full h-full px-6 py-16 font-extrabold xl:py-40 xl:px-40 ">
      <h3 className="text-lg tracking-widest text-center text-mCyan font-fraunces xl:text-xl">
        CLIENT TESTIMONIALS
      </h3>
      <section className="flex flex-col items-center justify-center gap-16 font-extrabold mt-14 xl:flex-row xl:mt-16 ">
        <article className="flex flex-col items-center justify-center xl:gap-5 ">
          <img
            src="./assets/images/image-emily.jpg"
            alt="emily"
            className="w-1/5 rounded-full xl:w-[5rem]"
          />
          <p className="py-10 text-lg leading-relaxed text-center text-dCyan xl:leading-normal 2xl:px-10">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <span className="text-xl font-fraunces">Emily R.</span>
          <p className="pt-1 text-sm text-grayBlue">Marketing Director</p>
        </article>

        <article className="flex flex-col items-center justify-center xl:gap-5">
          <img
            src="./assets/images/image-thomas.jpg"
            alt="thomas"
            className="w-1/5 rounded-full xl:w-[5rem]"
          />
          <p className="py-10 text-lg leading-relaxed text-center text-dCyan xl:leading-normal 2xl:px-10 ">
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <span className="text-xl font-fraunces">Thomas S.</span>
          <p className="pt-1 text-sm text-grayBlue">Chief Operating Officer</p>
        </article>

        <article className="flex flex-col items-center justify-center xl:gap-5">
          <img
            src="./assets/images/image-jennie.jpg"
            alt="jennie"
            className="w-1/5 rounded-full xl:w-[5rem]"
          />
          <p className="py-10 text-lg leading-relaxed text-center text-dCyan xl:leading-normal 2xl:px-10 ">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <span className="text-xl font-fraunces">Jennie F.</span>
          <p className="pt-1 text-sm text-grayBlue">Business Owner</p>
        </article>
      </section>
    </section>
  );
}
