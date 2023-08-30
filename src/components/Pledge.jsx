export default function Pledge({ setActiveModal }) {
  function handleCloseModal() {
    setActiveModal(false);
  }

  return (
    <section className="w-full bg-[#fff] my-32 flex flex-col p-6 rounded-lg shadow-lg">
      <section className="flex items-center justify-between">
        <h6 className="text-lg font-semibold ">Back this project</h6>
        <button onClick={handleCloseModal}>
          <img src="./assets/images/icon-close-modal.svg" alt="" />
        </button>
      </section>
      <p className="pt-6 text-sm font-medium leading-relaxed text-cyan">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>

      <article className="border-[1px] rounded-lg border-cyan px-5 py-12 my-5">
        <section className="flex items-center gap-3">
          <button className="border-[1px] border-cyan w-7 h-7 rounded-full flex items-center justify-center bg-c ">
            <div className="w-4 h-4 rounded-full bg-dCyan"></div>
          </button>
          <h6 className="text-sm font-semibold">Pledge with no reward</h6>
        </section>
        <p className="mt-4 text-sm font-medium leading-relaxed text-cyan">
          Choose to support us without a reward if you simply believe in our
          project. As a backer, you will be signed up to receive product updates
          via email.
        </p>
      </article>

      <article className="border-[1px] rounded-lg border-cyan px-5 pt-12 my-4 ">
        <section className="flex items-center gap-3">
          <button className="border-[1px] border-cyan w-7 h-7 rounded-full flex items-center justify-center bg-c ">
            <div className="w-4 h-4 rounded-full bg-dCyan"></div>
          </button>
          <div className="flex flex-col justify-center gap-1">
            <h6 className="text-sm font-semibold">Bamboo Stand</h6>
            <p className="text-sm font-medium text-cyan">Pledge $25 or more</p>
          </div>
        </section>
        <p className="mt-4 text-sm font-medium leading-relaxed text-cyan">
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you'll be added to a special
          Backer member list.
        </p>
        <section className="flex items-center gap-2 py-6">
          <span className="text-2xl font-semibold ">101</span>
          <span className="font-medium text-cyan">left</span>
        </section>
      </article>

      <article className="border-[1px] rounded-lg border-cyan px-5 pt-12 my-4 ">
        <section className="flex items-center gap-3">
          <button className="border-[1px] border-cyan w-7 h-7 rounded-full flex items-center justify-center bg-c ">
            <div className="w-4 h-4 rounded-full bg-dCyan"></div>
          </button>
          <div className="flex flex-col justify-center gap-1">
            <h6 className="text-sm font-semibold">Black Edition Stand</h6>
            <p className="text-sm font-medium text-cyan">Pledge $75 or more</p>
          </div>
        </section>
        <p className="mt-4 text-sm font-medium leading-relaxed text-cyan">
          You get a Black Special Editon computer stand and a personal thank
          you. You'll be added to our Backer member list. Shipping is included.
        </p>
        <section className="flex items-center gap-2 py-6">
          <span className="text-2xl font-semibold ">64</span>
          <span className="font-medium text-cyan">left</span>
        </section>
      </article>

      <article className="border-[1px] rounded-lg border-cyan px-5 pt-12 my-4 opacity-50 ">
        <section className="flex items-center gap-3">
          <button className="border-[1px] border-cyan w-7 h-7 rounded-full flex items-center justify-center bg-c ">
            <div className="w-4 h-4 rounded-full bg-dCyan"></div>
          </button>
          <div className="flex flex-col justify-center gap-1">
            <h6 className="text-sm font-semibold">Mahogany Special Edition</h6>
            <p className="text-sm font-medium text-cyan">Pledge $200 or more</p>
          </div>
        </section>
        <p className="mt-4 text-sm font-medium leading-relaxed text-cyan">
          You get two Special Editon Mahogany stands, a Backer T-Shirt and a
          personal thank you. You'll be added to our Backer member list.
          Shipping is included
        </p>
        <section className="flex items-center gap-2 py-6">
          <span className="text-2xl font-semibold ">0</span>
          <span className="font-medium text-cyan">left</span>
        </section>
      </article>
    </section>
  );
}
