export default function Testimonials() {
  return (
    <section className="flex flex-col items-center justify-center gap-16 px-6 py-16 font-extrabold ">
      <h3 className="text-lg tracking-widest text-mCyan font-fraunces">
        CLIENT TESTIMONIALS
      </h3>
      <article className="flex flex-col items-center justify-center">
        <img
          src="./assets/images/image-emily.jpg"
          alt="emily"
          className="w-1/5 rounded-full"
        />
        <p className="py-10 text-lg leading-relaxed text-center text-dCyan ">
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </p>
        <span className="text-xl font-fraunces">Emily R.</span>
        <p className="pt-1 text-sm text-grayBlue">Marketing Director</p>
      </article>

      <article className="flex flex-col items-center justify-center">
        <img
          src="./assets/images/image-thomas.jpg"
          alt="emily"
          className="w-1/5 rounded-full"
        />
        <p className="py-10 text-lg leading-relaxed text-center text-dCyan ">
          Sunnyside's enthusiasm coupled with their keen interest in our brand's
          success made it a satisfying and enjoyable experience.
        </p>
        <span className="text-xl font-fraunces">Thomas S.</span>
        <p className="pt-1 text-sm text-grayBlue">Chief Operating Officer</p>
      </article>

      <article className="flex flex-col items-center justify-center">
        <img
          src="./assets/images/image-jennie.jpg"
          alt="emily"
          className="w-1/5 rounded-full"
        />
        <p className="py-10 text-lg leading-relaxed text-center text-dCyan ">
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </p>
        <span className="text-xl font-fraunces">Jennie F.</span>
        <p className="pt-1 text-sm text-grayBlue">Business Owner</p>
      </article>
    </section>
  );
}
