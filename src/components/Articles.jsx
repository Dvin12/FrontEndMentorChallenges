import Button from "./Button";

export default function Articles() {
  return (
    <>
      <article className="w-full h-full">
        <img
          src="./assets/images/bg-section-top-mobile-1.svg"
          alt="background"
          className="w-full"
        />
        <section className="bg-blue w-full px-8 flex flex-col items-center justify-center gap-8 py-12">
          <img src="./assets/images/illustration-grow-together.svg" alt="" />
          <span className="text-center font-bold text-xl tracking-wide">
            Grow Together
          </span>
          <p className="text-center font-OpenSans text-sm px-1">
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </section>
        <img
          src="./assets/images/bg-section-bottom-mobile-1.svg"
          alt="background"
          className="w-full"
        />
      </article>

      <article className="w-full h-full">
        <section className=" w-full px-8 flex flex-col items-center justify-center gap-5 py-24">
          <img
            src="./assets/images/illustration-flowing-conversation.svg"
            alt=""
          />
          <span className="text-center font-bold text-xl tracking-wide">
            Flowing Conversations
          </span>
          <p className="text-center font-OpenSans text-sm px-2">
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </section>
      </article>

      <article className="w-full h-full">
        <img
          src="./assets/images/bg-section-top-mobile-2.svg"
          alt="background"
          className="w-full"
        />
        <section className=" bg-blue w-full px-8 flex flex-col items-center justify-center gap-5 py-12">
          <img src="./assets/images/illustration-your-users.svg" alt="" />
          <span className="text-center font-bold text-xl tracking-wide">
            Your Users
          </span>
          <p className="text-center font-OpenSans text-sm px-3">
            It takes no time at all to intergrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </section>
        <img
          src="./assets/images/bg-section-bottom-mobile-2.svg"
          alt="background"
          className="w-full"
        />
      </article>

      <article className="w-full h-full flex items-center justify-center flex-col py-24 ">
        <span className="text-center font-bold text-2xl px-4">
          Ready To Build Your Community?
        </span>
        <Button />
      </article>
    </>
  );
}
