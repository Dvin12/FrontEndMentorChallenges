export default function Back({ setActiveModal }) {
  function handleBackProject() {
    setActiveModal(true);
  }

  return (
    <article className=" z-40 flex flex-col items-center justify-between w-full px-6 py-12 text-center shadow-md -mt-14  bg-[#fff] rounded-md ">
      <img
        src="./assets/images/logo-mastercraft.svg"
        alt=""
        className="absolute -top-[5.4rem]"
      />
      <h1 className="w-[70%] text-xl font-bold">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="my-4 text-sm leading-relaxed text-dCyan">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <section className="flex items-center justify-between w-full my-2">
        <button
          className="px-12 py-4 rounded-full bg-cyan text-[#fff] font-medium"
          onClick={handleBackProject}
        >
          Back this project
        </button>
        <button>
          <img src="./assets/images/icon-bookmark.svg" alt="" />
        </button>
      </section>
    </article>
  );
}
