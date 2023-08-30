import About from "./About";

export default function Reward({
  setBamboo,
  setBlack,
  setActiveModal,
  bambooLeft,
  blackLeft,
}) {
  function handleBamboo() {
    setBamboo(true);
    setActiveModal(true);
  }

  function handleBlack() {
    setBlack(true);
    setActiveModal(true);
  }

  return (
    <article className="my-6 bg-[#fff] w-full shadow-md rounded-md items-start px-6 py-8 flex flex-col justify-center">
      <About />

      <section className="border-[1px] rounded-lg w-full px-5 py-7 mb-4 font-bold border-dGray">
        <h6>Bamboo Stand</h6>
        <span className="py-1 text-sm text-dGray ">Pledge $25 or more</span>
        <p className="py-6 text-sm font-normal leading-relaxed text-dGray">
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you'll be added to a special
          Backer member list.
        </p>
        <section className="flex items-center justify-start w-full gap-1">
          <span className="text-4xl">{bambooLeft}</span>
          <span className="pt-1 font-normal">left</span>
        </section>
        <button
          className="px-8 py-3 rounded-full mt-7 bg-cyan text-[#fff] "
          onClick={handleBamboo}
        >
          Select Reward
        </button>
      </section>

      <section className="border-[1px] rounded-lg w-full px-5 py-7 mb-4 font-bold border-dGray">
        <h6>Black Edition Stand</h6>
        <span className="py-1 text-sm text-dGray ">Pledge $75 or more</span>
        <p className="py-6 text-sm font-normal leading-relaxed text-dGray">
          You get a Black Special Edition computer stand and a personal thank
          you. You'll be added to our Backer member list. Shipping is included.
        </p>
        <section className="flex items-center justify-start w-full gap-1">
          <span className="text-4xl">{blackLeft}</span>
          <span className="pt-1 font-normal">left</span>
        </section>
        <button
          className="px-8 py-3 rounded-full mt-7 bg-cyan text-[#fff]"
          onClick={handleBlack}
        >
          Select Reward
        </button>
      </section>

      <section className="border-[1px] rounded-lg w-full px-5 py-7 font-bold border-dGray opacity-40 ">
        <h6>Mahogany Special Edition</h6>
        <span className="py-1 text-sm text-dGray ">Pledge $200 or more</span>
        <p className="py-6 text-sm font-normal leading-relaxed text-dGray">
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You'll be added to our Backer member list.
          Shipping is included.
        </p>
        <section className="flex items-center justify-start w-full gap-1">
          <span className="text-4xl">0</span>
          <span className="pt-1 font-normal">left</span>
        </section>
        <button
          className="px-8 py-3 rounded-full mt-7 bg-cyan text-[#fff] "
          disabled
        >
          Out of Stock
        </button>
      </section>
    </article>
  );
}
