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
    <article className="my-6 bg-[#fff] w-full shadow-md rounded-md items-start px-6 py-8 flex flex-col justify-center xl:w-auto xl:px-12 xl:py-12">
      <About />

      <section className="border-[1px] rounded-lg w-full px-5 py-7 mb-4 font-bold border-dGray xl:mb-8 xl:py-10 xl:px-8">
        <div className="items-center justify-between block xl:flex">
          <h6 className="xl:text-xl">Bamboo Stand</h6>
          <span className="py-1 text-sm text-dGray xl:text-base ">
            Pledge $25 or more
          </span>
        </div>
        <p className="py-6 text-sm font-normal leading-relaxed text-dGray xl:text-lg">
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you'll be added to a special
          Backer member list.
        </p>
        <div className="items-center justify-between xl:flex">
          <section className="flex items-center justify-start w-full gap-1 ">
            <span className="text-4xl">{bambooLeft}</span>
            <span className="pt-1 font-normal">left</span>
          </section>
          <button
            className="px-8 py-3 rounded-full mt-7 bg-cyan text-[#fff] xl:px-2 xl:py-4 xl:mt-0 xl:w-1/3  "
            onClick={handleBamboo}
          >
            Select Reward
          </button>
        </div>
      </section>

      <section className="border-[1px] rounded-lg w-full px-5 py-7 mb-4 font-bold border-dGray xl:mb-8 xl:py-10 xl:px-8">
        <div className="items-center justify-between block xl:flex">
          <h6 className="xl:text-xl">Black Edition Stand</h6>
          <span className="py-1 text-sm text-dGray xl:text-base ">
            Pledge $75 or more
          </span>
        </div>
        <p className="py-6 text-sm font-normal leading-relaxed text-dGray xl:text-lg">
          You get a Black Special Edition computer stand and a personal thank
          you. You'll be added to our Backer member list. Shipping is included.
        </p>
        <div className="items-center justify-between xl:flex">
          <section className="flex items-center justify-start w-full gap-1">
            <span className="text-4xl">{blackLeft}</span>
            <span className="pt-1 font-normal">left</span>
          </section>
          <button
            className="px-8 py-3 rounded-full mt-7 bg-cyan text-[#fff] xl:px-2 xl:py-4 xl:mt-0 xl:w-1/3"
            onClick={handleBlack}
          >
            Select Reward
          </button>
        </div>
      </section>

      <section className="border-[1px] rounded-lg w-full px-5 py-7 font-bold border-dGray opacity-40 xl:mb-8 xl:py-10 xl:px-8 ">
        <div className="items-center justify-between block xl:flex">
          <h6 className="xl:text-xl">Mahogany Special Edition</h6>
          <span className="py-1 text-sm text-dGray xl:text-base ">
            Pledge $200 or more
          </span>
        </div>
        <p className="py-6 text-sm font-normal leading-relaxed text-dGray xl:text-lg">
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You'll be added to our Backer member list.
          Shipping is included.
        </p>
        <div className="items-center justify-between xl:flex">
          <section className="flex items-center justify-start w-full gap-1">
            <span className="text-4xl">0</span>
            <span className="pt-1 font-normal">left</span>
          </section>
          <button
            className="px-8 py-3 rounded-full mt-7 bg-cyan text-[#fff]  cursor-not-allowed xl:px-2 xl:py-4 xl:mt-0 xl:w-1/3"
            disabled
          >
            Out of Stock
          </button>
        </div>
      </section>
    </article>
  );
}
