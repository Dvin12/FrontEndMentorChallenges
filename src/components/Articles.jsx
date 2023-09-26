import Button from "./Button";

export default function Articles() {
  return (
    <>
      <article className="w-full h-full">
        <img
          src="./assets/images/bg-section-top-mobile-1.svg"
          alt="background"
          className="w-full xl:hidden "
        />
        <img
          src="./assets/images/bg-section-top-desktop-1.svg"
          alt="background"
          className="w-full xl:block hidden "
        />

        <section className="bg-blue w-full px-8 flex flex-col items-center justify-center gap-8 py-12 xl:flex-row xl:px-24 xl:py-5">
          <img
            src="./assets/images/illustration-grow-together.svg"
            alt=""
            className="xl:w-2/5"
          />
          <div className="xl:order-first w-full xl:px-8 flex flex-col gap-4 ">
            <span className="text-center text-xl tracking-wide xl:text-left xl:text-4xl font-extrabold font-Poppins">
              Grow Together
            </span>
            <p className="text-center font-OpenSans text-sm px-1 xl:text-left xl:px-0 xl:text-lg xl:w-[30rem] xl:pt-10">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </section>
        <img
          src="./assets/images/bg-section-bottom-mobile-1.svg"
          alt="background"
          className="w-full xl:hidden"
        />

        <img
          src="./assets/images/bg-section-bottom-desktop-1.svg"
          alt="background"
          className="w-full hidden xl:block"
        />
      </article>

      <article className="w-full h-full ">
        <section className=" w-full px-8 flex flex-col items-center justify-center gap-5 py-24 xl:flex-row xl:gap-[20%] xl:px-28 ">
          <img
            src="./assets/images/illustration-flowing-conversation.svg"
            alt="illustration"
            className="xl:w-2/5"
          />
          <div className=" w-full flex flex-col gap-4 pt-8 xl:pt-0  ">
            <span className="text-center text-xl tracking-wide xl:text-left xl:text-5xl font-Poppins font-extrabold ">
              Flowing Conversations
            </span>
            <p className="text-center font-OpenSans text-sm px-2 xl:px-0 xl:text-left xl:w-[40rem] xl:text-lg xl:pt-8">
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </div>
        </section>
      </article>

      <article className="w-full h-full">
        <img
          src="./assets/images/bg-section-top-mobile-2.svg"
          alt="background"
          className="w-full xl:hidden"
        />

        <img
          src="./assets/images/bg-section-top-desktop-2.svg"
          alt="background"
          className="w-full hidden xl:block"
        />

        <section className=" bg-blue w-full px-8 flex flex-col items-center justify-center gap-5 py-12 xl:flex-row xl:px-24 xl:py-5">
          <img
            src="./assets/images/illustration-your-users.svg"
            alt="illustration"
            className="xl:w-2/5"
          />
          <div className="xl:order-first w-full xl:px-8 flex flex-col gap-4 ">
            <span className="text-center  text-xl tracking-wide xl:text-left xl:text-4xl font-extrabold font-Poppins pt-4 xl:pt-0">
              Your Users
            </span>
            <p className="text-center font-OpenSans text-sm px-3 xl:text-left xl:px-0 xl:text-lg xl:w-[30rem] xl:pt-10">
              It takes no time at all to intergrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
        </section>
        <img
          src="./assets/images/bg-section-bottom-mobile-2.svg"
          alt="background"
          className="w-full xl:hidden"
        />

        <img
          src="./assets/images/bg-section-bottom-desktop-2.svg"
          alt="background"
          className="w-full hidden xl:block"
        />
      </article>

      <article className="w-full h-full flex items-center justify-center flex-col py-24 xl:py-6 ">
        <span className="text-center font-bold text-2xl px-4 xl:text-5xl xl:py-8">
          Ready To Build Your Community?
        </span>
        <Button />
      </article>
    </>
  );
}
