export default function Success({ setSubsribed, email }) {
  function handleDismiss() {
    setSubsribed(!true);
  }

  return (
    <section className="md:w-[500px] md:h-[500px] h-full md:rounded-[30px] shadow-2xl bg-white">
      <article className="flex flex-col items-start  justify-between py-40 md:py-12 px-16 gap-8  ">
        <img src="./assets/images/icon-success.svg" alt="" />
        <h1 className="text-6xl font-bold">Thanks for subscribing!</h1>
        <p className="w-full">
          A confirmation email has been sent to{" "}
          <span className="font-bold lowercase">{email}</span>. Please open it
          and click the button inside to confirm your subscription.
        </p>
        <section className="w-full h-[280px] grid grid-cols-1 place-content-end md:h-auto">
          <button
            className="w-full p-4 bg-[hsl(234,29%,20%)] text-white font-bold rounded-lg hover:bg-gradient-to-r from-[#FE5475] to-[#FE6741] hover:shadow-2xl "
            onClick={() => handleDismiss()}
          >
            Dismiss message
          </button>
        </section>
      </article>
    </section>
  );
}
